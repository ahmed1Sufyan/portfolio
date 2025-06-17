"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowDown, Download, Mail, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  const skills = [
    "OOP",
    "DSA",
    "RDBMS",
    "System Design (Basics)",
    "AWS (Basics)",
    "React JS",
    "Next JS",
    "Mongodb",
    "Nodejs",
    "Express",
    "Java",
    "WebRTC",
    "Socket.IO",
    "PostgreSQL",
    "MySQL",
    
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-500/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container   container-padding">
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Badge variant="outline" className="mb-6 badge-primary">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Available for opportunities
                </Badge>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-4xl lg:text-5xl font-bold font-poppins leading-tight"
              >
                Hi, I'm <span className="gradient-text">Sufyan Ahmed</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-md md:text-2xl text-muted-foreground font-medium"
              >
                Passionate Software Engineer
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-md text-muted-foreground leading-relaxed max-w-2xl"
              >
                Passionate and detail-oriented Software Engineer with a strong
                foundation in web development, data structures, and modern
                software practices. Eager to contribute to a dynamic team where
                I can apply my technical skills, learn continuously, and build
                scalable solutions that solve real-world problems. Committed to
                delivering clean, efficient, and maintainable code while growing
                as a professional in a collaborative environment..
              </motion.p>
            </div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 text-sm badge-secondary hover:bg-primary/10 hover:text-primary transition-colors duration-200"
                >
                  {skill}
                </Badge>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                size="lg"
                className="group btn-primary h-12 px-8 text-base font-semibold"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get In Touch
                <ArrowDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="btn-outline h-12 px-8 text-base font-semibold"
              >
                <Download className="w-5 h-5 mr-2" />
                Download Resume
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Main image container */}
              <div className="relative clean-card p-8">
                <div className="w-full aspect-square rounded-2xl bg-gradient-to-br from-primary/10 to-blue-500/10 flex items-center justify-center overflow-hidden">
                  <img
                    src="/pic.JPG?height=400&width=400"
                    alt="Sufyan Ahmed"
                    className="w-full h-full object-fill rounded-2xl"
                  />
                </div>

                {/* Decorative code snippet */}
                <div className="absolute -bottom-6 -right-6 clean-card p-4 text-sm font-mono bg-card/90 backdrop-blur-sm">
                  <div className="flex items-center space-x-2">
                    <Code2 className="w-4 h-4 text-primary" />
                    <span className="text-muted-foreground">
                      console.log("Hello World!")
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <Link
          href="#about"
          className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-primary transition-colors focus-ring rounded-lg p-2"
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </Link>
      </motion.div>
    </section>
  );
}
