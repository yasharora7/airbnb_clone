import React, { useState } from "react";
import { Header } from "./components/Header";
import { StickyNav } from "./components/StickyNav";
import { ListingHeader } from "./components/ListingHeader";
import { HeroGallery } from "./components/HeroGallery";
import { ListingInfo } from "./components/ListingInfo";
import { SleepingArrangements } from "./components/SleepingArrangements";
import { AmenitiesSection } from "./components/AmenitiesSection";
import { CalendarSection } from "./components/CalendarSection";
import { BookingCard } from "./components/BookingCard";
import { ReviewsSection } from "./components/ReviewsSection";
import { HostSection } from "./components/HostSection";
import { LocationSection } from "./components/LocationSection";
import { ThingsToKnowSection } from "./components/ThingsToKnowSection";
import { NearbyStaysSection } from "./components/NearbyStaysSection";
import { Footer } from "./components/Footer";
import { MobileBottomBar } from "./components/MobileBottomBar";
import { PhotoTourModal } from "./components/PhotoTourModal";
import { AmenitiesModal } from "./components/AmenitiesModal";
import { ShareModal } from "./components/ShareModal";
import { ReserveModal } from "./components/ReserveModal";
import { LISTING_DATA } from "./data/listingData";

export const App: React.FC = () => {
  // State management
  const [isSaved, setIsSaved] = useState(false);
  const [isPhotoTourOpen, setIsPhotoTourOpen] = useState(false);
  const [isAmenitiesModalOpen, setIsAmenitiesModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);
  const [isReserveModalOpen, setIsReserveModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Booking & guest count state
  const [nights, setNights] = useState(LISTING_DATA.defaultNights);
  const [checkIn, setCheckIn] = useState("18/10/2026");
  const [checkOut, setCheckOut] = useState("23/10/2026");
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  const [pets, setPets] = useState(0);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleToggleSave = () => {
    const nextSaved = !isSaved;
    setIsSaved(nextSaved);
    showToast(nextSaved ? "Saved to Wishlist" : "Removed from Wishlist");
  };

  const handleUpdateGuests = (
    newAdults: number,
    newChildren: number,
    newInfants: number,
    newPets: number,
  ) => {
    setAdults(newAdults);
    setChildren(newChildren);
    setInfants(newInfants);
    setPets(newPets);
  };

  const handleClearDates = () => {
    setNights(0);
    setCheckIn("Add date");
    setCheckOut("Add date");
    showToast("Dates cleared");
  };

  const handleOpenReserve = () => {
    setIsReserveModalOpen(true);
  };

  const scrollToCalendar = () => {
    const el = document.getElementById("calendar-anchor");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="airbnb-app-root">
      {/* Global Airbnb Navigation */}
      <Header />

      {/* Sticky Navigation bar (appears when scrolling past hero) */}
      <StickyNav onReserveClick={handleOpenReserve} />

      {/* Main Page Content */}
      <main className="main-container">
        {/* Listing Title & Share/Save Buttons */}
        <ListingHeader
          isSaved={isSaved}
          onToggleSave={handleToggleSave}
          onOpenShare={() => setIsShareModalOpen(true)}
        />

        {/* 5-Photo Hero Showcase Grid */}
        <HeroGallery onOpenTour={() => setIsPhotoTourOpen(true)} />

        {/* 2-Column Split Body Layout */}
        <div className="listing-main-split">
          {/* Left Column: Details, Sleeping, Amenities, Calendar */}
          <div className="listing-left-content">
            <ListingInfo />
            <SleepingArrangements />
            <AmenitiesSection
              onOpenAmenitiesModal={() => setIsAmenitiesModalOpen(true)}
            />
            <div id="calendar-anchor">
              <CalendarSection
                checkIn={checkIn}
                checkOut={checkOut}
                nights={nights}
                onClearDates={handleClearDates}
              />
            </div>
          </div>

          {/* Right Column: Sticky Booking Widget */}
          <div className="listing-right-sidebar">
            <BookingCard
              onReserve={handleOpenReserve}
              selectedNights={nights}
              checkInDate={checkIn}
              checkOutDate={checkOut}
              adultsCount={adults}
              childrenCount={children}
              infantsCount={infants}
              petsCount={pets}
              onUpdateGuests={handleUpdateGuests}
              onOpenDatePicker={scrollToCalendar}
            />
          </div>
        </div>

        {/* Full-width bottom sections */}
        <ReviewsSection />
        <LocationSection />
        <HostSection />
        <ThingsToKnowSection />
        <NearbyStaysSection />
      </main>

      {/* Mobile Sticky CTA Bar */}
      <MobileBottomBar
        onReserve={handleOpenReserve}
        pricePerNight={LISTING_DATA.pricePerNight}
        datesText={`${checkIn} – ${checkOut}`}
      />

      {/* Modals */}
      <PhotoTourModal
        isOpen={isPhotoTourOpen}
        onClose={() => setIsPhotoTourOpen(false)}
        isSaved={isSaved}
        onToggleSave={handleToggleSave}
        onOpenShare={() => setIsShareModalOpen(true)}
      />

      <AmenitiesModal
        isOpen={isAmenitiesModalOpen}
        onClose={() => setIsAmenitiesModalOpen(false)}
      />

      <ShareModal
        isOpen={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />

      <ReserveModal
        isOpen={isReserveModalOpen}
        onClose={() => setIsReserveModalOpen(false)}
        nights={nights}
        checkIn={checkIn}
        checkOut={checkOut}
        totalGuests={adults + children}
      />

      {/* Interactive Toast */}
      {toastMessage && (
        <div className="global-toast" role="alert">
          <span>{toastMessage}</span>
        </div>
      )}

      <style>{`
        .airbnb-app-root {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }
        .listing-main-split {
          display: grid;
          grid-template-columns: 1fr 370px;
          gap: 80px;
          position: relative;
        }
        .listing-left-content {
          min-width: 0;
        }
        .listing-right-sidebar {
          position: relative;
        }
        .global-toast {
          position: fixed;
          bottom: 32px;
          left: 50%;
          transform: translateX(-50%);
          background: #222222;
          color: #ffffff;
          padding: 12px 24px;
          border-radius: var(--radius-pill);
          font-size: 14px;
          font-weight: 500;
          box-shadow: var(--shadow-lg);
          z-index: 2000;
          animation: slideUpToast 0.25s ease-out;
        }
        @keyframes slideUpToast {
          from {
            opacity: 0;
            transform: translate(-50%, 16px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        @media (max-width: 1128px) {
          .listing-main-split {
            grid-template-columns: 1fr 340px;
            gap: 40px;
          }
        }
        @media (max-width: 744px) {
          .listing-main-split {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .listing-right-sidebar {
            display: none;
          }
        }
      `}</style>
    </div>
  );
};

export default App;
