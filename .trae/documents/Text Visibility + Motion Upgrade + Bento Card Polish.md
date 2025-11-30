## Objectives
- Improve text visibility and accessibility for selected buttons and FeatureBento content.
- Upgrade motion using WAAPI (no new deps) with professional easing and 60fps goals.
- Polish Bento card spacing, hierarchy, and micro‑interactions while preserving current functionality and performance budgets.

## Target Elements & Current Locations
- Navbar CTA: components/Navbar.tsx:111–117 (desktop) and 167–169 (mobile)
- Hero primary CTA: components/Hero.tsx:119–131
- HowItWorks CTA: components/HowItWorksSection.tsx:445–453
- Bento card text container: components/FeatureBento.tsx:635–669 (selected <div>)

## Text Visibility & Accessibility
1. Contrast & Legibility
- Add `.text-contrast` utility (index.html) that applies subtle multi‑stop `text-shadow` tuned for gradient labels to meet ≥4.5:1 on light and mixed backgrounds.
- Apply `.text-contrast` to CTA labels already using `gradient-text playfair-cta`.
- Increase smallest CTA label sizes to at least `text-base` where currently `text-sm`, preserving layout.
- Add `focus-visible:ring` to CTAs that lack keyboard focus cues; ensure minimum 24px height and adequate padding.

2. Spacing & Alignment
- Normalize button paddings (`px-6/8`, `py-3/4`) and prevent clipping with `leading-tight` and `whitespace-nowrap`.
- Standardize label wrappers to vertically center text (flex align-center) and remove accidental transforms that may overlap (
  z-index audit in each component to keep labels above decorative overlays by 1 layer).

3. A11y Enhancements
- Add descriptive `aria-label` to CTA buttons where text is non‑literal (e.g., “Try Amplify Free”).
- Ensure semantic `<button>` used; if any interactive `<div>`, add `role="button"`, `tabIndex=0`, and key handlers.

## Motion Upgrade (FeatureBento)
- Introduce WAAPI animations for:
  - Card hover gloss/scale (FeatureBento.tsx:586–602 container): `element.animate` with `ease: cubic-bezier(0.22,1,0.36,1)`; cancel on `mouseleave`.
  - Trust markers pulse (FeatureBento.tsx:682–691): subtle opacity pulse with `prefers-reduced-motion` detection.
- Keep Framer Motion for in‑view sequences; WAAPI for hover/micro‑interactions to reduce overhead and hit 60fps.

## Bento Card Optimization
- Spacing: tighten text container paddings from `p-6` to `p-5` on small screens; keep `p-6` on md+.
- Hierarchy: slightly increase feature title weight/size on large tiles (`text-2xl → text-[26px]`), maintain `.playfair-hd` usage.
- Proportions: adopt ~1.618 visual split for large tile (visual area 62% / text 38%) by adjusting `h-[55%] → h-[62%]` (FeatureBento.tsx:629–631).
- Micro‑interactions: icon tap/hover lift (`translateY(-2px)`), CTA “Try Demo” nudge on hover, softened shadows.

## Implementation Plan
1. index.html
- Add `.text-contrast` utility and small focus ring utilities.
- No changes to gradient animation or palette.

2. Component edits
- Wrap CTA label spans with `.text-contrast` and ensure `whitespace-nowrap`.
- Increase Navbar CTA label size from `text-sm` → `text-base` (desktop) if layout permits.
- Add `aria-label` on CTAs; audit `z-index` so label stays above overlay.

3. FeatureBento.tsx
- Add WAAPI hover handlers to the interactive card container and trust markers.
- Adjust large tile visual/text area split and container paddings as noted.

4. Testing & Verification
- Use live preview to validate:
  - Contrast ≥4.5:1 (spot-check with devtools).
  - Keyboard focus and screen reader labels.
  - Motion at 60fps (Performance panel) and reduced‑motion fallback.
  - Cross‑browser: Chrome, Edge, Firefox, Safari.

5. Performance & A11y
- Keep animations GPU‑friendly (transform/opacity only), avoid layout thrash.
- Honor `prefers-reduced-motion`; avoid infinite busy loops.

If approved, I’ll implement these changes, run the site, and share a preview URL for review.