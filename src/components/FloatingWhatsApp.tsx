import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { STUDIO_INFO } from '../data/packagesData';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const defaultMessage = encodeURIComponent(
    'Hello Kevin & Lakmal, I am viewing the Wedaura portfolio and would like to inquire about availability for an upcoming date.'
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end flex-col gap-2 group">
      {/* Tooltip greeting balloon */}
      {showTooltip && (
        <div className="bg-[#27221F] text-white text-xs px-3.5 py-2.5 rounded-sm shadow-xl border border-zinc-700 max-w-xs flex items-center justify-between gap-3 animate-fadeIn">
          <div>
            <p className="font-serif font-medium text-amber-200">Chat with Lakmal & Kevin</p>
            <p className="text-[11px] text-zinc-300">Quick inquiries & date availability on WhatsApp</p>
          </div>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-zinc-400 hover:text-white p-0.5 cursor-pointer"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <a
        href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 px-4 py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white rounded-full shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer border-2 border-white/30"
        title="Chat on WhatsApp (+94 71 135 9761)"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
        </span>
        <MessageSquare className="w-5 h-5 fill-current" />
        <span className="text-xs font-bold uppercase tracking-wider hidden sm:inline-block">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};
