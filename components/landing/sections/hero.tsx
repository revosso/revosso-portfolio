import { ArrowRight } from "lucide-react"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { buttonVariants } from "@/components/landing/ui/button"
import { CalendlyCta } from "@/components/landing/ui/calendly-cta"
import { Container } from "@/components/landing/ui/primitives"
import { TrackedLink } from "@/components/landing/ui/tracked-link"
import { HeroShowcase } from "@/components/landing/sections/hero-showcase"

type HeroSectionProps = {
  copy: LandingLocaleMessages["hero"]
  a11y: LandingLocaleMessages["a11y"]
  locale: LandingLocale
}

export function HeroSection({ copy, a11y, locale }: HeroSectionProps) {
  return (
    <section id="top" data-cta-zone="" aria-labelledby="hero-heading" className="rv-band border-b border-rv-border">
      <Container className="grid gap-10 pb-16 pt-8 md:pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.12fr)] lg:items-center lg:gap-14 lg:pb-20 lg:pt-16">
        <div>
          <p className="rv-eyebrow">{copy.eyebrow}</p>
          <h1 id="hero-heading" className="rv-h1 mt-4 text-balance">
            {copy.title}
          </h1>
          <p className="mt-5 max-w-xl text-rv-muted md:text-lg">{copy.subtitle}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CalendlyCta
              label={copy.primaryCta}
              section="hero"
              ctaId="book_call"
              newTabLabel={a11y.opensInNewTab}
              size="lg"
            />
            <TrackedLink
              href="/products"
              event="cta_click"
              eventProps={{ section: "hero", cta: "see_products" }}
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              {copy.secondaryCta}
              <ArrowRight aria-hidden="true" strokeWidth={1.75} />
            </TrackedLink>
          </div>
        </div>

        <HeroShowcase locale={locale} caption={copy.showcaseCaption} />
      </Container>
    </section>
  )
}
