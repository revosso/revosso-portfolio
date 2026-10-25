"use client"

import { useEffect, useRef, useState, useTransition, type MouseEvent } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import * as Accordion from "@radix-ui/react-accordion"
import * as Dialog from "@radix-ui/react-dialog"
import { ArrowLeft, ArrowRight, ChevronDown, ChevronRight, Globe, Menu, X } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { BrandMark } from "@/components/landing/brand-mark"
import { LandingThemeToggle } from "@/components/landing/landing-theme-toggle"
import {
  ProductMenuCard,
  ProductsMegaMenu,
  type MegaMenuCopy,
  type MenuProduct,
  type MenuService,
} from "@/components/landing/products-mega-menu"
import { buttonVariants } from "@/components/landing/ui/button"
import { CalendlyCta } from "@/components/landing/ui/calendly-cta"
import { LANDING_LOCALES, persistLandingLocale, type LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { cn } from "@/lib/utils"

const LOCALE_LABELS: Record<LandingLocale, string> = {
  en: "EN",
  fr: "FR",
  "pt-BR": "PT",
  es: "ES",
}

/** Matches Tailwind `xl`; the full nav doesn't fit translated labels below it. */
const DESKTOP_NAV_QUERY = "(min-width: 1280px)"

const LOCALE_NAMES: Record<LandingLocale, string> = {
  en: "English",
  fr: "Français",
  "pt-BR": "Português",
  es: "Español",
}

type LandingHeaderProps = {
  nav: LandingLocaleMessages["nav"]
  a11y: LandingLocaleMessages["a11y"]
  megaMenu: MegaMenuCopy
  locale: LandingLocale
  products: MenuProduct[]
  services: MenuService[]
}

const desktopLinkClass =
  "inline-flex min-h-11 items-center rounded-rv px-3 text-[15px] text-rv-muted transition-colors hover:text-rv-text aria-[current=page]:text-rv-text"

export function LandingHeader({ nav, a11y, megaMenu, locale, products, services }: LandingHeaderProps) {
  const pathname = usePathname()
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [ctaZoneVisible, setCtaZoneVisible] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [drawerView, setDrawerView] = useState<"main" | "products">("main")
  const [isSwitchingLocale, startTransition] = useTransition()
  const pendingAnchor = useRef<string | null>(null)
  const drawerProductsRef = useRef<HTMLButtonElement>(null)
  const sheetBackRef = useRef<HTMLButtonElement>(null)
  const lastDrawerView = useRef(drawerView)

  const before = [{ label: nav.services, href: "/#services" }]
  const after = [
    { label: nav.about, href: "/about" },
    { label: nav.careers, href: "/careers" },
    { label: nav.contact, href: "/#contact" },
  ]
  const isCurrent = (href: string) => (!href.startsWith("/#") && pathname === href ? "page" : undefined)
  const productsActive = pathname === "/products" || pathname.startsWith("/products/")
  const categories = [...new Set(products.map((p) => p.category))]

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const desktop = window.matchMedia(DESKTOP_NAV_QUERY)
    const onChange = (e: MediaQueryListEvent) => {
      if (e.matches) setMenuOpen(false)
    }
    desktop.addEventListener("change", onChange)
    return () => desktop.removeEventListener("change", onChange)
  }, [])

  // Sections marked `data-cta-zone` own a primary CTA; the header CTA steps down while they are visible.
  useEffect(() => {
    const zones = document.querySelectorAll("[data-cta-zone]")
    if (zones.length === 0) {
      setCtaZoneVisible(false)
      return
    }
    const visible = new Set<Element>()
    const io = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) visible.add(entry.target)
        else visible.delete(entry.target)
      }
      setCtaZoneVisible(visible.size > 0)
    })
    zones.forEach((zone) => io.observe(zone))
    return () => io.disconnect()
  }, [pathname])

  // Switching drawer views unmounts the focused control; keep focus on the matching control in the new view.
  useEffect(() => {
    if (lastDrawerView.current === drawerView) return
    lastDrawerView.current = drawerView
    if (!menuOpen) return
    if (drawerView === "products") sheetBackRef.current?.focus()
    else drawerProductsRef.current?.focus()
  }, [drawerView, menuOpen])

  const changeLocale = (next: string) => {
    const nextLocale = next as LandingLocale
    if (nextLocale === locale) return
    persistLandingLocale(nextLocale)
    startTransition(() => router.refresh())
  }

  const onDrawerOpenChange = (open: boolean) => {
    setMenuOpen(open)
    if (!open) setDrawerView("main")
  }

  // The drawer's scroll lock swallows in-page navigation, so same-page anchors scroll once it has closed.
  const handleDrawerLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (pathname === "/" && href.startsWith("/#")) {
      e.preventDefault()
      pendingAnchor.current = href.slice(1)
    }
    onDrawerOpenChange(false)
  }

  const scrollToPendingAnchor = () => {
    const hash = pendingAnchor.current
    if (!hash) return
    pendingAnchor.current = null
    requestAnimationFrame(() => {
      document.querySelector(hash)?.scrollIntoView()
      window.history.replaceState(null, "", hash)
    })
  }

  const ctaVariant = isScrolled && !ctaZoneVisible ? "primary" : "outline"

  const drawerLink = (href: string, label: string) => (
    <Link
      href={href}
      aria-current={isCurrent(href)}
      onClick={(e) => handleDrawerLinkClick(e, href)}
      className="flex min-h-14 items-center text-lg font-medium"
    >
      {label}
    </Link>
  )

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-rv-bg transition-colors duration-200",
        isScrolled || menuOpen ? "border-rv-border" : "border-transparent",
      )}
    >
      <div className="rv-container flex h-16 items-center justify-between gap-4 lg:h-[72px]">
        <Link href="/" aria-label={a11y.home} className="inline-flex min-h-11 items-center rounded-rv">
          <BrandMark />
        </Link>

        <nav aria-label={a11y.primaryNav} className="hidden xl:block">
          <ul className="flex items-center gap-1">
            {before.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={desktopLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <ProductsMegaMenu
                label={nav.products}
                copy={megaMenu}
                products={products}
                services={services}
                newTabLabel={a11y.opensInNewTab}
                active={productsActive}
              />
            </li>
            {after.map((link) => (
              <li key={link.href}>
                <Link href={link.href} aria-current={isCurrent(link.href)} className={desktopLinkClass}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-1 xl:flex">
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger
              aria-label={a11y.changeLanguage}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-rv px-3 text-sm text-rv-muted outline-none transition-colors hover:bg-rv-surface-2 hover:text-rv-text data-[state=open]:text-rv-text"
            >
              <Globe className="size-4" aria-hidden="true" strokeWidth={1.75} />
              {LOCALE_LABELS[locale]}
              <ChevronDown className="size-3 opacity-70" aria-hidden="true" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="rv-portal min-w-[7rem] border-rv-border bg-rv-surface text-rv-text">
              <DropdownMenuRadioGroup value={locale} onValueChange={changeLocale}>
                {LANDING_LOCALES.map((l) => (
                  <DropdownMenuRadioItem key={l} value={l} lang={l} className="min-h-10 cursor-pointer">
                    {LOCALE_NAMES[l]}
                  </DropdownMenuRadioItem>
                ))}
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          <LandingThemeToggle label={a11y.toggleTheme} />
          <CalendlyCta
            label={nav.cta}
            section="header"
            ctaId="book_call"
            newTabLabel={a11y.opensInNewTab}
            variant={ctaVariant}
            size="sm"
            className="ml-2"
          />
        </div>

        <Dialog.Root open={menuOpen} onOpenChange={onDrawerOpenChange}>
          <Dialog.Trigger
            aria-label={a11y.openMenu}
            className="inline-flex size-11 items-center justify-center rounded-rv text-rv-text hover:bg-rv-surface-2 xl:hidden"
          >
            <Menu className="size-6" aria-hidden="true" strokeWidth={1.5} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-[60] bg-black/40 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:animate-in data-[state=open]:fade-in-0 motion-reduce:animate-none xl:hidden" />
            <Dialog.Content
              aria-describedby={undefined}
              onCloseAutoFocus={scrollToPendingAnchor}
              className="rv-portal fixed inset-y-0 right-0 z-[60] flex h-dvh w-full flex-col overflow-y-auto border-l border-rv-border bg-rv-bg px-4 pb-6 text-rv-text data-[state=closed]:animate-out data-[state=closed]:slide-out-to-right data-[state=open]:animate-in data-[state=open]:slide-in-from-right motion-reduce:animate-none sm:max-w-md sm:px-6 xl:hidden"
            >
              {drawerView === "main" ? (
                <>
                  <div className="flex h-16 shrink-0 items-center justify-between">
                    <Dialog.Title className="rv-eyebrow">{a11y.menuTitle}</Dialog.Title>
                    <Dialog.Close
                      aria-label={a11y.closeMenu}
                      className="inline-flex size-11 items-center justify-center rounded-rv hover:bg-rv-surface-2"
                    >
                      <X className="size-6" aria-hidden="true" strokeWidth={1.5} />
                    </Dialog.Close>
                  </div>

                  <nav aria-label={a11y.primaryNav} className="mt-2">
                    <ul className="divide-y divide-rv-border border-y border-rv-border">
                      {before.map((link) => (
                        <li key={link.href}>{drawerLink(link.href, link.label)}</li>
                      ))}
                      <li>
                        <button
                          ref={drawerProductsRef}
                          type="button"
                          onClick={() => setDrawerView("products")}
                          className="flex min-h-14 w-full items-center justify-between text-left text-lg font-medium"
                        >
                          {nav.products}
                          <ChevronRight className="size-5" aria-hidden="true" strokeWidth={1.5} />
                        </button>
                      </li>
                      {after.map((link) => (
                        <li key={link.href}>{drawerLink(link.href, link.label)}</li>
                      ))}
                    </ul>
                  </nav>

                  <div className="mt-8 space-y-3">
                    <p id="mobile-language-label" className="text-sm font-medium text-rv-muted">
                      {a11y.language}
                    </p>
                    <div role="group" aria-labelledby="mobile-language-label" className="flex flex-wrap items-center gap-2">
                      {LANDING_LOCALES.map((l) => (
                        <button
                          key={l}
                          type="button"
                          aria-pressed={locale === l}
                          aria-label={LOCALE_NAMES[l]}
                          lang={l}
                          disabled={isSwitchingLocale}
                          onClick={() => changeLocale(l)}
                          className={cn(
                            "inline-flex min-h-11 min-w-12 items-center justify-center rounded-rv border px-4 text-sm font-medium transition-colors",
                            locale === l ? "border-rv-text text-rv-text" : "border-rv-border text-rv-muted hover:text-rv-text",
                          )}
                        >
                          {LOCALE_LABELS[l]}
                        </button>
                      ))}
                      <LandingThemeToggle label={a11y.toggleTheme} />
                    </div>
                  </div>

                  <div className="mt-auto pt-8">
                    <CalendlyCta
                      label={nav.cta}
                      section="mobile_menu"
                      ctaId="book_call"
                      newTabLabel={a11y.opensInNewTab}
                      size="lg"
                      className="w-full"
                      onClick={() => onDrawerOpenChange(false)}
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="flex h-16 shrink-0 items-center justify-between">
                    <button
                      ref={sheetBackRef}
                      type="button"
                      onClick={() => setDrawerView("main")}
                      className="-ml-2 inline-flex min-h-11 items-center gap-2 rounded-rv px-2 text-sm font-medium hover:bg-rv-surface-2"
                    >
                      <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.75} />
                      {megaMenu.back}
                    </button>
                    <Dialog.Close
                      aria-label={a11y.closeMenu}
                      className="inline-flex size-11 items-center justify-center rounded-rv hover:bg-rv-surface-2"
                    >
                      <X className="size-6" aria-hidden="true" strokeWidth={1.5} />
                    </Dialog.Close>
                  </div>
                  <Dialog.Title className="rv-h2 mt-2">{nav.products}</Dialog.Title>

                  <Accordion.Root type="single" collapsible className="mt-6 border-t border-rv-border" aria-label={megaMenu.categoriesLabel}>
                    {categories.map((category) => (
                      <Accordion.Item key={category} value={category} className="border-b border-rv-border">
                        <Accordion.Header>
                          <Accordion.Trigger className="group flex min-h-14 w-full items-center justify-between text-left text-base font-medium">
                            {megaMenu.categories[category]}
                            <ChevronDown
                              aria-hidden="true"
                              strokeWidth={1.5}
                              className="size-5 transition-transform duration-150 group-data-[state=open]:rotate-180 motion-reduce:transition-none"
                            />
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                          <ul className="space-y-3 pb-4">
                            {products
                              .filter((p) => p.category === category)
                              .map((product) => (
                                <li key={product.slug}>
                                  <ProductMenuCard
                                    product={product}
                                    copy={megaMenu}
                                    newTabLabel={a11y.opensInNewTab}
                                    onNavigate={() => onDrawerOpenChange(false)}
                                  />
                                </li>
                              ))}
                          </ul>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>

                  <div className="mt-auto pt-8">
                    <Link
                      href="/products"
                      onClick={() => onDrawerOpenChange(false)}
                      className={cn(buttonVariants({ variant: "primary", size: "lg" }), "w-full")}
                    >
                      {megaMenu.exploreAll}
                      <ArrowRight aria-hidden="true" strokeWidth={1.75} />
                    </Link>
                  </div>
                </>
              )}
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  )
}
