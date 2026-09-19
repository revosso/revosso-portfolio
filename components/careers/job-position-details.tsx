import Link from "next/link"
import { ArrowLeft, CheckCircle } from "lucide-react"
import { ApplicationCta } from "@/components/careers/application-cta"
import { formatJobDate } from "@/lib/careers/format"
import type { JobPosition } from "@/lib/careers/types"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type JobPositionDetailsProps = {
  job: JobPosition
  locale: LandingLocale
  copy: LandingLocaleMessages["careers"]
}

export function JobPositionDetails({ job, locale, copy }: JobPositionDetailsProps) {
  const metaItems = [
    { label: copy.openPositions.department, value: job.department },
    { label: copy.openPositions.location, value: job.location },
    { label: copy.openPositions.employmentType, value: job.employmentType },
    { label: copy.openPositions.workMode, value: job.workMode },
    { label: copy.openPositions.posted, value: job.createdAt ? formatJobDate(job.createdAt, locale) : null },
  ].filter((item): item is { label: string; value: string } => Boolean(item.value))

  return (
    <article className="flex-1">
      <header className="relative overflow-x-hidden py-16 lg:py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
        <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
          <div className="absolute top-16 left-10 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-400/10 rounded-full blur-3xl" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl space-y-6">
          <Link
            href="/careers"
            className="inline-flex items-center text-sm font-medium text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            {copy.details.backToCareers}
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {job.title}
            </span>
          </h1>
          {job.summary ? (
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">{job.summary}</p>
          ) : null}
          {metaItems.length > 0 ? (
            <dl className="grid sm:grid-cols-2 gap-4 pt-2">
              {metaItems.map((item) => (
                <div key={item.label}>
                  <dt className="text-sm text-slate-500 dark:text-slate-400">{item.label}</dt>
                  <dd className="text-slate-900 dark:text-white font-medium">{item.value}</dd>
                </div>
              ))}
            </dl>
          ) : null}
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl pb-20 lg:pb-32 space-y-12">
        {job.description ? (
          <section aria-labelledby="job-overview-heading" className="space-y-4">
            <h2 id="job-overview-heading" className="text-2xl font-semibold text-slate-900 dark:text-white">
              {copy.details.overview}
            </h2>
            <JobDescription text={job.description} />
          </section>
        ) : null}

        <JobListSection heading={copy.details.responsibilities} items={job.responsibilities} />
        <JobListSection heading={copy.details.requirements} items={job.requirements} />
        <JobListSection heading={copy.details.niceToHave} items={job.niceToHave} />
        {job.compensation ? (
          <section aria-labelledby="job-compensation-heading" className="space-y-4">
            <h2 id="job-compensation-heading" className="text-2xl font-semibold text-slate-900 dark:text-white">
              {copy.details.compensation}
            </h2>
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{job.compensation}</p>
          </section>
        ) : null}
        <JobListSection heading={copy.details.benefits} items={job.benefits} />

        <section aria-labelledby="job-apply-heading" className="space-y-4 border-t border-slate-200 dark:border-slate-800 pt-10">
          <h2 id="job-apply-heading" className="text-2xl font-semibold text-slate-900 dark:text-white">
            {copy.details.howToApply}
          </h2>
          {job.applicationNotes ? (
            <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">{job.applicationNotes}</p>
          ) : null}
          <ApplicationCta
            applicationUrl={job.applicationUrl}
            applicationEmail={job.applicationEmail}
            jobTitle={job.title}
            copy={copy.apply}
          />
        </section>
      </div>
    </article>
  )
}

function JobDescription({ text }: { text: string }) {
  const paragraphs = text
    .split(/\n\n+/)
    .map((paragraph) => paragraph.trim())
    .filter((paragraph) => paragraph.length > 0)

  return (
    <div className="space-y-4 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
      {paragraphs.map((paragraph) => (
        <p key={paragraph} className="whitespace-pre-line">
          {paragraph}
        </p>
      ))}
    </div>
  )
}

function JobListSection({ heading, items }: { heading: string; items: string[] }) {
  if (items.length === 0) return null

  const headingId = heading.toLowerCase().replace(/\s+/g, "-")

  return (
    <section aria-labelledby={headingId} className="space-y-4">
      <h2 id={headingId} className="text-2xl font-semibold text-slate-900 dark:text-white">
        {heading}
      </h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-start text-slate-600 dark:text-slate-300">
            <CheckCircle className="h-5 w-5 text-blue-500 dark:text-blue-400 mr-3 mt-0.5 flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
