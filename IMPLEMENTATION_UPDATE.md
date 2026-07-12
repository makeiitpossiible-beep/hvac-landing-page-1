# Implementation Plan — Paragraph Alignment & EM Dash Removal (IMPLEMENTATION_UPDATE.md)

This document outlines the proposed changes to justify paragraph alignments and rewrite website copy to remove EM dashes (`—`).

---

## Goal Description

1. **Bilateral Alignment**: Apply `text-align: justify` (bilateral alignment) to paragraphs containing body copy to improve readability and visual presentation.
2. **EM Dash Removal**: Scan the codebase for occurrences of the EM dash character (`—`), remove them, and rewrite the surrounding text to ensure clean, natural-sounding sentences.

---

## Proposed Styling Options (Bilateral Alignment)

We have two options to achieve bilateral alignment (`text-align: justify`):

### Option A: Global Stylesheet Rule (Recommended)
Add a rule in `app/globals.css` targeting `<p>` elements:
```css
@layer base {
  p {
    @apply text-justify;
  }
}
```
* **Pros**: Automatically applies to all paragraphs across the site, ensuring styling consistency without manual updates to every component.
* **Cons**: Short paragraph-like elements (e.g. labels, ratings) will technically have the rule, though they won't look different unless they wrap.

### Option B: Targeted Tailwind Classes
Manually add the `text-justify` utility class to specific text-heavy `<p>` elements.
* **Pros**: Fine-grained control over which paragraphs are justified.
* **Cons**: Increases utility class footprint and requires manual additions to any future paragraphs.

We recommend **Option A** because it ensures design consistency across the site. If there are specific elements we do *not* want to justify, we can override them locally using `text-left` or `text-center`.

---

## Proposed Copy Changes (EM Dash Removal)

Here are the specific lines identified and the proposed rewrites:

### 1. Hero Section Copy
* **File**: `components/hero/hero-section.tsx`
* **Current Copy**:
  > NextDay HVAC is a fully licensed and insured installation service. Our NATE-certified local crews handle everything — sizing, permits, install, and old-unit removal — with upfront pricing and no pushy sales visits.
* **Proposed Rewrite**:
  > NextDay HVAC is a fully licensed and insured installation service. Our NATE-certified local crews handle everything from sizing and permits to installation and old-unit removal, all with upfront pricing and no pushy sales visits.

### 2. Footer Copy
* **File**: `components/layout/footer.tsx`
* **Current Copy**:
  > Transparent, all-inclusive HVAC pricing with certified next-day installation. No surprise quotes, no pushy sales visits — just honest comfort.
* **Proposed Rewrite**:
  > Transparent, all-inclusive HVAC pricing with certified next-day installation. No surprise quotes, no pushy sales visits. Just honest comfort.

### 3. Configurator Pricing Note
* **File**: `components/configurator/configurator-section.tsx`
* **Current Copy**:
  > A certified supervisor confirms sizing on a quick 10-minute call before install — adjustments are always free.
* **Proposed Rewrite**:
  > A certified supervisor confirms sizing on a quick 10-minute call before install. Adjustments are always free.

### 4. Layout Metadata Title
* **File**: `app/layout.tsx`
* **Current Title**:
  > NextDay HVAC — Upfront Pricing. Next-Day Installation.
* **Proposed Rewrite**:
  > NextDay HVAC | Upfront Pricing. Next-Day Installation.

### 5. Hydration Bug Fix
* **File**: `components/configurator/configurator-section.tsx`
* **Issue**: React hydration mismatch error due to locale-dependent string formatting of square footage (`toLocaleString()`).
* **Fix**: Force English US formatting explicitly on both server and client side by changing `{sqft.toLocaleString()}` to `{sqft.toLocaleString('en-US')}`.

*Note: Code comments and internal markdown guides containing EM dashes will also be updated for complete consistency.*

---

## Revision 3 — Hero Pill Removal & Centered Text Alignments

To adjust the landing page design as requested:
1. **Hero Section Pill**: Remove the `<Reveal>` element wrapper and the `<span className="...">Your local HVAC installation experts</span>` pill from `components/hero/hero-section.tsx`.
2. **Hero Header**: Add `text-center` class to the main `h1` in `components/hero/hero-section.tsx` to align the title to the center of the column.
3. **Section Subheaders**: Ensure that the three section subheaders override the global paragraph `text-justify` alignment by adding `text-center` utility classes:
   - **Pricing Section Subheader**: "Every tier includes equipment, certified labor..." in `components/pricing/pricing-section.tsx`.
   - **Configurator Section Subheader**: "Tell us about your home and we'll size..." in `components/configurator/configurator-section.tsx`.
   - **Testimonials Section Subheader**: "Thousands of installs, measured by speed..." in `components/testimonials/testimonials-section.tsx`.

---

## Revision 4 — Brands We Work With & Our Services Sections

We will add two new sections to the homepage to boost brand trust and showcase service offerings:
1. **Brands We Work With**:
   - **File**: `components/features/brands-banner.tsx` [NEW]
   - **Details**: Center title "Brands we work with", then display 6 brand logos: Voltas, LG, Whirlpool, Blue Star, amazonbasics, Godrej, represented using high-fidelity inline SVGs.
   - **Placement**: Under `HeroSection` and above `FeaturesBanner`.
2. **Our HVAC Service**:
   - **File**: `components/services/services-section.tsx` [NEW]
   - **Details**: Center title "Our HVAC Service", center subtitle "Choose best technicians and latest HVAC technology", and show 6 service cards (Heat Pump, Duct Pump, HVAC, Electric, Refrigeration, Air Conditioning) with light blue circular icon backgrounds, custom blue outline SVGs, and dark bold centered text.
   - **Placement**: Under `FeaturesBanner` and above `PricingSection`.
   - **Layout**: Flex-wrap with centering to show 4 cards in row 1, and 2 cards centered in row 2 on desktop.

---

## Progress Tracking Checklist

This checklist tracks the implementation of these updates.

- [x] Apply bilateral alignment (`text-justify`)
  - [x] Add `@apply text-justify;` to `<p>` tags in `app/globals.css`
  - [x] Review page layouts to ensure no layout issues or awkward spacing occurs
- [x] Remove EM dashes from website copy
  - [x] Update `app/layout.tsx` metadata title
  - [x] Update `components/hero/hero-section.tsx` paragraph text
  - [x] Update `components/layout/footer.tsx` paragraph text
  - [x] Update `components/configurator/configurator-section.tsx` paragraph text
  - [x] (Optional) Update developer-facing code comments containing EM dashes
- [x] Hydration Mismatch Bug Fix
  - [x] Update `components/configurator/configurator-section.tsx` to use `{sqft.toLocaleString('en-US')}`
- [x] Revision 3 Tasks (Pill Removal & Centered Alignments)
  - [x] Remove the "Your local HVAC installation experts" pill from `components/hero/hero-section.tsx`
  - [x] Center the hero section header `h1`
  - [x] Center the pricing section subheader in `components/pricing/pricing-section.tsx`
  - [x] Center the configurator section subheader in `components/configurator/configurator-section.tsx`
  - [x] Center the testimonials section subheader in `components/testimonials/testimonials-section.tsx`
- [x] Revision 4 Tasks (Brands & Services Sections)
  - [x] Create `components/features/brands-banner.tsx` with high-fidelity brand SVGs
  - [x] Create `components/services/services-section.tsx` with high-fidelity service cards and line-art SVG icons
  - [x] Add `BrandsBanner` and `ServicesSection` components to `app/page.tsx`
  - [x] Verify responsive layouts and centered positioning of final row cards
- [x] Verify Changes
  - [x] Run Next.js development server and inspect page visually
  - [x] Build production bundle to verify compilation is successful

---

## Revision 5 — HVAC Jargon Removal & Design Updates

To make the website more accessible to general audiences and improve visual design:

### 1. Remove HVAC-Specific Jargons
Replace technical terms with common language:
- **"NATE-certified"** → Replace with "certified" or "professionally trained"
- **"SEER2"** → Replace with descriptive terms like "high-efficiency" or "energy-efficient"
- **Other jargons** → Scan all copy for HVAC-specific terminology and replace with explanations that general audiences understand

**Files to Update**:
- `components/hero/hero-section.tsx` (Hero section copy)
- `components/services/services-section.tsx` (Service descriptions)
- `components/pricing/pricing-section.tsx` (Pricing tier descriptions)
- `components/configurator/configurator-section.tsx` (Configurator copy)
- `components/testimonials/testimonials-section.tsx` (Testimonials if any jargon exists)
- `components/features/brands-banner.tsx` (Brand descriptions if any)
- `components/layout/footer.tsx` (Footer copy)

### 2. Service Cards: Icons to Generated Images
Replace icon representations with generated images in `components/services/services-section.tsx`:
- For each of the 6 service cards (Heat Pump, Duct Pump, HVAC, Electric, Refrigeration, Air Conditioning), generate professional, illustrative images
- Place these images in the card header area where icons currently appear
- Maintain card layout and styling while upgrading visual quality

### 3. Colour Palette Update
Change dark blue to light blue in specific sections:
- **Sections to Update**: Any section currently using dark blue (except footer which remains unchanged)
- **Sections Excluded**: Keep footer colors as-is
- **Objective**: Light blue will complement white-colored sections better
- **Files to Review**: Global CSS and individual section components for color definitions

### 4. Reorder Sections
Move the statistics section above the review/testimonial cards:
- **Current Order**: [Other sections] → Review Cards → Statistics
- **New Order**: [Other sections] → Statistics → Review Cards
- **File**: `app/page.tsx` (component ordering)

---

## Progress Tracking Checklist — Revision 5

- [x] Remove HVAC Jargons
  - [x] Replace "NATE-certified" across all files (hero copy + features description)
  - [x] Replace "SEER2" efficiency ratings with plain terms (Standard / High / Top efficiency)
  - [x] Replace "single-stage/two-stage/variable-speed compressor" and "(tonnage)" with plain language
  - [x] Files updated: hero, services, pricing (via constants), configurator (via constants), testimonials, features (via constants), FAQ
- [x] Update Service Cards with Generated Images
  - [x] Generate professional images for 6 services (Heat Pump, Duct Pump, HVAC, Electric, Refrigeration, Air Conditioning)
  - [x] Update `components/services/services-section.tsx` to use generated images instead of icons
  - [x] Verify image placement and card layout
- [x] Update Colour Palette
  - [x] Change dark blue to light blue in non-footer sections (FeaturesBanner + TestimonialsSection)
  - [x] Add `--brand-tint` light blue token to `app/globals.css`
  - [x] Update affected section components (features banner, testimonials, stats bar, carousel controls) with dark text for contrast
  - [x] Verify footer colors remain unchanged (still `bg-brand-dark`)
- [x] Reorder Page Sections
  - [x] Move statistics section above review/testimonial cards within `components/testimonials/testimonials-section.tsx`
  - [x] Verify layout and spacing

---

## Revision 6 — Efficiency Savings Percentages & Service Cards Carousel

Further refinements to pricing labels and service cards section to improve engagement and clarity:

### 1. Update Pricing Efficiency Labels to Savings Percentages
Replace generic efficiency level text with specific energy savings percentages for clearer user understanding:
- **"Standard efficiency"** → **"Saves ~15%"**
- **"High efficiency"** → **"Saves ~30%"**
- **"Top efficiency"** → **"Saves ~45%"**

**Files to Update**:
- `lib/constants.ts` (pricing tier `seer` field definitions)
- Verify display in `components/pricing/pricing-card.tsx`

### 2. Replace Service Cards Section with Horizontal Carousel
Redesign the "Our HVAC Service" section from a 6-card grid layout to an 8-card horizontal scrolling carousel with realistic photography:

**New Service Cards (from reference screenshot)**:
1. Air Conditioning - outdoor AC unit with snowflake icon
2. Heating Systems - furnace/boiler with flame icon
3. Heat Pumps - outdoor heat pump with circular arrow icon
4. Ductless Mini-Splits - wall-mounted AC with water droplet icon
5. Ductwork - metal ductwork with pipe icon
6. Commercial HVAC - rooftop units with building icon
7. Indoor Air Quality - air purifier with leaf icon
8. Maintenance & Repairs - technician working with wrench icon

**Requirements**:
- Display all 8 cards in a single horizontal line (no wrapping)
- Implement smooth left-right scrolling carousel with drag-to-scroll support
- Include white circular icon badge on each card (positioned over image in bottom-left or center)
- Each card shows: large realistic image, white icon badge, title, and description text below
- Add carousel controls (previous/next buttons) similar to testimonials carousel pattern
- Responsive behavior: on mobile, maintain horizontal scroll with touch/drag interaction; on desktop, enable mouse drag and buttons
- Smooth scroll animation and card snapping

**Files to Update**:
- `lib/constants.ts` (update/expand service data structure to include 8 items with names, descriptions, images, and icon data)
- `components/services/services-section.tsx` (redesign layout and styling for carousel)
- Consider creating `components/services/services-carousel.tsx` (if carousel logic warrants separate component)

### 3. Service Images
Each of the 8 service cards needs a high-quality, realistic photograph. These can either be:
- Generated using the GenerateImage tool with prompts for realistic HVAC/home imagery
- Sourced from the reference screenshot provided (preferred if images can be extracted/referenced)

---

## Progress Tracking Checklist — Revision 6

- [x] Update Pricing Efficiency Labels
  - [x] Replace "Standard efficiency" with "Saves ~15%" in `lib/constants.ts`
  - [x] Replace "High efficiency" with "Saves ~30%" in `lib/constants.ts`
  - [x] Replace "Top efficiency" with "Saves ~45%" in `lib/constants.ts`
  - [x] Verified pricing cards display correct labels in the browser
- [x] Redesign Service Cards Carousel
  - [x] Generated 8 realistic HVAC service card images (AC, Heating, Heat Pumps, Ductless Mini-Splits, Ductwork, Commercial HVAC, Indoor Air Quality, Maintenance & Repairs)
  - [x] Defined 8-item service data with images + lucide icon badges inside `components/services/services-section.tsx`
  - [x] Redesigned `components/services/services-section.tsx` into a single-line marquee carousel
  - [x] Added `--animate-marquee` keyframe to `app/globals.css` for slow continuous left-right motion
  - [x] Cards duplicated for a seamless loop; animation pauses on hover
  - [x] White circular icon badge over each image, with title + description below
  - [x] Edge fade masks on both sides; respects `prefers-reduced-motion`
  - [x] Removed old unused illustrated service images
  - [x] Verified layout in the browser

---

## Revision 7 — Smooth Color Palette & Responsive Mobile-First Design

(This revision was reverted in v4. See Revision 8 for the updated approach.)

---

## Revision 8 — Color Palette Refinement: Soften Surroundings, Keep Navy Anchor

To improve visual harmony without replacing the navy brand color, refine the palette by warming the background, adding bridge colors, and tinting sections for a smooth, premium feel:

### 1. Warm the Base White (Biggest Impact)
Change the page background from pure `#ffffff` to a barely-warm off-white (`#fafbfc`), and keep **pure white for cards** so they gently lift off the page.
- **Effect**: The navy configurator block and footer no longer collide with harsh pure white — the edges feel softer and more premium.
- **Files to Update**: `app/globals.css` (base background token)

### 2. Add a Steel-Blue Bridge Color
Introduce a mid-tone steel-blue (~`#5b7a9d`) as a new token for secondary elements: icons, borders, secondary buttons, dividers, and muted text.
- **Effect**: Creates a gradient of blues (light tint → steel → navy) so the eye has a natural path instead of jumping white → navy.
- **Files to Update**: `app/globals.css` (new `--steel-blue` token), any components using secondary icons or borders

### 3. Soften and Alternate Section Backgrounds
- Soften the existing light blue tint (`#e6f0fb` → `#eef4fb`)
- Alternate section backgrounds down the page: warm off-white → soft blue tint → warm off-white, etc.
- Add subtle visual breathing room between sections.
- **Files to Update**: All section components (hero, features, services, pricing, testimonials, FAQ) with alternating `bg-background` or `bg-brand-tint` classes

### 4. Bridge the Navy Configurator Block
Add a subtle transition treatment (thin border or tonal step) where the navy configurator block meets sections above/below so it reads as intentional rather than punched out.
- **Files to Update**: `components/configurator/configurator-section.tsx` (section background and block styling)

### 5. Audit Orange Usage — Keep It Sparse
Scan all components and restrict orange (`#ff6b35`) to **primary CTAs only** (main "Book"/"Get quote" buttons). Replace any decorative or secondary orange with steel-blue or navy.
- **Files to Audit**: All section components for stray orange accents

### Color Tokens to Add/Update in `app/globals.css`
- `--background`: Change to `#fafbfc` (warm off-white)
- `--card`: Keep or change to `#ffffff` (pure white for cards)
- `--steel-blue`: New token `#5b7a9d` (mid-tone bridge color)
- `--brand-tint`: Soften to `#eef4fb` (lighter, softer tint)
- Navy tokens: Keep `--brand: #1e3a5f` and `--brand-dark: #0f1e35` unchanged

### What Stays the Same
- Navy configurator block and footer colors
- Orange hue for primary CTAs
- Typography, layout structure, and responsive design from Revision 7

---

## Progress Tracking Checklist — Revision 8

- [ ] Warm the Page Background
  - [ ] Update `--background` token from `#ffffff` to `#fafbfc` in `app/globals.css`
  - [ ] Ensure `--card` remains or is set to `#ffffff` (pure white)
  - [ ] Verify layout contrast and text readability
- [ ] Add Steel-Blue Bridge Color
  - [ ] Define new `--steel-blue: #5b7a9d` token in `app/globals.css`
  - [ ] Apply to icon colors, borders, and secondary UI elements
  - [ ] Audit and update component classes for secondary elements
- [ ] Soften and Alternate Section Backgrounds
  - [ ] Soften `--brand-tint` from `#e6f0fb` to `#eef4fb` in `app/globals.css`
  - [ ] Apply alternating backgrounds to sections: hero (warm), features (tint), services (warm), pricing (tint), testimonials (warm), FAQ (tint)
  - [ ] Verify smooth visual rhythm down the page
- [ ] Bridge the Navy Configurator Block
  - [ ] Add subtle border or background gradient to configurator section
  - [ ] Ensure navy block transitions smoothly from surrounding sections
- [ ] Audit and Restrict Orange Usage
  - [ ] Scan all components for orange accents outside primary CTAs
  - [ ] Replace secondary/decorative orange with steel-blue or navy
  - [ ] Files to check: features, services, pricing, testimonials, FAQ, modals
- [ ] Test and Verify
  - [ ] Check color contrast ratios for WCAG AA compliance (especially steel-blue on white/backgrounds)
  - [ ] Verify layouts at desktop (1440px) and mobile (390px)
  - [ ] Ensure no visual regressions in button states, hover effects, or text readability

To enhance visual harmony and ensure the website is fully responsive across all devices:

### 1. Create Smooth, Complementary Color Palette
**Objective**: Replace dark blue buttons and blocks with a lighter color scheme to create visual harmony across sections, while keeping the footer unchanged.

**Current Color Structure**:
- Primary dark blue: `#1e3a5f` (brand color)
- Accent orange: `#ff6b35` (CTAs)
- White: `#ffffff` (backgrounds)

**Proposed Changes**:
- **Transition to a lighter, more harmonious palette** across non-footer sections
- **Introduce complementary lighter blue tones** for buttons and blocks (instead of dark blue)
- **Warm accent complementary colors** for visual balance
- **Maintain footer** with original darker branding (no changes)

**Color Token Updates in `app/globals.css`**:
1. Add new complementary light blue for buttons and non-footer blocks
2. Add transitional accent colors for smooth visual flow
3. Update all section backgrounds and button colors (except footer)
4. Ensure contrast ratios meet WCAG AA standards

**Files to Update**:
- `app/globals.css` (Add new complementary color tokens)
- `components/ui/button.tsx` (Update button colors if hardcoded)
- `components/pricing/pricing-card.tsx` (Replace dark blue buttons with lighter colors)
- `components/configurator/configurator-section.tsx` (Update form button colors)
- `components/hero/hero-section.tsx` (Update hero section accents if needed)
- `components/features/features-banner.tsx` (Update feature block backgrounds)
- `components/services/services-section.tsx` (Update service card styling if applicable)
- `components/testimonials/testimonials-section.tsx` (Update stats bar and card accents)
- `components/faq/faq-section.tsx` (Update accordion button colors)
- `components/layout/footer.tsx` (Keep footer colors unchanged - no updates needed)

**Color Palette Strategy**:
- Light blue: `#d4e8f7` or `#c5dff8` (soft, inviting, complements the primary brand)
- Light gray-blue: `#b0c4de` (transitional tone)
- Warm accent: `#ffa84d` or similar warm tone for soft CTAs
- Maintain white and near-white for card backgrounds
- Keep orange `#ff6b35` for primary CTAs only (sparingly)

### 2. Implement Mobile-First Responsive Design
**Objective**: Ensure the website is fully responsive and mobile-friendly with proper element resizing and adjustment.

**Responsive Breakpoints** (using Tailwind defaults):
- **Mobile**: 320px - 640px (single column, stacked layout)
- **Tablet**: 641px - 1024px (2-column or moderate spacing)
- **Desktop**: 1025px+ (full multi-column, optimized spacing)

**Implementation Strategy**:
1. **Mobile-First Approach**: Design for mobile first, then enhance for larger screens using `md:`, `lg:`, `xl:` prefixes
2. **Element Resizing**: Adjust padding, margins, and font sizes for readability on small screens
3. **Grid/Flexbox Adjustments**: Stack components vertically on mobile, arrange horizontally on larger screens
4. **Image Optimization**: Responsive images that scale appropriately
5. **Touch-Friendly Targets**: Ensure buttons and interactive elements are at least 44px tall on mobile
6. **Navigation**: Hamburger menu or collapsible navigation on mobile if needed

**Files to Review & Update**:
- `components/layout/navbar.tsx` (Mobile menu toggle, responsive layout)
- `components/hero/hero-section.tsx` (Mobile-friendly hero layout, stacked system cards)
- `components/pricing/pricing-card.tsx` (Responsive pricing cards - 1 col mobile, 2-3 col desktop)
- `components/features/features-banner.tsx` (Responsive grid: 1 col mobile → 4 col desktop)
- `components/services/services-section.tsx` (Carousel responsiveness, touch-friendly controls)
- `components/testimonials/testimonials-carousel.tsx` (Mobile carousel with swipe support)
- `components/configurator/configurator-section.tsx` (Mobile-friendly form layout, responsive inputs)
- `components/faq/faq-section.tsx` (Full-width on mobile, responsive padding)
- `components/layout/footer.tsx` (Responsive footer layout: stacked on mobile, multi-column on desktop)
- `components/modals/checkout-modal.tsx` (Full-screen modal on mobile, centered on desktop)

**Responsive Design Checklist**:
- [ ] All sections use `px-4 md:px-6 lg:px-8` for responsive horizontal padding
- [ ] All sections use `py-8 md:py-12 lg:py-16` for responsive vertical padding
- [ ] Typography scales: `text-lg md:text-xl lg:text-2xl` for headings
- [ ] Grids use `grid-cols-1 md:grid-cols-2 lg:grid-cols-3/4` patterns
- [ ] Images use `max-w-full h-auto` for responsive scaling
- [ ] Flexbox layouts use `flex-col md:flex-row` for mobile stacking
- [ ] Gap spacing uses `gap-4 md:gap-6 lg:gap-8`
- [ ] Buttons maintain minimum 44px height for mobile tap targets
- [ ] Modal overlays work correctly on all screen sizes
- [ ] No horizontal scrolling on any device
- [ ] Text remains readable at all breakpoints
- [ ] Images don't overflow container bounds

### 3. Visual Harmony & Copy Integration
- **Smooth transitions** between sections using complementary colors
- **Consistent padding and spacing** using Tailwind scale
- **Readable copy** at all breakpoints (text size adjustments)
- **Color consistency** across all interactive elements (buttons, links, accents)
- **Test on real devices** to ensure layout integrity

---

## Progress Tracking Checklist — Revision 7

- [ ] Create Smooth Color Palette
  - [ ] Define new complementary light blue token in `app/globals.css`
  - [ ] Define warm accent color token in `app/globals.css`
  - [ ] Update button component colors across site
  - [ ] Update pricing card button colors
  - [ ] Update configurator form button colors
  - [ ] Update feature section background colors
  - [ ] Update testimonials section styling
  - [ ] Update FAQ accordion colors
  - [ ] Verify footer colors remain unchanged
  - [ ] Test contrast ratios for WCAG AA compliance
- [ ] Implement Mobile-First Responsive Design
  - [ ] Update navbar for mobile responsiveness
  - [ ] Make hero section mobile-friendly
  - [ ] Optimize pricing cards for all screen sizes
  - [ ] Make features banner responsive (1-4 columns)
  - [ ] Ensure service carousel works on mobile
  - [ ] Test testimonials carousel on mobile
  - [ ] Make configurator form mobile-friendly
  - [ ] Optimize FAQ section for mobile
  - [ ] Make footer responsive (stack on mobile)
  - [ ] Test checkout modal on mobile devices
  - [ ] Verify all images scale responsively
  - [ ] Ensure no horizontal scrolling
  - [ ] Test touch interactions on mobile
  - [ ] Verify minimum 44px touch targets
  - [ ] Test on real mobile devices (iOS & Android)

