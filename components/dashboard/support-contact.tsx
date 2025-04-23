"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Check, Mail, MessageSquare, Phone } from "lucide-react"

export function SupportContact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, category: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormState({
          name: "",
          email: "",
          subject: "",
          category: "",
          message: "",
        })
      }, 3000)
    }, 1500)
  }

  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Contact Support</CardTitle>
          <CardDescription>Fill out the form below to get in touch with our support team</CardDescription>
        </CardHeader>
        <CardContent>
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center space-y-4">
              <div className="rounded-full bg-green-100 dark:bg-green-900 p-3">
                <Check className="h-6 w-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-medium">Message Sent</h3>
                <p className="text-sm text-muted-foreground">
                  Thank you for contacting us. We'll get back to you shortly.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" value={formState.name} onChange={handleChange} required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" name="subject" value={formState.subject} onChange={handleChange} required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select value={formState.category} onValueChange={handleSelectChange} required>
                    <SelectTrigger id="category">
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="policy">Policy Question</SelectItem>
                      <SelectItem value="claim">Claim Issue</SelectItem>
                      <SelectItem value="billing">Billing & Payments</SelectItem>
                      <SelectItem value="technical">Technical Support</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Contact Information</CardTitle>
          <CardDescription>Reach out to us through any of these channels</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3">
              <Phone className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium">Phone Support</h3>
              <p className="text-sm text-muted-foreground mt-1">Available 24/7 for urgent matters</p>
              <a href="tel:+918001234567" className="text-blue-600 hover:underline dark:text-blue-400 block mt-1">
                +91 800-123-4567
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3">
              <Mail className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium">Email Support</h3>
              <p className="text-sm text-muted-foreground mt-1">We typically respond within 24 hours</p>
              <a
                href="mailto:support@insuredash.com"
                className="text-blue-600 hover:underline dark:text-blue-400 block mt-1"
              >
                support@insuredash.com
              </a>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="rounded-full bg-blue-100 dark:bg-blue-900 p-3">
              <MessageSquare className="h-5 w-5 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-medium">Live Chat</h3>
              <p className="text-sm text-muted-foreground mt-1">Available Monday-Friday, 9am-6pm IST</p>
              <Button variant="link" className="p-0 h-auto text-blue-600 hover:underline dark:text-blue-400 mt-1">
                Start a chat session
              </Button>
            </div>
          </div>

          <div className="rounded-lg border p-4 mt-6">
            <h3 className="font-medium mb-2">Office Hours</h3>
            <div className="space-y-1 text-sm">
              <div className="flex justify-between">
                <span>Monday - Friday:</span>
                <span>9:00 AM - 6:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 2:00 PM IST</span>
              </div>
              <div className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button variant="outline" className="w-full">
            View Support Locations
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
