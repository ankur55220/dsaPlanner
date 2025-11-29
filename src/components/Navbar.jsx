import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import { useAuth } from '../context/AuthContext'
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from './ui/dropdown-menu'
import { Link, NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'

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

  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `px-3 py-1.5 rounded-md transition-colors ${
      isActive
        ? 'bg-slate-700 text-white'
        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
    }`

  return (
    <nav className="w-full bg-slate-800 border-b border-slate-700">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        {/* Left: logo */}
        <Link to="/" className="text-lg md:text-xl font-bold tracking-wide">
          Interview Prep OS
        </Link>

        {/* Center: desktop nav */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-4 text-sm">
          <NavLink to="/" className={navLinkClass}>
            Dashboard
          </NavLink>
          <NavLink to="/patterns" className={navLinkClass}>
            Patterns
          </NavLink>
          <NavLink to="/daily-log" className={navLinkClass}>
            Daily Log
          </NavLink>
          <NavLink to="/weekly-plan" className={navLinkClass}>
            Weekly Plan
          </NavLink>
        </div>

        {/* Right: avatar + mobile menu button */}
        <div className="flex items-center gap-3">
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

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-slate-600 text-slate-200 hover:bg-slate-700"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Toggle navigation</span>
            <Menu className="w-5 h-5" />
          </button>
        </div>

      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="md:hidden border-t border-slate-700 bg-slate-800/95">
          <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-2 text-sm">
            <NavLink
              to="/"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/patterns"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              Patterns
            </NavLink>
            <NavLink
              to="/daily-log"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              Daily Log
            </NavLink>
            <NavLink
              to="/weekly-plan"
              className={navLinkClass}
              onClick={() => setMobileOpen(false)}
            >
              Weekly Plan
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
}
