import React from 'react';
import { CheckCircle2, Star, Sparkles, MessageCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  onBookNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookNow }) => {
  const trustBadges = [
    { label: 'Same Day Setup', desc: 'Decor in under 4 hours' },
    { label: 'Premium Balloons', desc: 'Eco-friendly double-stuffed' },
    { label: '100% Custom Designs', desc: 'Bespoke high-end look' },
    { label: '3000+ Families Served', desc: 'Top-rated service' }
  ];

  return (
    <section id="home" className="relative overflow-hidden pt-4 pb-20 md:pb-28">
      {/* Background Radial Glow */}
      <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[70%] gradient-hero-glow -z-10 pointer-events-none rounded-full blur-3xl animate-pulse-subtle" />
      <div className="absolute bottom-[-10%] left-[-15%] w-[40%] h-[50%] bg-[#FFD8E8]/10 -z-10 pointer-events-none rounded-full blur-3xl" />

      {/* Floating Decorative Balloons - Parallax & Animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-24 left-10 md:left-24 w-6 h-8 bg-gradient-to-t from-[#F56FA1] to-[#FFD8E8] rounded-t-full rounded-b-xl opacity-60 hidden md:block"
      >
        <div className="w-0.5 h-6 bg-[#252525]/15 absolute -bottom-6 left-2.5" />
      </motion.div>
      <motion.div
        animate={{ y: [0, -25, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute top-80 right-12 w-8 h-10 bg-gradient-to-t from-[#D8A84F] to-[#FFFDFD] rounded-t-full rounded-b-xl opacity-50 hidden md:block"
      >
        <div className="w-0.5 h-8 bg-[#252525]/15 absolute -bottom-8 left-3.5" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Typography & Action */}
          <div className="lg:col-span-6 flex flex-col items-start text-left space-y-6 md:space-y-8">
            
            {/* Small Label */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F9E7EF] border border-[#FFD8E8]/50 rounded-full"
            >
              <Sparkles size={12} className="text-[#F56FA1] fill-[#F56FA1]" />
              <span className="text-[11px] font-bold tracking-widest text-[#F56FA1] uppercase">
                Premium Balloon Decorations
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#252525] leading-[1.1] !margin-0">
                We Decorate Moments You'll
                <span className="block font-script-elegant text-5xl sm:text-6xl lg:text-7xl text-[#F56FA1] my-2 font-normal">
                  Never Forget
                </span>
              </h1>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[#252525]/85 text-sm sm:text-base leading-relaxed max-w-xl"
            >
              From birthdays to anniversaries, baby welcomes, romantic surprises, corporate events and themed celebrations, we create magical decorations that become lifelong memories.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
            >
              {/* Explore decorations button */}
              <a
                href="#occasions"
                className="bg-[#F56FA1] hover:bg-[#F56FA1]/95 text-white text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Explore Decorations</span>
                <ArrowRight size={16} />
              </a>

              {/* Chat on WhatsApp */}
              <a
                href="https://wa.me/919900000000?text=Hi%2C%20I%20am%20interested%20in%20booking%20a%20luxury%20balloon%20decoration%20in%20Bangalore."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white hover:bg-[#F9E7EF]/20 text-[#252525] border border-[#FFD8E8] text-xs sm:text-sm font-semibold px-8 py-3.5 rounded-full transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
              >
                <MessageCircle size={16} className="text-[#252525]/80 fill-current" />
                <span>Chat on WhatsApp</span>
              </a>
            </motion.div>

            {/* Micro Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-[#FFD8E8]/40 w-full"
            >
              {trustBadges.map((badge, idx) => (
                <div key={idx} className="flex flex-col space-y-1">
                  <div className="flex items-center gap-1">
                    <CheckCircle2 size={13} className="text-[#D8A84F]" />
                    <span className="text-xs font-bold text-[#252525]">{badge.label}</span>
                  </div>
                  <span className="text-[10px] text-[#252525]/60 leading-tight">{badge.desc}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* Right Column: Hero Image Rendering */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Soft pink glow behind image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD8E8]/40 to-transparent rounded-[40px] blur-2xl transform rotate-3 scale-95" />

            {/* Main setup image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-[480px] aspect-[4/5] rounded-[36px] overflow-hidden shadow-luxury border-4 border-white/80 group"
            >
              <img
                src="/images/hero.png"
                alt="Luxury Birthday Balloon Setup by My Choice Balloon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 select-none"
              />
              
              {/* LED sign element simulated with overlay */}
              <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/5" />

              {/* Floating badges on top of image */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel rounded-2xl p-4 flex items-center justify-between border border-[#FFD8E8]/40">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#FFD8E8] flex items-center justify-center text-[#F56FA1]">
                    <Star size={14} className="fill-current" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#252525]">Luxury Signature Setup</h4>
                    <p className="text-[10px] text-[#252525]/75">Featured in Indiranagar, Bangalore</p>
                  </div>
                </div>
                <button
                  onClick={onBookNow}
                  className="bg-[#F56FA1] hover:bg-[#F56FA1]/90 text-white text-[11px] font-bold px-3 py-1.5 rounded-lg transition-all cursor-pointer"
                >
                  Book Setup
                </button>
              </div>
            </motion.div>

            {/* Small decorative floater balloon */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-4 w-12 h-14 bg-gradient-to-br from-[#FFD8E8] to-[#F56FA1] rounded-t-full rounded-b-2xl shadow-lg flex items-center justify-center opacity-90 hidden sm:flex"
            >
              <div className="w-1.5 h-1.5 bg-white/50 rounded-full absolute top-3 left-3" />
              <div className="w-0.5 h-10 bg-[#252525]/15 absolute -bottom-10 rounded" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
