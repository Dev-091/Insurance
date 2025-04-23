"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

export const Code = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(({ className, ...props }, ref) => {
  return (
    <code
      className={cn("relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold", className)}
      ref={ref}
      {...props}
    />
  )
})
Code.displayName = "Code"
