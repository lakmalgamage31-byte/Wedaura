import React, { useState, useEffect } from 'react';
import {
  Send,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { STUDIO_INFO, PackageItem } from '../data/packagesData';

interface ContactSectionProps {
  selectedPackage?: PackageItem | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ selectedPackage }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [eventType, setEventType] = useState('Wedding Photography');
  const [budget, setBudget] = useState('Signature Package (LKR 149,000)');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPackage) {
      setEventType(
        selectedPackage.category === 'wedding'
          ? 'Wedding Photography'
          : selectedPackage.category === 'event'
          ? 'Corporate / Private Event'
          : 'Portrait / Model Branding'
      );
      setBudget(`${selectedPackage.name} (${selectedPackage.priceDisplay})`);
      setMessage((prev) =>
        prev
          ? prev
          : `Hi Kevin & Lakmal, I am interested in booking the ${selectedPackage.name} (${selectedPackage.priceDisplay}) for my event.`
      );
    }
  }, [selectedPackage]);

  // Construct structured WhatsApp message
  const buildWhatsAppMessage = () => {
    return `*WEDAURA PHOTOGRAPHY — BOOKING INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
*Client Name:* ${name.trim() || 'Valued Client'}
*Phone / WhatsApp:* ${phone.trim() || 'Not specified'}
*Email:* ${email.trim() || 'Not provided'}
*Event Date:* ${date || 'To be scheduled'}
*Service Requested:* ${eventType}
*Preferred Package / Budget:* ${budget}

*Venue & Vision Details:*
${message.trim() || 'Hi Kevin & Lakmal, I would love to check your availability and discuss our photography coverage.'}
━━━━━━━━━━━━━━━━━━━━━
Sent via Wedaura Website`;
  };

  const handleSendWhatsApp = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const formattedText = encodeURIComponent(buildWhatsAppMessage());
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${formattedText}`, '_blank');
    setSubmitted(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
  };

  // Quick preset messages
  const sendPresetWhatsApp = (serviceName: string) => {
    const text = encodeURIComponent(
      `Hello Kevin & Lakmal, I am interested in inquiring about ${serviceName} with Wedaura. Could you share your upcoming availability?`
    );
    window.open(`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${text}`, '_blank');
  };

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'How do we secure our wedding or event date?',
      a: 'We require a 40% advance payment to officially reserve your date in our calendar. Due to high demand during peak wedding seasons (May–July & December–January), dates are booked on a strictly first-come, first-served basis upon receipt of the deposit.',
    },
    {
      q: 'Do you travel outside Colombo and Galle?',
      a: 'Absolutely! We regularly photograph weddings in Kandy, Nuwara Eliya, Bentota, Negombo, Jaffna, and destination celebrations across the Maldives and Southeast Asia.',
    },
    {
      q: 'How fast do we receive our photographs?',
      a: 'We pride ourselves on our delivery speed: you will receive 10–20 best-of highlights within 24–48 hours after your shoot. Your full master gallery of 200–450+ edited photos is delivered via private cloud link within 28 days (or 14 days with the Luxury package).',
    },
    {
      q: 'Can we customize albums or add drone coverage later?',
      a: 'Yes, optional add-ons like aerial drone videography, extra flush-mount albums, and 24-hour rush delivery can be added up to 2 weeks before your wedding day.',
    },
  ];

  return (
    <section id="contact" className="py-16 md:py-24 bg-[#F5EFEB] border-b border-[#E8E2D9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#8C6D45] mb-2">
            Get In Touch
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#27221F] tracking-tight mb-3">
            Let's Document Your Story
          </h2>
          <p className="text-sm sm:text-base text-[#5E5750]">
            Fill out your inquiry below to send directly to Lakmal & Kevin's WhatsApp (<span className="text-[#27221F] font-semibold">+94 71 135 9761</span>) or submit via online form.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E8E2D9] p-6 sm:p-10 rounded-sm shadow-xs">
            {submitted ? (
              <div className="text-center py-10 space-y-5 animate-fadeIn">
                <div className="w-14 h-14 bg-[#FAF7F2] text-[#8C6D45] rounded-full mx-auto flex items-center justify-center border border-[#E8E2D9]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="font-serif text-2xl font-bold text-[#27221F]">
                    Inquiry Prepared with Thanks!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5E5750] max-w-md mx-auto mt-1">
                    Thank you, <span className="font-semibold text-[#27221F]">{name || 'Valued Client'}</span>. Kevin and Lakmal have received your details for{' '}
                    <span className="font-semibold">{date || 'your upcoming date'}</span>.
                  </p>
                </div>

                {/* WhatsApp Direct Dispatch Card */}
                <div className="bg-[#FAF7F2] border border-[#E5DDD3] p-5 rounded-sm max-w-md mx-auto text-left space-y-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#27221F]">
                    <MessageSquare className="w-4 h-4 text-[#25D366]" />
                    <span>Send this exact inquiry directly to WhatsApp:</span>
                  </div>

                  <div className="p-3 bg-white rounded-xs border border-[#E8E2D9] text-[11px] font-mono text-slate-700 whitespace-pre-line max-h-36 overflow-y-auto">
                    {buildWhatsAppMessage()}
                  </div>

                  <a
                    href={`https://wa.me/${STUDIO_INFO.whatsappNumber}?text=${encodeURIComponent(
                      buildWhatsAppMessage()
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Open in WhatsApp & Send Now</span>
                  </a>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setName('');
                      setPhone('');
                      setMessage('');
                    }}
                    className="text-xs text-[#736B63] hover:text-[#27221F] underline cursor-pointer"
                  >
                    Send Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {selectedPackage && (
                  <div className="p-3 bg-[#FAF7F2] border border-[#E5DDD3] rounded-xs flex items-center justify-between text-xs text-[#8C6D45]">
                    <span className="font-medium">
                      Inquiring for: <strong>{selectedPackage.name}</strong> ({selectedPackage.priceDisplay})
                    </span>
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Nimasha & Ravindu"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Phone / WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 071 135 9761"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Event Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Photography Service
                    </label>
                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    >
                      <option value="Wedding Photography">Wedding Ceremony & Reception</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Corporate / Private Event">Corporate / Private Event</option>
                      <option value="Portrait / Model Branding">Portrait / Model Branding</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#4D453E] mb-1">
                      Package / Budget Preference
                    </label>
                    <select
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full px-3 py-2.5 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                    >
                      <option value="Essential Package (LKR 129,000)">Essential Package (LKR 129,000)</option>
                      <option value="Signature Package (LKR 149,000)">Signature Package (LKR 149,000 ★)</option>
                      <option value="Luxury Package (LKR 199,000+)">Luxury Package (LKR 199,000+)</option>
                      <option value="Basic Event Package (LKR 20,000)">Basic Event (LKR 20,000)</option>
                      <option value="Standard Event Package (LKR 35,000)">Standard Event (LKR 35,000)</option>
                      <option value="Premium Event Package (LKR 55,000)">Premium Event (LKR 55,000)</option>
                      <option value="Mini Portrait Session (LKR 15,000)">Mini Portrait Session (LKR 15,000)</option>
                      <option value="Standard Portrait Session (LKR 22,000)">Standard Portrait (LKR 22,000)</option>
                      <option value="Premium Portrait Session (LKR 38,000)">Premium Portrait (LKR 38,000)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#4D453E] mb-1">
                    Your Vision & Venue Details
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us about your wedding venue, traditional Poruwa/church timings, estimated guest count, or any specific moments you cherish..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full p-3 text-xs border border-[#DDD5CB] rounded-xs focus:outline-none focus:border-[#8C6D45] bg-[#FAF8F5]"
                  />
                </div>

                {/* Dual Action Buttons: Send via WhatsApp & Submit */}
                <div className="pt-2 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => handleSendWhatsApp()}
                    className="w-full py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-md cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 fill-current" />
                    <span>Send Message to WhatsApp (+94 71 135 9761)</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-[#27221F] hover:bg-[#8C6D45] text-white text-xs font-semibold uppercase tracking-wider rounded-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Submit Inquiry via Website</span>
                  </button>
                  <p className="text-[11px] text-[#736B63] text-center">
                    Direct communication with Kevin and Lakmal. We reply within a few hours.
                  </p>
                </div>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact & FAQ (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Direct Studio Card */}
            <div className="bg-[#FAF8F5] border border-[#DDD5CB] p-6 sm:p-8 rounded-sm shadow-xs space-y-5">
              <div>
                <span className="text-[10px] tracking-[0.2em] uppercase text-[#8C6D45] font-bold block">
                  Direct Studio Line
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#27221F]">
                  Wedaura Photography
                </h3>
                <p className="text-xs text-[#736B63] font-serif italic">
                  by Kevin and Lakmal
                </p>
              </div>

              <div className="space-y-3 text-xs text-[#4D453E] border-t border-[#E8E2D9] pt-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-[#8C6D45] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#27221F]">Telephone & WhatsApp</p>
                    <a href={`tel:${STUDIO_INFO.phone1}`} className="hover:text-[#8C6D45] block font-mono">
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-[#8C6D45] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#27221F]">Direct Email</p>
                    <a href={`mailto:${STUDIO_INFO.email}`} className="hover:text-[#8C6D45] block">
                      {STUDIO_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#8C6D45] shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-[#27221F]">Base Locations</p>
                    <p className="text-[#5E5750]">{STUDIO_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Quick WhatsApp Topics Buttons */}
              <div className="pt-3 border-t border-[#E8E2D9] space-y-2">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#736B63]">
                  Quick Message Templates:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                  <button
                    onClick={() => sendPresetWhatsApp('Wedding Photography')}
                    className="p-2 text-left bg-white border border-[#DDD5CB] hover:border-[#25D366] hover:bg-[#F0FDF4] rounded-xs transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-[#27221F] text-[11px] font-medium">Wedding Dates</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => sendPresetWhatsApp('Pre-Wedding Shoot')}
                    className="p-2 text-left bg-white border border-[#DDD5CB] hover:border-[#25D366] hover:bg-[#F0FDF4] rounded-xs transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-[#27221F] text-[11px] font-medium">Pre-Shoot Dates</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => sendPresetWhatsApp('Corporate or Private Event Coverage')}
                    className="p-2 text-left bg-white border border-[#DDD5CB] hover:border-[#25D366] hover:bg-[#F0FDF4] rounded-xs transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-[#27221F] text-[11px] font-medium">Event Photography</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  </button>
                  <button
                    onClick={() => sendPresetWhatsApp('Studio / Portrait Session')}
                    className="p-2 text-left bg-white border border-[#DDD5CB] hover:border-[#25D366] hover:bg-[#F0FDF4] rounded-xs transition-colors flex items-center justify-between group cursor-pointer"
                  >
                    <span className="text-[#27221F] text-[11px] font-medium">Portrait Session</span>
                    <MessageSquare className="w-3.5 h-3.5 text-[#25D366] group-hover:scale-110 transition-transform" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick FAQ Accordion */}
            <div className="bg-white border border-[#E8E2D9] p-6 rounded-sm shadow-xs space-y-3">
              <h4 className="font-serif text-lg font-bold text-[#27221F] mb-3 flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#8C6D45]" />
                <span>Frequently Asked Questions</span>
              </h4>

              <div className="space-y-2">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="border border-[#E8E2D9] rounded-xs overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full p-3 text-left text-xs font-semibold text-[#27221F] hover:bg-[#FAF8F5] flex items-center justify-between gap-2 transition-colors cursor-pointer"
                      >
                        <span>{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-3.5 h-3.5 text-[#8C6D45] shrink-0" />
                        ) : (
                          <ChevronDown className="w-3.5 h-3.5 text-[#736B63] shrink-0" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="p-3 text-xs text-[#5E5750] bg-[#FAF8F5] border-t border-[#E8E2D9] leading-relaxed">
                          {faq.a}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
