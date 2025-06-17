"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AdminSidebar } from "@/components/admin/admin-sidebar"
import { ProjectsManager } from "@/components/admin/projects-manager"
import { AboutManager } from "@/components/admin/about-manager"
import { SocialManager } from "@/components/admin/social-manager"
import { BlogManager } from "@/components/admin/blog-manager"
import { AnalyticsPanel } from "@/components/admin/analytics-panel"
import { BarChart3, User, Settings, Bell, Search, Code2, LogOut } from "lucide-react"
import Link from "next/link"

export function AdminDashboard() {
  const [activeSection, setActiveSection] = useState("overview")
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const renderContent = () => {
    switch (activeSection) {
      case "projects":
        return <ProjectsManager />
      case "about":
        return <AboutManager />
      case "social":
        return <SocialManager />
      case "blog":
        return <BlogManager />
      case "analytics":
        return <AnalyticsPanel />
      default:
        return <DashboardOverview />
    }
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <motion.header
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border shadow-clean"
      >
        <div className="flex items-center justify-between h-16 px-6">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Code2 className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-poppins font-bold text-lg gradient-text">Admin Panel</span>
            </Link>
            <Badge variant="secondary" className="badge-secondary text-xs">
              Sufyan Ahmed
            </Badge>
          </div>

          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input type="text" placeholder="Search..." className="input-clean pl-10 pr-4 py-2 w-64" />
            </div>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-accent">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="sm" asChild className="btn-outline">
              <Link href="/">
                <LogOut className="w-4 h-4 mr-2" />
                Exit Admin
              </Link>
            </Button>
          </div>
        </div>
      </motion.header>

      <div className="flex">
        {/* Sidebar */}
        <AdminSidebar
          activeSection={activeSection}
          setActiveSection={setActiveSection}
          isOpen={isSidebarOpen}
          setIsOpen={setIsSidebarOpen}
        />

        {/* Main Content */}
        <main className={`flex-1 transition-all duration-300 ${isSidebarOpen ? "ml-64" : "ml-16"}`}>
          <div className="p-6">{renderContent()}</div>
        </main>
      </div>
    </div>
  )
}

function DashboardOverview() {
  const stats = [
    {
      title: "Total Projects",
      value: "12",
      change: "+2 this month",
      icon: BarChart3,
      color: "bg-blue-500",
    },
    {
      title: "Blog Posts",
      value: "8",
      change: "+1 this week",
      icon: User,
      color: "bg-green-500",
    },
    {
      title: "Profile Views",
      value: "1,234",
      change: "+15% this month",
      icon: BarChart3,
      color: "bg-purple-500",
    },
    {
      title: "GitHub Stars",
      value: "89",
      change: "+12 this month",
      icon: BarChart3,
      color: "bg-orange-500",
    },
  ]

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8 animate-slide-up">
      <div>
        <h1 className="text-3xl font-bold font-poppins mb-2">Dashboard Overview</h1>
        <p className="text-muted-foreground">Welcome back! Here's what's happening with your portfolio.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="clean-card-hover p-6">
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl ${stat.color} flex items-center justify-center`}>
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <Badge variant="secondary" className="badge-secondary text-xs">
                  {stat.change}
                </Badge>
              </div>
              <h3 className="font-semibold text-muted-foreground mb-1">{stat.title}</h3>
              <p className="text-2xl font-bold">{stat.value}</p>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="clean-card p-6">
        <h2 className="text-xl font-bold font-poppins mb-4">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Button variant="outline" className="btn-outline h-20 flex-col space-y-2">
            <Code2 className="w-6 h-6" />
            <span>New Project</span>
          </Button>
          <Button variant="outline" className="btn-outline h-20 flex-col space-y-2">
            <User className="w-6 h-6" />
            <span>Edit Profile</span>
          </Button>
          <Button variant="outline" className="btn-outline h-20 flex-col space-y-2">
            <BarChart3 className="w-6 h-6" />
            <span>View Analytics</span>
          </Button>
          <Button variant="outline" className="btn-outline h-20 flex-col space-y-2">
            <Settings className="w-6 h-6" />
            <span>Settings</span>
          </Button>
        </div>
      </Card>
    </motion.div>
  )
}
