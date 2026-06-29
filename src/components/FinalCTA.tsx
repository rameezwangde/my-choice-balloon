import React from 'react';
import { MessageCircle, Calendar, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

interface FinalCTAProps {
  onBookNow: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onBookNow }) => {
  return (
    <section className="py-20 relative overflow-hidden">
      
      {/* Curved Pastel Gradient Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="gradient-pastel rounded-[40px] p-8 md:p-16 relative overflow-hidden border border-[#FFD8E8] shadow-luxury text-center flex flex-col items-center justify-center space-y-8"
        >
          {/* Decorative Floaters */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-12 left-12 w-6 h-8 bg-gradient-to-t from-[#F56FA1]/40 to-[#FFD8E8]/40 rounded-t-full rounded-b-xl hidden md:block"
          />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-12 right-12 w-8 h-10 bg-gradient-to-t from-[#D8A84F]/30 to-[#FFFDFD]/30 rounded-t-full rounded-b-xl hidden md:block"
          />

          {/* Sparkles Icon */}
          <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm text-[#F56FA1]">
            <Sparkles size={20} className="fill-current" />
          </div>

          {/* Content */}
          <div className="space-y-4 max-w-2xl">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#252525] leading-tight">
              Let's Create Your Next Celebration Together
            </h2>
            <p className="text-sm sm:text-base text-[#252525]/75">
              Contact us today to lock in your date. Our professional coordinators will bring your vision to life with custom balloon installations.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
            <button
              onClick={onBookNow}
              className="bg-[#F56FA1] hover:bg-[#F56FA1]/95 text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
            >
              <Calendar size={16} />
              <span>Book Decoration</span>
            </button>

            <a
              href="https://wa.me/919900000000?text=Hi%2C%20I%20am%20interested%20in%20customizing%20a%20balloon%20decoration%20with%20My%20Choice%20Balloon."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-[#F9E7EF]/20 text-[#252525] border border-[#FFD8E8] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
            >
              <MessageCircle size={16} className="text-[#27AE60] fill-current" />
              <span>WhatsApp Inquiry</span>
            </a>
          </div>

          {/* Prompt */}
          <p className="text-[10px] text-[#252525]/50">
            ⚡ Quick setup dates available. Standard customization orders require 24 hours notice.
          </p>

        </motion.div>
      </div>
    </section>
  );
};
