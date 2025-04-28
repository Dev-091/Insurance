"use client"

import { motion } from "framer-motion"
import { ModernCustomerGrowth } from "./modern-customer-growth"

export function TrackRecordSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400">
            Our Track Record
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            InsureDash has consistently delivered exceptional service and value to our customers over the years.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Customer Growth Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-indigo-600 dark:text-indigo-400">Customer Growth</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Year-over-year growth since 2018</p>
              </div>
              <div className="p-4">
                <ModernCustomerGrowth />
              </div>
              <div className="px-6 py-4 bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Customers</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">32,000+</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Annual Growth</p>
                    <p className="text-2xl font-bold text-green-600 dark:text-green-400">+35%</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Customer Savings & Satisfaction */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-rows-2 gap-8"
          >
            {/* Customer Savings */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-purple-600 dark:text-purple-400">Customer Savings</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average savings compared to market rates</p>
              </div>
              <div className="p-6 flex items-center">
                <div className="relative w-40 h-40 mx-auto">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e2e8f0" strokeWidth="10" />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="10"
                      strokeDasharray="283"
                      initial={{ strokeDashoffset: "283" }}
                      whileInView={{ strokeDashoffset: "70.75" }} // 283 * (1 - 0.75)
                      viewport={{ once: true }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#8b5cf6" />
                        <stop offset="100%" stopColor="#d946ef" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400">
                      75%
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">of customers</span>
                  </div>
                </div>
                <div className="ml-6">
                  <div className="mb-4">
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Annual Savings</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">₹12,500</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Total Customer Savings</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">₹40+ Crore</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
              <div className="p-6 border-b border-gray-100 dark:border-gray-700">
                <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">Customer Satisfaction</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">Based on customer feedback and reviews</p>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                      4.8/5
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Average Rating</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                      96%
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Recommend Us</p>
                  </div>
                  <div className="text-center">
                    <p className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400">
                      98%
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Claims Approval</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Service Quality</span>
                      <span className="text-gray-900 dark:text-white font-medium">95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "95%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Ease of Use</span>
                      <span className="text-gray-900 dark:text-white font-medium">92%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "92%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-600 dark:text-gray-400">Value for Money</span>
                      <span className="text-gray-900 dark:text-white font-medium">97%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-600 to-cyan-600"
                        initial={{ width: 0 }}
                        whileInView={{ width: "97%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}