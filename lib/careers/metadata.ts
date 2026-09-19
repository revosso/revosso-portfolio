import type { Metadata } from "next"
import { getSiteUrl } from "@/lib/careers/jobs"

export const CAREERS_LISTING_TITLE = "Careers | Revosso"
export const CAREERS_LISTING_DESCRIPTION =
  "Join us in building digital products, software platforms, and solutions that create meaningful impact."

export function careersListingMetadata(): Metadata {
  const canonical = `${getSiteUrl()}/careers`
  return {
    title: CAREERS_LISTING_TITLE,
    description: CAREERS_LISTING_DESCRIPTION,
    alternates: { canonical },
    openGraph: {
      title: CAREERS_LISTING_TITLE,
      description: CAREERS_LISTING_DESCRIPTION,
      url: canonical,
      siteName: "Revosso",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: CAREERS_LISTING_TITLE,
      description: CAREERS_LISTING_DESCRIPTION,
    },
  }
}

export function jobPositionMetadata(input: {
  slug: string
  title: string
  description: string
}): Metadata {
  const canonical = `${getSiteUrl()}/careers/${input.slug}`
  return {
    title: input.title,
    description: input.description,
    alternates: { canonical },
    openGraph: {
      title: input.title,
      description: input.description,
      url: canonical,
      siteName: "Revosso",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: input.title,
      description: input.description,
    },
  }
}
