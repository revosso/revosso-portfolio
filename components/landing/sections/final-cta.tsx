import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { CalendlyCta } from "@/components/landing/ui/calendly-cta"
import { Container } from "@/components/landing/ui/primitives"
import { SocialLinks } from "@/components/landing/ui/social-links"
import { ContactForm } from "@/components/landing/sections/contact-form"

type FinalCtaSectionProps = {
  copy: LandingLocaleMessages["finalCta"]
  formCopy: LandingLocaleMessages["contactForm"]
  footer: LandingLocaleMessages["footer"]
  a11y: LandingLocaleMessages["a11y"]
  locale: LandingLocale
}

export function FinalCtaSection({ copy, formCopy, footer, a11y, locale }: FinalCtaSectionProps) {
  return (
    <section
      id="contact"
      data-cta-zone=""
      aria-labelledby="contact-heading"
      className="rv-section border-t border-rv-border bg-rv-surface-2/60"
    >
      <Container className="grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <p className="rv-eyebrow">{copy.eyebrow}</p>
          <h2 id="contact-heading" className="mt-2 text-[clamp(2.25rem,4vw,3.25rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            {copy.title}
          </h2>
          <p className="mt-5 max-w-md text-lg text-rv-muted">{copy.body}</p>
          <CalendlyCta
            label={copy.primaryCta}
            section="final_cta"
            ctaId="book_call"
            newTabLabel={a11y.opensInNewTab}
            size="lg"
            className="mt-8 w-full sm:w-auto"
          />
          <div className="mt-10">
            <p className="rv-eyebrow">{footer.followUs}</p>
            <SocialLinks labels={footer.social} className="mt-2" />
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <p className="mb-6 font-medium">{copy.formIntro}</p>
          <ContactForm copy={formCopy} locale={locale} />
        </div>
      </Container>
    </section>
  )
}
