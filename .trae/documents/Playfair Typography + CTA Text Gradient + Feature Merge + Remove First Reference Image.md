## Scope
- Update global display font to Playfair (variable, 300–900) across headings and CTA labels.
- Preserve existing gradient text animation and reduced‑motion behavior.
- Apply gradient effect to CTA text only (not backgrounds).
- Consolidate feature copy under the unified FeatureBento section; adjust spacing.
- Remove the first reference image from SocialProofSection and clean related styling.
- Validate layout, accessibility, and cross‑browser behavior.

## Font & CSS Updates
1. index.html
- Import Playfair via Google Fonts `<link>`.
- Change Tailwind `fontFamily.display` to `['Playfair','serif']`.
- Update global CSS for `h1–h4` and `.font-display` to use Playfair with `letter-spacing: -0.015em` and `line-height: 1.1`.
- Add utility classes:
  - `.playfair-hd { font-family: 'Playfair', serif; font-weight: 800/900; }`
  - `.playfair-sub { font-family: 'Playfair', serif; font-weight: 400/500; }`
  - `.playfair-cta { font-family: 'Playfair', serif; font-weight: 800; }`
- Leave `.gradient-text`, `.heading-gradient`, keyframes and reduced‑motion CSS unchanged.

2. Button text gradient
- Define `.cta-label` wrapper class that applies `.gradient-text` (reuse existing) without altering button backgrounds.
- Do not change `.btn-premium` or other background styles.

## Component Changes
- FeatureBento.tsx (components/FeatureBento.tsx)
  - Header already unified; keep copy as is (lines 509–533).
  - Reduce section top padding from `py-20` to `py-16` (≈‑20%).
  - Ensure 48px space between subheading and grid (`mt-12` already present on grid at line 609).
  - Apply Playfair via global rules; no structural changes.
  - Wrap any CTA text spans with `className="gradient-text playfair-cta cta-label"` where present.

- Hero.tsx
  - H1 inherits Playfair; keep gradient keywords intact.
  - Wrap the primary CTA label text in `gradient-text playfair-cta` (background remains).

- HowItWorksSection.tsx (components/HowItWorksSection.tsx:439–449)
  - CTA button: wrap the label with `gradient-text playfair-cta`.

- Navbar.tsx / Button.tsx (if present)
  - Ensure CTA labels use `gradient-text playfair-cta` without changing backgrounds.

- TestimonialsSection.tsx, PricingSection.tsx, CtaSection.tsx, ProductShowcase.tsx
  - Apply Playfair to headings via global rules; wrap any CTA labels with `gradient-text playfair-cta`.

## Remove First Reference Image
- SocialProofSection.tsx
  - The first brand entry uses an external logo URL (HubSpot) at components/SocialProofSection.tsx:8.
  - Remove this item from the brands array; verify spacing and flex/grid remain consistent.
  - No local image assets exist in the repo (confirmed via search), so step 1 is a no‑op.

## Clean Styling
- Review SocialProofSection and FeatureBento trust badges to ensure no special sizing/layout tied to the removed brand.
- Ensure opacity/grayscale hover effects still look balanced.

## Testing & Verification
- Run the dev server and visually verify:
  - Headings and CTA labels use Playfair at correct weights (700–900 for headlines, 400–500 for subheads).
  - Gradient text animation continues, honors reduced motion, and remains low‑contrast.
  - CTA backgrounds unchanged; only text shows gradient.
  - FeatureBento spacing: top padding reduced, 48px gap before grid.
  - SocialProof section shows no broken images and balanced layout.
- Cross‑browser smoke test: Chrome, Edge, Firefox, Safari.
- Mobile responsiveness at 360–768px widths.
- Accessibility checks: color contrast AA for key headings/buttons; confirm readable sizes and line heights.

## Notes
- No component restructures; only style/text updates per instructions.
- If Button component centralizes CTA labels, changes will be minimal and consistent; otherwise we update per‑component CTAs.

Confirm to proceed and I’ll implement these edits, run the site, and share a preview for verification.