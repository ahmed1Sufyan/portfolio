"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  TrendingUp,
  Users,
  Eye,
  MousePointer,
  Download,
  ExternalLink,
  Calendar,
  Globe,
  Github,
  Mail,
  RefreshCw,
} from "lucide-react"

export function AnalyticsPanel() {
  const stats = [
    {
      title: "Total Views",
      value: "12,543",
      change: "+15.3%",
      changeType: "increase",
      icon: Eye,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Unique Visitors",
      value: "3,247",
      change: "+8.7%",
      changeType: "increase",
      icon: Users,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Project Clicks",
      value: "1,892",
      change: "+23.1%",
      changeType: "increase",
      icon: MousePointer,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Resume Downloads",
      value: "456",
      change: "+12.4%",
      changeType: "increase",
      icon: Download,
      color: "from-orange-500 to-red-500",
    },
  ]

  const projectStats = [
    {
      name: "Real-time Chat Application",
      views: 1234,
      githubClicks: 89,
      demoClicks: 156,
      trend: "+12%",
    },
    {
      name: "E-commerce Platform",
      views: 987,
      githubClicks: 67,
      demoClicks: 134,
      trend: "+8%",
    },
    {
      name: "Task Management API",
      views: 654,
      githubClicks: 45,
      demoClicks: 78,
      trend: "+15%",
    },
    {
      name: "React Native Fitness App",
      views: 432,
      githubClicks: 34,
      demoClicks: 56,
      trend: "+5%",
    },
  ]

  const blogStats = [
    {
      title: "Building Real-time Applications with WebRTC",
      views: 2345,
      readTime: "8 min",
      engagement: "92%",
      shares: 45,
    },
    {
      title: "Optimizing Database Queries in PostgreSQL",
      views: 1876,
      readTime: "12 min",
      engagement: "87%",
      shares: 32,
    },
    {
      title: "Modern React Patterns and Best Practices",
      views: 1543,
      readTime: "10 min",
      engagement: "89%",
      shares: 28,
    },
  ]

  const trafficSources = [
    { source: "Direct", percentage: 35, visitors: 1137 },
    { source: "Google Search", percentage: 28, visitors: 909 },
    { source: "GitHub", percentage: 15, visitors: 487 },
    { source: "LinkedIn", percentage: 12, visitors: 390 },
    { source: "Twitter", percentage: 10, visitors: 325 },
  ]

  const topCountries = [
    { country: "United States", visitors: 1245, percentage: 38 },
    { country: "United Kingdom", visitors: 567, percentage: 17 },
    { country: "Germany", visitors: 432, percentage: 13 },
    { country: "Canada", visitors: 321, percentage: 10 },
    { country: "Australia", visitors: 234, percentage: 7 },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poppins mb-2">Analytics Dashboard</h1>
          <p className="text-muted-foreground">Track your portfolio performance and engagement metrics.</p>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm">
            <Calendar className="w-4 h-4 mr-2" />
            Last 30 Days
          </Button>
          <Button variant="outline" size="sm">
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-6 glass-effect neomorphism">
              <div className="flex items-center justify-between mb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant={stat.changeType === "increase" ? "default" : "secondary"} className="text-xs">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  {stat.change}
                </Badge>
              </div>
              <h3 className="font-semibold text-muted-foreground mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Project Performance */}
        <Card className="p-6 glass-effect neomorphism">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Project Performance</h2>
          </div>

          <div className="space-y-4">
            {projectStats.map((project, index) => (
              <div key={project.name} className="p-4 bg-muted/30 rounded-lg">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold line-clamp-1">{project.name}</h3>
                  <Badge variant="secondary" className="text-xs">
                    {project.trend}
                  </Badge>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                      <Eye className="w-3 h-3" />
                      <span>Views</span>
                    </div>
                    <p className="font-bold">{project.views}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                      <Github className="w-3 h-3" />
                      <span>GitHub</span>
                    </div>
                    <p className="font-bold">{project.githubClicks}</p>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-1">
                      <ExternalLink className="w-3 h-3" />
                      <span>Demo</span>
                    </div>
                    <p className="font-bold">{project.demoClicks}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Blog Performance */}
        <Card className="p-6 glass-effect neomorphism">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Blog Performance</h2>
          </div>

          <div className="space-y-4">
            {blogStats.map((blog, index) => (
              <div key={blog.title} className="p-4 bg-muted/30 rounded-lg">
                <h3 className="font-semibold line-clamp-2 mb-3">{blog.title}</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="flex items-center space-x-1 text-muted-foreground mb-1">
                      <Eye className="w-3 h-3" />
                      <span>Views: {blog.views}</span>
                    </div>
                    <div className="flex items-center space-x-1 text-muted-foreground">
                      <ExternalLink className="w-3 h-3" />
                      <span>Shares: {blog.shares}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-muted-foreground mb-1">Read Time: {blog.readTime}</div>
                    <div className="text-muted-foreground">Engagement: {blog.engagement}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Traffic Sources */}
        <Card className="p-6 glass-effect neomorphism">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <Globe className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Traffic Sources</h2>
          </div>

          <div className="space-y-4">
            {trafficSources.map((source, index) => (
              <div key={source.source} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                    <Globe className="w-4 h-4" />
                  </div>
                  <span className="font-medium">{source.source}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="font-bold">{source.visitors}</p>
                    <p className="text-xs text-muted-foreground">{source.percentage}%</p>
                  </div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${source.percentage}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Top Countries */}
        <Card className="p-6 glass-effect neomorphism">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Top Countries</h2>
          </div>

          <div className="space-y-4">
            {topCountries.map((country, index) => (
              <div key={country.country} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center">
                    <span className="text-xs font-bold">{index + 1}</span>
                  </div>
                  <span className="font-medium">{country.country}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right">
                    <p className="font-bold">{country.visitors}</p>
                    <p className="text-xs text-muted-foreground">{country.percentage}%</p>
                  </div>
                  <div className="w-16 h-2 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${country.percentage}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Contact Form Analytics */}
      <Card className="p-6 glass-effect neomorphism">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold font-poppins">Contact & Engagement</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold mb-2">127</div>
            <div className="text-sm text-muted-foreground">Contact Form Submissions</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +18% this month
            </Badge>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold mb-2">89</div>
            <div className="text-sm text-muted-foreground">Email Opens</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +12% this month
            </Badge>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-2xl font-bold mb-2">34</div>
            <div className="text-sm text-muted-foreground">Social Media Clicks</div>
            <Badge variant="secondary" className="mt-2 text-xs">
              +25% this month
            </Badge>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}
