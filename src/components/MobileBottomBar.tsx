import React from "react";
import { LISTING_DATA } from "../data/listingData";

interface MobileBottomBarProps {
  onReserve: () => void;
  pricePerNight: number;
  datesText: string;
}

export const MobileBottomBar: React.FC<MobileBottomBarProps> = ({
  onReserve,
  pricePerNight,
  datesText,
}) => {
  return (
    <div className="mobile-bottom-bar">
      <div className="mobile-bottom-content">
        <div className="mobile-price-col">
          <div className="mobile-price-line">
            <span className="mobile-price-val">
              ₹{pricePerNight.toLocaleString("en-IN")}
            </span>
            <span className="mobile-price-sub">night</span>
          </div>
          <span className="mobile-dates-sub">{datesText}</span>
        </div>

        <button className="btn-reserve mobile-reserve-btn" onClick={onReserve}>
          Reserve
        </button>
      </div>

      <style>{`
        .mobile-bottom-bar {
          display: none;
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          background: #ffffff;
          border-top: 1px solid var(--border-light);
          padding: 12px 16px 16px;
          z-index: 80;
          box-shadow: 0 -4px 12px rgba(0,0,0,0.08);
        }
        .mobile-bottom-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          max-width: 680px;
          margin: 0 auto;
          min-height: 54px;
        }
        .mobile-price-col {
          display: flex;
          flex-direction: column;
          min-width: 0;
        }
        .mobile-price-line {
          display: flex;
          align-items: baseline;
          gap: 4px;
          line-height: 1.2;
        }
        .mobile-price-val {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-main);
        }
        .mobile-price-sub {
          font-size: 14px;
          color: var(--text-muted);
        }
        .mobile-dates-sub {
          font-size: 12px;
          color: var(--text-main);
          text-decoration: underline;
          font-weight: 600;
        }
        .mobile-reserve-btn {
          width: auto;
          min-width: 140px;
          padding: 12px 22px;
          font-size: 15px;
          border-radius: 14px;
        }
        @media (max-width: 744px) {
          .mobile-bottom-bar {
            display: block;
          }
        }
      `}</style>
    </div>
  );
};
