import Link from "next/link"
import { ArrowRight, Briefcase, Clock, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { JobPosition } from "@/lib/careers/types"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

const featureCard =
  "border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl dark:border-0 dark:from-slate-800 dark:to-slate-900 h-full"

type JobPositionCardProps = {
  job: JobPosition
  copy: LandingLocaleMessages["careers"]["openPositions"]
}

export function JobPositionCard({ job, copy }: JobPositionCardProps) {
  const meta = [
    { value: job.department, icon: "department" as const },
    { value: job.location, icon: "location" as const },
    { value: job.employmentType, icon: "time" as const },
    { value: job.workMode, icon: "time" as const },
  ].filter((item): item is { value: string; icon: "department" | "location" | "time" } => Boolean(item.value))

  return (
    <Card className={featureCard}>
      <CardContent className="p-8 flex flex-col h-full space-y-5">
        <div className="space-y-3">
          <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
            <Link
              href={`/careers/${job.slug}`}
              className="rounded-sm hover:text-blue-600 dark:hover:text-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              {job.title}
            </Link>
          </h3>
          {meta.length > 0 ? (
            <ul className="flex flex-wrap gap-2">
              {meta.map((item) => (
                <li
                  key={`${item.icon}-${item.value}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 dark:bg-slate-700/80 px-3 py-1 text-sm text-slate-600 dark:text-slate-300"
                >
                  {item.icon === "location" ? (
                    <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : item.icon === "department" ? (
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                  ) : (
                    <Clock className="h-3.5 w-3.5" aria-hidden="true" />
                  )}
                  {item.value}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <p className="text-slate-600 dark:text-slate-300 leading-relaxed flex-1">{job.summary}</p>

        <div>
          <Button asChild variant="outline" className="border-slate-300 dark:border-slate-600">
            <Link href={`/careers/${job.slug}`}>
              {copy.viewDetails}
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
