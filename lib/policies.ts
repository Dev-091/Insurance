import { supabase } from './supabase'

export interface Policy {
  id?: string
  user_id: string
  policy_type: string
  policy_number: string
  start_date: string
  end_date: string
  premium_amount: number
  status?: string
}

export async function createPolicy(policy: Policy) {
  const { data, error } = await supabase
    .from('policies')
    .insert([policy])
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserPolicies(userId: string) {
  const { data, error } = await supabase
    .from('policies')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data
}

export async function updatePolicy(policyId: string, updates: Partial<Policy>) {
  const { data, error } = await supabase
    .from('policies')
    .update(updates)
    .eq('id', policyId)
    .select()
    .single()

  if (error) throw error
  return data
}

export async function deletePolicy(policyId: string) {
  const { error } = await supabase
    .from('policies')
    .delete()
    .eq('id', policyId)

  if (error) throw error
}

export async function getUserInsuranceData(userId: number) {
  // Mock data for demonstration purposes
  const policies = [
    {
      name: 'Health Shield Plan',
      type: 'Health Insurance',
      coverageAmount: 500000,
      premiumMonthly: 1500,
      premiumYearly: 18000,
    },
    {
      name: 'Life Secure Plan',
      type: 'Life Insurance',
      coverageAmount: 10000000,
      premiumMonthly: 2000,
      premiumYearly: 24000,
    },
  ];

  const marketAverages: Record<'Health Insurance' | 'Life Insurance', { monthly: number; yearly: number }> = {
    'Health Insurance': { monthly: 2000, yearly: 24000 },
    'Life Insurance': { monthly: 2500, yearly: 30000 },
  };

  const savings = policies.map((policy) => {
    const marketAverage = marketAverages[policy.type as 'Health Insurance' | 'Life Insurance'];
    return {
      name: policy.name,
      type: policy.type,
      savedMonthly: marketAverage.monthly - policy.premiumMonthly,
      savedYearly: marketAverage.yearly - policy.premiumYearly,
    };
  });

  const totalYearlySavings = savings.reduce((sum, s) => sum + s.savedYearly, 0);

  const chartData = {
    barChart: policies.map((policy) => ({
      name: policy.name,
      userPremium: policy.premiumMonthly,
      marketPremium: marketAverages[policy.type as 'Health Insurance' | 'Life Insurance'].monthly,
    })),
    pieChart: policies.map((policy) => ({
      name: policy.name,
      premium: policy.premiumMonthly,
    })),
    lineChart: savings.map((s) => ({
      name: s.name,
      savedYearly: s.savedYearly,
    })),
  };

  return {
    policies,
    marketAverages,
    savings,
    totalYearlySavings,
    chartData,
  };
}