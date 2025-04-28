"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { SidebarProvider } from "@/components/dashboard/sidebar-provider"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/dashboard/sidebar-provider"

// Add global styles for the pulse animation
const globalStyles = `
@keyframes pulse-slow {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 0.8; }
}
`

function DashboardContent({ children }: { children: React.ReactNode }) {
  const [isPageTransitioning, setIsPageTransitioning] = useState(false)
  const pathname = usePathname()
  const { open, isMobile } = useSidebar()

  // Handle page transitions
  useEffect(() => {
    setIsPageTransitioning(true)
    const timeout = setTimeout(() => {
      setIsPageTransitioning(false)
    }, 300)

    return () => clearTimeout(timeout)
  }, [pathname])

  return (
    <div
      className={cn(
        "flex flex-1 flex-col transition-all duration-300 ease-in-out",
        open && !isMobile ? "ml-64" : "ml-0",
      )}
    >
      <DashboardHeader />
      <main className="flex-1 p-6 bg-gradient-to-br from-background to-background/80">
        <div
          className={cn(
            "transition-all duration-300 ease-in-out",
            isPageTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
          )}
        >
          {children}
        </div>
        
        {/* Decorative elements */}
        <div 
          className="fixed top-20 right-0 w-96 h-96 rounded-full -z-10"
          style={{
            backgroundColor: 'hsla(var(--primary) / 0.05)',
            filter: 'blur(100px)',
            animation: 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        ></div>
        <div 
          className="fixed bottom-0 left-1/4 w-64 h-64 rounded-full -z-10"
          style={{
            backgroundColor: 'hsla(var(--accent) / 0.05)',
            filter: 'blur(100px)',
            animation: 'pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite'
          }}
        ></div>
      </main>
    </div>
  )
}

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SidebarProvider defaultOpen={false}>
      <style dangerouslySetInnerHTML={{ __html: globalStyles }} />
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar />
        <DashboardContent>{children}</DashboardContent>
      </div>
    </SidebarProvider>
  )
}
