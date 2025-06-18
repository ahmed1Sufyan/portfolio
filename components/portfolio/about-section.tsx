"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  Award,
  Target,
  Code,
  Database,
  Globe,
  Zap,
  Users,
} from "lucide-react";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiWebrtc,
  SiSocketdotio,
  SiPostgresql,
  SiMysql,
  SiJavascript,
  SiCplusplus,
  SiAwsamplify,
  SiNextdotjs,
} from "react-icons/si";
import { FaDatabase, FaProjectDiagram, FaJava } from "react-icons/fa";

export function AboutSection() {
  const skills = [
    {
      name: "OOP",
      icon: FaJava, // or SiJava if preferred
      color: "from-[#667eea] to-[#764ba2]",
    },
    {
      name: "DSA",
      icon: SiCplusplus,
      color: "from-[#004482] to-[#1e90ff]",
    },
    {
      name: "RDBMS",
      icon: FaDatabase,
      color: "from-[#7b4397] to-[#dc2430]",
    },
    {
      name: "System Design",
      icon: FaProjectDiagram,
      color: "from-[#667eea] to-[#764ba2]",
    },
    {
      name: "AWS",
      icon: SiAwsamplify,
      color: "from-[#ff9900] to-[#f5a623]",
    },
    {
      name: "React JS",
      icon: SiReact,
      color: "from-[#61dafb] to-[#1c8ed6]",
    },
    {
      name: "Next JS",
      icon: SiNextdotjs,
      color: "from-[#000000] to-[#333333]",
    },
    {
      name: "MongoDB",
      icon: SiMongodb,
      color: "from-[#13aa52] to-[#11a04c]",
    },
    {
      name: "Node JS",
      icon: SiNodedotjs,
      color: "from-[#3c873a] to-[#1b5e20]",
    },
    {
      name: "Express",
      icon: SiExpress,
      color: "from-[#2c3e50] to-[#4ca1af]",
    },
    {
      name: "Java",
      icon: FaJava,
      color: "from-[#007396] to-[#4682b4]",
    },
    {
      name: "WebRTC",
      icon: SiWebrtc,
      color: "from-[#ff4b4b] to-[#ffa500]",
    },
    {
      name: "Socket.IO",
      icon: SiSocketdotio,
      color: "from-[#010101] to-[#434343]",
    },
    {
      name: "PostgreSQL",
      icon: SiPostgresql,
      color: "from-[#336791] to-[#2f5b85]",
    },
    {
      name: "MySQL",
      icon: SiMysql,
      color: "from-[#00758f] to-[#f29111]",
    },
  ];

  const education = [
    {
      degree: "Higher School Certificate (HSC)",
      institution: "PECHs Education Foundation Government Science College",
      year: "2018-2020",
      description: "Pre-Engineering",
      CGPA : ""
    },
    {
      degree: "Bachelor of Computer Science",
      institution: "Sindh Madressatul Islam University",
      year: "2021-2025",
      description: "Computer Science",
      CGPA : "3.12"
    },
  ];

  const courses = [
    "FrontEnd Development - Consulnet Corporation",
    "Modern Web and App Development - Saylani Mass IT Training",
    "Full Stack Development - Coders Gyan",
    "Relational Database Management System - GateSmashers",
    "System Design Fundamentals - Techyst",
  ];

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
            I'm a passionate software engineer who loves creating innovative
            solutions and building applications that make a difference.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Objective */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="p-8 h-full flex flex-col justify-center bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-poppins text-white">
                  Objective
                </h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
                Passionate and detail-oriented Software Engineer with a strong
                foundation in web development, data structures, and modern
                software practices. Eager to contribute to a dynamic team where
                I can apply my technical skills, learn continuously, and build
                scalable solutions that solve real-world problems. Committed to
                delivering clean, efficient, and maintainable code while growing
                as a professional in a collaborative environment.
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
            <Card className="p-6 glass-effect bg-white/10 border border-white/20 backdrop-blur-md shadow-lg rounded-2xl">
              <div className="aspect-square rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-primary/20 to-blue-500/20">
                <img
                  src="/pic.Jpg"
                  alt="Sufyan Ahmed - About"
                  className="w-full h-full object-full rounded-2xl"
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
          <h3 className="text-4xl font-extrabold font-poppins text-center mb-8">
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
                <Card className="p-6  text-center hover:scale-105 transition-transform duration-200">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${skill.color} flex items-center justify-center mx-auto mb-4`}
                  >
                    <skill.icon className="w-6  h-6 text-white" />
                  </div>
                  <h4 className="font-semibold text-md">{skill.name}</h4>
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
                  <p className="text-primary font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-muted-foreground">{edu.description}</p>
                  <p className="text-muted-foreground">{edu.CGPA && `CGPA : ${edu.CGPA}`}</p>
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
  );
}
