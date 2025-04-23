"use client"

import { Badge } from "@/components/ui/badge"

export function MarketComparisonSummary() {
  const comparisons = [
    {
      id: 1,
      type: "Auto Insurance",
      yourPremium: "₹125/month",
      marketAverage: "₹145/month",
      difference: "-14%",
      status: "below",
      coverage: "Good",
      deductible: "₹500",
      marketDeductible: "₹750",
    },
    {
      id: 2,
      type: "Home Insurance",
      yourPremium: "₹92/month",
      marketAverage: "₹85/month",
      difference: "+8%",
      status: "above",
      coverage: "Excellent",
      deductible: "₹1,000",
      marketDeductible: "₹1,500",
    },
  ]

  return (
    <div className="space-y-4">
      {comparisons.map((comparison) => (
        <div key={comparison.id} className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div className="font-medium">{comparison.type}</div>
            <Badge className={comparison.status === "below" ? "bg-green-600" : "bg-yellow-600"}>
              {comparison.difference} {comparison.status === "below" ? "Lower" : "Higher"}
            </Badge>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Your Premium</div>
              <div className="font-medium">{comparison.yourPremium}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Market Average</div>
              <div className="font-medium">{comparison.marketAverage}</div>
            </div>
          </div>
          <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
            <div>
              <div className="text-xs text-muted-foreground">Coverage Rating</div>
              <div className="font-medium">{comparison.coverage}</div>
            </div>
            <div>
              <div className="text-xs text-muted-foreground">Your Deductible</div>
              <div className="font-medium">{comparison.deductible}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
