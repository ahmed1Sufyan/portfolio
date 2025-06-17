"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { BookOpen, Plus, Edit, Trash2, Save, Eye, Calendar, Clock, Tag, Upload, FileText } from "lucide-react"

export function BlogManager() {
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Building Real-time Applications with WebRTC and Socket.IO",
      excerpt:
        "Learn how to create seamless real-time communication features in your web applications using modern technologies.",
      content:
        "In this comprehensive guide, we'll explore the fundamentals of WebRTC and Socket.IO and how to integrate them into your applications...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["WebRTC", "Socket.IO", "Real-time", "JavaScript"],
      category: "Tutorial",
      publishedAt: "2024-01-15",
      readingTime: 8,
      published: true,
      featured: true,
    },
    {
      id: 2,
      title: "Optimizing Database Queries in PostgreSQL",
      excerpt: "Best practices and techniques for improving database performance and query optimization.",
      content:
        "Database optimization is crucial for application performance. In this article, we'll cover various techniques...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["PostgreSQL", "Database", "Performance", "SQL"],
      category: "Database",
      publishedAt: "2024-01-10",
      readingTime: 12,
      published: true,
      featured: true,
    },
    {
      id: 3,
      title: "Modern React Patterns and Best Practices",
      excerpt: "Explore advanced React patterns that will make your code more maintainable and scalable.",
      content:
        "React has evolved significantly over the years. Let's explore the latest patterns and best practices...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["React", "JavaScript", "Frontend", "Best Practices"],
      category: "Frontend",
      publishedAt: "2024-01-05",
      readingTime: 10,
      published: false,
      featured: false,
    },
  ])

  const [editingPost, setEditingPost] = useState<any>(null)
  const [isAddingNew, setIsAddingNew] = useState(false)

  const categories = ["Tutorial", "Database", "Frontend", "Backend", "DevOps", "Mobile", "AI/ML"]

  const handleSavePost = (postData: any) => {
    if (editingPost) {
      setBlogPosts(blogPosts.map((post) => (post.id === editingPost.id ? { ...postData, id: editingPost.id } : post)))
      setEditingPost(null)
    } else {
      setBlogPosts([
        ...blogPosts,
        {
          ...postData,
          id: Date.now(),
          publishedAt: new Date().toISOString().split("T")[0],
          readingTime: Math.ceil(postData.content.split(" ").length / 200), // Estimate reading time
        },
      ])
      setIsAddingNew(false)
    }
  }

  const handleDeletePost = (id: number) => {
    setBlogPosts(blogPosts.filter((post) => post.id !== id))
  }

  const handleTogglePublished = (id: number) => {
    setBlogPosts(blogPosts.map((post) => (post.id === id ? { ...post, published: !post.published } : post)))
  }

  const handleToggleFeatured = (id: number) => {
    setBlogPosts(blogPosts.map((post) => (post.id === id ? { ...post, featured: !post.featured } : post)))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poppins mb-2">Blog Manager</h1>
          <p className="text-muted-foreground">Create and manage your blog posts and articles.</p>
        </div>
        <Button onClick={() => setIsAddingNew(true)}>
          <Plus className="w-4 h-4 mr-2" />
          New Blog Post
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="p-4 glass-effect neomorphism">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">{blogPosts.length}</p>
              <p className="text-sm text-muted-foreground">Total Posts</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 glass-effect neomorphism">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Eye className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">{blogPosts.filter((post) => post.published).length}</p>
              <p className="text-sm text-muted-foreground">Published</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 glass-effect neomorphism">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">{blogPosts.filter((post) => !post.published).length}</p>
              <p className="text-sm text-muted-foreground">Drafts</p>
            </div>
          </div>
        </Card>

        <Card className="p-4 glass-effect neomorphism">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Tag className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-2xl font-bold">{blogPosts.filter((post) => post.featured).length}</p>
              <p className="text-sm text-muted-foreground">Featured</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Add/Edit Form */}
      {(isAddingNew || editingPost) && (
        <BlogPostForm
          post={editingPost}
          categories={categories}
          onSave={handleSavePost}
          onCancel={() => {
            setIsAddingNew(false)
            setEditingPost(null)
          }}
        />
      )}

      {/* Blog Posts List */}
      <div className="space-y-6">
        {blogPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onEdit={() => setEditingPost(post)}
            onDelete={() => handleDeletePost(post.id)}
            onTogglePublished={() => handleTogglePublished(post.id)}
            onToggleFeatured={() => handleToggleFeatured(post.id)}
          />
        ))}
      </div>
    </motion.div>
  )
}

function BlogPostForm({ post, categories, onSave, onCancel }: any) {
  const [formData, setFormData] = useState({
    title: post?.title || "",
    excerpt: post?.excerpt || "",
    content: post?.content || "",
    coverImage: post?.coverImage || "",
    tags: post?.tags?.join(", ") || "",
    category: post?.category || categories[0],
    published: post?.published || false,
    featured: post?.featured || false,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave({
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    })
  }

  return (
    <Card className="p-6 glass-effect neomorphism">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold font-poppins">{post ? "Edit Blog Post" : "Create New Blog Post"}</h2>
        <Button variant="ghost" onClick={onCancel}>
          Cancel
        </Button>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Title</label>
          <Input
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Enter blog post title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Excerpt</label>
          <Textarea
            value={formData.excerpt}
            onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
            placeholder="Brief description of the post..."
            rows={3}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Content</label>
          <Textarea
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            placeholder="Write your blog post content here..."
            rows={12}
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-2">Cover Image</label>
            <div className="flex space-x-2">
              <Input
                value={formData.coverImage}
                onChange={(e) => setFormData({ ...formData, coverImage: e.target.value })}
                placeholder="Image URL"
              />
              <Button type="button" variant="outline" size="icon">
                <Upload className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Category</label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 rounded-md border border-border bg-background"
            >
              {categories.map((category: string) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Tags (comma-separated)</label>
          <Input
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            placeholder="React, JavaScript, Tutorial"
          />
        </div>

        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.published}
              onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
            />
            <label className="text-sm font-medium">Published</label>
          </div>

          <div className="flex items-center space-x-2">
            <Switch
              checked={formData.featured}
              onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
            />
            <label className="text-sm font-medium">Featured</label>
          </div>
        </div>

        <div className="flex space-x-4">
          <Button type="submit" className="flex-1">
            <Save className="w-4 h-4 mr-2" />
            Save Post
          </Button>
          <Button type="button" variant="outline" onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </Card>
  )
}

function BlogPostCard({ post, onEdit, onDelete, onTogglePublished, onToggleFeatured }: any) {
  return (
    <Card className="p-6 glass-effect neomorphism">
      <div className="flex space-x-6">
        <div className="w-32 h-24 rounded-lg overflow-hidden bg-muted flex-shrink-0">
          <img src={post.coverImage || "/placeholder.svg"} alt={post.title} className="w-full h-full object-cover" />
        </div>

        <div className="flex-1 space-y-3">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <h3 className="font-bold text-lg font-poppins line-clamp-1">{post.title}</h3>
                {post.featured && <Badge className="text-xs">Featured</Badge>}
                <Badge variant={post.published ? "default" : "secondary"} className="text-xs">
                  {post.published ? "Published" : "Draft"}
                </Badge>
              </div>
              <p className="text-muted-foreground text-sm line-clamp-2 mb-2">{post.excerpt}</p>

              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Calendar className="w-3 h-3" />
                  <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="w-3 h-3" />
                  <span>{post.readingTime} min read</span>
                </div>
                <Badge variant="outline" className="text-xs">
                  {post.category}
                </Badge>
              </div>
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
            {post.tags.slice(0, 4).map((tag: string) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex items-center space-x-4 pt-2 border-t border-border/50">
            <div className="flex items-center space-x-2">
              <Switch checked={post.published} onCheckedChange={onTogglePublished} />
              <span className="text-sm">Published</span>
            </div>
            <div className="flex items-center space-x-2">
              <Switch checked={post.featured} onCheckedChange={onToggleFeatured} />
              <span className="text-sm">Featured</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
