"use client"

import { useState, useEffect } from "react"
import { Bell, Menu, Search, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { useTheme } from "next-themes"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export function DashboardHeader() {
  const { open, toggleSidebar, isMobile } = useSidebar()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [userName, setUserName] = useState("User")
  const [currentTime, setCurrentTime] = useState("")
  const [greeting, setGreeting] = useState("")
  
  // Update time every minute
  useEffect(() => {
    setMounted(true)
    
    // Get user name from localStorage
    try {
      const storedName = localStorage.getItem("userName")
      if (storedName) {
        const name = storedName.split("@")[0]
        setUserName(name)
      }
    } catch (e) {
      console.error("Failed to get username", e)
    }
    
    // Set initial time and greeting
    updateTimeAndGreeting()
    
    // Update time every minute
    const interval = setInterval(updateTimeAndGreeting, 60000)
    return () => clearInterval(interval)
  }, [])
  
  const updateTimeAndGreeting = () => {
    const now = new Date()
    const hours = now.getHours()
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    setCurrentTime(timeString)
    
    // Set greeting based on time of day
    if (hours < 12) {
      setGreeting("Good morning")
    } else if (hours < 18) {
      setGreeting("Good afternoon")
    } else {
      setGreeting("Good evening")
    }
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 backdrop-blur-md px-6 shadow-sm">
      <Button 
        variant="ghost" 
        size="icon" 
        className={cn(
          "h-10 w-10 mr-2 rounded-full transition-all",
          open ? "rotate-90" : "rotate-0"
        )} 
        onClick={toggleSidebar}
      >
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle sidebar</span>
      </Button>
      
      <div className="ml-auto flex items-center gap-3">
        {/* Theme toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="h-10 w-10 rounded-full"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {mounted && theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  )
}
