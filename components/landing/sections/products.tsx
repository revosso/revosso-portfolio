import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/content/products"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"
import { ProductCard } from "@/components/landing/ui/product-card"

type ProductsSectionProps = {
  copy: LandingLocaleMessages["products"]
  locale: LandingLocale
}

export function ProductsSection({ copy, locale }: ProductsSectionProps) {
  return (
    <section id="platforms" aria-labelledby="products-heading" className="rv-section border-t border-rv-border">
      <Container>
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader id="products-heading" eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
          <Link href="/products" className="rv-link inline-flex min-h-11 shrink-0 items-center gap-1.5 self-start md:self-auto">
            {copy.allProducts}
            <ArrowRight className="size-4" aria-hidden="true" strokeWidth={1.75} />
          </Link>
        </div>
        <ul className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 md:mt-14 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li key={product.slug} className="flex">
              <ProductCard
                product={product}
                locale={locale}
                learnMore={copy.learnMore}
                learnMoreAbout={copy.learnMoreAbout}
                sizes="(min-width: 1280px) 270px, (min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
                className="w-full"
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
