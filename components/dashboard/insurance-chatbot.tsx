"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { MessageSquare, X, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

export const InsuranceChatbot = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm your insurance assistant powered by Gemini Flash 2.0. How can I help you today?",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  // Simulate Gemini Flash 2.0 API call
  const generateGeminiResponse = async (userMessage: string) => {
    setIsLoading(true)

    // In a real implementation, this would be an API call to Gemini
    // For demo purposes, we'll simulate the API response with a timeout
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        // Insurance-specific responses based on keywords in the user message
        const lowerCaseMessage = userMessage.toLowerCase()

        if (lowerCaseMessage.includes("premium") || lowerCaseMessage.includes("cost")) {
          resolve(
            "Premium calculations are based on several factors including your coverage amount, age, health status, and policy term. Would you like me to provide a personalized quote?",
          )
        } else if (lowerCaseMessage.includes("claim") || lowerCaseMessage.includes("file")) {
          resolve(
            "To file a claim, you can use the 'File a Claim' button on your policy page. You'll need to provide details about the incident and any supporting documentation. Our claims team typically processes claims within 48-72 hours.",
          )
        } else if (lowerCaseMessage.includes("coverage") || lowerCaseMessage.includes("protect")) {
          resolve(
            "Our insurance policies offer comprehensive coverage for various life events. Based on your profile, I recommend exploring our Premium Life Coverage plan which includes critical illness protection and disability benefits.",
          )
        } else if (lowerCaseMessage.includes("recommend") || lowerCaseMessage.includes("suggest")) {
          resolve(
            "Based on your profile and current policies, I'd recommend considering our Health Insurance plan with a coverage of ₹15 Lakhs. This would complement your existing life insurance and provide comprehensive protection.",
          )
        } else if (lowerCaseMessage.includes("health") || lowerCaseMessage.includes("medical")) {
          resolve(
            "Our Health Insurance plans cover hospitalization expenses, pre and post hospitalization care, day care procedures, and more. The Family Floater plan at ₹1,500/month provides coverage for your entire family with a sum insured of ₹15 Lakhs.",
          )
        } else if (lowerCaseMessage.includes("life") || lowerCaseMessage.includes("term")) {
          resolve(
            "Our Life Insurance plans provide financial security to your family in case of unfortunate events. The Premium Coverage plan offers a sum assured of ₹1 Crore at ₹1,800/month with additional benefits like critical illness coverage and disability benefits.",
          )
        } else {
          resolve(
            "I understand you're asking about " +
              userMessage +
              ". As your AI insurance assistant, I can help with premium calculations, policy information, claims processing, and personalized recommendations. Could you provide more details about what you'd like to know?",
          )
        }

        setIsLoading(false)
      }, 1500)
    })
  }

  const handleUserMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input
    const newMessages = [...messages, { from: "user", text: userMessage }]
    setMessages(newMessages)
    setInput("")

    try {
      const botResponse = await generateGeminiResponse(userMessage)
      setMessages([...newMessages, { from: "bot", text: botResponse }])
    } catch (error) {
      setMessages([
        ...newMessages,
        {
          from: "bot",
          text: "I'm sorry, I encountered an error processing your request. Please try again later.",
        },
      ])
    }
  }

  return (
    <div
      className={cn(
        "fixed bottom-20 right-4 z-50 transition-all duration-300 ease-in-out",
        isOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none",
      )}
    >
      <Card className="w-80 md:w-96 shadow-lg">
        <div className="flex items-center justify-between bg-blue-600 text-white p-3 rounded-t-lg">
          <h3 className="font-medium flex items-center">
            <MessageSquare className="h-4 w-4 mr-2" />
            Gemini Flash 2.0 Assistant
          </h3>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-white hover:bg-blue-700 rounded-full"
            onClick={onClose}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
        <CardContent className="p-3">
          <div className="space-y-3">
            <div className="h-64 overflow-y-auto border p-2 rounded bg-gray-50 dark:bg-gray-900">
              {messages.map((msg, idx) => (
                <div key={idx} className={`text-${msg.from === "bot" ? "left" : "right"} mb-2`}>
                  <span
                    className={`block px-3 py-2 rounded-xl inline-block max-w-[80%] ${
                      msg.from === "bot"
                        ? "bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100"
                        : "bg-green-100 text-green-900 dark:bg-green-900 dark:text-green-100 ml-auto"
                    } whitespace-pre-line`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              {isLoading && (
                <div className="text-left mb-2">
                  <span className="block px-3 py-2 rounded-xl inline-block bg-blue-100 text-blue-900 dark:bg-blue-900 dark:text-blue-100">
                    <Loader2 className="h-4 w-4 animate-spin" />
                  </span>
                </div>
              )}
            </div>
            <div className="flex gap-2">
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && !isLoading && handleUserMessage()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button onClick={handleUserMessage} className="bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                {isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Send"}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
