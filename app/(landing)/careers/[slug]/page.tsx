import { notFound } from "next/navigation"
import { JobPositionDetailsView } from "@/components/careers/job-position-details-view"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { getOpenJobPositions, getPublicJobPositionBySlug, getSiteUrl } from "@/lib/careers/jobs"
import { buildJobPostingJsonLd } from "@/lib/careers/job-posting"
import { jobPositionMetadata } from "@/lib/careers/metadata"

type JobPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getOpenJobPositions().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: JobPageProps) {
  const { slug } = await params
  const job = getPublicJobPositionBySlug(slug)
  if (!job) {
    return { title: "Position not found | Revosso", robots: { index: false, follow: false } }
  }
  return jobPositionMetadata({
    slug: job.slug,
    title: job.seo.title,
    description: job.seo.description,
  })
}

export default async function JobPositionPage({ params }: JobPageProps) {
  const { slug } = await params
  const job = getPublicJobPositionBySlug(slug)
  if (!job) {
    notFound()
  }

  const jsonLd = buildJobPostingJsonLd(job, getSiteUrl())

  return (
    <LandingSiteShell>
      {jsonLd ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}
      <JobPositionDetailsView job={job} />
    </LandingSiteShell>
  )
}
