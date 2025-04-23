"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, ChevronRight, Shield } from "lucide-react"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "@/components/theme-toggle"
import { EnhancedCustomerGrowth } from "@/components/dashboard/enhanced-customer-growth"

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

    // Initialize counter animations
    const initCounters = () => {
      const counters = document.querySelectorAll(".animate-count")

      counters.forEach((counter) => {
        const target = Number.parseInt(counter.getAttribute("data-count") || "0")
        let count = 0
        const duration = 2000 // 2 seconds
        const increment = target / (duration / 16) // 60fps

        const updateCount = () => {
          if (count < target) {
            count += increment
            counter.textContent = Math.floor(count).toString()
            requestAnimationFrame(updateCount)
          } else {
            counter.textContent = target.toString()
          }
        }

        updateCount()
      })
    }

    // Initialize animations when elements are in view
    const initAnimations = () => {
      // Set initial heights for bar charts
      document.querySelectorAll(".bg-red-500.rounded-t-sm").forEach((bar, index) => {
        const height = [20, 30, 35, 45, 55, 65, 80, 90][index]
        ;(bar as HTMLElement).style.height = `${height}%`
      })

      // Set initial widths for horizontal bars
      document.querySelectorAll(".animate-grow-bar").forEach((bar) => {
        const width = bar.getAttribute("data-width")
        if (width) {
          ;(bar as HTMLElement).style.width = width
        }
      })

      animateOnScroll()
      initCounters()
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
                Secure Your Future with <span className="text-red-600 dark:text-red-500 typewriter">InsureDash</span>
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-[fadeInUp_1s_ease-in-out]">
                Comprehensive insurance solutions tailored to your needs. Protect what matters most with our range of
                life, health, and term insurance products.
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

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Life Insurance",
                  description:
                    "Secure your family's financial future with our comprehensive life insurance plans offering long-term protection and savings benefits.",
                  features: ["Term Life Coverage", "Retirement Plans", "Child Education Plans", "Investment Options"],
                  color: "bg-red-50 dark:bg-red-950",
                  borderColor: "border-red-200 dark:border-red-900",
                  textColor: "text-red-600 dark:text-red-500",
                  type: "life",
                },
                {
                  title: "Health Insurance",
                  description:
                    "Protect yourself and your family with our health insurance plans that cover medical expenses, critical illnesses, and more.",
                  features: [
                    "Hospitalization Cover",
                    "Critical Illness Protection",
                    "Cashless Claims",
                    "Family Floater Plans",
                  ],
                  color: "bg-blue-50 dark:bg-blue-950",
                  borderColor: "border-blue-200 dark:border-blue-900",
                  textColor: "text-blue-600 dark:text-blue-500",
                  type: "health",
                },
                {
                  title: "Term Insurance",
                  description:
                    "Secure your family's financial future with our term insurance plans offering comprehensive protection at affordable premiums.",
                  features: ["High Coverage at Low Cost", "Tax Benefits", "Rider Options", "Family Protection"],
                  color: "bg-green-50 dark:bg-green-950",
                  borderColor: "border-green-200 dark:border-green-900",
                  textColor: "text-green-600 dark:text-green-500",
                  type: "term",
                },
              ].map((product, index) => (
                <div
                  key={index}
                  className={cn(
                    "p-6 rounded-lg border transition-all duration-300 hover:shadow-md",
                    product.color,
                    product.borderColor,
                  )}
                >
                  <h3 className={cn("text-xl font-semibold mb-3", product.textColor)}>{product.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">{product.description}</p>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight className={cn("h-4 w-4 mr-2", product.textColor)} />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn(
                      "mt-6 w-full transition-transform hover:scale-105",
                      index === 0
                        ? "bg-red-600 hover:bg-red-700"
                        : index === 1
                          ? "bg-blue-600 hover:bg-blue-700"
                          : "bg-green-600 hover:bg-green-700",
                    )}
                  >
                    <Link href={`/register?type=${product.type}`}>Learn More</Link>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Track Record Section - Fixed to properly display data */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Track Record</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                InsureDash has consistently delivered exceptional service and value to our customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {/* Customer Growth - Enhanced with actual chart */}
              <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-sm">
              <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-500">Customer Growth</h3>
                <div className="h-49">
                  <EnhancedCustomerGrowth />
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-red-600 dark:text-red-500 animate-count" data-count="32000">
                    0
                  </span>
                  + customers and growing rapidly
                </p>
              </div>

              {/* Customer Savings - Enhanced with animation */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-500">Customer Savings</h3>
                <div className="h-48 flex items-center justify-center">
                  <div className="relative w-36 h-36">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <circle cx="50" cy="50" r="40" fill="none" stroke="#e2e8f0" strokeWidth="15" />
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="15"
                        strokeDasharray="251.2"
                        strokeDashoffset="251.2"
                        className="animate-circle"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center flex-col">
                      <span className="text-3xl font-bold text-red-600 dark:text-red-500 animate-count" data-count="75">
                        0
                      </span>
                      <span className="text-xs text-gray-500">of customers</span>
                    </div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-red-600 dark:text-red-500">75% of customers</span> save at least ₹
                  <span className="animate-count" data-count="15000">
                    0
                  </span>{" "}
                  annually on their insurance premiums
                </p>
              </div>

              {/* Customer Satisfaction - Fixed with inline styles */}
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold mb-4 text-red-600 dark:text-red-500">Customer Satisfaction</h3>
                <div className="h-48 flex flex-col justify-center">
                  <div className="space-y-3">
                    {[
                      { label: "5★", value: 80, color: "bg-red-500" },
                      { label: "4★", value: 15, color: "bg-red-400" },
                      { label: "3★", value: 3, color: "bg-red-300" },
                      { label: "2★", value: 1, color: "bg-red-200" },
                      { label: "1★", value: 1, color: "bg-red-100" },
                    ].map((rating, idx) => (
                      <div key={rating.label} className="flex items-center">
                        <div className="w-16 text-sm text-right pr-2">{rating.label}</div>
                        <div className="flex-1 h-5 bg-gray-100 dark:bg-gray-700 rounded-sm overflow-hidden">
                          <div
                            className={`h-full ${rating.color}`}
                            style={{
                              width: `${rating.value}%`,
                              transition: "width 1.5s ease",
                              transitionDelay: `${idx * 0.2}s`,
                            }}
                          ></div>
                        </div>
                        <div className="w-12 text-sm text-right pl-2">{rating.value}%</div>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
                  <span className="font-bold text-red-600 dark:text-red-500">4.8/5 average rating</span> with over
                  <span className="animate-count" data-count="5000">
                    {" "}
                    0
                  </span>{" "}
                  verified customer reviews
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Don't just take our word for it - hear from our satisfied customers
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Priya Sharma",
                  role: "Business Owner",
                  quote:
                    "InsureDash made it incredibly easy to find the right life insurance policy for my family. The process was smooth, and the customer service was exceptional.",
                },
                {
                  name: "Rahul Mehta",
                  role: "IT Professional",
                  quote:
                    "I've been with InsureDash for over 3 years now. Their health insurance coverage is comprehensive, and their claim settlement process is hassle-free.",
                },
                {
                  name: "Ananya Patel",
                  role: "Doctor",
                  quote:
                    "The term insurance options at InsureDash are affordable and offer great coverage. I feel secure knowing my family's future is protected.",
                },
              ].map((testimonial, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-4">
                    <div>
                      <h3 className="font-medium">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Rest of the page remains the same */}
        {/* Why Choose Us Section */}
        <section id="about" className="py-16 bg-white dark:bg-gray-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose InsureDash</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We're committed to providing the best insurance experience for our customers
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                {
                  title: "Trusted by Millions",
                  description: "Join over 10 million satisfied customers who trust us with their insurance needs.",
                },
                {
                  title: "Quick Claims Settlement",
                  description: "Experience hassle-free claims with our streamlined settlement process.",
                },
                {
                  title: "Expert Guidance",
                  description: "Our insurance advisors provide personalized solutions tailored to your needs.",
                },
                {
                  title: "Digital Convenience",
                  description: "Manage your policies, pay premiums, and file claims online with ease.",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="p-6 border border-gray-100 dark:border-gray-800 rounded-lg hover:shadow-sm transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center mb-4">
                    <span className="text-red-600 dark:text-red-500 font-bold">{index + 1}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-red-600 dark:bg-red-700 text-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: "10M+", label: "Customers" },
                { value: "₹2,500Cr+", label: "Claims Settled" },
                { value: "30,000+", label: "Policies Issued Daily" },
                { value: "4.8/5", label: "Customer Rating" },
              ].map((stat, index) => (
                <div key={index} className="animate-[fadeIn_1s_ease-in-out]">
                  <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                  <div className="text-red-100">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to secure your future?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Join millions of satisfied customers who trust InsureDash for their insurance needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 group transition-transform hover:scale-105"
              >
                <Link href="/register" className="flex items-center">
                  Get Started Now
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950 transition-transform hover:scale-105"
              >
                <Link href="/contact-us">Talk to an Advisor</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Find answers to common questions about our insurance products
              </p>
            </div>

            <div className="max-w-3xl mx-auto">
              {[
                {
                  question: "How do I choose the right insurance plan?",
                  answer:
                    "Choosing the right insurance plan depends on your specific needs, budget, and life stage. Our advisors can help you assess your requirements and recommend suitable options. You can also use our online comparison tool to evaluate different plans side by side.",
                },
                {
                  question: "How quickly are claims processed?",
                  answer:
                    "At InsureDash, we pride ourselves on quick claim settlements. Most straightforward claims are processed within 48-72 hours. For more complex cases, it might take up to 7 working days. Our digital claim submission process makes it easy to track your claim status in real-time.",
                },
                {
                  question: "Can I modify my policy after purchase?",
                  answer:
                    "Yes, you can modify your policy after purchase. Changes like updating personal information can be done easily through your dashboard. For coverage modifications, you may need to contact our customer service. Some changes might require additional documentation or underwriting.",
                },
                {
                  question: "Are there any tax benefits with these insurance plans?",
                  answer:
                    "Yes, many of our insurance plans offer tax benefits. Life insurance premiums are eligible for tax deductions under Section 80C, while health insurance premiums qualify under Section 80D of the Income Tax Act. The specific benefits depend on the type of policy and your tax situation.",
                },
                {
                  question: "How do I contact customer support?",
                  answer:
                    "You can reach our customer support team through multiple channels. Call our toll-free number at 1800-123-4567, email us at support@insuredash.com, or use the live chat feature on our website. Our support team is available 24/7 to assist you with any queries or concerns.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 last:border-0 last:pb-0"
                >
                  <button
                    className="flex justify-between items-center w-full text-left font-medium py-2 focus:outline-none"
                    onClick={() => {
                      const details = document.getElementById(`faq-${index}`)
                      if (details) {
                        details.classList.toggle("hidden")
                      }
                    }}
                  >
                    <span>{faq.question}</span>
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </button>
                  <div id={`faq-${index}`} className="hidden mt-2 text-gray-600 dark:text-gray-400">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
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