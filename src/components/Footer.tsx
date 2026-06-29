import React from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-[#1C1C1E] text-white pt-16 pb-8 border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-12">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="w-6 h-8 bg-gradient-to-tr from-[#F56FA1] to-[#FFD8E8] rounded-t-full rounded-b-lg relative shadow-md">
                <div className="w-1 h-1 bg-white/60 rounded-full absolute top-1.5 left-1.5" />
              </div>
              <span className="font-serif text-lg font-bold tracking-wide">
                My Choice <span className="text-[#F56FA1]">Balloon</span>
              </span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed max-w-sm">
              Bangalore's premium event decoration brand crafting high-end customized balloon setups, grand floral entries, backdrops, and romantic surprises that elevate moments into lifelong memories.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F56FA1] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-[#F56FA1] text-white flex items-center justify-center transition-all cursor-pointer"
              >
                <svg viewBox="0 0 24 24" width="14" height="14" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F56FA1] mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li><a href="#home" className="hover:text-[#F56FA1] transition-colors">Home</a></li>
              <li><a href="#why-us" className="hover:text-[#F56FA1] transition-colors">About Us</a></li>
              <li><a href="#occasions" className="hover:text-[#F56FA1] transition-colors">Occasions</a></li>
              <li><a href="#trending" className="hover:text-[#F56FA1] transition-colors">Trending</a></li>
              <li><a href="#packages" className="hover:text-[#F56FA1] transition-colors">Packages</a></li>
              <li><a href="#gallery" className="hover:text-[#F56FA1] transition-colors">Gallery</a></li>
            </ul>
          </div>

          {/* Column 3: Contact & Location */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F56FA1]">
              Contact Details
            </h4>
            <ul className="space-y-3 text-xs text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={14} className="text-[#D8A84F] shrink-0 mt-0.5" />
                <span>
                  12, 100 Feet Rd, HAL 2nd Stage, Indiranagar, Bengaluru, Karnataka 560038
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={14} className="text-[#D8A84F]" />
                <span>+91 99000 00000 / +91 98000 00000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={14} className="text-[#D8A84F]" />
                <span>hello@mychoiceballoon.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Clock size={14} className="text-[#D8A84F]" />
                <span>Mon - Sun: 7:00 AM - 11:00 PM</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Google Maps Frame */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-serif text-sm font-bold uppercase tracking-wider text-[#F56FA1] mb-4">
              Our Service Area
            </h4>
            {/* Elegant Map Preview card */}
            <div className="w-full h-32 rounded-xl overflow-hidden bg-white/5 border border-white/10 relative group">
              <div className="absolute inset-0 bg-[#252525]/80 flex flex-col items-center justify-center p-3 text-center transition-all group-hover:bg-[#252525]/75">
                <MapPin size={18} className="text-[#F56FA1] mb-1.5 animate-bounce" />
                <span className="text-[10px] font-bold">Bangalore Metro Area</span>
                <span className="text-[9px] text-white/50 mt-0.5">Indiranagar, Koramangala, Whitefield, HSR & more</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 mt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-white/40">
          <p>© {currentYear} My Choice Balloon. All Rights Reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <button
              onClick={scrollToTop}
              className="bg-white/5 hover:bg-[#F56FA1] text-white p-2 rounded-full transition-all cursor-pointer ml-2"
              title="Scroll to Top"
            >
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>

      {/* Floating WhatsApp Widget */}
      <a
        href="https://wa.me/919900000000?text=Hi!%20I%20want%20to%20inquire%20about%20a%20balloon%20decoration%20setup%20in%20Bangalore."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA56] text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 flex items-center justify-center group"
      >
        <MessageCircle size={26} className="fill-current" />
        {/* Hover label */}
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 ease-out whitespace-nowrap text-xs font-bold pl-0 group-hover:pl-2">
          Chat With Us
        </span>
      </a>

    </footer>
  );
};
