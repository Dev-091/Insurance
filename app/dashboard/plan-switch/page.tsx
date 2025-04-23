"use client"

import { useState, useEffect, useMemo } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Check, AlertCircle, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { PlanComparisonTable } from "@/components/dashboard/plan-comparison-table"
import { PlanFeaturesList } from "@/components/dashboard/plan-features-list"
import Link from "next/link"

export default function PlanSwitchPage() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Extract URL params and memoize to avoid re-running useEffect unnecessarily
  const typeParam = useMemo(() => searchParams.get("type"), [searchParams])
  const policyIdParam = useMemo(() => searchParams.get("policyId"), [searchParams])

  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [currentPlan, setCurrentPlan] = useState<string | null>(null)
  const [insuranceType, setInsuranceType] = useState<string>("health")
  const [userPolicies, setUserPolicies] = useState<any[]>([])

  // Set insurance type
  useEffect(() => {
    if (typeParam && (typeParam === "health" || typeParam === "life")) {
      setInsuranceType(typeParam)
    }
  }, [typeParam])

  // Load user policies and determine current plan
  useEffect(() => {
    try {
      const policies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
      setUserPolicies(policies)

      if (policyIdParam) {
        const policy = policies.find((p: any) => p.id?.toString() === policyIdParam)
        if (policy) {
          setCurrentPlan(policy.plan)
        }
      } else if (policies.length > 0 && typeParam) {
        const typePolicy = policies.find((p: any) =>
          p.type?.toLowerCase().includes(typeParam === "health" ? "health" : "life"),
        )
        if (typePolicy) {
          setCurrentPlan(typePolicy.plan)
        }
      }
    } catch (err) {
      console.error("Failed to load policies", err)
    }
  }, [policyIdParam, typeParam])

  // Memoized plan options
  const plans = useMemo(() => {
    if (insuranceType === "health") {
      return [
        {
          id: "basic-health",
          name: "Individual Health Plan",
          coverage: "₹5 Lakhs",
          premium: "₹800/month",
          description: "Basic health coverage for individuals",
          features: ["Hospitalization Cover", "Pre & Post Hospitalization", "Day Care Procedures"],
          savings: currentPlan?.includes("Comprehensive")
            ? "₹2,000/year"
            : currentPlan?.includes("Family")
              ? "₹700/year"
              : "₹0/year",
          recommended: false,
        },
        {
          id: "standard-health",
          name: "Family Floater Plan",
          coverage: "₹15 Lakhs",
          premium: "₹1,500/month",
          description: "Comprehensive coverage for your entire family",
          features: [
            "Coverage for Entire Family",
            "Hospitalization Cover",
            "Pre & Post Hospitalization",
            "Day Care Procedures",
          ],
          savings: currentPlan?.includes("Comprehensive")
            ? "₹1,300/year"
            : currentPlan?.includes("Individual")
              ? "-₹700/year"
              : "₹0/year",
          recommended: currentPlan?.includes("Individual"),
        },
        {
          id: "premium-health",
          name: "Comprehensive Health Plan",
          coverage: "₹50 Lakhs",
          premium: "₹2,800/month",
          description: "Premium health coverage with additional benefits",
          features: [
            "Hospitalization Cover",
            "Pre & Post Hospitalization",
            "Day Care Procedures",
            "Critical Illness Cover",
            "International Treatment",
          ],
          savings: currentPlan?.includes("Individual")
            ? "-₹2,000/year"
            : currentPlan?.includes("Family")
              ? "-₹1,300/year"
              : "₹0/year",
          recommended: currentPlan?.includes("Family"),
        },
        {
          id: "elite-health",
          name: "Elite Health Cover",
          coverage: "₹1 Crore",
          premium: "₹4,500/month",
          description: "Our most comprehensive health insurance with exclusive benefits",
          features: [
            "All Comprehensive Plan Features",
            "Higher Coverage Limits",
            "Global Treatment Coverage",
            "Wellness Benefits",
            "Alternative Treatments",
            "Maternity Benefits",
            "OPD Coverage",
            "Dental & Vision Care",
            "Priority Claims Processing",
          ],
          savings: "-₹1,700/year from Comprehensive",
          recommended: currentPlan?.includes("Comprehensive"),
        },
      ]
    } else {
      return [
        {
          id: "basic-life",
          name: "Basic Life Cover",
          coverage: "₹25 Lakhs",
          premium: "₹500/month",
          description: "Essential life coverage at affordable rates",
          features: ["Death Benefit", "Tax Advantages", "No Medical Exam Required"],
          savings: currentPlan?.includes("Premium")
            ? "₹1,300/year"
            : currentPlan?.includes("Enhanced")
              ? "₹450/year"
              : "₹0/year",
          recommended: false,
        },
        {
          id: "standard-life",
          name: "Enhanced Protection",
          coverage: "₹50 Lakhs",
          premium: "₹950/month",
          description: "Increased coverage with additional benefits",
          features: ["Death Benefit", "Tax Advantages", "Critical Illness Rider", "Accidental Death Benefit"],
          savings: currentPlan?.includes("Premium")
            ? "₹850/year"
            : currentPlan?.includes("Basic")
              ? "-₹450/year"
              : "₹0/year",
          recommended: currentPlan?.includes("Basic"),
        },
        {
          id: "premium-life",
          name: "Premium Coverage",
          coverage: "₹1 Crore",
          premium: "₹1,800/month",
          description: "Comprehensive life insurance with maximum benefits",
          features: [
            "Death Benefit",
            "Tax Advantages",
            "Critical Illness Rider",
            "Accidental Death Benefit",
            "Disability Benefit",
          ],
          savings: currentPlan?.includes("Basic")
            ? "-₹1,300/year"
            : currentPlan?.includes("Enhanced")
              ? "-₹850/year"
              : "₹0/year",
          recommended: currentPlan?.includes("Enhanced"),
        },
        {
          id: "elite-life",
          name: "Elite Life Cover",
          coverage: "₹2 Crore",
          premium: "₹3,200/month",
          description: "Our most comprehensive life insurance with exclusive benefits",
          features: [
            "All Premium Coverage Features",
            "Higher Coverage Amount",
            "Premium Waiver Benefit",
            "Return of Premium Option",
            "Family Income Benefit",
            "Education Benefit for Children",
            "Spouse Coverage Option",
            "Inflation Protection",
            "Priority Claims Processing",
          ],
          savings: "-₹1,400/year from Premium",
          recommended: currentPlan?.includes("Premium"),
        },
      ]
    }
  }, [insuranceType, currentPlan])

  const handlePlanSelect = (planId: string) => {
    setSelectedPlan(planId)
  }

  const handleSwitchPlan = () => {
    if (!selectedPlan) return

    setIsLoading(true)
    setError("")

    const newPlan = plans.find((plan) => plan.id === selectedPlan)
    if (!newPlan) {
      setError("Selected plan not found. Please try again.")
      setIsLoading(false)
      return
    }

    try {
      const existingPolicies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
      const policyIndex = existingPolicies.findIndex((p: any) =>
        p.type?.toLowerCase().includes(insuranceType === "health" ? "health" : "life"),
      )

      if (policyIndex !== -1) {
        // Update the existing policy
        existingPolicies[policyIndex] = {
          ...existingPolicies[policyIndex],
          plan: newPlan.name,
          premium: newPlan.premium,
          updatedDate: new Date().toISOString(),
        }
      } else {
        // Create a new policy if none exists
        existingPolicies.push({
          id: Date.now(),
          type: insuranceType === "health" ? "Health Insurance" : "Life Insurance",
          plan: newPlan.name,
          premium: newPlan.premium,
          purchaseDate: new Date().toISOString(),
          status: "active",
        })
      }

      // Save updated policies
      localStorage.setItem("purchasedPolicies", JSON.stringify(existingPolicies))

      // Show success message
      setSuccess(true)

      // Redirect after a delay
      setTimeout(() => {
        router.push("/dashboard/policies?switched=true")
      }, 2000)
    } catch (err) {
      console.error("Failed to switch plan", err)
      setError("Failed to switch plan. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Switch Your Plan</h1>
          <p className="text-muted-foreground mt-2">
            Compare and upgrade your {insuranceType === "health" ? "health" : "life"} insurance plan
          </p>
        </div>
        <Button variant="outline" asChild>
          <Link href="/dashboard/policies">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Policies
          </Link>
        </Button>
      </div>

      {success && (
        <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200">
          <Check className="h-4 w-4" />
          <AlertDescription>Your plan has been successfully switched! Redirecting to your policies...</AlertDescription>
        </Alert>
      )}

      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="compare" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="compare">Compare Plans</TabsTrigger>
          <TabsTrigger value="features">Plan Features</TabsTrigger>
        </TabsList>

        <TabsContent value="compare">
          <Card>
            <CardHeader>
              <CardTitle>Plan Comparison</CardTitle>
              <CardDescription>
                Compare different {insuranceType === "health" ? "health" : "life"} insurance plans
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PlanComparisonTable
                plans={plans}
                currentPlan={currentPlan}
                selectedPlan={selectedPlan}
                onSelectPlan={handlePlanSelect}
                insuranceType={insuranceType}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                {selectedPlan ? "Click 'Switch Plan' to confirm your selection" : "Select a plan to continue"}
              </p>
              <Button
                onClick={handleSwitchPlan}
                disabled={!selectedPlan || isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? "Processing..." : "Switch Plan"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="features">
          <Card>
            <CardHeader>
              <CardTitle>Detailed Plan Features</CardTitle>
              <CardDescription>
                Explore the features of each {insuranceType === "health" ? "health" : "life"} insurance plan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <PlanFeaturesList
                plans={plans}
                currentPlan={currentPlan}
                selectedPlan={selectedPlan}
                onSelectPlan={handlePlanSelect}
              />
            </CardContent>
            <CardFooter className="flex justify-between">
              <p className="text-sm text-muted-foreground">
                {selectedPlan ? "Click 'Switch Plan' to confirm your selection" : "Select a plan to continue"}
              </p>
              <Button
                onClick={handleSwitchPlan}
                disabled={!selectedPlan || isLoading}
                className="bg-blue-600 hover:bg-blue-700"
              >
                {isLoading ? "Processing..." : "Switch Plan"}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
