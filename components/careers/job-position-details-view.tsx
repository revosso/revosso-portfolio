"use client"

import { JobPositionDetails } from "@/components/careers/job-position-details"
import { useLandingSite } from "@/components/landing/landing-site-shell"
import type { JobPosition } from "@/lib/careers/types"

type JobPositionDetailsViewProps = {
  job: JobPosition
}

export function JobPositionDetailsView({ job }: JobPositionDetailsViewProps) {
  const { copy, locale } = useLandingSite()
  return <JobPositionDetails job={job} locale={locale} copy={copy.careers} />
}
