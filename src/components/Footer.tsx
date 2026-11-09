import React from 'react';
import { ArrowUp, Instagram, Facebook, MessageSquare, Phone, Mail } from 'lucide-react';
import { STUDIO_INFO } from '../data/packagesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1F1A18] text-white pt-16 pb-12 border-t border-[#38302B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-zinc-800">
          {/* Brand Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <span className="font-serif text-3xl tracking-[0.2em] font-bold text-white block">
              WEDAURA
            </span>
            <p className="text-xs tracking-[0.2em] uppercase text-[#C29B38] font-sans -mt-2">
              by Kevin and Lakmal
            </p>
            <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
              Fine art wedding and event storytellers based in Colombo and Galle, Sri Lanka. Dedicated to timeless romantic imagery, unforced elegance, and generational heirloom albums.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={`https://wa.me/${STUDIO_INFO.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#25D366] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                title="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#E1306C] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-800 hover:bg-[#1877F2] text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
                title="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              Navigation
            </p>
            <ul className="space-y-2 text-xs text-zinc-400">
              <li>
                <a href="#gallery" className="hover:text-white transition-colors">
                  Portfolio Works
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Wedding Packages
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Event & Gala Coverage
                </a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors">
                  Portrait Sessions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact & Inquiries
                </a>
              </li>
              <li>
                <a href="#workflow" className="hover:text-white transition-colors">
                  Booking & Delivery Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Direct (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <p className="text-xs font-semibold tracking-wider uppercase text-zinc-300">
              Direct Contact
            </p>
            <div className="space-y-2 text-xs text-zinc-400">
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#C29B38]" />
                <a href={`tel:${STUDIO_INFO.phone1}`} className="hover:text-white">
                  {STUDIO_INFO.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#C29B38]" />
                <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-white">
                  {STUDIO_INFO.email}
                </a>
              </p>
              <p className="text-[11px] text-zinc-500 pt-1">
                40% advance payment required to confirm booking and secure your date.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {new Date().getFullYear()} Wedaura Photography — by Kevin and Lakmal. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
