import React from 'react';
import { motion } from 'motion/react';

interface StorySectionProps {
  onLearnMore?: () => void;
}

export const StorySection: React.FC<StorySectionProps> = ({ onLearnMore }) => {
  const handleAction = () => {
    if (onLearnMore) {
      onLearnMore();
    } else {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#FAF7F2] text-[#1C1A17] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        
        {/* Section Header matching Window 4 in reference */}
        <div className="text-center mb-16 sm:mb-20">
          <h2 className="heading-gold text-3xl sm:text-4xl lg:text-5xl font-normal tracking-[0.16em]">
            Our Story
          </h2>
        </div>

        {/* Top Story Block: Team Image Left, Story Content Right */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center mb-24 sm:mb-32"
        >
          {/* Team Photo Left */}
          <div className="rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] h-[360px] sm:h-[450px]">
            <img
              src="/images/story-team-meeting.jpg"
              alt="Elite Interiors Design Team Meeting"
              loading="lazy"
              className="w-full h-full object-cover filter contrast-[1.03]"
            />
          </div>

          {/* Story Narrative Right */}
          <div className="flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-[#1C1A17] font-normal leading-[1.25] mb-6">
              Designing with passion, craftsmanship, and timeless elegance
            </h3>
            
            <p className="text-[#59554E] text-sm sm:text-base font-light leading-relaxed mb-4">
              Designing with passion, craftsmanship, and timeless elegance into every bespoke interior and architectural project. Our team blends artistry and technical precision to sculpt spaces that inspire and endure.
            </p>

            <p className="text-[#59554E] text-sm sm:text-base font-light leading-relaxed mb-8">
              We believe in personalized design and architectural harmony, ensuring that every curated finish, custom piece, and lighting element embodies lasting luxury and authentic comfort.
            </p>

            <div>
              <button
                type="button"
                onClick={handleAction}
                className="btn-gold px-7 py-2.5 rounded-full text-xs font-medium tracking-wider"
              >
                Learn More
              </button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Block: Meet the Team & Our Legacy */}
        <div className="pt-8 border-t border-[#EAE3D6]">
          <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-10">
            Meet the Team
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center"
          >
            {/* Team Portraits Photo Left */}
            <div className="rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] h-[320px] sm:h-[380px]">
              <img
                src="/images/story-team-legacy.jpg"
                alt="Elite Interiors Architecture Studio and Team"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Legacy Text Right */}
            <div className="flex flex-col justify-center">
              <h4 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-4">
                Our Legacy
              </h4>

              <p className="text-[#59554E] text-sm sm:text-base font-light leading-relaxed mb-4">
                We believe your home should be a reflection of who you are, connecting architectural form with everyday warmth.
              </p>

              <p className="text-[#59554E] text-sm sm:text-base font-light leading-relaxed">
                Founded on principles of architectural precision and uncompromising aesthetic distinction, Elite Interiors has earned a reputation for transforming residential sanctuaries through bespoke millwork, tailored acoustics, and curated illumination.
              </p>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
