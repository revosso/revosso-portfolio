import { landingEn } from "@/lib/landing-translations/en"
import { landingEs } from "@/lib/landing-translations/es"
import { landingFr } from "@/lib/landing-translations/fr"
import { landingPtBR } from "@/lib/landing-translations/pt-br"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

export const translations: Record<LandingLocale, LandingLocaleMessages> = {
  en: landingEn,
  fr: landingFr,
  "pt-BR": landingPtBR,
  es: landingEs,
}
