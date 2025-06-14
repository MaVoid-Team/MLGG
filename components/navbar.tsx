"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Building2, Sparkles } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-mlgg-light/50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="bg-gradient-to-br from-mlgg-deep-blue to-mlgg-teal p-3 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105">
              <Building2 className="h-7 w-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black text-mlgg-deep-blue">MLGG</span>
              <span className="text-xs text-mlgg-medium-blue font-medium -mt-1">MaVoid Lead Generation</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-mlgg-deep-blue hover:text-mlgg-teal font-semibold transition-all duration-300 hover:scale-105 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mlgg-teal to-mlgg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              asChild
              className="bg-gradient-to-r from-mlgg-gold to-mlgg-teal hover:from-mlgg-teal hover:to-mlgg-gold text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <Link href="/contact">
                <Sparkles className="w-4 h-4 mr-2" />
                Get Started
              </Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon" className="border-mlgg-deep-blue/20 hover:bg-mlgg-deep-blue/5">
                <Menu className="h-5 w-5 text-mlgg-deep-blue" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-gradient-to-br from-white to-mlgg-light">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-xl font-semibold text-mlgg-deep-blue hover:text-mlgg-teal transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-6 border-t border-mlgg-deep-blue/10">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-mlgg-gold to-mlgg-teal hover:from-mlgg-teal hover:to-mlgg-gold text-white font-bold py-4 rounded-xl shadow-lg"
                  >
                    <Link href="/contact" onClick={() => setIsOpen(false)}>
                      <Sparkles className="w-4 h-4 mr-2" />
                      Get Started
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
