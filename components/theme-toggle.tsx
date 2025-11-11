"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    const newDark = !isDark
    setIsDark(newDark)
    localStorage.setItem("theme", newDark ? "dark" : "light")
    if (newDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }

  if (!mounted) return null

  return (
    <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted transition-colors" aria-label="Toggle theme">
      {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-foreground" />}
    </button>
  )
}
