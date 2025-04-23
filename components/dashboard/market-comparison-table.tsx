"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Check, X } from "lucide-react"

interface MarketComparisonTableProps {
  type: "auto" | "home" | "life"
}

export function MarketComparisonTable({ type }: MarketComparisonTableProps) {
  // Data based on insurance type
  let data

  if (type === "auto") {
    data = {
      headers: ["Coverage", "Your Plan", "Market Average"],
      rows: [
        {
          feature: "Liability Coverage",
          yourPlan: "₹100,000",
          marketAvg: "₹150,000",
          better: false,
        },
        {
          feature: "Collision Deductible",
          yourPlan: "₹500",
          marketAvg: "₹750",
          better: true,
        },
        {
          feature: "Comprehensive Deductible",
          yourPlan: "₹500",
          marketAvg: "₹750",
          better: true,
        },
        {
          feature: "Uninsured Motorist",
          yourPlan: "Included",
          marketAvg: "Optional",
          better: true,
        },
        {
          feature: "Roadside Assistance",
          yourPlan: "Not Included",
          marketAvg: "Optional",
          better: false,
        },
        {
          feature: "Rental Car Coverage",
          yourPlan: "Not Included",
          marketAvg: "Optional",
          better: false,
        },
      ],
    }
  } else if (type === "home") {
    data = {
      headers: ["Coverage", "Your Plan", "Market Average"],
      rows: [
        {
          feature: "Dwelling Coverage",
          yourPlan: "₹300,000",
          marketAvg: "₹275,000",
          better: true,
        },
        {
          feature: "Personal Property",
          yourPlan: "50% of Dwelling",
          marketAvg: "50% of Dwelling",
          better: false,
        },
        {
          feature: "Liability",
          yourPlan: "₹100,000",
          marketAvg: "₹300,000",
          better: false,
        },
        {
          feature: "Deductible",
          yourPlan: "₹1,000",
          marketAvg: "₹1,500",
          better: true,
        },
        {
          feature: "Flood Coverage",
          yourPlan: "Not Included",
          marketAvg: "Optional",
          better: false,
        },
        {
          feature: "Replacement Cost",
          yourPlan: "Included",
          marketAvg: "Optional",
          better: true,
        },
      ],
    }
  } else {
    data = {
      headers: ["Coverage", "Your Plan", "Market Average"],
      rows: [
        {
          feature: "Death Benefit",
          yourPlan: "₹500,000",
          marketAvg: "₹400,000",
          better: true,
        },
        {
          feature: "Term Length",
          yourPlan: "20 Years",
          marketAvg: "15 Years",
          better: true,
        },
        {
          feature: "Cash Value Component",
          yourPlan: "Included",
          marketAvg: "Optional",
          better: true,
        },
        {
          feature: "Disability Rider",
          yourPlan: "Included",
          marketAvg: "Optional",
          better: true,
        },
        {
          feature: "Critical Illness Rider",
          yourPlan: "Not Included",
          marketAvg: "Optional",
          better: false,
        },
        {
          feature: "Accelerated Death Benefit",
          yourPlan: "Not Included",
          marketAvg: "Included",
          better: false,
        },
      ],
    }
  }

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            {data.headers.map((header, index) => (
              <TableHead key={index} className={index === 0 ? "w-[40%]" : ""}>
                {header}
              </TableHead>
            ))}
            <TableHead className="text-right">Comparison</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.rows.map((row, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{row.feature}</TableCell>
              <TableCell>{row.yourPlan}</TableCell>
              <TableCell>{row.marketAvg}</TableCell>
              <TableCell className="text-right">
                {row.better ? (
                  <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-700">
                    <Check className="mr-1 h-3 w-3" /> Better
                  </span>
                ) : (
                  <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-medium text-yellow-700">
                    <X className="mr-1 h-3 w-3" /> Lower
                  </span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
