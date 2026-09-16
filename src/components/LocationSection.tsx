import React, { useState } from "react";
import { MapPin, ChevronRight, Compass } from "lucide-react";

export const LocationSection: React.FC = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="location" className="location-section">
      <h3 className="section-title">Where you'll be</h3>
      <p className="location-subtitle">Candolim, Goa, India</p>

      {/* Map Preview Card with Custom Pin */}
      <div className="map-card-wrapper">
        <img
          src="/images/location.png"
          alt="Map showing Candolim, Goa"
          className="map-image-display"
        />
        <div className="custom-map-pin">
          <div className="pin-highlight-zone"></div>
          <div className="pin-center-circle">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </div>
        </div>
        <div className="map-zoom-controls">
          <button className="zoom-btn">+</button>
          <button className="zoom-btn">−</button>
        </div>
      </div>

      <p className="exact-location-text">Exact location will be provided after booking.</p>

      {/* Neighborhood info */}
      <div className="location-description-box">
        <h4 className="neighborhood-title">Neighbourhood highlights</h4>
        <p className={`neighborhood-text ${showMore ? "expanded" : ""}`}>
          Located in the heart of Candolim, Amor de Goa offers a peaceful stay with easy access to beaches, cafés, and popular attractions.
        </p>
        <button
          className="show-more-loc-btn"
          onClick={() => setShowMore(!showMore)}
        >
          <span>{showMore ? "Show less" : "Show more"}</span>
          <ChevronRight size={16} />
        </button>
      </div>

      <style>{`
        .location-section {
          padding: 48px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .location-subtitle {
          font-size: 16px;
          color: var(--text-main);
          margin-top: 4px;
          margin-bottom: 24px;
          font-weight: 500;
        }
        .map-card-wrapper {
          position: relative;
          width: 100%;
          height: 380px;
          border-radius: var(--radius-lg);
          overflow: hidden;
          background: #e5e3df;
          box-shadow: var(--shadow-sm);
          margin-bottom: 24px;
        }
        .map-image-display {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .custom-map-pin {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .pin-highlight-zone {
          position: absolute;
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: rgba(34, 34, 34, 0.08);
          border: 1px solid rgba(34, 34, 34, 0.15);
        }
        .pin-center-circle {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background: #222222;
          box-shadow: 0 4px 14px rgba(0,0,0,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }
        .exact-location-text {
          font-size: 15px;
          color: var(--text-main);
          margin-bottom: 24px;
        }
        .pin-icon {
          font-size: 20px;
        }
        .map-zoom-controls {
          position: absolute;
          top: 16px;
          right: 16px;
          display: flex;
          flex-direction: column;
          background: #ffffff;
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-md);
          overflow: hidden;
        }
        .zoom-btn {
          width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-main);
          background: #ffffff;
        }
        .zoom-btn:first-child {
          border-bottom: 1px solid var(--border-subtle);
        }
        .zoom-btn:hover {
          background: var(--bg-light);
        }
        .location-description-box {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .neighborhood-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .neighborhood-text {
          font-size: 15px;
          line-height: 1.5;
          color: var(--text-sub);
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .neighborhood-text.expanded {
          display: block;
          -webkit-line-clamp: unset;
        }
        .show-more-loc-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-main);
          margin-top: 4px;
        }
      `}</style>
    </section>
  );
};
