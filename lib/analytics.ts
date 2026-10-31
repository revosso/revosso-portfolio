/**
 * Vendor-neutral analytics. Events are pushed to `window.dataLayer` (if a tag
 * manager installed it) and re-emitted as a `revosso:track` DOM event so any
 * provider can subscribe without touching component code.
 */

export type AnalyticsEvent = "cta_click" | "platform_click" | "faq_open" | "contact_submit"

export type AnalyticsProps = Record<string, string | number | boolean | undefined>

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
  }
}

export function track(event: AnalyticsEvent, props: AnalyticsProps = {}): void {
  if (typeof window === "undefined") return

  const payload = { event, ...props }
  window.dataLayer?.push(payload)
  window.dispatchEvent(new CustomEvent("revosso:track", { detail: payload }))

  if (process.env.NODE_ENV === "development") {
    console.debug("[track]", payload)
  }
}
