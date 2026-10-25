export const SITE_NAME = "Revosso"

export const SITE_TITLE = "Revosso | Custom Software, Platform Engineering & Infrastructure"

export const SITE_DESCRIPTION =
  "We build, rescue, and run secure, scalable platforms. Custom software, legacy takeovers, and managed infrastructure. Book a free 30-min call."

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://revosso.com").replace(/\/$/, "")
}
