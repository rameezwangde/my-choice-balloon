import React, { useState } from 'react';
import { Eye, X, ArrowLeft, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const OurWorkGallery: React.FC = () => {
  const galleryItems = [
    {
      id: 1,
      title: 'Bespoke Pastel Cloud Setup',
      category: 'Baby Welcome',
      image: '/images/baby.png',
      span: 'row-span-2'
    },
    {
      id: 2,
      title: 'Luxury Birthday Living Room Arch',
      category: 'Birthday',
      image: '/images/hero.png',
      span: 'row-span-1'
    },
    {
      id: 3,
      title: 'Romantic Heart-shaped Proposal Canopy',
      category: 'Romantic Surprise',
      image: '/images/romantic.png',
      span: 'row-span-2'
    },
    {
      id: 4,
      title: 'Chrome Gold Anniversary Backdrop',
      category: 'Anniversary',
      image: '/images/hero.png',
      span: 'row-span-2'
    },
    {
      id: 5,
      title: 'Royal Welcome Garland',
      category: 'Baby Welcome',
      image: '/images/baby.png',
      span: 'row-span-1'
    },
    {
      id: 6,
      title: 'Hotel Suite Surprise Decor',
      category: 'Romantic Surprise',
      image: '/images/romantic.png',
      span: 'row-span-1'
    }
  ];

  const [activeImageIdx, setActiveImageIdx] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setActiveImageIdx(index);
  };

  const closeLightbox = () => {
    setActiveImageIdx(null);
  };

  const showNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx + 1) % galleryItems.length);
    }
  };

  const showPrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (activeImageIdx !== null) {
      setActiveImageIdx((activeImageIdx - 1 + galleryItems.length) % galleryItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-[#FFFDFD] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F56FA1] uppercase">
            Our Portfolio
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
            Moments We've Created
          </h2>
          <p className="text-sm text-[#252525]/75">
            Take a look at actual setups designed by our professional decorators across luxury properties in Bangalore.
          </p>
        </div>

        {/* Pinterest Masonry Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 auto-rows-[240px]">
          {galleryItems.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onClick={() => openLightbox(idx)}
              className={`relative overflow-hidden rounded-[24px] shadow-luxury hover:shadow-luxury-hover border border-[#FFD8E8]/20 group cursor-pointer ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />

              {/* Luxury Gradient Hover Mask */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-left">
                <span className="text-[10px] font-bold text-[#FFD8E8] uppercase tracking-widest mb-1">
                  {item.category}
                </span>
                <h3 className="font-serif text-base font-bold text-white mb-2 leading-tight">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1 text-white/80 text-xs">
                  <Eye size={14} />
                  <span>View Details</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {activeImageIdx !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {/* Lightbox Content Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-4xl flex flex-col items-center justify-center text-center select-none"
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full cursor-pointer transition-colors"
              >
                <X size={20} />
              </button>

              {/* Left/Right Buttons */}
              <button
                onClick={showPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-colors z-10"
              >
                <ArrowLeft size={20} />
              </button>
              <button
                onClick={showNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full cursor-pointer transition-colors z-10"
              >
                <ArrowRight size={20} />
              </button>

              {/* Main Image */}
              <div className="w-full max-h-[75vh] overflow-hidden rounded-[20px] bg-black/25 flex items-center justify-center border border-white/15">
                <img
                  src={galleryItems[activeImageIdx].image}
                  alt={galleryItems[activeImageIdx].title}
                  className="max-w-full max-h-[75vh] object-contain rounded-[20px]"
                />
              </div>

              {/* Description Below */}
              <div className="mt-4 text-left w-full max-w-2xl px-4 text-white">
                <span className="text-xs font-bold text-[#F56FA1] uppercase tracking-widest block mb-1">
                  {galleryItems[activeImageIdx].category}
                </span>
                <h4 className="font-serif text-xl font-bold">
                  {galleryItems[activeImageIdx].title}
                </h4>
                <p className="text-xs text-white/70 mt-1">
                  Handcrafted with premium double-stuffed balloons, backdrops, and custom lighting.
                </p>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
