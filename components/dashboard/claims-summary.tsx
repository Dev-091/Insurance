"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export function ClaimsSummary() {
  const claims = [
    {
      id: 1,
      type: "Health Insurance",
      claimNumber: "CL-78901234",
      date: "Mar 28, 2025",
      amount: "₹3,450.00",
      status: "in-progress",
      progress: 45,
      description: "Hospital admission for treatment",
    },
    {
      id: 2,
      type: "Home Insurance",
      claimNumber: "CL-56789012",
      date: "Jan 15, 2025",
      amount: "₹1,200.00",
      status: "approved",
      progress: 100,
      description: "Water damage from pipe leak",
    },
    {
      id: 3,
      type: "Life Insurance",
      claimNumber: "CL-34567890",
      date: "Nov 10, 2024",
      amount: "₹5,800.00",
      status: "completed",
      progress: 100,
      description: "Critical illness claim",
    },
  ]

  return (
    <div className="space-y-4">
      {claims.map((claim) => (
        <div key={claim.id} className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{claim.type}</div>
              <div className="text-xs text-muted-foreground">{claim.description}</div>
            </div>
            <Badge
              variant={claim.status === "in-progress" ? "outline" : "default"}
              className={
                claim.status === "approved"
                  ? "bg-green-600"
                  : claim.status === "in-progress"
                    ? "bg-yellow-600"
                    : "bg-blue-600"
              }
            >
              {claim.status === "in-progress" ? "In Progress" : claim.status === "approved" ? "Approved" : "Completed"}
            </Badge>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex-1">Claim: {claim.claimNumber}</div>
            <div>{claim.amount}</div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={claim.progress} className="h-2" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">Filed: {claim.date}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
