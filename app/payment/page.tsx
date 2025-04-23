"use client"

import type React from "react"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Check, CreditCard, Lock, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { ThemeToggle } from "@/components/theme-toggle"

export default function PaymentPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [success, setSuccess] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState("credit-card")

  // Get insurance details from URL parameters
  const insuranceType = searchParams.get("type") || "Life Insurance"
  const planName = searchParams.get("plan") || "Basic Plan"

  // Determine premium based on plan name
  const getPremium = () => {
    if (planName.includes("Basic")) return "₹500/month"
    if (planName.includes("Enhanced") || planName.includes("Plus") || planName.includes("Standard")) return "₹950/month"
    if (planName.includes("Premium") || planName.includes("Max") || planName.includes("Comprehensive"))
      return "₹1,800/month"
    return "₹500/month"
  }

  const premium = getPremium()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false)

      // Store the purchased policy in localStorage
      try {
        const existingPolicies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
        const newPolicy = {
          id: Date.now(),
          type: insuranceType,
          plan: planName,
          premium: premium,
          purchaseDate: new Date().toISOString(),
          status: "active",
        }
        localStorage.setItem("purchasedPolicies", JSON.stringify([...existingPolicies, newPolicy]))
        setSuccess(true)

        // Redirect to dashboard after successful payment
        setTimeout(() => {
          router.push("/dashboard?newPurchase=true")
        }, 2000)
      } catch (err) {
        setError("Failed to process payment. Please try again.")
      }
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col bg-gradient-to-b from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />
          <span className="ml-2 font-semibold">InsureDash</span>
        </Link>
        <ThemeToggle />
      </header>

      <div className="flex flex-1 items-center justify-center p-4">
        <Card className="w-full max-w-md animate-[fadeInUp_0.5s_ease-in-out]">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Complete Your Purchase</CardTitle>
            <CardDescription>Secure payment for your insurance plan</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {success ? (
              <Alert className="bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200">
                <Check className="h-4 w-4" />
                <AlertDescription>Payment successful! Redirecting to your dashboard...</AlertDescription>
              </Alert>
            ) : error ? (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            ) : null}

            <div className="rounded-lg border p-4 bg-muted/50">
              <h3 className="font-medium mb-2">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Insurance Type:</span>
                  <span className="font-medium">{insuranceType}</span>
                </div>
                <div className="flex justify-between">
                  <span>Plan:</span>
                  <span className="font-medium">{planName}</span>
                </div>
                <Separator className="my-2" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-blue-600 dark:text-blue-400">{premium}</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label>Payment Method</Label>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="grid grid-cols-2 gap-4">
                  <div>
                    <RadioGroupItem value="credit-card" id="credit-card" className="peer sr-only" />
                    <Label
                      htmlFor="credit-card"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <CreditCard className="mb-3 h-6 w-6" />
                      Credit Card
                    </Label>
                  </div>
                  <div>
                    <RadioGroupItem value="upi" id="upi" className="peer sr-only" />
                    <Label
                      htmlFor="upi"
                      className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                    >
                      <svg className="mb-3 h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 12L12 16L16 12"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12 8V16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      UPI
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {paymentMethod === "credit-card" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input id="cardName" placeholder="John Doe" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>
                </>
              )}

              {paymentMethod === "upi" && (
                <div className="space-y-2">
                  <Label htmlFor="upiId">UPI ID</Label>
                  <Input id="upiId" placeholder="name@upi" required />
                </div>
              )}

              <div className="flex items-center text-sm text-muted-foreground">
                <Lock className="mr-2 h-4 w-4" />
                <span>Your payment information is secure and encrypted</span>
              </div>

              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                disabled={isLoading || success}
              >
                {isLoading ? "Processing..." : "Complete Payment"}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button variant="ghost" asChild>
              <Link href={`/insurance-details/${insuranceType.toLowerCase().replace(" insurance", "")}`}>
                Cancel and return to plans
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
