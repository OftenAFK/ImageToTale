"use client"

import { useState, useEffect } from "react"

export interface Review {
  id: string
  author: string
  rating: number
  text: string
  timestamp: number
  replies: Reply[]
  userId: string
}

export interface Reply {
  id: string
  author: string
  text: string
  timestamp: number
  userId: string
}

const STORAGE_KEY = "imageTailReviews"

export function useReviews() {
  const [reviews, setReviews] = useState<Review[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      try {
        setReviews(JSON.parse(stored))
      } catch (e) {
        setReviews([])
      }
    }
    setLoading(false)
  }, [])

  const addReview = (author: string, rating: number, text: string, userId: string) => {
    const newReview: Review = {
      id: Math.random().toString(36).substr(2, 9),
      author,
      rating,
      text,
      timestamp: Date.now(),
      replies: [],
      userId,
    }
    const updated = [newReview, ...reviews]
    setReviews(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    return newReview
  }

  const addReply = (reviewId: string, author: string, text: string, userId: string) => {
    const updated = reviews.map((review) => {
      if (review.id === reviewId) {
        const newReply: Reply = {
          id: Math.random().toString(36).substr(2, 9),
          author,
          text,
          timestamp: Date.now(),
          userId,
        }
        return { ...review, replies: [...review.replies, newReply] }
      }
      return review
    })
    setReviews(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  const deleteReview = (reviewId: string) => {
    const updated = reviews.filter((r) => r.id !== reviewId)
    setReviews(updated)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
  }

  return {
    reviews,
    loading,
    addReview,
    addReply,
    deleteReview,
  }
}
