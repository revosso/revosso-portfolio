import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { COMPANY } from "@/lib/landing-content"
import { cn } from "@/lib/utils"

type FactLabels = LandingLocaleMessages["about"]["facts"]

/** Confirmed company facts only; unconfirmed ones are `null` in `COMPANY` and skipped. */
export function visibleCompanyFacts(labels: FactLabels) {
  return [
    { label: labels.founded, value: COMPANY.foundedYear?.toString() ?? null },
    { label: labels.team, value: COMPANY.teamSize },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value))
}

type CompanyFactsProps = {
  labels: FactLabels
  /** Accessible name for the list. */
  label: string
  className?: string
}

/** Renders nothing until at least one fact is confirmed. */
export function CompanyFacts({ labels, label, className }: CompanyFactsProps) {
  const facts = visibleCompanyFacts(labels)
  if (facts.length === 0) return null

  return (
    <dl aria-label={label} className={cn("flex flex-wrap gap-x-10 gap-y-4", className)}>
      {facts.map((fact) => (
        <div key={fact.label}>
          <dt className="rv-eyebrow">{fact.label}</dt>
          <dd className="mt-1 font-medium tabular-nums">{fact.value}</dd>
        </div>
      ))}
    </dl>
  )
}
