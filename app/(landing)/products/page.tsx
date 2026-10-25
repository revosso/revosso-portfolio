import type { Metadata } from "next"
import { PRODUCTS } from "@/content/products"
import { translations } from "@/lib/landing-data"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { FinalCtaSection } from "@/components/landing/sections/final-cta"
import { PageHeader } from "@/components/landing/ui/page-header"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { ProductCard } from "@/components/landing/ui/product-card"

export async function generateMetadata(): Promise<Metadata> {
  const { productsPage } = translations[await getLandingLocale()]
  return {
    title: productsPage.seo.title,
    description: productsPage.seo.description,
    alternates: { canonical: "/products" },
    openGraph: { title: productsPage.seo.title, description: productsPage.seo.description, url: "/products" },
  }
}

export default async function ProductsPage() {
  const locale = await getLandingLocale()
  const copy = translations[locale]
  const page = copy.productsPage

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <section aria-labelledby="products-title" className="border-b border-rv-border">
          <Container className="pb-16 pt-12 md:pb-20 md:pt-20">
            <PageHeader id="products-title" eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
          </Container>
        </section>

        <div className="rv-section">
          <Container>
            <ul className="grid gap-x-10 gap-y-16 md:grid-cols-2">
              {PRODUCTS.map((product) => (
                <li key={product.slug} className="flex">
                  <ProductCard
                    product={product}
                    locale={locale}
                    learnMore={copy.products.learnMore}
                    learnMoreAbout={copy.products.learnMoreAbout}
                    headingLevel="h2"
                    sizes="(min-width: 1280px) 560px, (min-width: 768px) 46vw, 90vw"
                    className="w-full"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </div>

        <section aria-labelledby="how-heading" className="rv-section border-t border-rv-border">
          <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="how-heading" title={page.howTitle} className="lg:col-span-5" />
            <p className="text-lg lg:col-span-7">{page.howBody}</p>
          </Container>
        </section>

        <FinalCtaSection
          copy={copy.finalCta}
          formCopy={copy.contactForm}
          footer={copy.footer}
          a11y={copy.a11y}
          locale={locale}
        />
      </main>
    </LandingSiteShell>
  )
}
