import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { translations } from "@/lib/landing-data"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { PrinciplesSection } from "@/components/landing/sections/principles"
import { CalendlyCta } from "@/components/landing/ui/calendly-cta"
import { CompanyFacts, visibleCompanyFacts } from "@/components/landing/ui/company-facts"
import { PageHeader } from "@/components/landing/ui/page-header"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { ServiceCatalog } from "@/components/landing/ui/service-catalog"
import { SocialLinks } from "@/components/landing/ui/social-links"

export async function generateMetadata(): Promise<Metadata> {
  const { aboutPage } = translations[await getLandingLocale()]
  return {
    title: aboutPage.seo.title,
    description: aboutPage.seo.description,
    alternates: { canonical: "/about" },
    openGraph: { title: aboutPage.seo.title, description: aboutPage.seo.description, url: "/about" },
  }
}

export default async function AboutPage() {
  const locale = await getLandingLocale()
  const copy = translations[locale]
  const page = copy.aboutPage

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <section aria-labelledby="about-title" className="rv-band border-b border-rv-border">
          <Container className="pb-16 pt-12 md:pb-20 md:pt-20">
            <PageHeader id="about-title" eyebrow={page.eyebrow} title={page.title} intro={page.intro} />
          </Container>
        </section>

        <section aria-labelledby="story-heading" className="rv-section">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="story-heading" title={page.storyTitle} className="lg:col-span-4" />
            <div className="space-y-5 lg:col-span-8">
              {page.story.map((paragraph) => (
                <p key={paragraph} className="text-lg">
                  {paragraph}
                </p>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="sides-heading" className="rv-section border-t border-rv-border">
          <Container>
            <SectionHeader id="sides-heading" title={page.sidesTitle} />
            <div className="mt-12 grid border-y border-rv-border md:grid-cols-2 md:divide-x md:divide-rv-border">
              {page.sides.map((side, index) => (
                <div key={side.title} className={index === 0 ? "py-8 md:pr-10" : "border-t border-rv-border py-8 md:border-t-0 md:pl-10"}>
                  <h3 className="rv-h3">{side.title}</h3>
                  <p className="mt-3 text-rv-muted">{side.body}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        <section aria-labelledby="about-services-heading" className="rv-section border-t border-rv-border">
          <Container>
            <SectionHeader id="about-services-heading" title={page.servicesTitle} intro={copy.services.intro} />
            <ServiceCatalog catalog={copy.services.catalog} className="mt-12" />
          </Container>
        </section>

        <PrinciplesSection copy={copy.principles} />

        {visibleCompanyFacts(copy.about.facts).length > 0 ? (
          <section aria-labelledby="facts-heading" className="rv-section border-t border-rv-border">
            <Container>
              <SectionHeader id="facts-heading" title={page.factsTitle} />
              <CompanyFacts labels={copy.about.facts} label={page.factsTitle} className="mt-10" />
            </Container>
          </section>
        ) : null}

        <section aria-label={`${page.careersTitle} / ${page.contactTitle}`} data-cta-zone="" className="border-t border-rv-border bg-rv-surface">
          <Container className="grid md:grid-cols-2 md:divide-x md:divide-rv-border">
            <div className="py-14 md:py-20 md:pr-10">
              <h2 className="rv-h2">{page.careersTitle}</h2>
              <p className="mt-4 text-rv-muted">{page.careersBody}</p>
              <Link href="/careers" className="rv-link mt-6 inline-flex min-h-11 items-center gap-1.5">
                {page.careersLink}
                <ArrowRight className="size-4" aria-hidden="true" strokeWidth={1.75} />
              </Link>
            </div>
            <div className="border-t border-rv-border py-14 md:border-t-0 md:py-20 md:pl-10">
              <h2 className="rv-h2">{page.contactTitle}</h2>
              <p className="mt-4 text-rv-muted">{page.contactBody}</p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
                <CalendlyCta
                  label={copy.finalCta.primaryCta}
                  section="about"
                  ctaId="book_call"
                  newTabLabel={copy.a11y.opensInNewTab}
                  size="lg"
                />
                <Link href="/#contact" className="rv-link inline-flex min-h-11 items-center">
                  {page.contactLink}
                </Link>
              </div>
              <div className="mt-8">
                <p className="rv-eyebrow">{copy.footer.followUs}</p>
                <SocialLinks labels={copy.footer.social} className="mt-2" />
              </div>
            </div>
          </Container>
        </section>
      </main>
    </LandingSiteShell>
  )
}
