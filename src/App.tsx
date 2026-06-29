import { useState } from 'react';
import { TopStrip } from './components/TopStrip';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { OccasionCategories } from './components/OccasionCategories';
import { TrendingDecorations } from './components/TrendingDecorations';
import { WhyChooseUs } from './components/WhyChooseUs';
import { PopularPackages } from './components/PopularPackages';
import { OurWorkGallery } from './components/OurWorkGallery';
import { StatsSection } from './components/StatsSection';
import { GoogleReviews } from './components/GoogleReviews';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';

function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('Signature Decoration');
  const [selectedOccasion, setSelectedOccasion] = useState('Birthday');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('Bangalore');

  const openBookingModal = (packageName: string = 'Signature Decoration', occasionName: string = 'Birthday') => {
    setSelectedPackage(packageName);
    setSelectedOccasion(occasionName);
    setIsBookingModalOpen(true);
  };

  const handleSelectOccasion = (occasionName: string) => {
    openBookingModal('100% Bespoke Custom Decor', occasionName);
  };

  const handleBookPackage = (packageName: string) => {
    openBookingModal(packageName, 'Birthday');
  };

  return (
    <div className="flex flex-col min-h-screen text-[#252525] bg-[#FFFDFD] antialiased">
      {/* Top marketing bar */}
      <TopStrip />

      {/* Navigation menu */}
      <Navbar
        onBookNow={() => openBookingModal('Signature Decoration', 'Birthday')}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
      />

      {/* Main sections */}
      <main className="flex-grow">
        {/* Hero split showcase */}
        <Hero onBookNow={() => openBookingModal('Signature Decoration', 'Birthday')} />

        {/* Categories grid */}
        <OccasionCategories onSelectOccasion={handleSelectOccasion} />

        {/* Carousel card section */}
        <TrendingDecorations
          onBookNow={handleBookPackage}
          searchQuery={searchQuery}
        />

        {/* Core USPs with glassmorphism */}
        <WhyChooseUs />

        {/* Pricing Tiers list */}
        <PopularPackages onBookPackage={handleBookPackage} />

        {/* Grid gallery showing previous decoration events */}
        <OurWorkGallery />

        {/* Custom scroll counts */}
        <StatsSection />

        {/* Social reviews and testimony */}
        <GoogleReviews />

        {/* Conversion banner */}
        <FinalCTA onBookNow={() => openBookingModal('Signature Decoration', 'Birthday')} />
      </main>

      {/* Foot banner & floats */}
      <Footer />

      {/* Booking Form overlay */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        selectedPackage={selectedPackage}
        selectedOccasion={selectedOccasion}
      />
    </div>
  );
}

export default App;
