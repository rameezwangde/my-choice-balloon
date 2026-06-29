import React from 'react';
import { Check, MessageCircle, Star } from 'lucide-react';
import { motion } from 'framer-motion';

interface PopularPackagesProps {
  onBookPackage: (pkgName: string) => void;
}

export const PopularPackages: React.FC<PopularPackagesProps> = ({ onBookPackage }) => {
  const packages = [
    {
      name: 'Basic Celebration',
      price: '₹4,999',
      tagline: 'Perfect for cozy home surprises',
      features: [
        '100 Metallic & Pastel Balloons',
        'Happy Birthday LED Banner (Rent)',
        '3 Balloon Pillars with Ribbons',
        'Same-Day Delivery & Setup',
        '1 Professional Decorator',
        'Clean up after decoration'
      ],
      isPopular: false,
      whatsappText: 'Hi, I am interested in the Basic Celebration Package (₹4,999).'
    },
    {
      name: 'Signature Decoration',
      price: '₹9,999',
      tagline: 'Best for living room & hotels',
      features: [
        '250 Premium Chrome & Pastel Balloons',
        'Large Ring Backdrop or Arch structure',
        'Custom Name LED Light Sign',
        'Luxury Plush Teddy & Floral accents',
        'Glow Lights & Glass Floor reflections',
        '2 Professional Decorators',
        'Custom color options available'
      ],
      isPopular: true,
      whatsappText: 'Hi, I am interested in your Signature Decoration Package (₹9,999).'
    },
    {
      name: 'Luxury Decoration',
      price: '₹19,999',
      tagline: 'Bespoke grand scale event setup',
      features: [
        '500+ Double-stuffed luxury balloons',
        'Premium Multi-Layer Arch Backdrop',
        'Custom Acrylic Sign with LED Neon',
        'Extensive Fresh/Premium Silk Flowers',
        'Fairy Lights & Floor Up-lighting',
        '3 Professional Decorators',
        'Full custom theme design consultation'
      ],
      isPopular: false,
      whatsappText: 'Hi, I am interested in your Luxury Decoration Package (₹19,999).'
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F56FA1] uppercase">
            Curated Experiences
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
            Popular Decoration Packages
          </h2>
          <p className="text-sm text-[#252525]/70">
            Choose a package that suits your style. All packages are fully customizable with your preferred colors and requirements.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto">
          {packages.map((pkg, idx) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`rounded-[32px] p-8 flex flex-col justify-between relative transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-white border-2 border-[#F56FA1] shadow-2xl scale-105 z-10'
                  : 'bg-white/70 border border-[#FFD8E8] shadow-luxury hover:shadow-luxury-hover hover:bg-white'
              }`}
            >
              {/* Popular Badge */}
              {pkg.isPopular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-[#F56FA1] to-[#D8A84F] text-white text-[11px] font-bold py-1 px-4 rounded-full flex items-center gap-1 shadow-md">
                  <Star size={12} className="fill-current" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Package Content */}
              <div className="text-left">
                <span className="text-xs font-bold uppercase text-[#252525]/50 tracking-wider">
                  {pkg.isPopular ? 'Signature Choice' : 'Premium Selection'}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#252525] mt-1 mb-2">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#252525]/60 mb-6">{pkg.tagline}</p>
                
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-[#252525]">
                    {pkg.price}
                  </span>
                  <span className="text-xs text-[#252525]/65">onwards</span>
                </div>

                {/* Features List */}
                <ul className="space-y-3.5 mb-8">
                  {pkg.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5 text-xs text-[#252525]/85">
                      <div className="w-4 h-4 rounded-full bg-[#FFD8E8]/40 border border-[#F56FA1]/25 flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={10} className="text-[#F56FA1] stroke-[3]" />
                      </div>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Package CTA */}
              <div className="space-y-3">
                <button
                  onClick={() => onBookPackage(pkg.name)}
                  className={`w-full py-3.5 px-6 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                    pkg.isPopular
                      ? 'bg-[#F56FA1] text-white hover:bg-[#F56FA1]/95 hover:shadow-md'
                      : 'bg-[#F9E7EF] text-[#F56FA1] hover:bg-[#F56FA1] hover:text-white'
                  }`}
                >
                  Book package
                </button>

                <a
                  href={`https://wa.me/919900000000?text=${encodeURIComponent(pkg.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-6 rounded-xl text-xs font-bold bg-[#FFFDFD] text-[#252525]/80 hover:bg-[#252525]/5 border border-[#252525]/10 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle size={14} className="text-[#27AE60] fill-current" />
                  <span>WhatsApp Inquiry</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
