'use client'

import { Check, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { formatCurrency } from '@/lib/format'
import type { PricingTier } from '@/lib/constants'

interface PricingCardProps {
  tier: PricingTier
  onSelect: (tier: PricingTier) => void
}

export function PricingCard({ tier, onSelect }: PricingCardProps) {
  return (
    <div
      className={cn(
        'relative flex h-full flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-7',
        tier.highlighted
          ? 'border-orange shadow-lg ring-1 ring-orange lg:scale-[1.03]'
          : 'border-border shadow-sm',
      )}
    >
      {tier.badge && (
        <span className="absolute -top-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-1 rounded-full bg-orange px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm">
          <Star className="size-3 fill-current" aria-hidden="true" />
          {tier.badge}
        </span>
      )}

      <div className="flex items-center justify-between">
        <h3 className="text-lg text-left font-semibold text-foreground">{tier.name}</h3>
        <span className="rounded-md bg-secondary px-2 py-1 text-xs font-semibold text-brand">
          {tier.seer}
        </span>
      </div>

      <p className="mt-2 text-sm text-left leading-relaxed text-muted-foreground">
        {tier.description}
      </p>

      <div className="mt-5">
        <span className="text-4xl font-bold tracking-tight text-foreground">
          {formatCurrency(tier.price)}
        </span>
        <span className="ml-2 text-sm font-medium text-muted-foreground">
          or {formatCurrency(tier.monthlyPayment)}/mo
        </span>
        <p className="mt-1 text-xs font-medium uppercase tracking-wide text-success">
          All-inclusive · installed
        </p>
      </div>

      <ul className="mt-6 flex-1 space-y-3">
        {tier.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2.5 text-sm">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success-soft text-success">
              <Check className="size-3.5" aria-hidden="true" />
            </span>
            <span className="text-foreground/80">{feature}</span>
          </li>
        ))}
      </ul>

      <Button
        size="lg"
        onClick={() => onSelect(tier)}
        className={cn(
          'mt-7 w-full font-semibold transition-all hover:-translate-y-0.5',
          tier.highlighted
            ? 'bg-orange text-primary-foreground hover:bg-orange-light'
            : 'bg-brand text-brand-foreground hover:bg-brand-light',
        )}
      >
        Select &amp; Schedule
      </Button>
    </div>
  )
}
