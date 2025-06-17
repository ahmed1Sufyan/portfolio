"use client"

import { motion } from "framer-motion"
import { Users, Download, Star, Coffee } from "lucide-react"

export function StatsSection() {
  const stats = [
    { icon: Users, label: "Active Users", value: "10K+", color: "text-blue-500" },
    { icon: Download, label: "Downloads", value: "50K+", color: "text-green-500" },
    { icon: Star, label: "GitHub Stars", value: "2.5K+", color: "text-yellow-500" },
    { icon: Coffee, label: "Tools Available", value: "25+", color: "text-purple-500" },
  ]

  return (
    <section className="border-y border-border/50 bg-muted/20">
      <div className="container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
  )
}
