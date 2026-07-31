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
1. **Text Alignment Corrections** (across all sections)
   - `/components/hero/hero.tsx` - Hero paragraph: `justify` → `text-left`
   - `/components/services/services-section.tsx` - Card descriptions: `justify` → `text-left`
   - `/components/brands/brands-section.tsx` - Badge descriptions: `justify` → `text-left`
   - `/components/pricing/pricing-section.tsx` - Subheading: `justify` → `text-center`, tier descriptions: `justify` → `text-left`
   - `/components/configurator/configurator-section.tsx` - Descriptions: `justify` → `text-left`
   - `/components/reviews/reviews-section.tsx` - Subheading: `justify` → `text-center`, quotes: `justify` → `text-left`
   - `/components/faq/faq-section.tsx` - Subheading: `justify` → `text-center`, answer text: `justify` → `text-left`
   - `/components/footer/footer.tsx` (or footer section in layout) - Copy: `justify` → `text-left`

2. **Navigation Component** (likely `/components/header/header.tsx` or similar)
   - Remove all five anchor-link nav items (Systems, Pricing, Configure, Reviews, FAQ)
   - Add "About" link pointing to `/about` (position between logo and "Shop Systems" button)
   - Keep logo/wordmark on left, "Shop Systems" CTA on right
   - Update flex layout to use `justify-between` for proper spacing
   - Verify responsive behavior on mobile/tablet

3. **`/components/services/services-section.tsx`**
   - Remove marquee animation logic
   - Implement static grid layout
   - Update ServiceCard component
   - Add "Learn More" button with Link routing

4. **`/app/globals.css`** (if needed)
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

### About Page Updates
- [ ] Page accessible at `/about`
- [ ] All 6 sections render correctly (hero, mission, stats, brands, certifications, CTA)
- [ ] "About" nav link appears between logo and "Shop Systems" button
- [ ] Hero section displays headline, intro paragraph, and license/insurance info
- [ ] Mission section displays 2-3 paragraphs with left-aligned body text
- [ ] Stats section displays all 4 metrics (4.9★, 2,800+ homes, 94% completion, $1,420 savings)
- [ ] Brand logos render correctly (Voltas, LG, Whirlpool, Blue Star, AmazonBasics, Coolngi)
- [ ] Certifications section displays 4 icon cards (Certified Installation, Permits & Disposal, 10-Year Warranty, Free 1st-Year Service)
- [ ] CTA buttons work: "Book Your Installation" links to booking flow, "See How It Works" link functional
- [ ] Page metadata set correctly (title, description, og tags)
- [ ] Responsive design works on mobile/tablet/desktop
- [ ] All text properly left-aligned (not justified)

### Navigation Updates
- [ ] All anchor-link nav items removed (Systems, Pricing, Configure, Reviews, FAQ)
- [ ] "About" nav link added and visible
- [ ] Logo/wordmark remains visible on left
- [ ] "Shop Systems" CTA button remains on right
- [ ] Navigation spacing looks balanced and intentional with new "About" link
- [ ] No empty gaps or awkward centering in nav
- [ ] Mobile nav is still readable and usable with "About" link
- [ ] Footer navigation unchanged (Systems, Company, Support columns)

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

## Implementation Order

1. **Audit and fix text alignment** - Replace justified text with left-aligned (body) and center-aligned (headings) across all sections
2. **Simplify navigation bar** - Remove five anchor-link items, keep logo and CTA button, add "About" link
3. **Create /about page** - Build new company information page with all 6 sections (hero, mission, stats, brands, certifications, CTA)
4. Create `/app/services/[slug]/page.tsx` and layout
5. Update `ServiceCard` component to include "Learn More" button
6. Update `ServicesSection` component to use grid instead of marquee
7. Remove marquee wrapper and duplicated array logic
8. Test responsive breakpoints on navigation, about page, and services grid
9. Verify all routing works
10. Run build to confirm static generation

