"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

export function ModernCustomerGrowth() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with proper scaling for clarity
    const container = canvas.parentElement
    if (container) {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
    }

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = Math.max(30, width * 0.1) // Increased padding for better spacing
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Customer growth data - yearly data from 2018 to 2025
    const data = {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [1200, 2500, 4800, 7500, 12000, 18500, 25000, 32000],
      colors: {
        primary: "#6366f1", // Indigo
        secondary: "#8b5cf6", // Purple
        gradient: {
          start: "rgba(99, 102, 241, 0.8)",
          middle: "rgba(139, 92, 246, 0.6)",
          end: "rgba(139, 92, 246, 0.1)"
        }
      }
    }

    // Find max value for scaling
    const maxValue = Math.max(...data.values) * 1.2

    // Apply higher resolution for retina displays
    const dpr = window.devicePixelRatio || 1
    if (dpr > 1) {
      canvas.style.width = width + "px"
      canvas.style.height = height + "px"
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
    }

    // Draw subtle grid background
    ctx.fillStyle = "rgba(243, 244, 246, 0.5)" // Light gray background
    ctx.fillRect(padding, padding, chartWidth, chartHeight)
    
    // Draw horizontal grid lines with modern styling
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.font = "12px Inter, system-ui, sans-serif"
    ctx.fillStyle = "#94a3b8"

    for (let i = 0; i <= gridLines; i++) {
      const y = height - padding - (i / gridLines) * chartHeight
      const value = Math.round((i / gridLines) * maxValue)

      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.strokeStyle = "rgba(226, 232, 240, 0.8)"
      ctx.stroke()

      // Format large numbers with k suffix
      const formattedValue = value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value
      ctx.fillText(String(formattedValue), padding - 8, y + 4)
    }

    // Create gradient for area under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, height - padding)
    gradient.addColorStop(0, data.colors.gradient.start)
    gradient.addColorStop(0.5, data.colors.gradient.middle)
    gradient.addColorStop(1, data.colors.gradient.end)

    // Draw line chart with smooth curve
    ctx.beginPath()
    
    // Helper function for creating smooth curves
    const drawSmoothCurve = (points: {x: number, y: number}[]) => {
      if (points.length < 2) return
      
      ctx.moveTo(points[0].x, points[0].y)
      
      for (let i = 0; i < points.length - 1; i++) {
        const xc = (points[i].x + points[i + 1].x) / 2
        const yc = (points[i].y + points[i + 1].y) / 2
        ctx.quadraticCurveTo(points[i].x, points[i].y, xc, yc)
      }
      
      // Curve through the last point
      ctx.quadraticCurveTo(
        points[points.length - 1].x, 
        points[points.length - 1].y, 
        points[points.length - 1].x, 
        points[points.length - 1].y
      )
    }
    
    // Create points array for smooth curve
    const points = data.values.map((value, index) => ({
      x: padding + (index / (data.values.length - 1)) * chartWidth,
      y: height - padding - (value / maxValue) * chartHeight
    }))
    
    // Draw smooth curve
    ctx.beginPath()
    drawSmoothCurve(points)
    ctx.strokeStyle = data.colors.primary
    ctx.lineWidth = 3
    ctx.stroke()

    // Fill area under the curve
    ctx.lineTo(padding + chartWidth, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.fillStyle = gradient
    ctx.fill()

    // Add points with modern styling
    data.values.forEach((value, index) => {
      const x = padding + (index / (data.values.length - 1)) * chartWidth
      const y = height - padding - (value / maxValue) * chartHeight

      // Draw outer glow
      const glow = ctx.createRadialGradient(x, y, 0, x, y, 12)
      glow.addColorStop(0, "rgba(99, 102, 241, 0.8)")
      glow.addColorStop(1, "rgba(99, 102, 241, 0)")
      
      ctx.beginPath()
      ctx.arc(x, y, 10, 0, Math.PI * 2)
      ctx.fillStyle = glow
      ctx.fill()
      
      // Draw point
      ctx.beginPath()
      ctx.arc(x, y, 6, 0, Math.PI * 2)
      ctx.fillStyle = "#ffffff"
      ctx.fill()
      ctx.strokeStyle = data.colors.primary
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // Draw x-axis labels with modern styling
    ctx.textAlign = "center"
    ctx.font = "12px Inter, system-ui, sans-serif"
    ctx.fillStyle = "#64748b"
    
    data.labels.forEach((label, index) => {
      const x = padding + (index / (data.labels.length - 1)) * chartWidth
      ctx.fillText(label, x, height - padding + 20)
    })

    // Add year-over-year growth percentages with better styling
    ctx.textAlign = "center"
    ctx.font = "bold 12px Inter, system-ui, sans-serif"
    
    for (let i = 1; i < data.values.length; i++) {
      const x = padding + (i / (data.values.length - 1)) * chartWidth
      const y = height - padding - (data.values[i] / maxValue) * chartHeight
      const growthPercent = Math.round(((data.values[i] - data.values[i - 1]) / data.values[i - 1]) * 100)

      // Create growth label with background
      const labelText = `+${growthPercent}%`
      const labelWidth = ctx.measureText(labelText).width + 10
      const labelHeight = 20
      const labelY = Math.max(padding + 15, y - 25)
      
      // Draw label background
      ctx.fillStyle = "rgba(99, 102, 241, 0.1)"
      ctx.beginPath()
      ctx.roundRect(x - labelWidth / 2, labelY - labelHeight / 2, labelWidth, labelHeight, 4)
      ctx.fill()
      
      // Draw label text
      ctx.fillStyle = data.colors.primary
      ctx.fillText(labelText, x, labelY + 4)
    }
  }, [])

  // Add resize event listener to make the chart responsive
  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const container = canvas.parentElement
        if (container) {
          canvas.width = container.clientWidth
          canvas.height = container.clientHeight
          // Redraw the chart
          const event = new Event("resize")
          window.dispatchEvent(event)
        }
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="w-full h-[350px] p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}