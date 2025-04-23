"use client"

import { useEffect, useRef } from "react"

export function EnhancedCustomerGrowth() {
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
    const padding = Math.max(20, width * 0.08) // Responsive padding
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Customer growth data - yearly data from 2018 to 2025
    const data = {
      labels: ["2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"],
      values: [1200, 2500, 4800, 7500, 12000, 18500, 25000, 32000],
      colors: ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"],
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

    // Draw axes
    ctx.beginPath()
    ctx.moveTo(padding, padding)
    ctx.lineTo(padding, height - padding)
    ctx.lineTo(width - padding, height - padding)
    ctx.strokeStyle = "#e2e8f0"
    ctx.stroke()

    // Draw horizontal grid lines
    const gridLines = 5
    ctx.textAlign = "right"
    ctx.font = "10px sans-serif"
    ctx.fillStyle = "#94a3b8"

    for (let i = 0; i <= gridLines; i++) {
      const y = height - padding - (i / gridLines) * chartHeight
      const value = Math.round((i / gridLines) * maxValue)

      ctx.beginPath()
      ctx.moveTo(padding, y)
      ctx.lineTo(width - padding, y)
      ctx.strokeStyle = "#e2e8f0"
      ctx.stroke()

      // Format large numbers with k suffix
      const formattedValue = value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value
      ctx.fillText(formattedValue, padding - 5, y + 3)
    }

    // Draw line chart
    ctx.beginPath()
    data.values.forEach((value, index) => {
      const x = padding + (index / (data.values.length - 1)) * chartWidth
      const y = height - padding - (value / maxValue) * chartHeight

      if (index === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    })
    ctx.strokeStyle = "#2563eb"
    ctx.lineWidth = 2
    ctx.stroke()

    // Fill area under the line
    ctx.lineTo(padding + chartWidth, height - padding)
    ctx.lineTo(padding, height - padding)
    ctx.fillStyle = "rgba(37, 99, 235, 0.1)"
    ctx.fill()

    // Add points
    data.values.forEach((value, index) => {
      const x = padding + (index / (data.values.length - 1)) * chartWidth
      const y = height - padding - (value / maxValue) * chartHeight

      ctx.beginPath()
      ctx.arc(x, y, 5, 0, Math.PI * 2)
      ctx.fillStyle = "#2563eb"
      ctx.fill()
      ctx.strokeStyle = "#ffffff"
      ctx.lineWidth = 1.5
      ctx.stroke()
    })

    // Draw x-axis labels
    ctx.textAlign = "center"
    ctx.fillStyle = "#64748b"
    data.labels.forEach((label, index) => {
      const x = padding + (index / (data.labels.length - 1)) * chartWidth
      ctx.fillText(label, x, height - padding + 15)
    })

    // Add year-over-year growth percentages with better positioning
    ctx.textAlign = "center"
    ctx.font = "bold 10px sans-serif"
    ctx.fillStyle = "#2563eb"

    for (let i = 1; i < data.values.length; i++) {
      const x = padding + (i / (data.values.length - 1)) * chartWidth
      const y = height - padding - (data.values[i] / maxValue) * chartHeight
      const growthPercent = Math.round(((data.values[i] - data.values[i - 1]) / data.values[i - 1]) * 100)

      // Ensure growth percentages don't exceed chart area
      const labelY = Math.max(padding + 10, y - 15)
      ctx.fillText(`+${growthPercent}%`, x, labelY)
    }

    // Add title with better positioning
    ctx.textAlign = "center"
    ctx.font = "bold 14px sans-serif"
    ctx.fillStyle = "#1e293b"
    ctx.fillText("Customer Growth (2018-2025)", width / 2, padding / 2)
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
    <div className="w-full h-[300px] p-4">
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  )
}
