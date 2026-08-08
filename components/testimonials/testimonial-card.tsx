import Image from 'next/image'
import { Star, BadgeCheck } from 'lucide-react'
import type { Testimonial } from '@/lib/constants'

interface TestimonialCardProps {
  testimonial: Testimonial
}

/** Derives up to two uppercase initials from an author name. */
function getInitials(name: string): string {
  return name
    .replace(/[^a-zA-Z\s]/g, '')
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')
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
        <p className="text-base text-left font-semibold text-foreground">
          {testimonial.headline}
        </p>
        <p className="mt-2 text-sm text-left leading-relaxed text-muted-foreground">
          “{testimonial.body}”
        </p>
      </blockquote>

      <figcaption className="mt-5 flex items-center gap-3 border-t border-border pt-4">
        {testimonial.image ? (
          <Image
            src={testimonial.image || '/placeholder.svg'}
            alt={`Portrait of ${testimonial.author}`}
            width={48}
            height={48}
            className="size-12 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="flex size-12 shrink-0 items-center justify-center rounded-full bg-brand-tint text-sm font-bold text-brand"
          >
            {getInitials(testimonial.author)}
          </span>
        )}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-semibold text-foreground">
            {testimonial.author}
          </p>
          <p className="truncate text-xs text-muted-foreground">
            {testimonial.location}
          </p>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 text-xs font-semibold text-success">
          <BadgeCheck className="size-3.5" aria-hidden="true" />
          <span className="sr-only sm:not-sr-only">{testimonial.badge}</span>
        </span>
      </figcaption>
    </figure>
  )
}
