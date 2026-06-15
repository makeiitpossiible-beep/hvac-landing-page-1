'use client'

import { useMemo, useState } from 'react'
import { Gauge, Zap, Home, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { formatCurrency, scrollToId } from '@/lib/format'
import {
  CLIMATE_ZONES,
  CONFIG_SYSTEM_TYPES,
  type ClimateZone,
  type ConfigSystemType,
} from '@/lib/constants'

export function ConfiguratorSection() {
  const [sqft, setSqft] = useState(1800)
  const [climate, setClimate] = useState<ClimateZone>(CLIMATE_ZONES[0])
  const [systemType, setSystemType] = useState<ConfigSystemType>(
    CONFIG_SYSTEM_TYPES[0],
  )

  const result = useMemo(() => {
    // ~550 sq ft per ton, rounded to the nearest half-ton, clamped 1.5–5.
    const raw = (sqft / 550) * 2
    const tonnage = Math.min(5, Math.max(1.5, Math.round(raw) / 2))
    const seer =
      climate.multiplier >= 1.15 ? '18–22 SEER2' : '16–18 SEER2'
    const price = Math.round(
      (systemType.base + (tonnage - 2) * 650) * climate.multiplier,
    )
    const monthly = Math.round(price / 48)
    return { tonnage, seer, price, monthly }
  }, [sqft, climate, systemType])

  return (
    <section id="configurator" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            Build your system
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Get a tailored recommendation in seconds
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Tell us about your home and we&apos;ll size the right system and show
            your all-inclusive price instantly.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          {/* Inputs */}
          <Reveal className="lg:col-span-3" direction="left">
            <div className="space-y-8 rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
              {/* Square footage */}
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="sqft"
                    className="flex items-center gap-2 text-sm font-semibold text-foreground"
                  >
                    <Home className="size-4 text-orange" aria-hidden="true" />
                    Home size
                  </label>
                  <span className="text-sm font-bold text-foreground">
                    {sqft.toLocaleString()} sq ft
                  </span>
                </div>
                <input
                  id="sqft"
                  type="range"
                  min={600}
                  max={4000}
                  step={50}
                  value={sqft}
                  onChange={(e) => setSqft(Number(e.target.value))}
                  className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-muted accent-orange"
                  aria-valuetext={`${sqft} square feet`}
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>600</span>
                  <span>4,000+</span>
                </div>
              </div>

              {/* Climate */}
              <fieldset>
                <legend className="text-sm font-semibold text-foreground">
                  Regional climate
                </legend>
                <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {CLIMATE_ZONES.map((zone) => (
                    <button
                      key={zone.id}
                      onClick={() => setClimate(zone)}
                      className={cn(
                        'rounded-lg border px-3 py-2.5 text-sm font-medium transition-all',
                        climate.id === zone.id
                          ? 'border-orange bg-orange/5 text-foreground ring-1 ring-orange'
                          : 'border-border text-muted-foreground hover:border-orange/40 hover:text-foreground',
                      )}
                    >
                      {zone.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              {/* System type */}
              <fieldset>
                <legend className="text-sm font-semibold text-foreground">
                  System type
                </legend>
                <div className="mt-3 grid gap-3 sm:grid-cols-3">
                  {CONFIG_SYSTEM_TYPES.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setSystemType(type)}
                      className={cn(
                        'rounded-xl border p-4 text-left transition-all',
                        systemType.id === type.id
                          ? 'border-orange bg-orange/5 ring-1 ring-orange'
                          : 'border-border hover:border-orange/40 hover:bg-muted/40',
                      )}
                    >
                      <span className="block text-sm font-semibold text-foreground">
                        {type.label}
                      </span>
                      <span className="mt-1 block text-xs leading-relaxed text-muted-foreground">
                        {type.description}
                      </span>
                    </button>
                  ))}
                </div>
              </fieldset>
            </div>
          </Reveal>

          {/* Output */}
          <Reveal className="lg:col-span-2" direction="right" delay={120}>
            <div className="flex h-full flex-col rounded-2xl border border-border bg-brand p-6 text-brand-foreground shadow-lg sm:p-8">
              <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-orange-light">
                <Sparkles className="size-3.5" aria-hidden="true" />
                Recommended for you
              </span>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <Spec
                  icon={<Gauge className="size-5" />}
                  label="System size"
                  value={`${result.tonnage} ton`}
                />
                <Spec
                  icon={<Zap className="size-5" />}
                  label="Efficiency"
                  value={result.seer}
                />
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-brand-foreground/70">
                  Estimated all-inclusive price
                </p>
                <p className="mt-1 text-4xl font-bold tracking-tight transition-all">
                  {formatCurrency(result.price)}
                </p>
                <p className="mt-1 text-sm font-medium text-orange-light">
                  or {formatCurrency(result.monthly)}/mo for 48 months
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-brand-foreground/60">
                A certified supervisor confirms sizing on a quick 10-minute call
                before install — adjustments are always free.
              </p>

              <Button
                size="lg"
                onClick={() => scrollToId('pricing')}
                className="mt-6 w-full bg-orange font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-orange-light"
              >
                See matching packages
              </Button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-xl bg-white/5 p-4">
      <span className="flex size-9 items-center justify-center rounded-lg bg-orange/20 text-orange-light">
        {icon}
      </span>
      <p className="mt-3 text-xs text-brand-foreground/60">{label}</p>
      <p className="text-lg font-bold">{value}</p>
    </div>
  )
}
