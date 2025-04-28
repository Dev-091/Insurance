"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { PolicySummary } from "./policy-summary"
import { ClaimsSummary } from "./claims-summary"
import { RecommendationsSummary } from "./recommendations-summary"
import { MarketComparisonSummary } from "./market-comparison-summary"
import { InsuranceChatbot } from "./insurance-chatbot"
import { FileText, ShieldCheck, ThumbsUp, BarChart3, ArrowRight } from "lucide-react"

export function DashboardWidgets() {
  const [userName, setUserName] = useState("User")
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  
  useEffect(() => {
    // Get user name from localStorage
    try {
      const storedName = localStorage.getItem("userName")
      if (storedName) {
        const name = storedName.split("@")[0]
        setUserName(name)
      }
    } catch (e) {
      console.error("Failed to get username", e)
    }
  }, [])
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <motion.div 
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <h2 className="text-2xl font-semibold tracking-tight">Your Insurance Dashboard</h2>
      
      <motion.div className="grid gap-6 md:grid-cols-2" variants={containerVariants}>
        {/* Policy Summary Card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary-600"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Policy Summary</CardTitle>
                  <CardDescription>Overview of your active policies</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" asChild>
                <Link href="/dashboard/policies" className="flex items-center">
                  View All
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <PolicySummary />
            </CardContent>
          </Card>
        </motion.div>

        {/* Claims Status Card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-accent-600"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Claims Status</CardTitle>
                  <CardDescription>Track your recent claims</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-accent hover:text-accent hover:bg-accent/10" asChild>
                <Link href="/dashboard/claims" className="flex items-center">
                  View All
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <ClaimsSummary />
            </CardContent>
          </Card>
        </motion.div>

        {/* Recommended Plans Card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-success to-success/70"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-success/10 flex items-center justify-center">
                  <ThumbsUp className="h-5 w-5 text-success" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Recommended Plans</CardTitle>
                  <CardDescription>Personalized for {userName}'s needs</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-success hover:text-success hover:bg-success/10" asChild>
                <Link href="/dashboard/recommendations" className="flex items-center">
                  View All
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <RecommendationsSummary />
            </CardContent>
          </Card>
        </motion.div>

        {/* Market Comparison Card */}
        <motion.div variants={itemVariants}>
          <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-all">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <div className="flex items-center space-x-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <BarChart3 className="h-5 w-5 text-primary" />
                </div>
                <div className="space-y-1">
                  <CardTitle>Market Comparison</CardTitle>
                  <CardDescription>How your plans compare to the market</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10" asChild>
                <Link href="/dashboard/market-comparison" className="flex items-center">
                  View Details
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </CardHeader>
            <CardContent>
              <MarketComparisonSummary />
            </CardContent>
          </Card>
        </motion.div>
      </motion.div>
      
      {/* Additional personalized section */}
      <motion.div 
        variants={itemVariants}
        className="mt-8"
      >
        <Card className="overflow-hidden border-none shadow-md bg-gradient-to-br from-primary/5 to-accent/5">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div>
                <h3 className="text-lg font-semibold">Need help with your insurance?</h3>
                <p className="text-muted-foreground mt-1">Our AI assistant can help you find the right coverage for your needs.</p>
              </div>
              <Button 
                className="bg-primary hover:bg-primary/90 shadow-md"
                onClick={() => setIsChatbotOpen(true)}
              >
                Chat with Assistant
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
      {/* Chatbot component */}
      <InsuranceChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </motion.div>
  )
}
