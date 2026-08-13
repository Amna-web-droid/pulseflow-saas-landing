'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const COMPANIES = [
  'ACME Corp',
  'Vercel Labs',
  'Supabase',
  'Prisma',
  'Linear Tech',
  'Resend',
  'Clerk Auth',
  'Neon Database',
]

export default function LogoTicker() {
  const [isPaused, setIsPaused] = useState(false)

  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-white/10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto px-4 mb-6 text-center"
      >
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Powering next-gen AI teams at
        </p>
      </motion.div>

      {/* Infinite X-Axis Scroll Track — pauses on hover so names stay readable */}
      <div
        className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{ x: isPaused ? undefined : ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{ animationPlayState: isPaused ? 'paused' : 'running' }}
          className="flex flex-nowrap gap-16 pr-16 items-center whitespace-nowrap"
        >
          {/* Duplicate array for seamless infinite looping */}
          {[...COMPANIES, ...COMPANIES].map((company, index) => (
            <span
              key={index}
              className="text-base sm:text-lg font-bold font-mono tracking-tight text-slate-400 dark:text-slate-600 hover:text-slate-800 dark:hover:text-slate-300 transition-colors cursor-pointer select-none"
            >
              {company}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
