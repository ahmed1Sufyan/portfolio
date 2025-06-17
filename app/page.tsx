"use client"

import { PortfolioLayout } from "@/components/portfolio/portfolio-layout"
import { HeroSection } from "@/components/portfolio/hero-section"
import { AboutSection } from "@/components/portfolio/about-section"
import { ProjectsSection } from "@/components/portfolio/projects-section"
import { BlogSection } from "@/components/portfolio/blog-section"
import { ContactSection } from "@/components/portfolio/contact-section"

export default function HomePage() {
  return (
    <PortfolioLayout>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <BlogSection />
      <ContactSection />
    </PortfolioLayout>
  )
}
