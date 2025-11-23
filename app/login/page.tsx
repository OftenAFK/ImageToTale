"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Eye, EyeOff } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const { login } = useAuth()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    try {
      login(email, password)
      router.push("/")
    } catch (err) {
      setError("Login failed. Please try again.")
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
            ImageToTale
          </h1>
          <p className="text-muted-foreground">Welcome back to your storytelling journey</p>
        </div>

        <div className="bg-card rounded-2xl p-8 shadow-lg border border-border">
          <h2 className="text-2xl font-bold text-foreground mb-6">Sign In</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {error && (
              <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-accent-foreground font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-muted-foreground mt-6">
            Don't have an account?{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-accent hover:text-accent/80 font-semibold transition-colors"
            >
              Sign Up
            </button>
          </p>
        </div>

        <p className="text-center text-muted-foreground text-sm mt-8">
          Transform your images into captivating stories with AI
        </p>
      </div>
    </div>
  )
}
