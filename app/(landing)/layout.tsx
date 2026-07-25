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
  data-widget-id="4e3c5703-bca5-494a-bfe0-f97e3c3f7469"
  data-public-key="wc_live_afd020c8aed0184df93134db"
  data-token="wct_e4ca742e72c9e5ad6ab732a153035a89"
  data-api-url="https://revocom-api-dev.revosso.com"
  defer>
</script>
    </ThemeProvider>
  )
}
