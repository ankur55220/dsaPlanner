import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'

export default function Login() {
  const [loading, setLoading] = useState(false)

  const signInWithGoogle = async () => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.origin,
      },
    })
    setLoading(false)

    if (error) {
      alert(error.message)
    }
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center">
      <div className="w-full max-w-md bg-slate-800 rounded-xl p-6 shadow-lg space-y-4 text-white">
        <h1 className="text-2xl font-bold text-center">Sign in</h1>
        <p className="text-sm text-slate-300 text-center">
          Continue with your Google account.
        </p>
        <button
          onClick={signInWithGoogle}
          disabled={loading}
          className="w-full py-2 rounded-md bg-emerald-500 hover:bg-emerald-600 disabled:opacity-70 disabled:cursor-not-allowed text-white font-medium"
        >
          {loading ? 'Redirecting…' : 'Continue with Google'}
        </button>
      </div>
    </div>
  )
}
