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

      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <Link
                href="/dashboard"
                className="flex items-center mb-4 md:mb-0 hover:text-red-600 dark:hover:text-red-500 transition-colors"
              >
                <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
                <span className="ml-2 font-semibold">InsureDash</span>
              </Link>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Providing comprehensive insurance solutions to protect what matters most to you.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    Term Life Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    Health Insurance
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    Retirement Plans
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    Child Plans
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="#about" className="hover:text-red-600 dark:hover:text-red-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="hover:text-red-600 dark:hover:text-red-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="hover:text-red-600 dark:hover:text-red-500">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400 text-sm">
                <li>
                  <Link href="/help-center" className="hover:text-red-600 dark:hover:text-red-500">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-red-600 dark:hover:text-red-500">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="/contact-us" className="hover:text-red-600 dark:hover:text-red-500">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-red-600 dark:hover:text-red-500">
                    File a Claim
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} InsureDash. All rights reserved. IRDAI Registration No. 111 | CIN:
            L99999MH2000PLC129113
          </div>
        </div>
      </footer>
    </div>
  )
}