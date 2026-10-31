import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"

type SecurityCompanySectionProps = {
  copy: LandingLocaleMessages["security"]
  legalLinks: { privacy: string; terms: string; security: string }
}

export function SecurityCompanySection({ copy, legalLinks }: SecurityCompanySectionProps) {
  const policies = [
    { href: "/security", label: legalLinks.security },
    { href: "/privacy", label: legalLinks.privacy },
    { href: "/terms", label: legalLinks.terms },
  ]

  return (
    <section id="security" aria-labelledby="security-heading" className="rv-section border-t border-rv-border">
      <Container className="grid gap-14 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader id="security-heading" eyebrow={copy.eyebrow} title={copy.title} />
          <p className="mt-5 max-w-xl text-rv-muted">{copy.body}</p>
          <Link href="/security" className="rv-link mt-6 inline-flex min-h-11 items-center gap-1.5">
            {copy.link}
            <ArrowRight className="size-4" aria-hidden="true" strokeWidth={1.75} />
          </Link>
        </div>

        <nav
          aria-labelledby="policies-heading"
          className="border-t border-rv-border pt-8 lg:col-span-5 lg:col-start-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0"
        >
          <h3 id="policies-heading" className="rv-h3">
            {copy.policiesLabel}
          </h3>
          <ul className="mt-4 divide-y divide-rv-border border-y border-rv-border">
            {policies.map((policy) => (
              <li key={policy.href}>
                <Link
                  href={policy.href}
                  className="flex min-h-12 items-center justify-between gap-4 text-base transition-colors hover:text-rv-accent"
                >
                  {policy.label}
                  <ArrowRight className="size-4 text-rv-muted" aria-hidden="true" strokeWidth={1.75} />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </section>
  )
}
