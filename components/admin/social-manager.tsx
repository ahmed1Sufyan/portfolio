"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import {
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Mail,
  Globe,
  Save,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  ExternalLink,
} from "lucide-react"

export function SocialManager() {
  const [socialLinks, setSocialLinks] = useState([
    {
      id: 1,
      platform: "GitHub",
      icon: Github,
      url: "https://github.com/sufyanahmed",
      handle: "@sufyanahmed",
      visible: true,
      color: "from-gray-700 to-gray-900",
    },
    {
      id: 2,
      platform: "LinkedIn",
      icon: Linkedin,
      url: "https://linkedin.com/in/sufyanahmed",
      handle: "sufyanahmed",
      visible: true,
      color: "from-blue-600 to-blue-800",
    },
    {
      id: 3,
      platform: "Twitter",
      icon: Twitter,
      url: "https://twitter.com/sufyanahmed",
      handle: "@sufyanahmed",
      visible: true,
      color: "from-blue-400 to-blue-600",
    },
    {
      id: 4,
      platform: "YouTube",
      icon: Youtube,
      url: "https://youtube.com/@sufyanahmed",
      handle: "@sufyanahmed",
      visible: true,
      color: "from-red-500 to-red-700",
    },
    {
      id: 5,
      platform: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/sufyanahmed",
      handle: "@sufyanahmed",
      visible: false,
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 6,
      platform: "Email",
      icon: Mail,
      url: "mailto:sufyan.ahmed@example.com",
      handle: "sufyan.ahmed@example.com",
      visible: true,
      color: "from-green-500 to-green-700",
    },
  ])

  const [newLink, setNewLink] = useState({
    platform: "",
    url: "",
    handle: "",
  })

  const [isAddingNew, setIsAddingNew] = useState(false)

  const handleUpdateLink = (id: number, field: string, value: any) => {
    setSocialLinks(socialLinks.map((link) => (link.id === id ? { ...link, [field]: value } : link)))
  }

  const handleDeleteLink = (id: number) => {
    setSocialLinks(socialLinks.filter((link) => link.id !== id))
  }

  const handleAddNewLink = () => {
    if (newLink.platform && newLink.url) {
      const newSocialLink = {
        id: Date.now(),
        platform: newLink.platform,
        icon: Globe,
        url: newLink.url,
        handle: newLink.handle || newLink.platform,
        visible: true,
        color: "from-indigo-500 to-purple-500",
      }
      setSocialLinks([...socialLinks, newSocialLink])
      setNewLink({ platform: "", url: "", handle: "" })
      setIsAddingNew(false)
    }
  }

  const handleSaveAll = () => {
    // Save all social links logic
    console.log("Social links saved:", socialLinks)
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold font-poppins mb-2">Social Links Manager</h1>
          <p className="text-muted-foreground">Manage your social media presence and contact information.</p>
        </div>
        <div className="flex space-x-3">
          <Button onClick={() => setIsAddingNew(true)} variant="outline">
            <Plus className="w-4 h-4 mr-2" />
            Add Custom Link
          </Button>
          <Button onClick={handleSaveAll}>
            <Save className="w-4 h-4 mr-2" />
            Save All Changes
          </Button>
        </div>
      </div>

      {/* Add New Link Form */}
      {isAddingNew && (
        <Card className="p-6 glass-effect neomorphism">
          <h3 className="text-lg font-bold font-poppins mb-4">Add Custom Social Link</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium mb-2">Platform Name</label>
              <Input
                value={newLink.platform}
                onChange={(e) => setNewLink({ ...newLink, platform: e.target.value })}
                placeholder="e.g., Dev.to, Dribbble"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">URL</label>
              <Input
                value={newLink.url}
                onChange={(e) => setNewLink({ ...newLink, url: e.target.value })}
                placeholder="https://..."
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Handle/Username</label>
              <Input
                value={newLink.handle}
                onChange={(e) => setNewLink({ ...newLink, handle: e.target.value })}
                placeholder="@username"
              />
            </div>
          </div>
          <div className="flex space-x-3 mt-4">
            <Button onClick={handleAddNewLink}>Add Link</Button>
            <Button variant="outline" onClick={() => setIsAddingNew(false)}>
              Cancel
            </Button>
          </div>
        </Card>
      )}

      {/* Social Links Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {socialLinks.map((link) => (
          <motion.div
            key={link.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="p-6 glass-effect neomorphism">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.color} flex items-center justify-center`}
                  >
                    <link.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{link.platform}</h3>
                    <Badge variant={link.visible ? "default" : "secondary"} className="text-xs">
                      {link.visible ? "Visible" : "Hidden"}
                    </Badge>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Switch
                    checked={link.visible}
                    onCheckedChange={(checked) => handleUpdateLink(link.id, "visible", checked)}
                  />
                  {link.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">URL</label>
                  <div className="flex space-x-2">
                    <Input
                      value={link.url}
                      onChange={(e) => handleUpdateLink(link.id, "url", e.target.value)}
                      placeholder="https://..."
                    />
                    <Button variant="outline" size="icon" asChild>
                      <a href={link.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Handle/Username</label>
                  <Input
                    value={link.handle}
                    onChange={(e) => handleUpdateLink(link.id, "handle", e.target.value)}
                    placeholder="@username or display name"
                  />
                </div>

                <div className="flex justify-between items-center pt-2">
                  <div className="text-sm text-muted-foreground">
                    Status: {link.visible ? "Shown on portfolio" : "Hidden from portfolio"}
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteLink(link.id)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Preview Section */}
      <Card className="p-6 glass-effect neomorphism">
        <h3 className="text-lg font-bold font-poppins mb-4">Portfolio Preview</h3>
        <p className="text-muted-foreground mb-4">This is how your social links will appear on your portfolio:</p>

        <div className="flex flex-wrap gap-4">
          {socialLinks
            .filter((link) => link.visible)
            .map((link) => (
              <div key={link.id} className="flex items-center space-x-2 px-4 py-2 bg-muted/50 rounded-lg">
                <link.icon className="w-5 h-5" />
                <span className="font-medium">{link.platform}</span>
                <span className="text-muted-foreground text-sm">{link.handle}</span>
              </div>
            ))}
        </div>

        {socialLinks.filter((link) => link.visible).length === 0 && (
          <div className="text-center py-8 text-muted-foreground">
            No visible social links. Enable some links above to see the preview.
          </div>
        )}
      </Card>
    </motion.div>
  )
}
