import React from 'react';
import { Upload, Heart } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface ListingHeaderProps {
  isSaved: boolean;
  onToggleSave: () => void;
  onOpenShare: () => void;
}

export const ListingHeader: React.FC<ListingHeaderProps> = ({
  isSaved,
  onToggleSave,
  onOpenShare
}) => {
  return (
    <div className="listing-header-section">
      <h1 className="listing-title">{LISTING_DATA.title}</h1>

      <div className="listing-header-actions">
        <button
          className="header-action-btn"
          onClick={onOpenShare}
          aria-label="Share this listing"
        >
          <Upload size={16} strokeWidth={2.2} />
          <span className="action-label">Share</span>
        </button>

        <button
          className="header-action-btn"
          onClick={onToggleSave}
          aria-label={isSaved ? "Saved to wishlist" : "Save to wishlist"}
        >
          <Heart
            size={16}
            strokeWidth={2.2}
            fill={isSaved ? "#FF385C" : "none"}
            color={isSaved ? "#FF385C" : "#222222"}
            className={isSaved ? "heart-saved" : ""}
          />
          <span className="action-label">{isSaved ? "Saved" : "Save"}</span>
        </button>
      </div>

      <style>{`
        .listing-header-section {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          padding-top: 24px;
          padding-bottom: 20px;
          gap: 16px;
        }
        .listing-title {
          font-size: 26px;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.25;
          letter-spacing: -0.2px;
        }
        .listing-header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .header-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          text-decoration: underline;
          text-underline-offset: 3px;
          background: transparent;
          transition: background 0.15s ease;
        }
        .header-action-btn:hover {
          background: var(--bg-light);
        }
        .heart-saved {
          animation: popHeart 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        @keyframes popHeart {
          0% { transform: scale(1); }
          50% { transform: scale(1.3); }
          100% { transform: scale(1); }
        }
        @media (max-width: 744px) {
          .listing-header-section {
            flex-direction: column-reverse;
            padding-top: 16px;
          }
          .listing-title {
            font-size: 22px;
          }
        }
      `}</style>
    </div>
  );
};
