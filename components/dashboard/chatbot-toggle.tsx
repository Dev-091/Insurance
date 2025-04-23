"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"
import { InsuranceChatbot } from "./insurance-chatbot"

export function ChatbotToggle() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)

  return (
    <>
      <Button
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
        className="fixed bottom-4 right-4 z-50 rounded-full h-12 w-12 p-0 bg-blue-600 hover:bg-blue-700 shadow-lg"
        aria-label="Toggle chatbot"
      >
        <MessageSquare className="h-5 w-5" />
      </Button>

      <InsuranceChatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />
    </>
  )
}
