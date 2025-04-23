import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SupportFAQ } from "@/components/dashboard/support-faq"
import { SupportContact } from "@/components/dashboard/support-contact"

export default function SupportPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Help & Support</h1>
        <p className="text-muted-foreground mt-2">Get assistance with your insurance needs</p>
      </div>

      <Tabs defaultValue="faq" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="faq">FAQ</TabsTrigger>
          <TabsTrigger value="contact">Contact Us</TabsTrigger>
          <TabsTrigger value="resources">Resources</TabsTrigger>
        </TabsList>
        <TabsContent value="faq">
          <SupportFAQ />
        </TabsContent>
        <TabsContent value="contact">
          <SupportContact />
        </TabsContent>
        <TabsContent value="resources">
          <Card>
            <CardHeader>
              <CardTitle>Insurance Resources</CardTitle>
              <CardDescription>Helpful guides and documents</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="h-40 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Insurance Guide"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">Insurance Basics Guide</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn the fundamentals of insurance policies and coverage options.
                  </p>
                  <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                    Download PDF
                  </a>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-40 bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                  <img
                    src="/placeholder.svg?height=160&width=320"
                    alt="Claims Process"
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold mb-1">Claims Process Walkthrough</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Step-by-step guide to filing and tracking insurance claims.
                  </p>
                  <a href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                    Download PDF
                  </a>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
