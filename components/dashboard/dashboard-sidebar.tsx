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
          "fixed inset-y-0 left-0 z-20 flex h-full w-64 flex-col border-r bg-background transition-all duration-300 ease-in-out",
          isMobile && !open ? "-translate-x-full" : "translate-x-0",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex h-16 items-center justify-between border-b px-6">
          <Link href="/dashboard" className="flex items-center gap-2 font-semibold">
            <ShieldCheck className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            <span>InsureDash</span>
          </Link>
          <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => setOpen(false)}>
            <ChevronLeft className="h-5 w-5" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>
        <div className="flex-1 overflow-auto py-4">
          <nav className="grid gap-1 px-2">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200 hover:bg-accent hover:text-accent-foreground",
                  route.active ? "bg-accent text-accent-foreground" : "text-muted-foreground",
                )}
              >
                <route.icon className="h-5 w-5" />
                {route.label}
              </Link>
            ))}
          </nav>
        </div>
        <div className="border-t p-4">
          <div className="flex items-center gap-3 rounded-lg px-3 py-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <img src="/placeholder.svg?height=36&width=36" alt="User avatar" className="h-full w-full rounded-full" />
            </div>
            <div>
              <p className="text-sm font-medium">{localStorage.getItem("userName") || "User"}</p>
            </div>
          </div>
          <Button
            variant="outline"
            className="w-full mt-2 text-red-500 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950"
            onClick={handleSignOut}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </>
  )
}
