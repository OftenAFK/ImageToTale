"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"
import { ThemeToggle } from "./theme-toggle"
import { LanguageToggle } from "./language-toggle"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Navbar() {
  const router = useRouter()
  const { isAuthenticated, user, logout } = useAuth()
  const { t } = useLanguage()
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50 smooth-hover">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button onClick={() => router.push("/")} className="flex items-center gap-2 cursor-pointer group">
            <div className="w-8 h-8 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:shadow-lg group-hover:scale-110 smooth-hover" />
            <span className="font-bold text-xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent hidden sm:inline">
              ImageToTale
            </span>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => router.push("/")}
              className="text-muted-foreground hover:text-accent smooth-hover font-medium"
            >
              {t("home")}
            </button>
            <button
              onClick={() => router.push("/generate")}
              className="text-muted-foreground hover:text-accent smooth-hover font-medium"
            >
              {t("generate")}
            </button>
            <button
              onClick={() => router.push("/contact")}
              className="text-muted-foreground hover:text-accent smooth-hover font-medium"
            >
              {t("contact")}
            </button>
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <LanguageToggle />
            <ThemeToggle />
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground hidden sm:inline">{user?.name}</span>
                <button
                  onClick={() => {
                    logout()
                    router.push("/login")
                  }}
                  className="px-4 py-2 rounded-lg bg-muted hover:bg-accent/20 text-foreground hover:text-accent transition-all text-sm font-semibold smooth-hover"
                >
                  {t("logout")}
                </button>
              </div>
            ) : (
              <button
                onClick={() => router.push("/login")}
                className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-accent-foreground rounded-lg hover:shadow-lg hover:scale-105 active:scale-95 transition-all text-sm font-semibold smooth-hover"
              >
                {t("signin")}
              </button>
            )}

            {/* Mobile menu button */}
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-2">
            <button
              onClick={() => {
                router.push("/")
                setMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-accent hover:bg-muted transition-colors rounded-lg"
            >
              {t("home")}
            </button>
            <button
              onClick={() => {
                router.push("/generate")
                setMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-accent hover:bg-muted transition-colors rounded-lg"
            >
              {t("generate")}
            </button>
            <button
              onClick={() => {
                router.push("/contact")
                setMenuOpen(false)
              }}
              className="block w-full text-left px-4 py-2 text-muted-foreground hover:text-accent hover:bg-muted transition-colors rounded-lg"
            >
              {t("contact")}
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
