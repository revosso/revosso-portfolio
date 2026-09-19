import { ExternalLink, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type ApplicationCtaProps = {
  applicationUrl: string | null
  applicationEmail: string | null
  jobTitle?: string
  copy: LandingLocaleMessages["careers"]["apply"]
  label?: string
}

export function ApplicationCta({
  applicationUrl,
  applicationEmail,
  jobTitle,
  copy,
  label,
}: ApplicationCtaProps) {
  if (applicationUrl) {
    return (
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <a href={applicationUrl} target="_blank" rel="noopener noreferrer">
          {label ?? copy.viaUrl}
          <ExternalLink className="ml-2 h-4 w-4" aria-hidden="true" />
          <span className="sr-only"> {copy.opensInNewTab}</span>
        </a>
      </Button>
    )
  }

  if (applicationEmail) {
    const subject = jobTitle ? encodeURIComponent(`Application: ${jobTitle}`) : encodeURIComponent("Application")
    return (
      <Button
        asChild
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <a href={`mailto:${applicationEmail}?subject=${subject}`}>
          {label ?? copy.viaEmail}
          <Mail className="ml-2 h-4 w-4" aria-hidden="true" />
        </a>
      </Button>
    )
  }

  return (
    <p role="status" className="text-slate-600 dark:text-slate-300">
      {copy.unavailable}
    </p>
  )
}
