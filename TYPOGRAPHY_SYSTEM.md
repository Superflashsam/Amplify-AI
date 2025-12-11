# 🎨 Amplify.ai Global Typography System

**Version:** 1.0  
**Last Updated:** December 11, 2025  
**Status:** ✅ Fully Implemented

---

## 📋 Table of Contents

1. [Font Stack](#font-stack)
2. [Typography Hierarchy](#typography-hierarchy)
3. [Usage Guidelines](#usage-guidelines)
4. [Responsive Rules](#responsive-rules)
5. [Code Examples](#code-examples)
6. [Component Mapping](#component-mapping)

---

## 🔤 Font Stack

### Primary Display Font: **Playfair Display**
```css
font-family: 'Playfair Display', Georgia, serif;
```

**Purpose:** Premium editorial headlines  
**Weights:** 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)  
**Characteristics:**
- High-contrast serif
- Elegant, luxury tech aesthetic
- Tight letter spacing (–1% to –2%)
- Sharp serifs with smooth curves

**Usage:**
- ✅ H1, H2 headlines
- ✅ Hero section main headline
- ✅ Section intros
- ✅ Brand logo ("Amplify")
- ✅ Large stat values
- ❌ Body text
- ❌ UI labels
- ❌ Buttons

---

### Secondary Font: **Inter**
```css
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Purpose:** Clean, modern UI and body content  
**Weights:** 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)  
**Characteristics:**
- Geometric sans-serif
- Highly readable
- Neutral and minimal
- Perfect for dashboard UI

**Usage:**
- ✅ H3, H4, H5, H6 (UI headings)
- ✅ Body paragraphs
- ✅ Buttons and CTAs
- ✅ Form inputs
- ✅ Navigation menus
- ✅ Card titles
- ✅ Bento grid elements
- ✅ Footer links

---

### Accent Font: **Space Grotesk**
```css
font-family: 'Space Grotesk', sans-serif;
```

**Purpose:** Futuristic tech accents  
**Weights:** 500 (Medium), 600 (SemiBold), 700 (Bold)  
**Characteristics:**
- Geometric, quirky
- Tech-forward aesthetic
- Wide letter spacing (+5% to +10%)

**Usage:**
- ✅ "AI Superpowers" accent text
- ✅ Tech stats and metrics
- ✅ Special highlight phrases
- ❌ Regular headlines
- ❌ Body text
- ❌ Standard UI elements

**⚠️ Use Sparingly:** Only for 1-3 key words per section to maintain impact.

---

## 📐 Typography Hierarchy

### Desktop Sizes

| Element | Font | Size | Weight | Tracking | Line Height | Usage |
|---------|------|------|--------|----------|-------------|-------|
| **Hero H1** | Playfair Display | 72–96px | 900 | -2% | 1.05 | Hero section only |
| **H1** | Playfair Display | 56–72px | 900 | -1.5% | 1.1 | Page titles |
| **H2** | Playfair Display | 36–56px | 800 | -1% | 1.15 | Section headings |
| **H3** | Inter | 28–40px | 700 | 0% | 1.3 | Feature headings |
| **H4** | Inter | 24–32px | 600 | 0% | 1.3 | Card titles |
| **H5** | Inter | 20–24px | 600 | 0% | 1.3 | Small headings |
| **H6** | Inter | 18–20px | 600 | +1% | 1.3 | Micro headings (uppercase) |
| **Body Large** | Inter | 18–20px | 400 | 0% | 1.6 | Intro paragraphs |
| **Body** | Inter | 16–18px | 400 | 0% | 1.6 | Standard text |
| **Body Small** | Inter | 14–16px | 400 | 0% | 1.5 | Secondary text |
| **Caption** | Inter | 12–14px | 500 | +0.2% | 1.4 | Labels, captions |
| **Button** | Inter | 16–18px | 600 | +0.3% | 1 | CTA buttons |
| **Nav Link** | Inter | 14–16px | 500 | 0% | 1 | Navigation |

### Tablet Sizes (768px - 1024px)

| Element | Size |
|---------|------|
| **Hero H1** | 48–64px |
| **H1** | 40–56px |
| **H2** | 32–48px |
| **H3** | 24–32px |
| **H4** | 20–28px |

### Mobile Sizes (< 768px)

| Element | Size |
|---------|------|
| **Hero H1** | 32–42px |
| **H1** | 28–36px |
| **H2** | 24–32px |
| **H3** | 20–24px |
| **H4** | 18–20px |

---

## 🎯 Usage Guidelines

### 1. **Gradient Text Rules**

**Gradient Colors:**
```css
background: linear-gradient(135deg, #6A4CFF 0%, #FF67D1 50%, #4D8CFF 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

**When to Use:**
- ✅ 1-3 key words per headline
- ✅ Phrases containing "AI", "Superpowers", or product-defining words
- ✅ Stat values on hover
- ❌ Entire paragraphs
- ❌ Body text

**Glow Effect:**
```css
text-shadow: 0 0 20px rgba(106, 76, 255, 0.3);
```

---

### 2. **Button Typography**

**Primary CTA:**
```tsx
<button className="font-sans font-semibold text-base tracking-wide">
  Get Started Free
</button>
```

**Specifications:**
- Font: Inter
- Weight: 600 (SemiBold)
- Size: 16–18px
- Letter Spacing: +0.3%
- Text Transform: None (sentence case)

---

### 3. **Navigation Typography**

**Desktop Nav:**
```tsx
<a className="font-sans font-medium text-sm">Product</a>
```

**Specifications:**
- Font: Inter
- Weight: 500 (Medium)
- Size: 14–16px
- Letter Spacing: 0%

---

### 4. **Subheading Rules**

**H3/H4 Subheadings:**
- Font: Inter
- Size: 22–32px
- Weight: 500–600
- Tracking: +0.2%
- Use for feature descriptions, card titles

---

### 5. **Body Text Rules**

**Standard Paragraphs:**
- Font: Inter
- Size: 16–18px
- Weight: 400–500
- Line Height: 1.6
- Color: `text-gray-600` or `text-gray-700`

**Muted Paragraphs:**
- Opacity: 75%
- Color: `text-gray-500`

**Small Text:**
- Size: 12–14px
- Weight: 500
- Optional: Uppercase with +2% tracking

---

## 📱 Responsive Rules

### Clamp Function (Recommended)

Use CSS `clamp()` for fluid typography:

```css
/* Hero H1 */
font-size: clamp(32px, 5vw, 96px);

/* H2 */
font-size: clamp(24px, 4vw, 56px);

/* H3 */
font-size: clamp(20px, 3vw, 40px);

/* Body */
font-size: clamp(16px, 1.5vw, 18px);
```

### Breakpoints

```css
/* Mobile First */
@media (min-width: 768px) {
  /* Tablet */
}

@media (min-width: 1024px) {
  /* Desktop */
}

@media (min-width: 1440px) {
  /* Large Desktop */
}
```

---

## 💻 Code Examples

### Hero Section

```tsx
<h1 className="font-serif font-black text-[56px] md:text-[72px] lg:text-[84px] leading-[1.05] tracking-tight text-dark mb-8">
  Amplify Your Marketing With{' '}
  <span className="relative font-display font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-[#6A4CFF] via-[#FF67D1] to-[#4D8CFF]">
    AI SUPERPOWERS
  </span>
</h1>
```

### Section Heading

```tsx
<h2 className="font-serif font-bold text-3xl md:text-5xl text-dark mb-6 tracking-tight">
  Everything You Need to Build{' '}
  <span className="gradient-text">High-Performance</span> Brand Content
</h2>
```

### Card Title

```tsx
<h3 className="font-sans font-bold text-lg md:text-2xl text-gray-900 mb-2">
  AI Content Calendar
</h3>
```

### Body Text

```tsx
<p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed">
  Plan an entire 30-day content calendar in minutes — complete with campaign themes, 
  posting slots, and platform-optimized variations.
</p>
```

### Button

```tsx
<button className="font-sans font-semibold text-base tracking-wide px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-full">
  Start Free Trial
</button>
```

---

## 🗺️ Component Mapping

### ✅ Fully Implemented Components

| Component | Headline Font | Body Font | Accent Font | Status |
|-----------|--------------|-----------|-------------|--------|
| **Hero.tsx** | Playfair Display | Inter | Space Grotesk | ✅ |
| **FeatureBento.tsx** | Playfair Display | Inter | - | ✅ |
| **CtaSection.tsx** | Playfair Display | Inter | - | ✅ |
| **IntegrationsSection.tsx** | Playfair Display | Inter | - | ✅ |
| **Navbar.tsx** | Playfair Display | Inter | - | ✅ |
| **Footer.tsx** | Playfair Display | Inter | - | ✅ |
| **SocialProofSection.tsx** | Playfair Display | Inter | - | ✅ |

---

## 🎨 Design Tone & Personality

**Brand Voice:**
- ✨ **Premium** — High-end, luxury tech aesthetic
- 📰 **Editorial** — Magazine-quality typography
- 🧘 **Soft Luxury** — Elegant without being stuffy
- 🧹 **Clean UI** — Minimal, functional, modern
- 🎭 **Expressive Headlines** — Bold, confident, attention-grabbing

**Typography Pairing Philosophy:**
- **Serif (Playfair) + Sans (Inter)** = Classic editorial pairing
- **High Contrast** = Playfair's dramatic strokes vs. Inter's geometric simplicity
- **Hierarchy** = Clear visual distinction between display and functional text
- **Consistency** = Same fonts across all touchpoints (landing page, dashboard, marketing)

---

## 🚀 Implementation Checklist

- [x] Import Playfair Display (weights: 600, 700, 800, 900)
- [x] Import Inter (weights: 300, 400, 500, 600, 700)
- [x] Import Space Grotesk (weights: 500, 600, 700)
- [x] Configure Tailwind font families
- [x] Update `globals.css` with CSS variables
- [x] Apply to Hero section
- [x] Apply to all section headings
- [x] Apply to navigation
- [x] Apply to footer
- [x] Apply to buttons
- [x] Apply to cards and bento grids
- [x] Test responsive scaling
- [x] Verify gradient text rendering
- [x] Document usage guidelines

---

## 📚 Additional Resources

- [Playfair Display on Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Space Grotesk on Google Fonts](https://fonts.google.com/specimen/Space+Grotesk)
- [Typography Best Practices](https://www.typewolf.com/)
- [Responsive Typography Guide](https://web.dev/responsive-typography/)

---

**Maintained by:** Amplify.ai Design Team  
**Questions?** Contact design@amplify.ai
