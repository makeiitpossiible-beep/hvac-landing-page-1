'use client'

import Image from 'next/image'
import { Reveal } from '@/components/reveal'

interface BrandLogo {
  name: string
  src: string
}

const BRAND_LOGOS: BrandLogo[] = [
  { name: 'Voltas', src: '/images/partners/Voltas_logo.svg.webp' },
  { name: 'LG', src: '/images/partners/LG_logo_(2014).svg.webp' },
  {
    name: 'Whirlpool',
    src: '/images/partners/Whirlpool_Corporation_Logo_(as_of_2017).svg.webp',
  },
  { name: 'Blue Star', src: '/images/partners/Blue_Star_primary_logo.png' },
  {
    name: 'Amazon',
    src: '/images/partners/102-1023777_file-amazon-de-logo-svg-amazon-in-logo.png',
  },
  { name: 'Fujitsu', src: '/images/partners/Fujitsu-Logo.svg.webp' },
]

export function BrandsBanner() {
  return (
    <section className="border-b border-border bg-secondary/60 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-center text-xl font-bold tracking-tight text-brand md:text-2xl">
          Brands we work with
        </h2>
        <div className="grid grid-cols-2 place-items-center gap-4 sm:grid-cols-3 sm:gap-6 lg:grid-cols-6 lg:gap-8">
          {BRAND_LOGOS.map((brand, i) => (
            <Reveal key={brand.name} delay={i * 100}>
              <div className="flex h-16 w-full max-w-[9rem] items-center justify-center rounded-lg border border-gray-100 bg-white px-6 py-4 shadow-xs transition-all duration-300 hover:scale-105 hover:shadow-sm">
                <Image
                  src={brand.src || '/placeholder.svg'}
                  alt={`${brand.name} logo`}
                  width={140}
                  height={48}
                  className="max-h-9 w-auto object-contain"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
