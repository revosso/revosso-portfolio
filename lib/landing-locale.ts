/**
 * Public marketing site locales (must match translation keys in `lib/landing-translations` / `landing-data`).
 */
export type LandingLocale = "en" | "fr" | "pt-BR" | "es"

export const LANDING_LOCALES: readonly LandingLocale[] = ["en", "fr", "pt-BR", "es"]

/** Shared by the cookie (read on the server) and localStorage (read by the legal pages). */
export const LANDING_LOCALE_STORAGE_KEY = "revosso-locale"

export function isLandingLocale(value: string | null | undefined): value is LandingLocale {
  return !!value && (LANDING_LOCALES as readonly string[]).includes(value)
}

/** Values stored in DB as `app.locale` (Control → Settings). */
export type DbAppLocale = "en" | "fr" | "pt"

export function dbLocaleToLanding(db: string | null | undefined): LandingLocale {
  if (db === "fr") return "fr"
  if (db === "pt") return "pt-BR"
  if (db === "es") return "es"
  return "en"
}

/** Maps a browser language tag or Accept-Language header to a supported locale. */
export function localeFromLanguageTag(tag: string | null | undefined): LandingLocale {
  const value = (tag ?? "").toLowerCase()
  if (value.startsWith("fr")) return "fr"
  if (value.startsWith("pt")) return "pt-BR"
  if (value.startsWith("es")) return "es"
  return "en"
}

export function readLandingLocaleCookie(): LandingLocale | null {
  if (typeof document === "undefined") return null
  const match = document.cookie.match(new RegExp(`(?:^|; )${LANDING_LOCALE_STORAGE_KEY}=([^;]*)`))
  const value = match ? decodeURIComponent(match[1]) : null
  return isLandingLocale(value) ? value : null
}

/** Persists the visitor's choice for both server rendering (cookie) and the client-rendered legal pages. */
export function persistLandingLocale(locale: LandingLocale): void {
  localStorage.setItem(LANDING_LOCALE_STORAGE_KEY, locale)
  document.cookie = `${LANDING_LOCALE_STORAGE_KEY}=${encodeURIComponent(locale)}; path=/; max-age=31536000; samesite=lax`
}

/**
 * Resolve language for the marketing site:
 * 1. Visitor choice in localStorage (`revosso-locale`) wins.
 * 2. Else default from server (`/api/locale` → Control Settings `app.locale`).
 * 3. Else browser language.
 * 4. Else English.
 */
export async function resolveInitialLandingLocale(): Promise<LandingLocale> {
  if (typeof window === "undefined") return "en"

  const saved = localStorage.getItem(LANDING_LOCALE_STORAGE_KEY)
  if (isLandingLocale(saved)) {
    return saved
  }

  try {
    const r = await fetch("/api/locale", { cache: "no-store" })
    if (r.ok) {
      const body = (await r.json()) as { locale?: string }
      if (body.locale) {
        return dbLocaleToLanding(body.locale)
      }
    }
  } catch {
    /* Turso down or network — fall through */
  }

  return localeFromLanguageTag(navigator.language)
}
