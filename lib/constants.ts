import type { LucideIcon } from 'lucide-react'
import { ShieldCheck, FileCheck2, BadgeCheck, Wrench } from 'lucide-react'

/* ---------------------------------- Brand --------------------------------- */

export const BRAND = {
  name: 'NextDay HVAC',
  phone: '(800) 555-0142',
  license: 'Lic. #HVAC-884213 · Fully Insured & Bonded',
} as const

/* --------------------------------- Nav links ------------------------------- */

export interface NavLink {
  label: string
  href: string
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Systems', href: '#systems' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Configure', href: '#configurator' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

/* ------------------------------ Feature banner ----------------------------- */

export interface Feature {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const FEATURES: Feature[] = [
  {
    id: 'certified',
    title: 'Certified Installation',
    description: 'Trained, certified local crews on every single job.',
    icon: BadgeCheck,
  },
  {
    id: 'permits',
    title: 'Permits & Disposal',
    description: 'We pull permits and haul away your old unit.',
    icon: FileCheck2,
  },
  {
    id: 'warranty',
    title: '10-Year Warranty',
    description: 'Parts and labor covered for a full decade.',
    icon: ShieldCheck,
  },
  {
    id: 'maintenance',
    title: 'Free 1st-Year Service',
    description: 'Complimentary maintenance visit in year one.',
    icon: Wrench,
  },
]

/* ------------------------------ Pricing tiers ------------------------------ */

export interface PricingTier {
  id: string
  name: string
  seer: string
  description: string
  price: number
  monthlyPayment: number
  badge: string | null
  features: string[]
  highlighted: boolean
}

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'standard',
    name: 'Standard Efficiency',
    seer: 'Saves ~15%',
    description: 'Dependable cooling at the lowest upfront cost.',
    price: 3500,
    monthlyPayment: 79,
    badge: null,
    highlighted: false,
    features: [
      'Reliable, steady cooling',
      'Professional install included',
      'Permits & old-unit removal',
      '10-year parts & labor warranty',
    ],
  },
  {
    id: 'high',
    name: 'High-Efficiency Comfort',
    seer: 'Saves ~30%',
    description: 'Balanced energy savings with quiet operation.',
    price: 4800,
    monthlyPayment: 119,
    badge: 'Best Value',
    highlighted: true,
    features: [
      'Extra energy-saving cooling',
      'Whisper-quiet operation',
      'Permits & old-unit removal',
      '10-year parts & labor warranty',
      'Free 1st-year maintenance visit',
    ],
  },
  {
    id: 'ultimate',
    name: 'Ultimate Smart System',
    seer: 'Saves ~45%',
    description: 'Smart, ultra-efficient comfort with app control.',
    price: 6200,
    monthlyPayment: 159,
    badge: null,
    highlighted: false,
    features: [
      'Smart, ultra-efficient cooling',
      'Smart thermostat & app control',
      'Permits & old-unit removal',
      '10-year parts & labor warranty',
      'Priority support & annual service',
    ],
  },
]

/* -------------------------------- Stats bar -------------------------------- */

export interface Stat {
  id: string
  value: string
  label: string
}

export const STATS: Stat[] = [
  { id: 'rating', value: '4.9★', label: 'Average rating across 2,800+ installs' },
  { id: 'ontime', value: '94%', label: 'Installs completed by next day' },
  { id: 'savings', value: '$1,420', label: 'Average saved vs. traditional quotes' },
]

/* ------------------------------ Testimonials ------------------------------- */

export interface Testimonial {
  id: number
  rating: number
  headline: string
  body: string
  author: string
  location: string
  badge: string
  image?: string
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    rating: 5,
    headline: 'Literally lifesaving in the July heat.',
    body: 'Our central AC quit on a Tuesday night. Every local company wanted a consultation days out. I booked a next-day install here, and by Wednesday at 2 PM the crew had the new system running. Incredible turnaround.',
    author: 'Marcus K.',
    location: 'Phoenix, AZ',
    badge: 'Verified Customer',
    image: '/images/avatars/marcus.png',
  },
  {
    id: 2,
    rating: 5,
    headline: 'Finally, a price I could actually trust.',
    body: 'No surprise add-ons, no four-hour sales pitch in my living room. The quoted install price was the price I paid. The crew was clean, fast, and walked me through the new thermostat before they left.',
    author: 'Danielle R.',
    location: 'Austin, TX',
    badge: 'Verified Customer',
    image: '/images/avatars/danielle.png',
  },
  {
    id: 3,
    rating: 5,
    headline: 'The configurator nailed our system size.',
    body: 'I was nervous about sizing, but the online tool matched what the install supervisor confirmed on the call. The whole booking took ten minutes and saved us over $1,500 compared to two other quotes.',
    author: 'James & Priya T.',
    location: 'Denver, CO',
    badge: 'Verified Customer',
    image: '/images/avatars/james.png',
  },
  {
    id: 4,
    rating: 5,
    headline: 'The crew treated my home with respect.',
    body: 'They laid down floor protection, cleaned up every scrap, and hauled away my ancient furnace. You can tell these are seasoned, certified installers and not a random subcontractor.',
    author: 'Sofia M.',
    location: 'San Diego, CA',
    badge: 'Verified Customer',
    image: '/images/avatars/sofia.png',
  },
  {
    id: 5,
    rating: 5,
    headline: 'Permits and paperwork handled for me.',
    body: 'I dreaded dealing with city permits. They pulled everything, scheduled the inspection, and it passed first try. The 10-year labor warranty gave me real peace of mind on the investment.',
    author: 'David L.',
    location: 'Columbus, OH',
    badge: 'Verified Customer',
    image: '/images/avatars/david.png',
  },
  {
    id: 6,
    rating: 5,
    headline: 'Booked online at midnight, installed by noon.',
    body: 'My newborn and I could not survive another day without AC. I scheduled the service from my phone late at night and a friendly, professional team arrived the next morning. Service like this is rare.',
    author: 'Aisha N.',
    location: 'Atlanta, GA',
    badge: 'Verified Customer',
    image: '/images/avatars/aisha.png',
  },
]

/* ----------------------------------- FAQ ----------------------------------- */

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'sizing',
    question: 'How do I know I am choosing the right size system for my home?',
    answer:
      'Our intelligent online configurator uses your square footage and local climate to recommend the right system size for your home. Once you order, a certified local installation supervisor reviews your home details on a quick 10-minute confirmation call to double-verify the system matches your layout before it leaves our warehouse. If an adjustment is needed, we update it free of charge.',
  },
  {
    id: 'pricing',
    question: 'Is the price I see really all-inclusive?',
    answer:
      'Yes. The price on screen covers the equipment, certified installation labor, standard permits, and removal of your old unit. There are no surprise fees or pushy in-home sales visits. The only time pricing changes is for non-standard work (like major ductwork), which is always confirmed with you before any charge.',
  },
  {
    id: 'warranty',
    question: 'What does the 10-year warranty actually cover?',
    answer:
      'Every system includes a 10-year warranty covering both parts and labor. If a covered component fails, we send a certified technician to repair or replace it at no cost to you. Your free first-year maintenance visit also helps keep the warranty in good standing.',
  },
  {
    id: 'financing',
    question: 'How does financing and pre-qualification work?',
    answer:
      'You can split your system into low monthly payments starting at $65/mo. Pre-qualification takes under a minute during checkout and does not affect your credit score. You will see your estimated monthly payment instantly and can choose to pay in full or finance at any time.',
  },
]

/* ------------------------------ Configurator ------------------------------- */

export interface ClimateZone {
  id: string
  label: string
  multiplier: number
}

export const CLIMATE_ZONES: ClimateZone[] = [
  { id: 'temperate', label: 'Temperate', multiplier: 1 },
  { id: 'hot-humid', label: 'Hot & Humid', multiplier: 1.18 },
  { id: 'desert', label: 'Hot & Dry', multiplier: 1.12 },
  { id: 'cold', label: 'Cold', multiplier: 1.08 },
]

export interface ConfigSystemType {
  id: string
  label: string
  base: number
  description: string
}

export const CONFIG_SYSTEM_TYPES: ConfigSystemType[] = [
  {
    id: 'central',
    label: 'Central Air',
    base: 3500,
    description: 'Ducted whole-home cooling & heating.',
  },
  {
    id: 'mini-split',
    label: 'Mini-Split',
    base: 2900,
    description: 'Ductless zones for targeted comfort.',
  },
  {
    id: 'hybrid',
    label: 'Hybrid Heat Pump',
    base: 5200,
    description: 'Max efficiency in every season.',
  },
]

/**
 * Maps the configurator inputs to one of the three real installation packages.
 * This gives the configurator a concrete outcome: a recommended, bookable tier.
 */
export function recommendTier(
  sqft: number,
  climate: ClimateZone,
  systemType: ConfigSystemType,
): PricingTier {
  let tierId: PricingTier['id']

  if (systemType.id === 'hybrid' || climate.multiplier >= 1.15) {
    // Top efficiency for premium systems or demanding humid climates.
    tierId = 'ultimate'
  } else if (sqft > 2400 || climate.multiplier > 1.05) {
    // Larger homes or hotter/colder climates benefit from higher efficiency.
    tierId = 'high'
  } else {
    tierId = 'standard'
  }

  return PRICING_TIERS.find((t) => t.id === tierId) ?? PRICING_TIERS[0]
}

/* ------------------------------- Footer nav -------------------------------- */

export const FOOTER_LINKS = {
  Systems: [
    { label: 'Central Air', href: '#systems' },
    { label: 'Heat Pumps', href: '#systems' },
    { label: 'Mini-Splits', href: '#systems' },
    { label: 'Smart Thermostats', href: '#systems' },
  ],
  Company: [
    { label: 'How It Works', href: '#configurator' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Reviews', href: '/reviews' },
    { label: 'FAQ', href: '#faq' },
  ],
  Support: [
    { label: 'Warranty', href: '#faq' },
    { label: 'Price Match', href: '#pricing' },
    { label: 'Financing', href: '#faq' },
    { label: 'Contact', href: '#' },
  ],
} as const
