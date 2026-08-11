import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import Features from '@/components/Features'
import Playground from '@/components/Playground'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-slate-100 transition-colors duration-300 overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoTicker />
      <Features />
      <Playground />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}