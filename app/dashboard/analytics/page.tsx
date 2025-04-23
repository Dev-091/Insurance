import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AnalyticsChart } from "@/components/dashboard/analytics-chart"
import { AnalyticsTable } from "@/components/dashboard/analytics-table"

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Insurance Analytics</h1>
        <p className="text-muted-foreground mt-2">Track your insurance spending and coverage over time</p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Annual Premium</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">₹3,204.00</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">↓ 8.1%</span> from last year
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Coverage Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">72/100</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 font-medium">↑ 5 points</span> from initial assessment
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Claims Filed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-blue-600 font-medium">2 approved</span>, 1 in progress
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="premiums" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="premiums">Premium History</TabsTrigger>
          <TabsTrigger value="claims">Claims History</TabsTrigger>
          <TabsTrigger value="coverage">Coverage Analysis</TabsTrigger>
        </TabsList>
        <TabsContent value="premiums">
          <Card>
            <CardHeader>
              <CardTitle>Premium Trends</CardTitle>
              <CardDescription>Track how your premiums have changed over time</CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsChart type="premiums" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="claims">
          <Card>
            <CardHeader>
              <CardTitle>Claims History</CardTitle>
              <CardDescription>View your past claims and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsTable type="claims" />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="coverage">
          <Card>
            <CardHeader>
              <CardTitle>Coverage Analysis</CardTitle>
              <CardDescription>See how your coverage has evolved</CardDescription>
            </CardHeader>
            <CardContent>
              <AnalyticsChart type="coverage" />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
