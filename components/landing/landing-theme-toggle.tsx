"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

export function LandingThemeToggle({ label }: { label: string }) {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <button
      type="button"
      className="relative inline-flex size-11 items-center justify-center rounded-rv text-rv-muted transition-colors hover:bg-rv-surface-2 hover:text-rv-text"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label={label}
    >
      <Sun className="size-[1.1rem] dark:hidden" strokeWidth={1.75} aria-hidden="true" />
      <Moon className="hidden size-[1.1rem] dark:block" strokeWidth={1.75} aria-hidden="true" />
    </button>
  )
}
