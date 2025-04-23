import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Mail, MapPin, Phone, Shield } from "lucide-react"

export default function ContactUsPage() {
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
            <Link href="/contact-us" className="text-sm font-medium text-red-600 dark:text-red-500">
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
            <h1 className="text-3xl font-bold">Contact Us</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">We're here to help with any questions you may have</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle>Send us a message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" placeholder="Enter your first name" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" placeholder="Enter your last name" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="Enter your email" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input id="phone" placeholder="Enter your phone number" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Select>
                        <SelectTrigger id="subject">
                          <SelectValue placeholder="Select a subject" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General Inquiry</SelectItem>
                          <SelectItem value="policy">Policy Question</SelectItem>
                          <SelectItem value="claim">Claim Issue</SelectItem>
                          <SelectItem value="billing">Billing & Payments</SelectItem>
                          <SelectItem value="feedback">Feedback</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea id="message" placeholder="How can we help you?" rows={5} />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                  <CardDescription>Reach out to us through any of these channels</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
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
                      <p className="text-sm text-gray-600 dark:text-gray-400">For escalations and formal complaints</p>
                      <p className="text-red-600 dark:text-red-500 font-medium mt-1">grievance@insuredash.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-red-600 dark:text-red-500 mt-0.5 mr-3" />
                    <div>
                      <p className="font-medium">Head Office</p>
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
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle>Branch Locator</CardTitle>
                  <CardDescription>Find our nearest branch office</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="state">Select State</Label>
                      <Select>
                        <SelectTrigger id="state">
                          <SelectValue placeholder="Select state" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="delhi">Delhi</SelectItem>
                          <SelectItem value="maharashtra">Maharashtra</SelectItem>
                          <SelectItem value="karnataka">Karnataka</SelectItem>
                          <SelectItem value="tamilnadu">Tamil Nadu</SelectItem>
                          <SelectItem value="telangana">Telangana</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="city">Select City</Label>
                      <Select>
                        <SelectTrigger id="city">
                          <SelectValue placeholder="Select city" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="new-delhi">New Delhi</SelectItem>
                          <SelectItem value="mumbai">Mumbai</SelectItem>
                          <SelectItem value="bangalore">Bangalore</SelectItem>
                          <SelectItem value="chennai">Chennai</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <Button className="w-full bg-red-600 hover:bg-red-700 dark:bg-red-600 dark:hover:bg-red-700">
                      Find Branches
                    </Button>
                  </div>
                </CardContent>
              </Card>
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
                href="/support"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Support
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
