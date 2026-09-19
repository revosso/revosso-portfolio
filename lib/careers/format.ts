import type { LandingLocale } from "@/lib/landing-locale"

const DATE_LOCALES: Record<LandingLocale, string> = {
  en: "en-US",
  fr: "fr-FR",
  es: "es-ES",
  "pt-BR": "pt-BR",
}

export function formatJobDate(isoDate: string, locale: LandingLocale): string {
  const parsed = new Date(isoDate.includes("T") ? isoDate : `${isoDate}T00:00:00`)
  if (Number.isNaN(parsed.getTime())) return isoDate
  return parsed.toLocaleDateString(DATE_LOCALES[locale], {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
