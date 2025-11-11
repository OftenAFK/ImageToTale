"use client"

import { useState } from "react"
import { useLanguage } from "@/hooks/use-language"
import { Navbar } from "@/components/navbar"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const { t } = useLanguage()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [location, setLocation] = useState("")
  const [mobileNumber, setMobileNumber] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    setError("")

    if (!name || !email || !subject || !message) {
      setError(t("pleaseFillFields"))
      return
    }

    if (!email.includes("@")) {
      setError("Please enter a valid email")
      return
    }

    // Store contact message in localStorage
    const contactMessages = JSON.parse(localStorage.getItem("contactMessages") || "[]")
    contactMessages.push({
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      subject,
      message,
      location,
      mobileNumber,
      timestamp: Date.now(),
    })
    localStorage.setItem("contactMessages", JSON.stringify(contactMessages))

    setSubmitted(true)
    setName("")
    setEmail("")
    setSubject("")
    setMessage("")
    setLocation("")
    setMobileNumber("")

    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {t("getInTouch")}
        </h1>
        <p className="text-muted-foreground mb-12">{t("haveQuestions")}</p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t("emailLabel")}</h3>
                  <p className="text-muted-foreground">{t("contactEmail")}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone</h3>
                  <p className="text-muted-foreground">{t("contactPhone")}</p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-xl border border-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">{t("location")}</h3>
                  <p className="text-muted-foreground">{t("contactLocation")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-xl border border-border p-8 card-hover">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("nameLabel")}</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus"
                    placeholder={t("yourName")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("emailLabel")}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus"
                    placeholder={t("yourEmail")}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("location")}</label>
                    <input
                      type="text"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus"
                      placeholder={t("yourLocation")}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">{t("mobileNumber")}</label>
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus"
                      placeholder={t("yourMobile")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("subjectLabel")}</label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus"
                    placeholder={t("howCanWeHelp")}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">{t("messageLabel")}</label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground input-focus resize-none h-32"
                    placeholder={t("tellUsMore")}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-destructive text-sm">
                    {error}
                  </div>
                )}

                {submitted && (
                  <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg text-green-700 dark:text-green-400 text-sm">
                    {t("messageSuccess")}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-gradient-to-r from-primary to-accent hover:shadow-lg hover:scale-105 active:scale-95 text-accent-foreground font-semibold rounded-lg transition-all flex items-center justify-center gap-2 smooth-hover"
                >
                  <Send className="w-5 h-5" />
                  {t("sendMessage")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
