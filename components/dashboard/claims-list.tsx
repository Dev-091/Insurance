"use client"

import { Button } from "@/components/ui/button"
import { FileText } from "lucide-react"

interface ClaimsListProps {
  status: "active" | "approved" | "denied" | "all"
}

export function ClaimsList({ status }: ClaimsListProps) {
  // Empty claims list
  return (
    <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
      <div className="rounded-full bg-primary/10 p-3">
        <FileText className="h-6 w-6 text-primary" />
      </div>
      <h3 className="mt-4 text-lg font-semibold">No claims found</h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {status === "active" && "You don't have any active claims."}
        {status === "approved" && "You don't have any approved claims."}
        {status === "denied" && "You don't have any denied claims."}
        {status === "all" && "You haven't filed any claims yet."}
      </p>
      <Button className="mt-4 bg-blue-600 hover:bg-blue-700">File New Claim</Button>
    </div>
  )
}
