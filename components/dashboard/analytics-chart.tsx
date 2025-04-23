"use client"

import { useEffect, useRef } from "react"

interface AnalyticsChartProps {
  type: "premiums" | "coverage" | "claims"
}

export function AnalyticsChart({ type }: AnalyticsChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = 40
    const chartWidth = width - padding * 2
    const chartHeight = height - padding * 2

    // Data based on chart type
    let data: { labels: string[]; values: number[]; colors: string[] }

    if (type === "premiums") {
      data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
        values: [267, 267, 267, 267, 267, 267, 267, 267, 267, 267, 267, 267],
        colors: ["#2563eb"],
      }
    } else if (type === "coverage") {
      data = {
        labels: ["Q1 2024", "Q2 2024", "Q3 2024", "Q4 2024", "Q1 2025"],
        values: [65, 68, 70, 72, 72],
        colors: ["#10b981"],
      }
    } else {
      data = {
        labels: ["2023", "2024", "2025"],
        values: [1, 2, 3],
        colors: ["#f59e0b"],
      }
    }

    // Find max value for scaling
    const maxValue = Math.max(...data.values) * 1.2

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

      ctx.fillText(`${value}`, padding - 5, y + 3)
    }

    // Draw line chart
    if (type === "premiums" || type === "coverage") {
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
      ctx.strokeStyle = data.colors[0]
      ctx.lineWidth = 2
      ctx.stroke()

      // Add points
      data.values.forEach((value, index) => {
        const x = padding + (index / (data.values.length - 1)) * chartWidth
        const y = height - padding - (value / maxValue) * chartHeight

        ctx.beginPath()
        ctx.arc(x, y, 4, 0, Math.PI * 2)
        ctx.fillStyle = data.colors[0]
        ctx.fill()
        ctx.strokeStyle = "#ffffff"
        ctx.lineWidth = 2
        ctx.stroke()
      })
    } else {
      // Draw bar chart for claims
      const barWidth = chartWidth / data.values.length / 2

      data.values.forEach((value, index) => {
        const x =
          padding + (index / data.values.length) * chartWidth + chartWidth / (data.values.length * 2) - barWidth / 2
        const barHeight = (value / maxValue) * chartHeight
        const y = height - padding - barHeight

        ctx.fillStyle = data.colors[0]
        ctx.fillRect(x, y, barWidth, barHeight)
      })
    }

    // Draw x-axis labels
    ctx.textAlign = "center"
    ctx.fillStyle = "#64748b"
    data.labels.forEach((label, index) => {
      const x = padding + (index / (data.labels.length - 1)) * chartWidth
      ctx.fillText(label, x, height - padding + 15)
    })
  }, [type])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={800} height={300} className="w-full h-full" />
    </div>
  )
}
