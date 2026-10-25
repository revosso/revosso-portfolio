import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { translations } from "@/lib/landing-data"
import { getLandingLocale } from "@/lib/landing-locale.server"
import { LandingSiteShell } from "@/components/landing/landing-site-shell"
import { Container } from "@/components/landing/ui/primitives"

export default async function JobNotFound() {
  const { notFound } = translations[await getLandingLocale()].careers

  return (
    <LandingSiteShell>
      <main id="main-content" className="flex-1">
        <Container className="py-24 md:py-32">
          <div className="max-w-xl">
            <h1 className="rv-h1">{notFound.title}</h1>
            <p className="mt-5 text-lg text-rv-muted">{notFound.message}</p>
            <Link href="/careers" className="rv-link mt-8 inline-flex min-h-11 items-center gap-1.5">
              <ArrowLeft className="size-4" aria-hidden="true" strokeWidth={1.75} />
              {notFound.back}
            </Link>
          </div>
        </Container>
      </main>
    </LandingSiteShell>
  )
}
