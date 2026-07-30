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

## Implementation Steps

### Step 1: Create Service Detail Page Structure
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

### Files to Modify
1. **`/components/services/services-section.tsx`**
   - Remove marquee animation logic
   - Implement static grid layout
   - Update ServiceCard component
   - Add "Learn More" button with Link routing

2. **`/app/globals.css`** (if needed)
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

1. Create `/app/services/[slug]/page.tsx` and layout
2. Update `ServiceCard` component to include "Learn More" button
3. Update `ServicesSection` component to use grid instead of marquee
4. Remove marquee wrapper and duplicated array logic
5. Test responsive breakpoints
6. Verify all routing works
7. Run build to confirm static generation

