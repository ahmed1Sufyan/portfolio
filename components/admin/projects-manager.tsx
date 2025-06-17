"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Plus, Edit, Trash2, ExternalLink, Github, GripVertical, Save, X, Upload, Play } from "lucide-react"

export function ProjectsManager() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Real-time Chat Application",
      description:
        "A modern chat application with real-time messaging, file sharing, and video calls using WebRTC and Socket.IO.",
      technologies: ["React", "Node.js", "Socket.IO", "WebRTC", "MongoDB"],
      githubUrl: "https://github.com/sufyanahmed/chat-app",
      liveUrl: "https://chat-app-sufyan.vercel.app",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://youtube.com/watch?v=example1",
      featured: true,
      order: 1,
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
      technologies: ["Next.js", "PostgreSQL", "Stripe", "Tailwind CSS", "Prisma"],
      githubUrl: "https://github.com/sufyanahmed/ecommerce",
      liveUrl: "https://ecommerce-sufyan.vercel.app",
      thumbnail: "/placeholder.svg?height=200&width=300",
      videoUrl: "https://youtube.com/watch?v=example2",
      featured: true,
      order: 2,
    },
  ])

  const [editingProject, setEditingProject] = useState<any>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)

  const handleSaveProject = (projectData: any) => {
    if (editingProject) {
      setProjects(projects.map((p) => (p.id === editingProject.id ? { ...projectData, id: editingProject.id } : p)))
      setEditingProject(null)
    } else {
      setProjects([...projects, { ...projectData, id: Date.now(), order: projects.length + 1 }])
      setIsAddingNew(false)
    }
  }

  const handleDeleteProject = (id: number) => {
    setProjects(projects.filter((p) => p.id !== id))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poppins mb-2">Projects Manager</h1>
          <p className="text-muted-foreground">Manage your portfolio projects and showcase your work.</p>
        </div>
        <Button onClick={() => setIsAddingNew(true)} className="glass-effect">
          <Plus className="w-5 h-5 mr-2" />
          Add New Project
        </Button>
      </div>

      {/* Add/Edit Form */}
      {(isAddingNew || editingProject) && (
        <ProjectForm
          project={editingProject}
          onSave={handleSaveProject}
          onCancel={() => {
            setIsAddingNew(false)
            setEditingProject(null)
          }}
        />
      )}

      {/* Projects List */}
      <div className="grid gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onEdit={() => setEditingProject(project)}
            onDelete={() => handleDeleteProject(project.id)}
          />
        ))}
      </div>
    </motion.div>
  )
}

function ProjectForm({ project, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: project?.title || "",
    description: project?.description || "",
    technologies: project?.technologies?.join(", ") || "",
    githubUrl: project?.githubUrl || "",
    liveUrl: project?.liveUrl || "",
    thumbnail: project?.thumbnail || "",
    videoUrl: project?.videoUrl || "",
    featured: project?.featured || false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      technologies: formData.technologies.split(",").map((t) => t.trim()),
    })
  }

  return (
    <Card className="p-6 glass-effect neomorphism">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-poppins">{project ? "Edit Project" : "Add New Project"}</h2>
        <Button variant="ghost" size="icon" onClick={onCancel}>
          <X className="w-5 h-5" />
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Project Title</label>
            <Input
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Enter project title"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Technologies (comma-separated)</label>
            <Input
              value={formData.technologies}
              onChange={(e) => setFormData({ ...formData, technologies: e.target.value })}
              placeholder="React, Node.js, MongoDB"
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Description</label>
          <Textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe your project..."
            rows={4}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">GitHub URL</label>
            <Input
              value={formData.githubUrl}
              onChange={(e) => setFormData({ ...formData, githubUrl: e.target.value })}
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Live Demo URL</label>
            <Input
              value={formData.liveUrl}
              onChange={(e) => setFormData({ ...formData, liveUrl: e.target.value })}
              placeholder="https://your-project.vercel.app"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Thumbnail Image</label>
            <div className="flex space-x-2">
              <Input
                value={formData.thumbnail}
                onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
                placeholder="Image URL or upload"
              />
              <Button type="button" variant="outline" size="icon">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Video Demo URL</label>
            <Input
              value={formData.videoUrl}
              onChange={(e) => setFormData({ ...formData, videoUrl: e.target.value })}
              placeholder="https://youtube.com/watch?v=..."
            />
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="rounded"
          />
          <label htmlFor="featured" className="text-sm font-medium">
            Mark as featured project
          </label>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="flex-1">
            <Save className="w-4 h-4 mr-2" />
            Save Project
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}

function ProjectCard({ project, onEdit, onDelete }: any) {
  return (
    <Card className="p-6 glass-effect neomorphism">
      <div className="flex space-x-6">
        {/* Drag Handle */}
        <div className="flex items-center">
          <GripVertical className="w-5 h-5 text-muted-foreground cursor-grab" />
        </div>

        {/* Thumbnail */}
        <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
          <img
            src={project.thumbnail || "/placeholder.svg"}
            alt={project.title}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center space-x-2 mb-1">
                <h3 className="font-bold text-lg font-poppins">{project.title}</h3>
                {project.featured && <Badge className="text-xs">Featured</Badge>}
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2">{project.description}</p>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" onClick={onEdit}>
                <Edit className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon" onClick={onDelete}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech: string) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-4 text-sm">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Live Demo</span>
              </a>
            )}
            {project.videoUrl && (
              <a
                href={project.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 text-muted-foreground hover:text-foreground"
              >
                <Play className="w-4 h-4" />
                <span>Video</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}
