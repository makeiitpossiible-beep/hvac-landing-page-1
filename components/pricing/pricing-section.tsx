'use client'

import { useState } from 'react'
import { Reveal } from '@/components/reveal'
import { PricingCard } from '@/components/pricing/pricing-card'
import { CheckoutModal } from '@/components/modals/checkout-modal'
import { PRICING_TIERS, type PricingTier } from '@/lib/constants'

export function PricingSection() {
  const [selected, setSelected] = useState<PricingTier | null>(null)
  const [open, setOpen] = useState(false)

  const handleSelect = (tier: PricingTier) => {
    setSelected(tier)
    setOpen(true)
  }

  return (
    <section id="pricing" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            Transparent pricing
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            One price. Fully installed. No surprises.
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground text-center">
            Every tier includes equipment, certified labor, permits, and old-unit
            removal. Choose the efficiency that fits your home and budget.
          </p>
        </Reveal>

        <div className="mt-12 grid items-stretch gap-6 md:grid-cols-3 lg:gap-8">
          {PRICING_TIERS.map((tier, i) => (
            <Reveal key={tier.id} delay={i * 120} className="h-full">
              <PricingCard tier={tier} onSelect={handleSelect} />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Not sure which to pick?{' '}
            <button
              onClick={() =>
                document
                  .getElementById('configurator')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }
              className="font-semibold text-orange underline-offset-4 hover:underline"
            >
              Use the system configurator
            </button>{' '}
            to get a tailored recommendation.
          </p>
        </Reveal>
      </div>

      <CheckoutModal
        tier={selected}
        open={open}
        onClose={() => setOpen(false)}
      />
    </section>
  )
}
