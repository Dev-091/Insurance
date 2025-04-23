"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check, Info } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"

export function RecommendationsList() {
  const [recommendations, setRecommendations] = useState([
    {
      id: 1,
      type: "Health Insurance",
      provider: "HealthShield Premium",
      savingsAmount: "₹180/year",
      savingsPercentage: "12%",
      features: [
        "Higher coverage limits (₹15 Lakhs vs current ₹5 Lakhs)",
        "Critical illness coverage included",
        "International treatment coverage",
        "Family coverage instead of individual",
      ],
      match: "95%",
      currentPremium: "₹800/month",
      newPremium: "₹1,500/month",
      description: "Enhanced family coverage with critical illness protection",
      mlScore: 0.95,
      mlConfidence: 0.92,
    },
    {
      id: 2,
      type: "Life Insurance",
      provider: "LifeSecure Plus",
      savingsAmount: "₹140/year",
      savingsPercentage: "15%",
      features: [
        "Increased death benefit (₹50 Lakhs vs current ₹25 Lakhs)",
        "Critical illness rider included",
        "Accidental death benefit",
        "Tax advantages under Section 80C",
      ],
      match: "88%",
      currentPremium: "₹500/month",
      newPremium: "₹950/month",
      description: "Better protection with critical illness coverage",
      mlScore: 0.88,
      mlConfidence: 0.85,
    },
    {
      id: 3,
      type: "Term Insurance",
      provider: "TermLife Max",
      savingsAmount: "N/A (New Policy)",
      savingsPercentage: "N/A",
      features: [
        "High coverage amount (₹1 Crore)",
        "Low premium compared to coverage",
        "Return of premium option",
        "Critical illness rider",
        "Accidental death benefit",
      ],
      match: "92%",
      currentPremium: "N/A",
      newPremium: "₹1,100/month",
      description: "High coverage term insurance with additional benefits",
      mlScore: 0.92,
      mlConfidence: 0.89,
    },
  ])

  // This function would be called to fetch ML-based recommendations
  const fetchMLRecommendations = async () => {
    try {
      // In a real implementation, this would be an API call to your Python ML backend
      // For demo purposes, we'll simulate the API response

      // Example of how you would integrate with a Python ML endpoint:
      // const response = await fetch('/api/ml-recommendations', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify({
      //     userId: 'current-user-id',
      //     currentPolicies: ['policy-1', 'policy-2'],
      //     demographics: {
      //       age: 35,
      //       income: 75000,
      //       dependents: 2,
      //       riskProfile: 'moderate',
      //     }
      //   }),
      // });
      // const data = await response.json();
      // setRecommendations(data.recommendations);

      // For demo, we'll just update the match scores to simulate ML predictions
      setRecommendations((prev) =>
        prev.map((rec) => ({
          ...rec,
          match: `${Math.floor(rec.mlScore * 100)}%`,
          mlScore: rec.mlScore + (Math.random() * 0.05 - 0.025), // Slightly adjust scores for demo
        })),
      )
    } catch (error) {
      console.error("Failed to fetch ML recommendations:", error)
    }
  }

  // Fetch recommendations on component mount
  useEffect(() => {
    fetchMLRecommendations()
  }, [])

  return (
    <div className="space-y-6">
      {/* ML Model Information Card */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-medium">ML-Powered Recommendations</h3>
              <p className="text-sm text-muted-foreground">
                These recommendations are generated using machine learning based on your profile, needs, and similar
                customers
              </p>
            </div>
            <Button variant="outline" size="sm" onClick={fetchMLRecommendations}>
              Refresh Recommendations
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="border rounded-md p-3">
              <div className="font-medium mb-1">Data Sources</div>
              <ul className="text-muted-foreground space-y-1">
                <li>• Your current policies</li>
                <li>• Demographic information</li>
                <li>• Similar customer profiles</li>
                <li>• Market trends analysis</li>
              </ul>
            </div>

            <div className="border rounded-md p-3">
              <div className="font-medium mb-1">ML Model</div>
              <ul className="text-muted-foreground space-y-1">
                <li>• Gradient Boosting Classifier</li>
                <li>• Trained on 1M+ policies</li>
                <li>• 94% prediction accuracy</li>
                <li>• Updated monthly</li>
              </ul>
            </div>

            <div className="border rounded-md p-3">
              <div className="font-medium mb-1">Personalization Factors</div>
              <ul className="text-muted-foreground space-y-1">
                <li>• Life stage & family status</li>
                <li>• Financial goals</li>
                <li>• Risk tolerance profile</li>
                <li>• Coverage gaps analysis</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {recommendations.map((recommendation) => (
        <Card key={recommendation.id}>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div className="space-y-3 md:max-w-[60%]">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{recommendation.type}</h3>
                  <Badge className="bg-blue-600">{recommendation.match} Match</Badge>
                </div>
                <p className="text-sm text-muted-foreground">{recommendation.description}</p>
                <p className="text-sm font-medium">{recommendation.provider}</p>

                <div className="mt-2">
                  <p className="text-sm font-medium">Key Features:</p>
                  <ul className="mt-1 space-y-1">
                    {recommendation.features.map((feature, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <Check className="mr-1 h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-muted-foreground mt-2 border-t pt-2">
                  <span>ML Confidence: {Math.round(recommendation.mlConfidence * 100)}%</span>
                  <span className="ml-4">Last Updated: {new Date().toLocaleDateString()}</span>
                </div>
              </div>

              <div className="flex flex-col items-end space-y-4">
                <div className="text-right">
                  {recommendation.savingsAmount !== "N/A" ? (
                    <>
                      <div className="font-medium text-green-600">{recommendation.savingsAmount} Savings</div>
                      <div className="text-sm text-muted-foreground">
                        ({recommendation.savingsPercentage} less than current plan)
                      </div>
                    </>
                  ) : (
                    <div className="font-medium text-blue-600">Recommended New Coverage</div>
                  )}

                  <div className="mt-2 space-y-1">
                    {recommendation.currentPremium !== "N/A" && (
                      <div className="text-sm">
                        <span className="text-muted-foreground">Current:</span> {recommendation.currentPremium}
                      </div>
                    )}
                    <div className="text-sm font-medium">
                      <span className="text-muted-foreground">New:</span> {recommendation.newPremium}
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Info className="mr-2 h-4 w-4" />
                    Compare
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700" asChild>
                    <Link
                      href={`/dashboard/plan-switch?type=${recommendation.type.toLowerCase().includes("health") ? "health" : "life"}`}
                    >
                      Switch Plan
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
