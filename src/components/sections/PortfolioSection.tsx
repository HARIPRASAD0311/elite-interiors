import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface PortfolioItem {
  id: string;
  title: string;
  category: 'Residential' | 'Commercial' | 'Bespoke';
  image: string;
  aspect: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 'p1',
    title: 'The Grand Penthouse',
    category: 'Residential',
    image: '/images/portfolio-penthouse-1.jpg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p2',
    title: 'Contemporary Haven',
    category: 'Bespoke',
    image: '/images/portfolio-haven.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p3',
    title: 'Luxury Bedroom',
    category: 'Residential',
    image: '/images/portfolio-bedroom-1.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p4',
    title: 'The Grand Penthouse',
    category: 'Residential',
    image: '/images/portfolio-dining.jpg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p5',
    title: 'Luxury Bedroom',
    category: 'Residential',
    image: '/images/portfolio-bedroom-2.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p6',
    title: 'The Grand Penthouse',
    category: 'Commercial',
    image: '/images/portfolio-penthouse-2.jpg',
    aspect: 'aspect-[4/5]',
  },
  {
    id: 'p7',
    title: 'Contemporary Haven',
    category: 'Commercial',
    image: '/images/portfolio-living.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p8',
    title: 'Luxury Bedroom',
    category: 'Bespoke',
    image: '/images/portfolio-lounge.jpg',
    aspect: 'aspect-[4/3]',
  },
  {
    id: 'p9',
    title: 'The Grand Penthouse',
    category: 'Residential',
    image: '/images/gallery-decor.jpg',
    aspect: 'aspect-[4/5]',
  },
];

const categories = ['All', 'Residential', 'Commercial', 'Bespoke'] as const;

export const PortfolioSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredItems = selectedCategory === 'All'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === selectedCategory);

  return (
    <section id="portfolio" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1C1A17] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Heading matching Window 2 in reference */}
        <div className="text-center mb-12">
          <h2 className="heading-gold text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.16em] mb-6">
            Our Portfolio
          </h2>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans tracking-wider uppercase">
            {categories.map((category) => {
              const isActive = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setSelectedCategory(category)}
                  className={`transition-colors duration-200 pb-1 relative ${
                    isActive
                      ? 'text-[#1C1A17] font-semibold'
                      : 'text-[#8A847A] hover:text-[#1C1A17] font-normal'
                  }`}
                >
                  {category}
                  {isActive && (
                    <motion.span
                      layoutId="portfolio-tab-underline"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#BA9158]"
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Gallery Grid matching reference image cards */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7"
        >
          <AnimatePresence>
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E4DDD0]"
              >
                <div className={`w-full ${item.aspect} overflow-hidden relative`}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Dark subtle gradient at bottom for pill visibility */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                  {/* Title pill at bottom-left exactly as shown in reference */}
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="inline-block bg-black/65 backdrop-blur-md text-white/95 text-xs font-serif tracking-wider px-3.5 py-1.5 rounded-md border border-white/10 shadow-sm">
                      {item.title}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
