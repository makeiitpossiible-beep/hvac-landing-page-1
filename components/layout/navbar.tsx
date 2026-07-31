'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { buttonVariants } from '@/components/ui/button'
import { BRAND } from '@/lib/constants'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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
          <span className="text-lg font-bold tracking-tight">{BRAND.name}</span>
        </Link>

        {/* Right cluster */}
        <nav className="flex items-center gap-1 sm:gap-2" aria-label="Primary">
          <Link
            href="/about"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="/reviews"
            className="rounded-md px-3 py-2 text-sm font-medium text-foreground/70 transition-colors hover:text-foreground"
          >
            Reviews
          </Link>
          <Link
            href="/#pricing"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'bg-orange px-5 font-semibold text-primary-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:bg-orange-light hover:shadow-md active:translate-y-0',
            )}
          >
            Shop Systems
          </Link>
        </nav>
      </div>
    </header>
  )
}
