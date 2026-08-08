'use client'

import Image from 'next/image'
import { ArrowRight, Clock, ShieldCheck, Tag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { scrollToId } from '@/lib/format'

const TRUST_PILLS = [
  { icon: Tag, label: 'All-inclusive pricing' },
  { icon: Clock, label: 'Next-day installation' },
  { icon: ShieldCheck, label: '10-year warranty' },
]

export function HeroSection() {
  return (
    <section
      id="systems"
      className="relative overflow-hidden bg-secondary pt-28 pb-16 sm:pt-32 lg:pb-24"
    >
      {/* Soft background image */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/images/hero-hvac-technician.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-[0.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-secondary via-secondary/60 to-secondary" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
          {/* Copy - company introduction */}
          <div className="max-w-xl">
            <Reveal delay={80}>
              <h1 className="text-balance text-left text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Heating &amp; cooling, expertly installed as soon as tomorrow.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-5 text-left text-pretty text-lg leading-relaxed text-muted-foreground">
                NextDay HVAC is a fully licensed and insured installation
                service. Our trained, certified local crews handle everything
                from sizing and permits to installation and old-unit removal,
                all with upfront pricing and no pushy sales visits.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => scrollToId('pricing')}
                  className="gap-2 bg-orange px-7 text-base font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md"
                >
                  Book your installation <ArrowRight className="size-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => scrollToId('configurator')}
                  className="border-brand/20 px-7 text-base font-semibold text-foreground hover:bg-background"
                >
                  See how it works
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

          {/* Visual - company showcase */}
          <Reveal delay={200} direction="up">
            <div className="relative">
              <div className="overflow-hidden rounded-3xl border border-brand/10 shadow-xl">
                <Image
                  src="/images/hero-hvac-technician.png"
                  alt="HVAC technician installing a unit"
                  width={720}
                  height={560}
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Floating rating card */}
              <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-lg backdrop-blur sm:left-8">
                <div
                  className="flex items-center gap-0.5"
                  aria-label="4.9 out of 5 stars"
                >
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-orange text-orange"
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="text-sm font-bold text-foreground">4.9 rating</p>
                  <p className="text-xs text-muted-foreground">
                    2,800+ homes serviced
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
