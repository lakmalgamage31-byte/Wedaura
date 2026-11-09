# Wedaura Photography Portfolio & Interactive Quotation Engine

A bespoke digital presence for Wedaura Photography (by Kevin and Lakmal) featuring an editorial warm romantic portfolio gallery, transparent service packages, and a live quotation builder that compiles customized estimates with instant PDF generation and one-click WhatsApp booking dispatch.

## User Review & Critical Decisions

> [!IMPORTANT]
> The following architectural and design choices have been aligned based on your responses and the official Wedaura service guides:

- **Aesthetic & Visual Direction**: Warm romantic earthy palette (warm ivory `#FAF7F2`, linen taupe `#F0EAE1`, deep umber `#241E1C`, soft bronze gold `#B98D58`) paired with romantic serif headings (`Cormorant Garamond` / `Playfair Display`) and clean modern body type (`Plus Jakarta Sans`).
- **Interactive Quotation Builder**: Complete quotation engine implementing exact pricing and packages from Wedaura's official documents (Wedding: Essential LKR 99k–129k, Signature LKR 149k, Luxury LKR 199k+; Event Photography: Basic LKR 20k, Standard LKR 30k–40k, Premium LKR 50k–65k; Portrait Sessions: Mini LKR 13k–17k, Standard LKR 20k–25k, Premium LKR 30k–45k) plus official add-ons (drone coverage, extra hours, albums, highlight reels).
- **Client Quotation Output**: Live visual quotation preview matching the formal Wedaura quotation sheet layout (Quotation No, Date, Validity, Client Name, Event Date & Venue, itemized breakdown, 40% advance booking terms, and signature lines), downloadable with 1-click clean PDF export.
- **Instant WhatsApp Integration**: Pre-filled WhatsApp direct inquiry button configured with Sri Lanka numbers (`0711359761` / `0776769761`) formatted with package breakdown, customized add-ons, and total investment.

---

## 1. Overview & Core Concept

- **What It Does**: Gives prospective couples, event organizers, and portrait clients a visual journey through Wedaura's work, transparent pricing packages, and a real-time quote calculator where they can tailor their exact requirements, print/save a PDF quotation, or directly connect on WhatsApp to secure their date.
- **Target Audience / Persona**:
  - Couples planning weddings and pre-wedding shoots across Sri Lanka.
  - Corporate and private clients planning ceremonies, parties, and conferences.
  - Individuals, couples, and models seeking high-end portrait sessions.
- **Key Value**: Eliminates back-and-forth friction by empowering clients to explore authentic pricing, generate an official quotation instantly, and book with confidence under clear 40% deposit terms.

---

## 2. User Experience & Visual Design

### Key User Flows
1. **Hero & Discovery**: Elegant split hero introducing Wedaura's philosophy (*"Capturing your love story — beautifully, completely, forever"*), accompanied by lead photographer introduction (Kevin & Lakmal), key trust metrics, and direct jump buttons to the Gallery and Quote Builder.
2. **Curated Portfolio Gallery**: Categorized masonry layout (Weddings, Pre-Shoots, Events, Portraits) with quick category filtering, smooth hover reveals, and a fullscreen lightbox featuring image metadata, camera details, and high-resolution viewing.
3. **Transparent Packages Showcase**: Highlighting the most popular *Signature Wedding Package*, *Standard Event Package*, and *Standard Portrait Session* with clear inclusions, deliverables, turnaround times, and comparison matrices.
4. **Interactive Quote & Invoice Generator**:
   - Step 1: Select Event Type (Wedding, Event, Portrait) & Base Package.
   - Step 2: Toggle Optional Add-Ons (Drone coverage, extra edited photos, rush 24-hr delivery, lay-flat albums, cinematic highlight reels).
   - Step 3: Enter Client Name, Event Date, Location, and Contact info.
   - Step 4: Real-time price summary with 40% advance calculation and 60% balance schedule.
   - Step 5: Export high-resolution printable PDF or Send via WhatsApp with pre-filled quote summary.
5. **Integrated Contact & Booking Inquiries**: Working contact form with date pickers, venue details, notes, and direct contact details (+94 numbers, email, location).

### Visual Identity & Theme
- **Aesthetic Direction**: Romantic editorial, warm organic textures, quiet elegance.
- **Color Palette (60-30-10 Rule)**:
  - Canvas (60%): Warm Ivory / Alabaster (`#FAF8F5`, dark mode deep charcoal `#161413`).
  - Structural Surfaces (30%): Sandstone linen (`#F3EFEA`, dark mode `#201D1B`), delicate hairline borders (`#E5DDD3` / `#332D29`), deep espresso typography (`#27221F`).
  - Focal Accent (10%): Warm antique bronze / burnished ochre (`#C29B38` / `#9E7729`) for primary CTAs and active states.
- **Typography**:
  - Headings: `Cormorant Garamond` (classic editorial luxury serif).
  - Body: `Plus Jakarta Sans` (readable, refined geometric sans).
  - Quotation Figures: Tabular monospace figures (`tabular-nums`) for currency and line items.
- **Design Constitution Adherence**: Zero pill boxes for static metadata (clean unboxed text with `·` separators), clean 3-zone top bar contract, no fake telemetry or status dots, responsive layout designed for 1440px desktop with seamless mobile adaptation.

---

## 3. Key Product Decisions & Trade-Offs

- **Decision 1: Client-Side Interactive Quote Builder with Instant PDF Export**:
  - *Chosen Approach*: Pure client-side calculations paired with HTML-to-print/canvas rendering (using browser print styling and clean downloadable vector layout).
  - *Why*: Instant feedback with zero server latency, zero authentication barriers for prospective clients, and 100% reliable PDF generation without heavy external server rendering dependencies.
  - *Alternative Considered*: Requiring an account or email confirmation first; rejected to maintain frictionless inquiry conversion.
- **Decision 2: WhatsApp Deep Link Formatting**:
  - *Chosen Approach*: Automatic URL encoding of structured quotation summaries directly into `https://wa.me/94711359761?text=...`.
  - *Why*: In Sri Lanka, WhatsApp is the primary and fastest channel for booking wedding and event vendors; instant pre-filled text saves the client typing time and gives the photographer immediate context.
- **Decision 3: Curated Domain Photography Assets**:
  - *Chosen Approach*: High-fidelity generated imagery matching authentic Sri Lankan wedding landscapes, romantic sunset pre-shoots, and high-fashion editorial portraits, backed with robust SVG/CSS fallback placeholders.

---

## 4. Technical Architecture & Data Strategy

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                             Wedaura Web Experience                          │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │                              TopBar                                   │  │
│  │   [WEDAURA by Kevin & Lakmal]  —  [Portfolio · Packages · Quote]  —   │  │
│  │                                          [Request Quotation CTA]      │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                      │                                      │
│  ┌───────────────────────┬───────────┴───────────┬───────────────────────┐  │
│  ▼                       ▼                       ▼                       ▼  │
│┌──────────────┐   ┌──────────────┐   ┌──────────────────────┐   ┌──────────────┐│
││ Hero Section │   │ Media-First  │   │ Package Breakdown    │   │ Interactive  ││
││ & Story      │   │ Bento Gallery│   │ (Wedding, Event,     │   │ Quote Engine ││
││              │   │ + Lightbox   │   │  Portrait, Add-ons)  │   │ & PDF Export ││
│└──────────────┘   └──────────────┘   └──────────────────────┘   └───────┬──────┘│
│                                                                         │       │
│                                                                         ▼       │
│  ┌───────────────────────────────────────────────────────────────────────────┐  │
│  │                      Quotation & Booking Actions                          │  │
│  │   • Live PDF Sheet Generator (WED-XXX, 40% Deposit, Inclusions, Terms)    │  │
│  │   • Direct WhatsApp Inquire (Pre-formatted LKR Quote, Phone 0711359761)   │  │
│  │   • Direct Contact & Inquiries Form                                       │  │
│  └───────────────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────────┘
```

### Component Hierarchy & Module Breakdown
- `src/data/packagesData.ts`: Central single source of truth containing all packages from the PDFs (Wedding Essential, Signature, Luxury; Event Basic, Standard, Premium; Portrait Mini, Standard, Premium; Add-on pricing, payment terms).
- `src/data/galleryData.ts`: Curated gallery entries with categories, shoot location, photographer credit, and story context.
- `src/components/Navbar.tsx`: 3-zone top bar with brand wordmark, clean links, and primary CTA.
- `src/components/Hero.tsx`: Split-screen hero with couple photography, brand story, and booking metrics.
- `src/components/Gallery.tsx`: Filterable masonry grid with category tabs and high-res lightbox viewer.
- `src/components/PackagesSection.tsx`: Detailed side-by-side package cards with feature comparison and "Select for Quote" action.
- `src/components/QuoteBuilder.tsx`: Interactive multi-step calculator with package selection, add-on toggles, client info, real-time cost breakdown, and advance payment calculations.
- `src/components/QuotationModal.tsx`: Exact visual replica of the official Wedaura Quotation document with print/download capability.
- `src/components/ContactSection.tsx`: Direct inquiry form, studio information, and WhatsApp dispatch.
- `src/components/Footer.tsx`: Subtle copyright, contact details, and terms.

---

## 5. Implementation Roadmap (Post-Approval)

1. **Step 1: Visual Assets & Typography**: Configure Google Fonts (`Cormorant Garamond` & `Plus Jakarta Sans`) in `index.html` and Tailwind color tokens. Generate domain imagery for weddings, pre-shoots, and portraits.
2. **Step 2: Core Data Structure**: Encode packages, add-ons, pricing formulas, and booking terms in `src/data/packagesData.ts`.
3. **Step 3: Gallery & Lightbox**: Build interactive gallery with category filters and keyboard-accessible lightbox (`ESC` to close).
4. **Step 4: Interactive Quote Engine**: Implement the dynamic quote calculator with add-on toggles, advance payment schedule (40% advance, balance due before event), and live preview.
5. **Step 5: Official Quotation Sheet & PDF Export**: Implement print/export styles matching the Wedaura quotation PDF structure (Quotation number, validity dates, client details, itemized breakdown, signature blocks).
6. **Step 6: WhatsApp & Inquiries Dispatch**: Wire direct WhatsApp link with structured message formatting and working contact form feedback.
7. **Step 7: Verification**: Execute `compile_applet` and `lint_applet` to ensure zero compilation or type errors.
