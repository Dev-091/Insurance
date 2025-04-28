"use client"

import { motion } from "framer-motion"
import { Shield, Users, Clock, Award } from "lucide-react"

export function StatisticsSection() {
  const stats = [
    {
      icon: <Shield className="h-8 w-8 text-indigo-500" />,
      value: "98%",
      label: "Claims Approval Rate",
      description: "We process claims quickly and efficiently",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      value: "32,000+",
      label: "Satisfied Customers",
      description: "Trusted by thousands across the country",
    },
    {
      icon: <Clock className="h-8 w-8 text-blue-500" />,
      value: "24/7",
      label: "Customer Support",
      description: "We're always here when you need us",
    },
    {
      icon: <Award className="h-8 w-8 text-pink-500" />,
      value: "15+",
      label: "Years of Excellence",
      description: "Providing quality insurance since 2008",
    },
  ]

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
            Why Choose InsureDash?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We're committed to providing the best insurance experience with transparent policies and exceptional service.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className="mx-auto w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 mb-4">
                  {stat.icon}
                </div>
                
                <h3 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
                  {stat.value}
                </h3>
                
                <p className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-2">
                  {stat.label}
                </p>
                
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}