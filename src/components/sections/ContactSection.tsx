import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Mail, Phone, MapPin } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService = 'Interior Design & Space Planning',
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: defaultService,
      message: '',
    });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative w-full max-w-xl bg-[#FAF7F2] border border-[#EAE3D6] rounded-2xl p-6 sm:p-10 shadow-2xl z-10 overflow-hidden"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 p-2 text-[#787268] hover:text-[#1C1A17] transition-colors rounded-full hover:bg-[#EFE9DF]"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="text-center py-10">
                <div className="w-14 h-14 rounded-full bg-[#BA9158]/15 border border-[#BA9158]/40 flex items-center justify-center text-[#BA9158] mx-auto mb-4">
                  <Check className="w-7 h-7" />
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal mb-2">
                  Thank You
                </h3>
                <p className="text-sm text-[#59554E] max-w-md mx-auto mb-6">
                  We have received your project inquiry. A design director from Elite Interiors will contact you at {formData.email} shortly.
                </p>
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-gold px-8 py-2.5 rounded-full text-xs font-medium tracking-wider"
                >
                  Close
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <span className="heading-gold text-xs font-mono uppercase tracking-[0.2em] block mb-1">
                    Get In Touch
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl text-[#1C1A17] font-normal">
                    Initiate Your Consultation
                  </h3>
                  <p className="text-xs sm:text-sm text-[#787268] mt-1 font-light">
                    Share your residence vision with our design team.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div>
                    <label className="block text-xs font-sans text-[#4A463F] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Victoria Sterling"
                      className="w-full bg-[#FFFFFF] border border-[#DDD5C7] rounded-lg px-4 py-2.5 text-sm text-[#1C1A17] placeholder-[#A39C90] focus:outline-none focus:border-[#BA9158] transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-sans text-[#4A463F] uppercase tracking-wider mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="v.sterling@domain.com"
                        className="w-full bg-[#FFFFFF] border border-[#DDD5C7] rounded-lg px-4 py-2.5 text-sm text-[#1C1A17] placeholder-[#A39C90] focus:outline-none focus:border-[#BA9158] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-sans text-[#4A463F] uppercase tracking-wider mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-[#FFFFFF] border border-[#DDD5C7] rounded-lg px-4 py-2.5 text-sm text-[#1C1A17] placeholder-[#A39C90] focus:outline-none focus:border-[#BA9158] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#4A463F] uppercase tracking-wider mb-1">
                      Service Requirement
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full bg-[#FFFFFF] border border-[#DDD5C7] rounded-lg px-4 py-2.5 text-sm text-[#1C1A17] focus:outline-none focus:border-[#BA9158] transition-colors"
                    >
                      <option>Interior Design &amp; Space Planning</option>
                      <option>Bespoke Furniture &amp; Styling</option>
                      <option>Full-Scale Renovation</option>
                      <option>Custom Architectural Living</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-sans text-[#4A463F] uppercase tracking-wider mb-1">
                      Project Details / Vision *
                    </label>
                    <textarea
                      rows={3}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about the property, square footage, desired timeline, or architectural style..."
                      className="w-full bg-[#FFFFFF] border border-[#DDD5C7] rounded-lg px-4 py-2.5 text-sm text-[#1C1A17] placeholder-[#A39C90] focus:outline-none focus:border-[#BA9158] transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full btn-gold py-3 rounded-full text-xs font-medium tracking-wider uppercase mt-2"
                  >
                    Submit Project Inquiry
                  </button>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export const ContactSection: React.FC<{ onOpenModal: () => void }> = ({ onOpenModal }) => {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#F6F2EB] text-[#1C1A17] border-b border-[#EAE3D6]">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-14">
        <div className="bg-[#FFFFFF] border border-[#E8E1D5] rounded-3xl p-8 sm:p-14 lg:p-16 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-left">
            <span className="heading-gold text-xs font-mono uppercase tracking-[0.2em] block mb-2">
              Bespoke Inquiries
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl text-[#1C1A17] font-normal mb-4">
              Ready to Craft Your Sanctuary?
            </h3>
            <p className="text-[#635E55] text-sm sm:text-base font-light leading-relaxed mb-6">
              Connect directly with our creative directors to discuss custom interior architecture, residential renovations, or bespoke furniture styling.
            </p>
            <div className="flex flex-wrap gap-6 text-xs text-[#787268] font-sans">
              <span className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-[#BA9158]" />
                <span>concierge@eliteinteriors.com</span>
              </span>
              <span className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-[#BA9158]" />
                <span>+1 (800) 248-3920</span>
              </span>
              <span className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-[#BA9158]" />
                <span>New York &bull; London &bull; Zurich</span>
              </span>
            </div>
          </div>

          <div>
            <button
              type="button"
              onClick={onOpenModal}
              className="btn-gold px-9 py-3.5 rounded-full text-xs font-medium tracking-wider uppercase whitespace-nowrap shadow-md"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
