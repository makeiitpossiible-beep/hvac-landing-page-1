# DESIGN_TOKENS.md
## HVAC E-Commerce Landing Page - Design Token System

### 📐 Overview
This document defines all design tokens for the HVAC landing page. These tokens are implemented in `app/globals.css` using Tailwind CSS v4 custom property syntax (`--color-*`, `--font-*`, etc.).

**Token Principle**: Single source of truth. All UI elements reference these tokens, never hardcoded values.

---

## 🎨 Color System

### Primary Palette (3 Core Colors)

#### Deep Slate Blue (Primary)
- **Name**: Primary
- **Usage**: Headers, footers, primary text, borders, section backgrounds
- **Values**:
  ```
  Base (#1e3a5f)
  Light (#2d4a7b) - Hover/interactive states
  Dark (#0f1e35) - Dark backgrounds, footer
  ```
- **Hex Codes**:
  - `--color-primary: #1e3a5f`
  - `--color-primary-light: #2d4a7b`
  - `--color-primary-dark: #0f1e35`

#### Crisp White (Secondary)
- **Name**: Secondary / Background
- **Usage**: Card backgrounds, text on dark, high-contrast elements
- **Values**:
  ```
  Pure White (#ffffff)
  Off-white (#f8f9fb) - Section backgrounds, subtle contrast
  ```
- **Hex Codes**:
  - `--color-secondary: #ffffff`
  - `--color-secondary-light: #f8f9fb`

#### Safety Orange (Accent)
- **Name**: Accent / Call-to-Action
- **Usage**: Primary CTA buttons, highlights, urgency indicators, hover states
- **Values**:
  ```
  Base (#ff6b35) - Primary CTA buttons
  Light (#ff8555) - Hover states
  Dark (#e55a2a) - Active/pressed states
  ```
- **Hex Codes**:
  - `--color-accent: #ff6b35`
  - `--color-accent-light: #ff8555`
  - `--color-accent-dark: #e55a2a`

---

### Neutral Scale (Grayscale)
Used for text, borders, backgrounds, and UI elements when color isn't needed.

```
--color-gray-50:  #f9fafb   (Lightest backgrounds)
--color-gray-100: #f3f4f6   (Light section backgrounds)
--color-gray-200: #e5e7eb   (Light borders, dividers)
--color-gray-300: #d1d5db   (Medium borders)
--color-gray-500: #6b7280   (Muted text, secondary content)
--color-gray-700: #374151   (Strong body text)
--color-gray-900: #111827   (Darkest text, near-black)
```

---

### Status & Semantic Colors

#### Success (Green)
- **Hex**: `#10b981`
- **Usage**: "Next-Day" availability badge, checkmarks, success messages, verified badges
- **Application**: Text color, background with alpha, border accent

#### Warning (Amber)
- **Hex**: `#f59e0b`
- **Usage**: Alerts, warnings, attention flags, "Limited Availability" messages
- **Application**: Background with light alpha, text, borders

#### Error (Red)
- **Hex**: `#ef4444`
- **Usage**: Error messages, destructive actions, cancellations
- **Application**: Text, background with alpha

---

### Semantic Token Mapping
These map raw colors to functional roles in the UI:

```
--background: #ffffff                 (Main page background)
--foreground: #1e3a5f                 (Primary text color)
--card: #ffffff                       (Card/panel background)
--card-foreground: #1e3a5f            (Text inside cards)
--muted: #f3f4f6                      (Subtle backgrounds, disabled states)
--muted-foreground: #6b7280           (Muted/secondary text)
--border: #e5e7eb                     (Dividers, card borders)
--primary: #ff6b35                    (Primary action buttons)
--primary-foreground: #ffffff         (Text on primary buttons)
--destructive: #ef4444                (Delete/cancel buttons)
--radius: 0.375rem                    (Border radius, 6px)
```

---

## 🔤 Typography System

### Font Stack

#### Primary Font: Inter
- **Source**: Google Fonts (`next/font/google`)
- **Weights Used**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold)
- **Usage**: All headings, body text, UI labels
- **CSS Variable**: `--font-sans: 'Inter', 'Inter Fallback'`

#### Fallback Chain
```css
font-family: 'Inter', 'Segoe UI', 'Roboto', '-apple-system', 'BlinkMacSystemFont', sans-serif;
```

---

### Type Scales

#### Display Level (Hero/Section Titles)
- **Mobile**: 2rem (32px) / line-height 1.2 / weight 700
- **Tablet**: 2.5rem (40px) / line-height 1.2 / weight 700
- **Desktop**: 3.5rem (56px) / line-height 1.2 / weight 700
- **Tailwind**: `text-5xl md:text-6xl` with `font-bold leading-tight`

#### Heading 1 (Page Title)
- **Mobile**: 2rem (32px) / weight 700 / leading-tight
- **Desktop**: 3rem (48px) / weight 700 / leading-tight
- **Tailwind**: `text-4xl md:text-5xl font-bold`

#### Heading 2 (Section Title)
- **Mobile**: 1.75rem (28px) / weight 600
- **Desktop**: 2.5rem (40px) / weight 600
- **Tailwind**: `text-3xl md:text-4xl font-semibold`

#### Heading 3 (Subsection)
- **Consistent**: 1.5rem (24px) / weight 600 / leading-normal
- **Tailwind**: `text-2xl font-semibold`

#### Body Large (Lead Paragraph)
- **Mobile**: 0.875rem (14px) / weight 400 / leading-relaxed
- **Desktop**: 1.125rem (18px) / weight 400 / leading-relaxed
- **Tailwind**: `text-lg leading-relaxed`

#### Body Regular (Main Content)
- **Consistent**: 1rem (16px) / weight 400 / line-height 1.6
- **Tailwind**: `text-base leading-relaxed`

#### Body Small (Secondary Content)
- **Consistent**: 0.875rem (14px) / weight 400 / line-height 1.5
- **Tailwind**: `text-sm leading-relaxed`

#### Caption (Labels, Fine Print)
- **Consistent**: 0.75rem (12px) / weight 500 / line-height 1.4
- **Tailwind**: `text-xs font-medium leading-5`

---

### Typography Usage Examples

| Element | Style | Tailwind Class | Purpose |
|---------|-------|-----------------|---------|
| Page Hero | Display | `text-5xl md:text-6xl font-bold` | Main headline |
| Section Title | H2 | `text-3xl md:text-4xl font-semibold` | Section headers |
| Card Title | H3 | `text-2xl font-semibold` | Testimonial, pricing headers |
| Body Text | Regular | `text-base leading-relaxed` | Main content |
| Label/Badge | Caption | `text-xs font-medium` | "Best Value", "Verified" |
| Muted Text | Small | `text-sm text-muted-foreground` | Secondary info |

---

## 📏 Spacing System

### Spacing Scale (Tailwind Default)
All padding, margin, and gap values use Tailwind's spacing scale.

```
0      → 0px
1      → 0.25rem (4px)
2      → 0.5rem (8px)
3      → 0.75rem (12px)
4      → 1rem (16px)
6      → 1.5rem (24px)
8      → 2rem (32px)
12     → 3rem (48px)
16     → 4rem (64px)
20     → 5rem (80px)
24     → 6rem (96px)
```

### Section Spacing
- **Mobile**: `py-8` (32px top/bottom) + `px-4` (16px sides)
- **Tablet**: `py-12` (48px top/bottom) + `px-6` (24px sides)
- **Desktop**: `py-16` (64px top/bottom) + `px-8` (32px sides)

### Component Spacing
- **Card Padding**: `p-6` (desktop), `p-4` (mobile)
- **Gap Between Grid Items**: `gap-4` (mobile), `gap-6` (desktop)
- **Button Padding**: `px-6 py-3` (standard), `px-8 py-4` (large)
- **Button Border Radius**: Defined by `--radius` token (6px)

### Container Max-Width
- `max-w-7xl` (1280px) for full-width sections with content centering
- `max-w-3xl` (768px) for narrow content (FAQ, testimonials)

---

## 🎯 Border Radius

**Single Token**: `--radius: 0.375rem` (6px)

### Usage
- Buttons: `rounded` (use default 4px) or `rounded-md` (6px)
- Cards: `rounded-lg` (8px)
- Input Fields: `rounded` (4px)
- Images: No border radius (sharp)

---

## 🎬 Animation Tokens

### Duration
- **Instant**: 0ms (no delay)
- **Quick**: 150ms (fast interactions)
- **Normal**: 300ms (standard transitions)
- **Slow**: 500ms (emphasis animations)

### Easing
- **Linear**: No easing (progress bars)
- **Ease-in**: Accelerating (exits)
- **Ease-out**: Decelerating (entrances)
- **Ease-in-out**: Smooth (most transitions)

### Tailwind Classes
```
transition           → 150ms ease-in-out
transition-all       → All properties
duration-300         → 300ms
duration-500         → 500ms
ease-in              → cubic-bezier(0.4, 0, 1, 1)
ease-out             → cubic-bezier(0, 0, 0.2, 1)
ease-in-out          → cubic-bezier(0.4, 0, 0.2, 1)
```

---

## 📱 Responsive Breakpoints

Tailwind CSS v4 Default Breakpoints:

```
sm   → 640px  (Small phones to tablets)
md   → 768px  (Tablets)
lg   → 1024px (Small laptops)
xl   → 1280px (Desktops)
2xl  → 1536px (Large desktops)
```

### Implementation Pattern
```html
<!-- Stack on mobile, 2-col on tablet, 3-col on desktop -->
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
```

---

## 🎨 Component-Specific Tokens

### Button
- **Background (Primary)**: `--color-accent` (#ff6b35)
- **Hover**: `--color-accent-light` (#ff8555)
- **Active**: `--color-accent-dark` (#e55a2a)
- **Text**: `--color-secondary` (white)
- **Border Radius**: `--radius` (6px)
- **Padding**: `px-6 py-3` (standard)
- **Transition**: `transition-all duration-300`

### Card
- **Background**: `--background` (white)
- **Border**: `border --color-border` (light gray)
- **Border Radius**: 8px (`rounded-lg`)
- **Padding**: `p-6` (24px)
- **Shadow**: `shadow-sm` (subtle elevation)
- **Hover Shadow**: `hover:shadow-md` (lift effect)

### Badge (Success/Approved)
- **Background**: `--color-success` with alpha (10b981 @ 10% opacity)
- **Text**: `--color-success` full opacity
- **Border**: Optional, same color as text
- **Padding**: `px-3 py-1`
- **Border Radius**: `rounded-full`

### Input Field
- **Background**: `--color-secondary-light` (off-white)
- **Border**: `--color-border` (light gray)
- **Focus Border**: `--color-primary` (slate blue)
- **Text**: `--color-foreground` (dark slate)
- **Placeholder**: `--color-gray-500` (muted)
- **Border Radius**: 4px (`rounded`)

---

## 📋 Token Implementation Checklist

- [ ] All colors defined in `globals.css` as CSS variables
- [ ] Typography scale applied consistently to all headings
- [ ] Spacing uses Tailwind scale (no arbitrary px values)
- [ ] Border radius uses `--radius` token
- [ ] Responsive breakpoints applied to all layout components
- [ ] Animation durations and easing consistent
- [ ] Semantic token names map correctly to functional roles
- [ ] No hardcoded colors in component files
- [ ] Color contrast meets WCAG AA standards (4.5:1 for text)
- [ ] All components use design tokens, not raw values

---

## 🔄 Future Extensions

### Dark Mode (Not MVP)
When implementing dark mode, create alternate token set:
```
Dark mode palette:
  - --color-background-dark: #0f1e35
  - --color-foreground-dark: #f8f9fb
  - --color-card-dark: #1a2d47
  - Etc.
```

### Brand Variants (Franchise Support)
Create token overrides per location/brand:
```
--color-primary-region: {varies}
--color-accent-region: {varies}
```

---

**Version**: 1.0  
**Last Updated**: 2026-06-14  
**Next Review**: Post-launch feedback integration
