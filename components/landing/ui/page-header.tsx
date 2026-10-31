import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

type PageHeaderProps = {
  /** H1 id, so the enclosing section can use aria-labelledby. */
  id: string
  eyebrow: ReactNode
  title: string
  intro?: string
  children?: ReactNode
  className?: string
}

/** H1 block for inner pages. */
export function PageHeader({ id, eyebrow, title, intro, children, className }: PageHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <div className="rv-eyebrow">{eyebrow}</div>
      <h1 id={id} className="rv-h1 mt-4 text-balance">
        {title}
      </h1>
      {intro ? <p className="mt-5 max-w-2xl text-rv-muted md:text-lg">{intro}</p> : null}
      {children}
    </div>
  )
}
