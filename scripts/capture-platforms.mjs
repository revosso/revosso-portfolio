#!/usr/bin/env node
/**
 * Captures the top of each live Revosso product site and writes optimized
 * WebP screenshots plus a typed manifest (with blur placeholders) for next/image.
 *
 *   pnpm capture:platforms
 *
 * Optional env:
 *   CAPTURE_ONLY=revofin,rechajem   capture a subset
 *   CAPTURE_TEXT_DIR=/tmp/rv-text    also dump each page's visible text (for copy review)
 *
 *   pnpm capture:platforms --crops-only
 *     regenerate the headline crops from existing desktop captures without hitting the sites
 *
 *   pnpm capture:platforms --logos
 *     download each product's logo (override URL, then apple-touch-icon, icon, og:image)
 *     to public/platforms/logos/{id}.png as a 128x128 PNG
 *
 * Uses the locally installed Google Chrome (no Playwright browser download).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { chromium } from "playwright"
import sharp from "sharp"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const OUT_DIR = path.join(ROOT, "public/platforms")
const MANIFEST = path.join(ROOT, "lib/platform-screenshots.ts")

const PRODUCTS = [
  { id: "revofin", url: "https://revofin.app", extraLocales: ["pt-BR"] },
  {
    id: "revomaket",
    url: "https://revomaket.com",
    logoUrl: "https://storage.revosso.com/logos/revomaket/revomaket-logo.jpg",
  },
  { id: "rechajem", url: "https://rechajem.com" },
  { id: "revokonek", url: "https://www.revokonek.com" },
]

const DEVICES = {
  desktop: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 },
  mobile: {
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true,
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1",
  },
}

/**
 * Headline crops (CSS px of the 1440x900 desktop capture) so text stays legible
 * when a screenshot renders small. All are 16:10.
 */
const HERO_CROPS = {
  revofin: { left: 80, top: 0, width: 1280, height: 800 },
  revomaket: { left: 0, top: 0, width: 960, height: 600 },
  rechajem: { left: 0, top: 0, width: 1120, height: 700 },
  revokonek: { left: 140, top: 0, width: 1040, height: 650 },
}

const WEBP_QUALITY = 85
const RESIZED_WIDTH = 1200
const SETTLE_MS = 1500

const COOKIE_BUTTON =
  /^(accept( all)?( cookies)?|allow( all)?( cookies)?|i agree|agree|got it|ok|okay|aceitar( todos)?( os cookies)?|aceito|concordo|entendi|accepter( tout)?|aceptar( todo)?|j'accepte)$/i

/** App-install prompts and promo modals that cover the page on first visit. */
const DISMISS_BUTTON = /^(continue on web|continue in browser|continuar na web|continuer sur le web|continuar en la web|not now|no thanks|close|fechar|fermer|cerrar|×|✕)$/i

const COOKIE_HINT = /cookie|cookies|consent|lgpd|gdpr|rgpd|privacidade|confidentialit/i
const LOGIN_HINT = /\b(sign in|log in|login|entrar|iniciar sesión|se connecter)\b/i

const only = process.env.CAPTURE_ONLY?.split(",").map((s) => s.trim()).filter(Boolean)
const textDir = process.env.CAPTURE_TEXT_DIR

async function clickFirstVisible(page, name) {
  for (const frame of page.frames()) {
    const buttons = frame.getByRole("button", { name })
    const count = await buttons.count().catch(() => 0)
    for (let i = 0; i < count; i++) {
      const button = buttons.nth(i)
      if (await button.isVisible().catch(() => false)) {
        await button.click({ timeout: 2000 }).catch(() => {})
        await page.waitForTimeout(400)
        return true
      }
    }
  }
  return false
}

async function dismissOverlays(page) {
  const cookie = await clickFirstVisible(page, COOKIE_BUTTON)
  const modal = (await page.locator('[role="dialog"]:visible, [aria-modal="true"]:visible').count()) > 0
  const prompt = modal ? await clickFirstVisible(page, DISMISS_BUTTON) : false
  return { cookieDismissed: cookie, modalDismissed: prompt }
}

/** Heuristics for the report only; a human still reviews every image. */
async function inspect(page) {
  return page.evaluate(
    ({ cookieHint, loginHint }) => {
      const cookie = new RegExp(cookieHint, "i")
      const login = new RegExp(loginHint, "i")
      const vh = window.innerHeight
      const visibleText = (el) => {
        const r = el.getBoundingClientRect()
        const style = getComputedStyle(el)
        return r.width > 0 && r.height > 0 && r.top < vh && style.visibility !== "hidden" && style.display !== "none"
      }
      const overlays = [...document.querySelectorAll("body *")].filter((el) => {
        const style = getComputedStyle(el)
        return (style.position === "fixed" || style.position === "sticky") && visibleText(el) && cookie.test(el.textContent || "")
      })
      const bodyText = document.body?.innerText || ""
      const passwordField = !!document.querySelector('input[type="password"]')
      const openDialog = [...document.querySelectorAll('[role="dialog"], [aria-modal="true"]')].some(visibleText)
      return {
        title: document.title,
        textLength: bodyText.trim().length,
        cookieOverlay: overlays.length > 0,
        modalOpen: openDialog,
        loginWall: passwordField && bodyText.trim().length < 1500 && login.test(bodyText),
      }
    },
    { cookieHint: COOKIE_HINT.source, loginHint: LOGIN_HINT.source },
  )
}

async function blurDataURL(buffer) {
  const tiny = await sharp(buffer).resize(16).webp({ quality: 40 }).toBuffer()
  return `data:image/webp;base64,${tiny.toString("base64")}`
}

async function writeVariant(name, png) {
  const image = sharp(png)
  const { width, height } = await image.metadata()
  const full = await image.webp({ quality: WEBP_QUALITY }).toBuffer()
  await writeFile(path.join(OUT_DIR, `${name}.webp`), full)

  const entries = {
    [name]: { src: `/platforms/${name}.webp`, width, height, blurDataURL: await blurDataURL(png) },
  }

  if (width > RESIZED_WIDTH) {
    const resized = await sharp(png).resize(RESIZED_WIDTH).webp({ quality: WEBP_QUALITY }).toBuffer()
    const meta = await sharp(resized).metadata()
    const resizedName = `${name}-${RESIZED_WIDTH}`
    await writeFile(path.join(OUT_DIR, `${resizedName}.webp`), resized)
    entries[resizedName] = {
      src: `/platforms/${resizedName}.webp`,
      width: meta.width,
      height: meta.height,
      blurDataURL: entries[name].blurDataURL,
    }
  }
  return entries
}

async function writeHeroCrops(ids) {
  const entries = {}
  for (const id of ids) {
    const crop = HERO_CROPS[id]
    if (!crop) continue
    const scale = DEVICES.desktop.deviceScaleFactor
    const region = Object.fromEntries(Object.entries(crop).map(([k, v]) => [k, v * scale]))
    const png = await sharp(path.join(OUT_DIR, `${id}-desktop.webp`)).extract(region).png().toBuffer()
    Object.assign(entries, await writeVariant(`${id}-hero`, png))
  }
  return entries
}

const LOGO_DIR = path.join(OUT_DIR, "logos")
const LOGO_SIZE = 128

/** Candidate logo URLs from the page head, best first. `.ico` is skipped: sharp can't decode it. */
async function logoCandidates(product) {
  const html = await fetch(product.url, { redirect: "follow" }).then((r) => r.text())
  const base = new URL(product.url)
  const tags = html.match(/<(link|meta)\b[^>]*>/gi) ?? []
  const attr = (tag, name) => tag.match(new RegExp(`${name}=["']([^"']+)["']`, "i"))?.[1]
  const pick = (test, key) => tags.filter(test).map((t) => attr(t, key)).filter(Boolean)
  const found = [
    ...pick((t) => /rel=["']apple-touch-icon/i.test(t), "href"),
    ...pick((t) => /rel=["'](shortcut )?icon["']/i.test(t), "href"),
    ...pick((t) => /property=["']og:image["']/i.test(t), "content"),
  ]
  return [product.logoUrl, ...found]
    .filter(Boolean)
    .map((href) => new URL(href, base).href)
    .filter((href) => !/\.ico(\?|$)/i.test(href))
}

async function writeLogos(ids) {
  await mkdir(LOGO_DIR, { recursive: true })
  for (const product of PRODUCTS.filter((p) => ids.includes(p.id))) {
    let saved = null
    for (const url of await logoCandidates(product)) {
      try {
        const res = await fetch(url, { redirect: "follow" })
        if (!res.ok) continue
        const input = Buffer.from(await res.arrayBuffer())
        // Trim baked-in padding so every mark fills its tile the same way.
        const trimmed = await sharp(input, { density: 512 }).trim({ threshold: 12 }).png().toBuffer()
        await sharp(trimmed)
          .resize(LOGO_SIZE, LOGO_SIZE, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
          .png()
          .toFile(path.join(LOGO_DIR, `${product.id}.png`))
        saved = url
        break
      } catch {
        // Try the next candidate.
      }
    }
    console.log(JSON.stringify({ logo: product.id, source: saved ?? "MISSING" }))
  }
}

async function readExistingManifest() {
  try {
    const source = await readFile(MANIFEST, "utf8")
    const json = source.match(/PLATFORM_SCREENSHOTS = (\{[\s\S]*\}) as const/)?.[1]
    return json ? JSON.parse(json) : {}
  } catch {
    return {}
  }
}

async function writeManifest(manifest) {
  const sorted = Object.fromEntries(Object.entries(manifest).sort(([a], [b]) => a.localeCompare(b)))
  const source = `// Generated by scripts/capture-platforms.mjs. Do not edit by hand.

export type PlatformScreenshot = {
  src: string
  width: number
  height: number
  blurDataURL: string
}

export const PLATFORM_SCREENSHOTS = ${JSON.stringify(sorted, null, 2)} as const satisfies Record<string, PlatformScreenshot>

export type PlatformScreenshotKey = keyof typeof PLATFORM_SCREENSHOTS
`
  await writeFile(MANIFEST, source)
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  if (textDir) await mkdir(textDir, { recursive: true })

  const ids = PRODUCTS.map((p) => p.id).filter((id) => !only || only.includes(id))

  if (process.argv.includes("--logos")) {
    await writeLogos(ids)
    return
  }

  if (process.argv.includes("--crops-only")) {
    const manifest = { ...(await readExistingManifest()), ...(await writeHeroCrops(ids)) }
    await writeManifest(manifest)
    console.log(`Wrote headline crops for ${ids.join(", ")}.`)
    return
  }

  const browser = await chromium.launch({ channel: "chrome", headless: true })
  const manifest = only ? await readExistingManifest() : {}
  const report = []

  try {
    for (const product of PRODUCTS) {
      if (only && !only.includes(product.id)) continue
      const locales = [
        { locale: "en-US", suffix: "" },
        ...(product.extraLocales ?? []).map((locale) => ({ locale, suffix: `-${locale.toLowerCase().replace("-", "")}` })),
      ]

      for (const { locale, suffix } of locales) {
        for (const [device, options] of Object.entries(DEVICES)) {
          const name = `${product.id}${suffix}-${device}`
          const context = await browser.newContext({
            ...options,
            locale,
            reducedMotion: "reduce",
            extraHTTPHeaders: { "Accept-Language": `${locale},${locale.split("-")[0]};q=0.9` },
          })
          const page = await context.newPage()
          const entry = { name, url: product.url, locale }
          try {
            const response = await page.goto(product.url, { waitUntil: "load", timeout: 45000 })
            entry.status = response?.status()
            // Some sites keep polling; a loaded page that never goes idle is still capturable.
            entry.networkIdle = await page
              .waitForLoadState("networkidle", { timeout: 20000 })
              .then(() => true)
              .catch(() => false)
            entry.finalUrl = page.url()
            await page.waitForTimeout(SETTLE_MS)
            Object.assign(entry, await dismissOverlays(page))
            await page.evaluate(() => window.scrollTo(0, 0))
            await page.waitForTimeout(300)
            Object.assign(entry, await inspect(page))

            if (textDir && device === "desktop") {
              const text = await page.evaluate(() => document.body.innerText)
              await writeFile(path.join(textDir, `${product.id}${suffix}.txt`), text)
            }

            const png = await page.screenshot({ type: "png" })
            Object.assign(manifest, await writeVariant(name, png))
          } catch (error) {
            entry.error = error instanceof Error ? error.message.split("\n")[0] : String(error)
          } finally {
            await context.close()
          }
          report.push(entry)
          console.log(JSON.stringify(entry))
        }
      }
    }
  } finally {
    await browser.close()
  }

  Object.assign(manifest, await writeHeroCrops(ids))
  await writeManifest(manifest)

  const problems = report.filter((r) => r.error || r.status >= 400 || r.cookieOverlay || r.modalOpen || r.loginWall || r.textLength < 50)
  console.log(`\n${report.length} captures, ${problems.length} flagged for review.`)
  if (problems.some((p) => p.error)) process.exitCode = 1
}

await main()
