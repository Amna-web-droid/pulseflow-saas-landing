'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Check, Copy, Terminal, Zap } from 'lucide-react'

export default function CTA() {
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const command = 'npx create-pulseflow-app@latest'

  const handleCopy = () => {
    navigator.clipboard.writeText(command)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail('')
    }
  }

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main CTA Container - Light/Dark Theme Responsive */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-900 p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors">
          
          {/* Background Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Heading & Waitlist Input */}
            <div className="lg:col-span-7 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400 font-mono text-xs mb-4">
                <Zap className="w-3.5 h-3.5 animate-pulse" />
                <span>Instant Edge Setup</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight mb-4">
                Ready to deploy your first AI workflow?
              </h2>

              <p className="text-sm text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
                Get started free with 1,000 monthly executions. No credit card required.
              </p>

              {/* Dynamic Email Form */}
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2 max-w-md">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="enter your work email..."
                  required
                  className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-mono placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 transition-colors flex-1"
                />
                <button
                  type="submit"
                  className="px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer shadow-md shadow-indigo-600/20"
                >
                  {submitted ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Access Granted</span>
                    </>
                  ) : (
                    <>
                      <span>Get Early Access</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Right Column: Dynamic Terminal Box */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 p-5 font-mono text-xs text-left shadow-lg transition-colors">
                
                <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200 dark:border-slate-800 text-slate-500 text-[11px]">
                  <div className="flex items-center gap-2">
                    <Terminal className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                    <span className="font-bold text-slate-700 dark:text-slate-300">terminal</span>
                  </div>
                  <span className="text-slate-400">bash</span>
                </div>

                <p className="text-slate-500 dark:text-slate-400 text-[11px] mb-2"># Spin up a project locally</p>

                {/* Clickable Command Area */}
                <div
                  onClick={handleCopy}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && handleCopy()}
                  className="p-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-800 flex items-center justify-between cursor-pointer select-none group hover:border-indigo-500 dark:hover:border-indigo-500 transition-all shadow-sm"
                >
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 overflow-x-auto">
                    <span className="text-indigo-600 dark:text-indigo-400 select-none font-bold">$</span>
                    <span className="text-slate-900 dark:text-slate-100 font-mono text-[11px] font-semibold">{command}</span>
                  </div>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors shrink-0 ml-2"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <span>Template: Next.js + Tailwind</span>
                  {copied && <span className="text-emerald-600 dark:text-emerald-400 font-bold animate-pulse">Copied to clipboard!</span>}
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  )
}