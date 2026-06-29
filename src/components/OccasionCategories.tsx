import React from 'react';
import { Gift, Heart, Smile, Sparkles, Briefcase, Crown, Baby, Flame, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface OccasionCategoriesProps {
  onSelectOccasion: (occ: string) => void;
}

export const OccasionCategories: React.FC<OccasionCategoriesProps> = ({ onSelectOccasion }) => {
  const categories = [
    {
      name: 'Birthday',
      image: '/images/hero.png',
      icon: <Gift className="w-6 h-6" />,
      color: 'from-[#FFF0F5] to-[#FFE4EE]',
      accent: 'bg-[#F56FA1]',
      textColor: 'text-[#F56FA1]',
      desc: 'Elegant adult & milestone setups'
    },
    {
      name: 'Baby Welcome',
      image: '/images/baby.png',
      icon: <Baby className="w-6 h-6" />,
      color: 'from-[#EBF5FB] to-[#D6EAF8]',
      accent: 'bg-[#2980B9]',
      textColor: 'text-[#2980B9]',
      desc: 'Warm homecomings & baby showers'
    },
    {
      name: 'Anniversary',
      image: '/images/hero.png', // Reused hero image
      icon: <Heart className="w-6 h-6" />,
      color: 'from-[#FFF5F5] to-[#FFE3E3]',
      accent: 'bg-[#E74C3C]',
      textColor: 'text-[#E74C3C]',
      desc: 'Romantic silver & golden milestones'
    },
    {
      name: 'Romantic Surprise',
      image: '/images/romantic.png',
      icon: <Flame className="w-6 h-6" />,
      color: 'from-[#FFF5F8] to-[#FFD8E8]',
      accent: 'bg-[#F56FA1]',
      textColor: 'text-[#F56FA1]',
      desc: 'Private proposals & canopy setups'
    },
    {
      name: 'Kids Birthday',
      image: '/images/baby.png', // Reused baby image for kids
      icon: <Smile className="w-6 h-6" />,
      color: 'from-[#F9F7E8] to-[#F1E8B8]',
      accent: 'bg-[#D8A84F]',
      textColor: 'text-[#D8A84F]',
      desc: 'Theme setups: jungle, space & princess'
    },
    {
      name: 'Corporate Events',
      image: '/images/hero.png',
      icon: <Briefcase className="w-6 h-6" />,
      color: 'from-[#F2F4F4] to-[#E5E7E9]',
      accent: 'bg-[#34495E]',
      textColor: 'text-[#34495E]',
      desc: 'Grand launches & team celebrations'
    },
    {
      name: 'Balloon Garland',
      image: '/images/baby.png',
      icon: <Crown className="w-6 h-6" />,
      color: 'from-[#F5EEF8] to-[#E8DAEF]',
      accent: 'bg-[#8E44AD]',
      textColor: 'text-[#8E44AD]',
      desc: 'Organic custom walls & entrance arches'
    },
    {
      name: 'Theme Decorations',
      image: '/images/romantic.png',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-[#FEF5E7] to-[#FDEBD0]',
      accent: 'bg-[#D35400]',
      textColor: 'text-[#D35400]',
      desc: '100% custom-crafted premium themes'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: 'spring', stiffness: 300, damping: 24 }
    }
  };

  return (
    <section id="occasions" className="py-24 bg-[#FFFDFD] relative overflow-hidden">
      
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-40">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-[#FFD8E8]/40 to-transparent rounded-full blur-3xl mix-blend-multiply" />
        <div className="absolute bottom-20 -left-20 w-80 h-80 bg-gradient-to-tr from-[#F9E7EF]/60 to-transparent rounded-full blur-3xl mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center gap-1.5 px-4 py-1.5 bg-[#F9E7EF] border border-[#FFD8E8] rounded-full"
          >
            <Sparkles size={14} className="text-[#F56FA1] fill-[#F56FA1]" />
            <span className="text-[11px] font-bold tracking-widest text-[#F56FA1] uppercase">
              Browse Our Collection
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-5xl font-bold text-[#1E1B2E]"
          >
            Explore by Occasion
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-[#1E1B2E]/60 max-w-lg mx-auto"
          >
            Select an occasion below to see how we turn ordinary spaces into breathtaking, memorable dreamscapes.
          </motion.p>
        </div>

        {/* Categories Grid with Animations */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {categories.map((cat) => (
            <motion.div
              key={cat.name}
              variants={itemVariants}
              whileHover="hover"
              onClick={() => onSelectOccasion(cat.name)}
              className="relative group cursor-pointer h-full"
            >
              {/* Card Container */}
              <div className="h-full bg-white rounded-[32px] border border-gray-100/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 overflow-hidden relative z-10 flex flex-col group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                
                {/* Image Section */}
                <div className="relative w-full h-44 overflow-hidden bg-gray-50">
                  <img 
                    src={cat.image} 
                    alt={cat.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Smooth fade into the white card below */}
                  <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent z-10" />
                </div>

                {/* Content Section */}
                <div className="px-6 pb-8 flex flex-col items-center text-center relative z-20 flex-grow">
                  
                  {/* Icon Wrapper (Overlapping image) */}
                  <motion.div 
                    className={`-mt-8 w-14 h-14 rounded-2xl bg-white border border-gray-100/50 flex items-center justify-center ${cat.textColor} shadow-md relative mb-4`}
                    variants={{
                      hover: { y: -5, rotate: [0, -10, 10, 0], transition: { duration: 0.5 } }
                    }}
                  >
                    {/* Inner glowing dot */}
                    <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-current opacity-20" />
                    {cat.icon}
                  </motion.div>

                  {/* Title & Description */}
                  <h3 className="font-serif text-[22px] font-bold text-[#1E1B2E] mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#1E1B2E] group-hover:to-gray-500 transition-all duration-300">
                    {cat.name}
                  </h3>
                  <p className="text-[13px] text-[#1E1B2E]/60 leading-relaxed px-2 flex-grow">
                    {cat.desc}
                  </p>

                  {/* Animated Arrow Button */}
                  <motion.div 
                    className="mt-6 overflow-hidden flex items-center justify-center"
                    variants={{
                      hover: { opacity: 1, y: 0 }
                    }}
                  >
                    <span className={`flex items-center gap-2 text-[13px] font-bold ${cat.textColor} group-hover:underline underline-offset-4 decoration-2`}>
                      Explore Gallery 
                      <motion.span
                        variants={{
                          hover: { x: 5 }
                        }}
                      >
                        <ArrowRight size={14} />
                      </motion.span>
                    </span>
                  </motion.div>
                </div>
                
              </div>
              
              {/* Outer Glow Effect on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cat.color} rounded-[32px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 -z-10 scale-95 group-hover:scale-100`} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
