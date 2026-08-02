import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { AboutHero } from '@/components/about/about-hero'
import { AboutMission } from '@/components/about/about-mission'
import { BrandsBanner } from '@/components/features/brands-banner'
import { FeaturesBanner } from '@/components/features/features-banner'
import { StatsBar } from '@/components/testimonials/stats-bar'

export const metadata: Metadata = {
  title: 'About NextDay HVAC | Transparent, Next-Day Installation',
  description:
    'Learn how NextDay HVAC makes heating and cooling installation fast, honest, and stress-free with upfront pricing, certified local crews, and next-day service.',
}

export default function AboutPage() {
  return (
    <main className="flex-1 pt-16">
      <AboutHero />

      <AboutMission />

      {/* Stats / trust bar */}
      <section className="border-y border-border bg-brand-tint py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange">
              By the numbers
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Measured by speed, savings, and satisfaction
            </h2>
          </div>
          <div className="mt-10">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Brands / partners */}
      <BrandsBanner />

      {/* Certifications / guarantees */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange">
              Our guarantees
            </span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-brand sm:text-4xl">
              Every install is backed end to end
            </h2>
          </div>
        </div>
        <div className="mt-4">
          <FeaturesBanner />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready for comfort without the runaround?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Upfront pricing, certified crews, and next-day installation. See how
            it works or book in minutes.
          </p>
          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/#pricing"
              className={cn(
                buttonVariants({ size: 'lg' }),
                'gap-2 bg-orange px-7 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md',
              )}
            >
              Book your installation
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/#configurator"
              className={cn(
                buttonVariants({ variant: 'outline', size: 'lg' }),
                'border-brand/20 px-7 font-semibold text-foreground hover:bg-background',
              )}
            >
              See how it works
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
