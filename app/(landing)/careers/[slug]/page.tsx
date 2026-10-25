import type { ReactNode } from "react"
import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { REVOSSO_LOGO_URL } from "@/lib/brand"
import { buildJobPostingJsonLd } from "@/lib/careers/job-posting"
import { applicationEmail, getOpenJobs, getPublicJob } from "@/lib/careers/jobs"
import { translations } from "@/lib/landing-data"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { getSiteUrl } from "@/lib/site"
import { ApplyByEmail, jobSummaryItems } from "@/components/careers/careers-ui"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { Container } from "@/components/landing/ui/primitives"

type JobPageProps = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getOpenJobs().map((job) => ({ slug: job.slug }))
}

export async function generateMetadata({ params }: JobPageProps): Promise<Metadata> {
  const job = getPublicJob((await params).slug)
  const locale = await getLandingLocale()
  if (!job) return { title: translations[locale].careers.notFound.title, robots: { index: false, follow: false } }
  const { seo } = job.copy[locale]
  const path = `/careers/${job.slug}`
  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical: path },
    openGraph: { title: seo.title, description: seo.description, url: path },
  }
}

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id}>
      <h2 id={id} className="rv-h3 md:text-2xl">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-rv-muted">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default async function JobPage({ params }: JobPageProps) {
  const job = getPublicJob((await params).slug)
  if (!job) notFound()

  const locale = await getLandingLocale()
  const copy = translations[locale].careers
  const role = job.copy[locale]
  const email = applicationEmail(job)
  const jsonLd = buildJobPostingJsonLd(job, locale, getSiteUrl(), REVOSSO_LOGO_URL)

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <article aria-labelledby="role-title">
          <Container className="pt-10 md:pt-14">
            <Link href="/careers" className="rv-link inline-flex min-h-11 items-center gap-1.5 text-sm">
              <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.75} />
              {copy.details.back}
            </Link>
            <header className="mt-6 max-w-3xl">
              <p className="rv-eyebrow">{copy.values.department[job.department]}</p>
              <h1 id="role-title" className="rv-h1 mt-4 text-balance">
                {role.title}
              </h1>
              <p className="mt-5 text-lg text-rv-muted md:text-xl">{role.summary}</p>
            </header>
          </Container>

          <Container className="mt-16 grid gap-12 pb-20 md:pb-28 lg:mt-20 lg:grid-cols-12 lg:gap-14">
            <aside aria-labelledby="role-summary" className="lg:order-last lg:col-span-4">
              <div className="rounded-rv-frame border border-rv-border bg-rv-surface p-6 lg:sticky lg:top-28">
                <h2 id="role-summary" className="rv-eyebrow">
                  {copy.details.summary}
                </h2>
                <dl className="mt-4 divide-y divide-rv-border text-base">
                  {jobSummaryItems(job, copy, locale).map((item) => (
                    <div key={item.label} className="flex justify-between gap-4 py-2.5">
                      <dt className="text-rv-muted">{item.label}</dt>
                      <dd className="text-right font-medium">{item.value}</dd>
                    </div>
                  ))}
                </dl>
                <ApplyByEmail email={email} title={role.title} copy={copy} className="mt-6 w-full" />
                <p className="mt-4 text-sm text-rv-muted">
                  {copy.details.emailLabel}{" "}
                  <a href={`mailto:${email}`} className="rv-link select-all break-all">
                    {email}
                  </a>
                </p>
              </div>
            </aside>

            <div className="space-y-14 lg:col-span-8">
              <Section id="role-overview" title={copy.details.overview}>
                <div className="space-y-4 text-lg">
                  {role.overview.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </Section>
              <Section id="role-responsibilities" title={copy.details.responsibilities}>
                <BulletList items={role.responsibilities} />
              </Section>
              <Section id="role-requirements" title={copy.details.requirements}>
                <BulletList items={role.requirements} />
              </Section>
              {role.niceToHave.length > 0 ? (
                <Section id="role-nice-to-have" title={copy.details.niceToHave}>
                  <BulletList items={role.niceToHave} />
                </Section>
              ) : null}
              <Section id="role-apply" title={copy.details.howToApply}>
                <p className="text-rv-muted">{role.howToApply}</p>
                <ApplyByEmail email={email} title={role.title} copy={copy} className="mt-6 w-full sm:w-auto" />
              </Section>
            </div>
          </Container>
        </article>
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
    </LandingSiteShell>
  )
}
