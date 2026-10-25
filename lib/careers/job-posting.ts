import type { Job } from "@/content/careers/jobs"
import { COMPANY } from "@/lib/landing-content"
import type { LandingLocale } from "@/lib/landing-locale"

const EMPLOYMENT_TYPES: Record<Job["employmentType"], string[]> = {
  "full-time-or-part-time": ["FULL_TIME", "PART_TIME"],
}

/**
 * schema.org JobPosting built only from confirmed data. Fields we don't have
 * (applicantLocationRequirements, baseSalary, validThrough unless a deadline is set)
 * are left out rather than guessed.
 */
export function buildJobPostingJsonLd(job: Job, locale: LandingLocale, siteUrl: string, logoUrl: string) {
  const copy = job.copy[locale]
  const description = [copy.summary, ...copy.overview]
    .map((paragraph) => `<p>${paragraph}</p>`)
    .concat(
      `<ul>${copy.responsibilities.map((item) => `<li>${item}</li>`).join("")}</ul>`,
      `<ul>${copy.requirements.map((item) => `<li>${item}</li>`).join("")}</ul>`,
    )
    .join("")

  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: copy.title,
    description,
    inLanguage: locale,
    datePosted: job.datePosted,
    ...(job.dateModified ? { dateModified: job.dateModified } : {}),
    ...(job.applicationDeadline ? { validThrough: job.applicationDeadline } : {}),
    employmentType: EMPLOYMENT_TYPES[job.employmentType],
    ...(job.workMode === "remote" ? { jobLocationType: "TELECOMMUTE" } : {}),
    hiringOrganization: {
      "@type": "Organization",
      name: COMPANY.legalName,
      sameAs: siteUrl,
      logo: logoUrl,
    },
    identifier: { "@type": "PropertyValue", name: COMPANY.legalName, value: job.slug },
    url: `${siteUrl}/careers/${job.slug}`,
  }
}
