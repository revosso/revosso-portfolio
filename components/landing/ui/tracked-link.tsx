"use client"

import type { ComponentPropsWithoutRef, MouseEvent } from "react"
import Link from "next/link"
import { track, type AnalyticsEvent, type AnalyticsProps } from "@/lib/analytics"

type TrackedLinkProps = Omit<ComponentPropsWithoutRef<"a">, "href"> & {
  href: string
  event: AnalyticsEvent
  eventProps?: AnalyticsProps
  /** Opens in a new tab with `rel="noopener noreferrer"`. */
  external?: boolean
}

export function TrackedLink({ href, event, eventProps, external, onClick, ...props }: TrackedLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    track(event, eventProps)
    onClick?.(e)
  }

  if (external) {
    return <a href={href} target="_blank" rel="noopener noreferrer" onClick={handleClick} {...props} />
  }

  return <Link href={href} onClick={handleClick} {...props} />
}
