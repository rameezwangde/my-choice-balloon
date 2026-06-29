import React from 'react';
import { Gift, Heart, Smile, Sparkles, Briefcase, Crown, Baby, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface OccasionCategoriesProps {
  onSelectOccasion: (occ: string) => void;
}

export const OccasionCategories: React.FC<OccasionCategoriesProps> = ({ onSelectOccasion }) => {
  const categories = [
    {
      name: 'Birthday',
      icon: <Gift className="w-6 h-6" />,
      color: 'bg-[#FFF0F5] border-[#FFD8E8]',
      textColor: 'text-[#F56FA1]',
      desc: 'Elegant adult & milestone setups'
    },
    {
      name: 'Baby Welcome',
      icon: <Baby className="w-6 h-6" />,
      color: 'bg-[#EBF5FB] border-[#D6EAF8]',
      textColor: 'text-[#2980B9]',
      desc: 'Warm homecomings & baby showers'
    },
    {
      name: 'Anniversary',
      icon: <Heart className="w-6 h-6" />,
      color: 'bg-[#FFF5F5] border-[#FFD2D2]',
      textColor: 'text-[#E74C3C]',
      desc: 'Romantic silver & golden milestones'
    },
    {
      name: 'Romantic Surprise',
      icon: <Flame className="w-6 h-6" />,
      color: 'bg-[#FFF5F8] border-[#FFD8E8]',
      textColor: 'text-[#F56FA1]',
      desc: 'Private proposals & canopy setups'
    },
    {
      name: 'Kids Birthday',
      icon: <Smile className="w-6 h-6" />,
      color: 'bg-[#F9F7E8] border-[#F1E8B8]',
      textColor: 'text-[#D8A84F]',
      desc: 'Theme setups: jungle, space & princess'
    },
    {
      name: 'Corporate Events',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'bg-[#F2F4F4] border-[#BDC3C7]',
      textColor: 'text-[#34495E]',
      desc: 'Grand launches & team celebrations'
    },
    {
      name: 'Balloon Garland',
      icon: <Crown className="w-6 h-6" />,
      color: 'bg-[#F5EEF8] border-[#D7BDE2]',
      textColor: 'text-[#8E44AD]',
      desc: 'Organic custom walls & entrance arches'
    },
    {
      name: 'Theme Decorations',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'bg-[#FEF5E7] border-[#FADBD8]',
      textColor: 'text-[#D35400]',
      desc: '100% custom-crafted premium themes'
    }
  ];

  return (
    <section id="occasions" className="py-20 bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold tracking-widest text-[#F56FA1] uppercase">
            Browse Our Collection
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
            Explore by Occasion
          </h2>
          <p className="text-sm text-[#252525]/70">
            Select an occasion below to see how we turn ordinary spaces into breathtaking, memorable dreamscapes.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className={`p-6 md:p-8 rounded-[24px] border ${cat.color} flex flex-col items-center justify-between text-center aspect-square shadow-luxury hover:shadow-luxury-hover transition-all cursor-pointer`}
              onClick={() => onSelectOccasion(cat.name)}
            >
              {/* Circular Icon Container */}
              <div className={`w-14 h-14 rounded-full bg-white flex items-center justify-center ${cat.textColor} shadow-sm mb-4`}>
                {cat.icon}
              </div>

              {/* Title & Description */}
              <div className="space-y-1">
                <h3 className="font-serif text-lg font-bold text-[#252525]">{cat.name}</h3>
                <p className="text-[11px] text-[#252525]/60 max-w-[150px] mx-auto leading-normal">{cat.desc}</p>
              </div>

              {/* Action Link */}
              <button
                className={`mt-4 text-xs font-bold ${cat.textColor} hover:underline flex items-center gap-1 cursor-pointer`}
              >
                <span>Explore</span>
                <span className="text-lg leading-none">→</span>
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
