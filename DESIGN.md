---
name: Serene Healthcare System
colors:
  surface: '#fcf9f2'
  surface-dim: '#dcdad3'
  surface-bright: '#fcf9f2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3ec'
  surface-container: '#f1eee7'
  surface-container-high: '#ebe8e1'
  surface-container-highest: '#e5e2db'
  on-surface: '#1c1c18'
  on-surface-variant: '#414941'
  inverse-surface: '#31312c'
  inverse-on-surface: '#f3f0e9'
  outline: '#717971'
  outline-variant: '#c1c9bf'
  surface-tint: '#3a6847'
  primary: '#033619'
  on-primary: '#ffffff'
  primary-container: '#1f4d2e'
  on-primary-container: '#8cbd95'
  inverse-primary: '#a0d2a9'
  secondary: '#166d2e'
  on-secondary: '#ffffff'
  secondary-container: '#a1f6a6'
  on-secondary-container: '#1f7333'
  tertiary: '#1b331a'
  on-tertiary: '#ffffff'
  tertiary-container: '#314a2f'
  on-tertiary-container: '#9cb997'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#bcefc4'
  primary-fixed-dim: '#a0d2a9'
  on-primary-fixed: '#00210d'
  on-primary-fixed-variant: '#225030'
  secondary-fixed: '#a1f6a6'
  secondary-fixed-dim: '#86d98d'
  on-secondary-fixed: '#002107'
  on-secondary-fixed-variant: '#00531d'
  tertiary-fixed: '#cdebc6'
  tertiary-fixed-dim: '#b1ceab'
  on-tertiary-fixed: '#08200a'
  on-tertiary-fixed-variant: '#344d32'
  background: '#fcf9f2'
  on-background: '#1c1c18'
  surface-variant: '#e5e2db'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Source Sans 3
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Source Sans 3
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Source Sans 3
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: Source Sans 3
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
  container-max: 1200px
---

## Brand & Style

This design system is built for a compassionate, upscale home care provider. The brand personality is rooted in trustworthiness, grace, and professional reliability. It avoids the clinical coldness often found in healthcare, opting instead for a warm, editorial aesthetic that feels premium yet accessible.

The visual style follows a **Modern Editorial** movement. It utilizes high-quality serif typography, generous white space (Warm Ivory), and a sophisticated botanical color palette. The interface should feel calm and organized, mimicking the experience of high-end wellness or boutique medical services. Elements are layered subtly to evoke a sense of personalized care and attention to detail.

## Colors

The palette is anchored by **Deep Green**, used for primary actions and authoritative headers to convey stability. **Leaf Green** serves as a secondary accent for highlights and success states, while **Soft Sage** provides a gentle background for secondary surfaces and decorative elements.

**Warm Ivory** is the foundational background color, replacing pure white to reduce eye strain and provide a more "home-like" feel. **Charcoal** is used exclusively for body text and deep icons to ensure maximum legibility without the harshness of pure black. 

- **Primary:** Deep Green (#1F4D2E) - Professionalism & Growth.
- **Secondary:** Leaf Green (#4FA05A) - Vitality & Support.
- **Tertiary:** Soft Sage (#A7C4A1) - Calm & Gentleness.
- **Neutral:** Warm Ivory (#F6F3EC) - Comfort & Cleanliness.
- **Text:** Charcoal (#2B2B2B) - Clarity & Grounding.

## Typography

The typography strategy uses a high-contrast pairing to balance heritage with modern utility. **Playfair Display** (Headlines) provides a classic, authoritative, and literary feel, perfect for expressing the "Grace" in the brand identity. **Source Sans 3** (replacing Lato for better UI performance and technical clarity) is used for all body text and labels to ensure ease of reading for all age groups.

Use **Display-lg** sparingly for hero sections. Ensure all labels use increased letter spacing when set in uppercase to maintain professional legibility.

## Layout & Spacing

The design system employs a **Fluid Grid** model with generous padding to reinforce the feeling of "room to breathe." 

- **Desktop:** 12-column grid with 24px gutters. Use wide margins (64px+) to center content and create an editorial feel.
- **Mobile:** 4-column grid with 16px margins. 
- **Rhythm:** Spacing follows an 8px base unit. Component-internal spacing should lean towards "Airy" (using 16px or 24px increments) rather than "Dense" to maintain the upscale healthcare aesthetic.

Vertical rhythm is critical; use larger gaps (48px or 64px) between major sections to allow the user's eye to rest.

## Elevation & Depth

To maintain a sophisticated and organic feel, this system avoids heavy drop shadows. Instead, depth is conveyed through **Tonal Layers** and **Low-Contrast Outlines**.

- **Surfaces:** Use subtle shifts from Warm Ivory to white or Soft Sage to indicate hierarchy.
- **Outlines:** Use 1px borders in Soft Sage (#A7C4A1) at 40% opacity for cards and input fields.
- **Shadows:** When necessary for interactivity (e.g., a hovered card), use an "Ambient Shadow": a very soft, highly diffused Deep Green tint (e.g., `rgba(31, 77, 46, 0.08)`) with a 20px blur and 4px offset.
- **Glassmorphism:** Use sparingly for navigation overlays with a 12px blur to keep the background content visible but non-distracting.

## Shapes

The shape language is **Soft (0.25rem/4px)**. This choice strikes a balance between the precision of professional healthcare and the approachable warmth of home-based care.

- **Standard Elements:** 4px radius (Buttons, Input Fields).
- **Cards & Large Containers:** 8px radius (`rounded-lg`).
- **Icons & Avatars:** Circular/Pill-shaped for a friendly, human-centric touch.
- **Decorative Elements:** Use organic, leaf-like curves in illustrative elements to mirror the logo's iconography.

## Components

### Buttons
- **Primary:** Deep Green background with Warm Ivory text. 4px rounded corners.
- **Secondary:** Transparent background with Deep Green border (1.5px) and Deep Green text.
- **Tertiary:** Soft Sage background with Deep Green text for low-priority actions.

### Input Fields
- Background set to a slightly lighter tint of Warm Ivory or white.
- Border is Soft Sage (1px). Focus state shifts border to Leaf Green with a 2px outer glow in Soft Sage.

### Cards
- Use a white or Soft Sage background.
- Apply a very thin Soft Sage border.
- Padding should be generous (min 24px).

### Chips & Tags
- Used for "24/7 Support" or "Non-Medical" labels.
- Pill-shaped (fully rounded) with Soft Sage background and Deep Green text.

### Lists
- Use Leaf Green icons (checkmarks or bullets) to signify growth and positive care outcomes.
- High vertical padding between list items for readability.