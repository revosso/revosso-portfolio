import type React from "react"
import { PRODUCTS } from "@/content/products"
import { translations } from "@/lib/landing-data"
import { SERVICE_IDS } from "@/lib/landing-content"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingFooter } from "@/components/landing/landing-footer"
import { LandingHeader } from "@/components/landing/landing-header"
import { LandingSiteProvider } from "@/components/landing/landing-site-provider"

type LandingSiteShellProps = {
  /** Pages render their own `<main id="main-content">`. */
  children: React.ReactNode
}

export async function LandingSiteShell({ children }: LandingSiteShellProps) {
  const locale = await getLandingLocale()
  const copy = translations[locale]
  const menuProducts = PRODUCTS.map((p) => ({
    slug: p.slug,
    name: p.name,
    category: p.category,
    logo: p.logo,
    url: p.url,
    description: p.copy[locale].menuDescription,
    subProducts: (p.subProducts ?? []).map((sub) => ({ tag: sub.tag, url: sub.url })),
  }))
  const menuServices = SERVICE_IDS.map((id) => ({ id, ...copy.services.catalog[id] }))

  return (
    <LandingSiteProvider locale={locale}>
      <div lang={locale} className="rv-site flex min-h-screen flex-col bg-rv-bg text-rv-text">
        <a href="#main-content" className="rv-skip-link">
          {copy.a11y.skipToContent}
        </a>
        <LandingHeader
          nav={copy.nav}
          a11y={copy.a11y}
          megaMenu={copy.megaMenu}
          locale={locale}
          products={menuProducts}
          services={menuServices}
        />
        {children}
        <LandingFooter copy={copy.footer} services={copy.services.catalog} a11y={copy.a11y} />
      </div>
    </LandingSiteProvider>
  )
}
