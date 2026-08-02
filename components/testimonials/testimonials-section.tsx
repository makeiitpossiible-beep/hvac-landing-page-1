'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { StatsBar } from '@/components/testimonials/stats-bar'
import { TestimonialsCarousel } from '@/components/testimonials/testimonials-carousel'
import { TESTIMONIALS } from '@/lib/constants'

export function TestimonialsSection() {
  return (
    <section id="reviews" className="bg-brand-tint py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            Real results
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-brand sm:text-4xl">
            Homeowners cooled down fast and saved
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground text-center">
            Thousands of installs, measured by speed, savings, and satisfaction.
          </p>
        </Reveal>

        <div className="mt-10">
          <StatsBar />
        </div>

        <div className="mt-12 border-t border-brand/10 pt-10">
          <TestimonialsCarousel testimonials={TESTIMONIALS} />

          <div className="mt-8 flex justify-center">
            <Link
              href="/reviews"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-orange underline-offset-4 transition-colors hover:text-orange-dark hover:underline"
            >
              See all reviews
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
