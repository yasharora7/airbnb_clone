import React, { useState, useEffect } from 'react';
import { ChevronLeft, Upload, Heart } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface PhotoTourModalProps {
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenShare: () => void;
}

export const PhotoTourModal: React.FC<PhotoTourModalProps> = ({
  isOpen,
  onClose,
  isSaved,
  onToggleSave,
  onOpenShare
}) => {
  const { photoTour } = LISTING_DATA;
  const [activeCategory, setActiveCategory] = useState(photoTour[0].id);

  // Disable body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const scrollToCategory = (id: string) => {
    setActiveCategory(id);
    const element = document.getElementById(`tour-category-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (!isOpen) return null;

  return (
    <div className="photo-tour-overlay" role="dialog" aria-modal="true">
      {/* Top Modal Header */}
      <header className="tour-header">
        <button className="tour-back-btn" onClick={onClose} aria-label="Close photo tour">
          <ChevronLeft size={22} strokeWidth={2.4} />
        </button>

        <h2 className="tour-title">Photo tour</h2>

        <div className="tour-header-actions">
          <button className="tour-icon-btn" onClick={onOpenShare} aria-label="Share">
            <Upload size={18} strokeWidth={2.2} />
          </button>
          <button className="tour-icon-btn" onClick={onToggleSave} aria-label="Save to wishlist">
            <Heart
              size={18}
              strokeWidth={2.2}
              fill={isSaved ? "#FF385C" : "none"}
              color={isSaved ? "#FF385C" : "#222222"}
            />
          </button>
        </div>
      </header>

      {/* Sticky Room Category Thumbnail Navigation */}
      <div className="tour-category-navbar-wrap">
        <div className="tour-category-navbar no-scrollbar">
          {photoTour.map((cat) => (
            <button
              key={cat.id}
              className={`category-pill-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => scrollToCategory(cat.id)}
            >
              <img src={cat.thumbnail} alt={cat.title} className="cat-thumbnail-img" />
              <span className="cat-pill-title">{cat.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Photo Feed */}
      <div className="tour-feed-container">
        {photoTour.map((cat) => (
          <section
            key={cat.id}
            id={`tour-category-${cat.id}`}
            className="tour-category-section"
          >
            {/* Left side: Category Title & Amenities */}
            <div className="category-meta-left">
              <h3 className="category-heading">{cat.title}</h3>
              {cat.amenities.length > 0 && (
                <p className="category-amenities-tags">
                  {cat.amenities.join(' · ')}
                </p>
              )}
            </div>

            {/* Right side: Photo Stream */}
            <div className="category-photo-grid">
              {cat.photos.map((photo) => (
                <div key={photo.id} className="category-photo-card">
                  <img src={photo.url} alt={photo.caption} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <style>{`
        .photo-tour-overlay {
          position: fixed;
          inset: 0;
          background: #ffffff;
          z-index: 2000;
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          animation: fadeIn 0.2s ease-out;
        }
        .tour-header {
          position: sticky;
          top: 0;
          background: #ffffff;
          z-index: 50;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px 24px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .tour-back-btn, .tour-icon-btn {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
          transition: background 0.15s ease;
        }
        .tour-back-btn:hover, .tour-icon-btn:hover {
          background: var(--bg-light);
        }
        .tour-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .tour-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .tour-category-navbar-wrap {
          position: sticky;
          top: 69px;
          background: #ffffff;
          z-index: 40;
          border-bottom: 1px solid var(--border-subtle);
          padding: 12px 24px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.03);
        }
        .tour-category-navbar {
          display: flex;
          align-items: center;
          gap: 16px;
          overflow-x: auto;
          max-width: 1120px;
          margin: 0 auto;
          padding-bottom: 4px;
        }
        .category-pill-btn {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
          background: transparent;
          opacity: 0.75;
          transition: opacity 0.2s ease, transform 0.15s ease;
          padding: 4px;
        }
        .category-pill-btn:hover {
          opacity: 1;
        }
        .category-pill-btn.active {
          opacity: 1;
        }
        .cat-thumbnail-img {
          width: 72px;
          height: 48px;
          border-radius: 6px;
          object-fit: cover;
          border: 2px solid transparent;
        }
        .category-pill-btn.active .cat-thumbnail-img {
          border-color: var(--text-main);
        }
        .cat-pill-title {
          font-size: 12px;
          font-weight: 500;
          color: var(--text-main);
          white-space: nowrap;
        }
        .tour-feed-container {
          max-width: 1120px;
          width: 100%;
          margin: 0 auto;
          padding: 32px 24px 80px 24px;
          display: flex;
          flex-direction: column;
          gap: 64px;
        }
        .tour-category-section {
          display: grid;
          grid-template-columns: 320px 1fr;
          gap: 32px;
          align-items: flex-start;
          scroll-margin-top: 180px;
        }
        .category-meta-left {
          position: sticky;
          top: 200px;
        }
        .category-heading {
          font-size: 24px;
          font-weight: 600;
          margin-bottom: 12px;
          color: var(--text-main);
        }
        .category-amenities-tags {
          font-size: 14px;
          color: var(--text-sub);
          line-height: 1.6;
        }
        .category-photo-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .category-photo-card {
          width: 100%;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #f0f0f0;
        }
        .category-photo-card img {
          width: 100%;
          height: auto;
          object-fit: cover;
        }
        @media (max-width: 768px) {
          .tour-category-section {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .category-meta-left {
            position: static;
          }
        }
      `}</style>
    </div>
  );
};
