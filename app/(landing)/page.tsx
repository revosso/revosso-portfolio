import type { Metadata } from "next"
import { translations } from "@/lib/landing-data"
import { COMPANY, CONTACT_EMAIL, SOCIAL_LINKS } from "@/lib/landing-content"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { hasPlaceholder } from "@/lib/placeholders"
import { REVOSSO_LOGO_URL } from "@/lib/brand"
import { SITE_DESCRIPTION, SITE_NAME, getSiteUrl } from "@/lib/site"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { HeroSection } from "@/components/landing/sections/hero"
import { WhoIsRevossoSection } from "@/components/landing/sections/who-is-revosso"
import { ServicesSection } from "@/components/landing/sections/services"
import { ProductsSection } from "@/components/landing/sections/products"
import { WhoWeHelpSection } from "@/components/landing/sections/who-we-help"
import { ProcessSection } from "@/components/landing/sections/process"
import { SecurityCompanySection } from "@/components/landing/sections/security-company"
import { FaqSection } from "@/components/landing/sections/faq"
import { FinalCtaSection } from "@/components/landing/sections/final-cta"

export const metadata: Metadata = {
  alternates: { canonical: "/" },
}

export default async function LandingPage() {
  const locale = await getLandingLocale()
  const copy = translations[locale]
  const siteUrl = getSiteUrl()

  // Unconfirmed answers stay off the page and out of search results until their placeholders are filled in.
  const faqItems = copy.faq.items.filter((item) => !hasPlaceholder(item.answer))

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_NAME,
      legalName: COMPANY.legalName,
      url: siteUrl,
      logo: REVOSSO_LOGO_URL,
      email: CONTACT_EMAIL,
      description: SITE_DESCRIPTION,
      sameAs: SOCIAL_LINKS.map((link) => link.url),
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: locale,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ]

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <HeroSection copy={copy.hero} a11y={copy.a11y} locale={locale} />
        <WhoIsRevossoSection copy={copy.about} />
        <ServicesSection copy={copy.services} />
        <ProductsSection copy={copy.products} locale={locale} />
        <WhoWeHelpSection copy={copy.whoWeHelp} a11y={copy.a11y} />
        <ProcessSection copy={copy.process} />
        <SecurityCompanySection copy={copy.security} legalLinks={copy.footer.links} />
        <FaqSection copy={{ eyebrow: copy.faq.eyebrow, title: copy.faq.title }} items={faqItems} />
        <FinalCtaSection
          copy={copy.finalCta}
          formCopy={copy.contactForm}
          footer={copy.footer}
          a11y={copy.a11y}
          locale={locale}
        />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
    </LandingSiteShell>
  )
}
