import Link from "next/link"
import { BrandMark } from "@/components/landing/brand-mark"
import { SocialLinks } from "@/components/landing/ui/social-links"
import { COMPANY, CONTACT_EMAIL, SERVICE_IDS } from "@/lib/landing-content"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type LandingFooterProps = {
  copy: LandingLocaleMessages["footer"]
  services: LandingLocaleMessages["services"]["catalog"]
  a11y: LandingLocaleMessages["a11y"]
}

const linkClass = "inline-flex min-h-11 items-center text-rv-muted transition-colors hover:text-rv-text md:min-h-0 md:py-1"

export function LandingFooter({ copy, services, a11y }: LandingFooterProps) {
  const columns = [
    {
      title: copy.servicesTitle,
      links: SERVICE_IDS.map((id) => ({ label: services[id].name, href: "/#services" })),
    },
    {
      title: copy.companyTitle,
      links: [
        { label: copy.links.about, href: "/about" },
        { label: copy.links.products, href: "/products" },
        { label: copy.links.howWeWork, href: "/#process" },
        { label: copy.links.faq, href: "/#faq" },
        { label: copy.links.careers, href: "/careers" },
        { label: copy.links.contact, href: "/#contact" },
      ],
    },
    {
      title: copy.legalTitle,
      links: [
        { label: copy.links.privacy, href: "/privacy" },
        { label: copy.links.terms, href: "/terms" },
        { label: copy.links.security, href: "/security" },
        { label: copy.links.cookies, href: "/cookies" },
      ],
    },
  ]

  return (
    <footer className="border-t border-rv-border">
      <div className="rv-container grid gap-10 py-16 md:grid-cols-2 lg:grid-cols-[1.3fr_1.2fr_1fr_1fr]">
        <div className="space-y-5">
          <Link href="/" aria-label={a11y.home} className="inline-flex min-h-11 items-center rounded-rv">
            <BrandMark />
          </Link>
          <p className="max-w-xs text-base text-rv-muted">{copy.tagline}</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="rv-link inline-flex min-h-11 items-center text-base md:min-h-0">
            {CONTACT_EMAIL}
          </a>
          <div>
            <h2 className="rv-eyebrow">{copy.followUs}</h2>
            <SocialLinks labels={copy.social} className="mt-2" />
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h2 className="rv-eyebrow">{column.title}</h2>
            <ul className="mt-4 space-y-1 text-base">
              {column.links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className={linkClass}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-rv-border">
        <div className="rv-container flex flex-col gap-3 py-6 text-sm text-rv-muted md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {COMPANY.legalName} · {COMPANY.registration.label}{" "}
            <span className="tabular-nums">{COMPANY.registration.value}</span>. {copy.copyright}
          </p>
          <p>
            {copy.hiring}{" "}
            <Link href="/careers" className="rv-link inline-flex min-h-11 items-center md:min-h-0">
              {copy.hiringLink}
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
