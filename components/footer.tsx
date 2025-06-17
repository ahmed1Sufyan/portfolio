"use client"

import Link from "next/link"
import { Wrench, Github, Twitter, Linkedin, Mail, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "/#features" },
      { name: "Projects", href: "/projects" },
      { name: "About", href: "/about" },
      { name: "Login", href: "/login" },
    ],
    community: [
      { name: "GitHub", href: "https://github.com/mydevtools" },
      { name: "Twitter", href: "https://twitter.com/mydevtools" },
      { name: "LinkedIn", href: "https://linkedin.com/company/mydevtools" },
      { name: "Social", href: "/social" },
    ],
    support: [
      { name: "Documentation", href: "/docs" },
      { name: "Help Center", href: "/help" },
      { name: "Contact", href: "mailto:hello@mydevtools.com" },
      { name: "Status", href: "/status" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/mydevtools", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/mydevtools", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com/company/mydevtools", label: "LinkedIn" },
    { icon: Mail, href: "mailto:hello@mydevtools.com", label: "Email" },
  ]

  return (
    <footer className="border-t border-border/50 bg-muted/20">
      <div className="container py-12 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="relative">
                <Wrench className="h-7 w-7 text-primary" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full animate-pulse" />
              </div>
              <span className="font-bold text-xl">MyDevTools</span>
            </Link>
            <p className="text-muted-foreground max-w-md leading-relaxed">
              The ultimate developer toolkit. Open-source tools designed to boost your productivity and streamline your
              development workflow.
            </p>
            <div className="flex space-x-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  variant="outline"
                  size="icon"
                  asChild
                  className="border-border/50 hover:border-foreground/20 transition-colors"
                >
                  <Link href={social.href} target="_blank" rel="noreferrer">
                    <social.icon className="h-4 w-4" />
                    <span className="sr-only">{social.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Community</h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Support</h3>
            <ul className="space-y-2">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    target={link.href.startsWith("http") || link.href.startsWith("mailto") ? "_blank" : undefined}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2024 MyDevTools. All rights reserved.</p>
          <div className="flex items-center space-x-1 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>by developers, for developers</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
