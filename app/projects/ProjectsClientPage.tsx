"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  ExternalLink,
  Github,
  Search,
  FileJson,
  ListTodo,
  StickyNote,
  Hash,
  Key,
  FileCode,
  Calculator,
  Palette,
  QrCode,
  Code,
  Database,
} from "lucide-react"
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

export default function ProjectsClientPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Converters", "Generators", "Utilities", "Productivity"]

  const projects = [
    {
      id: 1,
      title: "JSON Formatter & Validator",
      description: "Format, validate, and minify JSON data with syntax highlighting and error detection.",
      category: "Converters",
      icon: FileJson,
      techStack: ["React", "Monaco Editor", "TypeScript"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/json-formatter",
      sourceUrl: "https://github.com/mydevtools/json-formatter",
      featured: true,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 2,
      title: "Smart Todo Manager",
      description: "AI-powered task management with priority sorting, deadlines, and productivity insights.",
      category: "Productivity",
      icon: ListTodo,
      techStack: ["Next.js", "Supabase", "AI/ML"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/todo",
      sourceUrl: "https://github.com/mydevtools/todo-manager",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 3,
      title: "Advanced Note Editor",
      description: "Rich text editor with markdown support, real-time collaboration, and cloud sync.",
      category: "Productivity",
      icon: StickyNote,
      techStack: ["React", "TipTap", "WebRTC"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/notes",
      sourceUrl: "https://github.com/mydevtools/note-editor",
      featured: false,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "UUID Generator",
      description: "Generate various types of UUIDs with bulk generation and format options.",
      category: "Generators",
      icon: Hash,
      techStack: ["JavaScript", "Crypto API"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/uuid-generator",
      sourceUrl: "https://github.com/mydevtools/uuid-generator",
      featured: false,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Password & Hash Generator",
      description: "Secure password generation and various hashing algorithms including bcrypt, SHA, MD5.",
      category: "Generators",
      icon: Key,
      techStack: ["Node.js", "Crypto", "bcrypt"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/password-generator",
      sourceUrl: "https://github.com/mydevtools/password-tools",
      featured: false,
      color: "from-red-500 to-pink-500",
    },
    {
      id: 6,
      title: "YAML to TOML Converter",
      description: "Convert between YAML, TOML, JSON formats with validation and formatting.",
      category: "Converters",
      icon: FileCode,
      techStack: ["JavaScript", "YAML", "TOML"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/yaml-converter",
      sourceUrl: "https://github.com/mydevtools/format-converter",
      featured: false,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 7,
      title: "Developer Calculator",
      description: "Multi-base calculator with programmer functions, bit operations, and unit conversions.",
      category: "Utilities",
      icon: Calculator,
      techStack: ["React", "Math.js"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/calculator",
      sourceUrl: "https://github.com/mydevtools/dev-calculator",
      featured: false,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 8,
      title: "Color Palette Generator",
      description: "Generate beautiful color palettes with accessibility checks and export options.",
      category: "Utilities",
      icon: Palette,
      techStack: ["React", "Chroma.js", "Canvas API"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/color-palette",
      sourceUrl: "https://github.com/mydevtools/color-tools",
      featured: false,
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 9,
      title: "QR Code Generator",
      description: "Generate QR codes with custom styling, logos, and various data formats.",
      category: "Generators",
      icon: QrCode,
      techStack: ["React", "QR.js", "Canvas"],
      image: "/placeholder.svg?height=200&width=300",
      demoUrl: "/tools/qr-generator",
      sourceUrl: "https://github.com/mydevtools/qr-generator",
      featured: false,
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredProjects = projects.filter((project) => project.featured)

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
                <Code className="mr-2 h-3 w-3" />
                Our Projects
              </Badge>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Developer Tools <span className="gradient-text">Showcase</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed">
              Explore our comprehensive collection of developer tools and utilities, each designed to solve specific
              problems and boost your productivity.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="container py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Featured Projects</h2>
            <p className="text-muted-foreground">Our most popular and powerful tools</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <motion.div key={project.id} variants={itemVariants}>
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 text-foreground">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className={`rounded-lg bg-gradient-to-br ${project.color} p-2`}>
                        <project.icon className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">{project.title}</h3>
                        <Badge variant="secondary" className="text-xs">
                          {project.category}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-3 pt-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.demoUrl}>
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.sourceUrl} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* All Projects */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">All Projects</h2>
              <p className="text-muted-foreground">Browse our complete collection of developer tools</p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    size="sm"
                    onClick={() => setSelectedCategory(category)}
                    className="text-xs"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={containerVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => (
                <motion.div key={project.id} variants={itemVariants}>
                  <Card className="group overflow-hidden border-0 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="relative">
                      <img
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-40 object-cover"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                      />
                    </div>
                    <div className="p-5 space-y-3 flex flex-col h-full">
                      <div className="flex items-center space-x-3">
                        <div className={`rounded-lg bg-gradient-to-br ${project.color} p-2`}>
                          <project.icon className="h-4 w-4 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base truncate">{project.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {project.techStack.slice(0, 3).map((tech, techIndex) => (
                          <Badge key={techIndex} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                        {project.techStack.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{project.techStack.length - 3}
                          </Badge>
                        )}
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button asChild size="sm" className="flex-1 text-xs">
                          <Link href={project.demoUrl}>
                            <ExternalLink className="mr-1 h-3 w-3" />
                            Demo
                          </Link>
                        </Button>
                        <Button asChild variant="outline" size="sm">
                          <Link href={project.sourceUrl} target="_blank">
                            <Github className="h-3 w-3" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div variants={itemVariants} className="text-center py-12">
                <Database className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">No projects found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/50">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter">
              Have an Idea for a Tool?
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground max-w-2xl mx-auto">
              We're always looking to add new tools to our collection. Suggest a feature or contribute to our
              open-source project.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="https://github.com/mydevtools/repo/issues" target="_blank">
                  Suggest a Tool
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="https://github.com/mydevtools/repo" target="_blank">
                  Contribute Code
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
