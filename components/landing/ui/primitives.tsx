import type { HTMLAttributes } from "react"
import { cn } from "@/lib/utils"

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("rv-container", className)} {...props} />
}

type SectionHeaderProps = {
  /** Used as the H2 id so the parent section can reference it with aria-labelledby. */
  id: string
  eyebrow?: string
  title: string
  intro?: string
  className?: string
}

export function SectionHeader({ id, eyebrow, title, intro, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-2xl", className)}>
      {eyebrow ? <p className="rv-eyebrow">{eyebrow}</p> : null}
      <h2 id={id} className={cn("rv-h2 text-balance", eyebrow && "mt-2")}>
        {title}
      </h2>
      {intro ? <p className="mt-4 text-rv-muted">{intro}</p> : null}
    </div>
  )
}