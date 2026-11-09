import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Gallery } from './components/Gallery';
import { PackagesSection } from './components/PackagesSection';
import { BookingWorkflow } from './components/BookingWorkflow';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PackageItem } from './data/packagesData';

export default function App() {
  const [selectedPackage, setSelectedPackage] = useState<PackageItem | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToGallery = () => {
    const el = document.getElementById('gallery');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectPackage = (pkg: PackageItem) => {
    setSelectedPackage(pkg);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#27221F] font-sans selection:bg-[#8C6D45]/20 selection:text-[#27221F] antialiased">
      {/* 3-Zone Navigation Header */}
      <Navbar onContactClick={scrollToContact} />

      {/* Main Content Sections */}
      <main>
        {/* Split Hero & Trust Strip */}
        <Hero
          onScrollToContact={scrollToContact}
          onScrollToGallery={scrollToGallery}
        />

        {/* Media-First Bento Gallery with Lightbox */}
        <Gallery />

        {/* Official Packages & Deliverables Comparison */}
        <PackagesSection onSelectPackage={handleSelectPackage} />

        {/* How We Book & Deliver Timeline */}
        <BookingWorkflow />

        {/* Contact & Date Inquiries Form + FAQ */}
        <ContactSection selectedPackage={selectedPackage} />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Floating Instant WhatsApp Button */}
      <FloatingWhatsApp />
    </div>
  );
}
