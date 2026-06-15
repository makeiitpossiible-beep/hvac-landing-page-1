import { Star, BadgeCheck } from 'lucide-react'
import type { Testimonial } from '@/lib/constants'

interface TestimonialCardProps {
  testimonial: Testimonial
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div
        className="flex items-center gap-0.5"
        aria-label={`${testimonial.rating} out of 5 stars`}
      >
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star
            key={i}
            className="size-4 fill-orange text-orange"
            aria-hidden="true"
          />
        ))}
      </div>

      <blockquote className="mt-4 flex-1">
        <p className="text-base font-semibold text-foreground">
          {testimonial.headline}
        </p>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          “{testimonial.body}”
        </p>
      </blockquote>

      <figcaption className="mt-5 flex items-center justify-between border-t border-border pt-4">
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-success-soft px-2.5 py-1 text-xs font-semibold text-success">
          <BadgeCheck className="size-3.5" aria-hidden="true" />
          {testimonial.badge}
        </span>
      </figcaption>
    </figure>
  )
}
