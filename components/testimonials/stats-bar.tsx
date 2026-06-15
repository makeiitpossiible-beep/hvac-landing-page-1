'use client'

import { Reveal } from '@/components/reveal'
import { STATS } from '@/lib/constants'

export function StatsBar() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-6">
      {STATS.map((stat, i) => (
        <Reveal key={stat.id} delay={i * 120}>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
            <p className="text-4xl font-bold tracking-tight text-orange-light">
              {stat.value}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-brand-foreground/70">
              {stat.label}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  )
}
