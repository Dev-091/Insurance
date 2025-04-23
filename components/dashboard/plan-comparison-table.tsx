"use client"

import { Check, X } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import React from "react"

interface PlanComparisonTableProps {
  plans: any[]
  currentPlan: string | null
  selectedPlan: string | null
  onSelectPlan: (planId: string) => void
  insuranceType: string
}

export function PlanComparisonTable({
  plans,
  currentPlan,
  selectedPlan,
  onSelectPlan,
  insuranceType,
}: PlanComparisonTableProps) {
  // Define feature categories based on insurance type
  const featureCategories =
    insuranceType === "health"
      ? [
          { key: "coverage", label: "Coverage Type" },
          { key: "hospitalCover", label: "Hospitalization Cover" },
          { key: "prePost", label: "Pre & Post Hospitalization" },
          { key: "dayCare", label: "Day Care Procedures" },
          { key: "criticalIllness", label: "Critical Illness Cover" },
          { key: "international", label: "International Treatment" },
          { key: "maternity", label: "Maternity Benefits" },
          { key: "wellness", label: "Wellness Benefits" },
          { key: "opd", label: "OPD Coverage" },
        ]
      : [
          { key: "coverage", label: "Coverage Type" },
          { key: "deathBenefit", label: "Death Benefit" },
          { key: "taxAdvantages", label: "Tax Advantages" },
          { key: "criticalIllness", label: "Critical Illness Rider" },
          { key: "accidentalDeath", label: "Accidental Death Benefit" },
          { key: "disability", label: "Disability Benefit" },
          { key: "returnPremium", label: "Return of Premium Option" },
          { key: "familyIncome", label: "Family Income Benefit" },
          { key: "inflationProtection", label: "Inflation Protection" },
        ]

  const planLevels = React.useMemo(() => {
    return plans.map((plan) => {
      return plan.id.includes("basic") ? 0 : plan.id.includes("standard") ? 1 : plan.id.includes("premium") ? 2 : 3
    })
  }, [plans])

  // Define feature values for each plan
  const getFeatureValue = (plan: any, featureKey: string, index: number) => {
    const planLevel = planLevels[index]

    // Health insurance features
    if (insuranceType === "health") {
      switch (featureKey) {
        case "coverage":
          return plan.coverage
        case "hospitalCover":
          return planLevel === 0
            ? "Up to ₹5 Lakhs"
            : planLevel === 1
              ? "Up to ₹15 Lakhs"
              : planLevel === 2
                ? "Up to ₹50 Lakhs"
                : "Up to ₹1 Crore"
        case "prePost":
          return <Check className="mx-auto h-5 w-5 text-green-600" />
        case "dayCare":
          return <Check className="mx-auto h-5 w-5 text-green-600" />
        case "criticalIllness":
          return planLevel < 2 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "international":
          return planLevel < 2 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "maternity":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "wellness":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "opd":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        default:
          return "-"
      }
    }
    // Life insurance features
    else {
      switch (featureKey) {
        case "coverage":
          return plan.coverage
        case "deathBenefit":
          return planLevel === 0
            ? "₹25 Lakhs"
            : planLevel === 1
              ? "₹50 Lakhs"
              : planLevel === 2
                ? "₹1 Crore"
                : "₹2 Crore"
        case "taxAdvantages":
          return <Check className="mx-auto h-5 w-5 text-green-600" />
        case "criticalIllness":
          return planLevel < 1 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "accidentalDeath":
          return planLevel < 1 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "disability":
          return planLevel < 2 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "returnPremium":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "familyIncome":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        case "inflationProtection":
          return planLevel < 3 ? (
            <X className="mx-auto h-5 w-5 text-red-500" />
          ) : (
            <Check className="mx-auto h-5 w-5 text-green-600" />
          )
        default:
          return "-"
      }
    }
  }

  return (
    <div className="overflow-x-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[180px]">Feature</TableHead>
            {plans.map((plan) => (
              <TableHead key={plan.id} className="text-center">
                <div className="flex flex-col items-center">
                  <span className="font-medium">{plan.name}</span>
                  <span className="text-sm text-muted-foreground">{plan.premium}</span>
                  {currentPlan?.includes(plan.name.split(" ")[0]) && (
                    <Badge className="mt-1 bg-blue-600">Current Plan</Badge>
                  )}
                  {plan.recommended && (
                    <Badge variant="outline" className="mt-1 border-green-600 text-green-600">
                      Recommended
                    </Badge>
                  )}
                </div>
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {featureCategories.map((category) => (
            <TableRow key={category.key}>
              <TableCell className="font-medium">{category.label}</TableCell>
              {plans.map((plan, index) => (
                <TableCell key={`${plan.id}-${category.key}`} className="text-center">
                  {getFeatureValue(plan, category.key, index)}
                </TableCell>
              ))}
            </TableRow>
          ))}
          <TableRow>
            <TableCell className="font-medium">Premium</TableCell>
            {plans.map((plan) => (
              <TableCell key={`${plan.id}-premium`} className="text-center font-bold">
                {plan.premium}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Potential Savings</TableCell>
            {plans.map((plan) => (
              <TableCell key={`${plan.id}-savings`} className="text-center">
                {plan.savings.startsWith("-") ? (
                  <span className="text-red-600">{plan.savings}</span>
                ) : plan.savings !== "₹0/year" ? (
                  <span className="text-green-600">{plan.savings}</span>
                ) : (
                  <span>-</span>
                )}
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Action</TableCell>
            {plans.map((plan) => (
              <TableCell key={`${plan.id}-action`} className="text-center">
                {currentPlan?.includes(plan.name.split(" ")[0]) ? (
                  <Badge>Current Plan</Badge>
                ) : (
                  <Button
                    variant={selectedPlan === plan.id ? "default" : "outline"}
                    size="sm"
                    onClick={() => onSelectPlan(plan.id)}
                    className={selectedPlan === plan.id ? "bg-blue-600 hover:bg-blue-700" : ""}
                  >
                    {selectedPlan === plan.id ? "Selected" : "Select"}
                    {selectedPlan === plan.id && <Check className="ml-1 h-3 w-3" />}
                  </Button>
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}
