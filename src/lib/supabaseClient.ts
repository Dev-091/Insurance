import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fckrzszthpvmcckbsjpn.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZja3J6c3p0aHB2bWNja2JzanBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNTA2MDUsImV4cCI6MjA2MDgyNjYwNX0.z5r3R0zHw_jlZbe_bth9NRxN9lM2zAUthsGm3ZcyunU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
