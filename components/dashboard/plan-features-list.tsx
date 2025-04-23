"use client"

import { Check } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface PlanFeaturesListProps {
  plans: any[]
  currentPlan: string | null
  selectedPlan: string | null
  onSelectPlan: (planId: string) => void
}

export function PlanFeaturesList({ plans, currentPlan, selectedPlan, onSelectPlan }: PlanFeaturesListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {plans.map((plan) => (
        <Card
          key={plan.id}
          className={`${
            selectedPlan === plan.id
              ? "border-2 border-blue-600"
              : currentPlan?.includes(plan.name.split(" ")[0])
                ? "border-2 border-blue-300"
                : ""
          }`}
        >
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle>{plan.name}</CardTitle>
              {currentPlan?.includes(plan.name.split(" ")[0]) && <Badge className="bg-blue-600">Current</Badge>}
              {plan.recommended && (
                <Badge variant="outline" className="border-green-600 text-green-600">
                  Recommended
                </Badge>
              )}
            </div>
            <p className="text-2xl font-bold">{plan.premium}</p>
            <p className="text-sm text-muted-foreground">{plan.description}</p>
          </CardHeader>
          <CardContent className="pb-3">
            <ul className="space-y-2 text-sm">
              {plan.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-start">
                  <Check className="mr-2 h-4 w-4 text-green-600 mt-0.5" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </CardContent>
          <CardFooter>
            {currentPlan?.includes(plan.name.split(" ")[0]) ? (
              <Button disabled className="w-full">
                Current Plan
              </Button>
            ) : (
              <Button
                variant={selectedPlan === plan.id ? "default" : "outline"}
                className={`w-full ${selectedPlan === plan.id ? "bg-blue-600 hover:bg-blue-700" : ""}`}
                onClick={() => onSelectPlan(plan.id)}
              >
                {selectedPlan === plan.id ? "Selected" : "Select This Plan"}
                {selectedPlan === plan.id && <Check className="ml-2 h-4 w-4" />}
              </Button>
            )}
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
