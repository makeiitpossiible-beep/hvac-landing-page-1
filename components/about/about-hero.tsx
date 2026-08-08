import Link from 'next/link'
import { ArrowRight, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { BRAND } from '@/lib/constants'

const HIGHLIGHTS = [
  'Transparent, all-inclusive HVAC pricing',
  'Certified next-day installation',
  'No surprise quotes',
  'No pushy sales visits',
]

export function AboutHero() {
  return (
    <section className="border-b border-border bg-brand-tint py-14 lg:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        <span className="text-sm font-semibold uppercase tracking-wide text-orange block text-center">
          Who we are
        </span>
        <h1 className="mt-3 text-balance text-center text-3xl font-bold tracking-tight text-brand sm:text-4xl lg:text-5xl">
          Home comfort without the runaround
        </h1>
        <p className="mt-5 max-w-2xl text-left text-lg leading-relaxed text-muted-foreground mx-auto">
          {BRAND.name} is a heating and cooling company built on a simple idea:
          getting a new HVAC system should be fast, honest, and stress-free. We
          replaced drawn-out consultations and surprise invoices with upfront
          online pricing and certified crews that install the very next day.
        </p>

        <ul className="mt-8 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-2 text-left mx-auto w-full">
          {HIGHLIGHTS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-left text-sm font-medium text-brand"
            >
              <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-orange/15 text-orange">
                <ShieldCheck className="size-3.5" aria-hidden="true" />
              </span>
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-9 flex flex-col gap-3 justify-center sm:flex-row sm:items-center w-full">
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'gap-2 bg-orange px-7 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md',
            )}
          >
            Book your installation
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
          <Link
            href="/#configurator"
            className={cn(
              buttonVariants({ variant: 'outline', size: 'lg' }),
              'border-brand/20 px-7 font-semibold text-foreground hover:bg-background',
            )}
          >
            See how it works
          </Link>
        </div>

        <p className="mt-8 text-center text-xs text-muted-foreground mx-auto">
          {BRAND.license}
        </p>
      </div>
    </section>
  )
}
