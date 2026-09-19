import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type CareersHeroProps = {
  copy: LandingLocaleMessages["careers"]["hero"]
}

export function CareersHero({ copy }: CareersHeroProps) {
  return (
    <section className="relative overflow-x-hidden py-20 lg:py-32" aria-labelledby="careers-hero-heading">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-white to-slate-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900" />
      <div className="absolute top-0 left-0 w-full h-full" aria-hidden="true">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <div className="text-center space-y-8 py-16 lg:py-24">
          {copy.eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600 dark:text-blue-400">
              {copy.eyebrow}
            </p>
          ) : null}
          <h1
            id="careers-hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              {copy.title}
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl leading-relaxed max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
            {copy.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 text-lg px-8 py-6"
            >
              <a href="#open-positions">
                {copy.cta}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
