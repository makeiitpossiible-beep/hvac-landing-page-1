'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Reveal } from '@/components/reveal'
import { FAQ_ITEMS } from '@/lib/constants'

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null)

  return (
    <section id="faq" className="bg-secondary py-14 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center">
          <span className="text-sm font-semibold uppercase tracking-wide text-orange">
            Good to know
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openId === item.id
            return (
              <Reveal key={item.id} delay={i * 80}>
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                  <h3>
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-muted/50"
                    >
                      <span className="text-base font-semibold text-foreground">
                        {item.question}
                      </span>
                      <Plus
                        className={cn(
                          'size-5 shrink-0 text-orange transition-transform duration-300',
                          isOpen && 'rotate-45',
                        )}
                        aria-hidden="true"
                      />
                    </button>
                  </h3>
                  <div
                    className={cn(
                      'grid transition-all duration-300 ease-out',
                      isOpen
                        ? 'grid-rows-[1fr] opacity-100'
                        : 'grid-rows-[0fr] opacity-0',
                    )}
                  >
                    <div className="overflow-hidden">
                      <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
