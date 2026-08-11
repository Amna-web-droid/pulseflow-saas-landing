'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Cpu, ShieldCheck, Terminal, Workflow, Zap, ArrowRight } from 'lucide-react'

const FEATURES = [
  {
    id: 'visual-builder',
    title: 'Visual Workflow Canvas',
    tag: 'DRAG & DROP',
    description: 'Connect triggers, LLM prompts, and API endpoints visually. No complex async graph code required.',
    icon: Workflow,
    codeSnippet: `// Auto-generated edge handler
export default async function Pipeline() {
  const input = await getWebhookData();
  const res = await claude.predict(input);
  return await db.upsert(res);
}`,
  },
  {
    id: 'edge-latency',
    title: 'Sub-10ms Edge Deployment',
    tag: 'LATENCY',
    description: 'Pipelines compile down to WebAssembly nodes deployed directly to 300+ global edge locations.',
    icon: Zap,
    codeSnippet: `// Edge Latency Benchmark
Region: fra1 (Frankfurt)  -> 4ms
Region: iad1 (Ashburn)    -> 8ms
Status: 200 OK (Wasm Node Active)`,
  },
  {
    id: 'guardrails',
    title: 'PII & Security Guardrails',
    tag: 'ENTERPRISE',
    description: 'Automatically redact sensitive customer data, credit cards, and tokens before hitting foreign LLM providers.',
    icon: ShieldCheck,
    codeSnippet: `// Security Redaction Layer
[INPUT]: "User SSN is 000-12-3456"
[FILTER]: <REDACTED_SSN> Applied
[OUTPUT]: Safe payload dispatched to LLM`,
  },
]

export default function Features() {
  const [activeTab, setActiveTab] = useState(FEATURES[0].id)
  const currentFeature = FEATURES.find((f) => f.id === activeTab) || FEATURES[0]

  return (
    <section id="features" className="py-24 bg-slate-100 dark:bg-slate-900/50 border-y border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-xl mb-12">
          <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-semibold tracking-wider uppercase">
            // Built for Scale
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mt-2 tracking-tight">
            Engineered like a real dev tool.
          </h2>
        </div>

        {/* Interactive Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Selection List (5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon
              const isActive = activeTab === feature.id

              return (
                <div
                  key={feature.id}
                  onClick={() => setActiveTab(feature.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setActiveTab(feature.id)}
                  className={`w-full text-left p-5 rounded-xl border transition-all duration-200 flex items-start gap-4 cursor-pointer select-none active:scale-[0.98] ${
                    isActive
                      ? 'bg-white dark:bg-slate-900 border-indigo-500 dark:border-indigo-500 shadow-lg shadow-indigo-500/10 ring-2 ring-indigo-500/20'
                      : 'bg-white/40 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  <div
                    className={`p-2.5 rounded-lg border shrink-0 transition-colors ${
                      isActive
                        ? 'bg-indigo-500/10 border-indigo-500/30 text-indigo-600 dark:text-indigo-400'
                        : 'bg-slate-100 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-500'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`text-sm font-bold transition-colors ${
                        isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-900 dark:text-white'
                      }`}>
                        {feature.title}
                      </h3>
                      {isActive && <ArrowRight className="w-4 h-4 text-indigo-500 animate-pulse" />}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Right Live Visual Code Window (7 cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-slate-300 dark:border-slate-800 bg-slate-950 p-6 shadow-2xl font-mono text-xs text-slate-300 relative min-h-[280px] flex flex-col justify-between">
              
              {/* Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-slate-500">
                <div className="flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-indigo-400" />
                  <span>runtime_inspector.ts</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-400 text-[10px] font-bold uppercase tracking-wider">
                  {currentFeature.tag}
                </span>
              </div>

              {/* Code Snippet Animation */}
              <div className="py-6">
                <AnimatePresence mode="wait">
                  <motion.pre
                    key={activeTab}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.15 }}
                    className="text-emerald-400 overflow-x-auto whitespace-pre-wrap leading-relaxed"
                  >
                    <code>{currentFeature.codeSnippet}</code>
                  </motion.pre>
                </AnimatePresence>
              </div>

              {/* Status Footer */}
              <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
                <span>Compiler: v2.4 (Wasm)</span>
                <span className="text-emerald-500 font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Environment Active
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  )
}