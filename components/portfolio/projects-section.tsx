"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play, FolderOpen, Filter, Code, Globe, Database, Smartphone } from "lucide-react"
import Link from "next/link"

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Web Apps", "Mobile", "APIs", "Tools"]

  const projects = [
    {
      id: 1,
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, and video calls using WebRTC and Socket.IO.",
      category: "Web Apps",
      technologies: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB"],
      image: "/placeholder.svg?height=300&width=400",
      videoUrl: "https://youtube.com/watch?v=example1",
      githubUrl: "https://github.com/sufyanahmed/chat-app",
      liveUrl: "https://chat-app-sufyan.vercel.app",
      featured: true,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      category: "Web Apps",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
      image: "/placeholder.svg?height=300&width=400",
      videoUrl: "https://youtube.com/watch?v=example2",
      githubUrl: "https://github.com/sufyanahmed/ecommerce",
      liveUrl: "https://ecommerce-sufyan.vercel.app",
      featured: true,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Task Management API",
      description:
        "RESTful API for task management with authentication, role-based access control, and real-time notifications.",
      category: "APIs",
      technologies: ["Express.js", "MongoDB", "JWT", "Socket.IO", "Redis"],
      image: "/placeholder.svg?height=300&width=400",
      githubUrl: "https://github.com/sufyanahmed/task-api",
      liveUrl: "https://api.tasks-sufyan.com",
      featured: false,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      title: "React Native Fitness App",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      category: "Mobile",
      technologies: ["React Native", "Expo", "Firebase", "Redux", "AsyncStorage"],
      image: "/placeholder.svg?height=300&width=400",
      videoUrl: "https://youtube.com/watch?v=example4",
      githubUrl: "https://github.com/sufyanahmed/fitness-app",
      featured: false,
      color: "from-orange-500 to-red-500",
    },
    {
      id: 5,
      title: "Code Snippet Manager",
      description:
        "Developer tool for organizing and sharing code snippets with syntax highlighting and team collaboration.",
      category: "Tools",
      technologies: ["Vue.js", "Node.js", "MySQL", "Prism.js", "Docker"],
      image: "/placeholder.svg?height=300&width=400",
      githubUrl: "https://github.com/sufyanahmed/snippet-manager",
      liveUrl: "https://snippets-sufyan.vercel.app",
      featured: false,
      color: "from-indigo-500 to-purple-500",
    },
    {
      id: 6,
      title: "Weather Dashboard",
      description: "Beautiful weather application with forecasts, maps, and personalized weather alerts.",
      category: "Web Apps",
      technologies: ["React", "OpenWeather API", "Chart.js", "Geolocation"],
      image: "/placeholder.svg?height=300&width=400",
      githubUrl: "https://github.com/sufyanahmed/weather-dashboard",
      liveUrl: "https://weather-sufyan.vercel.app",
      featured: false,
      color: "from-teal-500 to-cyan-500",
    },
  ]

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  const featuredProjects = projects.filter((project) => project.featured)

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Web Apps":
        return Globe
      case "Mobile":
        return Smartphone
      case "APIs":
        return Database
      case "Tools":
        return Code
      default:
        return FolderOpen
    }
  }

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 glass-effect">
            <FolderOpen className="w-4 h-4 mr-2" />
            My Work
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold font-poppins mb-8 text-center">Highlighted Work</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden glass-effect neomorphism hover:scale-105 transition-all duration-300">
                  <div className="relative">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20 group-hover:opacity-30 transition-opacity`}
                    />

                    {/* Play button for video */}
                    {project.videoUrl && (
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <Button size="lg" className="rounded-full">
                          <Play className="w-6 h-6" />
                        </Button>
                      </div>
                    )}

                    <div className="absolute top-4 left-4">
                      <Badge className="bg-background/80 text-foreground">Featured</Badge>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold font-poppins">{project.title}</h3>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex space-x-3 pt-2">
                      <Button asChild size="sm" className="flex-1">
                        <Link href={project.liveUrl || "#"} target="_blank">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </Link>
                      </Button>
                      <Button asChild variant="outline" size="sm">
                        <Link href={project.githubUrl} target="_blank">
                          <Github className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <div className="flex items-center space-x-2 mr-4">
            <Filter className="w-5 h-5 text-muted-foreground" />
            <span className="font-medium">Filter:</span>
          </div>
          {categories.map((category) => {
            const IconComponent = getCategoryIcon(category)
            return (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
                className="glass-effect"
              >
                <IconComponent className="w-4 h-4 mr-2" />
                {category}
              </Button>
            )
          })}
        </motion.div>

        {/* All Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group overflow-hidden glass-effect neomorphism hover:scale-105 transition-all duration-300 h-full">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                  />
                </div>

                <div className="p-5 space-y-3 flex flex-col h-full">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg font-poppins">{project.title}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">{project.description}</p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <div className="flex space-x-2 pt-2">
                    {project.liveUrl && (
                      <Button asChild size="sm" className="flex-1 text-xs">
                        <Link href={project.liveUrl} target="_blank">
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Demo
                        </Link>
                      </Button>
                    )}
                    <Button asChild variant="outline" size="sm">
                      <Link href={project.githubUrl} target="_blank">
                        <Github className="w-3 h-3" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
