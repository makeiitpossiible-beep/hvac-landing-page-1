'use client'

import { Reveal } from '@/components/reveal'
import { FEATURES } from '@/lib/constants'

export function FeaturesBanner() {
  return (
    <section className="border-y border-border bg-brand-tint">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.id} delay={i * 100}>
              <div className="group flex flex-col items-start gap-3">
                <span className="flex size-11 items-center justify-center rounded-lg bg-white text-orange shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-orange group-hover:text-primary-foreground">
                  <feature.icon className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-brand sm:text-base">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-brand/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
