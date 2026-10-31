import type React from "react"
import type { Metadata } from "next"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { Toaster } from "@/components/ui/toaster"
import { Auth0Provider } from "@/components/auth0-provider"
import { ClientOnly } from "@/components/client-only"
import { DevWarningsFilter } from "@/components/dev-warnings-filter"
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, getSiteUrl } from "@/lib/site"

/** The only typeface on the site. Exposed as `--font-inter` for Tailwind's `font-sans`. */
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: SITE_TITLE, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={inter.variable}
      suppressHydrationWarning
    >
      <body className={inter.className} suppressHydrationWarning>
        <Auth0Provider>
          <DevWarningsFilter />
          {children}
          <ClientOnly><Toaster /></ClientOnly>
        </Auth0Provider>
      </body>
    </html>
  )
}
