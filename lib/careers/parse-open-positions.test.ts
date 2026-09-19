import { mkdtempSync, writeFileSync } from "node:fs"
import { tmpdir } from "node:os"
import { join } from "node:path"
import { describe, expect, it } from "vitest"
import { loadCareersFile, OPEN_POSITIONS_PATH } from "@/lib/careers/jobs"
import { buildJobPostingJsonLd } from "@/lib/careers/job-posting"
import {
  filterOpenJobPositions,
  filterPublishedJobPositions,
  findJobPositionBySlug,
  parseOpenPositionsFile,
} from "@/lib/careers/parse-open-positions"
import { CareersContentError } from "@/lib/careers/types"
import type { JobPosition } from "@/lib/careers/types"

function jobBlock(overrides: Record<string, string | boolean | string[] | null> = {}): string {
  const fields = {
    id: "marketing-growth-specialist",
    slug: "marketing-growth-specialist",
    status: "open",
    published: true,
    title: "Marketing & Growth Specialist",
    department: "Marketing",
    employmentType: "Full-time",
    workMode: "Remote",
    location: "Montreal",
    createdAt: "2026-09-19",
    applicationEmail: "careers@revosso.com",
    applicationUrl: null,
    summary: "Help grow awareness of Revosso and its products.",
    ...overrides,
  }

  const yamlLines = [
    `id: ${fields.id}`,
    `slug: ${fields.slug}`,
    `status: ${fields.status}`,
    `published: ${fields.published}`,
    `title: ${JSON.stringify(fields.title)}`,
    `department: ${JSON.stringify(fields.department)}`,
    `employmentType: ${fields.employmentType === null ? "null" : JSON.stringify(fields.employmentType)}`,
    `workMode: ${fields.workMode === null ? "null" : JSON.stringify(fields.workMode)}`,
    `location: ${fields.location === null ? "null" : JSON.stringify(fields.location)}`,
    `createdAt: "${fields.createdAt}"`,
    `applicationEmail: ${fields.applicationEmail === null ? "null" : JSON.stringify(fields.applicationEmail)}`,
    `applicationUrl: ${fields.applicationUrl === null ? "null" : JSON.stringify(fields.applicationUrl)}`,
    `summary: ${JSON.stringify(fields.summary)}`,
    "responsibilities:",
    "  - Grow awareness of Revosso",
    "requirements: []",
    "niceToHave: []",
    "benefits: []",
  ]

  return `<!-- job -->
---
${yamlLines.join("\n")}
---

Overview for ${fields.title}.
`
}

function sourceWithJobs(...blocks: string[]): string {
  return `---
generalApplicationEmail: null
generalApplicationUrl: null
---

# Open positions

${blocks.join("\n")}
`
}

function sampleJob(overrides: Partial<JobPosition> = {}): JobPosition {
  return {
    id: "marketing-growth-specialist",
    slug: "marketing-growth-specialist",
    status: "open",
    published: true,
    title: "Marketing & Growth Specialist",
    department: "Marketing",
    location: "Montreal",
    employmentType: "Full-time",
    workMode: "Remote",
    summary: "Help grow awareness of Revosso.",
    description: "Create campaigns for RevoFin and RevoMaket.",
    responsibilities: ["Create campaigns"],
    requirements: [],
    niceToHave: [],
    compensation: null,
    benefits: [],
    applicationNotes: null,
    applicationEmail: "careers@revosso.com",
    applicationUrl: null,
    createdAt: "2026-09-19",
    updatedAt: "2026-09-19",
    tags: ["marketing"],
    seo: {
      title: "Marketing & Growth Specialist | Revosso",
      description: "Help grow awareness of Revosso.",
    },
    ...overrides,
  }
}

describe("parseOpenPositionsFile", () => {
  it("parses a valid open published job", () => {
    const parsed = parseOpenPositionsFile(sourceWithJobs(jobBlock()))
    expect(parsed.positions).toHaveLength(1)
    const job = parsed.positions[0]
    expect(job.slug).toBe("marketing-growth-specialist")
    expect(job.status).toBe("open")
    expect(job.published).toBe(true)
    expect(job.workMode).toBe("Remote")
    expect(job.createdAt).toBe("2026-09-19")
    expect(job.seo.title).toBe("Marketing & Growth Specialist | Revosso")
  })

  it("accepts postedAt and workArrangement aliases", () => {
    const block = `<!-- job -->
---
slug: alias-job
status: open
published: true
title: Alias Job
department: Sales
postedAt: "2026-01-02"
workArrangement: Hybrid
summary: Alias fields should map.
---
Body
`
    const parsed = parseOpenPositionsFile(sourceWithJobs(block))
    expect(parsed.positions[0].id).toBe("alias-job")
    expect(parsed.positions[0].createdAt).toBe("2026-01-02")
    expect(parsed.positions[0].workMode).toBe("Hybrid")
  })

  it("excludes unpublished jobs from open listings", () => {
    const parsed = parseOpenPositionsFile(sourceWithJobs(jobBlock({ published: false })))
    expect(parsed.positions).toHaveLength(1)
    expect(filterOpenJobPositions(parsed.positions)).toEqual([])
    expect(filterPublishedJobPositions(parsed.positions)).toEqual([])
  })

  it("excludes closed jobs from open listings even if published", () => {
    const parsed = parseOpenPositionsFile(sourceWithJobs(jobBlock({ status: "closed", published: true })))
    expect(filterPublishedJobPositions(parsed.positions)).toHaveLength(1)
    expect(filterOpenJobPositions(parsed.positions)).toEqual([])
  })

  it("returns null for an unknown slug", () => {
    const parsed = parseOpenPositionsFile(sourceWithJobs(jobBlock()))
    expect(findJobPositionBySlug(parsed.positions, "not-a-job")).toBeNull()
  })

  it("prefers an application URL over email", () => {
    const parsed = parseOpenPositionsFile(
      sourceWithJobs(
        jobBlock({
          applicationUrl: "https://revosso.com/apply",
          applicationEmail: "careers@revosso.com",
        }),
      ),
    )
    expect(parsed.positions[0].applicationUrl).toBe("https://revosso.com/apply")
    expect(parsed.positions[0].applicationEmail).toBe("careers@revosso.com")
  })

  it("supports email-only applications", () => {
    const parsed = parseOpenPositionsFile(
      sourceWithJobs(jobBlock({ applicationUrl: null, applicationEmail: "jobs@revosso.com" })),
    )
    expect(parsed.positions[0].applicationUrl).toBeNull()
    expect(parsed.positions[0].applicationEmail).toBe("jobs@revosso.com")
  })

  it("supports jobs with no application method", () => {
    const parsed = parseOpenPositionsFile(
      sourceWithJobs(jobBlock({ applicationUrl: null, applicationEmail: null })),
    )
    expect(parsed.positions[0].applicationUrl).toBeNull()
    expect(parsed.positions[0].applicationEmail).toBeNull()
  })

  it("throws when a job is missing a title", () => {
    const invalid = `<!-- job -->
---
slug: broken
status: open
published: true
department: Sales
createdAt: "2026-09-19"
summary: Missing title.
---
`
    expect(() => parseOpenPositionsFile(sourceWithJobs(invalid))).toThrow(CareersContentError)
    expect(() => parseOpenPositionsFile(sourceWithJobs(invalid))).toThrow(/title/i)
  })

  it("throws when a job is missing a slug", () => {
    const invalid = `<!-- job -->
---
title: Broken
status: open
published: true
department: Sales
createdAt: "2026-09-19"
summary: Missing slug.
---
`
    expect(() => parseOpenPositionsFile(sourceWithJobs(invalid))).toThrow(/slug/i)
  })

  it("throws when status is invalid", () => {
    expect(() => parseOpenPositionsFile(sourceWithJobs(jobBlock({ status: "hiring" })))).toThrow(
      /status/i,
    )
  })

  it("throws on invalid dates", () => {
    expect(() => parseOpenPositionsFile(sourceWithJobs(jobBlock({ createdAt: "not-a-date" })))).toThrow(
      /date/i,
    )
  })

  it("throws when a job section exists but cannot be parsed", () => {
    const source = `---
generalApplicationEmail: null
---

<!-- job -->

`
    expect(() => parseOpenPositionsFile(source)).toThrow(/none were parsed/)
  })

  it("parses published true even when YAML stores it as a string", () => {
    const block = `<!-- job -->
---
slug: string-published
status: OPEN
published: "true"
title: String Published
department: Sales
createdAt: "2026-09-19"
summary: Published should coerce from a string.
---
Body
`
    const parsed = parseOpenPositionsFile(sourceWithJobs(block))
    expect(parsed.positions[0].published).toBe(true)
    expect(parsed.positions[0].status).toBe("open")
    expect(filterOpenJobPositions(parsed.positions)).toHaveLength(1)
  })
})

describe("loadCareersFile", () => {
  it("throws when the file is missing", () => {
    expect(() => loadCareersFile("/tmp/revosso-careers-does-not-exist.md")).toThrow(CareersContentError)
  })

  it("reads a careers markdown file from disk", () => {
    const dir = mkdtempSync(join(tmpdir(), "revosso-careers-"))
    const filePath = join(dir, "open-positions.md")
    writeFileSync(filePath, sourceWithJobs(jobBlock()), "utf8")
    const parsed = loadCareersFile(filePath)
    expect(filterOpenJobPositions(parsed.positions)[0]?.slug).toBe("marketing-growth-specialist")
  })

  it("loads the repository markdown with three public open jobs", () => {
    const parsed = loadCareersFile(OPEN_POSITIONS_PATH)
    expect(parsed.positions).toHaveLength(3)
    expect(parsed.positions.map((job) => job.slug)).toEqual([
      "business-development-representative",
      "marketing-growth-specialist",
      "partnerships-product-sales-representative",
    ])
    expect(parsed.positions.every((job) => job.status === "open" && job.published === true)).toBe(true)
    expect(parsed.positions.every((job) => job.location === "Remote")).toBe(true)
    expect(parsed.positions.every((job) => job.employmentType === "Full-time / Part-time")).toBe(true)
    expect(filterOpenJobPositions(parsed.positions)).toHaveLength(3)
  })
})

describe("buildJobPostingJsonLd", () => {
  it("emits JobPosting schema for a public job with location", () => {
    const jsonLd = buildJobPostingJsonLd(sampleJob(), "https://revosso.com")
    expect(jsonLd).not.toBeNull()
    expect(jsonLd?.["@type"]).toBe("JobPosting")
    expect(jsonLd?.title).toBe("Marketing & Growth Specialist")
    expect(jsonLd?.jobLocationType).toBe("TELECOMMUTE")
    expect(jsonLd?.jobLocation?.address.addressLocality).toBe("Montreal")
  })

  it("does not emit schema for unpublished jobs", () => {
    expect(buildJobPostingJsonLd(sampleJob({ published: false }))).toBeNull()
  })

  it("does not emit schema for closed jobs", () => {
    expect(buildJobPostingJsonLd(sampleJob({ status: "closed" }))).toBeNull()
  })

  it("does not treat a Remote location as a physical city", () => {
    const jsonLd = buildJobPostingJsonLd(
      sampleJob({
        location: "Remote",
        workMode: "Remote",
      }),
      "https://revosso.com",
    )
    expect(jsonLd).not.toBeNull()
    expect(jsonLd?.jobLocationType).toBe("TELECOMMUTE")
    expect(jsonLd?.jobLocation).toBeUndefined()
  })

  it("does not invent a location when none is provided and the role is not remote", () => {
    expect(
      buildJobPostingJsonLd(
        sampleJob({
          location: null,
          workMode: null,
        }),
      ),
    ).toBeNull()
  })
})
