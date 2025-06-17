import type React from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Sufyan Ahmed - Software Engineer",
    template: "%s | Sufyan Ahmed",
  },
  description:
    "Passionate Software Engineer specializing in MERN stack, WebRTC, Socket.IO, and modern web technologies.",
  keywords: ["software engineer", "MERN stack", "WebRTC", "Socket.IO", "PostgreSQL", "full-stack developer"],
  authors: [{ name: "Sufyan Ahmed" }],
  creator: "Sufyan Ahmed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sufyanahmed.dev",
    title: "Sufyan Ahmed - Software Engineer",
    description: "Passionate Software Engineer specializing in modern web technologies",
    siteName: "Sufyan Ahmed Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sufyan Ahmed - Software Engineer",
    description: "Passionate Software Engineer specializing in modern web technologies",
    creator: "@sufyanahmed",
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
