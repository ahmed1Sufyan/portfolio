"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Target, Code, Database, Globe, Zap, Users } from "lucide-react"

export function AboutSection() {
  const skills = [
    { name: "MERN Stack", icon: Code, color: "from-green-500 to-emerald-500" },
    { name: "WebRTC", icon: Globe, color: "from-blue-500 to-cyan-500" },
    { name: "Socket.IO", icon: Zap, color: "from-yellow-500 to-orange-500" },
    { name: "PostgreSQL", icon: Database, color: "from-blue-600 to-indigo-600" },
    { name: "MySQL", icon: Database, color: "from-orange-500 to-red-500" },
    { name: "OOP", icon: Code, color: "from-purple-500 to-pink-500" },
    { name: "DSA", icon: Code, color: "from-indigo-500 to-purple-500" },
    { name: "RDBMS", icon: Database, color: "from-teal-500 to-cyan-500" },
  ]

  const education = [
    {
      degree: "Bachelor of Computer Science",
      institution: "University of Technology",
      year: "2020-2024",
      description: "Specialized in Software Engineering and Database Systems",
    },
    {
      degree: "Higher Secondary Certificate",
      institution: "Government College",
      year: "2018-2020",
      description: "Pre-Engineering with Mathematics and Physics",
    },
  ]

  const courses = [
    "Full Stack Web Development - Meta",
    "Advanced React Patterns - Epic React",
    "Database Design and Management - Stanford",
    "System Design Fundamentals - Educative",
    "WebRTC and Real-time Communication - Udemy",
  ]

  return (
    <section id="about" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <Badge variant="outline" className="mb-4 glass-effect">
            <Users className="w-4 h-4 mr-2" />
            About Me
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Get to <span className="gradient-text">Know Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer who loves creating innovative solutions and building applications that
            make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 glass-effect neomorphism h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins">Objective</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                As a passionate software engineer, I strive to create innovative, scalable, and user-centric
                applications. My goal is to leverage cutting-edge technologies like the MERN stack, WebRTC, and
                real-time communication protocols to build solutions that solve real-world problems and enhance user
                experiences.
              </p>
            </Card>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <Card className="p-8 glass-effect neomorphism">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=400"
                  alt="Sufyan Ahmed - About"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold font-poppins text-center mb-8">
            Technical <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 glass-effect neomorphism text-center hover:scale-105 transition-transform duration-200">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-lg">{skill.name}</h4>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education & Courses */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-poppins">Education</h3>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="p-6 glass-effect neomorphism">
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="font-bold text-lg">{edu.degree}</h4>
                    <Badge variant="secondary">{edu.year}</Badge>
                  </div>
                  <p className="text-primary font-medium mb-2">{edu.institution}</p>
                  <p className="text-muted-foreground">{edu.description}</p>
                </Card>
              ))}
            </div>
          </motion.div>

          {/* Courses */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold font-poppins">Courses</h3>
            </div>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-4 glass-effect neomorphism hover:bg-muted/50 transition-colors">
                    <p className="font-medium">{course}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
