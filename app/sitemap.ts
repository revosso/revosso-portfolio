import type { MetadataRoute } from "next"
import { PRODUCTS } from "@/content/products"
import { getOpenJobs } from "@/lib/careers/jobs"
import { getSiteUrl } from "@/lib/site"

const LEGAL_PATHS = ["/privacy", "/terms", "/security", "/cookies"]

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date().toISOString()
  const jobs = getOpenJobs()

  return [
    {
      url: `${base}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${base}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${base}/products`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...PRODUCTS.map((product) => ({
      url: `${base}/products/${product.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    {
      url: `${base}/careers`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...jobs.map((job) => ({
      url: `${base}/careers/${job.slug}`,
      lastModified: job.dateModified ?? job.datePosted,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    })),
    ...LEGAL_PATHS.map((path) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ]
}
