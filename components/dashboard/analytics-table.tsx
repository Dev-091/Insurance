"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

interface AnalyticsTableProps {
  type: "claims" | "premiums"
}

export function AnalyticsTable({ type }: AnalyticsTableProps) {
  const claimsData = [
    {
      id: "CL-78901234",
      date: "Mar 28, 2025",
      type: "Auto Insurance",
      amount: "₹3,450.00",
      status: "In Progress",
      statusColor: "bg-yellow-600",
    },
    {
      id: "CL-56789012",
      date: "Jan 15, 2025",
      type: "Home Insurance",
      amount: "₹1,200.00",
      status: "Approved",
      statusColor: "bg-green-600",
    },
    {
      id: "CL-34567890",
      date: "Nov 10, 2024",
      type: "Auto Insurance",
      amount: "₹5,800.00",
      status: "Completed",
      statusColor: "bg-blue-600",
    },
    {
      id: "CL-23456789",
      date: "Feb 5, 2025",
      type: "Home Insurance",
      amount: "₹750.00",
      status: "Denied",
      statusColor: "bg-destructive",
    },
  ]

  return (
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Claim ID</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {claimsData.map((claim) => (
            <TableRow key={claim.id}>
              <TableCell className="font-medium">{claim.id}</TableCell>
              <TableCell>{claim.date}</TableCell>
              <TableCell>{claim.type}</TableCell>
              <TableCell>{claim.amount}</TableCell>
              <TableCell>
                <Badge className={claim.statusColor}>{claim.status}</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
