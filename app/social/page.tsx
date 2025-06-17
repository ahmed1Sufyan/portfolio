import SocialClientPage from "./SocialClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Social",
  description: "Connect with MyDevTools on social media and join our developer community.",
}

export default function SocialPage() {
  return <SocialClientPage />
}
