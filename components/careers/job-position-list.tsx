import { JobPositionCard } from "@/components/careers/job-position-card"
import type { JobPosition } from "@/lib/careers/types"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type JobPositionListProps = {
  jobs: JobPosition[]
  copy: LandingLocaleMessages["careers"]["openPositions"]
}

export function JobPositionList({ jobs, copy }: JobPositionListProps) {
  return (
    <ul className="grid md:grid-cols-2 gap-8 list-none">
      {jobs.map((job) => (
        <li key={job.id}>
          <JobPositionCard job={job} copy={copy} />
        </li>
      ))}
    </ul>
  )
}
