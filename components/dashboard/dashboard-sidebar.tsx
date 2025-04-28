"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import {
  BarChart3,
  ChevronLeft,
  ChevronRight,
  FileText,
  Home,
  LifeBuoy,
  ShieldCheck,
  ThumbsUp,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { useSidebar } from "./sidebar-provider"
import { useState } from "react"

export function DashboardSidebar() {
  const pathname = usePathname()
  const router = useRouter()
  const { open, setOpen, isMobile } = useSidebar()
  const [isHovered, setIsHovered] = useState(false)

  const routes = [
    {
      label: "Dashboard",
      icon: Home,
      href: "/dashboard",
      active: pathname === "/dashboard",
    },
    {
      label: "Policies",
      icon: FileText,
      href: "/dashboard/policies",
      active: pathname === "/dashboard/policies",
    },
    {
      label: "Claims",
      icon: ShieldCheck,
      href: "/dashboard/claims",
      active: pathname === "/dashboard/claims",
    },
    {
      label: "Recommendations",
      icon: ThumbsUp,
      href: "/dashboard/recommendations",
      active: pathname === "/dashboard/recommendations",
    },
    {
      label: "Analytics",
      icon: BarChart3,
      href: "/dashboard/analytics",
      active: pathname === "/dashboard/analytics",
    },
    {
      label: "Profile",
      icon: User,
      href: "/dashboard/profile",
      active: pathname === "/dashboard/profile",
    },
    {
      label: "Help & Support",
      icon: LifeBuoy,
      href: "/dashboard/support",
      active: pathname === "/dashboard/support",
    },
  ]

  const handleSignOut = () => {
    // In a real app, you would clear auth tokens, cookies, etc.
    // For this demo, we'll just redirect to the home page
    router.push("/")
  }

  // Show sidebar toggle button when sidebar is closed
  const SidebarToggle = () => {
    if (!open && !isMobile) {
      return (
        <Button
          variant="outline"
          size="icon"
          className="fixed left-4 bottom-4 z-50 rounded-full shadow-md bg-white dark:bg-gray-800 hover:bg-blue-50 dark:hover:bg-gray-700"
          onClick={() => setOpen(true)}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Open sidebar</span>
        </Button>
      )
    }
    return null
  }

  if (!open && !isMobile) {
    return (
      <>
        <SidebarToggle />
      </>
    )
  }

  if (isMobile && !open) {
    return <SidebarToggle />
  }

  return (
    <>
      {isMobile && open && (
        <div
          className="fixed inset-0 z-10 bg-black/50 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setOpen(false)}
        />
      )}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col bg-sidebar transition-all duration-300 ease-in-out shadow-lg",
          isMobile && !open ? "-translate-x-full" : "translate-x-0",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex h-20 items-center justify-between px-6 border-b border-sidebar-border/30">
          <Link href="/dashboard" className="flex items-center gap-2 font-bold text-sidebar-foreground">
            <ShieldCheck className="h-6 w-6 text-white" />
            <span className="text-lg tracking-tight">InsureDash</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-sidebar-foreground hover:bg-sidebar-accent" onClick={() => setOpen(false)}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-6">
          <nav className="grid gap-2 px-3">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition-all duration-200",
                  route.active 
                    ? "bg-white/10 text-white shadow-sm" 
                    : "text-sidebar-foreground/80 hover:bg-white/5 hover:text-white hover:translate-x-1",
                )}
              >
                <route.icon className={cn("h-5 w-5", route.active ? "text-white" : "text-sidebar-foreground/70")} />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="p-4 mx-3 mb-4 rounded-lg bg-sidebar-accent/30 backdrop-blur-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="relative">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 ring-2 ring-white/30">
                {/* First letter of username as avatar */}
                <span className="text-lg font-semibold text-white">
                  {(() => {
                    try {
                      const name = localStorage.getItem("userName") || "User";
                      return name.charAt(0).toUpperCase();
                    } catch (e) {
                      return "U";
                    }
                  })()}
                </span>
              </div>
              <div className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-green-500 ring-2 ring-sidebar"></div>
            </div>
            <div>
              <p className="text-sm font-medium text-white">
                {(() => {
                  try {
                    const name = localStorage.getItem("userName") || "User";
                    return name.split("@")[0];
                  } catch (e) {
                    return "User";
                  }
                })()}
              </p>
              <p className="text-xs text-sidebar-foreground/70">Premium Member</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full bg-white/10 text-white border-white/20 hover:bg-white/20 hover:text-white transition-all"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </>
  )
}
