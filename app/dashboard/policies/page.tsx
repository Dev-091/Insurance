"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PolicyList } from "@/components/dashboard/policy-list"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"

export default function PoliciesPage() {
  // Check for plan switch success message
  const searchParams = useSearchParams()
  const [showSwitchSuccess, setShowSwitchSuccess] = useState(false)

  useEffect(() => {
    const switched = searchParams.get("switched")
    if (switched === "true") {
      setShowSwitchSuccess(true)

      // Hide the alert after 5 seconds
      setTimeout(() => {
        setShowSwitchSuccess(false)
      }, 5000)
    }
  }, [searchParams])

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">My Policies</h1>
        <Button className="bg-blue-600 hover:bg-blue-700">
          <Plus className="mr-2 h-4 w-4" /> Add New Policy
        </Button>
      </div>

      {showSwitchSuccess && (
        <Alert className="mt-4 bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200">
          <Check className="h-4 w-4" />
          <AlertDescription>
            Your insurance plan has been successfully switched! The changes are now reflected in your policy.
          </AlertDescription>
        </Alert>
      )}

      <Tabs defaultValue="active" className="w-full">
        <TabsList className="grid w-full max-w-md grid-cols-3">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="pending">Pending</TabsTrigger>
          <TabsTrigger value="expired">Expired</TabsTrigger>
        </TabsList>
        <TabsContent value="active">
          <PolicyList status="active" />
        </TabsContent>
        <TabsContent value="pending">
          <PolicyList status="pending" />
        </TabsContent>
        <TabsContent value="expired">
          <PolicyList status="expired" />
        </TabsContent>
      </Tabs>
    </div>
  )
}
