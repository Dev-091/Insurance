"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Business Owner",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      content:
        "InsureDash made getting health insurance for my family incredibly simple. The process was transparent, and their customer service team was always available to answer my questions. I highly recommend their services!",
      rating: 5,
    },
    {
      name: "Rahul Patel",
      role: "Software Engineer",
      image: "https://randomuser.me/api/portraits/men/54.jpg",
      content:
        "I've been using InsureDash for both life and health insurance for over 3 years now. Their digital dashboard makes it easy to track my policies and claims. The premiums are competitive, and the coverage is excellent.",
      rating: 5,
    },
    {
      name: "Ananya Gupta",
      role: "Doctor",
      image: "https://randomuser.me/api/portraits/women/65.jpg",
      content:
        "As a healthcare professional, I understand the importance of good insurance. InsureDash offers comprehensive coverage at reasonable rates. Their claim settlement process is quick and hassle-free.",
      rating: 4,
    },
    {
      name: "Vikram Singh",
      role: "Teacher",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      content:
        "I was looking for term insurance for my family and InsureDash provided the perfect solution. The policy comparison tool helped me choose the right plan, and the application process was straightforward.",
      rating: 5,
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experience with InsureDash.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="absolute -top-10 -left-10 text-indigo-200 dark:text-indigo-800 opacity-50">
            <Quote size={80} />
          </div>
          
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-10 relative z-10"
          >
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3 flex flex-col items-center">
                <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-indigo-100 dark:border-indigo-900 mb-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white text-center">
                  {testimonials[currentIndex].name}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-center mb-4">
                  {testimonials[currentIndex].role}
                </p>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className={i < testimonials[currentIndex].rating ? "text-amber-400 fill-amber-400" : "text-gray-300 dark:text-gray-600"}
                    />
                  ))}
                </div>
              </div>
              
              <div className="md:w-2/3">
                <p className="text-lg text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
            </div>
          </motion.div>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setAutoplay(false)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-indigo-600 dark:bg-indigo-500 w-8"
                    : "bg-indigo-200 dark:bg-indigo-800"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-6">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={24} />
            </button>
          </div>
          
          <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-6">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}