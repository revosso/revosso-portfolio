import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { COMPANY } from "@/lib/landing-content"
import { cn } from "@/lib/utils"

type CompanyFactsProps = {
  labels: LandingLocaleMessages["about"]["facts"]
  /** Accessible name for the list. */
  label: string
  className?: string
}

/** Only facts with confirmed values render; unconfirmed ones are `null` in `COMPANY`. */
export function CompanyFacts({ labels, label, className }: CompanyFactsProps) {
  const facts = [
    { label: labels.legalEntity, value: COMPANY.legalName },
    { label: labels.registration, value: COMPANY.registration.value },
    { label: labels.founded, value: COMPANY.foundedYear?.toString() ?? null },
    { label: labels.team, value: COMPANY.teamSize },
    { label: labels.locations, value: COMPANY.locations },
  ].filter((fact): fact is { label: string; value: string } => Boolean(fact.value))

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
