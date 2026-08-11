'use client'

import Link from 'next/link'
import { Zap, Code2, Globe, Share2 } from 'lucide-react'

const FOOTER_LINKS = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '#features' },
      { label: 'Workflows', href: '#how-it-works' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Changelog', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'SDK Drivers', href: '#' },
      { label: 'Community', href: '#' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-white/10 relative z-10 pt-16 pb-12">
      <div className="max-w-5xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-200/60 dark:border-white/5">
          
          {/* Brand Info */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-flex items-center gap-2 mb-4 group">
              <div className="p-2 rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
                <Zap className="w-4 h-4 fill-current" />
              </div>
              <span className="font-bold text-lg text-slate-900 dark:text-white tracking-tight">
                Pulse<span className="text-indigo-600 dark:text-indigo-400">Flow</span>
              </span>
            </Link>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6 max-w-sm">
              High-performance, code-first AI infrastructure designed for engineering teams shipping production workflows.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 text-slate-500">
              <a href="#" aria-label="Code Repository" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Code2 className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Website" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Community" className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 hover:text-slate-900 dark:hover:text-white transition-colors">
                <Share2 className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Columns */}
          <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-900 dark:text-white font-semibold mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}>
                      <a
                        href={link.href}
                        className="text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} PulseFlow Inc. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-mono text-[11px]">All Systems Operational</span>
          </div>
        </div>

      </div>
    </footer>
  )
}