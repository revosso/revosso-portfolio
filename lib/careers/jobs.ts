import { existsSync, readFileSync } from "node:fs"
import { join } from "node:path"
import {
  filterOpenJobPositions,
  filterPublishedJobPositions,
  findJobPositionBySlug,
  parseOpenPositionsFile,
} from "@/lib/careers/parse-open-positions"
import { CareersContentError } from "@/lib/careers/types"
import type { CareersFileConfig, JobPosition, ParsedCareersFile } from "@/lib/careers/types"

export const OPEN_POSITIONS_PATH = join(process.cwd(), "content/careers/open-positions.md")

let cachedFile: ParsedCareersFile | null = null

export function loadCareersFile(filePath: string = OPEN_POSITIONS_PATH): ParsedCareersFile {
  if (!existsSync(filePath)) {
    throw new CareersContentError(`Missing careers content file: ${filePath}`)
  }

  try {
    const source = readFileSync(filePath, "utf8")
    return parseOpenPositionsFile(source)
  } catch (error) {
    if (error instanceof CareersContentError) throw error
    throw new CareersContentError(
      `Failed to read careers content file ${filePath}: ${error instanceof Error ? error.message : "unknown error"}`,
    )
  }
}

function loadParsedFile(): ParsedCareersFile {
  if (process.env.NODE_ENV === "production" && cachedFile) {
    return cachedFile
  }

  const parsed = loadCareersFile(OPEN_POSITIONS_PATH)
  if (process.env.NODE_ENV === "production") {
    cachedFile = parsed
  }
  return parsed
}

export function getAllJobPositions(): JobPosition[] {
  return loadParsedFile().positions
}

export function getPublishedJobPositions(): JobPosition[] {
  return filterPublishedJobPositions(getAllJobPositions())
}

export function getOpenJobPositions(): JobPosition[] {
  return filterOpenJobPositions(getAllJobPositions())
}

export function getJobPositionBySlug(slug: string): JobPosition | null {
  return findJobPositionBySlug(getAllJobPositions(), slug)
}

export function getCareersFileConfig(): CareersFileConfig {
  return loadParsedFile().config
}

export function getPublicJobPositionBySlug(slug: string): JobPosition | null {
  const job = getJobPositionBySlug(slug)
  if (!job || job.status !== "open" || job.published !== true) {
    return null
  }
  return job
}

export function getSiteUrl(): string {
  return (process.env.NEXT_PUBLIC_SITE_URL || "https://revosso.com").replace(/\/$/, "")
}
