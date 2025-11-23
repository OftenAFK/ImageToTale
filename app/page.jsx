"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { useLanguage } from "@/hooks/use-language"
import { useEffect, useState } from "react"
import { Navbar } from "@/components/navbar"
import { ArrowRight, Sparkles, Users, BookOpen, Heart } from "lucide-react"

export default function HomePage() {
  const router = useRouter()
  const { isAuthenticated, loading } = useAuth()
  const { t } = useLanguage()
  const [mounted, setMounted] = useState(false)
  const searchParams = useSearchParams()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              {t("transformImages")}
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">{t("letAiCreativity")}</p>
          <button
            onClick={() => (isAuthenticated ? router.push("/generate") : router.push("/signup"))}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:gradient-hover text-accent-foreground font-bold rounded-xl text-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            {t("generateStoryNow")}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {[
            {
              icon: Sparkles,
              titleKey: "aiPowered",
              descKey: "aiPoweredDesc",
            },
            {
              icon: BookOpen,
              titleKey: "creativeStories",
              descKey: "creativeStoriesDesc",
            },
            {
              icon: Users,
              titleKey: "community",
              descKey: "communityDesc",
            },
            {
              icon: Heart,
              titleKey: "easyToUse",
              descKey: "easyToUseDesc",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-card p-6 rounded-xl border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer group hover:shadow-lg overflow-hidden relative"
            >
              {/* Gradient overlay that animates on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <feature.icon className="w-8 h-8 text-accent mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="font-bold text-lg mb-2 group-hover:text-accent transition-colors duration-300">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground text-sm">{t(feature.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="bg-card border-y border-border py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">{t("About ImageToTale")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">{t("whatWeDo")}</h3>
              <p className="text-muted-foreground">{t("whatWeDoDesc")}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">{t("whyChooseUs")}</h3>
              <p className="text-muted-foreground">{t("whyChooseUsDesc")}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-accent">{t("communityDriven")}</h3>
              <p className="text-muted-foreground">{t("communityDrivenDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h2 className="text-4xl font-bold mb-12 text-center">{t("meetOurTeam")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Himanshu Gupta", rollNumber: "2410990347" },
            { name: "Iqbal Singh", rollNumber: "2410990354" },
            { name: "Itishjot Singh", rollNumber: "2410990366" },
            { name: "Karan Anjoria", rollNumber: "2410990373" },
          ].map((member) => (
            <div key={member.rollNumber} className="text-center group cursor-pointer">
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                <div className="w-20 h-20 bg-card rounded-full flex items-center justify-center">
                  <Users className="w-10 h-10 text-muted-foreground" />
                </div>
              </div>
              <h3 className="font-bold text-lg mb-1 group-hover:text-accent transition-colors duration-300">
                {member.name}
              </h3>
              <p className="text-muted-foreground text-sm">{member.rollNumber}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <p className="text-muted-foreground">{t("footer")}</p>
            </div>
            <div className="flex gap-6">
              <button
                onClick={() => router.push("/contact")}
                className="text-muted-foreground hover:text-accent hover:scale-105 transition-all duration-300"
              >
                {t("contact")}
              </button>
              <button
                onClick={() => router.push("/reviews")}
                className="text-muted-foreground hover:text-accent hover:scale-105 transition-all duration-300"
              >
                {t("reviews")}
              </button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  )
}
