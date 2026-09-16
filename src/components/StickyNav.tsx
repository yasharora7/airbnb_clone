import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

interface StickyNavProps {
  onReserveClick: () => void;
}

export const StickyNav: React.FC<StickyNavProps> = ({ onReserveClick }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("photos");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY;
      if (scrollPos > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Scroll Spy
      const sections = ["photos", "amenities", "reviews", "location"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            setActiveTab(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      setActiveTab(id);
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="sticky-subnav">
      <div className="sticky-subnav-container">
        {/* Left: Navigation Anchor Tabs */}
        <div className="nav-tabs">
          {[
            { id: "photos", label: "Photos" },
            { id: "amenities", label: "Amenities" },
            { id: "reviews", label: "Reviews" },
            { id: "location", label: "Location" },
          ].map((tab) => (
            <button
              key={tab.id}
              className={`nav-tab-btn ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => scrollToSection(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Right: Price, Rating and Reserve Button */}
        <div className="sticky-right-action">
          <div className="price-rating-info">
            <div className="price-row">
              <span className="price-bold">
                ₹{LISTING_DATA.totalStayPrice.toLocaleString("en-IN")}
              </span>
              <span className="price-nights">
                for {LISTING_DATA.defaultNights} nights
              </span>
            </div>
            <div className="rating-row">
              <Star size={12} fill="#222222" color="#222222" />
              <span className="rating-val">{LISTING_DATA.rating}</span>
              <span className="dot-sep">·</span>
              <span className="review-count">
                {LISTING_DATA.reviewCount} reviews
              </span>
            </div>
          </div>

          <button className="sticky-reserve-btn" onClick={onReserveClick}>
            Reserve
          </button>
        </div>
      </div>

      <style>{`
        .sticky-subnav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          background: #ffffff;
          border-bottom: 1px solid var(--border-light);
          z-index: 90;
          box-shadow: var(--shadow-sm);
          animation: fadeIn 0.2s ease-out;
        }
        .sticky-subnav-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
          height: 72px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .nav-tabs {
          display: flex;
          align-items: center;
          height: 100%;
          gap: 24px;
        }
        .nav-tab-btn {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          height: 100%;
          display: flex;
          align-items: center;
          position: relative;
          background: transparent;
          padding-top: 2px;
        }
        .nav-tab-btn.active::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--text-main);
        }
        .sticky-right-action {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .price-rating-info {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        .price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .price-bold {
          font-size: 16px;
          font-weight: 700;
        }
        .price-nights {
          font-size: 14px;
          color: var(--text-main);
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
          font-weight: 600;
        }
        .sticky-reserve-btn {
          background: linear-gradient(90deg, #E61E4D 0%, #E31C5F 50%, #D70466 100%);
          color: #ffffff;
          font-size: 16px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: var(--radius-sm);
          transition: filter 0.2s ease, transform 0.1s ease;
        }
        .sticky-reserve-btn:hover {
          filter: brightness(1.05);
        }
        .sticky-reserve-btn:active {
          transform: scale(0.98);
        }
        @media (max-width: 744px) {
          .nav-tabs {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};
