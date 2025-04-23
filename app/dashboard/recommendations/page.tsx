import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { RecommendationsList } from "@/components/dashboard/recommendations-list"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { InsuranceCalculator } from "@/components/dashboard/insurance-calculator"

export default function RecommendationsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Personalized Recommendations</h1>
        <p className="text-muted-foreground mt-2">
          Based on your profile and current coverage, we recommend the following insurance plans.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Your Risk Profile</CardTitle>
          <CardDescription>
            This assessment is based on your demographic information and coverage history.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Risk Level</div>
              <div className="mt-1 text-2xl font-bold text-blue-600">Low</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Coverage Score</div>
              <div className="mt-1 text-2xl font-bold text-blue-600">72/100</div>
            </div>
            <div className="rounded-lg border p-3">
              <div className="text-sm font-medium text-muted-foreground">Potential Savings</div>
              <div className="mt-1 text-2xl font-bold text-green-600">₹320/year</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Add the Insurance Calculator component */}
      <InsuranceCalculator />

      <Tabs defaultValue="recommendations" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-2">
          <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
        </TabsList>

        <TabsContent value="recommendations">
          <RecommendationsList />
        </TabsContent>
      </Tabs>
    </div>
  )
}
