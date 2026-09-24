# Context & Handover Guide for Antigravity Agent

## 1. Project Overview & Persona

- **Client**: Pratham Agrawal — Backend & Data Infrastructure Engineer at Affinsys AI (Bangalore, India).
- **Core Domain**: Distributed systems, high-throughput data pipelines, LLM-powered automation (Kubernetes clusters with sub-60s failover, event-driven data warehouses ingesting at sub-second latency via AMQP/NATS, NLQ-to-SQL analytics engines, PostgreSQL replication topologies).
- **Repository**: `/home/pratham/Desktop/pt/portfolio-website-v2`
- **Active Git Branch**: `v2-01`
- **App Directory**: `/home/pratham/Desktop/pt/portfolio-website-v2/nextjs/` (Next.js 16.3.5, React 19, TypeScript, Tailwind CSS v4, App Router).
- **Dev Server**: Port `3001` (`cd nextjs && npm run dev -- --port 3001`).

---

## 2. Design Philosophy & Strict Guardrails

- **Aesthetic**: Technical, disciplined, systems-oriented visual language (monitoring dashboards, architecture diagrams, database internals, terminal/log output — refined and intentional).
- **Strictly Rejected**:
  - No generic "full-stack developer" cliches.
  - No rounded SaaS template cards or floating bubbly badges.
  - No ALL-CAPS eyebrow labels.
  - No standard "01 / 02 / 03" numbered sections.
  - No generic "Hi, my name is" greetings.
  - No bloated animation libraries (NO Framer Motion, NO GSAP, NO Anime.js). All animations are native, GPU-accelerated CSS + IntersectionObserver.

---

## 2.1 Motion Design & Animation System (Anti-README Polish)

To eliminate the flat "static README file getting loaded" impression without becoming tacky:
- **`useInView.ts` + `ScrollReveal.tsx`**: Lightweight native `IntersectionObserver` hook (`triggerOnce: true`, respects `prefers-reduced-motion`). Elements glide up softly with cubic-bezier easing (`0.16, 1, 0.3, 1`) and staggered delays.
- **Section Headers (`SectionLabel.tsx`)**: Header title slides up softly while the structural hairline rule draws across smoothly from left to right (`scaleX(0) -> scaleX(1)`).
- **Hero Mount Orchestration**: Staggered initial entrance for status badge, headline, lead copy, CTAs, and telemetry console box.
- **Living Timeline Nodes (`Experience.tsx`)**: The active present-day node features a living, breathing pulse halo.
- **Tactile Card Interactions**: Cards (`.item-card`, `.expedition-card`, `.project-card`) feature responsive hover lift (`translateY(-2px)`) and subtle illuminated border-glow.
- **Engineered Background Depth (`globals.css`)**: Ultra-subtle 32px technical dot-matrix grid and ambient top radial glow, breaking the flat void while preserving clean focus.

---

## 3. Dual-Mode Portfolio Architecture (`systems` vs `offline`)

The portfolio features a mode toggle centered in the fixed top navigation bar that switches between:
1. **`systems` (Technical Mode)**:
   - Deep dark monitoring theme (`--bg: #0D1117`, `--surface: #161B22`, `--accent: #388BFD`, `--metric: #58A6FF`).
   - Sections: `Hero`, `About`, `Experience`, `FeaturedProjects`, `OtherProjects`, `Publications`, `Contact`, `Footer`.
2. **`offline` (Personal Mode)**:
   - Warm organic **Beige + Earth Brown** palette (`--bg: #F4EFEA`, `--surface: #FFFFFF`, `--text-primary: #251B12`, `--accent: #934B20`, `--metric: #B0541C`).
   - Sections: `PersonalHero`, `TrainingSection` (Gym/PPL/overload), `BikingSection` (Century rides/climbs/gear), `SportsSection` (Badminton/cricket analytics), `TravelSection` (GPS coordinates/altitudes), `PersonalContact`.
   - Managed via [`ModeContext.tsx`](file:///home/pratham/Desktop/pt/portfolio-website-v2/nextjs/src/context/ModeContext.tsx) and synced with URL (`?mode=personal`).

---

## 4. Critical Technical Rules (DO NOT BREAK)

### A. Tailwind CSS v4 Arbitrary Value Limitation
Tailwind v4 does **NOT** scan or generate CSS for arbitrary bracket values (`text-[15px]`, `h-[220px]`, `w-[7px]`, `max-w-[1100px]`, `scale-[1.02]`).
- **Rule**: All structural dimensions, exact pixel heights, and custom typography rules MUST be defined as named CSS classes in [`globals.css`](file:///home/pratham/Desktop/pt/portfolio-website-v2/nextjs/src/app/globals.css).

### B. High-Resolution Image Serving
Next.js's default image optimization routes through `/_next/image?url=...&w=256&q=75`, which downsamples and heavily compresses images, causing severe blurriness on Retina displays.
- **Rule**: [`next.config.ts`](file:///home/pratham/Desktop/pt/portfolio-website-v2/nextjs/next.config.ts) has `images: { unoptimized: true }`. **Keep this enabled** so native high-resolution assets in `public/` (`photo.jpg`, `Clusterbase.png`, `demo.png`, `mirror-db-architecture.jpeg`) render with crystal clarity.

### C. Stationary Socials
[`SocialSidebar.tsx`](file:///home/pratham/Desktop/pt/portfolio-website-v2/nextjs/src/components/SocialSidebar.tsx) stays stationary all over the page:
- On desktop (≥ 1024px): Vertical rail anchored at bottom-left with grounding hairline.
- On mobile/tablet (< 1024px): Floating glassmorphism dock pill centered at the bottom.
- Links: GitHub, LinkedIn, Twitter/X, Kaggle, Instagram, Email.

### D. Mobile Hero Layout
In [`globals.css`](file:///home/pratham/Desktop/pt/portfolio-website-v2/nextjs/src/app/globals.css), `.hero-grid` uses `flex-direction: column` on mobile so the name, status pill, headline, and CTAs render **before** the telemetry metrics console box.

---

## 5. Key File Inventory

```
nextjs/
├── next.config.ts              // images: { unoptimized: true }
├── src/
│   ├── app/
│   │   ├── globals.css         // Complete design system, color tokens, layout classes
│   │   ├── layout.tsx          // Root layout, Google Fonts (IBM Plex Mono + Inter)
│   │   └── page.tsx            // Main page wrapping ModeProvider and conditional views
│   ├── context/
│   │   └── ModeContext.tsx     // Technical vs personal state & URL query param sync
│   ├── components/
│   │   ├── Nav.tsx             // Fixed top navbar with centered ModeToggle and adaptive links
│   │   ├── ModeToggle.tsx      // Centered segmented switch [ ● systems | • offline ]
│   │   ├── SocialSidebar.tsx   // Stationary social rail (desktop) / dock (mobile)
│   │   ├── SectionLabel.tsx    // Semantic h2 with accent ## marker and drawing rule line
│   │   ├── ScrollReveal.tsx    // GPU-accelerated lightweight viewport entrance wrapper
│   │   ├── Hero.tsx            // Technical hero + typewriter telemetry HUD
│   │   ├── About.tsx           // Systems engineering bio + 500x500 headshot + cert badge
│   │   ├── Experience.tsx      // Vertical timeline with metrics highlights & breathing node
│   │   ├── Certifications.tsx  // AWS Certified Data Engineer dossier with Credly verification
│   │   ├── FeaturedProjects.tsx// Unified projects showcase: flagship dossiers (KubeSherlock, Mirror-DB, etc.) + expandable grid for other work
│   │   ├── Publications.tsx    // 3-col grid (.card-grid-3) with venues and year badges
│   │   ├── Contact.tsx         // "Let's talk systems" + direct email + telemetry spec panel
│   │   ├── Footer.tsx          // Dynamic copyright year + stack attribution
│   │   └── personal/
│   │       ├── PersonalHero.tsx   // Physical telemetry HUD & athletic bio
│   │       ├── TrainingSection.tsx// PPL split & progressive overload
│   │       ├── BikingSection.tsx  // Century rides, climbs, bike mechanics
│   │       ├── SportsSection.tsx  // Badminton, cricket analytics, team dynamics
│   │       ├── TravelSection.tsx  // Expedition cards with GPS coordinates & altitudes
│   │       └── PersonalContact.tsx// Coffee, route exchanges & informal meetups
│   └── hooks/
│       ├── useInView.ts        // Lightweight IntersectionObserver hook
│       └── usePrefersReducedMotion.ts
└── public/
    ├── photo.jpg
    ├── resume.pdf
    ├── aws-certified-data-engineer.png
    ├── kubesherlock-architecture.png
    ├── mirror-db-architecture.jpeg
    ├── loghive.png
    ├── Clusterbase.png
    ├── Crypto2csv.png
    └── demo.png
```

---

## 6. How to Continue Development

1. Check active git status: `git status -s` (on branch `v2-01`).
2. Run build verification: `cd nextjs && npm run build`.
3. Check dev server: `lsof -i :3001` or start via `cd nextjs && npm run dev -- --port 3001`.
4. Always consult this document before altering color tokens, font stacks, layout grid rules, or component hierarchy.
