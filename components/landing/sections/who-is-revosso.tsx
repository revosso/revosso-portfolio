import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { CompanyFacts } from "@/components/landing/ui/company-facts"

type WhoIsRevossoSectionProps = {
  copy: LandingLocaleMessages["about"]
}

export function WhoIsRevossoSection({ copy }: WhoIsRevossoSectionProps) {
  const sides = [
    { title: copy.clientsTitle, body: copy.clientsBody },
    { title: copy.productsTitle, body: copy.productsBody },
  ]

  return (
    <section id="about" aria-labelledby="about-heading" className="rv-section">
      <Container>
        <SectionHeader id="about-heading" eyebrow={copy.eyebrow} title={copy.title} intro={copy.body} className="max-w-3xl" />

        <div className="mt-12 grid border-y border-rv-border md:mt-14 md:grid-cols-2 md:divide-x md:divide-rv-border">
          {sides.map((side, index) => (
            <div key={side.title} className={index === 0 ? "py-8 md:pr-10" : "border-t border-rv-border py-8 md:border-t-0 md:pl-10"}>
              <h3 className="rv-h3">{side.title}</h3>
              <p className="mt-3 text-rv-muted">{side.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <CompanyFacts labels={copy.facts} label={copy.factsLabel} />
          <Link href="/about" className="rv-link inline-flex min-h-11 items-center gap-1.5 self-start md:self-auto">
            {copy.link}
            <ArrowRight className="size-4" aria-hidden="true" strokeWidth={1.75} />
          </Link>
        </div>
      </Container>
    </section>
  )
}
