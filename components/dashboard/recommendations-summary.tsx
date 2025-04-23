"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Check, Info } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

// Function to calculate premium based on the logic from insurance.py
const calculatePremium = (coverAmount: number, insuranceType: string, paymentFrequency = "monthly") => {
  // Set premium rates for different insurances based on the cover amount
  const premiumRates: Record<string, number> = {
    Term: 0.02, // Term Insurance: 2% of cover amount
    Health: 0.03, // Health Insurance: 3% of cover amount
    Life: 0.04, // Life Insurance: 4% of cover amount
  }

  // Calculate yearly premiums based on cover amount
  const premiumYearly = Math.round(coverAmount * (premiumRates[insuranceType] || 0.03))

  // Adjust for payment frequency
  let premium: number
  if (insuranceType === "Health" || insuranceType === "Life") {
    if (paymentFrequency === "monthly") {
      premium = premiumYearly / 12 // Monthly premium
    } else {
      premium = premiumYearly // Yearly premium
    }
  } else {
    premium = premiumYearly // Fixed yearly for Term Insurance
  }

  return Math.round(premium)
}

export function RecommendationsSummary() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      type: "Health Insurance",
      provider: "HealthShield Premium",
      savingsAmount: "₹180/year",
      savingsPercentage: "12%",
      features: ["Higher coverage limits", "Critical illness coverage", "International treatment"],
      match: "95%",
      currentPlan: "Individual Health Plan",
      recommendedPlan: "Family Floater Plan",
      mlScore: 0.95,
    },
    {
      id: 2,
      type: "Life Insurance",
      provider: "LifeSecure Plus",
      savingsAmount: "₹140/year",
      savingsPercentage: "15%",
      features: ["Increased death benefit", "Critical illness rider", "Disability benefit"],
      match: "88%",
      currentPlan: "Basic Life Cover",
      recommendedPlan: "Enhanced Protection",
      mlScore: 0.88,
    },
  ])

  // This function would be called to fetch ML-based recommendations
  const fetchMLRecommendations = async () => {
    try {
      // In a real implementation, this would be an API call to your Python ML backend
      // For demo purposes, we'll simulate the API response with our calculation function

      // Calculate premiums using our function
      const healthPremium = calculatePremium(1500000, "Health", "monthly")
      const lifePremium = calculatePremium(5000000, "Life", "monthly")

      // Update recommendations with calculated values
      setRecommendations([
        {
          id: 1,
          type: "Health Insurance",
          provider: "HealthShield Premium",
          savingsAmount: `₹${Math.round(healthPremium * 0.12)}/year`,
          savingsPercentage: "12%",
          features: ["Higher coverage limits", "Critical illness coverage", "International treatment"],
          match: "95%",
          currentPlan: "Individual Health Plan",
          recommendedPlan: "Family Floater Plan",
          mlScore: 0.95,
        },
        {
          id: 2,
          type: "Life Insurance",
          provider: "LifeSecure Plus",
          savingsAmount: `₹${Math.round(lifePremium * 0.15)}/year`,
          savingsPercentage: "15%",
          features: ["Increased death benefit", "Critical illness rider", "Disability benefit"],
          match: "88%",
          currentPlan: "Basic Life Cover",
          recommendedPlan: "Enhanced Protection",
          mlScore: 0.88,
        },
      ])
    } catch (error) {
      console.error("Failed to fetch ML recommendations:", error)
    }
  }

  // Fetch recommendations on component mount
  useEffect(() => {
    fetchMLRecommendations()

    // Set up periodic refresh of recommendations (e.g., every 24 hours)
    const intervalId = setInterval(fetchMLRecommendations, 86400000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="space-y-4">
      {recommendations.map((recommendation) => (
        <div key={recommendation.id} className="rounded-lg border p-3">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-medium">{recommendation.type}</div>
              <div className="text-xs text-muted-foreground">{recommendation.provider}</div>
            </div>
            <Badge className="bg-blue-600">{recommendation.match} Match</Badge>
          </div>
          <div className="mt-2 flex items-center text-sm">
            <div className="font-medium text-green-600">{recommendation.savingsAmount}</div>
            <div className="ml-2 text-xs text-muted-foreground">({recommendation.savingsPercentage} savings)</div>
          </div>
          <div className="mt-2">
            <ul className="space-y-1">
              {recommendation.features.map((feature, index) => (
                <li key={index} className="flex items-center text-xs">
                  <Check className="mr-1 h-3 w-3 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-xs text-muted-foreground">
              <span className="font-medium">{recommendation.currentPlan}</span> →{" "}
              <span className="font-medium">{recommendation.recommendedPlan}</span>
            </div>
            <div className="flex gap-2">
              <Button size="sm" variant="outline" className="h-7 text-xs">
                <Info className="mr-1 h-3 w-3" />
                Details
              </Button>
              <Button size="sm" className="h-7 text-xs bg-blue-600 hover:bg-blue-700" asChild>
                <Link
                  href={`/dashboard/plan-switch?type=${recommendation.type.toLowerCase().includes("health") ? "health" : "life"}`}
                >
                  Switch Plan
                </Link>
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
