'use client'

import { useEffect, useState } from 'react'
import { Menu, X, Wind } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { NAV_LINKS, BRAND } from '@/lib/constants'
import { scrollToId } from '@/lib/format'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (href: string) => {
    setMenuOpen(false)
    scrollToId(href.replace('#', ''))
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => scrollToId('top')}
          className="flex items-center gap-2 text-brand"
          aria-label={`${BRAND.name} home`}
        >
          <span className="flex size-9 items-center justify-center rounded-lg bg-brand text-brand-foreground">
            <Wind className="size-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight">{BRAND.name}</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right cluster */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Button
            size="lg"
            onClick={() => handleNav('#pricing')}
            className="bg-orange px-5 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md active:translate-y-0"
          >
            Shop Systems
          </Button>

          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="flex size-9 items-center justify-center rounded-md text-foreground lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="size-5" aria-hidden="true" />
            ) : (
              <Menu className="size-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-border bg-background transition-all duration-300 lg:hidden',
          menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav
          className="flex flex-col gap-1 px-4 py-4"
          aria-label="Mobile primary"
        >
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="rounded-md px-3 py-3 text-left text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
