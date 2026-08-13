import './globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '@/components/ThemeProvider'
import BackgroundGrid from '@/components/BackgroundGrid'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'PulseFlow — AI Workflow & Automation',
  description: 'High converting, ultra-fast modern SaaS landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* Fixed: this used to be `bg-slate-950 dark:bg-[#0B0F17]`, which forced
          a near-black background in LIGHT mode too (slate-950 has no `dark:`
          prefix, so it always applied). That's the root cause of the
          mismatched/dark-looking backgrounds. Now it correctly flips between
          white and slate-950 based on theme. */}
      <body className={`${inter.className} bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 min-h-screen transition-colors duration-300`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Single shared grid background sits behind every section */}
          <BackgroundGrid />
          <div className="relative z-10">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
