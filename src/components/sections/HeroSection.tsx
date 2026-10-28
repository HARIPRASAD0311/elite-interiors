import React, { useRef, useEffect } from 'react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onExplore?: () => void;
  onConsultation?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExplore, onConsultation }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Ensure autoplay on mount with muted attribute
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.warn('Hero video autoplay error:', error);
        });
      }
    }
  }, []);

  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full bg-[#1C1A17] overflow-hidden">
      {/* 
        HERO VIDEO CONTAINER
        Strict requirements:
        - Autoplay, loop, muted, playsInline
        - object-fit: cover filling the hero container without distortion
        - NO native controls, NO custom play/pause buttons, NO timeline, NO volume controls
      */}
      <div className="relative w-full h-[75vh] sm:h-[82vh] lg:h-[88vh] overflow-hidden bg-black flex items-center justify-center">
        <video
          ref={videoRef}
          src="/videos/hero-interior.mp4"
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
        />

        {/* Ambient Dark Scrim for Typography Readability matching reference */}
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        {/* Hero Overlay Content matching Reference Window 1 */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-2xl text-left"
          >
            {/* Main Hero Heading */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-white font-normal uppercase tracking-[0.14em] leading-[1.15] mb-5 drop-shadow-md">
              Creating Extraordinary Spaces
            </h1>

            {/* Subtitle */}
            <p className="text-white/90 text-sm sm:text-base lg:text-lg font-light tracking-wide max-w-xl mb-8 leading-relaxed drop-shadow">
              Bespoke luxury interior design tailored to your lifestyle
            </p>

            {/* Action Buttons matching reference */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                onClick={() => {
                  if (onExplore) onExplore();
                  else handleScrollTo('portfolio');
                }}
                className="btn-gold px-7 py-3 rounded-full text-xs font-medium tracking-wider"
              >
                Explore Our Portfolio
              </button>

              <button
                type="button"
                onClick={() => {
                  if (onConsultation) onConsultation();
                  else handleScrollTo('contact');
                }}
                className="px-7 py-3 rounded-full text-xs font-medium tracking-wider text-white border border-white/60 bg-black/30 backdrop-blur-sm hover:bg-white hover:text-[#1C1A17] transition-all duration-200"
              >
                Book a Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* 
        OUR PHILOSOPHY SECTION (Directly following Hero in Window 1 of reference)
      */}
      <div className="bg-[#FAF7F2] py-20 sm:py-28 px-6 sm:px-10 lg:px-14 border-b border-[#EAE3D6]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Philosophy Content Left */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7"
            >
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1C1A17] font-normal tracking-tight mb-6">
                Our Philosophy
              </h2>
              <p className="text-[#59554E] text-base sm:text-lg font-light leading-relaxed mb-8 max-w-xl">
                We believe your home should be a reflection of who you are, we appreciate elegance and tastefully placed details. We appreciate elegance and tastefully placed team to create the luxury concept.
              </p>
              <button
                type="button"
                onClick={() => handleScrollTo('portfolio')}
                className="btn-gold px-7 py-3 rounded-full text-xs font-medium tracking-wider"
              >
                View All Projects
              </button>
            </motion.div>

            {/* Philosophy Supplied Image Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="lg:col-span-5"
            >
              <div className="rounded-2xl overflow-hidden shadow-sm bg-[#EFE9DF] border border-[#E5DFD4] aspect-[4/5] max-h-[460px] w-full">
                <img
                  src="/images/philosophy.jpg"
                  alt="Elite Interiors Design Philosophy"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

