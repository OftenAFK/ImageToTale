"use client"

import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { Upload, Loader, Share2, MessageCircle } from "lucide-react"

export default function GeneratePage() {
  const router = useRouter()
  const { isAuthenticated, loading } = useAuth()
  const { t } = useLanguage()
  const [image, setImage] = useState(null)
  const [story, setStory] = useState(null)
  const [isGenerating, setIsGenerating] = useState(false)
  const [error, setError] = useState("")
  const [storyTitle, setStoryTitle] = useState("")
  const [fileName, setFileName] = useState("")

  useEffect(() => {
    if (!loading && !isAuthenticated) {
      router.push("/login")
    }
  }, [loading, isAuthenticated, router])

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        setImage(event.target?.result)
        setStory(null)
      }
      reader.readAsDataURL(file)
      setFileName(file.name)
    }
  }

  const handleGenerateStory = async () => {
    setError("")
    if (!image) {
      setError(t("pleaseUploadImage"))
      return
    }

    setIsGenerating(true)
    try {
      const response = await fetch("/api/generate-story", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fileName: fileName,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Failed to generate story")
      }

      const data = await response.json()
      setStory(data.story)
      setStoryTitle(data.title)
      localStorage.setItem(`story_${Date.now()}`, data.story)
    } catch (err) {
      console.error("[v0] Generation error:", err)
      setError(err.message || t("failedToGenerate"))
    } finally {
      setIsGenerating(false)
    }
  }

  const handleShareStory = () => {
    if (story) {
      navigator.clipboard.writeText(story)
      alert(t("storyOnClipboard"))
    }
  }

  const handleSubmitReview = () => {
    router.push("/reviews")
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center h-screen">
          <Loader className="w-8 h-8 animate-spin text-accent" />
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("generateStory")}
        </h1>
        <p className="text-muted-foreground mb-12">{t("uploadImageAndKey")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Upload */}
          <div>
            <div className="bg-card rounded-xl border-2 border-dashed border-border p-8 text-center hover:border-accent/50 transition-all duration-300 mb-6 card-hover">
              <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" id="image-upload" />
              <label htmlFor="image-upload" className="cursor-pointer block">
                {image ? (
                  <div className="space-y-4">
                    <img
                      src={image || "/placeholder.svg"}
                      alt="Uploaded"
                      className="max-h-80 mx-auto rounded-lg shadow-lg"
                    />
                    <p className="text-sm text-muted-foreground">{t("clickToChangeImage")}</p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <Upload className="w-12 h-12 mx-auto text-accent" />
                    <div>
                      <p className="font-semibold text-foreground mb-1">{t("dropImageHere")}</p>
                      <p className="text-sm text-muted-foreground">{t("orClickToBrowse")}</p>
                    </div>
                  </div>
                )}
              </label>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <p className="text-sm text-muted-foreground mb-4">
                Upload an image and click the button below to generate an AI-inspired story instantly!
              </p>

              {error && (
                <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm mb-4">
                  {error}
                </div>
              )}

              <button
                onClick={handleGenerateStory}
                disabled={isGenerating}
                className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:scale-100 text-accent-foreground font-semibold rounded-lg transition-all duration-200 flex items-center justify-center gap-2 smooth-hover"
              >
                {isGenerating ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    {t("generating")}
                  </>
                ) : (
                  t("generateStory")
                )}
              </button>
            </div>
          </div>

          {/* Right Side - Story Display */}
          <div>
            {story ? (
              <div className="bg-card rounded-xl border border-border p-8 h-full card-hover flex flex-col">
                <h2 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  {storyTitle}
                </h2>
                <p className="text-muted-foreground text-sm mb-4">{t("yourGeneratedStory")}</p>
                <div className="prose prose-invert max-w-none flex-1">
                  <p className="text-foreground leading-relaxed whitespace-pre-wrap text-sm">{story}</p>
                </div>

                <div className="flex gap-3 mt-6 pt-6 border-t border-border">
                  <button
                    onClick={handleShareStory}
                    className="flex-1 py-2 px-4 bg-gradient-to-r from-primary to-accent hover:shadow-md text-accent-foreground rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 smooth-hover hover:scale-105 active:scale-95"
                  >
                    <Share2 className="w-4 h-4" />
                    {t("shareStory")}
                  </button>
                  <button
                    onClick={handleSubmitReview}
                    className="flex-1 py-2 px-4 bg-muted hover:bg-accent/20 hover:text-accent text-foreground rounded-lg transition-all text-sm font-semibold flex items-center justify-center gap-2 smooth-hover hover:scale-105 active:scale-95"
                  >
                    <MessageCircle className="w-4 h-4" />
                    {t("submitReview")}
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-card rounded-xl border border-border p-8 h-full flex flex-col items-center justify-center text-center min-h-96 card-hover">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mb-4 shadow-lg">
                  <Upload className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-2">{t("readyToCreate")}</h3>
                <p className="text-muted-foreground">{t("uploadImageAndKey")}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
