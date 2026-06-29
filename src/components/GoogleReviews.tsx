import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

export const GoogleReviews: React.FC = () => {
  const reviews = [
    {
      name: 'Ananya Deshpande',
      role: 'Indiranagar Resident',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face',
      text: 'My Choice Balloon created a beautiful pastel arch for my daughters 1st birthday. They were on time and did the setup in just 2.5 hours. Very professional!',
      date: '2 weeks ago'
    },
    {
      name: 'Rohan Hegde',
      role: 'Whitefield Tech Lead',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      text: 'Booked a romantic room surprise canopy setup for our anniversary. The quality of the balloons and the floral highlights exceeded our expectations. Highly recommended.',
      date: '1 month ago'
    },
    {
      name: 'Priyanka Sen',
      role: 'Corporate HR Manager',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face',
      text: 'Superb service for our office annual launch. The design coordinator was extremely patient with our customization requests. The branding backdrop looked stellar.',
      date: '3 weeks ago'
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-b from-[#FFFDFD] to-[#FFF5F8] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          {/* Google Icon Simulation & Star */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="font-bold text-sm text-[#252525]/60 flex items-center gap-1">
              <svg className="w-4 h-4 text-blue-500 fill-current" viewBox="0 0 24 24">
                <path d="M12.24 10.285V13.4h6.887C18.2 15.614 15.645 18 12.24 18c-3.86 0-7-3.14-7-7s3.14-7 7-7c1.7 0 3.3.6 4.6 1.8l2.42-2.42C17.347 1.9 14.94 1 12.24 1c-5.52 0-10 4.48-10 10s4.48 10 10 10c5.77 0 9.6-4.06 9.6-9.8 0-.665-.06-1.3-.173-1.915H12.24z"/>
              </svg>
              Google Reviews
            </span>
            <div className="flex items-center text-[#D8A84F]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-current" />
              ))}
            </div>
            <span className="text-xs font-bold text-[#252525]">(4.9/5.0)</span>
          </div>

          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
            Loved by Bangalore Families
          </h2>
          <p className="text-sm text-[#252525]/75">
            Read stories of how we transformed living rooms, hotel suites, and event halls into moments of pure happiness.
          </p>
        </div>

        {/* Reviews Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <motion.div
              key={rev.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="bg-white p-8 rounded-[24px] shadow-luxury hover:shadow-luxury-hover border border-[#FFD8E8]/30 transition-all flex flex-col justify-between text-left relative"
            >
              {/* Quote Icon overlay */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-[#FFD8E8]/40 pointer-events-none" />

              <div className="space-y-4">
                {/* Stars */}
                <div className="flex items-center text-[#D8A84F]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={13} className="fill-current" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs text-[#252525]/85 italic leading-relaxed">
                  "{rev.text}"
                </p>
              </div>

              {/* Reviewer Details */}
              <div className="flex items-center gap-3 mt-6 pt-4 border-t border-[#FFD8E8]/20">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-10 h-10 rounded-full object-cover border border-[#FFD8E8]"
                />
                <div>
                  <h4 className="text-xs font-bold text-[#252525]">{rev.name}</h4>
                  <div className="flex items-center gap-1.5 text-[10px] text-[#252525]/60">
                    <span>{rev.role}</span>
                    <span>•</span>
                    <span>{rev.date}</span>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
