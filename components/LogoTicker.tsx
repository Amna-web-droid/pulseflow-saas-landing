'use client'

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
  return (
    <section className="py-12 border-y border-slate-200/80 dark:border-white/10 bg-slate-50/50 dark:bg-[#070A11]/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 mb-6 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-slate-400 dark:text-slate-500 font-semibold">
          Powering next-gen AI teams at
        </p>
      </div>

      {/* Infinite X-Axis Scroll Track */}
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
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