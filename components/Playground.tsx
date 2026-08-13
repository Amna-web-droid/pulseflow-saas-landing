'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Play, RefreshCw, Cpu } from 'lucide-react'

const MOCK_RESPONSES = [
  "✔ Route selected: Anthropic Claude 3.5 Sonnet\n✔ Latency: 4.2ms | Cost: $0.0002\n\nResponse: 'Workflow execution complete. All 3 edge nodes synchronized successfully.'",
  "✔ Route selected: OpenAI GPT-4o (Fallback)\n✔ Latency: 8.1ms | Cost: $0.0005\n\nResponse: 'Entity extractions parsed into JSON schema. Database upsert executed.'",
  "✔ Route selected: Local Llama 3 Edge\n✔ Latency: 2.1ms | Cost: $0.0000\n\nResponse: 'Guardrails verified: No PII detected. Prompt executed cleanly.'",
]

export default function Playground() {
  const [prompt, setPrompt] = useState('Extract user details and trigger webhook')
  const [response, setResponse] = useState(MOCK_RESPONSES[0])
  const [loading, setLoading] = useState(false)
  const [runCount, setRunCount] = useState(0)

  const handleRun = () => {
    setLoading(true)
    setTimeout(() => {
      const randomRes = MOCK_RESPONSES[Math.floor(Math.random() * MOCK_RESPONSES.length)]
      setResponse(randomRes)
      setLoading(false)
      setRunCount((c) => c + 1)
    }, 600)
  }

  return (
    <section className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto px-4 relative z-10"
      >

        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-3">
            <Terminal className="w-3.5 h-3.5" />
            <span>Live Interactive Sandbox</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-2">
            Test the execution engine
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Simulate dynamic LLM routing and fallback latency right from your browser.
          </p>
        </div>

        {/* Playground Box */}
        <div className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950 p-5 sm:p-7 shadow-2xl transition-colors">

          <div className="flex flex-col gap-4">
            {/* Input Line */}
            <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200 dark:border-white/10 focus-within:border-indigo-500 focus-within:ring-2 focus-within:ring-indigo-500/20 transition-all">
              <span className="text-xs font-mono text-indigo-500 font-bold px-2">Prompt &gt;</span>
              <input
                type="text"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full bg-transparent text-xs sm:text-sm text-slate-900 dark:text-white focus:outline-none font-mono"
              />
              <button
                onClick={handleRun}
                disabled={loading}
                className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg text-xs font-semibold shrink-0 transition-all disabled:opacity-50 active:scale-95 cursor-pointer"
              >
                {loading ? (
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                ) : (
                  <Play className="w-3.5 h-3.5 fill-current" />
                )}
                <span>Run</span>
              </button>
            </div>

            {/* Output Screen */}
            <div className="p-4 rounded-xl bg-slate-950 text-emerald-400 font-mono text-xs border border-slate-800 min-h-[110px] flex flex-col justify-between">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-[10px] text-slate-500">
                <span className="flex items-center gap-1"><Cpu className="w-3 h-3 text-indigo-400" /> Pipeline Terminal</span>
                <span>{loading ? 'Status: Running' : 'Status: Ready'}</span>
              </div>
              <AnimatePresence mode="wait">
                <motion.pre
                  key={loading ? 'loading' : runCount}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  className="whitespace-pre-wrap font-mono leading-relaxed text-slate-300 text-[11px]"
                >
                  {loading ? 'Routing query across edge LLM nodes...' : response}
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>

        </div>

      </motion.div>
    </section>
  )
}
