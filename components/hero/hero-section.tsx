'use client'

import Image from 'next/image'
import { ArrowRight, Clock, ShieldCheck, Tag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { SystemCard } from '@/components/hero/system-card'
import { SYSTEM_OPTIONS } from '@/lib/constants'
import { getNextDayLabel, scrollToId } from '@/lib/format'
import { useEffect, useState } from 'react'

const TRUST_PILLS = [
  { icon: Tag, label: 'All-inclusive pricing' },
  { icon: Clock, label: 'Next-day installation' },
  { icon: ShieldCheck, label: '10-year warranty' },
]

export function HeroSection() {
  const [nextDay, setNextDay] = useState('')
  useEffect(() => setNextDay(getNextDayLabel()), [])

  return (
    <section
      id="systems"
      className="relative overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* Soft background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero-home.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/60 to-secondary" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* Copy */}
          <div className="max-w-xl">
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-success/30 bg-success-soft px-3 py-1 text-xs font-semibold text-success">
                <span className="size-2 animate-soft-pulse rounded-full bg-success" />
                Installing as soon as {nextDay || 'tomorrow'}
              </span>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Upfront pricing. Next-day HVAC installation.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-muted-foreground">
                Skip the week-long quotes and pushy sales visits. Pick your
                system, see the all-in price, and have certified pros install it
                as early as tomorrow.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => scrollToId('pricing')}
                  className="gap-2 bg-orange px-7 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md"
                >
                  Shop Systems <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToId('configurator')}
                  className="border-brand/20 px-7 text-base font-semibold text-foreground hover:bg-background"
                >
                  Configure System
                </Button>
              </div>
            </Reveal>

            <Reveal delay={320}>
              <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
                {TRUST_PILLS.map((pill) => (
                  <li
                    key={pill.label}
                    className="flex items-center gap-2 text-sm font-medium text-foreground/80"
                  >
                    <pill.icon className="size-4 text-orange" aria-hidden="true" />
                    {pill.label}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* System cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {SYSTEM_OPTIONS.map((system, i) => (
              <Reveal key={system.id} delay={200 + i * 120} direction="up">
                <SystemCard system={system} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
