// src/app/page.tsx
import HeroSection from '@/app/components/Hero'
import StatsSection from '@/app/components/StatsSection'
import ServicesSection from '@/app/components/ServicesSection'
import WhyChooseSection from '@/app/components/WhyChooseSection'
import CTASection from '@/app/components/CTASection'
import IntroSection from './components/IntroSection'
export const metadata = {
  title: 'Al Mazaya Medical Complex | Healthcare in Dammam',
  description: 'Experience world-class healthcare with our expert doctors, modern facilities, and 24/7 emergency services.',
  keywords: 'hospital, medical, healthcare, doctors, emergency, Dammam',
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <IntroSection/>
      <ServicesSection />
      <WhyChooseSection />
      <CTASection />
    </>
  )
}