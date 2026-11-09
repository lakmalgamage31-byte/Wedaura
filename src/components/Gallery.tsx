import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Camera, MapPin, User, Maximize2 } from 'lucide-react';
import { GALLERY_ITEMS, GalleryItem } from '../data/galleryData';

export const Gallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeItem, setActiveItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', label: 'All Works' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'preshoot', label: 'Pre-Shoots' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'event', label: 'Events & Galas' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === selectedCategory);

  // Keyboard navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!activeItem) return;
      if (e.key === 'Escape') {
        setActiveItem(null);
      } else if (e.key === 'ArrowRight') {
        navigateLightbox(1);
      } else if (e.key === 'ArrowLeft') {
        navigateLightbox(-1);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeItem, filteredItems]);

  const navigateLightbox = (direction: number) => {
    if (!activeItem) return;
    const currentIndex = filteredItems.findIndex((item) => item.id === activeItem.id);
    if (currentIndex === -1) return;
    const nextIndex = (currentIndex + direction + filteredItems.length) % filteredItems.length;
    setActiveItem(filteredItems[nextIndex]);
  };

  return (
    <section id="gallery" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C6D45] mb-2">
              Curated Portfolio
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#27221F] tracking-tight">
              Moments Captured in Stillness
            </h2>
          </div>
          <p className="text-sm text-[#736B63] max-w-md">
            Every frame is composed with intentional lighting, warm natural tones, and an unhurried eye for real human connection.
          </p>
        </div>

        {/* Filter Bar (Functional Buttons) */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 text-xs font-medium uppercase tracking-wider rounded-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-[#27221F] text-white shadow-sm'
                  : 'bg-[#F0EAE1] text-[#5E5750] hover:text-[#27221F] hover:bg-[#E5DDD3]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Bento Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, idx) => {
            const isLarge = idx === 0 || idx === 3;
            return (
              <div
                key={item.id}
                onClick={() => setActiveItem(item)}
                className={`group relative overflow-hidden rounded-sm bg-[#ECE6DD] border border-[#DDD5CB] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 ${
                  isLarge ? 'md:col-span-2 aspect-[16/10]' : 'col-span-1 aspect-[4/3]'
                }`}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <div className="flex items-center gap-2 text-xs text-amber-200/90 mb-1">
                    <span>{item.categoryLabel}</span>
                    <span aria-hidden="true">·</span>
                    <span>{item.location}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-zinc-300 line-clamp-1 mb-3">
                    {item.story}
                  </p>
                  <div className="flex items-center justify-between pt-2 border-t border-white/20 text-[11px] text-zinc-300 font-mono">
                    <span>{item.photographer}</span>
                    <span className="flex items-center gap-1 text-white">
                      <Maximize2 className="w-3.5 h-3.5" />
                      View Image
                    </span>
                  </div>
                </div>

                {/* Subtle persistent kicker on mobile */}
                <div className="md:hidden absolute bottom-2 left-2 right-2 bg-black/60 backdrop-blur-xs px-2.5 py-1 text-white text-[11px] flex justify-between rounded-xs">
                  <span className="font-serif">{item.title}</span>
                  <span className="text-amber-200">{item.categoryLabel}</span>
                </div>
              </div>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-16 bg-[#F3EFEA] border border-[#DDD5CB] rounded-sm">
            <p className="text-[#5E5750] text-sm">No photographs found in this collection.</p>
          </div>
        )}
      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeItem && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fadeIn"
          onClick={() => setActiveItem(null)}
        >
          {/* Close button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setActiveItem(null);
            }}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-zinc-300 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors z-50 cursor-pointer"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(-1);
            }}
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 cursor-pointer"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          {/* Next button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox(1);
            }}
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full hover:bg-white/10 transition-colors z-50 cursor-pointer"
            aria-label="Next Image"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Modal Content */}
          <div
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-[#1A1817] border border-zinc-800 rounded-sm overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image Section */}
            <div className="lg:w-7/12 bg-black flex items-center justify-center overflow-hidden">
              <img
                src={activeItem.image}
                alt={activeItem.title}
                className="max-h-[60vh] lg:max-h-[80vh] w-full object-contain"
              />
            </div>

            {/* Metadata & Narrative Pane */}
            <div className="lg:w-5/12 p-6 sm:p-8 flex flex-col justify-between bg-[#1A1817] text-zinc-100 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-xs text-[#C29B38] uppercase tracking-wider font-semibold">
                  <span>{activeItem.categoryLabel}</span>
                  <span aria-hidden="true">·</span>
                  <span>Wedaura Collection</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-white leading-tight">
                  {activeItem.title}
                </h3>

                <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                  {activeItem.story}
                </p>

                <div className="pt-4 border-t border-zinc-800 space-y-2.5 text-xs text-zinc-400">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Location: {activeItem.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>Captured by: {activeItem.photographer}</span>
                  </div>
                  <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-400">
                    <Camera className="w-4 h-4 text-[#C29B38] shrink-0" />
                    <span>{activeItem.cameraSettings}</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-zinc-800 flex items-center justify-between text-xs text-zinc-500">
                <span>Use ← and → keys to navigate</span>
                <button
                  onClick={() => setActiveItem(null)}
                  className="text-zinc-300 hover:text-white underline cursor-pointer"
                >
                  Close Viewer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
