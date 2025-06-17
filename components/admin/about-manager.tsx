"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { User, GraduationCap, Award, Target, Plus, X, Save, Upload, Edit, Trash2 } from "lucide-react"

export function AboutManager() {
  const [profileData, setProfileData] = useState({
    fullName: "Sufyan Ahmed",
    objective:
      "Passionate Software Engineer specializing in MERN stack, WebRTC, Socket.IO, and modern web technologies. I strive to create innovative, scalable, and user-centric applications that solve real-world problems.",
    profilePicture: "/placeholder.svg?height=400&width=400",
  })

  const [skills, setSkills] = useState([
    { id: 1, name: "MERN Stack", category: "Frontend" },
    { id: 2, name: "WebRTC", category: "Real-time" },
    { id: 3, name: "Socket.IO", category: "Real-time" },
    { id: 4, name: "PostgreSQL", category: "Database" },
    { id: 5, name: "MySQL", category: "Database" },
    { id: 6, name: "OOP", category: "Programming" },
    { id: 7, name: "DSA", category: "Programming" },
    { id: 8, name: "RDBMS", category: "Database" },
  ])

  const [education, setEducation] = useState([
    {
      id: 1,
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2020-2024",
      description: "Specialized in Software Engineering and Database Systems",
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate",
      institution: "Government College",
      year: "2018-2020",
      description: "Pre-Engineering with Mathematics and Physics",
    },
  ])

  const [courses, setCourses] = useState([
    { id: 1, name: "Full Stack Web Development - Meta" },
    { id: 2, name: "Advanced React Patterns - Epic React" },
    { id: 3, name: "Database Design and Management - Stanford" },
    { id: 4, name: "System Design Fundamentals - Educative" },
    { id: 5, name: "WebRTC and Real-time Communication - Udemy" },
  ])

  const [editingSkill, setEditingSkill] = useState<any>(null)
  const [editingEducation, setEditingEducation] = useState<any>(null)
  const [editingCourse, setEditingCourse] = useState<any>(null)
  const [newSkill, setNewSkill] = useState("")
  const [newSkillCategory, setNewSkillCategory] = useState("")

  const handleSaveProfile = () => {
    // Save profile data logic
    console.log("Profile saved:", profileData)
  }

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { id: Date.now(), name: newSkill, category: newSkillCategory || "General" }])
      setNewSkill("")
      setNewSkillCategory("")
    }
  }

  const handleDeleteSkill = (id: number) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const handleAddEducation = () => {
    const newEdu = {
      id: Date.now(),
      degree: "New Degree",
      institution: "Institution Name",
      year: "Year",
      description: "Description",
    }
    setEducation([...education, newEdu])
    setEditingEducation(newEdu)
  }

  const handleSaveEducation = (eduData: any) => {
    setEducation(education.map((edu) => (edu.id === eduData.id ? eduData : edu)))
    setEditingEducation(null)
  }

  const handleDeleteEducation = (id: number) => {
    setEducation(education.filter((edu) => edu.id !== id))
  }

  const handleAddCourse = () => {
    const newCourse = { id: Date.now(), name: "New Course" }
    setCourses([...courses, newCourse])
    setEditingCourse(newCourse)
  }

  const handleSaveCourse = (courseData: any) => {
    setCourses(courses.map((course) => (course.id === courseData.id ? courseData : course)))
    setEditingCourse(null)
  }

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter((course) => course.id !== id))
  }

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold font-poppins mb-2">About Section Manager</h1>
        <p className="text-muted-foreground">Manage your personal information, skills, education, and courses.</p>
      </div>

      {/* Profile Information */}
      <Card className="p-6 glass-effect neomorphism">
        <div className="flex items-center space-x-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <h2 className="text-xl font-bold font-poppins">Profile Information</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Full Name</label>
              <Input
                value={profileData.fullName}
                onChange={(e) => setProfileData({ ...profileData, fullName: e.target.value })}
                placeholder="Enter your full name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Objective</label>
              <Textarea
                value={profileData.objective}
                onChange={(e) => setProfileData({ ...profileData, objective: e.target.value })}
                placeholder="Write your professional objective..."
                rows={6}
              />
            </div>

            <Button onClick={handleSaveProfile} className="w-full">
              <Save className="w-4 h-4 mr-2" />
              Save Profile
            </Button>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Profile Picture</label>
            <div className="space-y-4">
              <div className="w-48 h-48 rounded-2xl bg-muted flex items-center justify-center overflow-hidden mx-auto">
                <img
                  src={profileData.profilePicture || "/placeholder.svg"}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex space-x-2">
                <Input
                  value={profileData.profilePicture}
                  onChange={(e) => setProfileData({ ...profileData, profilePicture: e.target.value })}
                  placeholder="Image URL"
                />
                <Button variant="outline" size="icon">
                  <Upload className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Skills Management */}
      <Card className="p-6 glass-effect neomorphism">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
              <Target className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Skills</h2>
          </div>
        </div>

        {/* Add New Skill */}
        <div className="grid md:grid-cols-3 gap-4 mb-6 p-4 bg-muted/50 rounded-lg">
          <Input value={newSkill} onChange={(e) => setNewSkill(e.target.value)} placeholder="Skill name" />
          <Input
            value={newSkillCategory}
            onChange={(e) => setNewSkillCategory(e.target.value)}
            placeholder="Category (optional)"
          />
          <Button onClick={handleAddSkill}>
            <Plus className="w-4 h-4 mr-2" />
            Add Skill
          </Button>
        </div>

        {/* Skills List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <div key={skill.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <span className="font-medium">{skill.name}</span>
                <Badge variant="secondary" className="ml-2 text-xs">
                  {skill.category}
                </Badge>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handleDeleteSkill(skill.id)}
                className="text-destructive hover:text-destructive"
              >
                <Trash2 className="w-4 h-4" />
              </Button>
            </div>
          ))}
        </div>
      </Card>

      {/* Education Management */}
      <Card className="p-6 glass-effect neomorphism">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Education</h2>
          </div>
          <Button onClick={handleAddEducation}>
            <Plus className="w-4 h-4 mr-2" />
            Add Education
          </Button>
        </div>

        <div className="space-y-4">
          {education.map((edu) => (
            <div key={edu.id}>
              {editingEducation?.id === edu.id ? (
                <EducationForm
                  education={edu}
                  onSave={handleSaveEducation}
                  onCancel={() => setEditingEducation(null)}
                />
              ) : (
                <div className="p-4 bg-muted/30 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{edu.degree}</h3>
                        <Badge variant="secondary">{edu.year}</Badge>
                      </div>
                      <p className="text-primary font-medium mb-1">{edu.institution}</p>
                      <p className="text-muted-foreground text-sm">{edu.description}</p>
                    </div>
                    <div className="flex space-x-2 ml-4">
                      <Button variant="ghost" size="icon" onClick={() => setEditingEducation(edu)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDeleteEducation(edu.id)}
                        className="text-destructive hover:text-destructive"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>

      {/* Courses Management */}
      <Card className="p-6 glass-effect neomorphism">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
              <Award className="w-5 h-5 text-white" />
            </div>
            <h2 className="text-xl font-bold font-poppins">Courses</h2>
          </div>
          <Button onClick={handleAddCourse}>
            <Plus className="w-4 h-4 mr-2" />
            Add Course
          </Button>
        </div>

        <div className="space-y-3">
          {courses.map((course) => (
            <div key={course.id}>
              {editingCourse?.id === course.id ? (
                <div className="flex space-x-2">
                  <Input
                    value={course.name}
                    onChange={(e) => setEditingCourse({ ...course, name: e.target.value })}
                    className="flex-1"
                  />
                  <Button onClick={() => handleSaveCourse(editingCourse)}>
                    <Save className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" onClick={() => setEditingCourse(null)}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              ) : (
                <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                  <span className="font-medium">{course.name}</span>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon" onClick={() => setEditingCourse(course)}>
                      <Edit className="w-4 h-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDeleteCourse(course.id)}
                      className="text-destructive hover:text-destructive"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  )
}

function EducationForm({ education, onSave, onCancel }: any) {
  const [formData, setFormData] = useState(education)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-muted/50 rounded-lg space-y-4">
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-1">Degree</label>
          <Input
            value={formData.degree}
            onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Year</label>
          <Input value={formData.year} onChange={(e) => setFormData({ ...formData, year: e.target.value })} required />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Institution</label>
        <Input
          value={formData.institution}
          onChange={(e) => setFormData({ ...formData, institution: e.target.value })}
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Description</label>
        <Textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          rows={3}
        />
      </div>
      <div className="flex space-x-2">
        <Button type="submit">
          <Save className="w-4 h-4 mr-2" />
          Save
        </Button>
        <Button type="button" variant="outline" onClick={onCancel}>
          Cancel
        </Button>
      </div>
    </form>
  )
}
