import { getProduct, type Product, type ProductSlug } from "@/content/products"
import type { LandingLocale } from "@/lib/landing-locale"
import { cn } from "@/lib/utils"
import { BrowserFrame, PhoneFrame, Screenshot } from "@/components/landing/ui/media"

type HeroShowcaseProps = {
  locale: LandingLocale
  caption: string
}

/** Hovered frame rises above its neighbours; reduced motion keeps the z-order change only. */
const LIFT = "transition-transform duration-200 ease-out hover:z-40 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"

function product(slug: ProductSlug): Product {
  const found = getProduct(slug)
  if (!found) throw new Error(`Unknown product: ${slug}`)
  return found
}

/**
 * Static composition of real product screenshots, cropped on each headline.
 * Below `lg` only the Revofin frame renders, so the hero keeps one preloaded image.
 */
export function HeroShowcase({ locale, caption }: HeroShowcaseProps) {
  const revofin = product("revofin")
  const revomaket = product("revomaket")
  const revokonek = product("revokonek")
  const rechajem = product("rechajem")

  return (
    <figure>
      <div className="relative lg:aspect-[10/8.4]">
        <BrowserFrame host={revokonek.host} className={cn(LIFT, "absolute left-0 top-0 z-10 hidden w-[56%] lg:block")}>
          <Screenshot
            shot={revokonek.shots.hero}
            alt={revokonek.copy[locale].alt.desktop}
            sizes="(min-width: 1280px) 340px, 28vw"
          />
        </BrowserFrame>

        <BrowserFrame host={revomaket.host} className={cn(LIFT, "absolute right-0 top-[5%] z-10 hidden w-[56%] lg:block")}>
          <Screenshot
            shot={revomaket.shots.hero}
            alt={revomaket.copy[locale].alt.desktop}
            sizes="(min-width: 1280px) 340px, 28vw"
          />
        </BrowserFrame>

        <BrowserFrame host={revofin.host} className={cn(LIFT, "relative z-20 lg:absolute lg:left-[7%] lg:top-[27%] lg:w-[76%]")}>
          <Screenshot
            shot={revofin.shots.hero}
            alt={revofin.copy[locale].alt.desktop}
            sizes="(min-width: 1280px) 460px, (min-width: 1024px) 38vw, calc(100vw - 40px)"
            priority
          />
        </BrowserFrame>

        <PhoneFrame className={cn(LIFT, "absolute bottom-0 right-0 z-30 hidden w-[21%] lg:block")}>
          <Screenshot shot={rechajem.shots.mobile} alt={rechajem.copy[locale].alt.mobile} sizes="130px" />
        </PhoneFrame>
      </div>
      <figcaption className="rv-eyebrow mt-4 lg:mt-5">{caption}</figcaption>
    </figure>
  )
}
