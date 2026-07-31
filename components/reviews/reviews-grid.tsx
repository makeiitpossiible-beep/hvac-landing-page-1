'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import type { Testimonial } from '@/lib/constants'

const PAGE_SIZE = 6

export function ReviewsGrid({ reviews }: { reviews: Testimonial[] }) {
  const [visible, setVisible] = useState(PAGE_SIZE)
  const shown = reviews.slice(0, visible)
  const hasMore = visible < reviews.length

  return (
    <div>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((review) => (
          <li key={review.id} className="h-full">
            <TestimonialCard testimonial={review} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-10 flex flex-col items-center gap-3">
          <Button
            size="lg"
            variant="outline"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="border-brand/20 px-7 font-semibold text-foreground hover:bg-secondary"
          >
            Load more reviews
          </Button>
          <p className="text-xs text-muted-foreground">
            Showing {shown.length} of {reviews.length} reviews
          </p>
        </div>
      )}
    </div>
  )
}
