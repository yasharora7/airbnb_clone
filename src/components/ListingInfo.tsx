import React, { useState } from "react";
import { Sun, Snowflake, Key, ChevronRight, ChevronUp } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export const ListingInfo: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { host, highlights, description } = LISTING_DATA;

  const getHighlightIcon = (iconName: string) => {
    switch (iconName) {
      case "sun":
        return <Sun size={24} strokeWidth={1.8} />;
      case "snowflake":
        return <Snowflake size={24} strokeWidth={1.8} />;
      case "key":
        return <Key size={24} strokeWidth={1.8} />;
      default:
        return <Sun size={24} strokeWidth={1.8} />;
    }
  };

  return (
    <div className="listing-info-container">
      {/* Property specs header */}
      <div className="listing-type-specs">
        <h2 className="property-subtitle">{LISTING_DATA.type}</h2>
        <p className="property-specs-text">{LISTING_DATA.specs}</p>
      </div>

      {/* Guest Favourite Laurel Badge Row */}
      <div className="guest-favourite-badge-card">
        <div className="badge-col-left">
          <img src="/images/laurel-left.png" alt="Laurel left" className="laurel-img" />
          <div className="badge-text-group">
            <span className="badge-title">Guest favourite</span>
            <span className="badge-desc">
              One of the most loved homes on Airbnb, according to guests
            </span>
          </div>
          <img src="/images/laurel-right.png" alt="Laurel right" className="laurel-img" />
        </div>

        <div className="badge-divider-v"></div>

        <div className="badge-col-rating">
          <span className="badge-rating-num">{LISTING_DATA.rating}</span>
          <div className="badge-stars">★★★★★</div>
        </div>

        <div className="badge-divider-v"></div>

        <div className="badge-col-reviews">
          <span className="badge-reviews-num">{LISTING_DATA.reviewCount}</span>
          <span className="badge-reviews-label">Reviews</span>
        </div>
      </div>

      {/* Host Summary Row */}
      <div className="host-summary-row">
        <img src={host.avatar} alt={host.name} className="host-avatar-sm" />
        <div className="host-meta">
          <h3 className="host-name-title">Hosted by {host.name}</h3>
          <p className="host-tenure">{host.yearsHosting} years hosting</p>
        </div>
      </div>

      <div className="section-divider"></div>

      {/* 3 Key Feature Highlights */}
      <div className="highlights-list">
        {highlights.map((hl, idx) => (
          <div key={idx} className="highlight-item">
            <div className="highlight-icon-wrap">
              {getHighlightIcon(hl.icon)}
            </div>
            <div className="highlight-content">
              <h4 className="highlight-title">{hl.title}</h4>
              <p className="highlight-desc">{hl.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="section-divider"></div>

      {/* Auto-translation badge */}
      <div className="translation-disclaimer">
        <span>Some info has been automatically translated.</span>
        <button className="show-original-btn">Show original</button>
      </div>

      {/* Listing Description with expander */}
      <div className="description-section">
        <p
          className={`description-text ${isExpanded ? "expanded" : "collapsed"}`}
        >
          {description}
        </p>

        <button
          className="description-toggle-btn"
          onClick={() => setIsExpanded(!isExpanded)}
        >
          <span>{isExpanded ? "Show less" : "Show more"}</span>
          {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} />}
        </button>
      </div>

      <style>{`
        .listing-info-container {
          padding-bottom: 24px;
        }
        .property-subtitle {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .property-specs-text {
          font-size: 15px;
          color: var(--text-muted);
          margin-bottom: 24px;
        }
        .guest-favourite-badge-card {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 16px 18px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
          background: #fff;
          min-height: 84px;
        }
        .badge-col-left {
          display: flex;
          align-items: center;
          gap: 12px;
          flex: 1;
          min-width: 0;
        }
        .laurel-img {
          height: 38px;
          width: auto;
          object-fit: contain;
          flex-shrink: 0;
        }
        .badge-text-group {
          display: flex;
          flex-direction: column;
        }
        .badge-title {
          font-size: 16px;
          font-weight: 700;
          color: var(--text-main);
        }
        .badge-desc {
          font-size: 13px;
          color: var(--text-muted);
          max-width: 240px;
          line-height: 1.3;
        }
        .badge-divider-v {
          width: 1px;
          height: 40px;
          background: var(--border-subtle);
          margin: 0 16px;
        }
        .badge-col-rating {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .badge-rating-num {
          font-size: 18px;
          font-weight: 700;
        }
        .badge-stars {
          font-size: 10px;
          color: var(--text-main);
          letter-spacing: 1px;
        }
        .badge-col-reviews {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .badge-reviews-num {
          font-size: 18px;
          font-weight: 700;
        }
        .badge-reviews-label {
          font-size: 12px;
          text-decoration: underline;
          color: var(--text-main);
          font-weight: 600;
        }
        .host-summary-row {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 12px 0;
        }
        .host-avatar-sm {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .host-name-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .host-tenure {
          font-size: 14px;
          color: var(--text-muted);
        }
        .section-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 24px 0;
        }
        .highlights-list {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .highlight-item {
          display: flex;
          align-items: flex-start;
          gap: 20px;
        }
        .highlight-icon-wrap {
          color: var(--text-main);
          margin-top: 2px;
        }
        .highlight-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 2px;
        }
        .highlight-desc {
          font-size: 14px;
          color: var(--text-muted);
          line-height: 1.4;
        }
        .translation-disclaimer {
          background: var(--bg-light);
          padding: 12px 16px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .show-original-btn {
          font-size: 14px;
          font-weight: 600;
          text-decoration: underline;
        }
        .description-text {
          font-size: 16px;
          line-height: 1.55;
          color: var(--text-main);
          white-space: pre-line;
        }
        .description-text.collapsed {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .description-toggle-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          margin-top: 12px;
          font-size: 16px;
          font-weight: 600;
          text-decoration: underline;
          padding: 4px 0;
        }
        @media (max-width: 744px) {
          .guest-favourite-badge-card {
            flex-direction: column;
            gap: 16px;
          }
          .badge-divider-v {
            width: 100%;
            height: 1px;
            margin: 4px 0;
          }
        }
      `}</style>
    </div>
  );
};
