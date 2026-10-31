import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"

type PrinciplesSectionProps = {
  copy: LandingLocaleMessages["principles"]
}

export function PrinciplesSection({ copy }: PrinciplesSectionProps) {
  return (
    <section id="principles" aria-labelledby="principles-heading" className="rv-section border-t border-rv-border">
      <Container>
        <SectionHeader id="principles-heading" eyebrow={copy.eyebrow} title={copy.title} />
        <dl className="mt-12 grid gap-x-14 md:mt-16 md:grid-cols-2">
          {copy.items.map((item) => (
            <div key={item.title} className="border-t border-rv-border py-6">
              <dt className="font-medium">{item.title}</dt>
              <dd className="mt-1.5 text-rv-muted">{item.description}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
