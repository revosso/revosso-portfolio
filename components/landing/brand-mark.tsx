import { Code } from "lucide-react"
import { cn } from "@/lib/utils"

/** REVOSSO wordmark. Decorative: the parent link carries the accessible name. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)} aria-hidden="true">
      <span className="flex size-8 items-center justify-center rounded-rv bg-rv-accent-fill text-white">
        <Code className="size-[18px]" strokeWidth={1.75} />
      </span>
      <span className="text-[15px] font-semibold tracking-[0.14em]">REVOSSO</span>
    </span>
  )
}
