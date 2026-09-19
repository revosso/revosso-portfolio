import type { MetadataRoute } from "next"
import { getOpenJobPositions, getSiteUrl } from "@/lib/careers/jobs"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date().toISOString()
  const jobs = getOpenJobPositions()

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/careers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...jobs.map((job) => ({
      url: `${base}/careers/${job.slug}`,
      lastModified: job.updatedAt ?? job.createdAt,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
  ]
}
