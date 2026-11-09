export interface PackageItem {
  id: string;
  category: 'wedding' | 'event' | 'portrait';
  name: string;
  tagline?: string;
  isPopular?: boolean;
  basePrice: number;
  priceDisplay: string;
  coverage: string;
  photographers: string;
  deliverables: string[];
  extras?: string[];
  deliveryTimeline: string;
  highlightsTimeline: string;
  recommendedFor: string;
}

export interface AddOnItem {
  id: string;
  name: string;
  description: string;
  price: number;
  unit: string;
  applicableTo?: ('wedding' | 'event' | 'portrait')[];
}

export const WEDDING_PACKAGES: PackageItem[] = [
  {
    id: 'wed-essential',
    category: 'wedding',
    name: 'Essential Package',
    tagline: 'Timeless full-day coverage with complete photo memories',
    basePrice: 129000,
    priceDisplay: 'LKR 129,000',
    coverage: 'Full-day coverage (no time limit)',
    photographers: '2 Professional Photographers',
    deliverables: [
      '200+ Professionally edited high-res photos',
      '1 × 16×24 Framed enlargement portrait',
      '100 × 6×8 Fine art prints',
      '1 Standard photo album (20 pages)',
      'Custom designed Thank You Card set',
      'Online private gallery (Google Drive / Dropbox link)',
    ],
    extras: [
      'Pre-wedding shoot (wedding day 1 hour)',
      'Professional color grading & retouching',
    ],
    highlightsTimeline: '10–15 highlights within 48 hours',
    deliveryTimeline: 'Full gallery within 28 days',
    recommendedFor: 'Intimate to classic wedding celebrations with full-day storytelling',
  },
  {
    id: 'wed-signature',
    category: 'wedding',
    name: 'Signature Package',
    tagline: 'Chosen by the majority of our couples for the complete heirloom experience',
    isPopular: true,
    basePrice: 149000,
    priceDisplay: 'LKR 149,000',
    coverage: 'Full-day coverage (no time limit)',
    photographers: '2 Professional Senior Photographers',
    deliverables: [
      '300+ Professionally edited high-res photos',
      '1 × 16×24 Premium framed enlargement',
      '150 × 6×8 Fine art prints',
      '1 Premium lay-flat album (30 pages)',
      'Thank You Card set (premium custom design)',
      'Private cloud gallery for friends & family',
    ],
    extras: [
      'Pre-wedding shoot (1 free pre-shoot before wedding day)',
      'Priority color grading and fine-retouching',
      'Social media optimized versions',
    ],
    highlightsTimeline: '15–20 highlights within 24 hours',
    deliveryTimeline: 'Full gallery within 28 days',
    recommendedFor: 'Couples wanting pre-shoot coverage and luxury lay-flat album presentation',
  },
  {
    id: 'wed-luxury',
    category: 'wedding',
    name: 'Luxury Package',
    tagline: 'The ultimate royal experience with expedited delivery and dual enlargements',
    basePrice: 199000,
    priceDisplay: 'LKR 199,000+',
    coverage: 'Full-day comprehensive coverage (no time limit)',
    photographers: '2 Senior Photographers + Assistant',
    deliverables: [
      '450+ Professionally edited high-res photos',
      '2 × 16×24 Premium framed enlargements',
      '200 × 6×8 Fine art prints',
      'Luxury lay-flat album (40 pages, bespoke velvet/leather cover)',
      'Thank You Card set (high-end foil print & design)',
      'High-res master USB + private cloud link',
    ],
    extras: [
      'Pre-wedding shoot (extended 2-hour outdoor session)',
      'Same-day slideshow for wedding reception',
      'Express priority editing queue',
    ],
    highlightsTimeline: 'Same-day highlights (10–15 images)',
    deliveryTimeline: 'Full gallery within 14 days',
    recommendedFor: 'Grand multi-ceremony weddings desiring expedited delivery and maximum coverage',
  },
];

export const EVENT_PACKAGES: PackageItem[] = [
  {
    id: 'evt-basic',
    category: 'event',
    name: 'Basic Event Package',
    tagline: 'Essential documentation for intimate gatherings',
    basePrice: 20000,
    priceDisplay: 'LKR 20,000',
    coverage: '2 Hours of continuous coverage',
    photographers: '1 Professional Photographer',
    deliverables: [
      '50 – 80 Fully edited high-resolution photos',
      'Color grading and basic retouching',
      'Private online gallery download link',
    ],
    highlightsTimeline: 'Preview highlights within 48 hours',
    deliveryTimeline: 'Complete gallery within 3–4 business days',
    recommendedFor: 'Small functions, birthdays, intimate gatherings & anniversaries',
  },
  {
    id: 'evt-standard',
    category: 'event',
    name: 'Standard Event Package',
    tagline: 'Our most chosen package — ideal for corporate events and celebrations',
    isPopular: true,
    basePrice: 35000,
    priceDisplay: 'LKR 30,000 – 40,000',
    coverage: '4 Hours of coverage',
    photographers: '1 Senior Photographer',
    deliverables: [
      '120 – 180 Fully edited high-resolution photos',
      'Candidate moments, speeches, decor & guest interactions',
      'Web-ready + print-ready files',
      'Private online gallery',
    ],
    highlightsTimeline: 'Highlight preview delivered within 24–48 hours',
    deliveryTimeline: 'Complete gallery delivered within 3 days',
    recommendedFor: 'Corporate galas, award dinners, engagement parties & corporate conferences',
  },
  {
    id: 'evt-premium',
    category: 'event',
    name: 'Premium Event Package',
    tagline: 'All-day festival or conference coverage with same-day highlights',
    basePrice: 55000,
    priceDisplay: 'LKR 50,000 – 65,000+',
    coverage: '6 – 8 Hours full event coverage',
    photographers: '2 Professional Photographers',
    deliverables: [
      '250+ Fully edited photos',
      'Comprehensive step-and-repeat, stage & candid coverage',
      'High-res digital delivery via Dropbox / Drive',
    ],
    extras: [
      'Same-day press/social media highlights (10–15 images)',
    ],
    highlightsTimeline: 'Same-day highlights (within 12 hours)',
    deliveryTimeline: 'Full gallery delivered within 48 hours',
    recommendedFor: 'Large corporate conferences, summits, milestone galas & multi-stage festivals',
  },
];

export const PORTRAIT_PACKAGES: PackageItem[] = [
  {
    id: 'prt-mini',
    category: 'portrait',
    name: 'Mini Session',
    tagline: 'Quick personal portraits & executive headshots',
    basePrice: 15000,
    priceDisplay: 'LKR 13,000 – 17,000',
    coverage: '30-Minute photo session',
    photographers: '1 Studio Photographer',
    deliverables: [
      '10 Fully edited high-resolution photos',
      'Professional skin retouching',
      'Digital download in full resolution',
    ],
    highlightsTimeline: 'Preview within 48 hours',
    deliveryTimeline: 'Delivery in 3 business days',
    recommendedFor: 'LinkedIn headshots, business profiles, and quick personal updates',
  },
  {
    id: 'prt-standard',
    category: 'portrait',
    name: 'Standard Session',
    tagline: 'Perfect for individuals, couples & small family sessions',
    isPopular: true,
    basePrice: 22000,
    priceDisplay: 'LKR 20,000 – 25,000',
    coverage: '1-Hour photo session',
    photographers: '1 Senior Portrait Photographer',
    deliverables: [
      '25 Fully edited high-resolution photos',
      '1 Outfit change included',
      'In-studio or outdoor natural light location',
      'High-res + social media files',
    ],
    highlightsTimeline: 'Highlight preview within 24 hours',
    deliveryTimeline: 'Delivery in 4 business days',
    recommendedFor: 'Graduations, maternity, family memories & personal branding',
  },
  {
    id: 'prt-premium',
    category: 'portrait',
    name: 'Premium Session',
    tagline: 'Extended creative session for commercial, modeling & fashion lookbooks',
    basePrice: 38000,
    priceDisplay: 'LKR 30,000 – 45,000',
    coverage: '2 – 3 Hours extended session',
    photographers: '1 Senior Photographer + Creative Assistant',
    deliverables: [
      '50+ Fully edited photos',
      'Multiple outfit changes & locations',
      'Full magazine-grade retouching',
      'Private online gallery with full licensing',
    ],
    highlightsTimeline: 'Same-day sneak peek',
    deliveryTimeline: 'Delivery within 5 business days',
    recommendedFor: 'Model portfolios, commercial branding, artistic concept shoots',
  },
];

export const OPTIONAL_ADD_ONS: AddOnItem[] = [
  {
    id: 'addon-drone',
    name: 'Drone Aerial Coverage',
    description: 'Licensed aerial 4K photography and sweeping drone videography',
    price: 25000,
    unit: 'per event',
    applicableTo: ['wedding', 'event'],
  },
  {
    id: 'addon-video-highlight',
    name: 'Cinematic Highlight Video Reel',
    description: 'Bespoke 3–5 min cinematic highlight film with licensed music for social sharing',
    price: 35000,
    unit: 'reel',
    applicableTo: ['wedding', 'event', 'portrait'],
  },
  {
    id: 'addon-preshoot-video',
    name: 'Cinematic Pre-Wedding Story Video',
    description: 'Full pre-shoot narrative film shot on location before the wedding day',
    price: 45000,
    unit: 'production',
    applicableTo: ['wedding'],
  },
  {
    id: 'addon-rush-delivery',
    name: 'Express Rush Delivery (12–24 Hours)',
    description: 'Overnight editing shift to deliver your complete final gallery in under 24 hours',
    price: 8000,
    unit: 'service',
    applicableTo: ['wedding', 'event', 'portrait'],
  },
  {
    id: 'addon-album',
    name: 'Luxury Heirloom Album Printing',
    description: 'Handcrafted flush-mount lay-flat photo album with custom debossed leather cover',
    price: 22000,
    unit: 'album (20 pages)',
    applicableTo: ['wedding', 'event', 'portrait'],
  },
  {
    id: 'addon-extra-photos',
    name: 'Extra Edited Photos (Batch of 25)',
    description: '25 additional high-resolution photos with individual color grade and retouching',
    price: 6000,
    unit: '25 photos',
    applicableTo: ['wedding', 'event', 'portrait'],
  },
  {
    id: 'addon-extra-prints',
    name: 'Additional 50 × 6×8 Fine Art Prints',
    description: 'Lustre finish archival paper prints packaged in handcrafted presentation box',
    price: 5000,
    unit: '50 prints',
    applicableTo: ['wedding', 'event'],
  },
];

export const STUDIO_INFO = {
  brandName: 'WEDAURA',
  subtitle: 'by Kevin and Lakmal',
  tagline: 'Capturing your love story — beautifully, completely, forever.',
  phoneDisplay: '071 135 9761 / 077 676 9761',
  phone1: '+94711359761',
  phone2: '+94776769761',
  whatsappNumber: '94711359761',
  email: 'lakmalgamage31@gmail.com',
  website: 'www.wedauralk.com',
  location: 'Colombo & Galle, Sri Lanka (Available Islandwide & Overseas)',
  bookingTerms: [
    '40% advance payment required to confirm booking and secure your date.',
    'Balance due before the wedding or event date (or prior to final gallery release).',
    'Your date is secured exclusively upon receipt of the advance payment.',
    'All packages include professional color grading & retouching; RAW files and unlimited unedited shots are not included.',
    'Quotation is valid for 14 days from the date of issue.',
  ],
};
