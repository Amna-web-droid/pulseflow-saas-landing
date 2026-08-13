'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
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
      // Reset back to the form after a few seconds so the demo feels replayable
      setTimeout(() => setSubmitted(false), 3000)
    }
  }

  return (
    <section className="relative py-20 border-t border-slate-200 dark:border-slate-800 transition-colors overflow-hidden">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main CTA Container - Light/Dark Theme Responsive */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl bg-white dark:bg-slate-900 p-8 sm:p-12 border border-slate-200 dark:border-slate-800 shadow-2xl overflow-hidden transition-colors"
        >

          {/* Subtle grid texture on the card itself — same pattern/opacity as the shared page background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f01a_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f01a_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:2rem_2rem]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            {/* Left Column: Heading & Waitlist Input */}
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-7 text-left"
            >
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

              {/* Dynamic Email Form with success state swap */}
              <div className="max-w-md min-h-[52px]">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.1 }}
                        className="p-1 rounded-full bg-emerald-500 text-white shrink-0"
                      >
                        <Check className="w-3.5 h-3.5" />
                      </motion.div>
                      <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                        You&apos;re on the list — check your inbox shortly.
                      </span>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      onSubmit={handleSubmit}
                      className="flex flex-col sm:flex-row items-stretch gap-2"
                    >
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="enter your work email..."
                        required
                        className="px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-300 dark:border-slate-800 text-slate-900 dark:text-slate-100 text-xs font-mono placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all flex-1"
                      />
                      <button
                        type="submit"
                        className="group px-5 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs transition-all flex items-center justify-center gap-2 shrink-0 active:scale-95 cursor-pointer shadow-md shadow-indigo-600/20 hover:shadow-lg hover:shadow-indigo-600/30"
                      >
                        <span>Get Early Access</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

            {/* Right Column: Dynamic Terminal Box */}
            <motion.div
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-5"
            >
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
                  className={`p-3 rounded-xl bg-white dark:bg-slate-900 border flex items-center justify-between cursor-pointer select-none group transition-all shadow-sm ${
                    copied
                      ? 'border-emerald-400 dark:border-emerald-500'
                      : 'border-slate-300 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500'
                  }`}
                >
                  <div className="flex items-center gap-2 text-slate-800 dark:text-slate-200 overflow-x-auto">
                    <span className="text-indigo-600 dark:text-indigo-400 select-none font-bold">$</span>
                    <span className="text-slate-900 dark:text-slate-100 font-mono text-[11px] font-semibold">{command}</span>
                  </div>
                  <button
                    type="button"
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-white transition-colors shrink-0 ml-2"
                  >
                    <AnimatePresence mode="wait" initial={false}>
                      <motion.span
                        key={copied ? 'check' : 'copy'}
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ duration: 0.15 }}
                        className="block"
                      >
                        {copied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                      </motion.span>
                    </AnimatePresence>
                  </button>
                </div>

                <div className="mt-3 flex items-center justify-between text-[10px] text-slate-500 pt-1">
                  <span>Template: Next.js + Tailwind</span>
                  <AnimatePresence>
                    {copied && (
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-emerald-600 dark:text-emerald-400 font-bold"
                      >
                        Copied to clipboard!
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

              </div>
            </motion.div>

          </div>

        </motion.div>

      </div>
    </section>
  )
}
