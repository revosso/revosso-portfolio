import matter from "gray-matter"
import { parse as parseYaml } from "yaml"
import { careersFileConfigSchema, jobFrontmatterSchema } from "@/lib/careers/schema"
import { CareersContentError } from "@/lib/careers/types"
import type { CareersFileConfig, JobPosition, ParsedCareersFile } from "@/lib/careers/types"

export const JOB_SEPARATOR = "<!-- job -->"

const EMPTY_CONFIG: CareersFileConfig = {
  generalApplicationEmail: null,
  generalApplicationUrl: null,
}

const matterOptions = {
  engines: {
    yaml: {
      parse: (input: string) => parseYaml(input) ?? {},
      stringify: () => {
        throw new Error("YAML stringify is not supported")
      },
    },
  },
}

export function emptyCareersFile(): ParsedCareersFile {
  return { config: EMPTY_CONFIG, positions: [] }
}

export function filterPublishedJobPositions(positions: JobPosition[]): JobPosition[] {
  return positions.filter((job) => job.published)
}

export function filterOpenJobPositions(positions: JobPosition[]): JobPosition[] {
  return positions.filter((job) => job.status === "open" && job.published === true)
}

export function findJobPositionBySlug(positions: JobPosition[], slug: string): JobPosition | null {
  return positions.find((job) => job.slug === slug) ?? null
}

export function parseOpenPositionsFile(source: string): ParsedCareersFile {
  const parts = source.split(JOB_SEPARATOR)
  const header = parts[0] ?? ""
  const jobChunks = parts.slice(1)

  const config = parseFileConfig(header)
  const positions: JobPosition[] = []
  const seenIds = new Set<string>()
  const seenSlugs = new Set<string>()

  jobChunks.forEach((chunk, index) => {
    const trimmed = chunk.trim()
    if (!trimmed) return

    const job = parseJobChunk(trimmed, index)

    if (seenIds.has(job.id)) {
      throw new CareersContentError(`Duplicate job id "${job.id}"`)
    }
    if (seenSlugs.has(job.slug)) {
      throw new CareersContentError(`Duplicate job slug "${job.slug}"`)
    }

    seenIds.add(job.id)
    seenSlugs.add(job.slug)
    positions.push(job)
  })

  const jobMarkerCount = source.split(JOB_SEPARATOR).length - 1
  if (jobMarkerCount > 0 && positions.length === 0) {
    throw new CareersContentError(
      `Markdown contains ${jobMarkerCount} job section(s) but none were parsed. Check YAML frontmatter and required fields.`,
    )
  }

  return { config, positions }
}

function parseFileConfig(header: string): CareersFileConfig {
  try {
    const parsed = matter(header, matterOptions)
    const result = careersFileConfigSchema.safeParse(parsed.data)
    if (!result.success) {
      throw new CareersContentError(
        `Invalid careers file configuration: ${formatZodIssues(result.error.issues)}`,
      )
    }
    return {
      generalApplicationEmail: result.data.generalApplicationEmail,
      generalApplicationUrl: result.data.generalApplicationUrl,
    }
  } catch (error) {
    if (error instanceof CareersContentError) throw error
    throw new CareersContentError(
      `Failed to parse careers file configuration: ${error instanceof Error ? error.message : "unknown error"}`,
    )
  }
}

function parseJobChunk(chunk: string, index: number): JobPosition {
  let parsed: ReturnType<typeof matter>
  try {
    parsed = matter(chunk, matterOptions)
  } catch (error) {
    throw new CareersContentError(
      `Malformed frontmatter in job ${index + 1}: ${error instanceof Error ? error.message : "unknown error"}`,
    )
  }

  const result = jobFrontmatterSchema.safeParse(parsed.data)
  if (!result.success) {
    throw new CareersContentError(
      `Invalid job at index ${index} (${describeJob(parsed.data)}): ${formatZodIssues(result.error.issues)}`,
    )
  }

  const data = result.data
  const description = parsed.content.trim() || data.summary

  return {
    id: data.id,
    slug: data.slug,
    status: data.status,
    published: data.published,
    title: data.title,
    department: data.department,
    location: data.location,
    employmentType: data.employmentType,
    workMode: data.workMode,
    summary: data.summary,
    description,
    responsibilities: data.responsibilities,
    requirements: data.requirements,
    niceToHave: data.niceToHave,
    compensation: data.compensation,
    benefits: data.benefits,
    applicationNotes: data.applicationNotes,
    applicationEmail: data.applicationEmail,
    applicationUrl: data.applicationUrl,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
    tags: data.tags,
    seo: data.seo,
  }
}

function describeJob(data: unknown): string {
  if (!data || typeof data !== "object") return "untitled"
  const record = data as Record<string, unknown>
  if (typeof record.slug === "string" && record.slug.trim()) return record.slug
  if (typeof record.title === "string" && record.title.trim()) return record.title
  return "untitled"
}

function formatZodIssues(issues: { path: (string | number | symbol)[]; message: string }[]): string {
  return issues
    .map((issue) => {
      const path = issue.path.map(String).join(".") || "job"
      return `${path}: ${issue.message}`
    })
    .join("; ")
}
