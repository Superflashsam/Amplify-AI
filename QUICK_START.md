# Amplify.ai Design System — Quick Start Guide

## 🚀 Getting Started

### 1. Import the Design System

Add this line to your HTML `<head>`:

```html
<link rel="stylesheet" href="./globals.css">
```

**That's it!** All design tokens, typography, colors, and utilities are now available.

---

## 📝 Typography Quick Reference

### Headings (Playfair Display - Serif)

```html
<!-- Hero Section -->
<h1 class="hero-heading gradient-text-premium">
  Transform Your Marketing
</h1>

<!-- Standard H1 -->
<h1>Section Headline</h1>

<!-- H2 with Gradient -->
<h2 class="gradient-text-premium">
  Everything You Need
</h2>

<!-- Standard H3-H6 -->
<h3>Feature Heading</h3>
<h4>Card Title</h4>
<h5>Small Heading</h5>
<h6>Micro Heading</h6>
```

### Body Text (Inter - Sans-Serif)

```html
<!-- Large subtitle -->
<p class="text-xl text-slate">
  Your hero section subtitle goes here.
</p>

<!-- Standard paragraph -->
<p class="text-base text-slate">
  Regular body text for descriptions.
</p>

<!-- Small text -->
<p class="text-sm text-gray">
  Secondary information or captions.
</p>

<!-- Label/Caption -->
<p class="caption text-violet">
  FEATURES
</p>
```

### Special: AI Superpower Accent

```html
<h1>
  Unlock Your <span class="ai-superpower">AI Superpower</span>
</h1>
```

**Features:**
- Font: Space Grotesk
- Animated gradient (violet → magenta → blue)
- Subtle glow effect

---

## 🎨 Colors

### Using Color Classes

```html
<!-- Text Colors -->
<p class="text-violet">Ultra Violet text</p>
<p class="text-magenta">Neon Magenta text</p>
<p class="text-blue">Electric Blue text</p>
<p class="text-charcoal">Charcoal text (default)</p>
<p class="text-slate">Slate text (secondary)</p>
<p class="text-gray">Soft Gray text (muted)</p>
```

### Using CSS Variables

```css
.custom-element {
  color: var(--color-ultra-violet);
  background: var(--color-neon-magenta);
  border-color: var(--color-electric-blue);
}
```

### Gradients

```html
<!-- Gradient Text -->
<h2 class="gradient-text">Primary Gradient</h2>
<h2 class="gradient-text-premium">Premium 4-Stop Gradient</h2>

<!-- Gradient Background (custom) -->
<div style="background: var(--gradient-primary);">
  Content here
</div>
```

---

## 🔘 Buttons

### Primary Button

```html
<button class="btn btn-primary">
  Get Started
</button>

<!-- Large -->
<button class="btn btn-primary btn-lg">
  Get Started Free
</button>

<!-- Small -->
<button class="btn btn-primary btn-sm">
  Learn More
</button>
```

### Secondary Button

```html
<button class="btn btn-secondary">
  Watch Demo
</button>
```

### Ghost Button

```html
<button class="btn btn-ghost">
  Contact Us
</button>
```

---

## 🪟 Glass Morphism

### Glass Card

```html
<div class="glass-card">
  <h4>Card Title</h4>
  <p>Card content with frosted glass effect</p>
</div>
```

### Glass Panel (for dark backgrounds)

```html
<div class="glass-panel" style="padding: var(--space-6);">
  <h4>Panel Title</h4>
  <p>Subtle glass effect</p>
</div>
```

---

## 📐 Spacing

### Using CSS Variables

```css
.section {
  padding: var(--space-12) var(--space-6);
  margin-bottom: var(--space-20);
  gap: var(--space-4);
}
```

### Common Spacing Values

| Variable | Value | Usage |
|----------|-------|-------|
| `--space-1` | 4px | Tiny gaps |
| `--space-2` | 8px | Small gaps |
| `--space-3` | 12px | Button padding |
| `--space-4` | 16px | Card padding |
| `--space-6` | 24px | Section padding |
| `--space-8` | 32px | Large gaps |
| `--space-12` | 48px | Section spacing |
| `--space-16` | 64px | Major sections |
| `--space-20` | 80px | Hero sections |

---

## ✨ Effects

### Shadows

```html
<!-- Small shadow -->
<div style="box-shadow: var(--shadow-sm);">Card</div>

<!-- Medium shadow -->
<div style="box-shadow: var(--shadow-md);">Card</div>

<!-- Large shadow -->
<div style="box-shadow: var(--shadow-lg);">Card</div>

<!-- Extra large shadow -->
<div style="box-shadow: var(--shadow-xl);">Card</div>
```

### Glow Effects

```html
<!-- Violet glow -->
<div style="box-shadow: var(--glow-violet);">Element</div>

<!-- Magenta glow -->
<div style="box-shadow: var(--glow-magenta);">Element</div>

<!-- AI glow (combined) -->
<div style="box-shadow: var(--glow-ai);">Element</div>
```

### Animations

```html
<!-- Gradient animation -->
<div class="animate-gradient" style="background: var(--gradient-primary); background-size: 200% auto;">
  Animated gradient
</div>

<!-- Floating animation -->
<div class="animate-float">
  Floating element
</div>

<!-- Breathing halo -->
<div class="animate-breathing">
  Pulsing glow
</div>
```

---

## 🎯 Common Patterns

### Hero Section

```html
<section style="padding: var(--space-20) var(--space-6); text-align: center;">
  <p class="caption text-violet">WELCOME TO AMPLIFY.AI</p>
  
  <h1 class="hero-heading gradient-text-premium" style="margin-top: var(--space-3); margin-bottom: var(--space-4);">
    Transform Your Marketing with <span class="ai-superpower">AI Superpower</span>
  </h1>
  
  <p class="text-xl text-slate" style="max-width: 700px; margin: 0 auto var(--space-8);">
    Amplify your reach, automate your workflows, and achieve unprecedented growth with AI-powered marketing automation.
  </p>
  
  <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
    <button class="btn btn-primary btn-lg">Get Started Free</button>
    <button class="btn btn-secondary btn-lg">Watch Demo</button>
  </div>
</section>
```

### Feature Card

```html
<div class="glass-card" style="padding: var(--space-6);">
  <div style="width: 48px; height: 48px; background: var(--gradient-primary); border-radius: var(--radius-md); margin-bottom: var(--space-4);"></div>
  
  <h4 style="margin-bottom: var(--space-3);">
    AI-Powered Insights
  </h4>
  
  <p class="text-base text-slate" style="margin-bottom: var(--space-4);">
    Leverage advanced analytics to make data-driven decisions and optimize your campaigns in real-time.
  </p>
  
  <button class="btn btn-ghost btn-sm">Learn More →</button>
</div>
```

### Section Header

```html
<header style="text-align: center; margin-bottom: var(--space-12);">
  <p class="caption text-violet">FEATURES</p>
  
  <h2 class="gradient-text-premium" style="margin-top: var(--space-3); margin-bottom: var(--space-4);">
    Everything You Need to Succeed
  </h2>
  
  <p class="text-lg text-slate" style="max-width: 600px; margin: 0 auto;">
    Powerful tools designed for modern marketers who demand excellence.
  </p>
</header>
```

### CTA Section

```html
<section class="glass-card" style="padding: var(--space-16); text-align: center;">
  <h2 style="margin-bottom: var(--space-4);">
    Ready to <span class="ai-superpower">Transform</span> Your Marketing?
  </h2>
  
  <p class="text-lg text-slate" style="margin-bottom: var(--space-8);">
    Join thousands of marketers who have already unlocked their AI superpower.
  </p>
  
  <div style="display: flex; gap: var(--space-4); justify-content: center; flex-wrap: wrap;">
    <button class="btn btn-primary btn-lg">Start Free Trial</button>
    <button class="btn btn-ghost btn-lg">Schedule Demo</button>
  </div>
</section>
```

---

## 📱 Responsive Design

The design system is fully responsive with automatic adjustments:

### Breakpoints

- **Desktop**: Default styles
- **Tablet** (≤768px): Reduced spacing, adjusted typography
- **Mobile** (≤480px): Further reduced spacing, optimized text sizes

### Responsive Typography

All heading sizes use `clamp()` for fluid scaling:

```css
/* Automatically scales between min and max */
--text-hero: clamp(60px, 7vw, 84px);
--text-h1: clamp(48px, 5vw, 72px);
--text-h2: clamp(36px, 4vw, 56px);
```

---

## ♿ Accessibility

### Focus States

All interactive elements have visible focus indicators:

```css
/* Automatically applied */
*:focus-visible {
  outline: 3px solid var(--color-ultra-violet);
  outline-offset: 2px;
}
```

### Reduced Motion

Respects user preferences automatically:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

### Color Contrast

- All text meets WCAG AA standards
- Minimum 4.5:1 for body text
- Minimum 3:1 for large text

---

## 🎨 Customization

### Override CSS Variables

```css
:root {
  /* Override any design token */
  --color-ultra-violet: #7B5CFF; /* Custom violet */
  --space-6: 28px; /* Custom spacing */
  --radius-lg: 20px; /* Custom radius */
}
```

### Create Custom Utilities

```css
.my-custom-card {
  background: var(--glass-bg);
  backdrop-filter: var(--glass-blur);
  border-radius: var(--radius-xl);
  padding: var(--space-6);
  box-shadow: var(--shadow-lg);
}
```

---

## 🔍 Reference Files

- **`globals.css`** — Complete design system stylesheet
- **`DESIGN_SYSTEM.md`** — Full documentation
- **`design-system-reference.html`** — Interactive visual reference

---

## 💡 Tips & Best Practices

1. **Use Playfair Display ONLY for H1/H2** — Everything else should be Inter
2. **"AI Superpower" phrases** — Always use `.ai-superpower` class
3. **Gradient text** — Use sparingly for maximum impact
4. **Glass morphism** — Works best on colorful or image backgrounds
5. **Spacing** — Always use multiples of 4px (use CSS variables)
6. **Buttons** — Primary for main actions, Secondary for alternatives
7. **Shadows** — Use appropriate scale (sm → 2xl) based on elevation
8. **Animations** — Use `.animate-gradient` for flowing gradients

---

## 🆘 Troubleshooting

### Fonts not loading?

Check that `globals.css` is imported in your HTML:

```html
<link rel="stylesheet" href="./globals.css">
```

### Gradient not animating?

Ensure `background-size: 200% auto;` is set:

```css
.my-gradient {
  background: var(--gradient-primary);
  background-size: 200% auto;
  animation: gradient-flow 8s linear infinite;
}
```

### Glass effect not working?

Check browser support for `backdrop-filter`. Use fallback:

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px); /* Safari */
}
```

---

**Need help?** Check the full documentation in `DESIGN_SYSTEM.md` or view live examples in `design-system-reference.html`

---

**Version**: 1.0.0  
**Last Updated**: December 11, 2025
