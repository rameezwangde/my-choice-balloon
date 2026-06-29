import React, { useState, useEffect } from 'react';
import { Search, MapPin, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  onBookNow: () => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedLocation: string;
  setSelectedLocation: (loc: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onBookNow,
  searchQuery,
  setSearchQuery,
  selectedLocation,
  setSelectedLocation
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const locations = [
    'Bangalore',
    'Indiranagar',
    'Whitefield',
    'Koramangala',
    'Jayanagar',
    'HSR Layout',
    'JP Nagar',
    'Hebbal'
  ];

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#why-us' },
    { name: 'Occasions', href: '#occasions' },
    { name: 'Trending', href: '#trending' },
    { name: 'Packages', href: '#packages' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#footer' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass-navbar py-3 shadow-sm' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <div className="relative flex items-center justify-center">
              {/* Luxury gold and pink balloon logo icon */}
              <div className="w-8 h-10 bg-gradient-to-tr from-[#F56FA1] to-[#FFD8E8] rounded-t-full rounded-b-2xl relative shadow-md group-hover:scale-105 transition-transform">
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full absolute top-2 left-2" />
              </div>
              <div className="w-0.5 h-3 bg-[#D8A84F] absolute -bottom-2 rounded" />
            </div>
            <div className="flex flex-col ml-1">
              <span className="font-serif text-lg md:text-xl font-bold tracking-wide text-[#252525]">
                My Choice <span className="text-[#F56FA1]">Balloon</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest text-[#D8A84F] font-semibold">
                Luxury Event Decor
              </span>
            </div>
          </a>

          {/* Navigation Links - Desktop */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-semibold text-[#252525]/85 hover:text-[#F56FA1] tracking-wide transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#F56FA1] after:transition-all hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Search bar */}
          <div className="hidden md:flex items-center relative w-48 lg:w-64 max-w-xs transition-all duration-300 focus-within:w-72">
            <input
              type="text"
              placeholder="Search decor themes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs rounded-full border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none bg-[#FFFDFD]/80 placeholder-[#252525]/40 text-[#252525] transition-all"
            />
            <Search size={14} className="absolute left-3.5 text-[#252525]/45" />
          </div>

          {/* Action Area - Right */}
          <div className="hidden md:flex items-center gap-3">
            {/* Location selector */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F9E7EF]/60 rounded-full border border-[#FFD8E8]/40 hover:bg-[#F9E7EF] transition-all">
              <MapPin size={13} className="text-[#F56FA1]" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#252525]/90 border-none focus:ring-0 cursor-pointer outline-none"
              >
                {locations.map((loc) => (
                  <option key={loc} value={loc} className="text-sm bg-white text-[#252525]">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Book Now button */}
            <button
              onClick={onBookNow}
              className="bg-[#F56FA1] hover:bg-[#F56FA1]/95 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md hover:shadow-lg flex items-center gap-1.5 cursor-pointer"
            >
              <span>Book Now</span>
              <ArrowRight size={13} />
            </button>
          </div>

          {/* Mobile Actions Container */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Location dropdown for mobile (icon only or small selection) */}
            <div className="flex items-center bg-[#F9E7EF]/60 border border-[#FFD8E8]/40 rounded-full px-2.5 py-1">
              <MapPin size={13} className="text-[#F56FA1] mr-1" />
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="bg-transparent text-[11px] font-semibold text-[#252525]/90 border-none outline-none cursor-pointer"
              >
                {locations.slice(0, 5).map((loc) => (
                  <option key={loc} value={loc} className="bg-white text-[#252525]">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-[#252525] p-1.5 rounded-full bg-[#F9E7EF]/40 hover:bg-[#F9E7EF] transition-colors cursor-pointer"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden w-full bg-[#FFFDFD] border-t border-[#FFD8E8]/50 overflow-hidden shadow-inner absolute top-full left-0 z-40"
          >
            <div className="px-4 pt-4 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
              
              {/* Search bar inside mobile drawer */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search decoration themes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 text-xs rounded-xl border border-[#FFD8E8] outline-none"
                />
                <Search size={14} className="absolute left-3.5 top-3.5 text-[#252525]/45" />
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-3.5">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-sm font-semibold text-[#252525]/85 hover:text-[#F56FA1] px-2 py-1.5 rounded-lg hover:bg-[#F9E7EF]/30 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              {/* CTAs */}
              <div className="pt-4 border-t border-[#FFD8E8]/40 space-y-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onBookNow();
                  }}
                  className="w-full bg-[#F56FA1] text-white text-xs font-semibold py-3 rounded-xl shadow-md hover:bg-[#F56FA1]/95 text-center flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <span>Book Celebration Now</span>
                  <ArrowRight size={13} />
                </button>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
