'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Sparkles, ArrowRight, Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from 'next-themes'

const NAV_ITEMS = [
  { label: 'Features', href: '#features' },
  { label: 'Solutions', href: '#solutions' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4">
      <div
        className={`max-w-5xl mx-auto rounded-full transition-all duration-300 pro-glass ${
          scrolled ? 'py-2.5 px-6 shadow-xl shadow-slate-900/5 dark:shadow-black/40' : 'py-3.5 px-7'
        }`}
      >
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-indigo-600 flex items-center justify-center text-white shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
            </div>
            <span className="font-semibold text-sm tracking-tight text-slate-900 dark:text-white">
              Pulse<span className="text-indigo-600 dark:text-indigo-400">Flow</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Actions & Theme Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-200/50 dark:hover:bg-white/10 border border-slate-300/60 dark:border-white/10 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                ) : (
                  <Moon className="w-3.5 h-3.5 text-indigo-600" />
                )}
              </button>
            )}

            <Link
              href="/auth"
              className="text-xs font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors px-2"
            >
              Sign In
            </Link>

            <Link
              href="/auth"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 dark:bg-white/10 dark:hover:bg-white/20 border border-transparent dark:border-white/15 px-3.5 py-1.5 rounded-full transition-all duration-200"
            >
              <span>Deploy App</span>
              <ArrowRight className="w-3 h-3 text-slate-300 dark:text-slate-400" />
            </Link>
          </div>

          {/* Mobile Right Controls */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-1.5 rounded-full text-slate-700 dark:text-slate-300 bg-slate-200/50 dark:bg-white/5 border border-slate-300/50 dark:border-white/10"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-600" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-slate-700 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white p-1"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 p-5 rounded-2xl pro-glass flex flex-col gap-3">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white py-1"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-2">
            <Link
              href="/auth"
              onClick={() => setMobileOpen(false)}
              className="text-xs font-medium text-slate-700 dark:text-slate-300 py-1.5"
            >
              Sign In
            </Link>
            <Link
              href="/auth"
              onClick={() => setMobileOpen(false)}
              className="text-center text-xs font-medium text-white bg-slate-900 dark:bg-white/10 py-2 rounded-full"
            >
              Deploy App
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}