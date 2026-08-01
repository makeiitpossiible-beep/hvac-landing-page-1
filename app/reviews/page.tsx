import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { StatsBar } from '@/components/testimonials/stats-bar'
import { ReviewsGrid } from '@/components/reviews/reviews-grid'
import { REVIEWS } from '@/lib/reviews-data'

export const metadata: Metadata = {
  title: 'Customer Reviews | NextDay HVAC',
  description:
    'Read verified reviews from thousands of homeowners who chose NextDay HVAC for fast, transparent, and professional heating and cooling installation.',
}

export default function ReviewsPage() {
  return (
    <main className="flex-1 pt-16">
      {/* Header */}
      <section className="border-b border-border bg-brand-tint py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wide text-orange">
              Real results
            </span>
            <h1 className="mt-3 text-balance text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
              Homeowners cooled down fast and saved
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
              Thousands of installs, measured by speed, savings, and
              satisfaction. Here is what our customers have to say.
            </p>
          </div>

          <div className="mt-10">
            <StatsBar />
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="bg-background py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ReviewsGrid reviews={REVIEWS} />
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border bg-secondary py-14 lg:py-20">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-balance text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Ready to join thousands of comfortable homeowners?
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-pretty text-base leading-relaxed text-muted-foreground">
            Upfront pricing, certified crews, and next-day installation. Book in
            minutes.
          </p>
          <div className="mt-7 flex justify-center">
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
          </div>
        </div>
      </section>
    </main>
  )
}
