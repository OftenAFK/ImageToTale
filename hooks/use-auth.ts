"use client"

import { useState, useEffect } from "react"

export interface User {
  id: string
  email: string
  name: string
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem("imageTailUser")
    if (stored) {
      try {
        setUser(JSON.parse(stored))
        setIsAuthenticated(true)
      } catch (e) {
        setIsAuthenticated(false)
      }
    }
    setLoading(false)
  }, [])

  const login = (email: string, password: string) => {
    // Simple client-side validation
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name: email.split("@")[0],
    }
    localStorage.setItem("imageTailUser", JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    return userData
  }

  const signup = (email: string, password: string, name: string) => {
    const userData: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
    }
    localStorage.setItem("imageTailUser", JSON.stringify(userData))
    setUser(userData)
    setIsAuthenticated(true)
    return userData
  }

  const logout = () => {
    localStorage.removeItem("imageTailUser")
    setUser(null)
    setIsAuthenticated(false)
  }

  return {
    user,
    loading,
    isAuthenticated,
    login,
    signup,
    logout,
  }
}
