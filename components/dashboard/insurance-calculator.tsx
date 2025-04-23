"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Badge } from "@/components/ui/badge"
import { Calculator } from "lucide-react"

export function InsuranceCalculator() {
  const [income, setIncome] = useState<number>(500000)
  const [coverAmount, setCoverAmount] = useState<number>(1000000)
  const [insuranceType, setInsuranceType] = useState<string>("Health")
  const [paymentFrequency, setPaymentFrequency] = useState<string>("monthly")
  const [premium, setPremium] = useState<number>(0)
  const [alternativeRecommendations, setAlternativeRecommendations] = useState<any>({})
  const [isCalculated, setIsCalculated] = useState<boolean>(false)

  // Function to calculate premium and coverage based on the logic from insurance.py
  const calculatePremiumAndCoverage = (
    income: number,
    insuranceType: string,
    coverAmount: number,
    paymentFrequency: string,
  ) => {
    // Set premium rates for different insurances based on the cover amount
    const premiumRates: Record<string, number> = {
      Term: 0.02, // Term Insurance: 2% of cover amount
      Health: 0.03, // Health Insurance: 3% of cover amount
      Life: 0.04, // Life Insurance: 4% of cover amount
    }

    // Calculate yearly premiums based on cover amount
    const premiumYearly = Math.round(coverAmount * (premiumRates[insuranceType] || 0.03))

    // Adjust for payment frequency
    let premium: number
    if (insuranceType === "Health" || insuranceType === "Life") {
      if (paymentFrequency === "monthly") {
        premium = premiumYearly / 12 // Monthly premium
      } else {
        premium = premiumYearly // Yearly premium
      }
    } else {
      premium = premiumYearly // Fixed yearly for Term Insurance
      setPaymentFrequency("yearly") // Force yearly for Term Insurance
    }

    // Additional insurance recommendations
    const alternativeInsurance: Record<string, any> = {}
    Object.entries(premiumRates).forEach(([insType, rate]) => {
      if (insType !== insuranceType) {
        const premiumYearlyAlt = Math.round(coverAmount * rate)
        if (insType === "Health" || insType === "Life") {
          const premiumMonthly = Math.round(premiumYearlyAlt / 12)
          alternativeInsurance[insType] = {
            Monthly: premiumMonthly,
            Yearly: premiumYearlyAlt,
          }
        } else {
          alternativeInsurance[insType] = {
            Yearly: premiumYearlyAlt,
          }
        }
      }
    })

    return { premium, alternativeInsurance }
  }

  // Calculate premium when inputs change
  const handleCalculate = () => {
    const { premium, alternativeInsurance } = calculatePremiumAndCoverage(
      income,
      insuranceType,
      coverAmount,
      paymentFrequency,
    )

    setPremium(Math.round(premium))
    setAlternativeRecommendations(alternativeInsurance)
    setIsCalculated(true)
  }

  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount)
  }

  // Handle insurance type change
  const handleInsuranceTypeChange = (value: string) => {
    setInsuranceType(value)
    // Reset payment frequency to monthly for Health and Life, yearly for Term
    if (value === "Term") {
      setPaymentFrequency("yearly")
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Calculator className="mr-2 h-5 w-5 text-blue-600" />
          Insurance Premium Calculator
        </CardTitle>
        <CardDescription>Calculate your premium based on income, cover amount, and insurance type</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="income">Annual Income</Label>
            <Input
              id="income"
              type="number"
              value={income}
              onChange={(e) => setIncome(Number(e.target.value))}
              min={100000}
              step={50000}
            />
            <p className="text-xs text-muted-foreground">
              Recommended: {formatCurrency(income * 10)} cover for 10x annual income
            </p>
          </div>
          <div className="space-y-2">
            <Label htmlFor="coverAmount">Cover Amount</Label>
            <Input
              id="coverAmount"
              type="number"
              value={coverAmount}
              onChange={(e) => setCoverAmount(Number(e.target.value))}
              min={100000}
              step={100000}
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>Insurance Type</Label>
          <Select value={insuranceType} onValueChange={handleInsuranceTypeChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select insurance type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Term">Term Insurance</SelectItem>
              <SelectItem value="Health">Health Insurance</SelectItem>
              <SelectItem value="Life">Life Insurance</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label>Payment Frequency</Label>
          <RadioGroup value={paymentFrequency} onValueChange={setPaymentFrequency} disabled={insuranceType === "Term"}>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monthly" id="monthly" disabled={insuranceType === "Term"} />
              <Label htmlFor="monthly" className={insuranceType === "Term" ? "text-muted-foreground" : ""}>
                Monthly
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="yearly" id="yearly" />
              <Label htmlFor="yearly">Yearly</Label>
            </div>
          </RadioGroup>
          {insuranceType === "Term" && (
            <p className="text-xs text-muted-foreground">Term insurance is available with yearly payment only</p>
          )}
        </div>

        <Button onClick={handleCalculate} className="w-full bg-blue-600 hover:bg-blue-700">
          Calculate Premium
        </Button>

        {isCalculated && (
          <div className="mt-4 space-y-4">
            <div className="rounded-lg border p-4">
              <h3 className="font-medium mb-2">Your Estimated Premium</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {insuranceType} Insurance ({formatCurrency(coverAmount)} cover)
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {paymentFrequency === "monthly" ? "Monthly payment" : "Yearly payment"}
                  </p>
                </div>
                <div className="text-2xl font-bold text-blue-600">
                  {formatCurrency(premium)}
                  {paymentFrequency === "monthly" ? "/month" : "/year"}
                </div>
              </div>
            </div>

            <div>
              <h3 className="font-medium mb-2">Alternative Recommendations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(alternativeRecommendations).map(([type, premiums]: [string, any]) => (
                  <div key={type} className="rounded-lg border p-4">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-medium">{type} Insurance</h4>
                      {type === "Health" && <Badge className="bg-green-600">Recommended</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground mb-2">{formatCurrency(coverAmount)} cover amount</p>
                    <div className="space-y-1">
                      {Object.entries(premiums).map(([freq, amount]: [string, any]) => (
                        <div key={freq} className="flex justify-between items-center">
                          <p className="text-sm">{freq} premium:</p>
                          <p className="font-medium">
                            {formatCurrency(amount)}
                            {freq === "Monthly" ? "/month" : "/year"}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
