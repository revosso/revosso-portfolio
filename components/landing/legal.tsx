import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { Container } from "@/components/landing/ui/primitives"

/** Layout and typography shared by the Privacy, Terms, Security and Cookies pages. */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  updated: string
  intro?: string
  children: ReactNode
}) {
  return (
    <main id="main-content" className="flex-1">
      <Container className="max-w-3xl py-16 md:py-24">
        <header className="mb-12 space-y-4">
          <h1 className="rv-h1">{title}</h1>
          <p className="text-sm text-rv-muted">{updated}</p>
          {intro ? <p className="text-lg text-rv-muted">{intro}</p> : null}
        </header>
        <div className="space-y-12 leading-relaxed">{children}</div>
      </Container>
    </main>
  )
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="space-y-4">
      <h2 className="rv-h3 md:text-2xl">{title}</h2>
      {children}
    </section>
  )
}

export function LegalSubheading({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("font-semibold", className)}>{children}</h3>
}

export function LegalList({ children }: { children: ReactNode }) {
  return <ul className="list-disc space-y-1.5 pl-5 marker:text-rv-muted">{children}</ul>
}

export function LegalBox({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={cn("space-y-2 rounded-rv-frame border border-rv-border bg-rv-surface p-6 text-base", className)}>
      {children}
    </div>
  )
}

export const legalLinkClass = "rv-link"
