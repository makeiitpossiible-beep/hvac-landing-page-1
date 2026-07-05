'use client'

import { Reveal } from '@/components/reveal'

export function BrandsBanner() {
  return (
    <section className="bg-secondary/60 py-12 border-b border-border">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-bold text-brand tracking-tight md:text-2xl mb-8">
          Brands we work with
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8">
          {/* Voltas */}
          <Reveal delay={0}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 120 30" className="w-full h-auto max-h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="50%" y="22" textAnchor="middle" fontStyle="italic" fontWeight="900" fontFamily="Impact, 'Arial Black', sans-serif" fontSize="22" fill="#0F5B9E" letterSpacing="0.5">
                  VOLTAS
                </text>
              </svg>
            </div>
          </Reveal>

          {/* LG */}
          <Reveal delay={100}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 100 35" className="w-full h-auto max-h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Red/Magenta circle */}
                <circle cx="16" cy="17.5" r="14" fill="#A50034" />
                {/* G outline */}
                <path d="M23.5 14C22.2 11 19.2 9.5 16 9.8C11.5 10.2 8.3 14 8.7 18C9.1 22.3 13 25.3 17.2 24.8C21.2 24.4 23.8 21.2 23.8 17.5H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                {/* L inside */}
                <path d="M16 11.5V17.5H20" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                {/* Eye */}
                <circle cx="12.5" cy="14" r="1.5" fill="white" />
                {/* LG text */}
                <text x="42" y="24" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="bold" fontSize="19" fill="#222222" letterSpacing="0">
                  LG
                </text>
              </svg>
            </div>
          </Reveal>

          {/* Whirlpool */}
          <Reveal delay={200}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 140 40" className="w-full h-auto max-h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Golden swirl ring */}
                <ellipse cx="70" cy="20" rx="42" ry="11" stroke="#EDC000" strokeWidth="1.8" transform="rotate(-10 70 20)" />
                {/* Whirlpool wordmark */}
                <text x="50%" y="26" textAnchor="middle" fontFamily="'Times New Roman', Georgia, serif" fontWeight="600" fontSize="19" fill="#333333" letterSpacing="-0.3">
                  Whirlpool
                </text>
                {/* Dot above i */}
                <circle cx="79.5" cy="11.5" r="1.5" fill="#EDC000" />
              </svg>
            </div>
          </Reveal>

          {/* Blue Star */}
          <Reveal delay={300}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 130 32" className="w-full h-auto max-h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Blue border/bg */}
                <rect width="130" height="32" fill="#005A9C" />
                {/* Star on left */}
                <path d="M20 9L21.5 13.5H26L22.5 16L24 20.5L20 18L16 20.5L17.5 16L14 13.5H18.5L20 9Z" fill="white" />
                {/* Divider line */}
                <line x1="32" y1="6" x2="32" y2="26" stroke="white" strokeOpacity="0.3" strokeWidth="1" />
                {/* BLUE STAR text */}
                <text x="38" y="21" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontWeight="800" fontSize="11" fill="white" letterSpacing="1.2">
                  BLUE STAR
                </text>
              </svg>
            </div>
          </Reveal>

          {/* Amazon Basics */}
          <Reveal delay={400}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 140 35" className="w-full h-auto max-h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Text */}
                <text x="50%" y="20" textAnchor="middle" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" fontSize="16" letterSpacing="-0.5">
                  <tspan fill="#111111" fontWeight="bold">amazon</tspan>
                  <tspan fill="#111111" fontWeight="normal">basics</tspan>
                </text>
                {/* Amazon Smile */}
                <path d="M26 23C42 27.5 68 27.5 78 22" stroke="#FF9900" strokeWidth="1.8" strokeLinecap="round" />
                <path d="M78 22C77 20.5 73.5 19 73.5 19L74 23.5L78 22Z" fill="#FF9900" />
              </svg>
            </div>
          </Reveal>

          {/* Godrej */}
          <Reveal delay={500}>
            <div className="bg-white px-6 py-4 rounded-lg border border-gray-100 shadow-xs flex items-center justify-center w-36 h-16 transition-all duration-300 hover:shadow-sm hover:scale-105">
              <svg viewBox="0 0 110 35" className="w-full h-auto max-h-9" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="godrej-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#00A859" />
                    <stop offset="50%" stopColor="#EC008C" />
                    <stop offset="100%" stopColor="#2E3192" />
                  </linearGradient>
                </defs>
                {/* Cursive path signature for Godrej */}
                <path d="M 12 18 C 12 12, 17 6, 21 6 C 26 6, 25 12, 23 16 C 21 19, 17 22, 14 22 C 10 22, 8 18, 9 14 C 10 9, 14 4, 20 4 C 23 4, 24 6, 23 8 C 21 12, 14 20, 18 20 C 20 20, 22 17, 24 14 M 24 17 C 26 14, 28 12, 31 12 C 34 12, 35 15, 33 17 C 31 19, 29 21, 27 21 C 25 21, 24 19, 25 17 M 36 21 C 37 18, 38 15, 41 11 C 42 7, 44 4, 46 4 C 47 4, 46 7, 45 9 C 44 12, 42 16, 42 18 C 42 20, 44 21, 46 19 C 48 17, 49 14, 50 12 M 52 14 C 53 12, 55 11, 57 11 C 59 11, 58 13, 56 15 C 54 17, 52 19, 52 20 C 52 21, 54 21, 56 20 M 59 17 C 61 14, 63 12, 66 12 C 69 12, 69 14, 67 16 C 65 18, 62 21, 60 21 C 58 21, 58 19, 59 17 M 70 12 C 72 12, 73 14, 72 17 C 70 21, 68 25, 66 29 C 64 33, 62 34, 60 34 C 59 34, 59 33, 60 31 C 61 28, 63 24, 65 20 C 66 18, 65 17, 63 17" 
                      stroke="url(#godrej-gradient)" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                {/* Dot for the j character */}
                <circle cx="71.5" cy="7.5" r="2.2" fill="#2E3192" />
              </svg>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
