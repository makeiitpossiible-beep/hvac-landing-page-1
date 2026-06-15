import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/hero/hero-section'
import { FeaturesBanner } from '@/components/features/features-banner'
import { PricingSection } from '@/components/pricing/pricing-section'
import { ConfiguratorSection } from '@/components/configurator/configurator-section'
import { TestimonialsSection } from '@/components/testimonials/testimonials-section'
import { FaqSection } from '@/components/faq/faq-section'

export default function Page() {
  return (
    <div id="top" className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeaturesBanner />
        <PricingSection />
        <ConfiguratorSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      <Footer />
    </div>
  )
}
