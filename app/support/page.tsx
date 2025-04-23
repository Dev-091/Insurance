import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, FileText, HelpCircle, LifeBuoy, Mail, Phone, Shield } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-gray-950">
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Shield className="h-6 w-6 text-red-600 dark:text-red-500" />
            <span className="ml-2 text-xl font-bold">InsureDash</span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            <Link href="/#products" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500">
              Products
            </Link>
            <Link href="/#about" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500">
              About Us
            </Link>
            <Link href="/support" className="text-sm font-medium text-red-600 dark:text-red-500">
              Support
            </Link>
            <Link href="/contact-us" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500">
              Contact
            </Link>
          </nav>
          <div className="space-x-2">
            <Button
              asChild
              variant="outline"
              size="sm"
              className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950"
            >
              <Link href="/login">Sign In</Link>
            </Button>
            <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700">
              <Link href="/register">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        <div className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Customer Support</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              We're here to help you with any questions or concerns
            </p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <Tabs defaultValue="support-options" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
              <TabsTrigger value="support-options">Support Options</TabsTrigger>
              <TabsTrigger value="common-issues">Common Issues</TabsTrigger>
              <TabsTrigger value="contact">Contact Us</TabsTrigger>
            </TabsList>

            <TabsContent value="support-options">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <HelpCircle className="h-5 w-5 mr-2 text-red-600 dark:text-red-500" />
                      Help Center
                    </CardTitle>
                    <CardDescription>Find answers to frequently asked questions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Our comprehensive knowledge base covers everything from policy details to claims procedures.
                    </p>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950"
                    >
                      <Link href="/help-center" className="flex items-center justify-center">
                        Browse Help Center
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Phone className="h-5 w-5 mr-2 text-red-600 dark:text-red-500" />
                      Call Support
                    </CardTitle>
                    <CardDescription>Speak directly with our support team</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Our dedicated support team is available Monday to Saturday, 9:00 AM to 6:00 PM IST.
                    </p>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md mb-4">
                      <span className="font-medium">Toll-Free</span>
                      <span className="text-red-600 dark:text-red-500 font-medium">1800-123-4567</span>
                    </div>
                    <Button
                      asChild
                      className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                    >
                      <Link href="tel:18001234567">Call Now</Link>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center">
                      <Mail className="h-5 w-5 mr-2 text-red-600 dark:text-red-500" />
                      Email Support
                    </CardTitle>
                    <CardDescription>Send us your query by email</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Email us your questions or concerns and we'll respond within 24 hours on business days.
                    </p>
                    <div className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-800 rounded-md mb-4">
                      <span className="font-medium">Email</span>
                      <span className="text-red-600 dark:text-red-500 font-medium">support@insuredash.com</span>
                    </div>
                    <Button
                      asChild
                      variant="outline"
                      className="w-full border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950"
                    >
                      <Link href="mailto:support@insuredash.com">Send Email</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="common-issues">
              <Card>
                <CardHeader>
                  <CardTitle>Common Issues & Quick Solutions</CardTitle>
                  <CardDescription>Find quick answers to frequently encountered issues</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {[
                      {
                        question: "How do I file a claim?",
                        answer:
                          "You can file a claim through your online account dashboard, our mobile app, or by calling our toll-free number 1800-123-4567. Have your policy number and relevant documents ready for faster processing.",
                      },
                      {
                        question: "How do I make premium payments?",
                        answer:
                          "Premium payments can be made online through our website or mobile app, via auto-debit from your bank account, through net banking, or at any of our branch offices. We also accept UPI payments for added convenience.",
                      },
                      {
                        question: "I forgot my password. How do I reset it?",
                        answer:
                          "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link. For security reasons, the link is valid for 24 hours only.",
                      },
                      {
                        question: "How do I update my personal information?",
                        answer:
                          "You can update your personal information by logging into your account and navigating to the 'Profile' section. For certain changes like name or date of birth, you may need to submit supporting documents.",
                      },
                      {
                        question: "When will I receive my policy document?",
                        answer:
                          "Digital policy documents are sent to your registered email address within 24 hours of policy issuance. Physical copies, if requested, are dispatched within 7-10 working days.",
                      },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className="pb-4 border-b border-gray-100 dark:border-gray-800 last:border-0 last:pb-0"
                      >
                        <h3 className="font-medium text-lg mb-2">{item.question}</h3>
                        <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                    <div className="flex items-start">
                      <LifeBuoy className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 mr-2" />
                      <div>
                        <h3 className="font-medium">Need more help?</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          If you couldn't find what you're looking for, visit our comprehensive Help Center or contact
                          our support team.
                        </p>
                        <div className="mt-3 flex flex-wrap gap-2">
                          <Button
                            asChild
                            variant="outline"
                            size="sm"
                            className="border-red-600 text-red-600 hover:bg-red-50 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-950"
                          >
                            <Link href="/help-center">Visit Help Center</Link>
                          </Button>
                          <Button
                            asChild
                            size="sm"
                            className="bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                          >
                            <Link href="/contact-us">Contact Support</Link>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="contact">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Our Support Team</CardTitle>
                  <CardDescription>Multiple ways to reach us for assistance</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Contact Information</h3>

                      <div className="space-y-4">
                        <div className="flex items-start">
                          <Phone className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 mr-3" />
                          <div>
                            <p className="font-medium">Phone Support</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              Monday to Saturday, 9:00 AM to 6:00 PM IST
                            </p>
                            <p className="text-red-600 dark:text-red-500 font-medium mt-1">1800-123-4567 (Toll-Free)</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <Mail className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 mr-3" />
                          <div>
                            <p className="font-medium">Email Support</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              We typically respond within 24 hours on business days
                            </p>
                            <p className="text-red-600 dark:text-red-500 font-medium mt-1">support@insuredash.com</p>
                          </div>
                        </div>

                        <div className="flex items-start">
                          <FileText className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 mr-3" />
                          <div>
                            <p className="font-medium">Grievance Redressal</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              For escalations and formal complaints
                            </p>
                            <p className="text-red-600 dark:text-red-500 font-medium mt-1">grievance@insuredash.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <h4 className="font-medium mb-2">Head Office</h4>
                        <address className="not-italic text-sm text-gray-600 dark:text-gray-400">
                          InsureDash Insurance Limited
                          <br />
                          10th Floor, Horizon Tower
                          <br />
                          Plot No. 57, Sector 30
                          <br />
                          Gurugram - 122001, Haryana
                          <br />
                          India
                        </address>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-medium mb-4">Visit Our Branch Offices</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">
                        We have over 200 branch offices across India. Find the one nearest to you.
                      </p>

                      <div className="space-y-4">
                        {[
                          {
                            city: "Mumbai",
                            address: "Maker Chambers IV, 12th Floor, Nariman Point, Mumbai - 400021",
                          },
                          {
                            city: "Delhi",
                            address: "Ashoka Estate Building, 3rd Floor, 24 Barakhamba Road, New Delhi - 110001",
                          },
                          {
                            city: "Bangalore",
                            address: "Prestige Meridian II, 8th Floor, M.G. Road, Bangalore - 560001",
                          },
                          {
                            city: "Chennai",
                            address: "Ceebros Building, 4th Floor, 11 Pycrofts Garden Road, Chennai - 600006",
                          },
                        ].map((office, index) => (
                          <div key={index} className="p-3 border border-gray-100 dark:border-gray-800 rounded-md">
                            <p className="font-medium">{office.city} Branch</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{office.address}</p>
                          </div>
                        ))}
                      </div>

                      <Button
                        asChild
                        className="w-full mt-6 bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                      >
                        <Link href="/contact-us">Find Nearest Branch</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
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
