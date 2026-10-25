/**
 * Non-translatable marketing-site data. Translatable copy lives in
 * `lib/landing-translations/*`; product data lives in `content/products.ts`.
 */

export const CALENDLY_URL =
  process.env.NEXT_PUBLIC_CALENDLY_URL?.trim() || "https://calendly.com/revossocorp/free-30-min-consultation"

export const CONTACT_EMAIL = "contact@revosso.com"

export type SocialNetwork = "facebook" | "instagram" | "tiktok"

export const SOCIAL_LINKS: readonly { network: SocialNetwork; url: string }[] = [
  { network: "facebook", url: "https://www.facebook.com/revossocorp" },
  { network: "instagram", url: "https://www.instagram.com/revossocorp" },
  { network: "tiktok", url: "https://www.tiktok.com/@revossocorp" },
]

/**
 * Company facts. Legal name and CNPJ are as published in the Revofin site footer.
 * Unconfirmed facts stay `null` and are not rendered.
 */
export const COMPANY: {
  legalName: string
  registration: { label: string; value: string }
  foundedYear: number | null
  teamSize: string | null
  locations: string | null
} = {
  legalName: "Revosso LTDA",
  registration: { label: "CNPJ", value: "65.687.150/0001-60" },
  foundedYear: null,
  teamSize: null,
  locations: null,
}

/** Order of the "What we build" list; names and descriptions are translated. */
export const SERVICE_IDS = [
  "websites",
  "platforms",
  "mobile",
  "apis",
  "design",
  "email",
  "hosting",
] as const

/** "I need help with" options mapped to the lead `productInterest` values the API already understands. */
export const CONTACT_NEEDS = {
  newBuild: "NEW_PLATFORM",
  fixExisting: "PLATFORM_TAKEOVER",
  hostingOps: "INFRASTRUCTURE_HOSTING",
  notSure: "GENERAL_INQUIRY",
} as const

export type ContactNeed = keyof typeof CONTACT_NEEDS
