import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield } from "lucide-react"

export default function TermsOfServicePage() {
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
            <h1 className="text-3xl font-bold">Terms of Service</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-2">Last updated: April 15, 2025</p>
          </div>
        </div>

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-red dark:prose-invert max-w-none">
              <p>
                Welcome to InsureDash. These Terms of Service ("Terms") govern your access to and use of the InsureDash
                website, mobile applications, and services (collectively, the "Services"). Please read these Terms
                carefully before using our Services.
              </p>

              <h2>Acceptance of Terms</h2>
              <p>
                By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy. If you
                do not agree to these Terms, you may not access or use the Services.
              </p>

              <h2>Eligibility</h2>
              <p>
                You must be at least 18 years old to use our Services. By using our Services, you represent and warrant
                that you meet all eligibility requirements.
              </p>

              <h2>Account Registration</h2>
              <p>
                To access certain features of our Services, you may need to register for an account. You agree to
                provide accurate, current, and complete information during the registration process and to update such
                information to keep it accurate, current, and complete.
              </p>
              <p>
                You are responsible for safeguarding your account credentials and for all activities that occur under
                your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2>Insurance Products and Services</h2>
              <p>
                InsureDash provides a platform for users to compare, purchase, and manage insurance products. The actual
                insurance policies are issued by our partner insurance companies, and your relationship with these
                companies is governed by the terms and conditions of the specific insurance policies you purchase.
              </p>
              <p>
                We strive to provide accurate information about insurance products, but we do not guarantee the
                accuracy, completeness, or reliability of any information on our platform. You should always review the
                full terms and conditions of any insurance policy before making a purchase.
              </p>

              <h2>Payments and Fees</h2>
              <p>
                When you purchase an insurance policy through our Services, you agree to pay all fees and premiums
                associated with that policy. Payment terms are specified during the purchase process and in the policy
                documents.
              </p>
              <p>
                We use third-party payment processors to handle payments. Your use of these payment services is subject
                to their terms and conditions.
              </p>

              <h2>User Content</h2>
              <p>
                Our Services may allow you to post, upload, or submit content, such as reviews, comments, or feedback
                ("User Content"). You retain ownership of your User Content, but you grant us a worldwide,
                non-exclusive, royalty-free license to use, reproduce, modify, adapt, publish, translate, distribute,
                and display such User Content in connection with our Services.
              </p>
              <p>
                You are solely responsible for your User Content and represent and warrant that you have all rights
                necessary to grant us the license above. You also represent and warrant that your User Content does not
                violate any third-party rights or applicable laws.
              </p>

              <h2>Prohibited Conduct</h2>
              <p>You agree not to:</p>
              <ul>
                <li>
                  Use the Services in any manner that could interfere with, disrupt, negatively affect, or inhibit other
                  users from fully enjoying the Services
                </li>
                <li>Use the Services for any illegal or unauthorized purpose</li>
                <li>Attempt to circumvent any content-filtering techniques we employ</li>
                <li>
                  Attempt to access or search the Services through the use of any engine, software, tool, agent, device,
                  or mechanism other than the software and/or search agents provided by us
                </li>
                <li>Introduce any viruses, trojan horses, worms, logic bombs, or other harmful material</li>
                <li>Use the Services to send unsolicited communications, promotions, or advertisements, or spam</li>
                <li>Forge any TCP/IP packet header or any part of the header information in any email</li>
                <li>
                  Attempt to decipher, decompile, disassemble, or reverse engineer any of the software used to provide
                  the Services
                </li>
                <li>Interfere with, or attempt to interfere with, the access of any user, host, or network</li>
              </ul>

              <h2>Intellectual Property Rights</h2>
              <p>
                The Services and their entire contents, features, and functionality (including but not limited to all
                information, software, text, displays, images, video, and audio, and the design, selection, and
                arrangement thereof) are owned by InsureDash, its licensors, or other providers of such material and are
                protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary
                rights laws.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate or suspend your access to all or part of the Services, without notice, for any conduct
                that we, in our sole discretion, believe is in violation of these Terms or is harmful to other users of
                the Services, us, or third parties, or for any other reason.
              </p>

              <h2>Disclaimer of Warranties</h2>
              <p>
                THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR
                IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>

              <h2>Limitation of Liability</h2>
              <p>
                IN NO EVENT SHALL INSUREDASH, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE
                LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT
                LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS
                TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of India, without regard to
                its conflict of law provisions.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. If we make changes, we will provide notice of
                such changes, such as by sending an email notification, providing notice through the Services, or
                updating the "Last Updated" date at the beginning of these Terms. Your continued use of the Services
                following the posting of revised Terms means that you accept and agree to the changes.
              </p>

              <h2>Contact Information</h2>
              <p>If you have any questions about these Terms, please contact us at:</p>
              <ul>
                <li>Email: legal@insuredash.com</li>
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
              <Link
                href="/privacy-policy"
                className="text-sm text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-500"
              >
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-sm text-red-600 dark:text-red-500">
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
