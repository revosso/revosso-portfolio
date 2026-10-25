import type { ReactNode } from "react"
import Image from "next/image"
import { PLATFORM_SCREENSHOTS, type PlatformScreenshotKey } from "@/lib/platform-screenshots"
import { cn } from "@/lib/utils"

type ScreenshotProps = {
  shot: PlatformScreenshotKey
  alt: string
  /** Required: frames render at very different widths across the page. */
  sizes: string
  priority?: boolean
  className?: string
}

export function Screenshot({ shot, alt, sizes, priority, className }: ScreenshotProps) {
  const { src, width, height, blurDataURL } = PLATFORM_SCREENSHOTS[shot]
  return (
    <Image
      src={src}
      width={width}
      height={height}
      alt={alt}
      sizes={sizes}
      priority={priority}
      placeholder="blur"
      blurDataURL={blurDataURL}
      className={cn("block h-auto w-full", className)}
    />
  )
}

type BrowserFrameProps = {
  /** Shown in the address bar. */
  host: string
  children: ReactNode
  className?: string
}

export function BrowserFrame({ host, children, className }: BrowserFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-rv-frame border border-rv-border bg-rv-surface shadow-rv-frame", className)}>
      <div className="flex items-center gap-3 border-b border-rv-border bg-rv-surface-2 px-3 py-2" aria-hidden="true">
        <div className="flex gap-1.5">
          <span className="size-2 rounded-full bg-rv-text/15" />
          <span className="size-2 rounded-full bg-rv-text/15" />
          <span className="size-2 rounded-full bg-rv-text/15" />
        </div>
        <span className="truncate text-[11px] text-rv-muted">{host}</span>
      </div>
      {children}
    </div>
  )
}

export function PhoneFrame({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[22px] border-[5px] border-rv-text/90 bg-rv-text shadow-rv-frame dark:border-[#3a3935]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[17px]">{children}</div>
    </div>
  )
}
