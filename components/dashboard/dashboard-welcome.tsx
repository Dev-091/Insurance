"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, FileText, ShieldCheck } from "lucide-react"
import Link from "next/link"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Check } from "lucide-react"
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"
import { motion } from "framer-motion"

export function DashboardWelcome() {
  const [userName, setUserName] = useState("User")
  const [showPurchaseAlert, setShowPurchaseAlert] = useState(false)
  const searchParams = useSearchParams()
  const [policyCount, setPolicyCount] = useState(0)
  const [totalPremium, setTotalPremium] = useState("₹0/month")
  const [potentialSavings, setPotentialSavings] = useState("₹0/year")

  useEffect(() => {
    const storedName = localStorage.getItem("userName")
    if (storedName) {
      const name = storedName.split("@")[0]
      setUserName(name)
    }

    const newPurchase = searchParams.get("newPurchase")
    if (newPurchase === "true") {
      setShowPurchaseAlert(true)
      setTimeout(() => {
        setShowPurchaseAlert(false)
      }, 5000)
    }

    try {
      const policies = JSON.parse(localStorage.getItem("purchasedPolicies") || "[]")
      setPolicyCount(policies.length)

      if (policies.length > 0) {
        let totalMonthlyPremium = 0
        interface Policy {
          premium?: string;
        }

        policies.forEach((policy: Policy) => {
          const premiumMatch = policy.premium?.match(/₹(\d+)/);
          if (premiumMatch && premiumMatch[1]) {
            const premiumValue = Number.parseInt(premiumMatch[1], 10);
            if (policy.premium?.includes("/month")) {
              totalMonthlyPremium += premiumValue;
            } else if (policy.premium?.includes("/year")) {
              totalMonthlyPremium += premiumValue / 12;
            }
          }
        });
        setTotalPremium(`₹${Math.round(totalMonthlyPremium)}/month`)
      }

      setPotentialSavings("₹320/year")
    } catch (err) {
      console.error("Failed to load purchased policies", err)
      setPolicyCount(0)
      setTotalPremium("₹0/month")
    }
  }, [searchParams])

  // Get current date for display
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  // Calculate next payment date (15th of next month)
  const getNextPaymentDate = () => {
    const today = new Date();
    let nextMonth = today.getMonth() + 1;
    let year = today.getFullYear();
    
    if (nextMonth > 11) {
      nextMonth = 0;
      year += 1;
    }
    
    return new Date(year, nextMonth, 15).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Welcome Banner with Gradient */}
      <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent p-6 text-white shadow-lg">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mt-12 -mr-12 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -mb-8 -ml-8 blur-xl"></div>
        
        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <motion.h1 
                className="text-3xl font-bold tracking-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                Welcome back, {userName}!
              </motion.h1>
              <motion.p 
                className="mt-1 text-white/80"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                {currentDate}
              </motion.p>
            </div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="mt-4 md:mt-0"
            >
              <Button 
                className="bg-white text-primary hover:bg-white/90 transition-all shadow-md"
                size="sm"
              >
                <FileText className="mr-2 h-4 w-4" />
                Add New Policy
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Success Alert */}
      {showPurchaseAlert && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          <Alert className="bg-success/10 text-success border-success/20">
            <Check className="h-4 w-4" />
            <AlertDescription>
              Your policy has been purchased successfully! It's now available in your dashboard.
            </AlertDescription>
          </Alert>
        </motion.div>
      )}

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {/* Active Policies Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Active Policies</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <FileText className="h-4 w-4 text-primary" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-3xl font-bold">{policyCount}</div>
                {policyCount > 0 && (
                  <div className="text-xs font-medium text-success bg-success/10 px-1.5 py-0.5 rounded-full">
                    Active
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">Your insurance portfolio</p>
              <Button variant="ghost" size="sm" asChild className="mt-3 px-0 text-primary">
                <Link href="/dashboard/policies" className="flex items-center">
                  View all policies
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Open Claims Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 h-1 w-full bg-accent"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Open Claims</CardTitle>
              <div className="h-8 w-8 rounded-full bg-accent/10 flex items-center justify-center">
                <ShieldCheck className="h-4 w-4 text-accent" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex items-baseline space-x-2">
                <div className="text-3xl font-bold">{policyCount > 0 ? "1" : "0"}</div>
                {policyCount > 0 && (
                  <div className="text-xs font-medium text-warning bg-warning/10 px-1.5 py-0.5 rounded-full">
                    In Progress
                  </div>
                )}
              </div>
              <p className="text-xs text-muted-foreground mt-1">
                {policyCount > 0 ? "Auto claim in progress" : "No active claims"}
              </p>
              <Button variant="ghost" size="sm" asChild className="mt-3 px-0 text-accent">
                <Link href="/dashboard/claims" className="flex items-center">
                  View claim details
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>

        {/* Monthly Premium Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 h-1 w-full bg-primary"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Monthly Premium</CardTitle>
              <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-primary"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{totalPremium}</div>
              <p className="text-xs text-muted-foreground mt-1">Next payment: {getNextPaymentDate()}</p>
              {policyCount > 0 && (
                <p className="text-xs text-primary mt-1">Total for {policyCount} active {policyCount === 1 ? 'policy' : 'policies'}</p>
              )}
              <div className="mt-3 space-y-1">
                <div className="flex justify-between text-xs">
                  <span>Payment progress</span>
                  <span>50%</span>
                </div>
                <div className="h-2 w-full rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-primary"
                    initial={{ width: "0%" }}
                    animate={{ width: "50%" }}
                    transition={{ delay: 0.5, duration: 1 }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Potential Savings Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 h-1 w-full bg-success"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
              <CardTitle className="text-sm font-medium">Potential Savings</CardTitle>
              <div className="h-8 w-8 rounded-full bg-success/10 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="h-4 w-4 text-success"
                >
                  <path d="M16 16v-8M12 16v-4M8 16v-2M4 16v-1" />
                </svg>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{potentialSavings}</div>
              <p className="text-xs text-muted-foreground mt-1">Based on recommended plans</p>
              <Button variant="ghost" size="sm" asChild className="mt-3 px-0 text-success">
                <Link href="/dashboard/recommendations" className="flex items-center">
                  View recommendations
                  <ArrowRight className="ml-1 h-3 w-3" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  )
}
