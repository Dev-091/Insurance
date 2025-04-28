"use client"

import { ThemeToggle } from "@/components/theme-toggle"
import { Shield } from "lucide-react"
import Link from "next/link"
import { HeroSection } from "@/components/landing/hero-section"
import { ProductsSection } from "@/components/landing/products-section"
import { StatisticsSection } from "@/components/landing/statistics-section"
import { TestimonialsSection } from "@/components/landing/testimonials-section"
import { TrackRecordSection } from "@/components/landing/track-record-section"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-indigo-600 dark:text-indigo-500" />
            <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
              InsureDash
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Link 
              href="/login"
              className="px-4 py-2 text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 rounded-md transition-colors"
            >
              Sign In
            </Link>
            <Link 
              href="/register"
              className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <HeroSection />
        <ProductsSection />
        <StatisticsSection />
        <TrackRecordSection />
        <TestimonialsSection />
      </main>
    </div>
  )
}