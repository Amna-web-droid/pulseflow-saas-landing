'use client'

import { useState } from 'react'
import { Sparkles, X, ArrowRight } from 'lucide-react'

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true)

  if (!visible) return null

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-700 text-white text-xs py-2 px-4 relative z-50 flex items-center justify-center font-mono">
      <div className="flex items-center gap-2 overflow-hidden whitespace-nowrap">
        <span className="bg-white/20 text-white px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider">
          New
        </span>
        <span className="truncate">
          PulseFlow v2.0 Released: Real-time Edge Streaming & Multi-LLM Routing
        </span>
        <a
          href="#features"
          className="underline underline-offset-4 hover:text-indigo-200 inline-flex items-center gap-1 font-semibold ml-1"
        >
          <span>Read docs</span>
          <ArrowRight className="w-3 h-3" />
        </a>
      </div>

      <button
        onClick={() => setVisible(false)}
        className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded-lg transition-colors"
        aria-label="Close banner"
      >
        <X className="w-3.5 h-3.5 text-white/80" />
      </button>
    </div>
  )
}