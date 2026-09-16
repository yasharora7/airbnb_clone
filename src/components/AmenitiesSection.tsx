import React from 'react';
import {
  Utensils,
  Wifi,
  Laptop,
  Car,
  Waves,
  Bath,
  PawPrint,
  Cctv,
  ShieldAlert,
  BellRing
} from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface AmenitiesSectionProps {
  onOpenAmenitiesModal: () => void;
}

export const AmenitiesSection: React.FC<AmenitiesSectionProps> = ({ onOpenAmenitiesModal }) => {
  const { featuredAmenities } = LISTING_DATA;

  const renderAmenityIcon = (iconName: string) => {
    switch (iconName) {
      case 'utensils':
        return <Utensils size={24} strokeWidth={1.8} />;
      case 'wifi':
        return <Wifi size={24} strokeWidth={1.8} />;
      case 'laptop':
        return <Laptop size={24} strokeWidth={1.8} />;
      case 'car':
        return <Car size={24} strokeWidth={1.8} />;
      case 'waves':
        return <Waves size={24} strokeWidth={1.8} />;
      case 'bath':
        return <Bath size={24} strokeWidth={1.8} />;
      case 'paw':
        return <PawPrint size={24} strokeWidth={1.8} />;
      case 'cctv':
        return <Cctv size={24} strokeWidth={1.8} />;
      case 'shield-alert':
        return <ShieldAlert size={24} strokeWidth={1.8} />;
      case 'bell-ring':
        return <BellRing size={24} strokeWidth={1.8} />;
      default:
        return <Wifi size={24} strokeWidth={1.8} />;
    }
  };

  return (
    <section id="amenities" className="amenities-section">
      <h3 className="section-title">What this place offers</h3>

      <div className="amenities-grid">
        {featuredAmenities.map((amenity, idx) => {
          const isCut = amenity.name.includes("Carbon monoxide") || amenity.name.includes("Smoke alarm");
          return (
            <div key={idx} className={`amenity-item ${isCut ? "is-cut" : ""}`}>
              <span className="amenity-icon">{renderAmenityIcon(amenity.icon)}</span>
              <span className="amenity-name">{amenity.name}</span>
            </div>
          );
        })}
      </div>

      <button className="btn-outline show-all-amenities-btn" onClick={onOpenAmenitiesModal}>
        Show all 50 amenities
      </button>

      <style>{`
        .amenities-section {
          padding: 32px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .amenities-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px 24px;
          margin-bottom: 32px;
        }
        .amenity-item {
          display: flex;
          align-items: center;
          gap: 16px;
          color: var(--text-main);
        }
        .amenity-icon {
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .amenity-item.is-cut {
          text-decoration: line-through;
          color: var(--text-muted);
          opacity: 0.7;
        }
        .amenity-item.is-cut .amenity-icon {
          opacity: 0.7;
        }
        .amenity-name {
          font-size: 16px;
          color: var(--text-main);
          font-weight: 400;
        }
        .show-all-amenities-btn {
          margin-top: 8px;
        }
        @media (max-width: 600px) {
          .amenities-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
