'use client'

import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/constants'

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
      {STATS.map((stat, i) => (
        <Reveal key={stat.id} delay={i * 100}>
          <div className="flex items-baseline justify-center gap-2 text-center sm:flex-col sm:items-center sm:gap-1">
            <p className="text-2xl font-bold tracking-tight text-orange">
              {stat.value}
            </p>
            <p className="text-xs leading-relaxed text-brand/70">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
