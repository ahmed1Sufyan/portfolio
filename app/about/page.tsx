import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about MyDevTools mission, vision, and the team behind the ultimate developer toolkit.",
}

export default function AboutPage() {
  return <AboutPageClient />
}
