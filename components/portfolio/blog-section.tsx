"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { BookOpen, Calendar, Clock, ArrowRight, Tag, TrendingUp } from "lucide-react"
import Link from "next/link"

export function BlogSection() {
  const blogPosts = [
    {
      id: 1,
      title: "Building Real-time Applications with WebRTC and Socket.IO",
      excerpt:
        "Learn how to create seamless real-time communication features in your web applications using modern technologies.",
      content: "In this comprehensive guide, we'll explore the fundamentals of WebRTC and Socket.IO...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["WebRTC", "Socket.IO", "Real-time", "JavaScript"],
      publishedAt: "2024-01-15",
      readingTime: 8,
      featured: true,
      category: "Tutorial",
    },
    {
      id: 2,
      title: "Optimizing Database Queries in PostgreSQL",
      excerpt: "Best practices and techniques for improving database performance and query optimization.",
      content: "Database optimization is crucial for application performance...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["PostgreSQL", "Database", "Performance", "SQL"],
      publishedAt: "2024-01-10",
      readingTime: 12,
      featured: true,
      category: "Database",
    },
    {
      id: 3,
      title: "Modern React Patterns and Best Practices",
      excerpt: "Explore advanced React patterns that will make your code more maintainable and scalable.",
      content: "React has evolved significantly over the years...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["React", "JavaScript", "Frontend", "Best Practices"],
      publishedAt: "2024-01-05",
      readingTime: 10,
      featured: false,
      category: "Frontend",
    },
    {
      id: 4,
      title: "Deploying Full-Stack Applications with Docker",
      excerpt: "A complete guide to containerizing and deploying your MERN stack applications.",
      content: "Docker has revolutionized the way we deploy applications...",
      coverImage: "/placeholder.svg?height=200&width=300",
      tags: ["Docker", "Deployment", "DevOps", "MERN"],
      publishedAt: "2023-12-28",
      readingTime: 15,
      featured: false,
      category: "DevOps",
    },
  ]

  const featuredPosts = blogPosts.filter((post) => post.featured)
  const recentPosts = blogPosts.filter((post) => !post.featured)

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <section id="blog" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 glass-effect">
            <BookOpen className="w-4 h-4 mr-2" />
            Blog & Articles
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Latest <span className="gradient-text">Insights</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Sharing knowledge and experiences from my journey in software development.
          </p>
        </motion.div>

        {/* Featured Posts */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-8">
            <TrendingUp className="w-5 h-5 text-primary" />
            <h3 className="text-2xl font-bold font-poppins">Featured Articles</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="group overflow-hidden glass-effect neomorphism hover:scale-105 transition-all duration-300 h-full">
                  <div className="relative">
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground">Featured</Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge variant="secondary" className="mb-2">
                        {post.category}
                      </Badge>
                      <h3 className="text-xl font-bold text-white font-poppins line-clamp-2">{post.title}</h3>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <p className="text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-2">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border/50">
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span>{formatDate(post.publishedAt)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{post.readingTime} min read</span>
                        </div>
                      </div>

                      <Button variant="ghost" size="sm" className="group">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div>
          <h3 className="text-2xl font-bold font-poppins mb-8">Recent Articles</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="group glass-effect neomorphism hover:bg-muted/50 transition-all duration-300 p-6">
                  <div className="flex space-x-4">
                    <img
                      src={post.coverImage || "/placeholder.svg"}
                      alt={post.title}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1 space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge variant="secondary" className="text-xs">
                          {post.category}
                        </Badge>
                        <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                          <Clock className="w-3 h-3" />
                          <span>{post.readingTime} min</span>
                        </div>
                      </div>

                      <h4 className="font-bold font-poppins line-clamp-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h4>

                      <p className="text-sm text-muted-foreground line-clamp-2">{post.excerpt}</p>

                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{formatDate(post.publishedAt)}</span>
                        <Button variant="ghost" size="sm" className="text-xs">
                          Read More
                          <ArrowRight className="w-3 h-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button asChild size="lg" className="group">
            <Link href="/blog">
              View All Articles
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
