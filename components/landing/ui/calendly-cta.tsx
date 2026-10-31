import { ArrowUpRight } from "lucide-react"
import { CALENDLY_URL } from "@/lib/landing-content"
import { cn } from "@/lib/utils"
import { buttonVariants, type ButtonVariantProps } from "@/components/landing/ui/button"
import { TrackedLink } from "@/components/landing/ui/tracked-link"

type CalendlyCtaProps = ButtonVariantProps & {
  label: string
  /** Section name sent with the `cta_click` event. */
  section: string
  /** Stable, untranslated CTA id for analytics. */
  ctaId: string
  newTabLabel: string
  className?: string
  onClick?: () => void
}

export function CalendlyCta({ label, section, ctaId, newTabLabel, variant, size, className, onClick }: CalendlyCtaProps) {
  return (
    <TrackedLink
      href={CALENDLY_URL}
      external
      event="cta_click"
      eventProps={{ section, cta: ctaId, destination: "calendly" }}
      className={cn(buttonVariants({ variant, size }), className)}
      onClick={onClick}
    >
      {label}
      <ArrowUpRight aria-hidden="true" />
      <span className="sr-only">{newTabLabel}</span>
    </TrackedLink>
  )
}
