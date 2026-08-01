import { ShieldCheck, Phone, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { BRAND, FOOTER_LINKS } from '@/lib/constants'

/** Normalizes a footer href so links resolve from any page (home-anchor, route, or top). */
function resolveHref(href: string): string {
  if (href.startsWith('/')) return href
  if (href === '#') return '/'
  return `/${href}`
}

export function Footer() {
  return (
    <footer className="bg-brand-dark text-brand-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          {/* Brand bio */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2">
              <span className="flex size-9 overflow-hidden rounded-lg border border-white/10 bg-white shadow-sm transition-all duration-300 hover:scale-105">
                <Image
                  src="/icon.jpg"
                  alt=""
                  width={36}
                  height={36}
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="text-lg font-bold">{BRAND.name}</span>
            </div>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-foreground/70">
              Transparent, all-inclusive HVAC pricing with certified next-day
              installation. No surprise quotes, no pushy sales visits. Just
              honest comfort.
            </p>
            <div className="mt-5 flex items-center gap-2 text-sm text-brand-foreground/70">
              <ShieldCheck className="size-4 text-success" aria-hidden="true" />
              <span>{BRAND.license}</span>
            </div>
            <a
              href={`tel:${BRAND.phone.replace(/[^0-9]/g, '')}`}
              className="mt-2 flex items-center gap-2 text-sm font-medium text-brand-foreground/90 transition-colors hover:text-orange-light"
            >
              <Phone className="size-4" aria-hidden="true" />
              {BRAND.phone}
            </a>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
              <div key={heading}>
                <h3 className="text-sm font-semibold text-brand-foreground">
                  {heading}
                </h3>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={resolveHref(link.href)}
                        className="text-sm text-brand-foreground/65 transition-colors hover:text-orange-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Custom-fit CTA card */}
          <div className="lg:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="text-base font-semibold text-brand-foreground">
                Need a custom fit?
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-brand-foreground/70">
                Use our configurator to size the perfect system for your home in
                under a minute.
              </p>
              <Link
                href="/#configurator"
                className={cn(
                  buttonVariants({ size: 'lg' }),
                  'mt-4 w-full gap-2 bg-orange font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-orange-light',
                )}
              >
                Configure System
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-brand-foreground/55 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {BRAND.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <button className="transition-colors hover:text-brand-foreground">
              Privacy
            </button>
            <button className="transition-colors hover:text-brand-foreground">
              Terms
            </button>
            <button className="transition-colors hover:text-brand-foreground">
              Accessibility
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
