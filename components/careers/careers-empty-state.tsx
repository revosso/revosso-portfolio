import { ApplicationCta } from "@/components/careers/application-cta"
import type { CareersFileConfig } from "@/lib/careers/types"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"

type CareersEmptyStateProps = {
  copy: LandingLocaleMessages["careers"]
  config: CareersFileConfig
}

export function CareersEmptyState({ copy, config }: CareersEmptyStateProps) {
  const hasGeneralApplication = Boolean(config.generalApplicationEmail || config.generalApplicationUrl)

  return (
    <div
      className="rounded-xl border border-dashed border-slate-300 dark:border-slate-700 bg-white/60 dark:bg-slate-800/40 px-6 py-12 text-center space-y-6"
      role="status"
    >
      <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">{copy.empty.message}</p>
      {hasGeneralApplication ? (
        <div className="flex justify-center">
          <ApplicationCta
            applicationUrl={config.generalApplicationUrl}
            applicationEmail={config.generalApplicationEmail}
            copy={copy.apply}
            label={copy.empty.applyCta}
          />
        </div>
      ) : null}
    </div>
  )
}
