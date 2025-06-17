"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Github,
  Twitter,
  Linkedin,
  Youtube,
  Instagram,
  Mail,
  ExternalLink,
  Users,
  MessageCircle,
  Star,
  GitFork,
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

export default function SocialClientPage() {
  const socialPlatforms = [
    {
      name: "GitHub",
      handle: "@mydevtools",
      description: "Follow our open-source projects, contribute code, and report issues",
      url: "https://github.com/mydevtools",
      icon: Github,
      color: "from-gray-700 to-gray-900",
      stats: { label: "Stars", value: "2.5K+" },
      featured: true,
    },
    {
      name: "Twitter",
      handle: "@mydevtools",
      description: "Get updates, tips, and engage with our developer community",
      url: "https://twitter.com/mydevtools",
      icon: Twitter,
      color: "from-blue-400 to-blue-600",
      stats: { label: "Followers", value: "1.2K+" },
      featured: true,
    },
    {
      name: "LinkedIn",
      handle: "MyDevTools",
      description: "Professional updates and industry insights for developers",
      url: "https://linkedin.com/company/mydevtools",
      icon: Linkedin,
      color: "from-blue-600 to-blue-800",
      stats: { label: "Connections", value: "800+" },
      featured: false,
    },
    {
      name: "YouTube",
      handle: "MyDevTools",
      description: "Tutorials, tool demos, and developer productivity content",
      url: "https://youtube.com/@mydevtools",
      icon: Youtube,
      color: "from-red-500 to-red-700",
      stats: { label: "Subscribers", value: "500+" },
      featured: true,
    },
    {
      name: "Instagram",
      handle: "@mydevtools",
      description: "Behind-the-scenes content and visual development tips",
      url: "https://instagram.com/mydevtools",
      icon: Instagram,
      color: "from-pink-500 to-purple-600",
      stats: { label: "Followers", value: "300+" },
      featured: false,
    },
    {
      name: "Email",
      handle: "hello@mydevtools.com",
      description: "Direct communication for partnerships and support",
      url: "mailto:hello@mydevtools.com",
      icon: Mail,
      color: "from-green-500 to-green-700",
      stats: { label: "Response", value: "24h" },
      featured: false,
    },
  ]

  const communityStats = [
    { icon: Users, label: "Community Members", value: "10K+", color: "text-blue-500" },
    { icon: MessageCircle, label: "Monthly Discussions", value: "500+", color: "text-green-500" },
    { icon: Star, label: "GitHub Stars", value: "2.5K+", color: "text-yellow-500" },
    { icon: GitFork, label: "Project Forks", value: "150+", color: "text-purple-500" },
  ]

  const featuredPlatforms = socialPlatforms.filter((platform) => platform.featured)
  const otherPlatforms = socialPlatforms.filter((platform) => !platform.featured)

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
                <Users className="mr-2 h-3 w-3" />
                Connect With Us
              </Badge>
            </motion.div>
            <motion.h1 variants={itemVariants} className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Join Our <span className="gradient-text">Developer Community</span>
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl text-muted-foreground leading-relaxed">
              Connect with us across various platforms, stay updated with the latest features, and be part of our
              growing community of developers.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="border-y border-border/50 bg-muted/20">
        <div className="container py-12">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-2 gap-8 md:grid-cols-4"
          >
            {communityStats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="flex flex-col items-center space-y-2 text-center"
              >
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
                <div className="text-2xl font-bold md:text-3xl">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Platforms */}
      <section className="container py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="space-y-12"
        >
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Main Platforms</h2>
            <p className="text-muted-foreground">Our primary channels for community engagement</p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2">
            {featuredPlatforms.map((platform, index) => (
              <motion.div key={platform.name} variants={itemVariants}>
                <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background/50 to-background/80 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full">
                  <div className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className={`rounded-xl bg-gradient-to-br ${platform.color} p-4`}>
                          <platform.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xl">{platform.name}</h3>
                          <p className="text-muted-foreground text-sm">{platform.handle}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold">{platform.stats.value}</div>
                        <div className="text-xs text-muted-foreground">{platform.stats.label}</div>
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{platform.description}</p>

                    <Button asChild className="w-full group-hover:shadow-lg transition-shadow">
                      <Link href={platform.url} target="_blank">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Follow on {platform.name}
                      </Link>
                    </Button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Other Platforms */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-12"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">More Ways to Connect</h2>
              <p className="text-muted-foreground">Additional channels to stay in touch</p>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {otherPlatforms.map((platform, index) => (
                <motion.div key={platform.name} variants={itemVariants}>
                  <Card className="group overflow-hidden border-0 bg-background/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-xl h-full">
                    <div className="p-6 space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className={`rounded-lg bg-gradient-to-br ${platform.color} p-3`}>
                          <platform.icon className="h-5 w-5 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-lg">{platform.name}</h3>
                          <p className="text-muted-foreground text-sm truncate">{platform.handle}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold">{platform.stats.value}</div>
                          <div className="text-xs text-muted-foreground">{platform.stats.label}</div>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm leading-relaxed">{platform.description}</p>

                      <Button asChild variant="outline" className="w-full">
                        <Link href={platform.url} target="_blank">
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Connect
                        </Link>
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Contribution Graph Placeholder */}
      <section className="border-t border-border/50">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="space-y-8"
          >
            <motion.div variants={itemVariants} className="text-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">Our Activity</h2>
              <p className="text-muted-foreground">See our latest contributions and project updates</p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <Card className="p-8 bg-gradient-to-br from-green-50/50 to-green-100/50 dark:from-green-950/20 dark:to-green-900/20 border-green-200/50 dark:border-green-800/50">
                <div className="text-center space-y-4">
                  <Github className="h-16 w-16 text-green-500 mx-auto" />
                  <h3 className="text-xl font-bold">GitHub Activity</h3>
                  <p className="text-muted-foreground">Check out our contribution graph and recent commits on GitHub</p>
                  <Button asChild size="lg">
                    <Link href="https://github.com/mydevtools" target="_blank">
                      <Github className="mr-2 h-5 w-5" />
                      View on GitHub
                    </Link>
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="border-t border-border/50 bg-muted/20">
        <div className="container py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-2xl mx-auto text-center space-y-6"
          >
            <motion.h2 variants={itemVariants} className="text-3xl font-bold tracking-tighter">
              Stay Updated
            </motion.h2>
            <motion.p variants={itemVariants} className="text-muted-foreground">
              Get the latest updates, new tool releases, and developer tips delivered to your inbox
            </motion.p>
            <motion.div variants={itemVariants}>
              <Card className="p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  <Button className="px-6">Subscribe</Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  No spam, unsubscribe at any time. We respect your privacy.
                </p>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
