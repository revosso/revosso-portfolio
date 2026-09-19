"use client"

import { LandingSiteShell, useLandingSite } from "@/components/landing/landing-site-shell"
import { LandingSections } from "@/components/landing/landing-sections"

export default function LandingPage() {
  return (
    <LandingSiteShell>
      <HomeLandingSections />
    </LandingSiteShell>
  )
}

function HomeLandingSections() {
  const { copy, calendlyUrl, onOpenContact } = useLandingSite()
  return <LandingSections copy={copy} calendlyUrl={calendlyUrl} onOpenContact={onOpenContact} />
}
