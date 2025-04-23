import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MarketComparisonChart } from "@/components/dashboard/market-comparison-chart"
import { MarketComparisonTable } from "@/components/dashboard/market-comparison-table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MarketComparisonPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Market Comparison</h1>
        <p className="text-muted-foreground mt-2">See how your current insurance plans compare to the market.</p>
      </div>

      <Tabs defaultValue="auto" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="auto">Auto Insurance</TabsTrigger>
          <TabsTrigger value="home">Home Insurance</TabsTrigger>
          <TabsTrigger value="life">Life Insurance</TabsTrigger>
        </TabsList>
        <TabsContent value="auto">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Premium Comparison</CardTitle>
                <CardDescription>Your premium compared to market average</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonChart type="auto" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coverage Comparison</CardTitle>
                <CardDescription>Detailed comparison of coverage options</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonTable type="auto" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="home">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Premium Comparison</CardTitle>
                <CardDescription>Your premium compared to market average</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonChart type="home" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coverage Comparison</CardTitle>
                <CardDescription>Detailed comparison of coverage options</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonTable type="home" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="life">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Premium Comparison</CardTitle>
                <CardDescription>Your premium compared to market average</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonChart type="life" />
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Coverage Comparison</CardTitle>
                <CardDescription>Detailed comparison of coverage options</CardDescription>
              </CardHeader>
              <CardContent>
                <MarketComparisonTable type="life" />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
