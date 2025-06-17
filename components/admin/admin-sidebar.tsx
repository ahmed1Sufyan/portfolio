"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import {
  LayoutDashboard,
  FolderOpen,
  User,
  Share2,
  BookOpen,
  BarChart3,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { cn } from "@/lib/utils"

interface AdminSidebarProps {
  activeSection: string
  setActiveSection: (section: string) => void
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

export function AdminSidebar({ activeSection, setActiveSection, isOpen, setIsOpen }: AdminSidebarProps) {
  const menuItems = [
    { id: "overview", label: "Overview", icon: LayoutDashboard },
    { id: "projects", label: "Projects", icon: FolderOpen },
    { id: "about", label: "About", icon: User },
    { id: "social", label: "Social Links", icon: Share2 },
    { id: "blog", label: "Blog", icon: BookOpen },
    { id: "analytics", label: "Analytics", icon: BarChart3 },
    { id: "settings", label: "Settings", icon: Settings },
  ]

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      className={cn(
        "fixed left-0 top-16 h-[calc(100vh-4rem)] bg-card border-r border-border transition-all duration-300 z-40 shadow-clean",
        isOpen ? "w-64" : "w-16",
      )}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <div className="p-4 border-b border-border">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full justify-center hover:bg-accent"
          >
            {isOpen ? <ChevronLeft className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
          </Button>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 p-4 space-y-2">
          {menuItems.map((item) => (
            <Button
              key={item.id}
              variant={activeSection === item.id ? "default" : "ghost"}
              className={cn(
                "w-full justify-start transition-all duration-200 font-medium",
                !isOpen && "justify-center px-2",
                activeSection === item.id
                  ? "bg-primary text-primary-foreground"
                  : "hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className={cn("w-5 h-5", isOpen && "mr-3")} />
              {isOpen && <span>{item.label}</span>}
            </Button>
          ))}
        </nav>

        {/* Footer */}
        {isOpen && (
          <div className="p-4 border-t border-border">
            <div className="text-xs text-muted-foreground text-center">Portfolio Admin v1.0</div>
          </div>
        )}
      </div>
    </motion.aside>
  )
}
