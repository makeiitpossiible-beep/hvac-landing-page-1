'use client'

import { Reveal } from '@/components/reveal'
import { StatsBar } from '@/components/testimonials/stats-bar'
import { TestimonialsCarousel } from '@/components/testimonials/testimonials-carousel'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-brand-dark py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange-light">
            Real results
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-brand-foreground sm:text-4xl">
            Homeowners cooled down fast and saved
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-brand-foreground/70 text-center">
            Thousands of installs, measured by speed, savings, and satisfaction.
          </p>
        </Reveal>

        <div className="mt-10">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <StatsBar />
        </div>
      </div>
    </section>
  )
}
