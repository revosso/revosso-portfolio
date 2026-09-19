"use client"

import { CareersBenefits } from "@/components/careers/careers-benefits"
import { CareersEmptyState } from "@/components/careers/careers-empty-state"
import { CareersHero } from "@/components/careers/careers-hero"
import { JobPositionList } from "@/components/careers/job-position-list"
import { useLandingSite } from "@/components/landing/landing-site-shell"
import type { CareersFileConfig, JobPosition } from "@/lib/careers/types"

type CareersLandingProps = {
  jobs: JobPosition[]
  config: CareersFileConfig
}

export function CareersLanding({ jobs, config }: CareersLandingProps) {
  const { copy } = useLandingSite()
  const careersCopy = copy.careers

  return (
    <main className="flex-1">
      <CareersHero copy={careersCopy.hero} />
      <CareersBenefits copy={careersCopy.whyJoin} />
      <section
        id="open-positions"
        className="py-20 lg:py-32 bg-slate-50 dark:bg-slate-950 scroll-mt-24"
        aria-labelledby="open-positions-heading"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2
              id="open-positions-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white"
            >
              {careersCopy.openPositions.title}
            </h2>
          </div>
          {jobs.length > 0 ? (
            <JobPositionList jobs={jobs} copy={careersCopy.openPositions} />
          ) : (
            <CareersEmptyState copy={careersCopy} config={config} />
          )}
        </div>
      </section>
    </main>
  )
}
