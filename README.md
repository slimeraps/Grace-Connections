# Grace Connections HomeCare

Premium, faith-based, non-medical 24/7 home care landing page for Grace Connections HomeCare.

## Overview

This static site presents Grace Connections HomeCare as a warm, upscale, responsive care agency serving DuPage County and Metro Chicago. The experience includes service details, trust signals, testimonials, careers, prayer requests, and a consultation intake flow.

## Files

- `index.html` - main redesigned landing experience
- `code.html` - compatibility copy of the same landing experience
- `styles.css` - visual styling, responsive layout rules, and animations
- `script.js` - navigation, scroll reveal, and form behavior
- `site.config.js` - optional backend/CRM endpoint configuration for forms
- `site-shell.js` - shared header, footer, mobile navigation, and sticky CTA for subpages
- `about.html`, `services.html`, `senior-care.html`, `disability-support.html`, `adults-care.html`, `children-family-support.html`, `caregiver-support.html`, `join-team.html`, `service-areas.html`, `resources.html`, `contact.html`, `thank-you.html`, `privacy-policy.html`, `terms-disclaimer.html` - completed static page set
- `assets/` - brand logo and care imagery used by the page
- `DESIGN.md` - design notes from the original template

## Form Integration

The site works as a static website by default. To connect prayer requests or consultation submissions to a backend, email automation tool, or CRM, add endpoint URLs in `site.config.js`.

```js
window.GRACE_CONNECTIONS_CONFIG = {
  formEndpoints: {
    consultation: "https://your-endpoint.example/consultation",
    prayer: "https://your-endpoint.example/prayer",
    careers: "https://your-endpoint.example/careers",
  },
};
```

Do not commit private API keys or secrets into this repository. If the final backend is Java-based, host it separately and point these endpoint values at the hosted API routes.

## Changelog

### 1.1.1 - 2026-05-26

- Expanded the site into a multi-page Premium Growth Website structure with service, recruiting, resources, service-area, contact, thank-you, privacy, and terms/disclaimer pages.
- Improved homepage positioning, CTAs, service flow, SEO metadata, local service-area copy, and form privacy language.
- Added caregiver recruiting content and application form structure.

### 1.0.1 - 2026-05-26

- Split the website into dedicated HTML, CSS, JavaScript, and configuration files for easier maintenance.
- Turned `index.html` into the primary homepage and kept `code.html` as a compatibility copy.
- Added configurable form submission hooks for future backend, email, or CRM integrations.

### 1.0.0 - 2026-05-26

- Rebuilt the landing page into a premium, responsive Grace Connections HomeCare website.
- Incorporated the refreshed Grace Connections logo, brand colors, Playfair Display headings, and Lato body typography.
- Added service sections for senior care, adult and disability care, housekeeping, meal preparation, transportation, and friendly pet care.
- Added faith-based brand storytelling, prayer request support, careers recruiting, testimonials, trust proof, and consultation intake.
- Added accessible navigation, mobile drawer behavior, sticky mobile calls to action, responsive layouts, and subtle reveal animations.
