"use client"

import type React from "react"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useTheme } from "next-themes"
import { toast } from "@/hooks/use-toast"
import { THEME_COLORS } from "@/lib/site"
import {
  LANDING_LOCALE_STORAGE_KEY,
  isLandingLocale,
  persistLandingLocale,
  readLandingLocaleCookie,
  type LandingLocale,
} from "@/lib/landing-locale"

type LandingSiteProviderProps = {
  locale: LandingLocale
  children: React.ReactNode
}

/** Client-side effects shared by every marketing page. Copy is rendered on the server. */
export function LandingSiteProvider({ locale, children }: LandingSiteProviderProps) {
  const router = useRouter()
  const { resolvedTheme } = useTheme()

  // The meta tags follow the OS scheme; match them to the theme the visitor actually picked.
  useEffect(() => {
    if (resolvedTheme !== "light" && resolvedTheme !== "dark") return
    document.querySelectorAll('meta[name="theme-color"]').forEach((meta) => {
      meta.setAttribute("content", THEME_COLORS[resolvedTheme])
    })
  }, [resolvedTheme])

  // Visitors who picked a language before the cookie existed only have it in localStorage.
  useEffect(() => {
    if (readLandingLocaleCookie()) return
    const saved = localStorage.getItem(LANDING_LOCALE_STORAGE_KEY)
    if (isLandingLocale(saved) && saved !== locale) {
      persistLandingLocale(saved)
      router.refresh()
    }
  }, [locale, router])

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
    const authError = params.get("auth_error")
    if (!authError) return

    window.history.replaceState({}, document.title, window.location.pathname)

    const isOrgError = authError.includes("not part of") || authError.includes("organization")

    toast({
      title: isOrgError ? "Access denied" : "Login failed",
      description: isOrgError ? "Your account doesn't have access to the admin dashboard." : authError,
      variant: "destructive",
    })
  }, [])

  return <>{children}</>
}
