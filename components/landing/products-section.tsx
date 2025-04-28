"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Heart, Car, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

export function ProductsSection() {
  const products = [
    {
      title: "Life Insurance",
      description:
        "Secure your family's financial future with our comprehensive life insurance plans offering long-term protection and savings benefits.",
      features: ["Term Life Coverage", "Retirement Plans", "Child Education Plans", "Investment Options"],
      color: "from-indigo-500 to-blue-500",
      hoverColor: "group-hover:from-indigo-600 group-hover:to-blue-600",
      bgColor: "bg-indigo-50 dark:bg-indigo-950/30",
      borderColor: "border-indigo-200 dark:border-indigo-800",
      textColor: "text-indigo-600 dark:text-indigo-400",
      icon: <Shield className="h-6 w-6" />,
      type: "life",
    },
    {
      title: "Health Insurance",
      description:
        "Protect yourself and your family with our health insurance plans that cover medical expenses, critical illnesses, and more.",
      features: [
        "Hospitalization Cover",
        "Critical Illness Protection",
        "Cashless Claims",
        "Family Floater Plans",
      ],
      color: "from-purple-500 to-pink-500",
      hoverColor: "group-hover:from-purple-600 group-hover:to-pink-600",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      borderColor: "border-purple-200 dark:border-purple-800",
      textColor: "text-purple-600 dark:text-purple-400",
      icon: <Heart className="h-6 w-6" />,
      type: "health",
    },
    {
      title: "Term Insurance",
      description:
        "Secure your family's financial future with our term insurance plans offering comprehensive protection at affordable premiums.",
      features: ["High Coverage at Low Cost", "Tax Benefits", "Rider Options", "Family Protection"],
      color: "from-emerald-500 to-teal-500",
      hoverColor: "group-hover:from-emerald-600 group-hover:to-teal-600",
      bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
      borderColor: "border-emerald-200 dark:border-emerald-800",
      textColor: "text-emerald-600 dark:text-emerald-400",
      icon: <Shield className="h-6 w-6" />,
      type: "term",
    },
    {
      title: "Auto Insurance",
      description:
        "Comprehensive coverage for your vehicle against accidents, theft, and damage with 24/7 roadside assistance.",
      features: ["Comprehensive Coverage", "Third-party Liability", "Personal Accident Cover", "Roadside Assistance"],
      color: "from-amber-500 to-orange-500",
      hoverColor: "group-hover:from-amber-600 group-hover:to-orange-600",
      bgColor: "bg-amber-50 dark:bg-amber-950/30",
      borderColor: "border-amber-200 dark:border-amber-800",
      textColor: "text-amber-600 dark:text-amber-400",
      icon: <Car className="h-6 w-6" />,
      type: "auto",
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Our Insurance Products
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive coverage options designed to protect you and your loved ones with transparent policies and exceptional service.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group"
            >
              <div className={cn(
                "h-full rounded-2xl border transition-all duration-300 hover:shadow-xl overflow-hidden relative",
                product.bgColor,
                product.borderColor,
              )}>
                {/* Gradient top bar */}
                <div className={cn(
                  "h-2 w-full bg-gradient-to-r",
                  product.color,
                  product.hoverColor,
                  "transition-colors duration-300"
                )} />
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={cn(
                      "w-12 h-12 rounded-lg flex items-center justify-center mr-4",
                      product.textColor,
                      "bg-white dark:bg-gray-800 shadow-md"
                    )}>
                      {product.icon}
                    </div>
                    <h3 className={cn("text-xl font-bold", product.textColor)}>
                      {product.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm">
                    {product.description}
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <ChevronRight className={cn("h-4 w-4 mr-2 flex-shrink-0", product.textColor)} />
                        <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="mt-auto">
                    <Button
                      asChild
                      className={cn(
                        "w-full bg-gradient-to-r shadow-md transition-all",
                        product.color,
                        product.hoverColor,
                        "hover:shadow-lg border-0 text-white"
                      )}
                    >
                      <Link href={`/insurance-details/${product.type}`}>Learn More</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}