import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  const { session } = useAuth()

  // Get avatar URL and ensure it's properly formatted
  const rawAvatar = session?.user?.user_metadata?.avatar_url
  // Remove size parameter if present, or use as-is
  const avatar = rawAvatar?.replace(/=s\d+-c$/, '') || rawAvatar
  const name = session?.user?.user_metadata?.full_name || 'User'

  // Debug logging
  console.log('Session:', session)
  console.log('Raw Avatar URL:', rawAvatar)
  console.log('Processed Avatar URL:', avatar)
  console.log('User metadata:', session?.user?.user_metadata)

  const signOut = async () => {
    await supabase.auth.signOut()
    window.location.reload()
  }

  return (
    <nav className="w-full bg-slate-800 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold tracking-wide">
          Interview Prep OS
        </Link>

        {/* Primary nav links */}
        <div className="flex-1 flex items-center justify-center gap-4 text-sm">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/patterns"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`
            }
          >
            Patterns
          </NavLink>
          <NavLink
            to="/daily-log"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`
            }
          >
            Daily Log
          </NavLink>
          <NavLink
            to="/weekly-plan"
            className={({ isActive }) =>
              `px-3 py-1.5 rounded-md transition-colors ${
                isActive
                  ? 'bg-slate-700 text-white'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
              }`
            }
          >
            Weekly Plan
          </NavLink>
        </div>

        {/* User Avatar Dropdown - only show if logged in */}
        {session && (
          <DropdownMenu>
            <DropdownMenuTrigger className="focus:outline-none">
              {avatar ? (
                <img
                  src={avatar}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  className="w-9 h-9 rounded-full border border-slate-600 object-cover"
                  onLoad={() => console.log('✅ Avatar image loaded successfully')}
                  onError={(e) => {
                    console.error('❌ Avatar image failed to load:', avatar)
                    console.error('Error event:', e)
                    e.target.src = 'https://via.placeholder.com/36/334155/ffffff?text=' + name.charAt(0)
                  }}
                />
              ) : (
                <div className="w-9 h-9 rounded-full border border-slate-600 bg-slate-700 flex items-center justify-center text-sm font-medium">
                  {name.charAt(0).toUpperCase()}
                </div>
              )}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-48 bg-slate-800 text-white border border-slate-700">
              <div className="px-3 py-2 border-b border-slate-700">
                <p className="font-medium">{name}</p>
                <p className="text-xs text-slate-400">{session?.user?.email}</p>
              </div>

              <DropdownMenuItem
                onClick={signOut}
                className="cursor-pointer hover:bg-slate-700"
              >
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )}

      </div>
    </nav>
  );
}
