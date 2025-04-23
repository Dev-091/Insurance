"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  // Add scroll animation effect
  useEffect(() => {
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")

      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          element.classList.add("is-visible")
        }
      })
    }

    // Initialize animations when elements are in view
    const initAnimations = () => {
      animateOnScroll()
    }

    // Run animations on load and scroll
    window.addEventListener("load", initAnimations)
    window.addEventListener("scroll", animateOnScroll)

    // Run animations immediately as well
    setTimeout(initAnimations, 100)

    // Clean up event listeners
    return () => {
      window.removeEventListener("load", initAnimations)
      window.removeEventListener("scroll", animateOnScroll)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Shield className="h-8 w-8 text-red-600 dark:text-red-500" />
            <span className="ml-2 text-xl font-bold">InsureDash</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <Link
              href="#products"
              className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              Products
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/support"
              className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              Support
            </Link>
            <Link
              href="/contact-us"
              className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500 transition-colors"
            >
              Contact
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950 transition-colors"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button
              asChild
              size="sm"
              className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 transition-transform hover:scale-105"
            >
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 animate-[fadeInUp_0.8s_ease-in-out]">
                Secure Your Future with{" "}
                <span className="text-red-600 dark:text-red-500">InsureDash</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-[fadeInUp_1s_ease-in-out]">
                Comprehensive insurance solutions tailored to your needs. Protect what matters most with our range of
                insurance products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-[fadeInUp_1.2s_ease-in-out]">
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 group transition-transform hover:scale-105"
                >
                  <Link href="/register" className="flex items-center">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950 transition-transform hover:scale-105"
                >
                  <Link href="#products">Explore Products</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Insurance Products</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Comprehensive coverage options designed to protect you and your loved ones
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Life Insurance",
                  description: "Secure your family's financial future",
                  features: ["Term Life Coverage", "Whole Life Insurance", "Universal Life Insurance"],
                  href: "/insurance-details/life",
                },
                {
                  title: "Health Insurance",
                  description: "Comprehensive healthcare coverage",
                  features: ["Medical Coverage", "Dental & Vision", "Prescription Drugs"],
                  href: "/insurance-details/health",
                },
                {
                  title: "Auto Insurance",
                  description: "Protection for your vehicle",
                  features: ["Liability Coverage", "Collision Coverage", "Comprehensive Coverage"],
                  href: "/insurance-details/auto",
                },
                {
                  title: "Home Insurance",
                  description: "Safeguard your property",
                  features: ["Property Coverage", "Liability Protection", "Natural Disaster Coverage"],
                  href: "/insurance-details/home",
                },
              ].map((product, index) => (
                <div
                  key={product.title}
                  className={cn(
                    "group relative p-6 rounded-lg border border-gray-200 dark:border-gray-800",
                    "hover:border-red-600 dark:hover:border-red-500 transition-colors",
                    "animate-on-scroll opacity-0 translate-y-8",
                    "hover:shadow-lg hover:shadow-red-600/5 dark:hover:shadow-red-500/5"
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <ChevronRight className="h-4 w-4 text-red-600 dark:text-red-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950 group-hover:bg-red-600 group-hover:text-white dark:group-hover:bg-red-500"
                  >
                    <Link href={product.href}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
