'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    question: 'How does PulseFlow handle latency for real-time applications?',
    answer:
      'PulseFlow runs on global edge runtime nodes (Vercel & Cloudflare). API proxies route requests directly to the nearest LLM provider endpoint with less than 10ms execution overhead.',
  },
  {
    question: 'Can I connect local or open-source models like Llama 3?',
    answer:
      'Yes! PulseFlow supports custom REST endpoints, Ollama, vLLM, OpenAI, Anthropic, and Hugging Face pipelines seamlessly with unified API key management.',
  },
  {
    question: 'What security guardrails are active by default?',
    answer:
      'All incoming and outgoing prompts pass through automatic PII redaction, prompt-injection detectors, and strict rate-limiters before hitting your core API.',
  },
  {
    question: 'Can I self-host PulseFlow on my own Cloud infrastructure?',
    answer:
      'Our Enterprise tier includes a Docker/Kubernetes helm chart allowing you to run the full workflow orchestration engine inside your AWS/GCP VPC.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/20 text-xs font-mono mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white mb-3">
            Frequently Asked Questions
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            Everything you need to know about PulseFlow architecture and pricing.
          </p>
        </div>

        {/* Clean Accordion */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#070A11]/80 backdrop-blur-md overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                >
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-indigo-500' : ''
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-white/5">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}