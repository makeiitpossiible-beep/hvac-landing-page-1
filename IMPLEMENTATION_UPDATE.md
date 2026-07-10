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

- [ ] Remove HVAC Jargons
  - [ ] Replace "NATE-certified" across all files
  - [ ] Replace "SEER2" and other technical terms
  - [ ] Review and update all HVAC-specific terminology
  - [ ] Files updated: hero, services, pricing, configurator, testimonials, features, footer
- [ ] Update Service Cards with Generated Images
  - [ ] Generate professional images for 6 services (Heat Pump, Duct Pump, HVAC, Electric, Refrigeration, Air Conditioning)
  - [ ] Update `components/services/services-section.tsx` to use generated images instead of icons
  - [ ] Verify image placement and card layout
- [ ] Update Colour Palette
  - [ ] Change dark blue to light blue in non-footer sections
  - [ ] Update global CSS color definitions
  - [ ] Update affected section components
  - [ ] Verify footer colors remain unchanged
- [ ] Reorder Page Sections
  - [ ] Move statistics section above review/testimonial cards
  - [ ] Update component ordering in `app/page.tsx`
  - [ ] Verify layout and spacing

