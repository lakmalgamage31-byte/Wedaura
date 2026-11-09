import React, { useState } from 'react';
import { Check, Star, Clock, Users, ArrowRight, ShieldCheck, HeartHandshake, MessageSquare } from 'lucide-react';
import {
  WEDDING_PACKAGES,
  EVENT_PACKAGES,
  PORTRAIT_PACKAGES,
  PackageItem,
  STUDIO_INFO,
} from '../data/packagesData';

interface PackagesSectionProps {
  onSelectPackage: (pkg: PackageItem) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({
  onSelectPackage,
}) => {
  const [activeCategory, setActiveCategory] = useState<'wedding' | 'event' | 'portrait'>('wedding');

  const packagesMap = {
    wedding: WEDDING_PACKAGES,
    event: EVENT_PACKAGES,
    portrait: PORTRAIT_PACKAGES,
  };

  const currentPackages = packagesMap[activeCategory];

  return (
    <section id="packages" className="py-16 md:py-24 bg-[#F5EFEB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C6D45] mb-2">
            Transparent Pricing & Inclusions
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#27221F] tracking-tight mb-4">
            Investment & Services Guide
          </h2>
          <p className="text-base text-[#5E5750]">
            Every package includes comprehensive professional retouching, high-resolution and web-ready digital files, private cloud gallery, and our unwavering commitment to quality.
          </p>

          {/* Category Switcher Tabs */}
          <div className="inline-flex p-1.5 bg-[#EAE2D8] rounded-sm mt-8 border border-[#DDD5CB]">
            <button
              onClick={() => setActiveCategory('wedding')}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-150 cursor-pointer ${
                activeCategory === 'wedding'
                  ? 'bg-[#27221F] text-white shadow-sm'
                  : 'text-[#5E5750] hover:text-[#27221F]'
              }`}
            >
              Wedding Packages
            </button>
            <button
              onClick={() => setActiveCategory('event')}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-150 cursor-pointer ${
                activeCategory === 'event'
                  ? 'bg-[#27221F] text-white shadow-sm'
                  : 'text-[#5E5750] hover:text-[#27221F]'
              }`}
            >
              Event Photography
            </button>
            <button
              onClick={() => setActiveCategory('portrait')}
              className={`px-6 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-xs transition-all duration-150 cursor-pointer ${
                activeCategory === 'portrait'
                  ? 'bg-[#27221F] text-white shadow-sm'
                  : 'text-[#5E5750] hover:text-[#27221F]'
              }`}
            >
              Portraits & Studio
            </button>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-16">
          {currentPackages.map((pkg) => {
            const isSignature = pkg.isPopular;
            return (
              <div
                key={pkg.id}
                className={`relative flex flex-col justify-between rounded-sm transition-all duration-200 ${
                  isSignature
                    ? 'bg-white border-2 border-[#8C6D45] shadow-xl md:-translate-y-2'
                    : 'bg-[#FAF8F5] border border-[#DDD5CB] shadow-sm hover:shadow-md'
                }`}
              >
                {/* Popular Flag */}
                {isSignature && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#8C6D45] text-white text-[11px] font-semibold uppercase tracking-widest px-4 py-1 rounded-xs flex items-center gap-1.5 shadow-sm">
                    <Star className="w-3 h-3 fill-current" />
                    <span>Most Popular Choice</span>
                  </div>
                )}

                <div className="p-6 sm:p-8">
                  {/* Package Title & Price */}
                  <div className="border-b border-[#E8E2D9] pb-6 mb-6">
                    <h3 className="font-serif text-2xl text-[#27221F] font-semibold mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-xs text-[#736B63] min-h-[32px] line-clamp-2 mb-4">
                      {pkg.tagline}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="font-serif text-3xl sm:text-4xl font-bold text-[#27221F] tabular-nums">
                        {pkg.priceDisplay}
                      </span>
                    </div>
                  </div>

                  {/* Coverage Specs */}
                  <div className="space-y-2.5 text-xs text-[#4D453E] mb-6 pb-6 border-b border-[#E8E2D9]">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-[#8C6D45] shrink-0" />
                      <span className="font-medium">{pkg.coverage}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-[#8C6D45] shrink-0" />
                      <span>{pkg.photographers}</span>
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-6">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-[#736B63]">
                      What's Included:
                    </p>
                    <ul className="space-y-2 text-xs text-[#4D453E]">
                      {pkg.deliverables.map((item, index) => (
                        <li key={index} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-[#8C6D45] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Extras / Timelines if applicable */}
                  {pkg.extras && pkg.extras.length > 0 && (
                    <div className="pt-4 border-t border-[#E8E2D9] space-y-2 mb-6">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-[#8C6D45]">
                        Exclusive Perks:
                      </p>
                      <ul className="space-y-1.5 text-xs text-[#5E5750]">
                        {pkg.extras.map((extra, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="text-[#8C6D45] font-bold">✦</span>
                            <span>{extra}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Delivery Speed */}
                  <div className="text-[11px] text-[#736B63] bg-[#F5EFEB] p-3 rounded-xs space-y-1 mb-6">
                    <p>
                      <strong className="text-[#27221F]">Highlights:</strong>{' '}
                      {pkg.highlightsTimeline}
                    </p>
                    <p>
                      <strong className="text-[#27221F]">Full Gallery:</strong>{' '}
                      {pkg.deliveryTimeline}
                    </p>
                  </div>
                </div>

                {/* Card Action */}
                <div className="p-6 sm:p-8 pt-0 space-y-2">
                  <button
                    onClick={() => onSelectPackage(pkg)}
                    className={`w-full py-3.5 px-4 text-xs font-semibold uppercase tracking-wider rounded-sm flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                      isSignature
                        ? 'bg-[#8C6D45] hover:bg-[#725734] text-white shadow-sm'
                        : 'bg-[#27221F] hover:bg-[#8C6D45] text-white'
                    }`}
                  >
                    <span>Inquire for This Package</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                      `Hello Kevin & Lakmal, I am interested in checking availability for the *${pkg.name}* (${pkg.priceDisplay}, ${pkg.category.toUpperCase()}).\nCoverage: ${pkg.coverage}.\nCould you please let me know your availability for our date?`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-[#F0FDF4] hover:bg-[#DCFCE7] text-[#16A34A] border border-[#BBF7D0] text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] fill-current" />
                    <span>Message on WhatsApp</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Clients Choose Us Banner (Directly from official guide) */}
        <div className="bg-[#FAF8F5] border border-[#DDD5CB] rounded-sm p-8 sm:p-10 shadow-sm">
          <div className="max-w-2xl mx-auto text-center mb-8">
            <h4 className="font-serif text-2xl text-[#27221F] mb-2">
              Why Couples & Organizers Choose Wedaura
            </h4>
            <p className="text-xs sm:text-sm text-[#736B63]">
              Every client booking is backed by professional integrity, reliable timelines, and transparent terms.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-1.5 p-4 bg-[#F5EFEB] rounded-xs border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-[#27221F]">Fast Delivery</p>
              <p className="text-xs text-[#5E5750]">
                Sneak-peek highlights within 24–48 hours before competitors even begin editing.
              </p>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F5EFEB] rounded-xs border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-[#27221F]">Consistent Quality</p>
              <p className="text-xs text-[#5E5750]">
                Every single delivered photo undergoes bespoke color grading & retouching.
              </p>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F5EFEB] rounded-xs border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-[#27221F]">Transparent Pricing</p>
              <p className="text-xs text-[#5E5750]">
                No hidden equipment fees or travel surprises. You always know your exact investment.
              </p>
            </div>

            <div className="space-y-1.5 p-4 bg-[#F5EFEB] rounded-xs border border-[#E8E2D9]">
              <p className="text-sm font-semibold text-[#27221F]">Easy Communication</p>
              <p className="text-xs text-[#5E5750]">
                Responsive via phone, email, and instant WhatsApp directly with Kevin and Lakmal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
