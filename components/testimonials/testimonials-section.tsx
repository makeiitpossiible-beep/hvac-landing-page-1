'use client'

import { Reveal } from '@/components/reveal'
import { StatsBar } from '@/components/testimonials/stats-bar'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
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
            Homeowners cooled down fast — and saved
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-brand-foreground/70">
            Thousands of installs, measured by speed, savings, and satisfaction.
          </p>
        </Reveal>

        <div className="mt-12">
          <StatsBar />
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((testimonial, i) => (
            <Reveal key={testimonial.id} delay={i * 120} className="h-full">
              <TestimonialCard testimonial={testimonial} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
