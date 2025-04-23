"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check } from "lucide-react"

export function DashboardWelcome() {
  const [userName, setUserName] = useState("User")
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false)
  const searchParams = useSearchParams()
  const [policyCount, setPolicyCount] = useState(0)
  const [totalPremium, setTotalPremium] = useState("₹0")

  useEffect(() => {
    // Try to get the user's name from localStorage
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      setUserName(storedName)
    }

    // Check if there's a new purchase
    const newPurchase = searchParams.get("newPurchase")
    if (newPurchase === "true") {
      setShowPurchaseAlert(true)

      // Hide the alert after 5 seconds
      setTimeout(() => {
        setShowPurchaseAlert(false)
      }, 5000)
    }

    // Get purchased policies count and calculate total premium
    try {
      const policies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
      setPolicyCount(policies.length)

      if (policies.length > 0) {
        // Calculate total premium using the calculation model
        let totalMonthlyPremium = 0

        policies.forEach((policy: any) => {
          // Extract numeric value from premium string (e.g., "₹500/month" -> 500)
          const premiumMatch = policy.premium?.match(/₹(\d+)/)
          if (premiumMatch && premiumMatch[1]) {
            const premiumValue = Number.parseInt(premiumMatch[1], 10)

            // Check if it's monthly or yearly
            if (policy.premium?.includes("/month")) {
              totalMonthlyPremium += premiumValue
            } else if (policy.premium?.includes("/year")) {
              // Convert yearly to monthly
              totalMonthlyPremium += premiumValue / 12
            }
          }
        })

        setTotalPremium(`₹${Math.round(totalMonthlyPremium)}`)
      }
    } catch (err) {
      console.error("Failed to load purchased policies", err)
      setPolicyCount(0)
      setTotalPremium("₹0")
    }
  }, [searchParams])

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl">Welcome back, {userName}</CardTitle>
        <CardDescription>Here's an overview of your insurance portfolio</CardDescription>

        {showPurchaseAlert && (
          <Alert className="mt-4 bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200">
            <Check className="h-4 w-4" />
            <AlertDescription>
              Your policy has been purchased successfully! It's now available in your dashboard.
            </AlertDescription>
          </Alert>
        )}
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{policyCount}</div>
              <p className="text-xs text-muted-foreground">Your insurance portfolio</p>
              <Button variant="link" size="sm" asChild className="mt-2 px-0">
                <Link href="/dashboard/policies" className="flex items-center">
                  View all policies
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Open Claims</CardTitle>
              <ShieldCheck className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{policyCount > 0 ? "1" : "0"}</div>
              <p className="text-xs text-muted-foreground">
                {policyCount > 0 ? "Auto claim in progress" : "No active claims"}
              </p>
              <Button variant="link" size="sm" asChild className="mt-2 px-0">
                <Link href="/dashboard/claims" className="flex items-center">
                  View claim details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Monthly Premium</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{totalPremium}</div>
              <p className="text-xs text-muted-foreground">Next payment: May 15, 2025</p>
              <div className="mt-2 h-[4px] w-full rounded-full bg-muted">
                <div className="h-full w-1/2 rounded-full bg-blue-600" />
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="h-4 w-4 text-muted-foreground"
              >
                <path d="M16 16v-8M12 16v-4M8 16v-2M4 16v-1" />
              </svg>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">₹320/year</div>
              <p className="text-xs text-muted-foreground">Based on recommended plans</p>
              <Button variant="link" size="sm" asChild className="mt-2 px-0">
                <Link href="/dashboard/recommendations" className="flex items-center">
                  View recommendations
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </CardContent>
    </Card>
  )
}
