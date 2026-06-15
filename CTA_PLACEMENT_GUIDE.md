# CTA_PLACEMENT_GUIDE.md
## Call-to-Action Strategy & Placement Map

### Overview
This guide defines every CTA button in the landing page, its location, trigger behavior, and conversion goal. All CTAs are designed to move users through a linear conversion funnel: **Awareness → Configuration → Selection → Checkout**.

---

## 🎯 Conversion Funnel Map

```
┌─────────────────────────────────────────────────────────────────┐
│  AWARENESS STAGE: Build Trust & Urgency                         │
│  ├─ Navbar: "Shop Systems" (scroll to pricing)                  │
│  └─ Navbar: "Available Next-Day" Badge (scroll to pricing)      │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│  CONSIDERATION STAGE: Educate & Simulate                        │
│  ├─ Hero: "Configure System" x2 (scroll to configurator)        │
│  └─ Configurator: Interactive state (sliders, tabs, radio)      │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│  DECISION STAGE: Present Options & Proof                        │
│  ├─ Pricing Tier Cards: "Select & Schedule" x3 (open modal)     │
│  ├─ Testimonials: Social proof (passive, no CTA)                │
│  └─ FAQ: Answer objections (passive, no CTA)                    │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
┌─────────────────────────────────────────────────────────────────┐
│  CONVERSION STAGE: Close Sale                                   │
│  ├─ Checkout Modal: "Continue to Scheduling"                   │
│  ├─ Scheduling Form: Confirm & Approve                          │
│  └─ Confirmation: Order summary & follow-up                     │
└────────────────────┬────────────────────────────────────────────┘
                     │
                     ▼
        ✅ SCHEDULED INSTALLATION APPOINTMENT
```

---

## 📍 CTA Location Map

### NAVBAR (Sticky, Always Visible)
```
┌──────────────────────────────────────────────────────────────────┐
│ [LOGO]           Navigation         [AVAILABLE NEXT-DAY] [SHOP]  │
│                                      └─ Green badge   └─ Orange  │
│                                         (Live date)     button    │
└──────────────────────────────────────────────────────────────────┘
```

#### CTA #1: "Shop Systems" Button
- **Location**: Top-right of navbar
- **Color**: Safety Orange (#ff6b35)
- **Size**: Medium button (px-6 py-3)
- **Action**: Smooth scroll to #pricing-section
- **Hover**: Color shifts to #ff8555, scale 1.02
- **Mobile**: Hamburger menu (if space-constrained)
- **Purpose**: Quick access for new visitors, immediate conversion path

#### CTA #2: "Available Next-Day" Badge
- **Location**: Left of "Shop Systems" button
- **Color**: Green background (#10b981 @ 10% opacity) + green text
- **Size**: Small badge (px-3 py-1)
- **Content**: "✓ Available Next-Day" + Tomorrow's date (dynamic)
- **Action**: Smooth scroll to #pricing-section
- **Hover**: Pulse animation (infinite loop)
- **Purpose**: Visualize urgency, drive scarcity mindset

---

### HERO SECTION
```
┌────────────────────────────────────────────────────────────────┐
│                     HERO HEADLINE                              │
│      Upfront Pricing. Next-Day HVAC Installation.              │
│                                                                │
│   ┌──────────────────┐           ┌──────────────────┐         │
│   │ Central Air      │           │ Mini-Splits      │         │
│   │ Starting $3,500  │           │ Starting $4,800  │         │
│   │                  │           │                  │         │
│   │ [Configure ▶]    │           │ [Configure ▶]    │         │
│   └──────────────────┘           └──────────────────┘         │
└────────────────────────────────────────────────────────────────┘
```

#### CTA #3 & #4: "Configure System" Buttons (Hero Cards)
- **Location**: Bottom of each system card (Central Air, Mini-Splits)
- **Color**: Safety Orange (#ff6b35)
- **Size**: Medium button with right-pointing chevron icon
- **Action**: Smooth scroll to #configurator-section
- **Hover**: Entire card lifts (shadow increases), button color brightens
- **Purpose**: Encourage exploration of configurator, enable experimentation

---

### PRICING SECTION
```
┌────────────────────────────────────────────────────────────────┐
│   [Standard]        [High-Efficiency]        [Ultimate]        │
│   $3,500            $4,800 ⭐ BEST VALUE    $6,200             │
│   Starting $79/mo   Starting $119/mo        Starting $159/mo   │
│                                                                │
│ [Select & Schedule] [Select & Schedule]  [Select & Schedule]  │
│      ◀ Orange Button (All 3 pricing tiers)                     │
└────────────────────────────────────────────────────────────────┘
```

#### CTA #5, #6, #7: "Select & Schedule" Buttons (Pricing Cards)
- **Location**: Bottom of each pricing tier card (3 cards)
- **Color**: Safety Orange (#ff6b35)
- **Size**: Large button (px-8 py-4, full-width on mobile)
- **Action**: Open CheckoutModal
- **Hover**: Same as other buttons (color shift, scale 1.02)
- **Mobile**: Full-width, stacked vertically
- **Desktop**: Fixed width, side-by-side
- **Purpose**: Primary conversion CTA, capture immediate intent to buy

---

### CONFIGURATOR SECTION
```
┌────────────────────────────────────────────────────────────────┐
│                                                                │
│  Inputs:                                                       │
│  ├─ Square Footage Slider (500-5,000 ft²)                     │
│  ├─ Climate Zone Tabs (Tropical, Temperate, Cold, Desert)     │
│  └─ System Type Radio (Central Air, Mini-Split, Hybrid)       │
│                                                                │
│  Outputs (React State, Real-Time):                            │
│  ├─ Recommended Tonnage                                       │
│  ├─ SEER Efficiency Level                                     │
│  ├─ Simulated Pricing Range                                   │
│  └─ System Specs Preview                                      │
│                                                                │
│  NO explicit CTA here (inputs ARE the CTA)                    │
│  Users then scroll back to Pricing to "Select & Schedule"     │
└────────────────────────────────────────────────────────────────┘
```

#### CTA #8: Implicit CTA (Configurator Interactivity)
- **Location**: Entire configurator section
- **Action**: React state updates in real-time as user interacts
- **Purpose**: Empower user agency, build confidence before purchase

---

### TESTIMONIALS & SOCIAL PROOF
```
┌────────────────────────────────────────────────────────────────┐
│  Data Stats (Passive Social Proof):                            │
│  ├─ 4.9★ from 1,200+ verified homeowners                      │
│  ├─ 94% next-day installation rate                            │
│  └─ $1,420 average saved vs. traditional quotes               │
│                                                                │
│  Testimonial Cards (Passive Social Proof):                     │
│  ├─ Marcus K.: "Literally lifesaving in the July heat..."     │
│  ├─ Elena R.: "The price you see is exactly what you pay..."  │
│  └─ David T.: "Flawless execution from start to finish..."    │
│                                                                │
│  NO explicit CTA here (builds trust for downstream CTAs)      │
└────────────────────────────────────────────────────────────────┘
```

---

### FAQ SECTION
```
┌────────────────────────────────────────────────────────────────┐
│  Q1: How do I know I am choosing the right size system?        │
│  Q2: Is the price at checkout truly all-inclusive?            │
│  Q3: How does the 10-Year Warranty work if I need service?    │
│  Q4: Do you offer flexible financing options?                 │
│                                                                │
│  NO explicit CTA here (answers objections for purchase)       │
└────────────────────────────────────────────────────────────────┘
```

---

### FOOTER
```
┌────────────────────────────────────────────────────────────────┐
│  [Left]              [Middle]           [Right: CTA Card]      │
│  Brand Bio           Our Systems        ┌──────────────────┐   │
│  License #           Central AC          │ Need Custom     │   │
│  Insurance #         Heat Pumps          │ Fit?            │   │
│  Trust Badges        Mini-Splits         │                │   │
│  ─────────────       ─────────           │ [Configure ▶]   │   │
│                      Guarantees          └──────────────────┘   │
│                      Warranty Details       ▲                   │
│                      Price Match Promise    └─ Orange Button    │
│                      Installation Standards                     │
├────────────────────────────────────────────────────────────────┤
│ Copyright © 2026 | Privacy Policy | Terms of Service           │
└────────────────────────────────────────────────────────────────┘
```

#### CTA #9: "Configure System" Button (Footer)
- **Location**: Right-column card, titled "Need Custom Fit?"
- **Color**: Safety Orange (#ff6b35)
- **Size**: Medium button with right-pointing chevron
- **Action**: Smooth scroll to #configurator-section
- **Purpose**: Win back browsers who scrolled to footer without converting

---

### CHECKOUT MODAL
```
┌─ OVERLAY (Semi-transparent) ─────────────────────────────────┐
│  ┌──────────────────────────────────────────────────────────┐ │
│  │  CHECKOUT MODAL                               [Close]    │ │
│  │                                                          │ │
│  │  STEP 1: Contact Information                            │ │
│  │  ├─ Name input                                          │ │
│  │  ├─ Email input                                         │ │
│  │  └─ Phone input                                         │ │
│  │  ┌──────────────────────────────────────────────────────┐│
│  │  │ [Continue]    CTA #10: Orange button              ││
│  │  └──────────────────────────────────────────────────────┘│
│  │                                                          │ │
│  │  STEP 2: Installation Date & Time                      │ │
│  │  ├─ Date picker                                         │ │
│  │  └─ Time slot radio buttons                            │ │
│  │  ┌──────────────────────────────────────────────────────┐│
│  │  │ [Confirm Appointment]  CTA #11: Orange button     ││
│  │  └──────────────────────────────────────────────────────┘│
│  │                                                          │ │
│  │  STEP 3: Financing Pre-Qualification                   │ │
│  │  ├─ Mock form                                           │ │
│  │  └─ Loading... → "✓ Approved! Your Financing Locked"  │ │
│  │  ┌──────────────────────────────────────────────────────┐│
│  │  │ [Schedule Installation]  CTA #12: Orange button    ││
│  │  └──────────────────────────────────────────────────────┘│
│  │                                                          │ │
│  │  STEP 4: Confirmation Summary                          │ │
│  │  ├─ Order details                                       │ │
│  │  ├─ Installation date/time                             │ │
│  │  └─ Follow-up message                                  │ │
│  │  ┌──────────────────────────────────────────────────────┐│
│  │  │ [Done - Check Your Email]  CTA #13: Orange button  ││
│  │  └──────────────────────────────────────────────────────┘│
│  └──────────────────────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────┘
```

#### CTA #10-#13: Modal Action Buttons
- **Location**: Bottom of each modal step
- **Color**: Safety Orange (#ff6b35)
- **Size**: Large button, full-width on modal
- **Action**: Progress through steps or close modal
- **Purpose**: Guide user through purchase flow

---

## 📊 CTA Summary Table

| # | Button Text | Location | Color | Action | Goal |
|---|-------------|----------|-------|--------|------|
| 1 | Shop Systems | Navbar (top-right) | Orange | Scroll to pricing | Immediate product access |
| 2 | Available Next-Day | Navbar (left of button) | Green | Scroll to pricing | Visualize urgency |
| 3 | Configure System | Hero: Central Air card | Orange | Scroll to configurator | Encourage exploration |
| 4 | Configure System | Hero: Mini-Splits card | Orange | Scroll to configurator | Encourage exploration |
| 5 | Select & Schedule | Pricing: Standard tier | Orange | Open modal | Initiate purchase flow |
| 6 | Select & Schedule | Pricing: High-Efficiency tier | Orange | Open modal | Initiate purchase flow |
| 7 | Select & Schedule | Pricing: Ultimate tier | Orange | Open modal | Initiate purchase flow |
| 8 | (Configurator) | Configurator section | — | React state | Empower user agency |
| 9 | Configure System | Footer: Right card | Orange | Scroll to configurator | Win back browsers |
| 10 | Continue | Modal: Step 1 | Orange | Next step | Progress through checkout |
| 11 | Confirm Appointment | Modal: Step 2 | Orange | Next step | Capture appointment |
| 12 | Schedule Installation | Modal: Step 3 | Orange | Next step | Confirm financing |
| 13 | Done - Check Email | Modal: Step 4 | Orange | Close modal | Confirm completion |

---

## 🎬 CTA Animation Behaviors

### Button Hover
```
Normal State:
  Background: #ff6b35
  Scale: 1.0
  Shadow: sm

Hover State (300ms transition):
  Background: #ff8555 (lighter orange)
  Scale: 1.02 (slight growth)
  Shadow: md (larger shadow)

Active/Pressed (100ms):
  Background: #e55a2a (darker orange)
  Scale: 0.98 (slight compress)
```

### Badge Pulse
```
"Available Next-Day" and "Best Value" badges:
  Animation: pulse (infinite)
  Duration: 3s
  Opacity: 100% → 50% → 100%
  Purpose: Draw attention, emphasize scarcity
```

### Modal Entrance
```
Overlay:
  From: opacity 0
  To: opacity 50% (backdrop)
  Duration: 300ms

Modal Box:
  From: opacity 0 + translateY(20px)
  To: opacity 100 + translateY(0)
  Duration: 300ms
  Easing: ease-out
```

---

## 📱 Mobile CTA Modifications

### Navbar (Mobile)
- Logo: Smaller (40px)
- Navigation: Hamburger menu (expands on click)
- "Shop Systems" button: Moved to mobile menu OR sticky at bottom
- "Available Next-Day": Shown in header, right-aligned

### Hero (Mobile)
- System cards: Stack vertically (not side-by-side)
- "Configure System" buttons: Full-width, 44px height (touch target)

### Pricing (Mobile)
- Cards: Full-width, stacked vertically
- "Select & Schedule" buttons: Full-width, 44px height

### Footer (Mobile)
- "Need Custom Fit?" card: Sticky at bottom OR moved to below footer content
- CTA button: Full-width, visible and prominent

### Modal (Mobile)
- Modal: Full-screen or 95vw width (near full-screen)
- Form inputs: Large (44px height minimum for touch)
- Buttons: Full-width, 44px height

---

## 🔄 CTA Interaction Sequence (Ideal User Path)

```
1. User lands on page
   └─ Sees navbar with "Available Next-Day" badge + "Shop Systems" CTA
   
2. User reads hero section
   └─ Clicks "Configure System" in hero card
   
3. System scrolls to configurator
   └─ User interacts with sliders, tabs, radio buttons
   
4. User sees real-time pricing update
   └─ User scrolls back to pricing (or navbar CTA triggers)
   
5. User examines 3 pricing tiers
   └─ User clicks "Select & Schedule" on chosen tier (e.g., High-Efficiency)
   
6. Checkout modal opens
   └─ User fills Step 1 (Name, Email, Phone) → Clicks "Continue"
   └─ User selects Step 2 (Date, Time) → Clicks "Confirm Appointment"
   └─ User sees Step 3 (Financing approved!) → Clicks "Schedule Installation"
   └─ User sees Step 4 (Confirmation summary) → Clicks "Done - Check Email"
   
7. Modal closes
   └─ User sees success message or returns to home
   
✅ CONVERSION COMPLETE
   └─ Appointment scheduled, customer receives confirmation email
```

---

## ❌ CTA Anti-Patterns (What NOT to Do)

- ❌ **Too many CTAs**: Confuse user about which action to take
- ❌ **CTA with unclear copy**: "Click here" instead of "Configure System"
- ❌ **Hidden CTA**: Requiring scroll or search to find buttons
- ❌ **Disabled CTA**: Gray/inactive buttons without explanation
- ❌ **CTA opens external link**: Modal/API call preferred for frictionless flow
- ❌ **CTA loads slowly**: Lag between click and response
- ❌ **CTA with form validation errors**: Show errors inline, not blocking
- ❌ **CTA without visual affordance**: No button styling, looks like text

---

## ✅ CTA Best Practices (What TO Do)

- ✅ **Clear, action-oriented copy**: "Select & Schedule", not "Submit"
- ✅ **Consistent color**: All primary CTAs are Safety Orange
- ✅ **Sufficient contrast**: White text on orange (WCAG AAA compliant)
- ✅ **Sufficient size**: 44px minimum height on mobile
- ✅ **Visible & positioned**: Above fold or sticky (navbar)
- ✅ **Progressive disclosure**: Show next CTA after user completes step
- ✅ **Loading feedback**: Show spinner while processing (modal)
- ✅ **Success confirmation**: Clear message after action completes
- ✅ **Mobile-first**: Design for touch, then enhance for desktop
- ✅ **Accessibility**: Keyboard-navigable, ARIA labels, focus states

---

**CTA Placement Strategy**: 🎯 Complete  
**Ready for implementation**: ✅ Yes  
**Reference**: IMPLEMENTATION_KICKSTART.md for component details
