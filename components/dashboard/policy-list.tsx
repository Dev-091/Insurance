"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, MoreHorizontal, AlertCircle } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { useRouter } from "next/navigation"
import Link from "next/link"

interface PolicyListProps {
  status: "active" | "pending" | "expired" | "all"
}

interface Policy {
  id: number
  type: string
  provider: string
  policyNumber: string
  premium: string
  renewalDate: string
  status: string
  vehicle?: string
  property?: string
  beneficiary?: string
  trip?: string
  coverage: string[]
  plan?: string
  purchaseDate?: string
}

export function PolicyList({ status }: PolicyListProps) {
  const [policies, setPolicies] = useState<Policy[]>([])
  const [showNewPolicies, setShowNewPolicies] = useState(false)
  const router = useRouter()

  useEffect(() => {
    // Load purchased policies from localStorage
    try {
      const purchasedPolicies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")

      if (purchasedPolicies.length > 0) {
        // Transform purchased policies to match the expected format
        const formattedPolicies = purchasedPolicies.map((policy: any, index: number) => ({
          id: policy.id || Date.now() + index,
          type: policy.type || "Unknown Insurance",
          provider: getProviderByType(policy.type),
          policyNumber: `PL-${Math.floor(10000000 + Math.random() * 90000000)}`,
          premium: policy.premium || "₹500/month",
          renewalDate: getNextYearDate(),
          status: policy.status || "active",
          coverage: getCoverageByType(policy.type, policy.plan),
          plan: policy.plan,
          purchaseDate: policy.purchaseDate || new Date().toISOString(),
        }))

        setPolicies(formattedPolicies)
      } else {
        // No purchased policies
        setPolicies([])
      }
    } catch (err) {
      console.error("Failed to load purchased policies", err)
      setPolicies([])
    }
  }, [])

  // Helper function to get provider by insurance type
  const getProviderByType = (type: string): string => {
    if (type?.includes("Life")) return "LifeSecure Inc."
    if (type?.includes("Health")) return "HealthShield Co."
    if (type?.includes("Term")) return "TermLife Plus"
    return "InsureDash Provider"
  }

  // Helper function to get next year's date for renewal
  const getNextYearDate = (): string => {
    const date = new Date()
    date.setFullYear(date.getFullYear() + 1)
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
  }

  // Helper function to get coverage details by type and plan
  const getCoverageByType = (type: string, plan: string): string[] => {
    if (type?.includes("Life")) {
      if (plan?.includes("Basic")) return ["Death Benefit", "Tax Advantages", "No Medical Exam Required"]
      if (plan?.includes("Enhanced"))
        return ["Death Benefit", "Tax Advantages", "Critical Illness Rider", "Accidental Death Benefit"]
      return [
        "Death Benefit",
        "Tax Advantages",
        "Critical Illness Rider",
        "Accidental Death Benefit",
        "Disability Benefit",
      ]
    }

    if (type?.includes("Health")) {
      if (plan?.includes("Individual"))
        return ["Hospitalization Cover", "Pre & Post Hospitalization", "Day Care Procedures"]
      if (plan?.includes("Family"))
        return [
          "Coverage for Entire Family",
          "Hospitalization Cover",
          "Pre & Post Hospitalization",
          "Day Care Procedures",
        ]
      return [
        "Hospitalization Cover",
        "Pre & Post Hospitalization",
        "Day Care Procedures",
        "Critical Illness Cover",
        "International Treatment",
      ]
    }

    if (type?.includes("Auto")) {
      if (plan?.includes("Basic"))
        return ["Third-Party Liability", "Personal Accident Cover", "Legal Liability to Paid Driver"]
      if (plan?.includes("Standard"))
        return ["Own Damage Cover", "Third-Party Liability", "Personal Accident Cover", "Fire & Theft Protection"]
      return [
        "Own Damage Cover",
        "Third-Party Liability",
        "Personal Accident Cover",
        "Zero Depreciation",
        "Engine Protection",
        "Roadside Assistance",
      ]
    }

    return ["Basic Coverage", "Standard Protection", "Premium Benefits"]
  }

  // New policies that can be added
  const availablePolicies = [
    {
      id: 1001,
      type: "Term Insurance",
      provider: "TermLife Plus",
      plan: "Premium Term Cover",
      premium: "₹9,000/year",
      coverage: [
        "High Coverage at Low Cost",
        "Tax Benefits",
        "Rider Options",
        "Family Protection",
        "Critical Illness Cover",
      ],
    },
    {
      id: 1002,
      type: "Health Insurance",
      provider: "HealthShield Co.",
      plan: "Comprehensive Health Plan",
      premium: "₹2,800/month",
      coverage: [
        "Hospitalization Cover",
        "Pre & Post Hospitalization",
        "Day Care Procedures",
        "Critical Illness Cover",
        "International Treatment",
      ],
    },
    {
      id: 1003,
      type: "Life Insurance",
      provider: "LifeSecure Inc.",
      plan: "Premium Coverage",
      premium: "₹1,800/month",
      coverage: [
        "Death Benefit",
        "Tax Advantages",
        "Critical Illness Rider",
        "Accidental Death Benefit",
        "Disability Benefit",
      ],
    },
  ]

  // Handle purchasing a new policy
  const handlePurchasePolicy = (policy: any) => {
    try {
      // Get existing policies
      const existingPolicies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")

      // Create new policy object
      const newPolicy = {
        id: Date.now(),
        type: policy.type,
        plan: policy.plan,
        premium: policy.premium,
        purchaseDate: new Date().toISOString(),
        status: "active",
      }

      // Add to existing policies
      const updatedPolicies = [...existingPolicies, newPolicy]
      localStorage.setItem("purchasedPolicies", JSON.stringify(updatedPolicies))

      // Update UI
      const formattedPolicy = {
        ...newPolicy,
        provider: getProviderByType(policy.type),
        policyNumber: `PL-${Math.floor(10000000 + Math.random() * 90000000)}`,
        renewalDate: getNextYearDate(),
        coverage: policy.coverage,
      }

      setPolicies([...policies, formattedPolicy])
      setShowNewPolicies(false)

      // Show success message
      alert("Policy purchased successfully!")
    } catch (err) {
      console.error("Failed to purchase policy", err)
      alert("Failed to purchase policy. Please try again.")
    }
  }

  // Handle filing a claim
  const handleFileClaim = (policyId: number) => {
    // In a real app, this would navigate to a claim filing form
    // For now, we'll just show an alert
    alert(`Claim filing initiated for policy ID: ${policyId}. A claims specialist will contact you shortly.`)
  }

  const filteredPolicies = status === "all" ? policies : policies.filter((policy) => policy.status === status)

  if (showNewPolicies) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Available Insurance Policies</h2>
          <Button variant="outline" onClick={() => setShowNewPolicies(false)}>
            Back to My Policies
          </Button>
        </div>

        {availablePolicies.map((policy) => (
          <Card key={policy.id}>
            <CardContent className="p-6">
              <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold">{policy.type}</h3>
                    <Badge className="bg-blue-600">Recommended</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{policy.provider}</p>
                  <p className="text-sm">Plan: {policy.plan}</p>
                  <div className="mt-2">
                    <p className="text-sm font-medium">Coverage:</p>
                    <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                      {policy.coverage.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col items-end space-y-2">
                  <div className="text-right">
                    <p className="font-medium">{policy.premium}</p>
                  </div>
                  <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handlePurchasePolicy(policy)}>
                    Buy Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  if (filteredPolicies.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
        <div className="rounded-full bg-primary/10 p-3">
          <FileText className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mt-4 text-lg font-semibold">No policies found</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          {status === "active" && "You don't have any active policies."}
          {status === "pending" && "You don't have any pending policies."}
          {status === "expired" && "You don't have any expired policies."}
          {status === "all" && "You haven't purchased any policies yet."}
        </p>
        <Button className="mt-4 bg-blue-600 hover:bg-blue-700" onClick={() => setShowNewPolicies(true)}>
          Add New Policy
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-end mb-4">
        <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => setShowNewPolicies(true)}>
          Add New Policy
        </Button>
      </div>

      {filteredPolicies.map((policy) => (
        <Card key={policy.id}>
          <CardContent className="p-6">
            <div className="flex flex-col space-y-4 md:flex-row md:items-start md:justify-between md:space-y-0">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold">{policy.type}</h3>
                  <Badge
                    variant={policy.status === "active" ? "default" : "outline"}
                    className={
                      policy.status === "active"
                        ? "bg-green-600"
                        : policy.status === "pending"
                          ? "bg-yellow-600"
                          : "bg-destructive"
                    }
                  >
                    {policy.status === "active" ? "Active" : policy.status === "pending" ? "Pending" : "Expired"}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground">{policy.provider}</p>
                <p className="text-sm">Policy Number: {policy.policyNumber}</p>
                <p className="text-sm">Plan: {policy.plan}</p>
                <div className="mt-2">
                  <p className="text-sm font-medium">Coverage:</p>
                  <ul className="mt-1 list-inside list-disc text-sm text-muted-foreground">
                    {policy.coverage.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex flex-col items-end space-y-2">
                <div className="text-right">
                  <p className="font-medium">{policy.premium}</p>
                  <p className="text-sm text-muted-foreground">
                    {policy.status === "active" && `Renews: ${policy.renewalDate}`}
                    {policy.status === "pending" && "Awaiting approval"}
                    {policy.status === "expired" && `Expired: ${policy.renewalDate}`}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Purchased: {new Date(policy.purchaseDate || "").toLocaleDateString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  {policy.status === "active" && (
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="text-red-600 border-red-600 hover:bg-red-50">
                          <AlertCircle className="mr-2 h-4 w-4" />
                          File a Claim
                        </Button>
                      </DialogTrigger>
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>File a Claim</DialogTitle>
                          <DialogDescription>
                            Are you sure you want to file a claim for this policy? A claims specialist will contact you
                            shortly.
                          </DialogDescription>
                        </DialogHeader>
                        <DialogFooter>
                          <Button variant="outline" onClick={() => {}}>
                            Cancel
                          </Button>
                          <Button className="bg-blue-600 hover:bg-blue-700" onClick={() => handleFileClaim(policy.id)}>
                            Proceed with Claim
                          </Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  )}
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link
                        href={`/dashboard/plan-switch?type=${policy.type?.toLowerCase().includes("auto") ? "auto" : "home"}&policyId=${policy.id}`}
                      >
                        Switch Plan
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Button>
                  </div>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="outline" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>View Details</DropdownMenuItem>
                      <DropdownMenuItem>Update Policy</DropdownMenuItem>
                      {policy.status === "active" && (
                        <DropdownMenuItem onClick={() => handleFileClaim(policy.id)}>File a Claim</DropdownMenuItem>
                      )}
                      <DropdownMenuSeparator />
                      <DropdownMenuItem className="text-destructive">Cancel Policy</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
