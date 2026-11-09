import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Clock, Award, MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/packagesData';

interface HeroProps {
  onScrollToContact: () => void;
  onScrollToGallery: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToContact, onScrollToGallery }) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#E8E2D9]">
      {/* Subtle organic background glow */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-[#F3E7D5] rounded-full filter blur-3xl opacity-35 pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Hero Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.2em] uppercase text-[#8C6D45]">
              <span>Wedding & Event Photography</span>
              <span aria-hidden="true">·</span>
              <span>Sri Lanka & Worldwide</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#27221F] leading-[1.12] tracking-tight text-balance">
              Capturing your love story —{' '}
              <span className="italic font-normal text-[#8C6D45]">beautifully</span>, completely, forever.
            </h1>

            <p className="text-base sm:text-lg text-[#5E5750] leading-relaxed max-w-xl">
              Led by <span className="text-[#27221F] font-medium">Kevin and Lakmal</span>, Wedaura documents the raw tenderness, family joy, and rich cultural traditions of your special day with painterly warmth, editorial finesse, and zero artificial posing.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToContact}
                className="inline-flex items-center justify-center gap-3 px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#27221F] hover:bg-[#8C6D45] rounded-sm transition-all duration-200 shadow-md group cursor-pointer"
              >
                <span>Book Date / Inquire</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                  'Hello Kevin & Lakmal, I am interested in inquiring about Wedaura photography dates.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#16A34A] bg-[#F0FDF4] hover:bg-[#DCFCE7] border border-[#BBF7D0] rounded-sm transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-current" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onScrollToGallery}
                className="inline-flex items-center justify-center px-5 py-3.5 text-xs font-medium uppercase tracking-wider text-[#27221F] hover:text-[#8C6D45] hover:bg-[#F0EAE1] border border-[#DDD5CB] rounded-sm transition-colors cursor-pointer"
              >
                Explore Works
              </button>
            </div>

            <div className="pt-4 flex items-center gap-6 text-xs text-[#736B63]">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D45]" />
                <span>Full-Day Unlimited Hours</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#8C6D45]" />
                <span>2 Photographers Standard</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Container */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative hairline matting */}
              <div className="relative p-2.5 sm:p-3 bg-[#FAF8F5] border border-[#DDD5CB] shadow-xl rounded-sm">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden bg-[#ECE6DD]">
                  <img
                    src="/src/assets/images/hero_wedding_couple_1794205990574.jpg"
                    alt="Sri Lankan wedding couple embracing on a colonial heritage veranda during golden sunset"
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

                  {/* Clean unboxed image overlay badge */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs">
                    <span className="font-serif italic text-sm tracking-wide">
                      Galle Fort Heritage Wedding
                    </span>
                    <span className="text-[11px] tracking-wider uppercase text-amber-200/90 font-mono">
                      WEDAURA ARCHIVE
                    </span>
                  </div>
                </div>
              </div>

              {/* Float badge preview */}
              <div className="absolute -bottom-5 -left-4 sm:left-4 bg-white/95 backdrop-blur-sm border border-[#E8E2D9] px-4 py-2.5 shadow-lg rounded-sm hidden sm:flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#F3EFEA] flex items-center justify-center text-[#8C6D45]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#27221F]">Official 2025/2026 Rates</p>
                  <p className="text-[11px] text-[#736B63]">Starting from LKR 99,000</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width Metric & Trust Strip below Hero Split */}
        <div className="mt-16 sm:mt-20 pt-8 border-t border-[#E8E2D9] grid grid-cols-2 lg:grid-cols-4 gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#8C6D45]">
              <Award className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-serif font-semibold text-[#27221F] tabular-nums">
                350+
              </span>
            </div>
            <p className="text-xs text-[#5E5750]">Weddings & Ceremonies Documented</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#8C6D45]">
              <Clock className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-serif font-semibold text-[#27221F] tabular-nums">
                24–48 Hours
              </span>
            </div>
            <p className="text-xs text-[#5E5750]">Fast Highlight Preview Delivery</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#8C6D45]">
              <CheckCircle2 className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-serif font-semibold text-[#27221F] tabular-nums">
                2 Senior Shooters
              </span>
            </div>
            <p className="text-xs text-[#5E5750]">Dual Perspective on Every Wedding</p>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-center sm:justify-start gap-2 text-[#8C6D45]">
              <ShieldCheck className="w-4 h-4" />
              <span className="text-xl sm:text-2xl font-serif font-semibold text-[#27221F] tabular-nums">
                40% Advance
              </span>
            </div>
            <p className="text-xs text-[#5E5750]">Secure Date Reservation Terms</p>
          </div>
        </div>
      </div>
    </section>
  );
};
