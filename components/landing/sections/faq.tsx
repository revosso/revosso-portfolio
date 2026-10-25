"use client"

import * as Accordion from "@radix-ui/react-accordion"
import { Plus } from "lucide-react"
import { track } from "@/lib/analytics"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Container, SectionHeader } from "@/components/landing/ui/primitives"

type FaqItem = LandingLocaleMessages["faq"]["items"][number]

type FaqSectionProps = {
  copy: Pick<LandingLocaleMessages["faq"], "eyebrow" | "title">
  /** Confirmed answers only; the page filters out unconfirmed placeholders. */
  items: FaqItem[]
}

export function FaqSection({ copy, items }: FaqSectionProps) {
  const handleChange = (value: string) => {
    if (!value) return
    const index = Number(value)
    track("faq_open", { index, question: items[index]?.question })
  }

  return (
    <section id="faq" aria-labelledby="faq-heading" className="rv-section border-t border-rv-border">
      <Container className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <SectionHeader id="faq-heading" eyebrow={copy.eyebrow} title={copy.title} className="lg:col-span-4" />
        <Accordion.Root
          type="single"
          collapsible
          onValueChange={handleChange}
          className="divide-y divide-rv-border border-y border-rv-border lg:col-span-8"
        >
          {items.map((item, index) => (
            <Accordion.Item key={item.question} value={String(index)}>
              <Accordion.Header>
                <Accordion.Trigger className="group flex min-h-16 w-full items-center justify-between gap-6 py-5 text-left text-lg font-medium">
                  {item.question}
                  <Plus
                    aria-hidden="true"
                    strokeWidth={1.5}
                    className="size-5 shrink-0 text-rv-muted transition-transform duration-200 group-data-[state=open]:rotate-45 motion-reduce:transition-none"
                  />
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down motion-reduce:animate-none">
                <p className="max-w-2xl pb-6 pr-10 text-rv-muted">{item.answer}</p>
              </Accordion.Content>
            </Accordion.Item>
          ))}
        </Accordion.Root>
      </Container>
    </section>
  )
}
