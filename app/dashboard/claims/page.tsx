import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ClaimsList } from "@/components/dashboard/claims-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function ClaimsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Claims Management</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> File New Claim
        </Button>
      </div>

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-4">
          <TabsTrigger value="active">In Progress</TabsTrigger>
          <TabsTrigger value="approved">Approved</TabsTrigger>
          <TabsTrigger value="denied">Denied</TabsTrigger>
          <TabsTrigger value="all">All Claims</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <ClaimsList status="active" />
        </TabsContent>
        <TabsContent value="approved">
          <ClaimsList status="approved" />
        </TabsContent>
        <TabsContent value="denied">
          <ClaimsList status="denied" />
        </TabsContent>
        <TabsContent value="all">
          <ClaimsList status="all" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
