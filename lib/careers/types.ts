export type JobStatus = "open" | "closed"

export type JobSeo = {
  title: string
  description: string
}

export type JobPosition = {
  id: string
  slug: string
  status: JobStatus
  published: boolean
  title: string
  department: string
  location: string | null
  employmentType: string | null
  workMode: string | null
  summary: string
  description: string
  responsibilities: string[]
  requirements: string[]
  niceToHave: string[]
  compensation: string | null
  benefits: string[]
  applicationNotes: string | null
  applicationEmail: string | null
  applicationUrl: string | null
  createdAt: string
  updatedAt: string | null
  tags: string[]
  seo: JobSeo
}

export type CareersFileConfig = {
  generalApplicationEmail: string | null
  generalApplicationUrl: string | null
}

export type ParsedCareersFile = {
  config: CareersFileConfig
  positions: JobPosition[]
}

export class CareersContentError extends Error {
  constructor(message: string) {
    super(message)
    this.name = "CareersContentError"
  }
}
