import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"

type ProcessSectionProps = {
  copy: LandingLocaleMessages["process"]
}

export function ProcessSection({ copy }: ProcessSectionProps) {
  return (
    <section id="process" aria-labelledby="process-heading" className="rv-section border-t border-rv-border">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <SectionHeader
          id="process-heading"
          eyebrow={copy.eyebrow}
          title={copy.title}
          intro={copy.intro}
          className="lg:sticky lg:top-28 lg:col-span-4 lg:self-start"
        />

        <ol className="lg:col-span-8">
          {copy.steps.map((step, index) => (
            <li
              key={step.title}
              className="grid grid-cols-[3.25rem_1fr] gap-x-5 border-t border-rv-border py-7 first:border-t-0 first:pt-0 md:grid-cols-[4.5rem_1fr] md:py-9"
            >
              <span aria-hidden="true" className="text-3xl font-medium leading-none tracking-tight text-rv-muted tabular-nums md:text-4xl">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="rv-h3">{step.title}</h3>
                <p className="mt-2 text-rv-muted">{step.description}</p>
                <p className="mt-3 text-base">
                  <span className="text-rv-muted">{copy.youGet}: </span>
                  {step.deliverable}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
