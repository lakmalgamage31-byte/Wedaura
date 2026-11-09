export interface GalleryItem {
  id: string;
  title: string;
  category: 'all' | 'wedding' | 'preshoot' | 'event' | 'portrait';
  categoryLabel: string;
  image: string;
  location: string;
  cameraSettings: string;
  photographer: string;
  aspect: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  story: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gallery-1',
    title: 'Galle Fort Colonial Romance',
    category: 'wedding',
    categoryLabel: 'Wedding Ceremony',
    image: '/src/assets/images/hero_wedding_couple_1794205990574.jpg',
    location: 'Amangalla, Galle Fort',
    cameraSettings: 'Sony A7IV · 50mm f/1.4 · 1/800s · ISO 100',
    photographer: 'Kevin & Lakmal',
    aspect: 'landscape',
    featured: true,
    story: 'Golden sunlight filtering through historic colonial colonnades as Dinuka and Shanika share their first quiet moments as husband and wife.',
  },
  {
    id: 'gallery-2',
    title: 'Warm Candlelit Barn Reception',
    category: 'wedding',
    categoryLabel: 'Wedding Reception',
    image: '/src/assets/images/gallery_wedding_candid_1794205990820.jpg',
    location: 'The Barnhouse Studio, Panadura',
    cameraSettings: 'Sony A7SIII · 35mm f/1.4 GM · 1/250s · ISO 800',
    photographer: 'Lakmal Gamage',
    aspect: 'landscape',
    featured: false,
    story: 'Unstaged, raw joy during the family dinner speeches. Soft warm bokeh and candid laughter captured from across the banquet table.',
  },
  {
    id: 'gallery-3',
    title: 'Hill Country Tea Estate Sunset',
    category: 'preshoot',
    categoryLabel: 'Pre-Wedding Shoot',
    image: '/src/assets/images/gallery_preshoot_sunset_1794205991536.jpg',
    location: 'Hatton Tea Plantations, Nuwara Eliya',
    cameraSettings: 'Sony A1 · 85mm f/1.4 GM · 1/1200s · ISO 125',
    photographer: 'Kevin Perera',
    aspect: 'landscape',
    featured: true,
    story: 'Gentle mountain wind catching the bride\'s dress above the misty rolling tea valleys right as the amber sun touched the horizon.',
  },
  {
    id: 'gallery-4',
    title: 'Traditional Kandyan Bridal Elegance',
    category: 'portrait',
    categoryLabel: 'Bridal Portrait',
    image: '/src/assets/images/gallery_portrait_editorial_1794205992338.jpg',
    location: 'Earl\'s Regency, Kandy',
    cameraSettings: 'Sony A7R V · 90mm Macro f/2.8 · 1/400s · ISO 200',
    photographer: 'Lakmal Gamage',
    aspect: 'portrait',
    featured: true,
    story: 'Detailed close-up capturing handcrafted heirloom jewellery, delicate jasmine garland, and tranquil bridal anticipation before the Poruwa ceremony.',
  },
  {
    id: 'gallery-5',
    title: 'Champagne Gala & Toast Celebration',
    category: 'event',
    categoryLabel: 'Event & Gala',
    image: '/src/assets/images/gallery_event_celebration_1794205991926.jpg',
    location: 'Shangri-La Ballroom, Colombo',
    cameraSettings: 'Sony A7IV · 24-70mm f/2.8 GM · 1/320s · ISO 1600',
    photographer: 'Kevin & Lakmal',
    aspect: 'landscape',
    featured: false,
    story: 'Electric atmosphere as friends and colleagues raise their glasses in unanimous celebration under thousands of ambient canopy lights.',
  },
];
