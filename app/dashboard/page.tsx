"use client"

import { useEffect, useState } from "react"
import { DashboardWelcome } from "@/components/dashboard/dashboard-welcome"
import { DashboardWidgets } from "@/components/dashboard/dashboard-widgets"
import { motion } from "framer-motion"

export default function DashboardPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [userName, setUserName] = useState<string | null>(null)

  useEffect(() => {
    // Simulate loading data
    const timer = setTimeout(() => {
      setIsLoaded(true)
    }, 300)
    
    // Get user name from localStorage
    try {
      const storedName = localStorage.getItem("userName")
      setUserName(storedName)
      
      // If no username is stored, set a default one for demo purposes
      if (!storedName) {
        localStorage.setItem("userName", "demo@example.com")
      }
    } catch (e) {
      console.error("Failed to access localStorage", e)
    }
    
    return () => clearTimeout(timer)
  }, [])

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="space-y-4 text-center">
          <div className="inline-block h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent"></div>
          <p className="text-muted-foreground">Loading your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <motion.div 
      className="space-y-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <DashboardWelcome />
      <DashboardWidgets />
    </motion.div>
  )
}
