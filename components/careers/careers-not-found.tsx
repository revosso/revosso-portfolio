"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLandingSite } from "@/components/landing/landing-site-shell"

export function CareersNotFoundContent() {
  const { copy } = useLandingSite()
  const notFound = copy.careers.notFound

  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="max-w-lg text-center space-y-6" role="alert">
        <h1 className="text-3xl sm:text-4xl font-bold">
          <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
            {notFound.title}
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-300">{notFound.message}</p>
        <Button
          asChild
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
        >
          <Link href="/careers">
            <ArrowLeft className="mr-2 h-4 w-4" aria-hidden="true" />
            {notFound.back}
          </Link>
        </Button>
      </div>
    </main>
  )
}
