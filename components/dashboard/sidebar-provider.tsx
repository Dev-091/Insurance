"use client"

import * as React from "react"
import { useMediaQuery } from "@/hooks/use-media-query"
import { usePathname } from "next/navigation"

type SidebarContext = {
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  toggleSidebar: () => void
  isMobile: boolean
}

const SidebarContext = React.createContext<SidebarContext | undefined>(undefined)

export function SidebarProvider({
  children,
  defaultOpen = false,
}: {
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = React.useState(defaultOpen)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const pathname = usePathname()

  // Close sidebar on mobile by default
  React.useEffect(() => {
    if (isMobile) {
      setOpen(false)
    }
  }, [isMobile])

  // Close sidebar on route change on mobile
  React.useEffect(() => {
    if (isMobile) {
      setOpen(false)
    }
  }, [pathname, isMobile])

  const toggleSidebar = React.useCallback(() => {
    setOpen((prev) => !prev)
  }, [])

  return (
    <SidebarContext.Provider value={{ open, setOpen, toggleSidebar, isMobile }}>{children}</SidebarContext.Provider>
  )
}

export function useSidebar() {
  const context = React.useContext(SidebarContext)
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider")
  }
  return context
}
