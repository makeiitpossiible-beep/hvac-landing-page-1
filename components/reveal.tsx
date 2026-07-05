'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

interface RevealProps {
  children: React.ReactNode
  className?: string
  /** Delay in ms before the reveal animation starts. */
  delay?: number
  /** Direction the element travels in from. */
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  /** Render as a different element if needed (defaults to div). */
  as?: 'div' | 'section' | 'li' | 'span'
}

const HIDDEN: Record<NonNullable<RevealProps['direction']>, string> = {
  up: 'translate-y-6',
  down: '-translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  none: '',
}

/**
 * Lightweight scroll-reveal wrapper built on IntersectionObserver.
 * Reusable across every section without requiring an animation library.
 */
export function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [])

  const Tag = as as 'div'

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform motion-reduce:transition-none motion-reduce:transform-none',
        visible
          ? 'translate-x-0 translate-y-0 opacity-100'
          : cn('opacity-0', HIDDEN[direction]),
        className,
      )}
    >
      {children}
    </Tag>
  )
}
