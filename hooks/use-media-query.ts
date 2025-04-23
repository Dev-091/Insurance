"use client"

import { useEffect, useState } from "react"

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    // Set initial state - server-side rendering safe
    if (typeof window !== "undefined") {
      setMatches(window.matchMedia(query).matches)
    }

    // Only run on client
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)

      const listener = () => setMatches(media.matches)
      media.addEventListener("change", listener)

      return () => media.removeEventListener("change", listener)
    }

    return undefined
  }, [query])

  return matches
}
