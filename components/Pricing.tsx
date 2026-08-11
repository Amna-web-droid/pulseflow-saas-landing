'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Zap, Sparkles } from 'lucide-react'

const PLANS = [
  {
    id: 'developer',
    name: 'Developer',
    desc: 'For solo devs and side projects building prototypes.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    features: [
      'Up to 3 active agent workflows',
      '1,000 edge executions/mo',
      'Community Discord support',
      'Standard latency (<50ms)',
    ],
    cta: 'Start Free',
  },
  {
    id: 'pro',
    name: 'Pro Engine',
    desc: 'For high-growth teams scaling production workflows.',
    monthlyPrice: 29,
    yearlyPrice: 24,
    features: [
      'Unlimited active agent workflows',
      '100,000 edge executions/mo',
      'Custom LLM API key integration',
      'Sub-10ms ultra-low latency',
      'SOC-2 security guardrails',
      'Priority email support',
    ],
    cta: 'Upgrade to Pro',
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    desc: 'Dedicated infrastructure with custom SLA guarantees.',
    monthlyPrice: 99,
    yearlyPrice: 85,
    features: [
      'Custom monthly execution limits',
      'Dedicated Wasm edge nodes',
      'On-premise deployment option',
      'Dedicated Solutions Architect',
      '24/7 Phone & Slack support',
    ],
    cta: 'Contact Sales',
  },
]

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(true)
  // Default selected plan 'pro' rakha hai
  const [selectedPlan, setSelectedPlan] = useState('pro')

  return (
    <section id="pricing" className="py-24 bg-slate-50 dark:bg-slate-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase">
            // Simple Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-2 tracking-tight">
            Transparent plans for developers.
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 mt-3">
            Click on any plan card below to select your architecture tier.
          </p>

          {/* Monthly / Yearly Toggle Switch */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <span className={`text-xs font-mono ${!isYearly ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className="w-12 h-6.5 rounded-full bg-slate-200 dark:bg-slate-800 p-1 relative transition-colors focus:outline-none cursor-pointer"
            >
              <motion.div
                animate={{ x: isYearly ? 22 : 0 }}
                transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                className="w-4.5 h-4.5 rounded-full bg-indigo-600 shadow-sm"
              />
            </button>
            <span className={`text-xs font-mono flex items-center gap-1.5 ${isYearly ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-500'}`}>
              Yearly
              <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px] font-bold">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {PLANS.map((plan) => {
            const price = isYearly ? plan.yearlyPrice : plan.monthlyPrice
            const isSelected = selectedPlan === plan.id

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedPlan(plan.id)}
                className={`relative rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer select-none active:scale-[0.99] ${
                  isSelected
                    ? 'bg-white dark:bg-slate-900 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/15 ring-4 ring-indigo-500/10 scale-100 md:-translate-y-2'
                    : 'bg-white/60 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                }`}
              >
                {/* Active / Most Popular Badge */}
                {isSelected && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-indigo-600 text-white text-[11px] font-mono font-bold tracking-wider uppercase shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Selected Plan
                  </div>
                )}

                <div>
                  {/* Card Title & Desc */}
                  <div className="mb-6 pt-2">
                    <h3 className={`text-lg font-bold mb-1 transition-colors ${
                      isSelected ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'
                    }`}>
                      {plan.name}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed min-h-[32px]">
                      {plan.desc}
                    </p>
                  </div>

                  {/* Price Display */}
                  <div className="mb-6 pb-6 border-b border-slate-100 dark:border-slate-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900 dark:text-white">
                        ${price}
                      </span>
                      <span className="text-xs font-mono text-slate-500">/month</span>
                    </div>
                    {isYearly && price > 0 && (
                      <span className="text-[10px] font-mono text-slate-400 block mt-1">
                        Billed annually (${price * 12}/yr)
                      </span>
                    )}
                  </div>

                  {/* Features List */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-300">
                        <Check className={`w-4 h-4 shrink-0 mt-0.5 ${isSelected ? 'text-indigo-500' : 'text-slate-400'}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation() // Prevents trigger overlap
                    setSelectedPlan(plan.id)
                  }}
                  className={`w-full py-3 rounded-xl font-semibold text-xs transition-all text-center flex items-center justify-center gap-2 cursor-pointer ${
                    isSelected
                      ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/25'
                      : 'bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white'
                  }`}
                >
                  <Zap className="w-3.5 h-3.5" />
                  <span>{plan.cta}</span>
                </button>

              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}