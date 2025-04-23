"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import type React from "react"
import { SidebarProvider } from "@/components/dashboard/sidebar-provider"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { cn } from "@/lib/utils"
import { useSidebar } from "@/components/dashboard/sidebar-provider"
import { ChatbotToggle } from "@/components/dashboard/chatbot-toggle"

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
      <main className="flex-1 p-6">
        <div
          className={cn(
            "transition-all duration-300 ease-in-out",
            isPageTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0",
          )}
        >
          {children}
        </div>
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
      <div className="flex min-h-screen bg-background">
        <DashboardSidebar />
        <DashboardContent>{children}</DashboardContent>
        <ChatbotToggle />
      </div>
    </SidebarProvider>
  )
}
