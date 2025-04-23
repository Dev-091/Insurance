"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PolicySummary } from "./policy-summary"
import { ClaimsSummary } from "./claims-summary"
import { RecommendationsSummary } from "./recommendations-summary"
import { MarketComparisonSummary } from "./market-comparison-summary"

export function DashboardWidgets() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Policy Summary</CardTitle>
            <CardDescription>Overview of your active policies</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/policies">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <PolicySummary />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Claims Status</CardTitle>
            <CardDescription>Track your recent claims</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/claims">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <ClaimsSummary />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Recommended Plans</CardTitle>
            <CardDescription>Personalized for your needs</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/recommendations">View All</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <RecommendationsSummary />
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="space-y-1">
            <CardTitle>Market Comparison</CardTitle>
            <CardDescription>How your plans compare to the market</CardDescription>
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard/market-comparison">View Details</Link>
          </Button>
        </CardHeader>
        <CardContent>
          <MarketComparisonSummary />
        </CardContent>
      </Card>
    </div>
  )
}
