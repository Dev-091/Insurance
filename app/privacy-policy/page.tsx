import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
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
        <div className="bg-gray-50 dark:bg-gray-900 py-8">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl font-bold">Privacy Policy</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Last updated: April 15, 2025</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-red dark:prose-invert max-w-none">
              <p>
                At InsureDash, we are committed to protecting your privacy and ensuring the security of your personal
                information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information
                when you visit our website or use our services.
              </p>

              <h2>Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, information we obtain automatically when you use
                our services, and information from third-party sources.
              </p>

              <h3>Information You Provide to Us</h3>
              <ul>
                <li>Personal identification information (name, email address, phone number, etc.)</li>
                <li>Date of birth and gender</li>
                <li>Government-issued identification details</li>
                <li>Financial information (bank account details, payment information)</li>
                <li>Health information (for health insurance products)</li>
                <li>Information about assets (for property insurance)</li>
                <li>Beneficiary information</li>
                <li>Any other information you choose to provide</li>
              </ul>

              <h3>Information We Collect Automatically</h3>
              <ul>
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, time spent on pages, links clicked)</li>
                <li>Location information</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2>How We Use Your Information</h2>
              <p>We use the information we collect for various purposes, including:</p>
              <ul>
                <li>Providing, maintaining, and improving our services</li>
                <li>Processing insurance applications and claims</li>
                <li>Communicating with you about our services</li>
                <li>Personalizing your experience</li>
                <li>Conducting research and analysis</li>
                <li>Detecting, preventing, and addressing fraud and security issues</li>
                <li>Complying with legal obligations</li>
              </ul>

              <h2>Disclosure of Your Information</h2>
              <p>We may share your information with:</p>
              <ul>
                <li>Insurance partners and service providers</li>
                <li>Professional advisors (lawyers, accountants, etc.)</li>
                <li>Regulatory authorities and government bodies</li>
                <li>Business partners for marketing purposes (with your consent)</li>
                <li>In connection with a business transaction (merger, acquisition, etc.)</li>
              </ul>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information
                against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission
                over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Your Rights</h2>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul>
                <li>Right to access and receive a copy of your personal information</li>
                <li>Right to rectify inaccurate or incomplete information</li>
                <li>Right to erasure (right to be forgotten)</li>
                <li>Right to restrict processing</li>
                <li>Right to data portability</li>
                <li>Right to object to processing</li>
                <li>Right to withdraw consent</li>
              </ul>

              <h2>Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect information about your browsing activities
                and to remember your preferences. You can instruct your browser to refuse all cookies or to indicate
                when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some
                portions of our service.
              </p>

              <h2>Children's Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly collect personal
                information from children. If you are a parent or guardian and you are aware that your child has
                provided us with personal information, please contact us.
              </p>

              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
                Policy periodically for any changes.
              </p>

              <h2>Contact Us</h2>
              <p>If you have any questions about this Privacy Policy, please contact us at:</p>
              <ul>
                <li>Email: privacy@insuredash.com</li>
                <li>Phone: 1800-123-4567</li>
                <li>
                  Address: InsureDash Insurance Limited, 10th Floor, Horizon Tower, Plot No. 57, Sector 30, Gurugram -
                  122001, Haryana, India
                </li>
              </ul>
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
              <Link href="/privacy-policy" className="text-sm text-red-600 dark:text-red-500">
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
