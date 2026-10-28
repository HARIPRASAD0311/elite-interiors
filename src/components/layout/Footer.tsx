import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#FAF7F2] border-t border-[#EAE3D6] text-[#716C64] py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-[#EAE3D6]">
          
          {/* Brand Logo matching reference */}
          <div>
            <span className="font-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#1C1A17]">
              Elite interiors
            </span>
            <p className="text-xs sm:text-sm text-[#827D74] font-light mt-1 max-w-sm">
              Bespoke luxury interior design, residential architecture, and artisanal styling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-10 text-xs sm:text-sm font-sans tracking-wide">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')}
              className="text-[#4A463F] hover:text-[#BA9158] transition-colors"
            >
              Home
            </a>
            <a 
              href="#portfolio" 
              onClick={(e) => handleNavClick(e, 'portfolio')}
              className="text-[#4A463F] hover:text-[#BA9158] transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#services" 
              onClick={(e) => handleNavClick(e, 'services')}
              className="text-[#4A463F] hover:text-[#BA9158] transition-colors"
            >
              Services
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="text-[#4A463F] hover:text-[#BA9158] transition-colors"
            >
              About Us
            </a>
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, 'contact')}
              className="text-[#4A463F] hover:text-[#BA9158] transition-colors"
            >
              Contact
            </a>
          </div>

          {/* Back to top */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center space-x-2 text-xs font-sans text-[#BA9158] hover:text-[#1C1A17] transition-colors border border-[#DDD5C7] px-4 py-2 rounded-full"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9E988D] font-sans gap-4">
          <div>&copy; {new Date().getFullYear()} Elite Interiors. All rights reserved.</div>
          <div className="flex items-center space-x-6 text-[11px] tracking-wide">
            <span>Bespoke Interior Architecture</span>
            <span>Crafted with Precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
