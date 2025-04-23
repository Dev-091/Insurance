"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import { useState } from "react"

export function SupportFAQ() {
  const [searchQuery, setSearchQuery] = useState("")

  const faqCategories = [
    {
      title: "General Questions",
      items: [
        {
          question: "How do I update my personal information?",
          answer:
            "You can update your personal information by navigating to the Profile section in your dashboard. Click on the 'Edit' button to make changes to your name, address, phone number, or email.",
        },
        {
          question: "How secure is my data on InsureDash?",
          answer:
            "InsureDash uses industry-standard encryption and security protocols to protect your data. We employ 256-bit SSL encryption for all data transfers and comply with all relevant data protection regulations.",
        },
        {
          question: "Can I access InsureDash on my mobile device?",
          answer:
            "Yes, InsureDash is fully responsive and can be accessed on any device with a web browser. We also offer dedicated mobile apps for iOS and Android for an enhanced mobile experience.",
        },
      ],
    },
    {
      title: "Policies & Coverage",
      items: [
        {
          question: "How do I add a new policy to my dashboard?",
          answer:
            "To add a new policy, go to the Policies section and click on the 'Add New Policy' button. You'll need to provide your policy details and upload relevant documents. Our system will verify the information and add it to your dashboard.",
        },
        {
          question: "What types of insurance policies can I manage on InsureDash?",
          answer:
            "InsureDash supports a wide range of insurance policies including auto, home, life, health, travel, and more. If you have a specialized policy that you don't see listed, please contact our support team.",
        },
        {
          question: "How often is my coverage information updated?",
          answer:
            "Your coverage information is updated in real-time whenever changes are made to your policies. We also perform regular syncs with insurance providers to ensure all information is current.",
        },
      ],
    },
    {
      title: "Claims & Payments",
      items: [
        {
          question: "How do I file a new claim?",
          answer:
            "To file a new claim, navigate to the Claims section and click on 'File New Claim'. Select the relevant policy, provide details about the incident, and upload any supporting documentation. You can track the status of your claim from the Claims dashboard.",
        },
        {
          question: "How long does it take to process a claim?",
          answer:
            "Claim processing times vary depending on the type of claim and your insurance provider. Simple claims may be processed within a few days, while more complex claims could take several weeks. You can always check the status of your claim in the Claims section.",
        },
        {
          question: "Can I set up automatic payments for my premiums?",
          answer:
            "Yes, you can set up automatic payments for your premiums. Go to the Payments section and select 'Set Up Auto-Pay'. You'll need to provide your payment information and select which policies you want to enroll in auto-pay.",
        },
      ],
    },
  ]

  const filteredFAQ = searchQuery
    ? faqCategories
        .map((category) => ({
          ...category,
          items: category.items.filter(
            (item) =>
              item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchQuery.toLowerCase()),
          ),
        }))
        .filter((category) => category.items.length > 0)
    : faqCategories

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>Find answers to common questions about our services</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="relative mb-6">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search FAQ..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <Button
                variant="ghost"
                size="sm"
                className="absolute right-2 top-1.5 h-7 w-7 px-0"
                onClick={() => setSearchQuery("")}
              >
                ×
              </Button>
            )}
          </div>

          {filteredFAQ.length === 0 ? (
            <div className="text-center py-8">
              <p className="text-muted-foreground">No results found for "{searchQuery}"</p>
              <Button variant="link" onClick={() => setSearchQuery("")}>
                Clear search
              </Button>
            </div>
          ) : (
            filteredFAQ.map((category, index) => (
              <div key={index} className="mb-6">
                <h3 className="font-medium text-lg mb-3">{category.title}</h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.items.map((item, itemIndex) => (
                    <AccordionItem key={itemIndex} value={`item-${index}-${itemIndex}`}>
                      <AccordionTrigger className="text-left">{item.question}</AccordionTrigger>
                      <AccordionContent>
                        <p className="text-muted-foreground">{item.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  )
}
