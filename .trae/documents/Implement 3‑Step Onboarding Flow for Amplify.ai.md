## Overview
- Build a guided 3‑step onboarding that captures brand identity, tone & audience, and goals, ending with a “Brand DNA Generated” summary.
- Use existing React + Router (Vite) or the scaffolded Next.js route (preferred for future). The plan targets React Router in this repo to avoid environment changes, with a clean API boundary to switch to Next later.

## Routes & Navigation
- `/onboarding` parent route with progress header
- Child routes:
  - `/onboarding/brand` → Step 1
  - `/onboarding/tone` → Step 2
  - `/onboarding/goals` → Step 3
  - `/onboarding/dna` → Final summary
- Persistent state across steps; allow “Skip for now” and “Back” navigation.

## Data Model
- `OnboardingState` (persisted):
  - brand: { brandName, website, industry, description, usp }
  - tone: { professional, serious, bold, energetic, audienceText, keywords, audienceType[], voiceGuideFile? }
  - goals: { selectedGoals[], horizon }
- Computed `BrandDNA`:
  - voiceSummary, personaSnapshot, marketingFoundation

## Step 1 — Brand Identity
- Layout: Split view (Left: illustration; Right: form panel)
- Header: Progress steps “① Brand Identity → ② Tone & Audience → ③ Goals”
- Copy:
  - Heading: “Let’s Build Your Brand Identity”
  - Subtext: “This helps Amplify understand your business and create content tailored to your offer.”
- Fields:
  - Brand name (text)
  - Website / Social handle (text with URL/handle validation)
  - Industry / Category (typeahead + dropdown)
  - Product / Service description (textarea)
  - Unique selling proposition (textarea, 1–2 sentences)
- CTA buttons:
  - Primary: Continue → (validates + persists)
  - Secondary: Skip for now
- Visual: Left hero with glassmorphism desk/brand assets (see Visual Assets).

## Step 2 — Tone & Audience
- Layout: Left persona/mood board; Right tone sliders + audience inputs
- Copy:
  - Heading: “What’s your brand voice?”
- Controls:
  - Sliders (0–100): Professional↔Casual, Serious↔Playful, Bold↔Friendly, Energetic↔Calm
  - Audience inputs:
    - Target audience (textarea)
    - Keywords: pain points + desires (chips from input)
    - Optional upload: brand voice guide (PDF/TXT)
  - Chip buttons: B2B • B2C • Freelancers • Startups • Agencies • Enterprise • Local Business
- CTA: Next → (validates + persists)
- Visual: Personas, tone sliders, growth arrows (see Visual Assets).

## Step 3 — Goals & Objectives
- Layout: Left campaign success mockups; Right goal cards + time horizon
- Copy:
  - Heading: “What do you want Amplify to help you achieve?”
- Goal cards (multi‑select):
  - Grow social media presence; Launch a new product; Drive more leads; Improve conversions; Build personal brand; Consistent weekly content; Grow community/audience; Improve sales pipeline nurturing
- Time Horizon (radio): 30 days • 90 days • 6 months
- CTA: Primary: Generate My Brand DNA → (computes summary + persists)
- Visual: Upward trending dashboards, social screens, calendar, trophy metaphor.

## Final — Brand DNA Generated
- Heading: “Your Brand DNA Is Ready!”
- Subtext: “We’ve learned your brand voice, audience, and goals. You’re all set to create content, campaigns, and marketing workflows.”
- CTA: Go to Dashboard
- Mini preview cards:
  - Brand Voice Summary
  - Audience Persona Snapshot
  - Marketing Foundation

## Visual Assets (Gemini Canvas Prompts)
- Step 1 prompt: “A premium SaaS onboarding illustration for a marketing platform. Scene: a workspace desk with floating elements — brand book, logo drafts, product cards, social media icons, and marketing graphs. Color theme: soft purple + blue gradients, futuristic, high‑end. Style: glassmorphism UI, smooth 3D blobs, soft glow reflections. Aspect ratio: 16:9. No text or logos.”
- Step 2 prompt: “A marketing tone and audience illustration showing multiple user personas. Scene: floating profile avatars, demographic icons, psychology icons, sliders representing tone settings, speech bubbles, growth arrows. Style: modern SaaS, pastel gradients, cinematic lighting, soft glows. Aspect ratio: 16:9. No brand names or UI text.”
- Step 3 prompt: “A futuristic marketing success illustration. Scene: upward trending dashboards, social media screens, email charts, AI assistant abstract avatar, check marks for completed tasks, calendar, trophy metaphor. Color style: vibrant neon gradients with deep contrast, premium SaaS aesthetic. Aspect ratio: 16:9. No UI text or branding.”
- Final prompt: “High‑end neon celebration illustration. Confetti particles, glowing geometric shapes, AI‑powered marketing icons, check marks, badges, success celebration feel. Color palette: purple, blue, pink gradients. Style: cinematic glow, crisp vector shapes. Aspect ratio: 16:9.”

## State Management & Persistence
- Local state via React context at `/onboarding` parent
- Persist to `localStorage` for resilience between refreshes
- Optional: Save to Supabase when authenticated

## Validation & Accessibility
- Validation with `zod` schemas; show inline errors and disable Continue until valid
- Keyboard‑navigable controls, `aria‑label`s, contrast‑checked text
- File upload accept types (PDF/TXT) with size guard

## Loading & Error Handling
- Step views render skeletons while data hydrates
- Global ErrorBoundary wraps onboarding routes
- Fallback visuals (static gradient) if artwork fails to load
- Network errors show retry and “Skip for now” affordance

## Cross‑Browser & Performance
- Test in Chromium, Firefox, Safari; ensure transforms and filters degrade gracefully
- Lazy‑load illustrations; memoized form components to avoid re‑renders

## Optional Smart Enhancements
- Import Brand DNA from website: scrape meta, headings, tone
- Record voice note: store audio, transcribe, build voice profile
- Upload brand assets: colors, fonts, logo auto‑styling for previews

## Implementation Tasks
1. Create `/onboarding` routes and context provider
2. Build Step 1 form with typeahead industry and validation
3. Build Step 2 sliders, chip group, upload control
4. Build Step 3 goals multi‑select and horizon radio
5. Compute `BrandDNA` summary and render final screen
6. Add loaders, error boundary, persistence to `localStorage`
7. Integrate Supabase save (optional, behind feature flag)
8. Drop in artwork via Gemini outputs with lazy‑loading

## Changelog & Regression Prevention
- New routes `/onboarding/*` and context for form state
- New components for forms, sliders, chips, goal cards with unit tests
- ErrorBoundary and loaders ensure no blank screens during onboarding
- Document validation rules and persistence behavior; add e2e smoke tests for the 3‑step flow