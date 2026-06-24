'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { TestimonialCard } from '@/components/testimonials/testimonial-card'
import type { Testimonial } from '@/lib/constants'

const GAP = 24 // matches gap-6

interface TestimonialsCarouselProps {
  testimonials: Testimonial[]
}

export function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0)

  const updateState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setCanPrev(scrollLeft > 8)
    setCanNext(scrollLeft < scrollWidth - clientWidth - 8)

    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + GAP : clientWidth
    setActiveIndex(Math.round(scrollLeft / step))
  }, [])

  useEffect(() => {
    updateState()
    const el = scrollRef.current
    if (!el) return
    window.addEventListener('resize', updateState)
    return () => window.removeEventListener('resize', updateState)
  }, [updateState])

  const scrollByCards = (direction: 1 | -1) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const amount = card ? card.offsetWidth + GAP : el.clientWidth * 0.8
    el.scrollBy({ left: direction * amount, behavior: 'smooth' })
  }

  const scrollToIndex = (index: number) => {
    const el = scrollRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>('[data-card]')
    const step = card ? card.offsetWidth + GAP : el.clientWidth
    el.scrollTo({ left: index * step, behavior: 'smooth' })
  }

  return (
    <div
      className="relative"
      role="region"
      aria-roledescription="carousel"
      aria-label="Customer reviews"
    >
      <div
        ref={scrollRef}
        onScroll={updateState}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            data-card
            className="w-[85%] shrink-0 snap-start sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
          >
            <TestimonialCard testimonial={testimonial} />
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          onClick={() => scrollByCards(-1)}
          disabled={!canPrev}
          aria-label="Previous reviews"
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-brand-foreground transition-all hover:border-orange-light hover:text-orange-light disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft className="size-5" aria-hidden="true" />
        </button>

        <div className="flex items-center gap-2" role="tablist">
          {testimonials.map((testimonial, i) => (
            <button
              key={testimonial.id}
              type="button"
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to review ${i + 1}`}
              aria-selected={i === activeIndex}
              className={cn(
                'h-2 rounded-full transition-all',
                i === activeIndex
                  ? 'w-6 bg-orange-light'
                  : 'w-2 bg-white/25 hover:bg-white/40',
              )}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => scrollByCards(1)}
          disabled={!canNext}
          aria-label="Next reviews"
          className="flex size-10 items-center justify-center rounded-full border border-white/20 text-brand-foreground transition-all hover:border-orange-light hover:text-orange-light disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight className="size-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}
