'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { scrollToId } from '@/lib/format'
import { BRAND } from '@/lib/constants'

const NAV_ITEMS = [
  { label: 'About', href: '/about' },
  { label: 'Reviews', href: '/reviews' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  /**
   * "Shop Systems" always lands on the pricing section. On the home page we
   * scroll directly (so repeat clicks keep working even when the URL hash is
   * already "#pricing"); on other pages we navigate home first, then scroll.
   */
  const handleShopSystems = (e: React.MouseEvent) => {
    e.preventDefault()
    setMenuOpen(false)
    if (pathname === '/') {
      scrollToId('pricing')
    } else {
      router.push('/#pricing')
    }
  }

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled || menuOpen
          ? 'border-b border-border bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-background/0',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2 text-brand"
          aria-label={`${BRAND.name} home`}
        >
          <span className="flex size-9 overflow-hidden rounded-lg border border-border/40 bg-white shadow-sm transition-all duration-300 hover:scale-105">
            <Image
              src="/icon.jpg"
              alt=""
              width={36}
              height={36}
              className="h-full w-full object-cover"
            />
          </span>
          <span className="text-base font-bold tracking-tight sm:text-lg">
            {BRAND.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav
          className="hidden items-center gap-1 sm:flex sm:gap-2"
          aria-label="Primary"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#pricing"
            onClick={handleShopSystems}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-orange px-5 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md active:translate-y-0',
            )}
          >
            Shop Systems
          </Link>
        </nav>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          className="flex size-11 items-center justify-center rounded-md text-brand transition-colors hover:bg-muted sm:hidden"
        >
          {menuOpen ? (
            <X className="size-6" aria-hidden="true" />
          ) : (
            <Menu className="size-6" aria-hidden="true" />
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        className={cn(
          'overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-all duration-300 sm:hidden',
          menuOpen ? 'max-h-80 opacity-100' : 'max-h-0 border-t-0 opacity-0',
        )}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="flex min-h-11 items-center rounded-md px-3 text-base font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#pricing"
            onClick={handleShopSystems}
            className={cn(
              buttonVariants({ size: 'lg' }),
              'mt-2 bg-orange font-semibold text-primary-foreground shadow-sm transition-all hover:bg-orange-light',
            )}
          >
            Shop Systems
          </Link>
        </nav>
      </div>
    </header>
  )
}
