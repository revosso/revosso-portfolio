import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { SERVICE_IDS } from "@/lib/landing-content"
import { cn } from "@/lib/utils"

type ServiceCatalogProps = {
  catalog: LandingLocaleMessages["services"]["catalog"]
  className?: string
}

/** The "What we build" list, in the confirmed order. Shared by the home page and /about. */
export function ServiceCatalog({ catalog, className }: ServiceCatalogProps) {
  return (
    <ol className={cn("grid gap-x-14 md:grid-cols-2", className)}>
      {SERVICE_IDS.map((id, index) => (
        <li key={id} className="grid grid-cols-[2rem_1fr] gap-x-3 border-t border-rv-border py-5">
          <span aria-hidden="true" className="pt-0.5 text-sm font-medium text-rv-muted tabular-nums">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="font-medium">{catalog[id].name}</h3>
            <p className="mt-1 text-base text-rv-muted">{catalog[id].description}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
