import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowUpRight, ChevronRight } from "lucide-react"
import { PRODUCTS, getProduct } from "@/content/products"
import { translations } from "@/lib/landing-data"
import { COMPANY } from "@/lib/landing-content"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { PLATFORM_SCREENSHOTS, type PlatformScreenshotKey } from "@/lib/platform-screenshots"
import { SITE_NAME, getSiteUrl } from "@/lib/site"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { buttonVariants } from "@/components/landing/ui/button"
import { CalendlyCta } from "@/components/landing/ui/calendly-cta"
import { BrowserFrame, PhoneFrame, Screenshot } from "@/components/landing/ui/media"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { ProductCard } from "@/components/landing/ui/product-card"
import { TrackedLink } from "@/components/landing/ui/tracked-link"

type ProductPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({ slug: product.slug }))
}

export const dynamicParams = false

/** 1200px headline crop: a legible share image that stays well under OG size limits. */
function shareImage(shot: PlatformScreenshotKey) {
  return PLATFORM_SCREENSHOTS[`${shot}-1200` as PlatformScreenshotKey] ?? PLATFORM_SCREENSHOTS[shot]
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const product = getProduct((await params).slug)
  if (!product) return {}
  const copy = product.copy[await getLandingLocale()]
  const image = shareImage(product.shots.hero)
  const path = `/products/${product.slug}`

  return {
    title: copy.seo.title,
    description: copy.seo.description,
    alternates: { canonical: path },
    openGraph: {
      title: copy.seo.title,
      description: copy.seo.description,
      url: path,
      images: [{ url: image.src, width: image.width, height: image.height, alt: copy.alt.desktop }],
    },
    twitter: { card: "summary_large_image", images: [image.src] },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const product = getProduct((await params).slug)
  if (!product) notFound()

  const locale = await getLandingLocale()
  const copy = translations[locale]
  const page = copy.productPage
  const item = product.copy[locale]
  const siteUrl = getSiteUrl()
  const others = PRODUCTS.filter((p) => p.slug !== product.slug)

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: product.name,
      description: item.overview,
      url: product.url,
      applicationCategory: product.schemaCategory,
      operatingSystem: product.operatingSystem,
      inLanguage: product.siteLanguage,
      image: `${siteUrl}${shareImage(product.shots.hero).src}`,
      publisher: { "@type": "Organization", name: COMPANY.legalName, url: siteUrl },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: SITE_NAME, item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: page.breadcrumb, item: `${siteUrl}/products` },
        { "@type": "ListItem", position: 3, name: product.name, item: `${siteUrl}/products/${product.slug}` },
      ],
    },
  ]

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <section aria-labelledby="product-title" className="border-b border-rv-border">
          <Container className="pb-12 pt-10 md:pb-16 md:pt-14">
            <nav aria-label={page.breadcrumb}>
              <ol className="flex items-center gap-1.5 text-sm text-rv-muted">
                <li>
                  <Link href="/products" className="inline-flex min-h-11 items-center hover:text-rv-text">
                    {page.breadcrumb}
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="size-3.5" strokeWidth={1.75} />
                </li>
                <li aria-current="page" className="text-rv-text">
                  {product.name}
                </li>
              </ol>
            </nav>

            <div className="mt-6 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <p className="rv-eyebrow inline-flex items-center gap-2">
                  <span aria-hidden="true" className="size-1.5 rounded-full bg-emerald-600 dark:bg-emerald-400" />
                  {page.status}
                </p>
                <h1 id="product-title" className="rv-h1 mt-4">
                  {product.name}
                </h1>
                <p className="mt-4 text-lg md:text-xl">{item.tagline}</p>
                {item.languageNote ? <p className="mt-3 text-base text-rv-muted">{item.languageNote}</p> : null}
              </div>
              <TrackedLink
                href={product.url}
                external
                event="platform_click"
                eventProps={{ platform: product.slug, section: "product_page" }}
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                {page.visitLive}
                <ArrowUpRight aria-hidden="true" strokeWidth={1.75} />
                <span className="sr-only">{copy.a11y.opensInNewTab}</span>
              </TrackedLink>
            </div>
          </Container>
        </section>

        <section aria-label={page.gallery} className="border-b border-rv-border bg-rv-surface-2/60">
          <Container className="grid items-end gap-8 py-12 md:py-16 lg:grid-cols-12">
            <BrowserFrame host={product.host} className="lg:col-span-9">
              <Screenshot
                shot={product.shots.desktop}
                alt={item.alt.desktop}
                sizes="(min-width: 1280px) 860px, (min-width: 1024px) 72vw, 90vw"
                priority
              />
            </BrowserFrame>
            <PhoneFrame className="mx-auto w-[46%] max-w-[240px] lg:col-span-3 lg:w-full">
              <Screenshot shot={product.shots.mobile} alt={item.alt.mobile} sizes="(min-width: 1024px) 240px, 46vw" />
            </PhoneFrame>
          </Container>
        </section>

        <section aria-labelledby="overview-heading" className="rv-section">
          <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="overview-heading" title={page.overview} className="lg:col-span-4" />
            <p className="text-lg lg:col-span-8">{item.overview}</p>
          </Container>
        </section>

        <section aria-labelledby="features-heading" className="rv-section border-t border-rv-border">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="features-heading" title={page.whatItDoes} className="lg:col-span-4" />
            <div className="lg:col-span-8">
              <ol className="grid gap-x-10 sm:grid-cols-2">
                {item.features.map((feature, index) => (
                  <li key={feature} className="grid grid-cols-[2rem_1fr] gap-x-3 border-t border-rv-border py-4">
                    <span aria-hidden="true" className="text-sm font-medium text-rv-muted tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ol>

              <h3 className="rv-eyebrow mt-10">{page.whoFor}</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {item.audience.map((tag) => (
                  <li key={tag} className="rounded-[4px] border border-rv-border px-2.5 py-1 text-sm">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </section>

        {product.subProducts ? (
          <section aria-labelledby="subproducts-heading" className="rv-section border-t border-rv-border">
            <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <SectionHeader id="subproducts-heading" title={page.subProducts} className="lg:col-span-4" />
              <dl className="lg:col-span-8">
                {product.subProducts.map((sub) => (
                  <div key={sub.name} className="grid gap-2 border-t border-rv-border py-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                    <dt className="font-medium">{sub.name}</dt>
                    <dd className="text-rv-muted">{sub.description[locale]}</dd>
                  </div>
                ))}
              </dl>
            </Container>
          </section>
        ) : null}

        <section aria-labelledby="built-heading" className="rv-section border-t border-rv-border">
          <Container className="grid gap-8 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="built-heading" title={page.builtByTitle} className="lg:col-span-4" />
            <p className="text-lg lg:col-span-8">{page.builtByBody.replace("{name}", product.name)}</p>
          </Container>
        </section>

        <section aria-labelledby="cta-heading" data-cta-zone="" className="border-t border-rv-border bg-rv-surface-2/60">
          <Container className="flex flex-col gap-6 py-14 md:flex-row md:items-center md:justify-between md:py-20">
            <h2 id="cta-heading" className="rv-h2 max-w-xl text-balance">
              {page.ctaTitle}
            </h2>
            <CalendlyCta
              label={page.ctaButton}
              section="product_page"
              ctaId="talk_to_us"
              newTabLabel={copy.a11y.opensInNewTab}
              size="lg"
              className="self-start md:self-auto"
            />
          </Container>
        </section>

        <section aria-labelledby="others-heading" className="rv-section border-t border-rv-border">
          <Container>
            <SectionHeader id="others-heading" title={page.otherProducts} />
            <ul className="mt-10 grid gap-x-8 gap-y-12 sm:grid-cols-3">
              {others.map((other) => (
                <li key={other.slug} className="flex">
                  <ProductCard
                    product={other}
                    locale={locale}
                    learnMore={copy.products.learnMore}
                    learnMoreAbout={copy.products.learnMoreAbout}
                    sizes="(min-width: 1280px) 370px, (min-width: 640px) 30vw, 90vw"
                    className="w-full"
                  />
                </li>
              ))}
            </ul>
          </Container>
        </section>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </LandingSiteShell>
  )
}
