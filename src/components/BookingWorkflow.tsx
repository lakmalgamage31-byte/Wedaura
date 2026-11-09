import React from 'react';
import { Mail, CalendarCheck, Camera, Sparkles, Send, ShieldCheck, Heart } from 'lucide-react';
import { STUDIO_INFO } from '../data/packagesData';

export const BookingWorkflow: React.FC = () => {
  const steps = [
    {
      step: '01',
      title: 'Enquire & Share Your Vision',
      description:
        'Share your event date, dream venues, and preferred package. Kevin and Lakmal will review your schedule and respond within a few hours with personalized recommendations.',
      icon: Mail,
    },
    {
      step: '02',
      title: 'Lock In Date With 40% Advance',
      description:
        'A 40% advance payment is required to formally lock in your wedding or event date in our calendar. Your date is secured exclusively upon receipt of the deposit.',
      icon: CalendarCheck,
    },
    {
      step: '03',
      title: 'The Shoot Day Experience',
      description:
        'We arrive early and ensure complete coverage — wide atmospheric angles, intimate candid emotions, family rituals, and fine heirloom details with zero intrusive posing.',
      icon: Camera,
    },
    {
      step: '04',
      title: 'Rapid Delivery & Cloud Gallery',
      description:
        'Enjoy 10–20 best-of sneak peek highlights within 24–48 hours to share with friends and family. Your full master gallery follows via private high-speed cloud link.',
      icon: Sparkles,
    },
  ];

  return (
    <section id="workflow" className="py-16 md:py-24 bg-[#FAF8F5] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C6D45] mb-2">
            Seamless Client Journey
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#27221F] tracking-tight mb-4">
            How We Book & Deliver
          </h2>
          <p className="text-base text-[#5E5750]">
            From your initial inquiry through the final handcrafted album delivery, we make every step clear, effortless, and celebratory.
          </p>
        </div>

        {/* 4 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-white border border-[#E8E2D9] p-6 sm:p-7 rounded-sm shadow-xs flex flex-col justify-between hover:border-[#8C6D45] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-serif text-3xl font-bold text-[#8C6D45]/40 tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-[#FAF7F2] border border-[#E8E2D9] flex items-center justify-center text-[#8C6D45]">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-[#27221F] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#5E5750] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E8E2D9]/60 text-[11px] text-[#736B63] flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#8C6D45]" />
                  <span>Wedaura Quality Guarantee</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Delivery Timeline Highlight Banner */}
        <div className="mt-12 p-6 sm:p-8 bg-[#F5EFEB] border border-[#DDD5CB] rounded-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="font-serif text-xl font-bold text-[#27221F]">
              Highlight Preview — Guaranteed Within 48 Hours
            </h4>
            <p className="text-xs sm:text-sm text-[#5E5750]">
              Relive the magic the very next day. We curate 10–20 standout shots perfectly formatted for Instagram and family sharing.
            </p>
          </div>

          <a
            href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
              'Hi Kevin & Lakmal, I want to check available dates for our wedding/event.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-[#27221F] hover:bg-[#8C6D45] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors whitespace-nowrap shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Check Date Availability</span>
          </a>
        </div>
      </div>
    </section>
  );
};
