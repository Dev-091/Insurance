"use client"

import { useEffect, useRef } from "react"

interface MarketComparisonChartProps {
  type: "auto" | "home" | "life"
}

export function MarketComparisonChart({ type }: MarketComparisonChartProps) {
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

    // Data based on insurance type
    let data
    if (type === "auto") {
      data = {
        labels: ["Your Plan", "Provider A", "Provider B", "Provider C", "Market Avg"],
        values: [125, 145, 138, 152, 145],
        colors: ["#2563eb", "#64748b", "#64748b", "#64748b", "#ef4444"],
      }
    } else if (type === "home") {
      data = {
        labels: ["Your Plan", "Provider A", "Provider B", "Provider C", "Market Avg"],
        values: [92, 85, 95, 88, 85],
        colors: ["#2563eb", "#64748b", "#64748b", "#64748b", "#ef4444"],
      }
    } else {
      data = {
        labels: ["Your Plan", "Provider A", "Provider B", "Provider C", "Market Avg"],
        values: [50, 65, 45, 55, 55],
        colors: ["#2563eb", "#64748b", "#64748b", "#64748b", "#ef4444"],
      }
    }

    // Find max value for scaling
    const maxValue = Math.max(...data.values) * 1.2

    // Draw bars
    const barWidth = chartWidth / data.values.length / 1.5
    const barSpacing = chartWidth / data.values.length

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

      ctx.fillText(`₹${value}`, padding - 5, y + 3)
    }

    // Draw bars
    data.values.forEach((value, index) => {
      const x = padding + index * barSpacing + barSpacing / 2 - barWidth / 2
      const barHeight = (value / maxValue) * chartHeight
      const y = height - padding - barHeight

      ctx.fillStyle = data.colors[index]
      ctx.fillRect(x, y, barWidth, barHeight)

      // Draw label
      ctx.textAlign = "center"
      ctx.font = "10px sans-serif"
      ctx.fillStyle = "#64748b"
      ctx.fillText(data.labels[index], x + barWidth / 2, height - padding + 15)

      // Draw value
      ctx.fillStyle = "#1e293b"
      ctx.font = "bold 10px sans-serif"
      ctx.fillText(`₹${value}`, x + barWidth / 2, y - 5)
    })
  }, [type])

  return (
    <div className="w-full h-[300px]">
      <canvas ref={canvasRef} width={500} height={300} className="w-full h-full" />
    </div>
  )
}
