import React from 'react';
import { Sparkles, Zap, Shield, Gift, HeartHandshake, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const trustBadges = [
    {
      icon: <Zap size={18} className="text-[#F56FA1] fill-[#F56FA1]/20" />,
      title: 'Same Day',
      subtitle: 'Decoration'
    },
    {
      icon: <Shield size={18} className="text-[#F56FA1] fill-[#F56FA1]/20" />,
      title: 'Premium',
      subtitle: 'Quality'
    },
    {
      icon: <Gift size={18} className="text-[#F56FA1] fill-[#F56FA1]/20" />,
      title: '100%',
      subtitle: 'Customizable'
    },
    {
      icon: <HeartHandshake size={18} className="text-[#F56FA1] fill-[#F56FA1]/20" />,
      title: 'Trusted by',
      subtitle: '1000+ Families'
    }
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#FFF5F8] via-[#FFFDFD] to-[#FFD8E8]/40 pt-10 pb-32 md:pb-40">
      
      {/* Right Side Background Image Integration (Full bleed fade effect) */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full z-0 opacity-40 lg:opacity-100 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFFDFD] via-[#FFFDFD]/80 to-transparent lg:w-[40%] z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#FFFDFD] via-transparent to-transparent z-10" />
        <img 
          src="/images/hero.png" 
          alt="Luxury Balloon Decoration Setup" 
          className="w-full h-full object-cover object-left lg:object-center"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Typography & Action */}
          <div className="flex flex-col items-start text-left space-y-5 max-w-xl pt-4 lg:pt-12">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/60 backdrop-blur-sm border border-[#FFD8E8] rounded-full shadow-sm"
            >
              <Sparkles size={10} className="text-[#F56FA1] fill-[#F56FA1]" />
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest text-[#F56FA1] uppercase">
                Premium Balloon Decorations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-1"
            >
              <h1 className="font-sans text-[42px] sm:text-5xl lg:text-[56px] font-extrabold tracking-tight text-[#1E1B2E] leading-[1.1]">
                We Decorate<br />
                Memories That<br />
                Last <span className="font-script-elegant text-[#EB4D82] font-normal text-[52px] sm:text-[64px] lg:text-[76px] relative inline-block leading-[0.8] mt-2">
                  Forever
                  {/* Drawn Heart SVG */}
                  <svg className="absolute -right-12 top-2 w-10 h-10 text-[#F56FA1]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#1E1B2E]/70 text-xs sm:text-sm leading-relaxed max-w-[400px] pt-2"
            >
              From birthdays to baby showers, anniversaries to surprises - we create magical moments with beautiful balloon decorations tailored just for you.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-4"
            >
              {/* Book Now button */}
              <button
                onClick={onBookNow}
                className="bg-[#DB4D88] hover:bg-[#C23C73] text-white text-[13px] font-bold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer border border-[#DB4D88]"
              >
                <span>Book Now</span>
                <ArrowRight size={16} />
              </button>

              {/* Chat on WhatsApp */}
              <a
                href="https://wa.me/919900000000?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20luxury%20balloon%20decoration."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#F9F9F9] text-[#252525] text-[13px] font-bold px-8 py-3.5 rounded-full transition-all shadow-sm border border-gray-100 flex items-center justify-center gap-2 cursor-pointer"
              >
                {/* Custom WhatsApp SVG */}
                <svg viewBox="0 0 24 24" width="18" height="18" className="text-[#25D366] fill-current">
                  <path d="M12.031 0C5.385 0 0 5.385 0 12.031c0 2.115.55 4.17 1.597 5.986L0 24l6.155-1.564c1.764.954 3.75 1.458 5.876 1.458 6.646 0 12.031-5.385 12.031-12.031S18.677 0 12.031 0zM17.9 17.078c-.287.808-1.579 1.532-2.186 1.62-.562.083-1.272.227-3.921-.871-3.18-1.317-5.253-4.57-5.414-4.786-.16-.217-1.293-1.721-1.293-3.284 0-1.563.808-2.34 1.096-2.628.287-.287.623-.367.83-.367.208 0 .415.016.591.032.208.016.495-.08.766.575.287.702.974 2.378 1.054 2.538.08.16.144.367.032.59-.112.224-.176.368-.335.56-.16.191-.336.415-.479.56-.16.16-.335.335-.144.67.192.336.846 1.405 1.821 2.267 1.261 1.117 2.298 1.452 2.634 1.612.335.16.527.128.734-.112.192-.239.83-1.005 1.054-1.356.223-.351.447-.287.75-.176.303.112 1.931.91 2.266 1.07.335.16.559.24.638.368.08.128.08.75-.207 1.558z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Micro Trust Badges Row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 sm:gap-10 pt-10 w-full"
            >
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col items-start space-y-1.5 group cursor-default">
                  <div className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center transition-transform group-hover:scale-110 group-hover:shadow-md border border-[#FFD8E8]/50">
                    {badge.icon}
                  </div>
                  <div className="flex flex-col text-[10px] font-bold text-[#1E1B2E]/80 leading-[1.2]">
                    <span>{badge.title}</span>
                    <span>{badge.subtitle}</span>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>

        </div>
      </div>

      {/* Wavy Bottom Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] z-20">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none" 
          className="relative block w-full h-[40px] md:h-[60px]"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.11,130.83,115.1,188.7,97.7,235.1,83.74,278.47,70.08,321.39,56.44Z" 
            className="fill-white"
          ></path>
        </svg>
      </div>

    </section>
  );
};
