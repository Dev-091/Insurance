"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Check, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function InsuranceDetailsPage({ params }: { params: { type: string } | Promise<{ type: string }> }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // Unwrap params and decode the insurance type from URL
  const unwrappedParams = use(params instanceof Promise ? params : Promise.resolve(params))
  const insuranceType = decodeURIComponent(unwrappedParams.type).toLowerCase()

  // Insurance details based on type
  const insuranceDetails = {
    life: {
      title: "Life Insurance",
      description: "Secure your family's financial future with our comprehensive life insurance plans.",
      features: [
        "Coverage up to ₹1 Crore",
        "Affordable premiums starting at ₹500/month",
        "Tax benefits under Section 80C",
        "Rider options for additional protection",
        "Simple claims process",
      ],
      plans: [
        {
          name: "Basic Life Cover",
          coverage: "₹25 Lakhs",
          premium: "₹500/month",
          benefits: ["Death Benefit", "Tax Advantages", "No Medical Exam Required"],
        },
        {
          name: "Enhanced Protection",
          coverage: "₹50 Lakhs",
          premium: "₹950/month",
          benefits: ["Death Benefit", "Tax Advantages", "Critical Illness Rider", "Accidental Death Benefit"],
        },
        {
          name: "Premium Coverage",
          coverage: "₹1 Crore",
          premium: "₹1,800/month",
          benefits: [
            "Death Benefit",
            "Tax Advantages",
            "Critical Illness Rider",
            "Accidental Death Benefit",
            "Disability Benefit",
          ],
        },
      ],
    },
    health: {
      title: "Health Insurance",
      description: "Protect yourself and your family with our comprehensive health insurance plans.",
      features: [
        "Coverage up to ₹50 Lakhs",
        "Cashless treatment at 5000+ network hospitals",
        "No claim bonus up to 50%",
        "Pre and post hospitalization expenses covered",
        "Tax benefits under Section 80D",
      ],
      plans: [
        {
          name: "Individual Health Plan",
          coverage: "₹5 Lakhs",
          premium: "₹800/month",
          benefits: ["Hospitalization Cover", "Pre & Post Hospitalization", "Day Care Procedures"],
        },
        {
          name: "Family Floater Plan",
          coverage: "₹15 Lakhs",
          premium: "₹1,500/month",
          benefits: [
            "Coverage for Entire Family",
            "Hospitalization Cover",
            "Pre & Post Hospitalization",
            "Day Care Procedures",
          ],
        },
        {
          name: "Comprehensive Health Plan",
          coverage: "₹50 Lakhs",
          premium: "₹2,800/month",
          benefits: [
            "Hospitalization Cover",
            "Pre & Post Hospitalization",
            "Day Care Procedures",
            "Critical Illness Cover",
            "International Treatment",
          ],
        },
      ],
    },
    term: {
      title: "Term Insurance",
      description: "Secure your family's financial future with high coverage at affordable premiums.",
      features: [
        "High coverage amount up to ₹2 Crore",
        "Low premiums starting at ₹600/month",
        "Tax benefits under Section 80C",
        "Option to add critical illness cover",
        "Death benefit paid as lump sum or monthly income",
      ],
      plans: [
        {
          name: "Basic Term Plan",
          coverage: "₹50 Lakhs",
          premium: "₹600/month",
          benefits: ["Death Benefit", "Tax Advantages", "Low Premium"],
        },
        {
          name: "Term Plus Plan",
          coverage: "₹1 Crore",
          premium: "₹1,100/month",
          benefits: ["Death Benefit", "Tax Advantages", "Return of Premium Option", "Critical Illness Rider"],
        },
        {
          name: "Term Max Plan",
          coverage: "₹2 Crore",
          premium: "₹2,000/month",
          benefits: [
            "Death Benefit",
            "Tax Advantages",
            "Return of Premium Option",
            "Critical Illness Rider",
            "Accidental Death Benefit",
          ],
        },
      ],
    },
    auto: {
      title: "Auto Insurance",
      description: "Comprehensive coverage for your vehicle against accidents, theft, and damage.",
      features: [
        "Comprehensive coverage for own damage",
        "Third-party liability coverage",
        "Personal accident cover",
        "24/7 roadside assistance",
        "Cashless claims at network garages",
      ],
      plans: [
        {
          name: "Basic Auto Cover",
          coverage: "Third-Party Only",
          premium: "₹3,000/year",
          benefits: ["Third-Party Liability", "Personal Accident Cover", "Legal Liability to Paid Driver"],
        },
        {
          name: "Standard Auto Cover",
          coverage: "Comprehensive",
          premium: "₹6,500/year",
          benefits: ["Own Damage Cover", "Third-Party Liability", "Personal Accident Cover", "Fire & Theft Protection"],
        },
        {
          name: "Premium Auto Cover",
          coverage: "Comprehensive Plus",
          premium: "₹9,000/year",
          benefits: [
            "Own Damage Cover",
            "Third-Party Liability",
            "Personal Accident Cover",
            "Zero Depreciation",
            "Engine Protection",
            "Roadside Assistance",
          ],
        },
      ],
    },
  }

  // Default to life insurance if type not found
  const details = insuranceDetails[insuranceType as keyof typeof insuranceDetails] || insuranceDetails.life

  const handlePurchase = (planName: string) => {
    setIsLoading(true)
    setError("")

    // Redirect to payment page with plan details
    router.push(`/payment?type=${details.title}&plan=${planName}`)
  }

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
            <span className="ml-2 text-xl font-bold">InsureDash</span>
          </Link>
          <div className="space-x-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950"
            >
              <Link href="/dashboard">Go to Dashboard</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">{details.title}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{details.description}</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          {success && (
            <Alert className="mb-6 bg-green-50 text-green-800 dark:bg-green-900 dark:text-green-200">
              <Check className="h-4 w-4" />
              <AlertDescription>
                Your policy has been purchased successfully! Redirecting to dashboard...
              </AlertDescription>
            </Alert>
          )}

          {error && (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Key Features</CardTitle>
                  <CardDescription>Benefits of our {details.title.toLowerCase()}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {details.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-600 dark:text-green-500 mr-2 mt-0.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="mr-3 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-500 font-bold">1</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Quick Approval</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Get your policy approved within 24 hours
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-500 font-bold">2</span>
                      </div>
                      <div>
                        <h3 className="font-medium">Hassle-free Claims</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">97% claims settled within 48 hours</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-3 h-8 w-8 rounded-full bg-red-100 dark:bg-red-900 flex items-center justify-center">
                        <span className="text-red-600 dark:text-red-500 font-bold">3</span>
                      </div>
                      <div>
                        <h3 className="font-medium">24/7 Support</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Dedicated assistance whenever you need it
                        </p>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="md:col-span-2">
              <Tabs defaultValue="plans" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-2 mb-6">
                  <TabsTrigger value="plans">Available Plans</TabsTrigger>
                  <TabsTrigger value="compare">Compare Plans</TabsTrigger>
                </TabsList>

                <TabsContent value="plans">
                  <div className="space-y-6">
                    {details.plans.map((plan, index) => (
                      <Card key={index}>
                        <CardHeader>
                          <CardTitle>{plan.name}</CardTitle>
                          <CardDescription>Coverage: {plan.coverage}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div>
                              <p className="text-2xl font-bold text-red-600 dark:text-red-500">{plan.premium}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">Premium amount</p>
                            </div>
                            <ul className="mt-4 md:mt-0 space-y-1">
                              {plan.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-center text-sm">
                                  <Check className="h-4 w-4 text-green-600 dark:text-green-500 mr-2" />
                                  {benefit}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                        <CardFooter>
                          <Button
                            className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                            onClick={() => handlePurchase(plan.name)}
                            disabled={isLoading || success}
                          >
                            {isLoading ? "Processing..." : "Buy Now"}
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="compare">
                  <Card>
                    <CardHeader>
                      <CardTitle>Plan Comparison</CardTitle>
                      <CardDescription>Compare features across different plans</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="overflow-x-auto">
                        <table className="w-full border-collapse">
                          <thead>
                            <tr className="border-b">
                              <th className="text-left py-3 px-4">Features</th>
                              {details.plans.map((plan, index) => (
                                <th key={index} className="text-left py-3 px-4">
                                  {plan.name}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Coverage</td>
                              {details.plans.map((plan, index) => (
                                <td key={index} className="py-3 px-4">
                                  {plan.coverage}
                                </td>
                              ))}
                            </tr>
                            <tr className="border-b">
                              <td className="py-3 px-4 font-medium">Premium</td>
                              {details.plans.map((plan, index) => (
                                <td key={index} className="py-3 px-4">
                                  {plan.premium}
                                </td>
                              ))}
                            </tr>
                            {/* Generate rows for all possible benefits */}
                            {Array.from(new Set(details.plans.flatMap((plan) => plan.benefits))).map(
                              (benefit, index) => (
                                <tr key={index} className="border-b">
                                  <td className="py-3 px-4 font-medium">{benefit}</td>
                                  {details.plans.map((plan, planIndex) => (
                                    <td key={planIndex} className="py-3 px-4">
                                      {plan.benefits.includes(benefit) ? (
                                        <Check className="h-5 w-5 text-green-600 dark:text-green-500" />
                                      ) : (
                                        <span className="text-gray-400">—</span>
                                      )}
                                    </td>
                                  ))}
                                </tr>
                              ),
                            )}
                          </tbody>
                        </table>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gray-100 dark:bg-gray-900 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
              <span className="ml-2 font-semibold">InsureDash</span>
            </div>

            <div className="flex flex-wrap gap-6">
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms-of-service"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Terms of Service
              </Link>
              <Link
                href="/help-center"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Help Center
              </Link>
              <Link
                href="/contact-us"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="mt-6 text-center text-gray-600 dark:text-gray-400 text-sm">
            © {new Date().getFullYear()} InsureDash. All rights reserved. IRDAI Registration No. 111 | CIN:
            L99999MH2000PLC129113
          </div>
        </div>
      </footer>
    </div>
  )
}
