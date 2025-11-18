# Amplify-AI
# 🚀 Amplify AI

**AI-Powered Multi-Channel Marketing Platform for SMBs & Agencies**

Amplify empowers SMBs and agencies to extract brand DNA from multiple sources, generate high-quality multi-channel marketing content (text, images, videos, audio), orchestrate campaigns, publish directly to platforms, track performance, and continuously optimize using AI feedback loops.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Authentication](#authentication)
- [Firebase Integration](#firebase-integration)
- [AI & Genkit](#ai--genkit)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

### 🎯 Core Capabilities

- **Brand DNA Extraction**: Automatically analyze and extract brand identity from websites, documents, and social media
- **Multi-Channel Content Generation**: Create text, images, videos, and audio content powered by AI
- **Campaign Orchestration**: Plan, schedule, and manage marketing campaigns across platforms
- **Direct Platform Publishing**: Publish content directly to social media, websites, and marketing channels
- **Performance Tracking**: Real-time analytics and performance monitoring
- **AI Feedback Loops**: Continuous optimization based on performance data

### 🎨 User Experience

- **Premium Authentication**: Beautiful two-column auth page with glassmorphism effects
- **Responsive Design**: Fully responsive across desktop, tablet, and mobile devices
- **Modern UI Components**: Built with Radix UI primitives and styled with Tailwind CSS
- **Smooth Animations**: Framer Motion powered micro-interactions and transitions
- **Accessibility First**: WCAG compliant with full keyboard navigation and screen reader support

---

## 🛠️ Tech Stack

### Frontend

- **Framework**: [Next.js 15.3.3](https://nextjs.org/) - React framework with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Type-safe JavaScript
- **Styling**: [Tailwind CSS 3.0.1](https://tailwindcss.com/) - Utility-first CSS framework
- **UI Components**: [Radix UI](https://www.radix-ui.com/) - Unstyled, accessible components
- **Animations**: [Framer Motion 11.3.19](https://www.framer.com/motion/) - Production-ready animations
- **Icons**: [Lucide React 0.475.0](https://lucide.dev/) - Beautiful & consistent icon pack
- **Date Handling**: [date-fns 3.6.0](https://date-fns.org/) - Modern JavaScript date utility

### Backend & Database

- **Backend Platform**: [Firebase 11.9.1](https://firebase.google.com/) - Google's app development platform
- **Authentication**: Firebase Auth - Secure user authentication
- **Database**: [Firestore](https://firebase.google.com/docs/firestore) - NoSQL cloud database
- **Storage**: Firebase Storage - File storage and serving
- **Hosting**: Firebase Hosting - Fast and secure web hosting

### AI & ML

- **AI Framework**: [Genkit 1.20.0](https://firebase.google.com/docs/genkit) - Firebase's AI orchestration framework
- **LLM Provider**: Google Generative AI (Gemini) - Advanced language models
- **AI Features**: 
  - Content generation
  - Brand analysis
  - Campaign optimization
  - Performance insights

### Development Tools

- **Package Manager**: npm
- **Linting**: ESLint - Code quality and consistency
- **Type Checking**: TypeScript Compiler
- **Version Control**: Git & GitHub
- **Development Environment**: Firebase Studio

---

## 🚀 Getting Started

### Prerequisites

- Node.js 20+ installed
- Firebase account with project created
- Git installed

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/Superflashsam/Amplify-AI.git
cd Amplify-AI
```

2. **Install dependencies**

```bash
npm install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Google Generative AI
GOOGLE_GENAI_API_KEY=your_gemini_api_key
```

4. **Run the development server**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run genkit:dev` - Start Genkit development server
- `npm run genkit:watch` - Watch Genkit AI flows
- `npm run build` - Build production bundle
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

---

## 📁 Project Structure

```
Amplify-AI/
├── .idx/                    # IDX configuration
├── docs/                    # Documentation
├── functions/               # Firebase Cloud Functions
├── genkit/                  # Genkit AI flows and configurations
├── public/                  # Static assets
├── src/
│   ├── ai/                 # AI utilities and helpers
│   ├── app/                # Next.js App Router
│   │   ├── auth/          # Authentication pages
│   │   │   └── page.tsx   # Premium auth UI
│   │   ├── dashboard/     # Dashboard pages
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Landing page
│   ├── components/        # React components
│   │   ├── landing/       # Landing page components
│   │   └── ui/           # Reusable UI components
│   ├── firebase/         # Firebase configuration
│   ├── hooks/           # Custom React hooks
│   └── lib/             # Utility functions
├── .firebaserc          # Firebase project configuration
├── .gitignore
├── apphosting.yaml      # Firebase App Hosting config
├── components.json      # Shadcn UI configuration
├── firebase.json        # Firebase config
├── firestore.indexes.json
├── firestore.rules      # Firestore security rules
├── next.config.ts       # Next.js configuration
├── package.json
├── postcss.config.mjs   # PostCSS configuration
├── README.md
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

---

## 🔐 Authentication

Amplify AI features a world-class authentication experience built with:

### Features

- **Two-Column Layout**: Premium auth panel (40%) + animated hero panel (60%)
- **Tabbed Interface**: Seamless switching between Sign In and Sign Up
- **Social Authentication**: Google and GitHub OAuth integration
- **Form Validation**: Real-time validation with error states
- **Floating Labels**: Modern input design with animated labels
- **Password Visibility**: Toggle password visibility
- **Responsive**: Stacks vertically on mobile, side-by-side on desktop
- **Accessibility**: Full ARIA labels, keyboard navigation, reduced motion support
- **Animations**: Smooth Framer Motion transitions and micro-interactions

### Authentication Routes

- `/auth` - Sign in / Sign up page
- `/dashboard` - Protected dashboard (requires authentication)

---

## 🔥 Firebase Integration

### Services Used

1. **Firebase Authentication**
   - Email/Password authentication
   - Google OAuth
   - GitHub OAuth
   - Session management

2. **Cloud Firestore**
   - User profiles
   - Campaign data
   - Content storage
   - Analytics data

3. **Firebase Storage**
   - Media asset storage
   - Generated content files
   - User uploads

4. **Firebase Hosting**
   - Production deployment
   - CDN distribution
   - SSL certificates

5. **Firebase Functions**
   - Background processing
   - Webhooks
   - Scheduled tasks

### Security Rules

Firestore security rules are defined in `firestore.rules`. Key principles:

- Users can only read/write their own data
- Admin-only collections require special permissions
- Validation rules ensure data integrity

---

## 🤖 AI & Genkit

### Genkit Framework

Amplify AI uses Firebase Genkit for AI orchestration:

- **Flows**: Defined AI workflows for content generation
- **Prompts**: Reusable prompt templates
- **Models**: Google Gemini integration
- **Monitoring**: Built-in observability and debugging

### AI Capabilities

1. **Brand DNA Analysis**
   - Extract brand colors, fonts, voice, and values
   - Analyze competitor positioning
   - Generate brand guidelines

2. **Content Generation**
   - Blog posts and articles
   - Social media posts
   - Ad copy and headlines
   - Email campaigns

3. **Media Creation**
   - Image generation
   - Video scripts
   - Audio content

4. **Campaign Optimization**
   - A/B testing recommendations
   - Performance predictions
   - Audience targeting

### Running Genkit

```bash
# Start Genkit dev server
npm run genkit:dev

# Watch for changes
npm run genkit:watch
```

Access Genkit UI at [http://localhost:4000](http://localhost:4000)

---

## 🚢 Deployment

### Firebase Hosting

1. **Build the project**

```bash
npm run build
```

2. **Deploy to Firebase**

```bash
firebase deploy
```

### Environment Variables

Ensure all environment variables are set in Firebase:

```bash
firebase functions:config:set \
  google.api_key="YOUR_GEMINI_API_KEY"
```

### Continuous Deployment

The project is set up for continuous deployment via:

- Firebase App Hosting
- GitHub Actions (optional)
- Automatic previews for pull requests

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Code Style

- Follow TypeScript best practices
- Use Tailwind CSS for styling
- Write accessible components
- Add JSDoc comments for functions
- Run `npm run lint` before committing

---

## 📝 License

This project is proprietary software. All rights reserved.

---

## 👥 Contributors

- **TerraFlowAI** - Development
- **Shamanth** - Product & Development

---

## 📞 Support

For support, questions, or feedback:

- Create an issue on [GitHub](https://github.com/Superflashsam/Amplify-AI/issues)
- Contact the team

---

## 🗺️ Roadmap

### Q1 2026
- [ ] Advanced AI model fine-tuning
- [ ] Multi-language support
- [ ] Enhanced analytics dashboard
- [ ] Team collaboration features

### Q2 2026
- [ ] Mobile app (iOS & Android)
- [ ] WordPress plugin
- [ ] Shopify integration
- [ ] API for third-party integrations

---

**Built with ❤️ using Next.js, Firebase, and Google AI**