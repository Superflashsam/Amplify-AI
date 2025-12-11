# Amplify.ai Design System

> **Premium, Bold, Confident, Elegant, Futuristic**  
> A blend of AI sophistication + luxury editorial magazine feel

---

## 🎨 Brand Personality

- **Premium**: High-end, sophisticated, polished
- **Bold**: Confident, expressive, statement-making
- **Elegant**: Refined, tasteful, editorial quality
- **Futuristic**: AI-forward, tech-savvy, innovative

---

## 📝 Typography System

### Font Families

#### **Primary Heading Font: Playfair Display**
```css
font-family: 'Playfair Display', Georgia, serif;
```
- **Usage**: H1, H2 headings only
- **Characteristics**: High-contrast serif, elegant, cinematic presence
- **Weights**: 600 (SemiBold), 700 (Bold), 800 (ExtraBold), 900 (Black)

#### **Body Font: Inter**
```css
font-family: 'Inter', sans-serif;
```
- **Usage**: All body text, paragraphs, UI elements, buttons
- **Characteristics**: Geometric, clean, minimal, highly legible
- **Weights**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold), 800 (ExtraBold)

#### **Accent Font: Space Grotesk**
```css
font-family: 'Space Grotesk', sans-serif;
```
- **Usage**: "AI Superpower" phrases, futuristic accents, tech stats
- **Characteristics**: Tech-forward, geometric, modern, quirky
- **Weights**: 500 (Medium), 600 (SemiBold), 700 (Bold)

#### **UI Font: Inter**
```css
font-family: 'Inter', sans-serif;
```
- **Usage**: All UI elements, buttons, labels, bento cards
- **Characteristics**: Clean, geometric, versatile

---

## 📏 Typography Scale

### Headings

| Element | Size (Desktop) | Weight | Letter Spacing | Line Height | Usage |
|---------|---------------|--------|----------------|-------------|-------|
| **Hero H1** | 60–84px (clamp) | 900 | -1% to -2% | 1.05 | Hero sections only (Playfair) |
| **H1** | 48–72px (clamp) | 900 | -1% | 1.15 | Page titles (Playfair) |
| **H2** | 36–56px (clamp) | 800 | -1% | 1.15 | Section headings (Playfair) |
| **H3** | 28–40px (clamp) | 700 | 0% | 1.3 | Feature headings (Inter) |
| **H4** | 24–32px (clamp) | 600 | 0% | 1.3 | Card titles (Inter) |
| **H5** | 20–24px (clamp) | 600 | 0% | 1.3 | Small headings (Inter) |
| **H6** | 18–20px (clamp) | 600 | 1% | 1.3 | Micro headings (Inter Uppercase) |

### Body Text

| Class | Size | Weight | Line Height | Usage |
|-------|------|--------|-------------|-------|
| `.text-xl` | 24px | 400 | 1.6 | Large body, subtitles |
| `.text-lg` | 20px | 400 | 1.6 | Emphasized body |
| `.text-md` | 18px | 400 | 1.5 | Medium body |
| `.text-base` | 16px | 400 | 1.5 | Default body |
| `.text-sm` | 14px | 400 | 1.5 | Small body |
| `.text-xs` | 13px | 400 | 1.5 | Extra small |
| `.caption` | 12px | 500 | 1.3 | Captions, labels (uppercase) |

---

## 🎨 Color System

### Primary Colors

```css
--color-ultra-violet: #6A4CFF;    /* Primary brand color */
--color-neon-magenta: #FF67D1;    /* Secondary brand color */
--color-electric-blue: #4D8CFF;   /* Accent color */
--color-amber-glow: #FFB23F;      /* Warm accent */
```

### Neutrals

```css
--color-charcoal: #0F0F12;        /* Primary text */
--color-slate: #1A1A1E;           /* Secondary text */
--color-soft-gray: #A0A0A8;       /* Muted text */
--color-white: #FFFFFF;           /* Background */
--color-off-white: #FAFAFA;       /* Subtle background */
```

### Semantic Colors

```css
--color-success: #45E693;
--color-warning: #FFB23F;
--color-error: #FF5A57;
--color-info: #4D8CFF;
```

---

## 🌈 Gradient System

### Primary Gradients

```css
/* Primary Gradient */
--gradient-primary: linear-gradient(135deg, #6A4CFF 0%, #FF67D1 100%);

/* Secondary Gradient */
--gradient-secondary: linear-gradient(135deg, #4D8CFF 0%, #6A4CFF 100%);

/* Accent Gradient */
--gradient-accent: linear-gradient(135deg, #FF67D1 0%, #FFB23F 100%);

/* Premium Gradient (4-stop) */
--gradient-premium: linear-gradient(90deg, #FF5A57 0%, #E02F75 33%, #6700A3 66%, #050C38 100%);

/* AI Glow Gradient */
--gradient-ai-glow: linear-gradient(135deg, #6A4CFF 0%, #FF67D1 50%, #4D8CFF 100%);
```

### Usage Examples

```html
<!-- Gradient Text -->
<h2 class="gradient-text-premium">
  Transform Your Marketing
</h2>

<!-- AI Superpower Accent -->
<h1>
  Unlock Your <span class="ai-superpower">AI Superpower</span>
</h1>
```

---

## 📐 Spacing System

Based on **4px** increments:

```css
--space-1: 4px;
--space-2: 8px;
--space-3: 12px;
--space-4: 16px;
--space-6: 24px;
--space-8: 32px;
--space-12: 48px;
--space-16: 64px;
--space-18: 72px;
--space-20: 80px;
--space-24: 96px;
--space-32: 128px;
```

### Section Spacing

```css
--section-padding-y: 80px;    /* Vertical padding */
--section-padding-x: 24px;    /* Horizontal padding */
--section-gap: 64px;          /* Gap between sections */
```

---

## 🔲 Border Radius

```css
--radius-sm: 8px;
--radius-md: 12px;
--radius-lg: 16px;
--radius-xl: 20px;
--radius-2xl: 24px;
--radius-3xl: 32px;
--radius-full: 9999px;    /* Pills, circular elements */
```

---

## ✨ Effects & Shadows

### Box Shadows

```css
--shadow-sm: 0 1px 2px rgba(15, 15, 18, 0.05);
--shadow-md: 0 4px 6px -1px rgba(15, 15, 18, 0.1), 0 2px 4px -1px rgba(15, 15, 18, 0.06);
--shadow-lg: 0 10px 15px -3px rgba(15, 15, 18, 0.1), 0 4px 6px -2px rgba(15, 15, 18, 0.05);
--shadow-xl: 0 20px 25px -5px rgba(15, 15, 18, 0.1), 0 10px 10px -5px rgba(15, 15, 18, 0.04);
--shadow-2xl: 0 25px 50px -12px rgba(15, 15, 18, 0.25);
```

### Glow Effects

```css
--glow-violet: 0 0 20px rgba(106, 76, 255, 0.3), 0 0 40px rgba(106, 76, 255, 0.15);
--glow-magenta: 0 0 20px rgba(255, 103, 209, 0.3), 0 0 40px rgba(255, 103, 209, 0.15);
--glow-blue: 0 0 20px rgba(77, 140, 255, 0.3), 0 0 40px rgba(77, 140, 255, 0.15);
--glow-ai: 0 0 30px rgba(106, 76, 255, 0.4), 0 0 60px rgba(255, 103, 209, 0.2);
```

### Glass Morphism

```css
.glass-card {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: var(--radius-xl);
  box-shadow: var(--shadow-lg);
}

.glass-panel {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-2xl);
}
```

---

## 🎬 Animations

### Keyframe Animations

```css
/* Gradient Flow */
.animate-gradient {
  animation: gradient-flow 8s linear infinite;
}

/* Floating Effect */
.animate-float {
  animation: float 6s ease-in-out infinite;
}

/* Breathing Halo */
.animate-breathing {
  animation: breathing-halo 3s ease-in-out infinite;
}
```

### Transition Speeds

```css
--transition-fast: 150ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-base: 250ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-slow: 350ms cubic-bezier(0.4, 0, 0.2, 1);
--transition-smooth: 500ms cubic-bezier(0.4, 0, 0.2, 1);
```

---

## 🔘 Button Styles

### Primary Button

```html
<button class="btn btn-primary">
  Get Started
</button>
```

**Styles:**
- Background: `var(--gradient-primary)`
- Color: White
- Shadow: Medium + Violet glow
- Hover: Lift effect with enhanced glow

### Secondary Button

```html
<button class="btn btn-secondary">
  Learn More
</button>
```

**Styles:**
- Background: White
- Color: Ultra Violet
- Border: 2px Ultra Violet
- Hover: Inverted colors with glow

### Ghost Button

```html
<button class="btn btn-ghost">
  Contact Us
</button>
```

**Styles:**
- Background: Transparent
- Border: 2px Soft Gray
- Hover: Border becomes Ultra Violet

### Button Sizes

```html
<button class="btn btn-primary btn-lg">Large Button</button>
<button class="btn btn-primary">Default Button</button>
<button class="btn btn-primary btn-sm">Small Button</button>
```

---

## 🎯 Special Typography Classes

### AI Superpower Accent

```html
<h1>
  Unlock Your <span class="ai-superpower">AI Superpower</span>
</h1>
```

**Features:**
- Font: Sora SemiBold
- Gradient: AI Glow (animated)
- Glow effect: Subtle aura behind text
- Animation: Gradient flows continuously

### Hero Heading

```html
<h1 class="hero-heading">
  Transform Your Marketing
</h1>
```

**Specifications:**
- Size: 60–84px (responsive)
- Weight: 900 (Black)
- Letter spacing: -3%
- Line height: 1.05
- Font: Playfair Display

### Gradient Text

```html
<h2 class="gradient-text-premium">
  Premium Heading
</h2>
```

**Features:**
- 4-stop premium gradient
- Animated background position
- Smooth color transitions

---

## 📱 Responsive Breakpoints

### Tablet (≤768px)

- Section padding reduced
- Hero heading: 40–60px
- Adjusted spacing scale

### Mobile (≤480px)

- Section padding further reduced
- Hero heading: 32–48px
- H2: 28–40px
- Optimized letter spacing

---

## ♿ Accessibility

### Focus States

All interactive elements have visible focus indicators:

```css
*:focus-visible {
  outline: 3px solid var(--color-ultra-violet);
  outline-offset: 2px;
}
```

### Reduced Motion

Respects user preferences:

```css
@media (prefers-reduced-motion: reduce) {
  /* All animations disabled */
}
```

### Color Contrast

- All text meets WCAG AA standards
- Minimum contrast ratio: 4.5:1 for body text
- Minimum contrast ratio: 3:1 for large text

---

## 🎨 Usage Examples

### Hero Section

```html
<section class="hero">
  <h1 class="hero-heading gradient-text-premium">
    Transform Your Marketing with <span class="ai-superpower">AI Superpower</span>
  </h1>
  <p class="text-xl text-slate">
    Amplify your reach, automate your workflows, and achieve unprecedented growth.
  </p>
  <div class="flex gap-4">
    <button class="btn btn-primary btn-lg">Get Started</button>
    <button class="btn btn-secondary btn-lg">Watch Demo</button>
  </div>
</section>
```

### Feature Card

```html
<div class="glass-card">
  <h3 class="font-heading font-bold text-h4">
    AI-Powered Insights
  </h3>
  <p class="text-base text-slate">
    Leverage advanced analytics to make data-driven decisions.
  </p>
  <button class="btn btn-ghost btn-sm">Learn More</button>
</div>
```

### Section Heading

```html
<section>
  <h6 class="caption text-violet">FEATURES</h6>
  <h2 class="gradient-text-premium">
    Everything You Need to Succeed
  </h2>
  <p class="text-lg text-slate">
    Powerful tools designed for modern marketers.
  </p>
</section>
```

---

## 🚀 Implementation Checklist

- [x] Import `globals.css` in `index.html`
- [x] Use Playfair Display for H1/H2 only
- [x] Use Inter for all body text
- [x] Use Sora for "AI Superpower" accents
- [x] Apply gradient text to hero headings
- [x] Use glass morphism for cards
- [x] Add glow effects to CTAs
- [x] Ensure proper spacing (4px increments)
- [x] Test responsive breakpoints
- [x] Verify accessibility (focus states, contrast)
- [x] Test reduced motion preferences

---

## 📚 Resources

- [Playfair Display on Google Fonts](https://fonts.google.com/specimen/Playfair+Display)
- [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- [Sora on Google Fonts](https://fonts.google.com/specimen/Sora)
- [DM Sans on Google Fonts](https://fonts.google.com/specimen/DM+Sans)

---

**Last Updated**: December 11, 2025  
**Version**: 1.0.0  
**Maintained by**: Amplify.ai Design Team
