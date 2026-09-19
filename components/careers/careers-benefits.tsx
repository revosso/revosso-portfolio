import { Code, Layers, TrendingUp, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

const featureCard =
  "border border-slate-200 bg-gradient-to-br from-white to-slate-50 shadow-xl dark:border-0 dark:from-slate-800 dark:to-slate-900"

const ICONS = [Code, Layers, Users, TrendingUp] as const

type CareersBenefitsProps = {
  copy: LandingLocaleMessages["careers"]["whyJoin"]
}

export function CareersBenefits({ copy }: CareersBenefitsProps) {
  return (
    <section className="py-20 lg:py-32 bg-white dark:bg-slate-900" aria-labelledby="why-join-heading">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16 space-y-4">
          <h2 id="why-join-heading" className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 dark:text-white">
            {copy.title}
          </h2>
          <p className="text-xl max-w-3xl mx-auto text-slate-600 dark:text-slate-300">{copy.subtitle}</p>
        </div>

        <ul className="grid md:grid-cols-2 gap-8 list-none">
          {copy.items.map((item, index) => {
            const Icon = ICONS[index] ?? Code
            return (
              <li key={item.title}>
                <Card className={featureCard}>
                  <CardContent className="p-8 space-y-4">
                    <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
                      <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
