import { z } from "zod"

const emptyToNull = (value: string | null | undefined): string | null => {
  if (value == null) return null
  const trimmed = value.trim()
  return trimmed.length > 0 ? trimmed : null
}

const nullableText = z
  .union([z.string(), z.null()])
  .optional()
  .transform((value) => emptyToNull(value ?? null))

const nullableEmail = z
  .union([z.string(), z.null()])
  .optional()
  .transform((value) => emptyToNull(value ?? null))
  .refine((value) => value === null || z.string().email().safeParse(value).success, {
    message: "Invalid email address",
  })

const nullableUrl = z
  .union([z.string(), z.null()])
  .optional()
  .transform((value) => emptyToNull(value ?? null))
  .refine((value) => value === null || z.string().url().safeParse(value).success, {
    message: "Invalid URL",
  })

const isoDate = z
  .string()
  .min(1)
  .refine((value) => !Number.isNaN(Date.parse(value)), { message: "Invalid date" })

const nullableIsoDate = z
  .union([z.string(), z.null()])
  .optional()
  .transform((value) => emptyToNull(value ?? null))
  .refine((value) => value === null || !Number.isNaN(Date.parse(value)), {
    message: "Invalid date",
  })

const stringList = z
  .array(z.string())
  .optional()
  .transform((items) => (items ?? []).map((item) => item.trim()).filter((item) => item.length > 0))

export const jobStatusSchema = z
  .union([z.literal("open"), z.literal("closed"), z.string()])
  .transform((value, ctx) => {
    const normalized = value.trim().toLowerCase()
    if (normalized === "open" || normalized === "closed") return normalized
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Invalid status "${value}". Use "open" or "closed".`,
    })
    return z.NEVER
  })

const publishedSchema = z
  .union([z.boolean(), z.string(), z.number()])
  .transform((value, ctx) => {
    if (typeof value === "boolean") return value
    if (typeof value === "number") {
      if (value === 1) return true
      if (value === 0) return false
    }
    if (typeof value === "string") {
      const normalized = value.trim().toLowerCase()
      if (normalized === "true" || normalized === "yes") return true
      if (normalized === "false" || normalized === "no") return false
    }
    ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: `Invalid published value "${String(value)}". Use true or false.`,
    })
    return z.NEVER
  })

export const jobSeoSchema = z.object({
  title: z.string().trim().min(1),
  description: z.string().trim().min(1),
})

const jobFrontmatterObjectSchema = z.object({
  id: z.string().trim().min(1),
  slug: z
    .string()
    .trim()
    .min(1, "Missing slug")
    .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug must be lowercase and hyphenated"),
  status: jobStatusSchema,
  published: publishedSchema,
  title: z.string().trim().min(1, "Missing title"),
  department: z.string().trim().min(1),
  location: nullableText,
  employmentType: nullableText,
  workMode: nullableText,
  createdAt: isoDate,
  updatedAt: nullableIsoDate,
  applicationDeadline: nullableIsoDate,
  applicationEmail: nullableEmail,
  applicationUrl: nullableUrl,
  applicationNotes: nullableText,
  compensation: nullableText,
  summary: z.string().trim().min(1),
  responsibilities: stringList,
  requirements: stringList,
  niceToHave: stringList,
  benefits: stringList,
  tags: stringList,
  seo: jobSeoSchema,
})

export const jobFrontmatterSchema = z.preprocess((raw) => {
  if (!raw || typeof raw !== "object") return raw
  const data = { ...(raw as Record<string, unknown>) }

  if (data.workMode == null && data.workArrangement != null) {
    data.workMode = data.workArrangement
  }
  if (data.createdAt == null && data.postedAt != null) {
    data.createdAt = data.postedAt
  }
  if (data.id == null && typeof data.slug === "string") {
    data.id = data.slug
  }
  if (
    data.seo == null &&
    typeof data.title === "string" &&
    typeof data.summary === "string"
  ) {
    data.seo = {
      title: `${data.title} | Revosso`,
      description: data.summary,
    }
  }

  return data
}, jobFrontmatterObjectSchema)

export const careersFileConfigSchema = z.object({
  generalApplicationEmail: nullableEmail,
  generalApplicationUrl: nullableUrl,
})

export type JobFrontmatter = z.infer<typeof jobFrontmatterObjectSchema>
