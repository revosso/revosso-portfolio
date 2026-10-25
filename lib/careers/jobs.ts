import { CAREERS_EMAIL, JOBS, type Job } from "@/content/careers/jobs"

export function isPublicJob(job: Job): boolean {
  return job.status === "open" && job.published
}

/** Open, published roles in the order they're listed in `content/careers/jobs.ts`. */
export function getOpenJobs(): Job[] {
  return JOBS.filter(isPublicJob)
}

export function getPublicJob(slug: string): Job | null {
  const job = JOBS.find((j) => j.slug === slug)
  return job && isPublicJob(job) ? job : null
}

export function applicationEmail(job: Job): string {
  return job.applicationEmail ?? CAREERS_EMAIL
}
