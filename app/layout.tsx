import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'NextDay HVAC — Upfront Pricing. Next-Day Installation.',
  description:
    'Shop high-efficiency air conditioners, heat pumps, and mini-splits with all-inclusive pricing and certified next-day installation. No surprise quotes, no pushy sales visits.',
  generator: 'v0.app',
  keywords: [
    'HVAC installation',
    'next-day AC install',
    'air conditioner pricing',
    'heat pump',
    'mini-split',
    'central air',
  ],
  openGraph: {
    title: 'NextDay HVAC — Upfront Pricing. Next-Day Installation.',
    description:
      'All-inclusive HVAC pricing with certified next-day installation. Configure your system online in minutes.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1e3a5f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
