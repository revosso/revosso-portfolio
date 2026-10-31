import { cache } from "react"
import { cookies, headers } from "next/headers"
import {
  LANDING_LOCALE_STORAGE_KEY,
  isLandingLocale,
  localeFromLanguageTag,
  type LandingLocale,
} from "@/lib/landing-locale"

/**
 * Server-side twin of `resolveInitialLandingLocale`: visitor cookie, then
 * Accept-Language. Cached per request. Does not hit Turso — a remote lookup on
 * first visit added ~2s of TTFB and `unstable_cache` did not hold it.
 */
export const getLandingLocale = cache(async (): Promise<LandingLocale> => {
  const saved = (await cookies()).get(LANDING_LOCALE_STORAGE_KEY)?.value
  if (isLandingLocale(saved)) return saved
  return localeFromLanguageTag((await headers()).get("accept-language"))
})
