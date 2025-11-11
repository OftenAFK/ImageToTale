"use client"

import { useState } from "react"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"
import { useReviews } from "@/hooks/use-reviews"
import { Navbar } from "@/components/navbar"
import { Star, MessageCircle, Send, Trash2 } from "lucide-react"

export default function ReviewsPage() {
  const { isAuthenticated, user } = useAuth()
  const { t } = useLanguage()
  const { reviews, addReview, addReply, deleteReview } = useReviews()
  const [rating, setRating] = useState(5)
  const [reviewText, setReviewText] = useState("")
  const [expandedReview, setExpandedReview] = useState(null)
  const [replyText, setReplyText] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmitReview = (e) => {
    e.preventDefault()
    if (!reviewText.trim()) return
    if (!isAuthenticated || !user) {
      alert(t("pleaseLoginToReview"))
      return
    }

    addReview(user.name, rating, reviewText, user.id)
    setReviewText("")
    setRating(5)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const handleSubmitReply = (reviewId) => {
    if (!replyText.trim()) return
    if (!isAuthenticated || !user) {
      alert(t("pleaseLoginToReply"))
      return
    }

    addReply(reviewId, user.name, replyText, user.id)
    setReplyText("")
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("communityReviews")}
        </h1>
        <p className="text-muted-foreground mb-12">{t("shareYourExperienceDesc")}</p>

        {/* Review Form */}
        {isAuthenticated && (
          <div className="bg-card rounded-xl border border-border p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">{t("shareYourExperience")}</h2>
            <form onSubmit={handleSubmitReview} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">{t("ratingLabel")}</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      className={`transition-colors hover:scale-110 duration-300 ${star <= rating ? "text-accent" : "text-muted"}`}
                    >
                      <Star className="w-8 h-8 fill-current" />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">{t("yourReviewLabel")}</label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  placeholder={t("reviewPlaceholder")}
                  className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus resize-none h-32"
                />
              </div>

              {submitted && (
                <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 dark:text-green-400 text-sm">
                  {t("reviewPosted")}
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 active:scale-95 text-accent-foreground font-semibold rounded-lg transition-all smooth-hover"
              >
                {t("postReview")}
              </button>
            </form>
          </div>
        )}

        {!isAuthenticated && (
          <div className="bg-card rounded-xl border border-border p-6 mb-12 text-center">
            <p className="text-muted-foreground mb-4">{t("pleaseLoginToReview")}</p>
          </div>
        )}

        {/* Reviews List */}
        <div className="space-y-6">
          {reviews.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground">
              <p>{t("beFirstToShare")}</p>
            </div>
          ) : (
            reviews.map((review) => (
              <div key={review.id} className="bg-card rounded-xl border border-border overflow-hidden">
                {/* Main Review */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{review.author}</h3>
                      <p className="text-xs text-muted-foreground">{new Date(review.timestamp).toLocaleDateString()}</p>
                    </div>
                    {user?.id === review.userId && (
                      <button
                        onClick={() => deleteReview(review.id)}
                        className="text-destructive hover:text-destructive/80 transition-colors p-2 hover:scale-110 duration-300"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    )}
                  </div>

                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < review.rating ? "fill-accent text-accent" : "text-muted"}`}
                      />
                    ))}
                  </div>

                  <p className="text-foreground mb-4">{review.text}</p>

                  <button
                    onClick={() => setExpandedReview(expandedReview === review.id ? null : review.id)}
                    className="flex items-center gap-2 text-accent hover:text-accent/80 text-sm font-semibold transition-all hover:scale-105 duration-300"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {review.replies.length} {review.replies.length === 1 ? t("reply") : t("replies")}
                  </button>
                </div>

                {/* Replies Section */}
                {expandedReview === review.id && (
                  <div className="border-t border-border bg-muted/30 p-6">
                    <div className="space-y-4 mb-6">
                      {review.replies.map((reply) => (
                        <div key={reply.id} className="bg-card rounded-lg p-4 border border-border">
                          <div className="flex justify-between items-start">
                            <div className="mb-2">
                              <h4 className="font-semibold text-sm">{reply.author}</h4>
                              <p className="text-xs text-muted-foreground">
                                {new Date(reply.timestamp).toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                          <p className="text-foreground text-sm">{reply.text}</p>
                        </div>
                      ))}
                    </div>

                    {isAuthenticated && (
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={replyText}
                          onChange={(e) => setReplyText(e.target.value)}
                          placeholder={t("writeReply")}
                          className="flex-1 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus text-sm"
                        />
                        <button
                          onClick={() => handleSubmitReply(review.id)}
                          className="px-4 py-2 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg transition-all font-semibold text-sm flex items-center gap-2 hover:scale-105 active:scale-95 duration-300"
                        >
                          <Send className="w-4 h-4" />
                          {t("reply")}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </main>
  )
}
