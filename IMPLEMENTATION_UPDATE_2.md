# Implementation Plan: Services Section Refactor
## Replace Auto-Scrolling Marquee with Static Grid Layout

### Overview
Transform the "Our HVAC Service" section from an auto-scrolling infinite carousel to a responsive static 2×4 grid layout with individual service detail pages.

---

## Current Implementation Analysis

### What Exists
- **Component**: `/components/services/services-section.tsx` (use client)
- **Data**: 8 services defined inline in the component
  - Each service: `id`, `title`, `description`, `image`, `icon` (LucideIcon)
  - Services array is duplicated (`[...SERVICES, ...SERVICES]`) to create infinite loop effect
- **Animation**: `animate-marquee` (40s linear, translateX -50%) from `globals.css`
- **Card Structure**: Fixed width (w-[280px]), centered image with bottom icon badge, centered text
- **Current Layout**: Horizontal overflow with fade masks on both edges

### What's Being Removed
1. Marquee animation wrapper (`flex w-max animate-marquee gap-6`)
2. Edge fade mask divs (gradient overlays)
3. Duplicate services array (`[...SERVICES, ...SERVICES]`)
4. Service data duplication loop
5. Marquee-specific CSS class bindings

---

## Additional Requirement: Responsive Design Audit & Fixes

### Responsive Design Scope
**Purpose:** Audit and fix responsive behavior across the entire site (homepage, /about, /reviews, and any /services/* pages) for mobile (<640px), tablet (640–1024px), and desktop (>1024px). Use Tailwind's standard breakpoints (sm/md/lg/xl).

**Important:** Only fix layout, spacing, and breakpoint behavior. Do NOT change colors, fonts, copy, or component styling.

### Breakpoint Targets
- **Mobile:** < 640px (sm)
- **Tablet:** 640–1024px (md/lg)
- **Desktop:** > 1024px (xl)

### Responsive Requirements by Section

#### 1. Navigation Bar
- **Mobile/Tablet:** Collapse into hamburger menu icon; slide-out or dropdown panel with nav links (Home, Services, About, Reviews) and "Shop Systems" CTA
- **Desktop:** Current horizontal layout maintained
- **Logo:** Stay visible and appropriately sized at all breakpoints
- **Behavior:** No nav items wrapping or overflow on smaller screens
- **Touch Targets:** All nav links/buttons at least 44px tall on mobile

#### 2. Hero Section
- **Mobile/Tablet:** Stack two-column layout (headline/text + image) into single column; image appears below text
- **Font Sizing:** Scale headline font size down on mobile to prevent awkward wrapping or overflow
- **CTA Buttons:** Stack "Book your installation" and "See how it works" full-width or centered on mobile instead of side-by-side
- **Floating Rating Card:** Keep 4.9 rating / 2,800+ homes readable and properly positioned relative to image; prevent overlap with text or clipping

#### 3. Brands / Partner Logos Section
- **Desktop:** 6 columns
- **Tablet:** 3 columns, wrapping into multiple rows
- **Mobile:** 2 columns, wrapping into multiple rows

#### 4. Trust/Certifications Bar (Certified Installation, Permits & Disposal, 10-Year Warranty, Free 1st-Year Service)
- **Desktop:** 4 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column (stacked vertically)

#### 5. Services Grid (2×4 Cards)
- **Desktop:** 4 columns (2 rows of 4)
- **Tablet:** 2 columns (4 rows of 2)
- **Mobile:** 1 column (8 rows of 1)
- **Cards:** Ensure card images, icon badges, and Learn More buttons scale properly; text must not overflow cards

#### 6. Pricing Section
- **Desktop/Tablet:** 3 cards side-by-side
- **Mobile:** Stack vertically (1 column)
- **Best Value Card:** Keep highlighted card visually distinct (border/badge) even when stacked
- **Readability:** Price, features list, and button remain fully readable without horizontal scrolling

#### 7. System Configurator
- **Mobile/Tablet:** Stack two-column layout (form controls + recommendation summary) into single column; recommendation summary appears below form
- **Form Elements:** Ensure home size slider, climate buttons, and system type buttons wrap or resize properly without overflowing screen width
- **Desktop:** Maintain current two-column layout

#### 8. Testimonials/Reviews Section (and /reviews Page Grid)
- **Desktop:** 3 columns
- **Tablet:** 2 columns
- **Mobile:** 1 column
- **Homepage Carousel:** Keep carousel arrows/dots accessible and properly positioned on smaller screens
- **/reviews Page:** Grid and pagination/load-more control remain usable on mobile
- **"See all reviews" Link:** ✅ COMPLETED — Added a centered "See all reviews →" text link (orange, arrow icon, underline-on-hover) below the carousel controls in `testimonials-section.tsx`, routing to `/reviews`. Verified in-browser. Requirements below:
  - Display text "See all reviews →" (arrow icon matching the visual style used elsewhere, e.g., "Use the system configurator →" on pricing section)
  - Route to `/reviews` page when clicked
  - Use secondary/subtle styling (not a large filled button — should feel like a natural next step)
  - Remain centered at all breakpoints
  - Do NOT modify existing carousel behavior, stat row, or card design

#### 9. FAQ Accordion
- **All Breakpoints:** Full-width behavior on mobile with no text overflow
- **Icons:** Expand/collapse icons remain aligned correctly at all sizes

#### 10. Footer
- **Desktop:** 4-column layout (brand info, Systems, Company, Support, "Need a custom fit?" card)
- **Tablet:** 2 columns
- **Mobile:** Single-column stacked layout
- **Copyright Row:** Stack "© 2026 NextDay HVAC" and Privacy/Terms/Accessibility links vertically on mobile if they don't fit on one line

#### 11. /about and /reviews Pages
- **Reused Components:** Apply same responsive rules to any reused components (stat rows, brand logos, certification cards, CTA sections)
- **Behavior:** Reused components should behave identically to their homepage counterparts at each breakpoint

### General Responsive Rules
- **No Horizontal Scrolling:** At any breakpoint
- **Touch Targets:** Buttons, nav links, accordion triggers at least 44px tall on mobile
- **Images:** Scale/crop gracefully rather than stretching or overflowing their containers
- **Text Overflow:** No clipping, wrapping, or horizontal scrolling for any text content

### Files to Audit
1. **Navigation:** `/components/header/header.tsx` (or similar)
2. **Hero:** `/components/hero/hero.tsx`
3. **Brands:** `/components/brands/brands-section.tsx`
4. **Trust Bar:** `/components/brands/brands-section.tsx` or `/components/certifications/certifications-section.tsx`
5. **Services Grid:** `/components/services/services-section.tsx`
6. **Pricing:** `/components/pricing/pricing-section.tsx`
7. **Configurator:** `/components/configurator/configurator-section.tsx`
8. **Testimonials:** `/components/reviews/reviews-section.tsx`
9. **FAQ:** `/components/faq/faq-section.tsx`
10. **Footer:** `/components/footer/footer.tsx`
11. **New Pages:** `/app/about/page.tsx`, `/app/reviews/page.tsx`, `/app/services/[slug]/page.tsx`

### Responsive Testing Approach
- Test each section independently at all three breakpoints (mobile: 375px, tablet: 768px, desktop: 1440px)
- Use browser DevTools to simulate responsive behavior
- Verify no overflow, clipping, or unintended wrapping occurs
- Check touch target sizes (44px minimum) on mobile
- Verify all images scale and crop gracefully

---

## Additional Requirement: Text Alignment Audit & Correction

### Text Alignment Scope
**Current Issue:** Justified text alignment (`text-align: justify` / Tailwind's `text-justify`) is applied throughout the site, creating uneven spacing and poor readability.

**Areas Affected:**
- Hero paragraph text
- Section subheadings (e.g., "Choose best technicians and latest HVAC technology")
- Service card descriptions
- Brand/trust-badge descriptions ("Certified Installation," "Permits & Disposal," etc.)
- Pricing tier descriptions
- Testimonial quotes
- FAQ answer text
- Footer description text

### Text Alignment Replacement Rules
**For Body Paragraphs, Descriptions, and Multi-Line Text:**
- Replace `justify` with `text-left` (left-aligned)
- Applies to:
  - Card descriptions (services, pricing)
  - Testimonial quotes
  - FAQ answer text
  - Footer copy and descriptions
  - Hero paragraph

**For Short Headings/Subheadings (Already Center-Positioned):**
- Replace `justify` with `text-center` (center-aligned)
- Applies ONLY to short eyebrow text and section subheadings that are already center-positioned:
  - Section eyebrow text ("GOOD TO KNOW," "REAL RESULTS," "BUILD YOUR SYSTEM," etc.)
  - Their accompanying headline/subheadline pairs in center-positioned sections

**Important Notes:**
- Do NOT change font size, weight, color, or spacing
- Only modify the text-alignment property
- Apply changes consistently across EVERY section

### Files to Audit
1. **`/components/hero/hero.tsx`** - Hero paragraph
2. **`/components/services/services-section.tsx`** - Service card descriptions
3. **`/components/brands/brands-section.tsx`** - Brand/trust-badge descriptions
4. **`/components/pricing/pricing-section.tsx`** - Section subheading, pricing tier descriptions
5. **`/components/configurator/configurator-section.tsx`** - Configurator descriptions
6. **`/components/reviews/reviews-section.tsx`** - Section subheading, testimonial quotes
7. **`/components/faq/faq-section.tsx`** - Section subheading, FAQ answer text
8. **`/app/layout.tsx` or `/components/footer/footer.tsx`** - Footer description and copy

### Search Pattern
Search for these Tailwind classes and HTML attributes:
- `text-justify`
- `text-align: justify` (inline styles)
- `justify` (in className, check context to ensure it's text-justify, not flexbox justify-*)

### Correction Pattern
Replace with:
- `text-left` for body/multi-line content
- `text-center` for short center-positioned headings (verify context first)

---

## Additional Requirement: Create New /reviews Page

### Reviews Page Scope
**Purpose:** Build a comprehensive customer reviews page for NextDay HVAC using existing design system.

**URL:** `/reviews`

**Design Requirements:**
- Use existing site's design system (colors, typography, spacing, button styles, section patterns)
- Reuse existing review card component design from homepage
- All body text should be left-aligned (not justified)
- Display all customer reviews (not limited to 3 like homepage carousel)

### Page Sections (in order)

#### 1. Header Section
- **Eyebrow Text:** Reuse "REAL RESULTS" style from homepage testimonials section
- **Headline:** Reviews-page-appropriate headline (e.g., "Homeowners cooled down fast and saved" or similar)
- **Stat Row:** Reuse stat row from homepage with 4 metrics:
  - 4.9★ average rating
  - 2,800+ homes serviced
  - 94% installs completed by next day
  - $1,420 average saved
- **Layout:** Match the existing homepage section header pattern (centered, stacked layout)
- **Text Alignment:** Center-aligned for eyebrow and headline (already centered sections)

#### 2. Full Reviews Grid
- **Component Reuse:** Reuse existing review card design from homepage carousel
- **Card Content Structure:**
  - 5-star rating row (yellow stars)
  - Bold review title
  - Review quote/text
  - Reviewer name and location
  - "Verified Customer" badge
- **Grid Layout:**
  - **Desktop:** 3 columns
  - **Tablet:** 2 columns
  - **Mobile:** 1 column
- **Display Scope:** All customer reviews (not limited to 3 like homepage)
- **Text Alignment:** Left-aligned review quotes and descriptions
- **Responsive Gaps:** Consistent spacing scaled for each breakpoint

#### 3. Pagination or Load More Control
- **Implementation Option:** Either pagination buttons OR "Load More" button (choose based on review count)
- **Purpose:** If review count is large, allow visitors to browse/paginate instead of infinite scroll
- **Replace carousel behavior:** Avoid auto-cycling or timed transitions (static page, user-controlled browsing)

#### 4. CTA Section (Bottom)
- **Primary CTA:** "Book your installation" button
- **Styling:** Match homepage hero CTA style and color
- **Layout:** Centered or paired button layout
- **Function:** Links to booking flow

### Footer Navigation Update
- **Update Footer Links:** Change "Reviews" link under "Company" column
- **Current Behavior:** Likely an anchor link to homepage testimonials section (remove)
- **New Behavior:** Point to `/reviews` as a proper page link
- **Note:** Verify footer structure before making change

### Review Content Generation
**If Real Reviews Don't Exist:**
- Generate additional realistic sample reviews beyond the 3 shown on homepage
- Create reviews with:
  - Varying names and locations (realistic diversity)
  - Ratings: 4-5 stars (mostly 5-star with some 4-star)
  - HVAC-related feedback themes:
    - Fast/next-day installation
    - Pricing transparency and fair quotes
    - Technician professionalism and expertise
    - High-quality workmanship
    - Friendly service experience
- **Target:** At least 8-15 total reviews for a full-looking grid
- **Format:** Match existing review card structure exactly

### Files to Create
1. **`/app/reviews/page.tsx`**
   - Main reviews page component
   - Render header section with stats
   - Compose review grid with pagination/load-more
   - Add CTA section at bottom
   - Set page metadata (title, description for SEO)

2. **`/lib/reviews-data.ts`** (if needed)
   - Export all review data
   - Structure: Array of review objects with id, rating, title, quote, name, location, verified badge
   - If reviews are already defined elsewhere, reuse that file

### Files to Modify
1. **Footer Component** (likely `/components/footer/footer.tsx` or layout)
   - Update "Reviews" link under "Company" column
   - Change from anchor link `#reviews` (or similar) to `/reviews` page link
   - Verify structure and ensure link text remains "Reviews"

### Files to Reuse (no modifications needed)
- Review card component (from `/components/reviews/review-card.tsx` or similar)
- Stat row component (from testimonials section)
- Section header pattern (eyebrow + headline + description)
- Button component (from `/components/ui/button.tsx`)

### Design Consistency Notes
- **Header section styling:** Match homepage "REAL RESULTS" section exactly
- **Review card styling:** Use identical card component from homepage carousel
- **Responsive behavior:** Follow existing site breakpoints (mobile: <768px, tablet: 768-1024px, desktop: >1024px)
- **Color scheme:** Use design system colors (no changes from homepage)
- **Typography:** All fonts, sizes, and weights match homepage

---

## Additional Requirement: Create New /about Page

### About Page Scope
**Purpose:** Build a comprehensive company information page for NextDay HVAC using existing site design system.

**URL:** `/about`

**Design Requirements:**
- Use existing site's design system (colors, typography, spacing, button styles, section patterns)
- Ensure page feels native to the rest of the site
- Reuse existing components where available (brand logos, stat cards, icons)
- All body text should be left-aligned (not justified)

### Page Sections (in order)

#### 1. Hero Section
- **Headline:** Introducing the company (e.g., "Who We Are" or "About NextDay HVAC")
- **Intro Paragraph:** Short company introduction with key differentiators
- **Company Facts:** Extract from existing footer copy:
  - Transparent, all-inclusive HVAC pricing
  - Certified next-day installation
  - No surprise quotes
  - No pushy sales visits
  - License/insurance line: "Lic. #HVAC-884213 · Fully Insured & Bonded"
- **Text Alignment:** Left-aligned body paragraph

#### 2. Mission/Story Section
- **Content:** 2-3 short paragraphs on company approach
- **Key Themes:**
  - Fast installations
  - Upfront pricing
  - Certified local crews
- **Text Alignment:** Left-aligned body text (not justified)
- **Layout:** Standard section with heading and paragraphs

#### 3. Stats/Trust Bar Section
- **Component Reuse:** Reuse stat style from existing testimonials section
- **Stats to Display:**
  - 4.9★ average rating
  - 2,800+ homes serviced
  - 94% installs completed by next day
  - $1,420 average saved
- **Layout:** Horizontal stat row (like existing "Real Results" section)
- **Format:** Icon/badge + number + label for each stat

#### 4. Brands/Partners Section
- **Component Reuse:** Reuse existing brand logo row component from homepage
- **Brands to Display:** Voltas, LG, Whirlpool, Blue Star, AmazonBasics, Coolngi
- **Layout:** Horizontal scrollable or grid row of logos
- **Styling:** Match existing brand section styling
- **Logo File Update:** ✅ COMPLETED — `brands-banner.tsx` now renders the 6 uploaded partner logo images from `/public/images/partners/` (Voltas, LG, Whirlpool, Blue Star, Amazon, Fujitsu) via `next/image` instead of the previous inline SVGs. This banner is shared by the homepage and the /about page. Verified in-browser.

#### 5. Certifications/Guarantees Section
- **Component Reuse:** Reuse 4-column icon-card layout from homepage
- **Cards to Display:**
  - Certified Installation
  - Permits & Disposal
  - 10-Year Warranty
  - Free 1st-Year Service
- **Icons:** Reuse existing icons from homepage
- **Layout:** 4 columns on desktop, responsive on tablet/mobile
- **Text Alignment:** Left-aligned descriptions (not justified)

#### 6. CTA Section (Bottom)
- **Primary CTA:** "Book Your Installation" button linking to booking flow
- **Secondary Link:** "See How It Works" link
- **Styling:** Match hero CTA style from homepage
- **Layout:** Centered or paired button/link layout

### Navigation Updates
**Add to Main Navigation:**
- **New nav item:** "About"
- **Position:** Between logo and "Shop Systems" button (or wherever fits current nav layout)
- **Link:** Points to `/about`
- **Implementation:** Update header/nav component to include "About" link

### Files to Create
1. **`/app/about/page.tsx`**
   - Main about page component
   - Import and compose all sections
   - Set page metadata (title, description for SEO)

2. **`/components/about/about-hero.tsx`**
   - Hero section component
   - Headline, intro paragraph, license/insurance info

3. **`/components/about/about-mission.tsx`**
   - Mission/story section (2-3 paragraphs)
   - Left-aligned body text

### Files to Reuse (no modifications needed)
- Existing brand logo row component (from `/components/brands/`)
- Existing stat card component (from testimonials section)
- Existing icon-card layout (from certifications/guarantees)
- Existing button components (from `/components/ui/button.tsx`)

### Files to Modify
- **Navigation Component** (e.g., `/components/header/header.tsx`)
  - Add "About" nav link between logo and "Shop Systems" button

### Content Notes
- **Tone:** Professional, transparent, customer-focused (match existing brand voice)
- **Facts:** Source from existing footer copy and testimonials section data
- **Stats:** Use real metrics from testimonials section (4.9★, 2,800+ homes, 94% completion, $1,420 savings)

---

## Additional Requirement: Navigation Bar Simplification

### Navigation Bar Scope
**Current Navigation Items to Remove:**
- Systems (anchor link to services grid)
- Pricing (anchor link to pricing section)
- Configure (anchor link to system configurator)
- Reviews (anchor link to testimonials section)
- FAQ (anchor link to FAQ accordion section)

**Navigation Bar to Keep:**
- Logo/wordmark on the left
- "Shop Systems" CTA button on the right

**Important Notes:**
- Do NOT modify footer navigation (Systems, Company, Support columns already point to separate pages)
- Footer links should remain as-is unless separately reviewed
- Adjust nav spacing/alignment to look intentional and balanced with fewer items
- Eliminate empty gaps or awkward centering

### Navigation Implementation Details
**File to Modify:**
- `/components/header/header.tsx` (or similar navigation component)

**Changes:**
1. **Remove navigation links**: Delete all anchor-link items (Systems, Pricing, Configure, Reviews, FAQ)
2. **Maintain structure**: Keep logo and "Shop Systems" button
3. **Adjust spacing**: Use `justify-between` flexbox to spread logo to left and button to right
4. **Remove unused nav container**: If the nav was in a separate container, either remove or style appropriately
5. **Test responsive**: Ensure mobile/tablet views still look balanced with just logo and CTA

**Layout Structure:**
```
[Logo/Wordmark]                    [Shop Systems Button]
```

---

## Implementation Steps

### Step 1: Simplify Navigation Bar
**File to Modify:** Navigation component (likely `/components/header/header.tsx` or embedded in layout)

**Changes:**
1. Remove all five anchor-link nav items
2. Keep logo on left and "Shop Systems" button on right
3. Use `flex justify-between items-center` for clean alignment
4. Remove or hide nav-specific spacing/containers
5. Verify responsive design on mobile/tablet

**Spacing Considerations:**
- Use `justify-between` to spread items with automatic spacing
- Add reasonable padding to container (left/right margin)
- Ensure button remains clickable and visible on all screen sizes

---

### Step 2: Create Service Detail Page Structure
**Files to Create:**
- `/app/services/[slug]/page.tsx` - Dynamic service detail page
- `/app/services/layout.tsx` - Optional shared layout for services section

**What it Does:**
- Accept dynamic `[slug]` parameter from URL (e.g., `/services/air-conditioning`)
- Fetch service data from the main SERVICES array using slug matching
- Display service details: image, icon, title, full description, and CTA
- Provide navigation back to services or main page

**Implementation Details:**
- Use `generateStaticParams()` to pre-generate all 8 service pages (static optimization)
- Match slug against `service.id` values to find the correct service
- Display 404 or fallback if slug doesn't match any service

---

### Step 2: Refactor ServicesSection Component
**File to Modify:** `/components/services/services-section.tsx`

**Changes:**
1. **Remove marquee wrapper**: Delete the flex container with `w-max animate-marquee gap-6`
2. **Replace with grid layout**: 
   - Parent grid: `grid-cols-4 gap-6` (4 columns on desktop)
   - Responsive: `grid-cols-2` (tablet), `grid-cols-1` (mobile)
3. **Remove duplicated array**: Use single `SERVICES` array instead of `[...SERVICES, ...SERVICES]`
4. **Update ServiceCard component**:
   - Change from fixed `w-[280px]` to responsive width
   - Add "Learn More" button at bottom
   - Button routes to `/services/{service.id}` using Next.js Link

**Card Layout (Vertical Stack)**
```
- Image (responsive height)
- Icon badge (centered at bottom of image, overlapping)
- Content section (padding):
  - Service title
  - Service description
  - [Learn More] button/link
```

---

### Step 3: Responsive Design Implementation
**Breakpoints & Column Counts:**
- **Mobile** (< 768px): `grid-cols-1` - single column, full width with margin
- **Tablet** (768px - 1024px): `grid-cols-2` - two columns
- **Desktop** (> 1024px): `grid-cols-4` - four columns (2 rows of 4)

**Card Responsive Details:**
- Image height: responsive (e.g., `h-40` to `h-48`)
- Font sizes: adjusted via Tailwind responsive prefixes
- Padding/gap: scale appropriately for mobile vs desktop
- Button: full-width or auto, consistent styling

---

### Step 4: Update ServiceCard Component
**New/Modified Props:**
- Card should accept `service` prop (existing)
- Link wrapping the card or specific "Learn More" button

**New JSX Structure:**
```jsx
<article className="flex flex-col rounded-2xl border border-border bg-card shadow-sm overflow-hidden">
  {/* Image Container with Icon Badge */}
  <div className="relative h-40 sm:h-44 md:h-48 w-full">
    <Image ... />
    <span className="icon badge">...</span>
  </div>
  
  {/* Content Container */}
  <div className="flex flex-col flex-grow px-4 py-5 text-center sm:px-5 sm:pb-6 sm:pt-9">
    <h3 className="text-lg font-bold text-brand">...</h3>
    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">...</p>
    
    {/* Learn More Button - Flexbox spacing to push to bottom */}
    <div className="mt-auto">
      <Link href={`/services/${service.id}`} className="inline-block mt-4">
        <button className="...">Learn More</button>
      </Link>
    </div>
  </div>
</article>
```

**Key Changes:**
- Use `flex flex-col` and `flex-grow` to make card height fill uniformly
- Use `mt-auto` on button to push it to bottom regardless of description length
- Maintain circular icon badge positioning at image bottom

---

### Step 5: Create "Learn More" Button Styling
**Button Specifications:**
- Style: Outlined or solid secondary button
- Hover state: Color shift or subtle background
- Consistency: Match existing button component from `/components/ui/button.tsx`
- Size: Medium (`md` variant if button component supports)
- Spacing: Add margin-top to separate from description

---

### Step 6: Remove Marquee Animation from CSS
**File to Modify:** `/app/globals.css`

**Action:**
- Keep marquee animation definition (may be used elsewhere, e.g., testimonials)
- Remove only from ServicesSection usage (no CSS change needed if removed from JSX)

---

### Step 7: Update ServiceCard Width Styling
**Current:** `w-[280px] shrink-0` (fixed width for marquee)
**New:** Remove fixed width, use responsive grid column span
- Cards will automatically size to grid column width
- Maintain consistent card height via flexbox

---

## Data Mapping: Service IDs to URL Slugs

All 8 services with their corresponding route slugs:

| Service Title | Service ID | URL Path |
|---|---|---|
| Air Conditioning | `air-conditioning` | `/services/air-conditioning` |
| Heating Systems | `heating-systems` | `/services/heating-systems` |
| Heat Pumps | `heat-pumps` | `/services/heat-pumps` |
| Ductless Mini-Splits | `ductless-mini-splits` | `/services/ductless-mini-splits` |
| Ductwork | `ductwork` | `/services/ductwork` |
| Commercial HVAC | `commercial-hvac` | `/services/commercial-hvac` |
| Indoor Air Quality | `indoor-air-quality` | `/services/indoor-air-quality` |
| Maintenance & Repairs | `maintenance-repairs` | `/services/maintenance-repairs` |

---

## File Changes Summary

### New Files to Create
1. **`/app/services/layout.tsx`** (optional)
   - Shared layout for all service routes
   - Can include breadcrumb navigation

2. **`/app/services/[slug]/page.tsx`**
   - Dynamic service detail page
   - `generateStaticParams()` for all 8 services
   - Display service details and CTA

### Files to Fix/Audit (Responsive Design Across All Sections)
**No new files created for this requirement.** Update existing components with responsive breakpoints and mobile-first design patterns:
1. **Navigation:** Add hamburger menu and slide-out panel for mobile/tablet
2. **Hero, Brands, Trust Bar, Services, Pricing, Configurator, Testimonials, FAQ, Footer:** Update Tailwind breakpoint classes (sm/md/lg/xl) for responsive grid/column changes
3. **All Pages:** Verify responsive behavior on new /about, /reviews, and /services/[slug] pages

---

### Files to Create (New Reviews Page)
1. **`/app/reviews/page.tsx`**
   - Main reviews page component
   - Render header section with stats
   - Compose review grid with pagination/load-more
   - Add CTA section at bottom
   - Set page metadata (title, description for SEO)

2. **`/lib/reviews-data.ts`** (if needed)
   - Export all review data
   - Structure: Array of review objects (id, rating, title, quote, name, location, verified)
   - Reuse if reviews data already exists elsewhere

### Files to Create (New About Page)
1. **`/app/about/page.tsx`**
   - Main about page component
   - Compose all sections
   - Add page metadata (title, description, og tags)

2. **`/components/about/about-hero.tsx`**
   - Hero section: headline, intro paragraph, license/insurance info
   - Left-aligned body text

3. **`/components/about/about-mission.tsx`**
   - Mission/story section: 2-3 paragraphs on company approach
   - Left-aligned body text

### Files to Modify
1. **Responsive Design Fixes** (across all sections)
   - `/components/header/header.tsx` - Add hamburger menu, slide-out panel, responsive logo sizing
   - `/components/hero/hero.tsx` - Stack columns on mobile/tablet, scale fonts, adjust CTA buttons
   - `/components/brands/brands-section.tsx` - Responsive grid: 6→3→2 columns
   - Certifications bar - Responsive grid: 4→2→1 columns
   - `/components/services/services-section.tsx` - Responsive grid: 4→2→1 columns
   - `/components/pricing/pricing-section.tsx` - Stack cards vertically on mobile/tablet
   - `/components/configurator/configurator-section.tsx` - Stack form + summary on mobile/tablet
   - `/components/reviews/reviews-section.tsx` - Responsive grid: 3→2→1 columns
   - `/components/faq/faq-section.tsx` - Full-width, aligned icons
   - `/components/footer/footer.tsx` - Stack 4-column layout to 2 columns on tablet, 1 on mobile

2. **Text Alignment Corrections** (across all sections)
   - `/components/hero/hero.tsx` - Hero paragraph: `justify` → `text-left`
   - `/components/services/services-section.tsx` - Card descriptions: `justify` → `text-left`
   - `/components/brands/brands-section.tsx` - Badge descriptions: `justify` → `text-left`
   - `/components/pricing/pricing-section.tsx` - Subheading: `justify` → `text-center`, tier descriptions: `justify` → `text-left`
   - `/components/configurator/configurator-section.tsx` - Descriptions: `justify` → `text-left`
   - `/components/reviews/reviews-section.tsx` - Subheading: `justify` → `text-center`, quotes: `justify` → `text-left`
   - `/components/faq/faq-section.tsx` - Subheading: `justify` → `text-center`, answer text: `justify` → `text-left`
   - `/components/footer/footer.tsx` (or footer section in layout) - Copy: `justify` → `text-left`

2. **Footer Component** (likely `/components/footer/footer.tsx` or layout)
   - Update "Reviews" link under "Company" column
   - Change from anchor link (e.g., `#reviews`) to `/reviews` page link
   - Ensure link text remains "Reviews"

3. **Navigation Component** (likely `/components/header/header.tsx` or similar)
   - Remove all five anchor-link nav items (Systems, Pricing, Configure, Reviews, FAQ)
   - Add "About" link pointing to `/about` (position between logo and "Shop Systems" button)
   - Keep logo/wordmark on left, "Shop Systems" CTA on right
   - Update flex layout to use `justify-between` for proper spacing
   - Verify responsive behavior on mobile/tablet

4. **`/components/services/services-section.tsx`**
   - Remove marquee animation logic
   - Implement static grid layout
   - Update ServiceCard component
   - Add "Learn More" button with Link routing

5. **`/app/globals.css`** (if needed)
   - Remove marquee usage (but keep animation definition)
   - No major CSS changes required

### Files Not Changing
- `/lib/constants.ts` - SERVICES array remains same (no duplication needed)
- `/app/page.tsx` - ServicesSection import unchanged
- Card icon badge styling - maintained as-is

---

## Potential Challenges & Solutions

| Challenge | Solution |
|---|---|
| Unequal card heights (descriptions vary) | Use flexbox with `flex-grow` to make all cards same height; button `mt-auto` pushes to bottom |
| Responsive grid breakpoints | Use Tailwind responsive prefixes: `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` |
| Icon badge positioning | Keep existing absolute positioning at image bottom overlap |
| Service page SEO | Use dynamic metadata generation in `[slug]/page.tsx` with service title/description |
| Slug mismatch errors | Implement fallback 404 or redirect in `[slug]/page.tsx` |
| Service image loading | Maintain Image component with `fill` layout and proper sizing |

---

## Responsive Design Breakdown

### Mobile (< 768px)
```
[Learn More]
Grid: 1 column
Card width: Full container width minus padding
Margins: Equal on sides
```

### Tablet (768px - 1024px)
```
[Learn More]  [Learn More]
Grid: 2 columns
Gap: 4-6 units
Card width: 50% of container
```

### Desktop (> 1024px)
```
[Learn More]  [Learn More]  [Learn More]  [Learn More]
[Learn More]  [Learn More]  [Learn More]  [Learn More]
Grid: 4 columns (2 rows)
Gap: 6 units
Card width: 25% of container
```

---

## Testing Checklist

### Responsive Design Updates ✅ COMPLETED
**Tested at mobile (375px) and desktop widths in-browser.** The main gap was the navigation bar (no mobile treatment); all other sections already used responsive Tailwind grid/flex classes and were verified.

- [x] Navigation: Hamburger menu visible on mobile, horizontal layout on `sm`+ (desktop/tablet)
- [x] Navigation: Collapsible panel displays all nav links (About, Reviews) and the Shop Systems CTA on mobile
- [x] Navigation: Logo visible and appropriately sized at all breakpoints
- [x] Hero: Columns stack vertically on mobile/tablet (text above image)
- [x] Hero: Headline font size reduces on mobile, no awkward wrapping
- [x] Hero: CTA buttons stack full-width on mobile, side-by-side on desktop
- [x] Hero: Floating rating card positioned correctly, no overlap with text
- [x] Brands section: 6 columns on desktop, 3 on tablet, 2 on mobile
- [x] Trust/Certifications bar: 4 columns on desktop, 2 on tablet, 1 on mobile
- [x] Services grid: 4 columns on desktop, 2 on tablet, 1 on mobile
- [x] Services cards: Images, icons, and buttons scale properly, no text overflow
- [x] Pricing section: 3 cards side-by-side on desktop, stacked on mobile/tablet
- [x] Pricing: "Best Value" card remains visually distinct when stacked
- [x] Configurator: Two columns on desktop, stacked on mobile/tablet
- [x] Configurator: Form elements (slider, buttons) wrap/resize without overflow
- [x] Testimonials: Carousel shows 1 card on mobile, 2 on tablet, 3 on desktop
- [x] Testimonials: Carousel arrows/dots accessible on mobile
- [x] FAQ accordion: Full-width on mobile, expand/collapse icons aligned
- [x] Footer: 4-region layout on desktop collapses to stacked columns on mobile
- [x] Footer: Copyright and legal links stack vertically on mobile if needed
- [x] /about page: All sections responsive, reused components match homepage behavior
- [x] /reviews page: Grid responsive, load-more usable on mobile
- [x] No horizontal scrolling at any breakpoint (verified: document is not horizontally scrollable at 375px)
- [x] All touch targets (hamburger, mobile nav links, CTA) at least 44px on mobile
- [x] Images scale/crop gracefully, no stretching or overflow

### Text Alignment Updates
- [ ] Hero paragraph is left-aligned (not justified)
- [ ] Section subheadings are center-aligned (only where already centered)
- [ ] Service card descriptions are left-aligned
- [ ] Brand/trust-badge descriptions are left-aligned
- [ ] Pricing tier descriptions are left-aligned
- [ ] Pricing section subheading is center-aligned
- [ ] Testimonial quotes are left-aligned
- [ ] Reviews section subheading is center-aligned
- [ ] FAQ answer text is left-aligned
- [ ] FAQ section subheading is center-aligned
- [ ] Footer copy is left-aligned
- [ ] Font sizes, weights, colors, and spacing unchanged
- [ ] No uneven spacing or ragged edges from justified alignment

### Reviews Page Updates
- [ ] Page accessible at `/reviews`
- [ ] Header section renders correctly with eyebrow, headline, and stat row
- [ ] Stat row displays all 4 metrics (4.9★ rating, 2,800+ homes, 94% completion, $1,420 savings)
- [ ] All customer reviews display in grid (not limited to 3 like homepage)
- [ ] Review cards render with: 5-star rating, title, quote, name, location, verified badge
- [ ] Grid displays 3 columns on desktop, 2 columns on tablet, 1 column on mobile
- [ ] Pagination or "Load More" control functional (if large review count)
- [ ] No auto-cycling or timed transitions (static page, user-controlled)
- [ ] Review quotes are left-aligned (not justified)
- [ ] CTA button "Book your installation" visible at bottom and functional
- [ ] Footer "Reviews" link now points to `/reviews` (not anchor link)
- [ ] All review content generated or sourced (realistic sample reviews if needed)
- [ ] Page metadata set correctly (title, description, og tags)
- [ ] Responsive design works on mobile/tablet/desktop

### About Page Updates ✅ COMPLETED
- [x] Page accessible at `/about`
- [x] All 6 sections render correctly (hero, mission, stats, brands, certifications, CTA)
- [x] "About" nav link appears between logo and "Shop Systems" button
- [x] Hero section displays headline, intro paragraph, and license/insurance info
- [x] Mission section displays 2-3 paragraphs with left-aligned body text
- [x] Stats section displays the metrics from the shared StatsBar (4.9★, 94% next-day completion, $1,420 average saved)
- [x] Brand logos render correctly (Voltas, LG, Whirlpool, Blue Star, Amazon, Fujitsu)
- [x] Certifications section displays 4 icon cards (Certified Installation, Permits & Disposal, 10-Year Warranty, Free 1st-Year Service)
- [x] CTA buttons work: "Book Your Installation" links to booking flow, "See How It Works" link functional
- [x] Page metadata set correctly (title, description)
- [x] Responsive design works on mobile/tablet/desktop
- [x] All text properly left-aligned (not justified)

### Navigation Updates ✅ COMPLETED
- [x] All anchor-link nav items removed (Systems, Pricing, Configure, Reviews, FAQ)
- [x] "About" nav link added and visible
- [x] Logo/wordmark remains visible on left
- [x] "Shop Systems" CTA button remains on right
- [x] Navigation spacing looks balanced and intentional with new "About" link
- [x] No empty gaps or awkward centering in nav
- [x] Mobile nav is still readable and usable — collapses into a hamburger menu (About, Reviews, Shop Systems) below the `sm` breakpoint so items never overflow on small screens
- [x] Footer navigation unchanged (Systems, Company, Support columns)

### Services Grid Updates
- [ ] Grid displays 1 column on mobile
- [ ] Grid displays 2 columns on tablet
- [ ] Grid displays 4 columns (2 rows) on desktop
- [ ] All 8 cards visible with no scrolling needed on desktop
- [ ] "Learn More" buttons route to correct service pages
- [ ] Service detail pages render with correct data
- [ ] Icon badge overlaps image correctly on all screen sizes
- [ ] Cards have uniform height with button at bottom
- [ ] No marquee animation visible
- [ ] Responsive resize works smoothly
- [ ] Static service pages pre-generate correctly

---

## Known Issues to Fix

### CTA Button Bug: "Shop Systems" Button Not Working After First Click
- **Location:** Top-right corner of navigation bar
- **Issue Description:** The "Shop Systems" button works only on the first click (navigates to pricing section). After the first click, it stops functioning and does not respond to subsequent clicks.
- **Expected Behavior:** The button should consistently navigate to the pricing section on every click, regardless of how many times it's clicked.
- **Impact:** Users cannot navigate back to the pricing section after visiting another page if they need to revisit it.
- **Status:** ✅ COMPLETED — Root cause was the plain `<Link href="/#pricing">`: once the URL hash was already `#pricing`, Next.js did not re-trigger a scroll on repeat clicks. Fixed with an `onClick` handler that calls `scrollToId('pricing')` directly when already on the home page (so repeat clicks always re-scroll), and falls back to `router.push('/#pricing')` from other pages. Verified in-browser: repeat clicks consistently scroll to the pricing section.

---

## Implementation Order

1. **Audit and fix responsive design** - Test all sections at mobile/tablet/desktop breakpoints; add hamburger menu, stack layouts, fix overflow/scrolling issues across entire site
2. **Audit and fix text alignment** - Replace justified text with left-aligned (body) and center-aligned (headings) across all sections
3. **Simplify navigation bar** - Remove five anchor-link items, keep logo and CTA button, add "About" link
4. **Create /reviews page** - Build customer reviews page with header stats, full review grid, pagination/load-more, and CTA
5. **Create /about page** - Build company information page with all 6 sections (hero, mission, stats, brands, certifications, CTA)
6. **Update footer links** - Change "Reviews" link to point to `/reviews` page (remove anchor link)
7. Create `/app/services/[slug]/page.tsx` and layout
8. Update `ServiceCard` component to include "Learn More" button
9. Update `ServicesSection` component to use grid instead of marquee
10. Remove marquee wrapper and duplicated array logic
11. Verify all routing works
12. Run final responsive testing on all new pages and updated sections
13. Run build to confirm static generation

