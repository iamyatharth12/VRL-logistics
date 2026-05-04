# VRL Logistics — React Platform

A complete, multi-page logistics web platform inspired by VRL Logistics. Built with React 19, Tailwind CSS, and Framer Motion (motion/react). Designed to feel fast, industrial, and trustworthy — not like a SaaS product.

![Homepage](https://img.shields.io/badge/React-19-61DAFB?style=flat&logo=react)
![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=flat&logo=tailwindcss)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat)

---

## Tech Stack

| Tool | Version | Purpose |
|------|---------|---------|
| React | 19 | UI framework |
| Vite | 8 | Build tool & dev server |
| Tailwind CSS | 3.4 | Utility-first styling |
| motion/react (Framer Motion) | 12 | Animations |
| React Router DOM | 7 | Client-side routing |
| Lucide React | latest | Icons |

---

## Getting Started

### Prerequisites

- **Node.js** v18 or higher
- **npm** v9 or higher

Check your versions:
```bash
node -v
npm -v
```

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/iamyatharth12/VRL-logistics.git

# 2. Navigate into the project folder
cd VRL-logistics

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **http://localhost:5173** (or the next available port if 5173 is taken).

### Build for Production

```bash
npm run build
```

Output goes into the `dist/` folder — ready to deploy to any static host (Vercel, Netlify, GitHub Pages).

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```
vrl-redesign/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top navigation bar (scroll-aware, mobile menu)
│   │   └── Footer.jsx          # Site-wide footer with links & contact info
│   │
│   ├── pages/
│   │   ├── HomePage.jsx        # Landing page — hero, services, metrics, testimonials
│   │   ├── TrackingPage.jsx    # Shipment tracker with animated route map & timeline
│   │   ├── ServicesPage.jsx    # All logistics services with feature lists
│   │   ├── NetworkPage.jsx     # India map + branch locator with search/filter
│   │   ├── BookingPage.jsx     # 4-step pickup booking form
│   │   ├── BusinessPage.jsx    # B2B / enterprise solutions page
│   │   ├── AboutPage.jsx       # Company story, milestones, leadership
│   │   ├── ContactPage.jsx     # Contact form + office locations
│   │   └── DashboardPage.jsx   # Shipment dashboard with chart & table
│   │
│   ├── App.jsx                 # Router setup + shared layout
│   ├── main.jsx                # React entry point
│   └── index.css               # Design system (tokens, components, utilities)
│
├── tailwind.config.js          # VRL color palette + animation keyframes
├── vite.config.js
├── package.json
└── README.md
```

---

## Pages & Navigation

The app uses **React Router** for client-side routing. All pages share the Navbar and Footer.

| URL | Page | Description |
|-----|------|-------------|
| `/` | **Homepage** | Hero with live tracking search, stats, services grid, progress bars, testimonials, CTA |
| `/track` | **Track Shipment** | Enter a consignment ID to see animated route map, timeline, and shipment details |
| `/services` | **Services** | All 6 service types with features, transit times, and how-it-works steps |
| `/network` | **Network / Branch Locator** | India SVG map with animated routes + searchable/filterable branch cards |
| `/booking` | **Book a Pickup** | 4-step form: personal details → cargo info → schedule → confirm |
| `/business` | **Business / B2B** | Enterprise solutions, industry coverage, volume contract benefits |
| `/about` | **About** | Company history, milestone timeline, values, leadership team |
| `/contact` | **Contact** | Multi-topic contact form, office addresses, toll-free helpline |
| `/dashboard` | **Dashboard** | KPI cards, bar chart, filterable shipment table with status badges |

---

## Demo — Tracking Page

The tracking page supports two demo shipments out of the box:

| Consignment ID | Route | Status |
|---------------|-------|--------|
| `VRL123456789` | Mumbai → Bengaluru | 🟡 In Transit |
| `VRL987654321` | Delhi → Ahmedabad | 🟢 Delivered |

Go to `/track` and click either demo ID link, or type it manually and hit **Track**.

---

## Animation System

Animations follow a strict "support clarity, not steal attention" philosophy:

| Element | Animation | Duration |
|---------|-----------|----------|
| Page load | Fade + y:20→0 | 0.5–0.8s |
| Scroll reveals | Fade + stagger 0.07–0.1s | 0.45–0.55s |
| Buttons | scale 1.02–1.04 on hover, 0.97 on tap | instant |
| Cards | translateY(-4px) on hover | 0.2–0.3s |
| Tracking timeline | Sequential dot activation | 0.12s stagger |
| Route map | SVG pathLength fill + vehicle dot | 1.2s |
| Progress bars | Width fill with custom easing | 0.9s |
| Bar chart | scaleY from 0 with stagger | 0.4s |

All scroll animations trigger **once** — no repeat spam.

---

## Design System

The design uses a custom color palette defined in `tailwind.config.js` and `index.css`:

```
vrl-red:    #C8102E   — Primary brand / CTAs / accents
vrl-navy:   #0D1B2A   — Page background
vrl-steel:  #1E2D3D   — Card backgrounds
vrl-ash:    #2E3F50   — Borders / subtle elements
vrl-mist:   #94A3B8   — Secondary text
vrl-bone:   #F1F5F9   — Primary text
vrl-amber:  #F59E0B   — In-transit status
vrl-green:  #16A34A   — Delivered / success status
```

Typography uses **Barlow Condensed** for headings (industrial, condensed), **Inter** for body copy.

---

## Key Design Decisions

- **No abstract blobs, glass panels, or crypto gradients** — replaced with industrial grid patterns and subtle red glows.
- **Owned fleet over stock imagery** — SVG maps, route lines, and operational data replace decorative visuals.
- **Real information density** — every section contains actionable content (branch addresses, transit times, actual stats).
- **Responsive by default** — all pages adapt from mobile (320px) to wide desktop (1280px+).

---

## Scripts

```bash
npm run dev       # Start dev server (HMR enabled)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

---

## Deployment

This is a standard Vite SPA. Deploy the `dist/` folder to any static host.

**Vercel (recommended):**
```bash
npm i -g vercel
vercel --prod
```

**Netlify:** Drag & drop the `dist/` folder into [netlify.com/drop](https://netlify.com/drop).

> ⚠️ For client-side routing to work on Netlify, add a `_redirects` file in `public/`:
> ```
> /*  /index.html  200
> ```

---

## License

MIT — see [LICENSE](./LICENSE).
