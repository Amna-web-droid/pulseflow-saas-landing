'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Zap, Cpu, Database, CheckCircle2, Command } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300 selection:bg-indigo-500 selection:text-white">
      
      {/* Background Structural Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ASYMMETRICAL TWO-COLUMN LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Human-Engineered Typography & Action */}
          <div className="lg:col-span-5 text-left">
            
            {/* Pill Tag */}
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-md border border-slate-300 dark:border-slate-800 bg-white/80 dark:bg-slate-900/90 text-xs font-mono text-indigo-600 dark:text-indigo-400 mb-6 shadow-sm"
            >
              <Command className="w-3.5 h-3.5" />
              <span>v2.0 Architecture</span>
              <span className="text-slate-400 dark:text-slate-600">/</span>
              <span className="text-slate-600 dark:text-slate-400">Node Runtime</span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-slate-900 dark:text-white"
            >
              Build LLM pipelines <br />
              <span className="text-slate-500 dark:text-slate-400 font-normal italic">without</span> the <br />
              <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-500/40 underline-offset-8">
                spaghetti code.
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed font-normal"
            >
              Visual agent canvas built for engineers. Chain prompts, attach vector databases, and deploy sub-10ms edge endpoints in minutes.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-8"
            >
              <a
                href="#pricing"
                className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-md shadow-indigo-600/20 active:scale-95 text-center flex items-center justify-center gap-2"
              >
                <span>Deploy First Workflow</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#playground"
                className="px-6 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 font-semibold text-xs sm:text-sm transition-all active:scale-95 text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <Terminal className="w-4 h-4 text-slate-500" />
                <span>Sandbox</span>
              </a>
            </motion.div>

            {/* Tech Metrics */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-900 grid grid-cols-2 gap-4 text-left font-mono text-xs text-slate-500 dark:text-slate-400">
              <div>
                <span className="text-slate-900 dark:text-slate-200 font-bold block text-sm">&lt;12ms</span>
                Average Node Latency
              </div>
              <div>
                <span className="text-slate-900 dark:text-slate-200 font-bold block text-sm">SOC-2 Type II</span>
                Enterprise Security
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Bento Grid Showcase */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-3 rounded-2xl bg-slate-200/60 dark:bg-slate-900/60 border border-slate-300/80 dark:border-slate-800/80 backdrop-blur-xl shadow-2xl"
            >
              
              {/* BENTO CARD 1: Large Main Canvas */}
              <div className="sm:col-span-2 p-5 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 group hover:border-indigo-400 dark:hover:border-slate-700 transition-all shadow-sm">
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100 dark:border-slate-900">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-800" />
                    <span className="ml-2 font-mono text-xs text-slate-400">active_pipeline.json</span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[11px]">
                    <CheckCircle2 className="w-3 h-3" /> Executed (240ms)
                  </span>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900/40 p-4 rounded-lg border border-slate-200/80 dark:border-slate-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200">Webhook Trigger</h4>
                      <p className="text-[11px] font-mono text-slate-500">POST /v1/chat/completions</p>
                    </div>
                  </div>
                  <div className="hidden sm:block text-slate-400 dark:text-slate-700 font-mono text-xs">--------&gt;</div>
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400">
                      <Cpu className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200">Claude Sonnet 3.5</h4>
                      <p className="text-[11px] font-mono text-slate-500">Structured Output</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* BENTO CARD 2: Left Small Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 group hover:border-purple-500/50 transition-all flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-purple-500/10 text-purple-600 dark:text-purple-400 font-mono text-[10px] uppercase font-bold">
                      02 Agent Node
                    </span>
                    <Cpu className="w-4 h-4 text-purple-500 dark:text-purple-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">Reasoning Engine</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-4">
                    Context Window: 200k tokens
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>Temperature: 0.2</span>
                  <span className="text-purple-600 dark:text-purple-400 font-bold">Active</span>
                </div>
              </div>

              {/* BENTO CARD 3: Right Small Box */}
              <div className="p-4 rounded-xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 group hover:border-emerald-500/50 transition-all flex flex-col justify-between shadow-sm">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-mono text-[10px] uppercase font-bold">
                      03 Storage Node
                    </span>
                    <Database className="w-4 h-4 text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform" />
                  </div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-slate-200 mb-1">Vector DB Sync</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-mono mb-4">
                    Supabase + Pinecone Hybrid
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between font-mono text-[10px] text-slate-500">
                  <span>Upsert: 1k Embeddings</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold">Synced</span>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}