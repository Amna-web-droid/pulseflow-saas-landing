'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, CheckCircle2, Code, Sliders, Rocket, Play } from 'lucide-react'

const STEPS = [
  {
    number: '01',
    icon: Code,
    title: 'Connect Your Data Sources',
    description: 'Plug in your PostgreSQL DB, Webhooks, or REST APIs with a single line of config.',
    codeSnippet: `import { PulseFlow } from '@pulseflow/sdk'

const app = new PulseFlow({
  apiKey: process.env.PULSE_KEY,
  environment: 'production'
})`,
  },
  {
    number: '02',
    icon: Sliders,
    title: 'Configure LLM Logic & Prompts',
    description: 'Visually drag models like Claude 3.5 or GPT-4o, set custom fallbacks and retry mechanisms.',
    codeSnippet: `const pipeline = app.createPipeline('user-onboarding')
  .addModel('anthropic/claude-3-5-sonnet')
  .setFallback('openai/gpt-4o')
  .setTemperature(0.2)`,
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Deploy to Edge in 1-Click',
    description: 'Ship to production instantly with sub-10ms global latency and real-time observability.',
    codeSnippet: `// Terminal Execution
$ pulseflow deploy --prod
✔ Pipeline validated
✔ Deployed to 280+ edge locations in 1.4s`,
  },
]

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <section id="how-it-works" className="py-28 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-4 backdrop-blur-md"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Interactive Workflow</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-bold tracking-tight text-slate-900 dark:text-white mb-4"
          >
            How it works in <span className="pro-gradient-text">real time</span>
          </motion.h2>
        </div>

        {/* Interactive Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left Navigation — subtle fade-in on scroll, consistent with other sections */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            {STEPS.map((step, index) => {
              const Icon = step.icon
              const isActive = activeStep === index

              return (
                <motion.button
                  key={step.number}
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-left p-6 rounded-2xl border transition-all duration-300 relative ${
                    isActive
                      ? 'bg-white/95 dark:bg-slate-950/95 border-indigo-500 shadow-xl shadow-indigo-500/10'
                      : 'bg-white/40 dark:bg-white/[0.02] border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <span className={`font-mono text-xs font-bold px-2.5 py-1 rounded-lg transition-colors ${
                      isActive 
                        ? 'bg-indigo-600 text-white' 
                        : 'bg-slate-200/70 dark:bg-white/10 text-slate-600 dark:text-slate-400'
                    }`}>
                      {step.number}
                    </span>

                    <div className="flex-1">
                      <h3 className={`text-base font-semibold mb-1 flex items-center gap-2 ${
                        isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'
                      }`}>
                        <Icon className="w-4 h-4" />
                        {step.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </motion.button>
              )
            })}
          </motion.div>

          {/* Right Column Terminal — subtle fade-in on scroll, consistent with other sections */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-950 p-6 shadow-2xl font-mono text-xs text-left relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="ml-2 text-slate-400 text-[11px]">
                    pipeline_step_{STEPS[activeStep].number}.ts
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Interactive Engine</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeStep}
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.25 }}
                  className="p-5 rounded-xl bg-slate-950 text-indigo-300 overflow-x-auto leading-relaxed border border-slate-800/80 shadow-inner"
                >
                  <code>{STEPS[activeStep].codeSnippet}</code>
                </motion.pre>
              </AnimatePresence>

              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500">
                <span className="flex items-center gap-1.5"><Play className="w-3 h-3 text-indigo-400" /> Live Execution</span>
                <span>Sub-10ms Edge Runtime</span>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  )
}
