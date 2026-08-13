'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight } from 'lucide-react'

const DISMISS_KEY = 'pulseflow-announcement-dismissed'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Only show the bar if the user hasn't dismissed it before
  useEffect(() => {
    setMounted(true)
    const dismissed = localStorage.getItem(DISMISS_KEY)
    if (!dismissed) setVisible(true)
  }, [])

  const handleClose = () => {
    setVisible(false)
    localStorage.setItem(DISMISS_KEY, 'true')
  }

  // Avoid a flash of content before we've checked localStorage
  if (!mounted) return null

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="overflow-hidden"
        >
          <div className="bg-indigo-600 text-white text-xs py-2 pl-4 pr-10 relative z-50 flex items-center justify-center font-mono">
            <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
              <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider shrink-0">
                New
              </span>
              <span className="truncate">
                PulseFlow v2.0 Released: Real-time Edge Streaming & Multi-LLM Routing
              </span>
              <a
                href="#features"
                className="underline underline-offset-4 hover:text-indigo-200 inline-flex items-center gap-1 font-semibold ml-1 shrink-0"
              >
                <span>Read docs</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>

            <button
              onClick={handleClose}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-lg transition-colors"
              aria-label="Close banner"
            >
              <X className="w-3.5 h-3.5 text-white/80" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
