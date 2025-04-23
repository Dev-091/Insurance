import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowRight, ChevronRight, FileText, Search, Shield } from "lucide-react"

export default function HelpCenterPage() {
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
            <Link href="/support" className="text-sm font-medium hover:text-red-600 dark:hover:text-red-500">
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
        <div className="bg-red-600 dark:bg-red-700 text-white py-12">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">How can we help you?</h1>
            <p className="text-red-100 mb-8 max-w-2xl mx-auto">
              Find answers to your questions about our insurance products, claims process, and more
            </p>
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                placeholder="Search for answers..."
                className="pl-10 h-12 bg-white dark:bg-gray-800 border-0 focus-visible:ring-2 focus-visible:ring-red-400"
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <div className="sticky top-6">
                <h2 className="text-lg font-semibold mb-4">Help Topics</h2>
                <nav className="space-y-1">
                  {[
                    { name: "Getting Started", href: "#getting-started" },
                    { name: "Account Management", href: "#account" },
                    { name: "Policies", href: "#policies" },
                    { name: "Claims", href: "#claims" },
                    { name: "Payments", href: "#payments" },
                    { name: "Technical Support", href: "#technical" },
                  ].map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-50 dark:hover:bg-gray-900 hover:text-red-600 dark:hover:text-red-500"
                    >
                      <ChevronRight className="h-4 w-4 mr-2" />
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <h3 className="font-medium mb-2">Need more help?</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    Can't find what you're looking for? Contact our support team.
                  </p>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700">
                    <Link href="/contact-us">Contact Support</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="md:col-span-3">
              <Tabs defaultValue="faq" className="w-full">
                <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
                  <TabsTrigger value="faq">FAQs</TabsTrigger>
                  <TabsTrigger value="guides">Guides</TabsTrigger>
                  <TabsTrigger value="videos">Video Tutorials</TabsTrigger>
                </TabsList>

                <TabsContent value="faq">
                  <div className="space-y-8">
                    <section id="getting-started">
                      <Card>
                        <CardHeader>
                          <CardTitle>Getting Started</CardTitle>
                          <CardDescription>Basic information about our insurance services</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {[
                              {
                                question: "What types of insurance does InsureDash offer?",
                                answer:
                                  "InsureDash offers a comprehensive range of insurance products including term life insurance, health insurance, motor insurance, home insurance, travel insurance, and retirement plans. Each product is designed to provide optimal coverage for your specific needs.",
                              },
                              {
                                question: "How do I create an account with InsureDash?",
                                answer:
                                  "Creating an account is simple. Click on the 'Get Started' or 'Register' button on our homepage. Fill in your basic details like name, email, and mobile number. Verify your email address and mobile number, set a password, and your account will be ready to use.",
                              },
                              {
                                question: "What documents do I need to purchase insurance?",
                                answer:
                                  "The required documents vary by insurance type. Generally, you'll need proof of identity (Aadhaar, PAN, passport), proof of address, age proof, and sometimes income proof. For specific policies like motor insurance, you'll need vehicle registration details. All documents can be uploaded digitally through our platform.",
                              },
                            ].map((item, index) => (
                              <AccordionItem key={index} value={`getting-started-${index}`}>
                                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    </section>

                    <section id="account">
                      <Card>
                        <CardHeader>
                          <CardTitle>Account Management</CardTitle>
                          <CardDescription>Managing your InsureDash account</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {[
                              {
                                question: "How do I update my personal information?",
                                answer:
                                  "To update your personal information, log in to your account and navigate to the 'Profile' or 'Account Settings' section. Here, you can edit details like your address, phone number, and email. For changes to critical information like your name or date of birth, you may need to submit supporting documents for verification.",
                              },
                              {
                                question: "I forgot my password. How do I reset it?",
                                answer:
                                  "Click on the 'Forgot Password' link on the login page. Enter your registered email address, and we'll send you a password reset link. For security reasons, the link is valid for 24 hours only. If you don't receive the email, check your spam folder or contact our support team.",
                              },
                              {
                                question: "How can I change my communication preferences?",
                                answer:
                                  "Log in to your account and go to 'Communication Preferences' under your profile settings. Here, you can choose which types of communications you want to receive (policy updates, promotional offers, etc.) and your preferred channels (email, SMS, WhatsApp).",
                              },
                            ].map((item, index) => (
                              <AccordionItem key={index} value={`account-${index}`}>
                                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    </section>

                    {/* Additional sections would follow the same pattern */}
                    <section id="policies">
                      <Card>
                        <CardHeader>
                          <CardTitle>Policies</CardTitle>
                          <CardDescription>Information about insurance policies</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Accordion type="single" collapsible className="w-full">
                            {[
                              {
                                question: "How do I view my policy documents?",
                                answer:
                                  "You can view your policy documents by logging into your account and navigating to the 'My Policies' section. Select the policy you want to view, and you'll find all related documents including the policy certificate, terms and conditions, and any endorsements.",
                              },
                              {
                                question: "Can I make changes to my existing policy?",
                                answer:
                                  "Yes, certain changes can be made to your existing policy. This includes updating your contact information, adding or removing beneficiaries, and in some cases, adjusting coverage amounts. Log in to your account, select the policy, and click on 'Request Changes' to initiate the process.",
                              },
                              {
                                question: "What happens if I miss a premium payment?",
                                answer:
                                  "If you miss a premium payment, most policies offer a grace period (typically 15-30 days) during which you can make the payment without penalty. If payment isn't made within the grace period, your policy may lapse. Some policies can be reinstated within a specific timeframe by paying outstanding premiums and sometimes a reinstatement fee.",
                              },
                            ].map((item, index) => (
                              <AccordionItem key={index} value={`policies-${index}`}>
                                <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                  <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
                                </AccordionContent>
                              </AccordionItem>
                            ))}
                          </Accordion>
                        </CardContent>
                      </Card>
                    </section>
                  </div>
                </TabsContent>

                <TabsContent value="guides">
                  <Card>
                    <CardHeader>
                      <CardTitle>Step-by-Step Guides</CardTitle>
                      <CardDescription>Detailed instructions for common processes</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "How to Purchase a New Policy",
                            description: "A complete guide to buying insurance online",
                            steps: 5,
                            time: "10 min",
                          },
                          {
                            title: "Filing a Claim",
                            description: "Step-by-step process for submitting insurance claims",
                            steps: 7,
                            time: "15 min",
                          },
                          {
                            title: "Setting Up Auto-Pay",
                            description: "Never miss a premium payment with automatic payments",
                            steps: 4,
                            time: "5 min",
                          },
                          {
                            title: "Adding Beneficiaries",
                            description: "How to add or update policy beneficiaries",
                            steps: 3,
                            time: "3 min",
                          },
                        ].map((guide, index) => (
                          <div
                            key={index}
                            className="border border-gray-100 dark:border-gray-800 rounded-lg p-4 hover:shadow-sm transition-shadow"
                          >
                            <h3 className="font-medium text-lg mb-1">{guide.title}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{guide.description}</p>
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-gray-500">
                                {guide.steps} steps • {guide.time} read
                              </span>
                              <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 p-0"
                              >
                                <Link href="#" className="flex items-center">
                                  View Guide
                                  <ArrowRight className="ml-1 h-3 w-3" />
                                </Link>
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="videos">
                  <Card>
                    <CardHeader>
                      <CardTitle>Video Tutorials</CardTitle>
                      <CardDescription>Visual guides to help you navigate our services</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="grid md:grid-cols-2 gap-6">
                        {[
                          {
                            title: "Getting Started with InsureDash",
                            description: "An overview of our platform and services",
                            duration: "4:32",
                          },
                          {
                            title: "How to Compare Insurance Plans",
                            description: "Finding the right coverage for your needs",
                            duration: "6:15",
                          },
                          {
                            title: "Understanding Your Policy Document",
                            description: "Key sections and terms explained",
                            duration: "8:47",
                          },
                          {
                            title: "Mobile App Tutorial",
                            description: "Managing your insurance on the go",
                            duration: "5:23",
                          },
                        ].map((video, index) => (
                          <div
                            key={index}
                            className="border border-gray-100 dark:border-gray-800 rounded-lg overflow-hidden"
                          >
                            <div className="h-40 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
                              <FileText className="h-10 w-10 text-gray-400" />
                            </div>
                            <div className="p-4">
                              <h3 className="font-medium text-lg mb-1">{video.title}</h3>
                              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{video.description}</p>
                              <div className="flex items-center justify-between">
                                <span className="text-sm text-gray-500">{video.duration}</span>
                                <Button
                                  asChild
                                  variant="ghost"
                                  size="sm"
                                  className="text-red-600 hover:text-red-700 dark:text-red-500 dark:hover:text-red-400 p-0"
                                >
                                  <Link href="#" className="flex items-center">
                                    Watch Video
                                    <ArrowRight className="ml-1 h-3 w-3" />
                                  </Link>
                                </Button>
                              </div>
                            </div>
                          </div>
                        ))}
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
