import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function RequireAuth({ children }) {
  const { session, loading } = useAuth()
  const location = useLocation()

  console.log('RequireAuth state:', { session, loading, hasSession: !!session })

  // 1. If we have a session, always allow access.
  if (session) {
    return children
  }

  // 2. While we don't know yet, show loading UI.
  if (loading) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center text-white">
        <p>Checking session…</p>
      </div>
    )
  }

  // 3. No session and not loading -> redirect to login.
  return <Navigate to="/login" replace state={{ from: location }} />
}