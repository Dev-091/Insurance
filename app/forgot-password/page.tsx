"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, ArrowLeft, Check, Shield } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Validate email
    if (!email) {
      setError("Email is required")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false)
      setIsSubmitted(true)
    }, 1500)
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
            <div className="flex items-center">
              <Button variant="ghost" size="sm" asChild className="mr-2 p-0 h-8 w-8">
                <Link href="/login">
                  <ArrowLeft className="h-4 w-4" />
                  <span className="sr-only">Back to login</span>
                </Link>
              </Button>
              <CardTitle className="text-2xl font-bold">Reset Password</CardTitle>
            </div>
            <CardDescription>
              {!isSubmitted
                ? "Enter your email address and we'll send you a link to reset your password"
                : "Check your email for a reset link"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <Alert variant="destructive" className="animate-[fadeIn_0.3s_ease-in-out]">
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>{error}</AlertDescription>
                  </Alert>
                )}
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="transition-all duration-200 focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 transition-colors"
                  disabled={isLoading}
                >
                  {isLoading ? "Sending..." : "Send Reset Link"}
                </Button>
              </form>
            ) : (
              <div className="flex flex-col items-center justify-center py-4 text-center space-y-4">
                <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                  <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-medium">Check your email</h3>
                  <p className="text-sm text-muted-foreground">
                    We've sent a password reset link to <span className="font-medium">{email}</span>
                  </p>
                </div>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setIsSubmitted(false)
                    setEmail("")
                  }}
                >
                  Send to a different email
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="text-center text-sm">
              Remember your password?{" "}
              <Link
                href="/login"
                className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
              >
                Back to login
              </Link>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
