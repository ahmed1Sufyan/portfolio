"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Github, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center space-y-8 py-16 px-4 text-center md:py-32 lg:py-40 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-950/20 dark:via-transparent dark:to-purple-950/20" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6 max-w-4xl"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Badge variant="outline" className="mb-6 px-4 py-2 text-sm glass-effect">
            <Sparkles className="mr-2 h-4 w-4" />
            Open Source Developer Tools
          </Badge>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl"
        >
          Your Ultimate <span className="gradient-text">Developer Toolkit</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed"
        >
          Streamline your development workflow with our comprehensive suite of tools. From JSON formatting to task
          management, everything you need in one beautiful interface.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col gap-4 sm:flex-row sm:gap-6"
      >
        <Button asChild size="lg" className="group h-14 px-8 text-lg font-semibold animate-pulse-glow">
          <Link href="/login">
            <Play className="mr-2 h-5 w-5" />
            Get Started Free
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>

        <Button asChild size="lg" variant="outline" className="h-14 px-8 text-lg glass-effect">
          <Link href="https://github.com/mydevtools/repo" target="_blank">
            <Github className="mr-2 h-5 w-5" />
            View on GitHub
          </Link>
        </Button>
      </motion.div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-400 rounded-lg rotate-12" />
      </div>
      <div className="absolute top-32 right-16 opacity-20 animate-float delay-1000">
        <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-full" />
      </div>
      <div className="absolute bottom-32 left-20 opacity-20 animate-float delay-2000">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg -rotate-12" />
      </div>
    </section>
  )
}
