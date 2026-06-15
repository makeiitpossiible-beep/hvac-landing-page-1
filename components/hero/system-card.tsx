'use client'

import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { formatCurrency, scrollToId } from '@/lib/format'
import type { SystemOption } from '@/lib/constants'

interface SystemCardProps {
  system: SystemOption
}

/** Reusable product card used in the hero "systems" grid. */
export function SystemCard({ system }: SystemCardProps) {
  const Icon = system.icon

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
        <Image
          src={system.image || '/placeholder.svg'}
          alt={`${system.name} unit`}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-semibold text-foreground">{system.name}</h3>
        <p className="mt-1 flex-1 text-sm leading-relaxed text-muted-foreground">
          {system.tagline}
        </p>

        <div className="mt-4 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
              Starting at
            </p>
            <p className="text-xl font-bold text-foreground">
              {formatCurrency(system.startingPrice)}
              <span className="ml-1 text-sm font-medium text-muted-foreground">
                or {formatCurrency(system.monthlyPrice)}/mo
              </span>
            </p>
          </div>
        </div>

        <Button
          size="lg"
          onClick={() => scrollToId('configurator')}
          className="mt-5 w-full gap-2 bg-orange font-semibold text-primary-foreground transition-all hover:bg-orange-light"
        >
          Configure System
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
        </Button>
      </div>
    </article>
  )
}
