import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { CALENDLY_URL } from "@/lib/landing-content"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { TrackedLink } from "@/components/landing/ui/tracked-link"

/** Order matches `whoWeHelp.items`. Stable ids for analytics. */
const CTA_IDS = ["start_build", "rescue_codebase", "take_over_ops"]

type WhoWeHelpSectionProps = {
  copy: LandingLocaleMessages["whoWeHelp"]
  a11y: LandingLocaleMessages["a11y"]
}

/** The page's only three-column row: text columns divided by rules, no cards. */
export function WhoWeHelpSection({ copy, a11y }: WhoWeHelpSectionProps) {
  return (
    <section id="who-we-help" aria-labelledby="who-we-help-heading" className="rv-section border-t border-rv-border">
      <Container>
        <SectionHeader id="who-we-help-heading" eyebrow={copy.eyebrow} title={copy.title} />
        <ul className="mt-12 grid divide-y divide-rv-border border-y border-rv-border md:mt-16 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          {copy.items.map((item, index) => (
            <li key={item.title} className="flex flex-col py-8 lg:px-8 lg:py-10 lg:first:pl-0 lg:last:pr-0">
              <h3 className="rv-h3">{item.title}</h3>
              <p className="mt-3 flex-1 text-rv-muted">{item.body}</p>
              <TrackedLink
                href={CALENDLY_URL}
                external
                event="cta_click"
                eventProps={{ section: "who_we_help", cta: CTA_IDS[index], destination: "calendly" }}
                className="rv-link mt-6 inline-flex min-h-11 items-center self-start"
              >
                {item.cta}
                <span className="sr-only"> {a11y.opensInNewTab}</span>
              </TrackedLink>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
