import React, { useState } from 'react';
import { Heart, Star, MapPin, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TrendingDecorationsProps {
  onBookNow: (packageName: string) => void;
  searchQuery: string;
}

export const TrendingDecorations: React.FC<TrendingDecorationsProps> = ({ onBookNow, searchQuery }) => {
  const trendingItems = [
    {
      id: 1,
      title: 'Luxury Dream Rose Canopy',
      category: 'Romantic Surprise',
      location: 'Koramangala, Bangalore',
      image: '/images/romantic.png',
      price: '₹14,999',
      rating: '4.9',
      reviews: '85',
      tag: 'Best Seller'
    },
    {
      id: 2,
      title: 'Royal Pastel Cloud Welcome',
      category: 'Baby Welcome',
      location: 'Indiranagar, Bangalore',
      image: '/images/baby.png',
      price: '₹11,499',
      rating: '4.8',
      reviews: '64',
      tag: 'Trending'
    },
    {
      id: 3,
      title: 'Neon Signature Birthday Arch',
      category: 'Birthday',
      location: 'Whitefield, Bangalore',
      image: '/images/hero.png',
      price: '₹9,999',
      rating: '4.9',
      reviews: '112',
      tag: 'Popular'
    },
    {
      id: 4,
      title: 'Grand Chrome Gold Arch',
      category: 'Anniversary',
      location: 'Sadashivanagar, Bangalore',
      image: '/images/hero.png', // Fallback to hero
      price: '₹18,999',
      rating: '5.0',
      reviews: '48',
      tag: 'Luxury Selection'
    }
  ];

  // Liked items state tracker
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});

  const toggleLike = (id: number) => {
    setLikedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  // Filter based on search query
  const filteredItems = trendingItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="trending" className="py-20 bg-[#FFFDFD] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div className="space-y-3 text-left">
            <span className="text-xs font-bold tracking-widest text-[#F56FA1] uppercase">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-[#252525]">
              Trending Decorations
            </h2>
            <p className="text-sm text-[#252525]/75 max-w-xl">
              Discover the most requested setups in Bangalore's premium residences, handcrafted with luxury styling.
            </p>
          </div>
          
          {/* Scroll Controls (Desktop only) */}
          <div className="hidden md:flex items-center gap-3 mt-4 md:mt-0">
            <button
              onClick={scrollLeft}
              className="w-12 h-12 rounded-full border border-[#FFD8E8] flex items-center justify-center text-[#252525]/80 hover:bg-[#F9E7EF]/40 hover:text-[#F56FA1] transition-all cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollRight}
              className="w-12 h-12 rounded-full border border-[#FFD8E8] flex items-center justify-center text-[#252525]/80 hover:bg-[#F9E7EF]/40 hover:text-[#F56FA1] transition-all cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {filteredItems.length === 0 ? (
          <div className="text-center py-12 text-[#252525]/60 bg-[#F9E7EF]/20 rounded-3xl border border-dashed border-[#FFD8E8]">
            No matching decorations found. Try searching for "Romantic", "Baby", or "Birthday".
          </div>
        ) : (
          /* Slider Container */
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-none touch-pan-x"
            style={{ scrollbarWidth: 'none' }}
          >
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-[280px] sm:w-[320px] shrink-0 snap-start bg-[#FFFDFD] rounded-[24px] overflow-hidden border border-[#FFD8E8]/40 shadow-luxury hover:shadow-luxury-hover transition-all duration-300 group flex flex-col justify-between"
              >
                
                {/* Image Wrap */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 select-none"
                  />
                  
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-[#252525] text-[10px] font-bold px-3 py-1 rounded-full shadow-sm">
                    {item.tag}
                  </div>

                  {/* Heart Button */}
                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-sm cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                  >
                    <Heart
                      size={16}
                      className={
                        likedItems[item.id]
                          ? 'fill-[#F56FA1] text-[#F56FA1]'
                          : 'text-[#252525]/70'
                      }
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1 text-left">
                    <span className="text-[10px] font-bold uppercase text-[#F56FA1] tracking-wider">
                      {item.category}
                    </span>
                    <h3 className="font-serif text-lg font-bold text-[#252525] line-clamp-1">
                      {item.title}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-[#252525]/60 text-xs">
                      <MapPin size={12} className="text-[#D8A84F]" />
                      <span>{item.location}</span>
                      <span className="text-[#252525]/20">•</span>
                      <div className="flex items-center text-[#D8A84F] gap-0.5">
                        <Star size={11} className="fill-current" />
                        <span className="text-[10px] font-bold text-[#252525]">{item.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Pricing & Booking Row */}
                  <div className="flex items-center justify-between pt-3 border-t border-[#FFD8E8]/40">
                    <div className="text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#252525]/50 block">
                        Starting Price
                      </span>
                      <span className="text-base font-bold text-[#252525]">{item.price}</span>
                    </div>

                    <button
                      onClick={() => onBookNow(item.title)}
                      className="bg-[#F56FA1]/10 hover:bg-[#F56FA1] text-[#F56FA1] hover:text-white text-xs font-semibold px-4 py-2 rounded-xl transition-all cursor-pointer border border-[#F56FA1]/20 hover:shadow-md"
                    >
                      Book Now
                    </button>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
