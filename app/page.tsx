import ClientEffects from '@/components/ClientEffects'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustStrip from '@/components/TrustStrip'
import Benefits from '@/components/Benefits'
import HowItWorks from '@/components/HowItWorks'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />
      <Hero />
      <TrustStrip />
      <Benefits />
      <HowItWorks />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </>
  )
}
