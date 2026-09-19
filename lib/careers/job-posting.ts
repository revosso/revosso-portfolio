import { getSiteUrl } from "@/lib/careers/jobs"
import type { JobPosition } from "@/lib/careers/types"

export type JobPostingJsonLd = {
  "@context": "https://schema.org"
  "@type": "JobPosting"
  title: string
  description: string
  datePosted: string
  hiringOrganization: {
    "@type": "Organization"
    name: string
    sameAs: string
  }
  identifier: {
    "@type": "PropertyValue"
    name: string
    value: string
  }
  url: string
  dateModified?: string
  employmentType?: string
  jobLocationType?: "TELECOMMUTE"
  jobLocation?: {
    "@type": "Place"
    address: {
      "@type": "PostalAddress"
      addressLocality: string
    }
  }
}

const REMOTE_PATTERN = /\b(remote|télétravail|teletravail|remoto|hybrid|hybride)\b/i

export function isPublicJob(job: JobPosition): boolean {
  return job.status === "open" && job.published
}

export function buildJobPostingJsonLd(job: JobPosition, siteUrl: string = getSiteUrl()): JobPostingJsonLd | null {
  if (!isPublicJob(job)) return null
  if (!job.title.trim() || !job.description.trim() || !job.createdAt) return null

  const remoteFromMode = job.workMode ? REMOTE_PATTERN.test(job.workMode) : false
  const remoteFromLocation = job.location ? REMOTE_PATTERN.test(job.location) : false
  const remote = remoteFromMode || remoteFromLocation
  if (!job.location && !remote) return null
  const physicalLocation =
    job.location && !REMOTE_PATTERN.test(job.location) ? job.location : null

  const posting: JobPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title: job.title,
    description: job.description,
    datePosted: job.createdAt,
    hiringOrganization: {
      "@type": "Organization",
      name: "Revosso",
      sameAs: siteUrl,
    },
    identifier: {
      "@type": "PropertyValue",
      name: "Revosso",
      value: job.id,
    },
    url: `${siteUrl}/careers/${job.slug}`,
  }

  if (job.updatedAt) {
    posting.dateModified = job.updatedAt
  }
  if (job.employmentType) {
    posting.employmentType = job.employmentType
  }
  if (remote) {
    posting.jobLocationType = "TELECOMMUTE"
  }
  if (physicalLocation) {
    posting.jobLocation = {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: physicalLocation,
      },
    }
  }

  return posting
}
