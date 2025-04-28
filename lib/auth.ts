import { supabase } from './supabase'

export async function signUp(email: string, password: string, fullName: string) {
  try {
    console.log('Starting signup process...', { email, fullName })

    // Validate password length
    if (password.length < 6) {
      throw new Error("Password must be at least 6 characters long")
    }

    // Step 1: Create auth user
    console.log('Creating auth user...')
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
      },
    })

    if (authError) {
      console.error('Auth signup error:', authError)
      throw authError
    }

    if (!authData.user) {
      console.error('No user data returned from auth signup')
      throw new Error('Failed to create user')
    }

    console.log('Auth user created successfully:', authData.user.id)

    // Step 2: Create user profile with retry logic
    console.log('Creating user profile...')
    let profileCreated = false
    let retryCount = 0
    const maxRetries = 3

    while (!profileCreated && retryCount < maxRetries) {
      try {
        const { data: profileData, error: profileError } = await supabase
          .from('users')
          .upsert([
            {
              id: authData.user.id,
              email: authData.user.email,
              full_name: fullName,
            }
          ])
          .select()
          .single()

        if (profileError) {
          console.error(`Profile creation attempt ${retryCount + 1} failed:`, profileError)
          retryCount++
          if (retryCount === maxRetries) {
            throw profileError
          }
          // Wait for a short time before retrying
          await new Promise(resolve => setTimeout(resolve, 1000))
        } else {
          profileCreated = true
          console.log('User profile created successfully:', profileData)
        }
      } catch (error) {
        console.error(`Profile creation attempt ${retryCount + 1} error:`, error)
        retryCount++
        if (retryCount === maxRetries) {
          throw error
        }
      }
    }

    // Step 3: Verify the user was created in both tables
    const { data: verifyAuth } = await supabase.auth.getUser()
    console.log('Verify auth user:', verifyAuth?.user?.id)

    const { data: verifyProfile } = await supabase
      .from('users')
      .select('*')
      .eq('id', authData.user.id)
      .single()
    console.log('Verify user profile:', verifyProfile)

    return authData
  } catch (error: any) {
    console.error('Signup process error:', error)
    throw error
  }
}

export async function signIn(email: string, password: string) {
  try {
    console.log('Starting signin process...', { email })
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      console.error('Signin error:', error)
      throw error
    }

    console.log('Signin successful:', data.user?.id)
    return data
  } catch (error: any) {
    console.error('Signin process error:', error)
    throw error
  }
}

export async function signOut() {
  try {
    const { error } = await supabase.auth.signOut()
    if (error) {
      console.error('Signout error:', error)
      throw error
    }
    console.log('Signout successful')
  } catch (error: any) {
    console.error('Signout process error:', error)
    throw error
  }
}

export async function getCurrentUser() {
  try {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) {
      console.error('Get user error:', error)
      throw error
    }
    console.log('Got current user:', user?.id)
    return user
  } catch (error: any) {
    console.error('Get user process error:', error)
    throw error
  }
} 