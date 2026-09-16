import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface AmenitiesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AmenitiesModal: React.FC<AmenitiesModalProps> = ({ isOpen, onClose }) => {
  const { allAmenitiesCategories } = LISTING_DATA;

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

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content amenities-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close amenities modal">
            <X size={20} />
          </button>
          <h2 className="modal-title">What this place offers</h2>
          <div style={{ width: 32 }}></div>
        </div>

        <div className="modal-scroll-body">
          {allAmenitiesCategories.map((category, idx) => (
            <div key={idx} className="amenity-category-group">
              <h3 className="amenity-cat-title">{category.category}</h3>
              <div className="amenity-items-list">
                {category.items.map((item, itemIdx) => (
                  <div key={itemIdx} className="amenity-modal-row">
                    <span className="amenity-row-name">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .amenities-modal-content {
          max-width: 650px;
        }
        .amenity-category-group {
          padding-bottom: 24px;
          margin-bottom: 24px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .amenity-category-group:last-child {
          border-bottom: none;
          margin-bottom: 0;
        }
        .amenity-cat-title {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 16px;
        }
        .amenity-items-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .amenity-modal-row {
          display: flex;
          align-items: center;
          gap: 16px;
          font-size: 16px;
          color: var(--text-main);
        }
        .amenity-row-name {
          font-size: 16px;
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};
