"use client"

import { useCallback, useEffect, useId, useRef, useState, type KeyboardEvent, type PointerEvent } from "react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, ArrowUpRight, ChevronDown, ChevronRight, X } from "lucide-react"
import type { ProductCategory } from "@/content/products"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { track } from "@/lib/analytics"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/landing/ui/button"

export type MenuProduct = {
  slug: string
  name: string
  category: ProductCategory
  logo: string
  url: string
  description: string
  subProducts: { tag: string; url: string }[]
}

export type MenuService = { id: string; name: string; description: string }

export type MegaMenuCopy = LandingLocaleMessages["megaMenu"]

type CategoryId = "all" | ProductCategory

const OPEN_DELAY = 80
const CLOSE_DELAY = 200

/** Moves focus between sibling elements matching `selector` inside `container`. */
function moveFocus(container: HTMLElement | null, selector: string, current: Element | null, step: number | "first" | "last") {
  if (!container) return null
  const items = [...container.querySelectorAll<HTMLElement>(selector)]
  if (items.length === 0) return null
  const index = items.indexOf(current as HTMLElement)
  const next =
    step === "first" ? items[0] : step === "last" ? items[items.length - 1] : items[(index + step + items.length) % items.length]
  next.focus()
  return next
}

/** Columns in a CSS grid, measured from the rendered card positions. */
function gridColumns(cards: HTMLElement[]) {
  if (cards.length === 0) return 1
  const top = cards[0].getBoundingClientRect().top
  return Math.max(1, cards.filter((card) => Math.abs(card.getBoundingClientRect().top - top) < 2).length)
}

type ProductMenuCardProps = {
  product: MenuProduct
  copy: MegaMenuCopy
  newTabLabel: string
  onNavigate?: () => void
}

export function ProductMenuCard({ product, copy, newTabLabel, onNavigate }: ProductMenuCardProps) {
  return (
    <article
      data-menu-card=""
      className="flex h-full flex-col rounded-rv-frame border border-rv-border bg-rv-surface p-5 transition-colors hover:border-rv-text/25 hover:bg-rv-text/5 focus-within:border-rv-text/25"
    >
      <div className="flex items-center gap-3">
        <span className="flex size-10 shrink-0 items-center justify-center overflow-hidden rounded-rv border border-rv-border bg-rv-logo-tile">
          <Image src={product.logo} alt="" width={40} height={40} className="size-10 object-contain" />
        </span>
        <h3 className="text-base font-semibold">{product.name}</h3>
      </div>
      <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-rv-muted">{product.description}</p>

      {product.subProducts.length > 0 ? (
        <ul aria-label={copy.subProductsLabel.replace("{name}", product.name)} className="mt-3 flex flex-wrap gap-1.5">
          {product.subProducts.map((sub) => (
            <li key={sub.url}>
              <a
                href={sub.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("platform_click", { platform: product.slug, section: "mega_menu", sub: sub.tag })}
                className="inline-flex rounded-[4px] border border-rv-border px-2 py-0.5 text-xs text-rv-muted transition-colors hover:border-rv-text/30 hover:text-rv-text"
              >
                {sub.tag}
                <span className="sr-only"> {newTabLabel}</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1 pt-4">
        <Link
          href={`/products/${product.slug}`}
          data-card-link=""
          onClick={onNavigate}
          className="inline-flex min-h-9 items-center gap-1.5 text-sm font-medium text-rv-accent hover:underline hover:underline-offset-4"
        >
          {copy.learnMore}
          <span className="sr-only">: {product.name}</span>
          <ArrowRight className="size-3.5" aria-hidden="true" strokeWidth={1.75} />
        </Link>
        <a
          href={product.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("platform_click", { platform: product.slug, section: "mega_menu" })}
          className="inline-flex min-h-9 items-center gap-1 text-xs text-rv-muted transition-colors hover:text-rv-text"
        >
          {copy.visitLive}
          <ArrowUpRight className="size-3" aria-hidden="true" strokeWidth={1.75} />
          <span className="sr-only">
            : {product.name} {newTabLabel}
          </span>
        </a>
      </div>
    </article>
  )
}

type ProductsMegaMenuProps = {
  label: string
  copy: MegaMenuCopy
  products: MenuProduct[]
  services: MenuService[]
  newTabLabel: string
  active: boolean
}

/** Desktop only (`xl`+). Mobile uses the sheet in the header drawer. */
export function ProductsMegaMenu({ label, copy, products, services, newTabLabel, active }: ProductsMegaMenuProps) {
  const pathname = usePathname()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const [tab, setTab] = useState<"products" | "services">("products")
  const [category, setCategory] = useState<CategoryId>("all")
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined)
  const hoverOpenedAt = useRef(0)

  const categories: CategoryId[] = ["all", ...new Set(products.map((p) => p.category))]
  const visible = category === "all" ? products : products.filter((p) => p.category === category)

  const clearTimer = () => clearTimeout(timer.current)

  const close = useCallback((returnFocus: boolean) => {
    clearTimeout(timer.current)
    setOpen(false)
    if (returnFocus) triggerRef.current?.focus()
  }, [])

  const show = () => {
    clearTimer()
    setOpen(true)
  }

  useEffect(() => close(false), [pathname, close])

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => {
      if (e.key === "Escape") close(true)
    }
    const onPointer = (e: globalThis.PointerEvent) => {
      const target = e.target as Node
      if (!panelRef.current?.contains(target) && !triggerRef.current?.contains(target)) close(false)
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("pointerdown", onPointer)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("pointerdown", onPointer)
    }
  }, [open, close])

  useEffect(() => clearTimer, [])

  // Hover opens and closes with a delay so moving between trigger and panel doesn't flicker.
  const onHoverEnter = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return
    clearTimer()
    if (!open) {
      timer.current = setTimeout(() => {
        hoverOpenedAt.current = Date.now()
        setOpen(true)
      }, OPEN_DELAY)
    }
  }
  const onHoverLeave = (e: PointerEvent) => {
    if (e.pointerType !== "mouse") return
    clearTimer()
    timer.current = setTimeout(() => setOpen(false), CLOSE_DELAY)
  }

  // A click right after a hover-open is the same intent; don't let it toggle the menu shut.
  const onTriggerClick = () => {
    if (!open) return show()
    if (Date.now() - hoverOpenedAt.current > 600) close(false)
  }

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowDown") return
    e.preventDefault()
    show()
    requestAnimationFrame(() => panelRef.current?.querySelector<HTMLElement>('[aria-selected="true"][role="tab"]')?.focus())
  }

  const onTabsKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowLeft" && e.key !== "ArrowRight") return
    e.preventDefault()
    const next = moveFocus(e.currentTarget, '[role="tab"]', document.activeElement, e.key === "ArrowRight" ? 1 : -1)
    next?.click()
  }

  const onCategoriesKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    const steps: Record<string, number | "first" | "last"> = { ArrowDown: 1, ArrowUp: -1, Home: "first", End: "last" }
    if (!(e.key in steps)) return
    e.preventDefault()
    const next = moveFocus(e.currentTarget, "[data-category]", document.activeElement, steps[e.key])
    if (next) setCategory(next.dataset.category as CategoryId)
  }

  const onCardsKeyDown = (e: KeyboardEvent<HTMLUListElement>) => {
    if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(e.key)) return
    const current = (document.activeElement as HTMLElement | null)?.closest("[data-menu-card]")
    if (!current) return
    const cards = [...e.currentTarget.querySelectorAll<HTMLElement>("[data-menu-card]")]
    const cols = gridColumns(cards)
    const delta = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: cols, ArrowUp: -cols }[e.key] ?? 0
    const target = cards[cards.indexOf(current as HTMLElement) + delta]
    if (!target) return
    e.preventDefault()
    target.querySelector<HTMLElement>("[data-card-link]")?.focus()
  }

  const tabId = (name: string) => `${panelId}-tab-${name}`
  const tabPanelId = (name: string) => `${panelId}-panel-${name}`

  return (
    <div>
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={onTriggerClick}
        onKeyDown={onTriggerKeyDown}
        onPointerEnter={onHoverEnter}
        onPointerLeave={onHoverLeave}
        className={cn(
          "group inline-flex min-h-11 items-center gap-1 rounded-rv px-3 text-[15px] text-rv-muted transition-colors hover:text-rv-text aria-expanded:text-rv-text",
          active && "text-rv-text",
        )}
      >
        {label}
        <ChevronDown
          aria-hidden="true"
          strokeWidth={1.75}
          className="size-3.5 transition-transform duration-150 group-aria-expanded:rotate-180 motion-reduce:transition-none"
        />
      </button>

      {open ? (
        <>
          <div
            aria-hidden="true"
            onClick={() => close(true)}
            className="fixed inset-x-0 bottom-0 top-[73px] bg-rv-scrim animate-in fade-in-0 duration-150 motion-reduce:animate-none"
          />
          <div
            ref={panelRef}
            id={panelId}
            role="region"
            aria-label={copy.label}
            onPointerEnter={onHoverEnter}
            onPointerLeave={onHoverLeave}
            className="absolute inset-x-0 top-full max-h-[calc(100dvh-73px)] overflow-y-auto border-b border-rv-border bg-rv-surface-raised shadow-rv-frame animate-in fade-in-0 slide-in-from-top-1 duration-150 motion-reduce:animate-none"
          >
            <div className="rv-container py-6">
              <div className="flex items-center justify-between gap-6 border-b border-rv-border pb-4">
                <div role="tablist" aria-label={copy.label} onKeyDown={onTabsKeyDown} className="flex gap-1">
                  {(["products", "services"] as const).map((name) => (
                    <button
                      key={name}
                      id={tabId(name)}
                      type="button"
                      role="tab"
                      aria-selected={tab === name}
                      aria-controls={tabPanelId(name)}
                      tabIndex={tab === name ? 0 : -1}
                      onClick={() => setTab(name)}
                      className="min-h-10 rounded-rv px-3.5 text-sm font-medium text-rv-muted transition-colors hover:text-rv-text aria-selected:bg-rv-text/[0.07] aria-selected:text-rv-text"
                    >
                      {name === "products" ? copy.productsTab : copy.servicesTab}
                    </button>
                  ))}
                </div>
                <div className="flex items-center gap-2">
                  <Link href="/products" className="rv-link inline-flex min-h-10 items-center gap-1.5 text-sm">
                    {copy.exploreAll}
                    <ArrowRight className="size-4" aria-hidden="true" strokeWidth={1.75} />
                  </Link>
                  <button
                    type="button"
                    aria-label={copy.close}
                    onClick={() => close(true)}
                    className="inline-flex size-10 items-center justify-center rounded-rv text-rv-muted transition-colors hover:bg-rv-text/5 hover:text-rv-text"
                  >
                    <X className="size-5" aria-hidden="true" strokeWidth={1.5} />
                  </button>
                </div>
              </div>

              {tab === "products" ? (
                <div
                  id={tabPanelId("products")}
                  role="tabpanel"
                  aria-labelledby={tabId("products")}
                  className="grid gap-8 pt-6 lg:grid-cols-[260px_minmax(0,1fr)]"
                >
                  <div className="flex flex-col">
                    <ul aria-label={copy.categoriesLabel} onKeyDown={onCategoriesKeyDown} className="space-y-0.5">
                      {categories.map((id) => {
                        const selected = category === id
                        return (
                          <li key={id}>
                            <button
                              type="button"
                              data-category={id}
                              aria-pressed={selected}
                              tabIndex={selected ? 0 : -1}
                              onClick={() => setCategory(id)}
                              onPointerEnter={(e) => e.pointerType === "mouse" && setCategory(id)}
                              className={cn(
                                "flex min-h-10 w-full items-center justify-between rounded-full px-4 text-left text-sm transition-colors",
                                selected
                                  ? "bg-rv-accent/10 font-medium text-rv-accent"
                                  : "text-rv-muted hover:bg-rv-text/5 hover:text-rv-text",
                              )}
                            >
                              {copy.categories[id]}
                              {selected ? <ChevronRight className="size-4" aria-hidden="true" strokeWidth={1.75} /> : null}
                            </button>
                          </li>
                        )
                      })}
                    </ul>
                    <Link href="/products" className={cn(buttonVariants({ variant: "primary", size: "md" }), "mt-6 self-start")}>
                      {copy.exploreAll}
                      <ArrowRight aria-hidden="true" strokeWidth={1.75} />
                    </Link>
                  </div>

                  <div>
                    <h2 className="text-lg font-semibold" aria-live="polite">
                      {copy.categories[category]}
                    </h2>
                    {/* Two columns: next to the 260px sidebar, four would truncate each description to a few words. */}
                    <ul onKeyDown={onCardsKeyDown} className="mt-4 grid grid-cols-2 gap-4">
                      {visible.map((product) => (
                        <li key={product.slug}>
                          <ProductMenuCard product={product} copy={copy} newTabLabel={newTabLabel} onNavigate={() => close(false)} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ) : (
                <div id={tabPanelId("services")} role="tabpanel" aria-labelledby={tabId("services")} className="pt-6">
                  <h2 className="text-lg font-semibold">{copy.servicesHeading}</h2>
                  <ul className="mt-4 grid grid-cols-4 gap-4">
                    {services.map((service) => (
                      <li key={service.id}>
                        <Link
                          href="/#services"
                          onClick={() => close(false)}
                          className="block h-full rounded-rv-frame border border-rv-border bg-rv-surface p-5 transition-colors hover:border-rv-text/25 hover:bg-rv-text/5"
                        >
                          <span className="block text-base font-semibold">{service.name}</span>
                          <span className="mt-2 block text-sm leading-relaxed text-rv-muted">{service.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}
