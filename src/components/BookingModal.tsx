import React, { useState } from 'react';
import { X, Calendar, MapPin, Send, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedPackage?: string;
  selectedOccasion?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedPackage = 'Signature Decoration',
  selectedOccasion = 'Birthday'
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [location, setLocation] = useState('Indiranagar');
  const [occasion, setOccasion] = useState(selectedOccasion);
  const [packageType, setPackageType] = useState(selectedPackage);
  const [notes, setNotes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const bangaloreLocations = [
    'Indiranagar',
    'Koramangala',
    'Whitefield',
    'Jayanagar',
    'HSR Layout',
    'Sadashivanagar',
    'Malleshwaram',
    'JP Nagar',
    'Hebbal',
    'Electronic City',
    'MG Road / Central Bangalore',
    'Other Location in Bangalore'
  ];

  const occasions = [
    'Birthday',
    'Anniversary',
    'Baby Welcome',
    'Romantic Surprise',
    'Kids Birthday',
    'Corporate Event',
    'Balloon Garland Only',
    'Custom Theme Decoration'
  ];

  const packages = [
    'Basic Celebration (Starts ₹4,999)',
    'Signature Decoration (Starts ₹9,999)',
    'Luxury Decoration (Starts ₹19,999)',
    '100% Bespoke Custom Decor'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct WhatsApp Message
    const whatsappMessage = `*New Booking Inquiry - My Choice Balloon* 🎈
----------------------------------
*Name:* ${name}
*Phone:* ${phone}
*Date:* ${date}
*Location:* ${location}
*Occasion:* ${occasion}
*Package Choice:* ${packageType}
${notes ? `*Custom Notes:* ${notes}` : ''}
----------------------------------
Please confirm availability for my date. Thank you!`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/919900000000?text=${encodedMessage}`; // Replace with actual business number

    setSubmitted(true);
    
    // Redirect to WhatsApp in a new tab after 1.5s delay for good UX
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
      setSubmitted(false);
      onClose();
      // Reset form
      setName('');
      setPhone('');
      setDate('');
      setNotes('');
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-[#FFFDFD] p-6 shadow-2xl md:p-8 border border-[#FFD8E8]/40"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 text-[#252525]/60 hover:text-[#F56FA1] transition-colors p-1.5 rounded-full hover:bg-[#F9E7EF] cursor-pointer"
            >
              <X size={20} />
            </button>

            {submitted ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1, rotate: 360 }}
                  transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                  className="w-20 h-20 bg-[#FFD8E8] rounded-full flex items-center justify-center mb-6 text-[#F56FA1]"
                >
                  <Send size={36} />
                </motion.div>
                <h3 className="font-serif text-3xl font-bold text-[#252525] mb-2">Redirecting to WhatsApp...</h3>
                <p className="text-[#252525]/70 max-w-sm">
                  We are opening WhatsApp to finalize your booking details with our premium decoration coordinator.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-xs font-semibold tracking-widest text-[#F56FA1] uppercase block mb-1">
                  Secure Your Date
                </span>
                <h3 className="font-serif text-3xl font-bold text-[#252525] mb-6">
                  Design Your Celebration
                </h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name & Phone */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Rohan Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5">
                        WhatsApp Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white"
                      />
                    </div>
                  </div>

                  {/* Date & Location */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5 flex items-center gap-1">
                        <Calendar size={14} className="text-[#F56FA1]" />
                        Celebration Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white cursor-pointer"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5 flex items-center gap-1">
                        <MapPin size={14} className="text-[#F56FA1]" />
                        Bangalore Area *
                      </label>
                      <select
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white cursor-pointer"
                      >
                        {bangaloreLocations.map((loc) => (
                          <option key={loc} value={loc}>
                            {loc}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Occasion & Package */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5">
                        Occasion
                      </label>
                      <select
                        value={occasion}
                        onChange={(e) => setOccasion(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white cursor-pointer"
                      >
                        {occasions.map((occ) => (
                          <option key={occ} value={occ}>
                            {occ}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-[#252525]/75 mb-1.5">
                        Preferred Package
                      </label>
                      <select
                        value={packageType}
                        onChange={(e) => setPackageType(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white cursor-pointer"
                      >
                        {packages.map((pkg) => (
                          <option key={pkg} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Notes / Requests */}
                  <div>
                    <label className="block text-xs font-medium text-[#252525]/75 mb-1.5 flex items-center gap-1">
                      <HelpCircle size={14} className="text-[#F56FA1]" />
                      Custom Theme or Specific Colors (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. Please use champagne, pastel peach and white balloons. Add a warm LED Happy Birthday ring and baby neon text..."
                      className="w-full px-4 py-3 rounded-xl border border-[#FFD8E8] focus:border-[#F56FA1] focus:ring-2 focus:ring-[#FFD8E8] outline-none transition-all text-sm bg-white resize-none"
                    />
                  </div>

                  {/* Submit button */}
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    type="submit"
                    className="w-full bg-[#F56FA1] hover:bg-[#F56FA1]/95 text-white font-medium py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer mt-2 text-sm font-semibold"
                  >
                    <span>Connect & Check Date Availability</span>
                    <Send size={16} />
                  </motion.button>

                  <p className="text-[10px] text-center text-[#252525]/50 mt-2">
                    ⚡ Same day set-ups call for fast turnaround. We reply on WhatsApp in under 5 minutes.
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
