import React from 'react';
import { LayoutGrid } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface HeroGalleryProps {
  onOpenTour: () => void;
}

export const HeroGallery: React.FC<HeroGalleryProps> = ({ onOpenTour }) => {
  const { heroPhotos } = LISTING_DATA;

  return (
    <section id="photos" className="hero-gallery-wrapper">
      <div className="hero-gallery-grid">
        {/* Main large image (Left) */}
        <div
          className="hero-img-box hero-main"
          onClick={onOpenTour}
          role="button"
          tabIndex={0}
          aria-label="View main listing photo in full gallery"
        >
          <img src={heroPhotos[0].url} alt={heroPhotos[0].caption} />
          <div className="img-hover-overlay" />
        </div>

        {/* 4 smaller images (Right 2x2) */}
        <div className="hero-quad-grid">
          {heroPhotos.slice(1, 5).map((photo, idx) => (
            <div
              key={photo.id}
              className={`hero-img-box hero-quad-${idx + 1}`}
              onClick={onOpenTour}
              role="button"
              tabIndex={0}
              aria-label={`View photo ${idx + 2} in full gallery`}
            >
              <img src={photo.url} alt={photo.caption} />
              <div className="img-hover-overlay" />
            </div>
          ))}
        </div>

        {/* Floating "Show all photos" Button */}
        <button
          className="show-all-photos-btn"
          onClick={onOpenTour}
          aria-label="Show all photos"
        >
          <LayoutGrid size={16} strokeWidth={2.4} />
          <span>Show all photos</span>
        </button>
      </div>

      <style>{`
        .hero-gallery-wrapper {
          position: relative;
          margin-bottom: 32px;
        }
        .hero-gallery-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          height: 420px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          position: relative;
        }
        .hero-img-box {
          position: relative;
          cursor: pointer;
          overflow: hidden;
          background: #eee;
        }
        .hero-img-box img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.4s cubic-bezier(0.2, 0, 0, 1), filter 0.3s ease;
        }
        .hero-img-box:hover img {
          transform: scale(1.03);
          filter: brightness(0.92);
        }
        .img-hover-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0);
          transition: background 0.3s ease;
          pointer-events: none;
        }
        .hero-img-box:hover .img-hover-overlay {
          background: rgba(0, 0, 0, 0.04);
        }
        .hero-quad-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 8px;
          height: 100%;
        }
        .show-all-photos-btn {
          position: absolute;
          bottom: 24px;
          right: 24px;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #ffffff;
          border: 1px solid var(--text-main);
          border-radius: var(--radius-sm);
          padding: 7px 15px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
          transition: transform 0.15s ease, background-color 0.2s ease;
          z-index: 5;
        }
        .show-all-photos-btn:hover {
          background-color: var(--bg-light);
          transform: scale(1.02);
        }
        .show-all-photos-btn:active {
          transform: scale(0.98);
        }
        @media (max-width: 744px) {
          .hero-gallery-grid {
            grid-template-columns: 1fr;
            height: 280px;
          }
          .hero-quad-grid {
            display: none;
          }
          .show-all-photos-btn {
            bottom: 16px;
            right: 16px;
          }
        }
      `}</style>
    </section>
  );
};
