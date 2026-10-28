import React, { useState } from 'react';
import { Header } from './components/layout/Header';
import { HeroSection } from './components/sections/HeroSection';
import { PortfolioSection } from './components/sections/PortfolioSection';
import { ServicesSection } from './components/sections/ServicesSection';
import { StorySection } from './components/sections/StorySection';
import { ContactSection, ContactModal } from './components/sections/ContactSection';
import { Footer } from './components/layout/Footer';

export const App: React.FC = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Interior Design & Space Planning');

  const handleOpenContactWithService = (serviceName?: string) => {
    if (serviceName) setSelectedService(serviceName);
    setIsContactOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF7F2] text-[#1C1A17] flex flex-col font-sans selection:bg-[#BA9158]/20 selection:text-[#1C1A17]">
      {/* 
        1. HEADER AND NAVIGATION
        - Brand: Elite interiors
        - Links: Home, Portfolio, Services, About Us
        - Button: Get In Touch
      */}
      <Header onOpenContact={() => setIsContactOpen(true)} />

      <main className="flex-1">
        {/* 
          2. HOMEPAGE HERO (WINDOW 1)
          - Video replaces the photograph
          - Autoplay, loop, muted, playsInline, object-fit: cover
          - No native or custom video controls
          - Overlay: "CREATING EXTRAORDINARY SPACES", buttons
          - Followed by "Our Philosophy" section
        */}
        <HeroSection
          onExplore={() => {
            document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
          }}
          onConsultation={() => setIsContactOpen(true)}
        />

        {/* 
          3. OUR PORTFOLIO SECTION (WINDOW 2)
          - Golden title "OUR PORTFOLIO"
          - Filter tabs: All, Residential, Commercial, Bespoke
          - Masonry / Mosaic grid with "The Grand Penthouse", "Contemporary Haven", "Luxury Bedroom"
          - Bottom-left title pills on cards
        */}
        <PortfolioSection />

        {/* 
          4. OUR SERVICES SECTION (WINDOW 3)
          - Golden title "OUR SERVICES"
          - Subtitle "A showcase of luxury residential design services"
          - 3 alternating cards:
            1. Interior Design & Space Planning
            2. Bespoke Furniture & Styling
            3. Full-Scale Renovation
          - Gold "LEARN MORE" buttons
        */}
        <ServicesSection onLearnMore={handleOpenContactWithService} />

        {/* 
          5. OUR STORY & TEAM SECTION (WINDOW 4)
          - Golden title "OUR STORY"
          - Two-column narrative with team meeting photography
          - "Meet the Team" and "Our Legacy"
        */}
        <StorySection onLearnMore={() => setIsContactOpen(true)} />

        {/* 
          6. CONTACT INQUIRY SECTION & INTERACTIVE MODAL
        */}
        <ContactSection onOpenModal={() => setIsContactOpen(true)} />
      </main>

      {/* 
        7. FOOTER
      */}
      <Footer />

      {/* Interactive Contact & Scoping Dialog */}
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
        defaultService={selectedService}
      />
    </div>
  );
};

export default App;

