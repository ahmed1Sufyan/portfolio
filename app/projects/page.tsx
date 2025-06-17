import ProjectsClientPage from "./ProjectsClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore our collection of developer tools and utilities built for modern development workflows.",
}

export default function ProjectsPage() {
  return <ProjectsClientPage />
}
