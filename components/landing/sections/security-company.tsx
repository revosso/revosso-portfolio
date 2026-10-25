import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { COMPANY } from "@/lib/landing-content"
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

        <div className="border-t border-rv-border pt-8 lg:col-span-5 lg:col-start-8 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
          <h3 className="rv-h3">{copy.company.title}</h3>
          <p className="mt-3 text-rv-muted">{copy.company.body}</p>
          <dl className="mt-6 space-y-3 text-base">
            <div className="flex flex-wrap gap-x-3">
              <dt className="text-rv-muted">{copy.company.legalNameLabel}</dt>
              <dd className="font-medium">{COMPANY.legalName}</dd>
            </div>
            <div className="flex flex-wrap gap-x-3">
              <dt className="text-rv-muted">
                {copy.company.registrationLabel} ({COMPANY.registration.label})
              </dt>
              <dd className="font-medium tabular-nums">{COMPANY.registration.value}</dd>
            </div>
            <div className="flex flex-wrap items-baseline gap-x-3">
              <dt className="text-rv-muted">{copy.company.policiesLabel}</dt>
              <dd className="flex flex-wrap gap-x-4">
                {policies.map((policy) => (
                  <Link key={policy.href} href={policy.href} className="rv-link inline-flex min-h-11 items-center sm:min-h-0">
                    {policy.label}
                  </Link>
                ))}
              </dd>
            </div>
          </dl>
        </div>
      </Container>
    </section>
  )
}
