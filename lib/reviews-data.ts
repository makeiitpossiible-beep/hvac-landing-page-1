import { TESTIMONIALS, type Testimonial } from '@/lib/constants'

/**
 * Additional customer reviews shown on the dedicated /reviews page.
 * These reuse the same Testimonial shape as the homepage carousel and
 * fall back to initials avatars (no image field required).
 */
const ADDITIONAL_REVIEWS: Testimonial[] = [
  {
    id: 101,
    rating: 5,
    headline: 'Next-day install actually meant next day.',
    body: 'I called on a Sunday expecting the usual runaround. Instead the crew showed up Monday morning, replaced our dead AC, and had the house cool by lunch. No games, no upsells.',
    author: 'Rebecca H.',
    location: 'Sacramento, CA',
    badge: 'Verified Customer',
  },
  {
    id: 102,
    rating: 5,
    headline: 'The quote online matched the final invoice.',
    body: 'What I saw during checkout is exactly what I paid. Permits, labor, and haul-away were all included. It is refreshing to deal with a company that respects your time and intelligence.',
    author: 'Tomás G.',
    location: 'San Antonio, TX',
    badge: 'Verified Customer',
  },
  {
    id: 103,
    rating: 4,
    headline: 'Great value on a high-efficiency system.',
    body: 'We went with the mid-tier heat pump and the energy savings are already showing on our bill. Install was clean and the team answered all my questions about the thermostat.',
    author: 'Nina P.',
    location: 'Portland, OR',
    badge: 'Verified Customer',
  },
  {
    id: 104,
    rating: 5,
    headline: 'Professional from the first call to cleanup.',
    body: 'Every person I dealt with was courteous and knowledgeable. The lead tech walked me through the whole install and made sure I understood the warranty before leaving.',
    author: 'Gregory W.',
    location: 'Charlotte, NC',
    badge: 'Verified Customer',
  },
  {
    id: 105,
    rating: 5,
    headline: 'Mini-split for our addition was perfect.',
    body: 'Our sunroom was always too hot. They installed a ductless mini-split in a few hours and now it is the most comfortable room in the house. Quiet and efficient.',
    author: 'Hannah L.',
    location: 'Boston, MA',
    badge: 'Verified Customer',
  },
  {
    id: 106,
    rating: 5,
    headline: 'Saved over $1,600 versus two other bids.',
    body: 'I got three quotes. NextDay was not only the most transparent, it was significantly cheaper for a better system. The financing option made it easy to say yes.',
    author: 'Derek M.',
    location: 'Kansas City, MO',
    badge: 'Verified Customer',
  },
  {
    id: 107,
    rating: 5,
    headline: 'Honest advice, no pressure.',
    body: 'They could have sold me a bigger system but instead recommended one that actually fit my home. That kind of honesty earned my trust and my future maintenance business.',
    author: 'Yolanda B.',
    location: 'Tampa, FL',
    badge: 'Verified Customer',
  },
  {
    id: 108,
    rating: 4,
    headline: 'Smooth process, friendly crew.',
    body: 'Scheduling was simple and the crew was on time and tidy. One small part was on backorder but they followed up quickly and finished the job the next morning.',
    author: 'Patrick D.',
    location: 'Minneapolis, MN',
    badge: 'Verified Customer',
  },
  {
    id: 109,
    rating: 5,
    headline: 'Our whole-home air feels cleaner.',
    body: 'Added a filtration system along with our new furnace. The difference in dust and allergens is noticeable. Great recommendation from a team that clearly knows their stuff.',
    author: 'Meera S.',
    location: 'Columbus, OH',
    badge: 'Verified Customer',
  },
]

/** All reviews for the dedicated reviews page (homepage set + extras). */
export const REVIEWS: Testimonial[] = [...TESTIMONIALS, ...ADDITIONAL_REVIEWS]
