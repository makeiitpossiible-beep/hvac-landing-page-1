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
  metadataBase: new URL('https://nextdayhvac.com'),
  title: 'NextDay HVAC | Upfront Pricing. Next-Day Installation.',
  description:
    'Shop high-efficiency air conditioners, heat pumps, and mini-splits with all-inclusive pricing and certified next-day installation. No surprise quotes, no pushy sales visits.',
  generator: 'Next.js',
  keywords: [
    'HVAC installation',
    'next-day AC install',
    'air conditioner pricing',
    'heat pump',
    'mini-split',
    'central air',
    'heating and cooling',
    'AC replacement',
  ],
  authors: [{ name: 'NextDay HVAC' }],
  creator: 'NextDay HVAC',
  publisher: 'NextDay HVAC',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', type: 'image/png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: 'NextDay HVAC | Upfront Pricing. Next-Day Installation.',
    description:
      'Shop high-efficiency air conditioners, heat pumps, and mini-splits with all-inclusive pricing and certified next-day installation. No surprise quotes, no pushy sales visits.',
    url: 'https://nextdayhvac.com',
    siteName: 'NextDay HVAC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextDay HVAC - Upfront Pricing, Next-Day Installation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NextDay HVAC | Upfront Pricing. Next-Day Installation.',
    description:
      'Shop high-efficiency air conditioners, heat pumps, and mini-splits with all-inclusive pricing and certified next-day installation. No surprise quotes, no pushy sales visits.',
    images: ['/images/og-image.png'],
    creator: '@NextDayHVAC',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
