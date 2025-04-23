"use client"

import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { useState, useEffect } from "react"

export function PolicySummary() {
  const [purchasedPolicies, setPurchasedPolicies] = useState<any[]>([])

  useEffect(() => {
    // Get purchased policies from localStorage
    try {
      const policies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
      setPurchasedPolicies(policies)
    } catch (err) {
      console.error("Failed to load purchased policies", err)
    }
  }, [])

  // Convert purchased policies to the right format
  const formattedPurchasedPolicies = purchasedPolicies.map((policy, index) => ({
    id: policy.id || 1000 + index,
    type: policy.type || "Unknown Insurance",
    provider: policy.type?.includes("Life")
      ? "LifeSecure Inc."
      : policy.type?.includes("Health")
        ? "HealthShield Co."
        : "TermLife Plus",
    policyNumber: `ID-${100000 + Math.floor(Math.random() * 900000)}`,
    premium: policy.premium || "₹0/month",
    renewalDate: new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }),
    status: policy.status || "active",
    progress: 100,
  }))

  // Only show purchased policies
  const policies = formattedPurchasedPolicies

  return (
    <div className="space-y-4">
      {policies.map((policy) => (
        <div key={policy.id} className="flex flex-col space-y-2">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{policy.type}</div>
              <div className="text-xs text-muted-foreground">{policy.provider}</div>
            </div>
            <Badge variant={policy.status === "active" ? "default" : "outline"} className="bg-green-600">
              Active
            </Badge>
          </div>
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex-1">Policy: {policy.policyNumber}</div>
            <div>{policy.premium}</div>
          </div>
          <div className="flex items-center gap-2">
            <Progress value={policy.progress} className="h-2" />
            <span className="text-xs text-muted-foreground whitespace-nowrap">Renews: {policy.renewalDate}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
