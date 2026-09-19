import { CareersLanding } from "@/components/careers/careers-landing"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { getCareersFileConfig, getOpenJobPositions } from "@/lib/careers/jobs"
import { careersListingMetadata } from "@/lib/careers/metadata"

export const metadata = careersListingMetadata()

export default function CareersPage() {
  const jobs = getOpenJobPositions()
  const config = getCareersFileConfig()

  return (
    <LandingSiteShell>
      <CareersLanding jobs={jobs} config={config} />
    </LandingSiteShell>
  )
}
