# Implementation Plan — Website Metadata & Preview Snapshot (IMPLEMENTATION_METADATA.md)

This document outlines the proposed changes to create a robust metadata structure (including Open Graph and Twitter Cards) and capture a high-quality visual snapshot of the website to use as the preview image.

---

## Goal Description

1. **Robust Metadata System**: Update `app/layout.tsx` to export a complete, SEO-friendly, and social-media-optimized `Metadata` configuration.
2. **Social Media Previews (Open Graph & Twitter)**: Include Open Graph (`og:image`, `og:url`, etc.) and Twitter Card tags to ensure that links shared on platforms like X, Slack, LinkedIn, or Facebook display a rich preview instead of a blank page.
3. **Website Snapshot**: Programmatically launch a headless browser (Edge/Chrome) to capture a screenshot of the local site (`http://localhost:3000`), format it to the standard social preview size (1200x630), and save it to `public/images/og-image.png`.
4. **Favicons & Touch Icons**: Link the existing static icons (`/icon-light-32x32.png`, `/icon-dark-32x32.png`, `/icon.svg`, `/apple-icon.png`) correctly in the Next.js icon configuration.

---

## Proposed Metadata Configuration

We will replace the basic metadata in `app/layout.tsx` with a fully featured definition:

```typescript
export const metadata: Metadata = {
  metadataBase: new URL('https://nextdayhvac.com'), // Change this to your production URL when deploying
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
```

---

## Plan to Capture Website Snapshot

To create a genuine snapshot of the website page for `public/images/og-image.png` without adding extra runtime NPM packages, we will perform the following steps:

1. **Start Next.js Development Server**:
   - Run `npm run dev` in the background.
   - Wait until it is successfully compiled and listening on `http://localhost:3000`.

2. **Capture Screenshot using Headless MS Edge or Chrome**:
   - Run a PowerShell command that invokes the pre-installed Microsoft Edge or Google Chrome in headless mode.
   - We will set the viewport to `1200x630` (the standard Open Graph image dimension).
   - We will use `--virtual-time-budget=5000` or a time delay to let the entrance animations and CSS complete rendering.
   - Output the file to `public/images/og-image.png`.

   *PowerShell Capture Script (conceptual)*:
   ```powershell
   $edgePath = "${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe"
   $chromePath = "${env:ProgramFiles}\Google\Chrome\Application\chrome.exe"
   $url = "http://localhost:3000"
   $outputPath = "public/images/og-image.png"

   if (Test-Path $edgePath) {
       Write-Output "Using Microsoft Edge to capture screenshot..."
       & $edgePath --headless --disable-gpu --screenshot="$outputPath" --window-size=1200,630 --virtual-time-budget=5000 $url
   } elseif (Test-Path $chromePath) {
       Write-Output "Using Google Chrome to capture screenshot..."
       & $chromePath --headless --disable-gpu --screenshot="$outputPath" --window-size=1200,630 --virtual-time-budget=5000 $url
   } else {
       Write-Error "Could not locate a headless browser (Edge/Chrome) for screenshot capture."
   }
   ```

3. **Stop Next.js Development Server**:
   - Terminate the background development server process safely.

---

## Verification Plan

### Automated Verification
- Check if `public/images/og-image.png` exists and is a valid image.
- Run `npm run build` to verify that Next.js builds successfully and there are no compilation errors with the new metadata configuration.

### Visual & HTML Verification
- Inspect the generated `og-image.png` visually to verify that the landing page renders correctly and displays without styling artifacts.
- Verify that the `<meta property="og:image" ...>` and `<meta name="twitter:image" ...>` tags match the correct URLs in the output HTML.
