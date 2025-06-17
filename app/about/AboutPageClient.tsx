"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Eye, Users, Calendar, Code, Rocket, Heart, Award, Github, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

export default function AboutPageClient() {
  const timeline = [
    {
      year: "2023",
      title: "The Beginning",
      description: "Started as a personal project to solve common developer pain points",
      icon: Rocket,
    },
    {
      year: "2023",
      title: "First Release",
      description: "Launched with 5 essential tools and gained first 100 users",
      icon: Code,
    },
    {
      year: "2024",
      title: "Community Growth",
      description: "Reached 1K+ users and received first community contributions",
      icon: Users,
    },
    {
      year: "2024",
      title: "Major Update",
      description: "Added 15+ new tools and redesigned the entire interface",
      icon: Award,
    },
  ]

  const technologies = [
    "Next.js",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
    "Vercel",
    "GitHub Actions",
    "ESLint",
    "Prettier",
    "Shadcn/ui",
  ]

  const teamMember = {
    name: "Alex Johnson",
    role: "Founder & Lead Developer",
    bio: "Full-stack developer with 8+ years of experience building developer tools and web applications. Passionate about creating solutions that make developers' lives easier.",
    avatar: "/placeholder.svg?height=200&width=200",
    social: {
      github: "https://github.com/alexjohnson",
      twitter: "https://twitter.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
    },
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />

        <div className="container relative">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="mx-auto max-w-3xl text-center space-y-6"
          >
            <motion.div variants={itemVariants}>
              <Badge variant="outline" className="mb-4">
                <Heart className="mr-2 h-3 w-3" />
                About Us
              </Badge>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Building Tools That <span className="gradient-text">Developers Love</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed">
              We're on a mission to create the most comprehensive and user-friendly developer toolkit, making everyday
              development tasks effortless and enjoyable.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid gap-8 md:grid-cols-2"
        >
          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full bg-gradient-to-br from-blue-50/50 to-blue-100/50 dark:from-blue-950/20 dark:to-blue-900/20 border-blue-200/50 dark:border-blue-800/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Target className="h-6 w-6 text-blue-500" />
                </div>
                <h2 className="text-2xl font-bold">Our Mission</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To democratize access to high-quality developer tools by creating an open-source platform that brings
                together all the utilities developers need in their daily workflow. We believe that great tools should
                be accessible to everyone, regardless of budget or company size.
              </p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="p-8 h-full bg-gradient-to-br from-purple-50/50 to-purple-100/50 dark:from-purple-950/20 dark:to-purple-900/20 border-purple-200/50 dark:border-purple-800/50">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Eye className="h-6 w-6 text-purple-500" />
                </div>
                <h2 className="text-2xl font-bold">Our Vision</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To become the go-to platform for developers worldwide, fostering a community where innovation thrives
                and productivity soars. We envision a future where developers can focus on what they do best - creating
                amazing software - while we handle the tooling.
              </p>
            </Card>
          </motion.div>
        </motion.div>
      </section>

      {/* Timeline */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="container py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <Badge variant="outline">
                <Calendar className="mr-2 h-3 w-3" />
                Our Journey
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">From Idea to Reality</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Follow our journey from a simple idea to a thriving open-source project
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-400" />

              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                  >
                    <div className={`flex-1 ${index % 2 === 0 ? "md:pr-8" : "md:pl-8"}`}>
                      <Card className="p-6 ml-12 md:ml-0">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="p-2 bg-primary/10 rounded-lg">
                            <item.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-primary">{item.year}</div>
                            <h3 className="font-bold text-lg">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-muted-foreground">{item.description}</p>
                      </Card>
                    </div>

                    <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technologies */}
      <section className="container py-16 md:py-24">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <Badge variant="outline">
              <Code className="mr-2 h-3 w-3" />
              Tech Stack
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Built with Modern Technologies</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We use cutting-edge technologies to ensure the best performance and developer experience
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm bg-background/50 backdrop-blur-sm border border-border/50 hover:border-foreground/20 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Team */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="container py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <Badge variant="outline">
                <Users className="mr-2 h-3 w-3" />
                Meet the Team
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">The People Behind MyDevTools</h2>
            </motion.div>

            <motion.div variants={itemVariants} className="max-w-2xl mx-auto">
              <Card className="p-8 text-center">
                <div className="space-y-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-blue-400 to-purple-400 p-1">
                    <img
                      src={teamMember.avatar || "/placeholder.svg"}
                      alt={teamMember.name}
                      className="w-full h-full rounded-full object-cover bg-background"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{teamMember.name}</h3>
                    <p className="text-primary font-medium">{teamMember.role}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{teamMember.bio}</p>
                  <div className="flex justify-center space-x-4">
                    <Button variant="outline" size="icon" asChild>
                      <Link href={teamMember.social.github} target="_blank">
                        <Github className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={teamMember.social.twitter} target="_blank">
                        <Twitter className="h-4 w-4" />
                      </Link>
                    </Button>
                    <Button variant="outline" size="icon" asChild>
                      <Link href={teamMember.social.linkedin} target="_blank">
                        <Linkedin className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50">
        <div className="container py-16 md:py-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Join Our Mission
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              Help us build the future of developer tools. Contribute to our open-source project or simply start using
              our tools today.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/login">Start Using Tools</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/mydevtools/repo" target="_blank">
                  Contribute on GitHub
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
