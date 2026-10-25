import { describe, expect, it } from "vitest"
import { JOBS } from "@/content/careers/jobs"
import { buildJobPostingJsonLd } from "@/lib/careers/job-posting"
import { getOpenJobs, getPublicJob } from "@/lib/careers/jobs"
import { LANDING_LOCALES } from "@/lib/landing-locale"

describe("careers content", () => {
  it("has unique slugs in the expected format", () => {
    const slugs = JOBS.map((job) => job.slug)
    expect(new Set(slugs).size).toBe(slugs.length)
    for (const slug of slugs) expect(slug).toMatch(/^[a-z0-9]+(?:-[a-z0-9]+)*$/)
  })

  it("has complete copy in every locale for published roles", () => {
    for (const job of JOBS.filter((j) => j.published)) {
      for (const locale of LANDING_LOCALES) {
        const copy = job.copy[locale]
        expect(copy, `${job.slug} ${locale}`).toBeDefined()
        expect(copy.title.trim(), `${job.slug} ${locale} title`).not.toBe("")
        expect(copy.summary.trim(), `${job.slug} ${locale} summary`).not.toBe("")
        expect(copy.overview.length, `${job.slug} ${locale} overview`).toBeGreaterThan(0)
        expect(copy.responsibilities.length, `${job.slug} ${locale} responsibilities`).toBe(job.copy.en.responsibilities.length)
        expect(copy.requirements.length, `${job.slug} ${locale} requirements`).toBe(job.copy.en.requirements.length)
        expect(copy.niceToHave.length, `${job.slug} ${locale} niceToHave`).toBe(job.copy.en.niceToHave.length)
      }
    }
  })

  it("contains no em dashes in visitor-facing copy", () => {
    expect(JSON.stringify(JOBS.map((job) => job.copy))).not.toContain("—")
  })

  it("has valid ISO dates", () => {
    for (const job of JOBS) {
      expect(Number.isNaN(Date.parse(job.datePosted)), job.slug).toBe(false)
      if (job.applicationDeadline) expect(Number.isNaN(Date.parse(job.applicationDeadline)), job.slug).toBe(false)
    }
  })
})

describe("careers lookups", () => {
  it("only exposes open, published roles", () => {
    for (const job of getOpenJobs()) {
      expect(job.status).toBe("open")
      expect(job.published).toBe(true)
    }
    const hidden = JOBS.find((job) => !job.published || job.status !== "open")
    if (hidden) expect(getPublicJob(hidden.slug)).toBeNull()
    expect(getPublicJob("does-not-exist")).toBeNull()
  })
})

describe("JobPosting JSON-LD", () => {
  it("uses only confirmed fields", () => {
    const job = getOpenJobs()[0]
    const posting = buildJobPostingJsonLd(job, "fr", "https://revosso.com", "https://revosso.com/logo.png")
    expect(posting.title).toBe(job.copy.fr.title)
    expect(posting.datePosted).toBe(job.datePosted)
    expect(posting.employmentType).toEqual(["FULL_TIME", "PART_TIME"])
    expect(posting.jobLocationType).toBe("TELECOMMUTE")
    expect(posting.hiringOrganization.name).toBe("Revosso LTDA")
    expect(posting).not.toHaveProperty("baseSalary")
    expect(posting).not.toHaveProperty("applicantLocationRequirements")
    expect(posting).not.toHaveProperty("validThrough")
  })
})
