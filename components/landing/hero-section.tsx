"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Shield } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-indigo-950 py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-indigo-300/20 dark:bg-indigo-700/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-300/20 dark:bg-purple-700/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-sm font-medium mb-6">
                <Shield className="h-4 w-4 mr-2" />
                <span>Trusted by 32,000+ customers</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  Secure Your Future
                </span>{" "}
                <br />
                with InsureDash
              </h1>

              <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-xl">
                Comprehensive insurance solutions tailored to your needs. Protect what matters most with our range of
                life, health, and term insurance products.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 dark:from-indigo-600 dark:to-purple-600 text-white border-0 shadow-lg shadow-indigo-500/20 group transition-all hover:shadow-xl hover:shadow-indigo-500/30"
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
                  className="border-indigo-200 dark:border-indigo-800 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-950/50 transition-all"
                >
                  <Link href="#products">Explore Products</Link>
                </Button>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden p-6 md:p-8">
                <div className="aspect-[4/3] bg-gradient-to-br from-indigo-100 to-purple-100 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-xl flex items-center justify-center">
                  <div className="text-center p-6">
                    <Shield className="h-16 w-16 mx-auto mb-4 text-indigo-500" />
                    <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">Insurance Made Simple</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Protecting your future with transparent policies and exceptional service
                    </p>
                    
                    <div className="mt-8 grid grid-cols-3 gap-4">
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Life</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">₹500/mo</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Health</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">₹800/mo</p>
                      </div>
                      <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow-md">
                        <p className="text-xs text-gray-500 dark:text-gray-400">Term</p>
                        <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400">₹600/mo</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                  <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Instant Approval</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Get covered in minutes</p>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-2">
                    <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Secure & Protected</p>
                </div>
                <div className="flex space-x-1">
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                  <div className="w-2 h-2 rounded-full bg-indigo-600"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}