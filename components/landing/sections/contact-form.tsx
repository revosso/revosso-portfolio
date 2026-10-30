"use client"

import { useId, useState, type FormEvent, type ReactNode } from "react"
import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react"
import { track } from "@/lib/analytics"
import { CONTACT_EMAIL, CONTACT_NEEDS, type ContactNeed } from "@/lib/landing-content"
import type { LandingLocale } from "@/lib/landing-locale"
import type { LandingLocaleMessages } from "@/lib/landing-translations/types"
import { Button } from "@/components/landing/ui/button"
import { cn } from "@/lib/utils"

type ContactFormProps = {
  copy: LandingLocaleMessages["contactForm"]
  locale: LandingLocale
}

type Field = "name" | "email" | "need" | "message"
type FieldErrors = Partial<Record<Field, string>>
type Status = "idle" | "submitting" | "success" | "error"

type ContactValues = { name: string; email: string; need: ContactNeed; message: string }

const NEED_KEYS = Object.keys(CONTACT_NEEDS) as ContactNeed[]
const FIELD_ORDER: Field[] = ["name", "email", "need", "message"]
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const isContactNeed = (value: string): value is ContactNeed => (NEED_KEYS as string[]).includes(value)

/**
 * Mirrors the `leadSubmissionSchema` limits so users see errors before the server does.
 * Kept dependency-free to avoid shipping zod to the browser; the API re-validates with zod.
 */
function validate(data: FormData, messages: ContactFormProps["copy"]["validation"]) {
  const value = (key: string) => String(data.get(key) ?? "").trim()
  const values = { name: value("name"), email: value("email"), need: value("need"), message: value("message") }
  const errors: FieldErrors = {}

  if (values.name.length < 2 || values.name.length > 100) errors.name = messages.name
  if (!EMAIL_PATTERN.test(values.email)) errors.email = messages.email
  if (!isContactNeed(values.need)) errors.need = messages.need
  if (values.message.length < 10) errors.message = messages.message
  else if (values.message.length > 2000) errors.message = messages.messageMax

  return { errors, values: values as ContactValues }
}

const inputClass =
  "block w-full rounded-rv border border-rv-border bg-rv-surface-raised px-3.5 text-base text-rv-text placeholder:text-rv-muted transition-colors focus-visible:border-rv-accent focus-visible:outline-offset-0 aria-[invalid=true]:border-red-500"

export function ContactForm({ copy, locale }: ContactFormProps) {
  const formId = useId()
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitError, setSubmitError] = useState("")

  const fieldId = (field: Field) => `${formId}-${field}`
  const errorId = (field: Field) => `${formId}-${field}-error`

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const { errors: nextErrors, values } = validate(data, copy.validation)
    const firstInvalid = FIELD_ORDER.find((field) => nextErrors[field])
    if (firstInvalid) {
      setErrors(nextErrors)
      form.querySelector<HTMLElement>(`#${CSS.escape(fieldId(firstInvalid))}`)?.focus()
      return
    }

    setErrors({})
    setSubmitError("")
    setStatus("submitting")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          message: values.message,
          productInterest: CONTACT_NEEDS[values.need],
          sourcePage: "landing_contact",
          userLanguage: locale,
          honeypot: String(data.get("website") ?? ""),
        }),
      })

      if (!response.ok) {
        setSubmitError(response.status === 429 ? copy.rateLimited : copy.error.replace("{email}", CONTACT_EMAIL))
        setStatus("error")
        track("contact_submit", { status: "error", need: values.need, http_status: response.status })
        return
      }

      form.reset()
      setStatus("success")
      track("contact_submit", { status: "success", need: values.need })
    } catch {
      setSubmitError(copy.error.replace("{email}", CONTACT_EMAIL))
      setStatus("error")
      track("contact_submit", { status: "error", need: values.need })
    }
  }

  if (status === "success") {
    return (
      <div role="status" className="flex h-full flex-col items-start justify-center gap-4 py-8">
        <CheckCircle2 className="size-8 text-emerald-600 dark:text-emerald-400" strokeWidth={1.5} aria-hidden="true" />
        <h3 className="text-xl font-semibold">{copy.successTitle}</h3>
        <p className="text-rv-muted">{copy.success}</p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          {copy.sendAnother}
        </Button>
      </div>
    )
  }

  const describedBy = (field: Field) => (errors[field] ? errorId(field) : undefined)
  const isSubmitting = status === "submitting"

  return (
    <form noValidate onSubmit={handleSubmit} className="space-y-5" aria-busy={isSubmitting}>
      <div className="grid gap-5 sm:grid-cols-2">
        <FormField id={fieldId("name")} label={copy.name} error={errors.name} errorId={errorId("name")}>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            autoComplete="name"
            required
            aria-invalid={!!errors.name}
            aria-describedby={describedBy("name")}
            className={cn(inputClass, "h-12")}
          />
        </FormField>
        <FormField id={fieldId("email")} label={copy.email} error={errors.email} errorId={errorId("email")}>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-invalid={!!errors.email}
            aria-describedby={describedBy("email")}
            className={cn(inputClass, "h-12")}
          />
        </FormField>
      </div>

      <FormField id={fieldId("need")} label={copy.need} error={errors.need} errorId={errorId("need")}>
        <select
          id={fieldId("need")}
          name="need"
          required
          defaultValue=""
          aria-invalid={!!errors.need}
          aria-describedby={describedBy("need")}
          className={cn(inputClass, "h-12 appearance-none bg-[length:16px] bg-[position:right_1rem_center] bg-no-repeat pr-10")}
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%238C877E' stroke-width='1.75'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")",
          }}
        >
          <option value="" disabled>
            {copy.needPlaceholder}
          </option>
          {NEED_KEYS.map((key) => (
            <option key={key} value={key}>
              {copy.needOptions[key]}
            </option>
          ))}
        </select>
      </FormField>

      <FormField id={fieldId("message")} label={copy.message} error={errors.message} errorId={errorId("message")}>
        <textarea
          id={fieldId("message")}
          name="message"
          rows={4}
          required
          maxLength={2000}
          placeholder={copy.messagePlaceholder}
          aria-invalid={!!errors.message}
          aria-describedby={describedBy("message")}
          className={cn(inputClass, "min-h-28 resize-y py-3")}
        />
      </FormField>

      {/* Honeypot: hidden from people and assistive tech, bots fill it in. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
        <label htmlFor={`${formId}-website`}>{copy.honeypot}</label>
        <input id={`${formId}-website`} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      {status === "error" ? (
        <p role="alert" className="flex gap-2 rounded-rv border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-700 dark:text-red-300">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          {submitError}
        </p>
      ) : null}

      <Button type="submit" variant="outline" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? (
          <>
            <Loader2 className="animate-spin" aria-hidden="true" />
            {copy.sending}
          </>
        ) : (
          copy.submit
        )}
      </Button>
    </form>
  )
}

type FormFieldProps = {
  id: string
  label: string
  error?: string
  errorId: string
  children: ReactNode
}

function FormField({ id, label, error, errorId, children }: FormFieldProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium">
        {label}
      </label>
      {children}
      {error ? (
        <p id={errorId} className="text-sm text-red-700 dark:text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  )
}
