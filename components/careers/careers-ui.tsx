import { Mail } from "lucide-react"
import type { Job } from "@/content/careers/jobs"
import { formatJobDate } from "@/lib/careers/format"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/landing/ui/button"

type CareersCopy = LandingLocaleMessages["careers"]

/** Department · Location · Type, each shown once. */
export function jobMetaLine(job: Job, copy: CareersCopy): string {
  return [
    copy.values.department[job.department],
    copy.values.location[job.location],
    copy.values.employmentType[job.employmentType],
  ].join(" · ")
}

/** Summary card rows. Work mode only appears when it says something the location doesn't. */
export function jobSummaryItems(job: Job, copy: CareersCopy, locale: LandingLocale) {
  const location = copy.values.location[job.location]
  const workMode = copy.values.workMode[job.workMode]
  return [
    { label: copy.labels.department, value: copy.values.department[job.department] },
    { label: copy.labels.location, value: location },
    { label: copy.labels.employmentType, value: copy.values.employmentType[job.employmentType] },
    ...(workMode !== location ? [{ label: copy.labels.workMode, value: workMode }] : []),
    { label: copy.labels.posted, value: formatJobDate(job.datePosted, locale) },
  ]
}

export function applicationMailto(email: string, title: string, copy: CareersCopy): string {
  const subject = copy.application.subject.replace("{title}", title)
  const body = copy.application.body.replaceAll("{title}", title)
  return `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
}

type ApplyByEmailProps = {
  email: string
  title: string
  copy: CareersCopy
  className?: string
}

export function ApplyByEmail({ email, title, copy, className }: ApplyByEmailProps) {
  return (
    <a href={applicationMailto(email, title, copy)} className={cn(buttonVariants({ variant: "primary", size: "lg" }), className)}>
      <Mail aria-hidden="true" strokeWidth={1.75} />
      {copy.details.apply}
    </a>
  )
}

/** Renders a sentence containing `{email}` with the address as a mailto link. */
export function EmailSentence({ text, email, className }: { text: string; email: string; className?: string }) {
  const [before, after = ""] = text.split("{email}")
  return (
    <p className={className}>
      {before}
      <a href={`mailto:${email}`} className="rv-link">
        {email}
      </a>
      {after}
    </p>
  )
}
