import React from 'react';
import { Sliders, Clock, Compass, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <Sliders className="w-6 h-6 text-[#F56FA1]" />,
      title: 'Customization Made Easy',
      desc: 'Pick your color themes, neon signs, and backdrops. Our design coordinator tailors everything to match your vision perfectly.'
    },
    {
      icon: <Clock className="w-6 h-6 text-[#D8A84F]" />,
      title: 'Same Day Decoration',
      desc: 'Decors setup in under 4 hours. Fast, dependable, and high quality even for absolute last-minute celebration planning.'
    },
    {
      icon: <Compass className="w-6 h-6 text-[#2980B9]" />,
      title: 'Book in 2 Minutes',
      desc: 'Zero complex checkout processes. Connect instantly with our decorator coordinator on WhatsApp and secure your slot today.'
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-[#27AE60]" />,
      title: 'Secure & Reliable',
      desc: '100% on-time delivery guarantee. Professional, polite in-house decorators who clean up before leaving.'
    }
  ];

  return (
    <section id="why-us" className="py-20 bg-gradient-to-b from-[#FFF5F8] to-[#FFFDFD] relative overflow-hidden">
      
      {/* Decorative Blur Spheres */}
      <div className="absolute top-1/4 left-[-10%] w-[350px] h-[350px] bg-[#FFD8E8]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-[-10%] w-[300px] h-[300px] bg-[#F9E7EF]/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F56FA1] uppercase">
            The Luxury Difference
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
            Why My Choice Balloon?
          </h2>
          <p className="text-sm text-[#252525]/75">
            We don't sell standardized packages. We craft customizable art pieces tailored specifically to elevate your special day.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feat, idx) => (
            <motion.div
              key={feat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="glass-panel p-8 rounded-[24px] shadow-luxury hover:shadow-luxury-hover border border-[#FFD8E8]/40 transition-all duration-300 text-left flex flex-col justify-between"
            >
              <div>
                {/* Floating Icon Base */}
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 relative group-hover:scale-110 transition-transform">
                  <div className="absolute inset-0 bg-[#FFD8E8]/20 rounded-2xl blur-md -z-10" />
                  {feat.icon}
                </div>

                <h3 className="font-serif text-xl font-bold text-[#252525] mb-3">
                  {feat.title}
                </h3>
                
                <p className="text-xs text-[#252525]/70 leading-relaxed">
                  {feat.desc}
                </p>
              </div>

              {/* Decorative Subtle Line */}
              <div className="w-8 h-[2px] bg-[#FFD8E8] mt-6 rounded" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
