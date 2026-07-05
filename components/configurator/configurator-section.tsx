'use client'

import { useMemo, useState } from 'react'
import { Gauge, Zap, Home, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Reveal } from '@/components/reveal'
import { CheckoutModal } from '@/components/modals/checkout-modal'
import { formatCurrency, scrollToId } from '@/lib/format'
import {
  CLIMATE_ZONES,
  CONFIG_SYSTEM_TYPES,
  recommendTier,
  type ClimateZone,
  type ConfigSystemType,
} from '@/lib/constants'

export function ConfiguratorSection() {
  const [sqft, setSqft] = useState(1800)
  const [climate, setClimate] = useState<ClimateZone>(CLIMATE_ZONES[0])
  const [systemType, setSystemType] = useState<ConfigSystemType>(
    CONFIG_SYSTEM_TYPES[0],
  )
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  const result = useMemo(() => {
    // ~550 sq ft per ton, rounded to the nearest half-ton, clamped 1.5–5.
    const raw = (sqft / 550) * 2
    const tonnage = Math.min(5, Math.max(1.5, Math.round(raw) / 2))
    // Map the inputs to a real, bookable installation package.
    const tier = recommendTier(sqft, climate, systemType)
    return { tonnage, tier }
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
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground text-center">
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
                    {sqft.toLocaleString('en-US')} sq ft
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
                Recommended package
              </span>

              <p className="mt-4 text-2xl font-bold tracking-tight transition-all">
                {result.tier.name}
              </p>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <Spec
                  icon={<Gauge className="size-5" />}
                  label="System size"
                  value={`${result.tonnage} ton`}
                />
                <Spec
                  icon={<Zap className="size-5" />}
                  label="Efficiency"
                  value={result.tier.seer}
                />
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="text-sm text-brand-foreground/70">
                  All-inclusive price, fully installed
                </p>
                <p className="mt-1 text-4xl font-bold tracking-tight transition-all">
                  {formatCurrency(result.tier.price)}
                </p>
                <p className="mt-1 text-sm font-medium text-orange-light">
                  or {formatCurrency(result.tier.monthlyPayment)}/mo for 48 months
                </p>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-brand-foreground/60">
                A certified supervisor confirms sizing on a quick 10-minute call
                before install. Adjustments are always free.
              </p>

              <Button
                size="lg"
                onClick={() => setCheckoutOpen(true)}
                className="mt-6 w-full bg-orange font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-orange-light"
              >
                Book this installation
              </Button>

              <button
                onClick={() => scrollToId('pricing')}
                className="mt-3 text-center text-xs font-medium text-brand-foreground/70 underline-offset-4 transition-colors hover:text-brand-foreground hover:underline"
              >
                Compare all three packages
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <CheckoutModal
        tier={result.tier}
        open={checkoutOpen}
        onClose={() => setCheckoutOpen(false)}
      />
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
