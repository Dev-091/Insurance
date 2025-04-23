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