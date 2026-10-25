import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { ServiceCatalog } from "@/components/landing/ui/service-catalog"

type ServicesSectionProps = {
  copy: LandingLocaleMessages["services"]
}

export function ServicesSection({ copy }: ServicesSectionProps) {
  return (
    <section id="services" aria-labelledby="services-heading" className="rv-section border-t border-rv-border">
      <Container>
        <SectionHeader id="services-heading" eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
        <ServiceCatalog catalog={copy.catalog} className="mt-12 md:mt-14" />

        <h3 className="rv-h3 mt-20 md:mt-24 md:text-2xl">{copy.engagementTitle}</h3>
        <ol className="mt-8 border-b border-rv-border">
          {copy.steps.map((step) => (
            <li key={step.title} className="grid gap-4 border-t border-rv-border py-8 md:grid-cols-12 md:gap-8 md:py-10">
              <h4 className="rv-h3 md:col-span-3">{step.title}</h4>
              <div className="md:col-span-5">
                <p>{step.description}</p>
                <ul className="mt-3 space-y-1 text-rv-muted">
                  {step.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-4">
                <p className="rv-eyebrow">{copy.youGet}</p>
                <p className="mt-1.5">{step.deliverables}</p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
