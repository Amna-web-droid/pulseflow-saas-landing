'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react'

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
    <section id="faq" className="relative py-24 overflow-hidden">

      <div className="max-w-3xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        {/* Clean Accordion — numbered, staggered entrance */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className={`rounded-2xl border backdrop-blur-md overflow-hidden transition-colors ${
                  isOpen
                    ? 'border-indigo-300 dark:border-indigo-500/40 bg-white dark:bg-slate-950/90 shadow-lg shadow-indigo-500/5'
                    : 'border-slate-200 dark:border-white/10 bg-white/80 dark:bg-slate-950/80 hover:border-slate-300 dark:hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full grid grid-cols-[1.75rem_1fr_auto] items-start gap-3 p-6 text-left focus:outline-none cursor-pointer"
                >
                  <span
                    className={`font-mono text-xs mt-1 transition-colors ${
                      isOpen ? 'text-indigo-500' : 'text-slate-400 dark:text-slate-600'
                    }`}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                  </span>
                  <div
                    className={`shrink-0 p-1.5 rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'bg-indigo-500/10 border-indigo-500/30 rotate-180'
                        : 'border-slate-200 dark:border-white/10'
                    }`}
                  >
                    <ChevronDown
                      className={`w-4 h-4 transition-colors ${
                        isOpen ? 'text-indigo-500' : 'text-slate-400'
                      }`}
                    />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: 'easeInOut' }}
                    >
                      <div className="grid grid-cols-[1.75rem_1fr_auto] gap-3 px-6 pb-6">
                        <span />
                        <div className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed pt-4 border-t border-slate-100 dark:border-white/5">
                          {faq.answer}
                        </div>
                        <span />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* Still have questions? — contact footer, keeps visitors from bouncing */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-10 flex items-center justify-center gap-2 text-xs text-slate-500 dark:text-slate-400"
        >
          <MessageCircle className="w-3.5 h-3.5" />
          <span>
            Still have questions?{' '}
            <a href="#" className="text-indigo-600 dark:text-indigo-400 font-semibold hover:underline">
              Chat with our team
            </a>
          </span>
        </motion.div>

      </div>
    </section>
  )
}
