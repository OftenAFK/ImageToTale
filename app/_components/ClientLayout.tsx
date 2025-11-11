"use client"

import { Analytics } from "@vercel/analytics/next"
import { type ReactNode, useEffect, useState } from "react"

export function ClientLayout({ children }: { children: ReactNode }) {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    const isDarkMode = savedTheme === "dark" || (savedTheme === null && prefersDark)
    setIsDark(isDarkMode)
    applyTheme(isDarkMode)
  }, [])

  const applyTheme = (isDarkMode: boolean) => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
    applyTheme(newDark)
  }

  if (!mounted) return null

  return (
    <>
      {children}
      <Analytics />
    </>
  )
}
