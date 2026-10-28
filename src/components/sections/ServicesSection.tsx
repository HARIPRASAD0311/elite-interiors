import React from 'react';
import { motion } from 'motion/react';

interface ServicesSectionProps {
  onLearnMore?: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onLearnMore }) => {
  const handleAction = (serviceName: string) => {
    if (onLearnMore) {
      onLearnMore(serviceName);
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-24 sm:py-32 bg-[#F6F2EB] text-[#1C1A17] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header matching Window 3 in reference */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-gold text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.16em] mb-3">
            Our Services
          </h2>
          <p className="text-[#787268] text-sm sm:text-base font-serif italic tracking-wide">
            A showcase of luxury residential design services
          </p>
        </div>

        {/* 3 Alternating Rows matching reference layout */}
        <div className="space-y-12 sm:space-y-16">
          
          {/* Service 1: Image Left, Card Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-transparent"
          >
            {/* Image Left */}
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] h-[320px] sm:h-[400px]">
              <img
                src="/images/service-space-planning.jpg"
                alt="Interior Design & Space Planning"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* White Card Right */}
            <div className="bg-[#FFFFFF] border border-[#E8E1D5] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-center h-full">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-4">
                Interior Design &amp; Space Planning
              </h3>
              <p className="text-[#635E55] text-sm sm:text-base font-light leading-relaxed mb-8">
                We believe your home should be a reflection of who you are. We appreciate elegance and tastefully placed details to fully realize the luxury concept.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleAction('Interior Design & Space Planning')}
                  className="btn-gold px-7 py-2.5 rounded-full text-xs font-medium tracking-wider"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

          {/* Service 2: Card Left, Image Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-transparent"
          >
            {/* White Card Left */}
            <div className="order-2 lg:order-1 bg-[#FFFFFF] border border-[#E8E1D5] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-center h-full">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-4">
                Bespoke Furniture &amp; Styling
              </h3>
              <p className="text-[#635E55] text-sm sm:text-base font-light leading-relaxed mb-8 italic font-serif">
                &ldquo;Luxury living elevates the senses through exquisite craftsmanship, bespoke styling, and curation.&rdquo;
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleAction('Bespoke Furniture & Styling')}
                  className="btn-gold px-7 py-2.5 rounded-full text-xs font-medium tracking-wider"
                >
                  Learn More
                </button>
              </div>
            </div>

            {/* Image Right */}
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] h-[320px] sm:h-[400px]">
              <img
                src="/images/service-bespoke-furniture.jpg"
                alt="Bespoke Furniture & Styling"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Service 3: Image Left, Card Right */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-transparent"
          >
            {/* Image Left */}
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] h-[320px] sm:h-[400px]">
              <img
                src="/images/service-full-renovation.jpg"
                alt="Full-Scale Renovation"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* White Card Right */}
            <div className="bg-[#FFFFFF] border border-[#E8E1D5] rounded-2xl p-8 sm:p-12 lg:p-14 shadow-sm flex flex-col justify-center h-full">
              <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-4">
                Full-Scale Renovation
              </h3>
              <p className="text-[#635E55] text-sm sm:text-base font-light leading-relaxed mb-8">
                The holistic renovation of luxury residences, harmonizing architectural space, bespoke millwork, and refined material palettes.
              </p>
              <div>
                <button
                  type="button"
                  onClick={() => handleAction('Full-Scale Renovation')}
                  className="btn-gold px-7 py-2.5 rounded-full text-xs font-medium tracking-wider"
                >
                  Learn More
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
