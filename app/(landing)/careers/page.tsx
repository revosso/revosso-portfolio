import type { Metadata } from "next"
import Link from "next/link"
import { ArrowDown, ArrowRight } from "lucide-react"
import { CAREERS_EMAIL } from "@/content/careers/jobs"
import { getOpenJobs } from "@/lib/careers/jobs"
import { translations } from "@/lib/landing-data"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { EmailSentence, jobMetaLine } from "@/components/careers/careers-ui"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { PageHeader } from "@/components/landing/ui/page-header"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"

export async function generateMetadata(): Promise<Metadata> {
  const { careers } = translations[await getLandingLocale()]
  return {
    title: careers.seo.title,
    description: careers.seo.description,
    alternates: { canonical: "/careers" },
    openGraph: { title: careers.seo.title, description: careers.seo.description, url: "/careers" },
  }
}

export default async function CareersPage() {
  const locale = await getLandingLocale()
  const copy = translations[locale].careers
  const jobs = getOpenJobs()

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <section aria-labelledby="careers-title" className="border-b border-rv-border">
          <Container className="pb-16 pt-12 md:pb-20 md:pt-20">
            <PageHeader id="careers-title" eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro}>
              <a href="#open-roles" className="rv-link mt-6 inline-flex min-h-11 items-center gap-1.5">
                {copy.seeRoles}
                <ArrowDown className="size-4" aria-hidden="true" strokeWidth={1.75} />
              </a>
            </PageHeader>
          </Container>
        </section>

        <section aria-labelledby="why-heading" className="rv-section">
          <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <SectionHeader id="why-heading" title={copy.why.title} className="lg:col-span-4" />
            <dl className="border-b border-rv-border lg:col-span-8">
              {copy.why.items.map((item) => (
                <div key={item.title} className="grid gap-1.5 border-t border-rv-border py-5 sm:grid-cols-[15rem_1fr] sm:gap-8">
                  <dt className="font-medium">{item.title}</dt>
                  <dd className="text-rv-muted">{item.description}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>

        <section id="open-roles" aria-labelledby="roles-heading" className="rv-section border-t border-rv-border">
          <Container>
            <SectionHeader id="roles-heading" title={copy.roles.title} />

            {jobs.length > 0 ? (
              <ul className="mt-10 border-b border-rv-border">
                {jobs.map((job) => {
                  const role = job.copy[locale]
                  return (
                    <li
                      key={job.slug}
                      className="group relative grid gap-1.5 rounded-rv border-t border-rv-border px-3 py-5 transition-colors hover:bg-rv-surface-2 has-[a:focus-visible]:outline has-[a:focus-visible]:outline-2 has-[a:focus-visible]:outline-offset-2 has-[a:focus-visible]:outline-rv-accent md:-mx-3 md:grid-cols-[1fr_auto] md:items-center md:gap-8"
                    >
                      <div>
                        <h3 className="text-lg font-semibold">
                          <Link
                            href={`/careers/${job.slug}`}
                            className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
                          >
                            {role.title}
                          </Link>
                        </h3>
                        <p className="mt-1 text-base text-rv-muted">{jobMetaLine(job, copy)}</p>
                      </div>
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center gap-1.5 text-base font-medium text-rv-accent"
                      >
                        {copy.roles.openRole}
                        <ArrowRight
                          className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none"
                          strokeWidth={1.75}
                        />
                      </span>
                    </li>
                  )
                })}
              </ul>
            ) : (
              <EmailSentence text={copy.roles.empty} email={CAREERS_EMAIL} className="mt-8 max-w-2xl text-lg text-rv-muted" />
            )}

            {jobs.length > 0 ? (
              <div className="mt-12 max-w-2xl">
                <h3 className="rv-h3">{copy.general.title}</h3>
                <EmailSentence text={copy.general.body} email={CAREERS_EMAIL} className="mt-2 text-rv-muted" />
              </div>
            ) : null}
          </Container>
        </section>
      </main>
    </LandingSiteShell>
  )
}
