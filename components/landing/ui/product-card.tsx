import Link from "next/link"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/content/products"
import type { LandingLocale } from "@/lib/landing-locale"
import { cn } from "@/lib/utils"
import { BrowserFrame, Screenshot } from "@/components/landing/ui/media"

type ProductCardProps = {
  product: Product
  locale: LandingLocale
  learnMore: string
  /** "Learn more about {name}"; gives each link a unique accessible name. */
  learnMoreAbout: string
  sizes: string
  headingLevel?: "h2" | "h3"
  className?: string
}

/** Whole card is one link to the product page; the visible "Learn more" is decorative. */
export function ProductCard({ product, locale, learnMore, learnMoreAbout, sizes, headingLevel = "h3", className }: ProductCardProps) {
  const copy = product.copy[locale]
  const Heading = headingLevel

  return (
    <article className={cn("group relative flex flex-col", className)}>
      <BrowserFrame host={product.host} className="transition-transform duration-200 group-hover:-translate-y-1 motion-reduce:transition-none motion-reduce:group-hover:translate-y-0">
        <Screenshot shot={product.shots.hero} alt={copy.alt.desktop} sizes={sizes} />
      </BrowserFrame>
      <Heading className="rv-h3 mt-5">
        <Link
          href={`/products/${product.slug}`}
          aria-label={learnMoreAbout.replace("{name}", product.name)}
          className="after:absolute after:inset-0 after:content-[''] focus-visible:outline-none"
        >
          {product.name}
        </Link>
      </Heading>
      <p className="mt-2 flex-1 text-base text-rv-muted">{copy.tagline}</p>
      <span aria-hidden="true" className="mt-4 inline-flex items-center gap-1.5 text-base font-medium text-rv-accent">
        {learnMore}
        <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5 motion-reduce:transition-none" strokeWidth={1.75} />
      </span>
    </article>
  )
}
