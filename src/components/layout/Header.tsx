import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'About Us', href: '#about' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-[#FAF7F2]/95 backdrop-blur-md border-b border-[#EAE3D6] transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14 h-20 sm:h-24 flex items-center justify-between">
        
        {/* Brand Name exactly as in reference: Elite interiors */}
        <a 
          href="#home" 
          onClick={(e) => handleScroll(e, '#home')}
          className="group flex items-center select-none"
        >
          <span className="font-serif text-2xl sm:text-[28px] font-normal tracking-wide text-[#1C1A17] hover:text-[#BA9158] transition-colors">
            Elite interiors
          </span>
        </a>

        {/* Center / Right Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 lg:space-x-12">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-xs sm:text-[13px] font-sans font-medium text-[#4A463F] hover:text-[#BA9158] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}

          {/* "Get In Touch" Button matching reference pill style */}
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              } else {
                handleScroll(e, '#contact');
              }
            }}
            className="inline-flex items-center justify-center px-5 py-2 text-xs font-sans font-medium text-[#2C2822] border border-[#D5CCC0] rounded-full hover:border-[#BA9158] hover:text-[#BA9158] hover:bg-[#F2ECE1]/60 transition-all duration-200 shadow-sm"
          >
            Get In Touch
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <div className="md:hidden flex items-center space-x-3">
          <a
            href="#contact"
            onClick={(e) => {
              if (onOpenContact) {
                e.preventDefault();
                onOpenContact();
              } else {
                handleScroll(e, '#contact');
              }
            }}
            className="inline-flex items-center justify-center px-3.5 py-1.5 text-[11px] font-sans font-medium text-[#2C2822] border border-[#D5CCC0] rounded-full"
          >
            Get In Touch
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#2C2822] hover:text-[#BA9158] focus:outline-none"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-[#FAF7F2] border-t border-[#EAE3D6] px-6 py-6 shadow-xl overflow-hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="font-serif text-lg text-[#2C2822] hover:text-[#BA9158] transition-colors py-1 border-b border-[#EAE3D6]/50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

