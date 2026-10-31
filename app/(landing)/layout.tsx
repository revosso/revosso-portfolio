import type React from "react"
import type { Viewport } from "next"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"
import { THEME_COLORS } from "@/lib/site"

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: THEME_COLORS.light },
    { media: "(prefers-color-scheme: dark)", color: THEME_COLORS.dark },
  ],
}

/**
 * Landing Page Layout
 *
 * Public marketing site — revosso.com / revosso.local
 * No authentication required.
 */
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      {children}

        <script
          id="revocom-webchat"
          src="https://revocom-api-dev.revosso.com/widget.js"
          data-public-key="wc_live_afd020c8aed0184df93134db"
          defer>
        </script>
    
    </ThemeProvider>
  )
}
