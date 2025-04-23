"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"
import { getCurrentUser } from "@/lib/auth"
import { getUserPolicies } from "@/lib/policies"

interface User {
  id: string
  email: string
  full_name: string
}

interface Policy {
  id: string
  policy_type: string
  policy_number: string
  start_date: string
  end_date: string
  premium_amount: number
  status: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)
  const [policies, setPolicies] = useState<Policy[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentUser = await getCurrentUser()
        if (!currentUser) {
          router.push("/login")
          return
        }

        setUser({
          id: currentUser.id,
          email: currentUser.email!,
          full_name: currentUser.user_metadata.full_name || "Unknown User"
        })

        const userPolicies = await getUserPolicies(currentUser.id)
        setPolicies(userPolicies)
      } catch (error: any) {
        setError(error.message || "Failed to load data")
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [router])

  if (loading) {
    return <div className="flex min-h-screen items-center justify-center">Loading...</div>
  }

  if (error) {
    return <div className="flex min-h-screen items-center justify-center text-red-500">{error}</div>
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-red-50 to-white dark:from-gray-900 dark:to-gray-950">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b border-gray-100 dark:border-gray-800">
        <Link href="/" className="flex items-center">
          <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
          <span className="ml-2 font-semibold">InsureDash</span>
        </Link>
        <ThemeToggle />
      </header>

      <div className="container mx-auto flex-1 p-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold">Welcome, {user?.full_name}</h1>
          <p className="text-gray-600 dark:text-gray-400">Email: {user?.email}</p>
        </div>

        <div className="grid gap-6">
          <Card className="border-red-100 dark:border-red-900">
            <CardHeader>
              <CardTitle>Your Insurance Policies</CardTitle>
              <CardDescription>Manage and view your active insurance policies</CardDescription>
            </CardHeader>
            <CardContent>
              {policies.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    No policies found. Get started by exploring our insurance products.
                  </p>
                  <Button
                    onClick={() => router.push("/insurance-details/all")}
                    className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700 transition-transform hover:scale-105"
                  >
                    View Products
                  </Button>
                </div>
              ) : (
                <div className="grid gap-4">
                  {policies.map((policy) => (
                    <Card key={policy.id} className="border-red-100 dark:border-red-900">
                      <CardContent className="p-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="font-semibold text-red-600 dark:text-red-500">{policy.policy_type}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Policy Number: {policy.policy_number}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Premium: ${policy.premium_amount}
                            </p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Status: <span className="text-green-600 dark:text-green-500">{policy.status}</span>
                            </p>
                          </div>
                          <div className="text-sm text-gray-600 dark:text-gray-400">
                            <p>Start: {new Date(policy.start_date).toLocaleDateString()}</p>
                            <p>End: {new Date(policy.end_date).toLocaleDateString()}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
