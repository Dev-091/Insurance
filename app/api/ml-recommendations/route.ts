// Create a new API route for ML recommendations
import { NextResponse } from "next/server"
import { getUserInsuranceData } from '@/lib/policies';

export async function POST(request: Request) {
  try {
    const body = await request.json()

    // Extract user data from request
    const { userId, currentPolicies, demographics } = body

    // In a real implementation, this would call your Python ML model
    // For demo purposes, we'll simulate the response

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Generate mock recommendations based on user data
    const recommendations = generateMockRecommendations(currentPolicies, demographics)

    return NextResponse.json({
      recommendations,
      modelInfo: {
        name: "InsuranceRecommender-GBM",
        version: "1.2.3",
        lastUpdated: new Date().toISOString(),
        accuracy: 0.94,
        features: ["demographics", "policy_history", "risk_profile", "market_trends"],
      },
    })
  } catch (error) {
    console.error("Error processing ML recommendation:", error)
    return NextResponse.json({ error: "Failed to process recommendation request" }, { status: 500 })
  }
}

export async function GET(request: Request) {
  // Simulate user authentication (replace with actual auth logic)
  const user = { id: 1, name: 'John Doe', email: 'john.doe@example.com' };

  // Fetch user-specific insurance data
  const userData = await getUserInsuranceData(user.id);

  // Structure the response
  const response = {
    user: {
      name: user.name,
      email: user.email,
    },
    policies: userData.policies,
    marketAverages: userData.marketAverages,
    savings: userData.savings,
    chartData: userData.chartData,
  };

  return NextResponse.json(response);
}

// Mock function to generate recommendations
function generateMockRecommendations(currentPolicies: string[], demographics: any) {
  const hasHealthPolicy = currentPolicies.some((p) => p.toLowerCase().includes("health"))
  const hasLifePolicy = currentPolicies.some((p) => p.toLowerCase().includes("life"))
  const age = demographics?.age || 35
  const income = demographics?.income || 75000
  const dependents = demographics?.dependents || 0

  const recommendations = []

  // Recommend health insurance if not present or upgrade if basic
  if (!hasHealthPolicy) {
    recommendations.push({
      id: 1,
      type: "Health Insurance",
      provider: "HealthShield Premium",
      plan: dependents > 0 ? "Family Floater Plan" : "Individual Health Plan",
      match_score: 0.95,
      confidence: 0.92,
      features: [
        "Hospitalization Cover",
        "Pre & Post Hospitalization",
        "Day Care Procedures",
        dependents > 0 ? "Coverage for Entire Family" : "Individual Coverage",
      ],
      current_premium: "N/A",
      new_premium: dependents > 0 ? "₹1,500/month" : "₹800/month",
      savings_amount: "N/A",
      savings_percentage: "N/A",
      description:
        dependents > 0
          ? "Family health coverage with comprehensive benefits"
          : "Individual health coverage with essential benefits",
    })
  } else if (currentPolicies.some((p) => p.toLowerCase().includes("basic"))) {
    recommendations.push({
      id: 1,
      type: "Health Insurance",
      provider: "HealthShield Premium",
      plan: dependents > 0 ? "Family Floater Plan" : "Comprehensive Health Plan",
      match_score: 0.88,
      confidence: 0.85,
      features: [
        "Higher coverage limits",
        "Critical illness coverage",
        "International treatment",
        dependents > 0 ? "Family coverage" : "Enhanced individual coverage",
      ],
      current_premium: "₹800/month",
      new_premium: dependents > 0 ? "₹1,500/month" : "₹2,800/month",
      savings_amount: "₹180/year",
      savings_percentage: "12%",
      description: "Enhanced coverage with critical illness protection",
    })
  }

  // Recommend life insurance based on age and dependents
  if (!hasLifePolicy && (age > 30 || dependents > 0)) {
    const coverageAmount = income * (dependents > 0 ? 10 : 5)
    const formattedCoverage =
      coverageAmount >= 10000000
        ? `₹${(coverageAmount / 10000000).toFixed(1)} Crore`
        : `₹${(coverageAmount / 100000).toFixed(0)} Lakhs`

    recommendations.push({
      id: 2,
      type: "Life Insurance",
      provider: "LifeSecure Plus",
      plan: dependents > 0 ? "Premium Coverage" : "Enhanced Protection",
      match_score: 0.92,
      confidence: 0.89,
      features: [
        `Death Benefit (${formattedCoverage})`,
        "Tax Advantages under Section 80C",
        "Critical Illness Rider",
        "Accidental Death Benefit",
        dependents > 0 ? "Disability Benefit" : "",
      ].filter(Boolean),
      current_premium: "N/A",
      new_premium: dependents > 0 ? "₹1,800/month" : "₹950/month",
      savings_amount: "N/A",
      savings_percentage: "N/A",
      description:
        dependents > 0
          ? "Comprehensive life coverage for family protection"
          : "Essential life coverage with critical illness protection",
    })
  }

  // Add term insurance recommendation for higher income individuals
  if (income > 100000 && !currentPolicies.some((p) => p.toLowerCase().includes("term"))) {
    recommendations.push({
      id: 3,
      type: "Term Insurance",
      provider: "TermLife Max",
      plan: "Term Plus Plan",
      match_score: 0.85,
      confidence: 0.82,
      features: [
        "High Coverage (₹1 Crore)",
        "Low Premium Cost",
        "Tax Advantages",
        "Return of Premium Option",
        "Critical Illness Rider",
      ],
      current_premium: "N/A",
      new_premium: "₹1,100/month",
      savings_amount: "N/A",
      savings_percentage: "N/A",
      description: "High coverage term insurance with additional benefits",
    })
  }

  return recommendations
}
