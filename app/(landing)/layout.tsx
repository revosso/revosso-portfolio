import type React from "react"
import Script from "next/script"
import { ThemeProvider } from "@/components/theme-provider"

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
