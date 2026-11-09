import React, { useState } from 'react';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { STUDIO_INFO } from '../data/packagesData';

interface NavbarProps {
  onContactClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#E8E2D9] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          {/* Zone 1: Brand Wordmark */}
          <a href="#" className="flex flex-col group whitespace-nowrap shrink-0">
            <span className="font-serif text-2xl tracking-[0.2em] font-semibold text-[#27221F] group-hover:text-[#B98D58] transition-colors">
              WEDAURA
            </span>
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#736B63] -mt-1 font-sans">
              by Kevin & Lakmal
            </span>
          </a>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#5E5750]">
            <a
              href="#gallery"
              className="hover:text-[#27221F] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Portfolio
            </a>
            <a
              href="#packages"
              className="hover:text-[#27221F] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Packages & Pricing
            </a>
            <a
              href="#workflow"
              className="hover:text-[#27221F] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              How We Book
            </a>
            <a
              href="#contact"
              className="hover:text-[#27221F] transition-colors whitespace-nowrap shrink-0 py-1"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary Action CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                'Hello Kevin & Lakmal, I am interested in Wedaura photography packages for an upcoming date.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#5E5750] hover:text-[#27221F] hover:bg-[#F0EAE1] rounded-full transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366]" />
            </a>
            <button
              onClick={onContactClick}
              className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#27221F] hover:bg-[#B98D58] rounded-sm transition-all duration-200 shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Book a Date
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#27221F] hover:bg-[#F0EAE1] rounded-md transition-colors"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#E8E2D9] bg-[#FAF8F5] px-6 py-5 space-y-4 shadow-lg animate-fadeIn">
          <nav className="flex flex-col space-y-3 text-base font-medium text-[#4D453E]">
            <a
              href="#gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#27221F]"
            >
              Portfolio Gallery
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#27221F]"
            >
              Packages & Pricing
            </a>
            <a
              href="#workflow"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#27221F]"
            >
              How We Book & Deliver
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-[#27221F]"
            >
              Contact Us
            </a>
          </nav>
          <div className="pt-3 border-t border-[#E8E2D9] flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-3 text-center text-xs font-semibold uppercase tracking-wider text-white bg-[#27221F] hover:bg-[#B98D58] rounded-sm transition-colors"
            >
              Book a Date
            </button>
            <a
              href={`tel:${STUDIO_INFO.phone1}`}
              className="flex items-center justify-center gap-2 py-2.5 text-xs text-[#5E5750] border border-[#DDD5CB] rounded-sm hover:bg-[#F0EAE1]"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call: {STUDIO_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
