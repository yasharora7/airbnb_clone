import React, { useState } from 'react';
import { Star, ChevronDown, ChevronUp, Flag, Minus, Plus } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface BookingCardProps {
  onReserve: () => void;
  selectedNights: number;
  checkInDate: string;
  checkOutDate: string;
  adultsCount: number;
  childrenCount: number;
  infantsCount: number;
  petsCount: number;
  onUpdateGuests: (adults: number, children: number, infants: number, pets: number) => void;
  onOpenDatePicker?: () => void;
}

export const BookingCard: React.FC<BookingCardProps> = ({
  onReserve,
  selectedNights,
  checkInDate,
  checkOutDate,
  adultsCount,
  childrenCount,
  infantsCount,
  petsCount,
  onUpdateGuests,
  onOpenDatePicker
}) => {
  const [isGuestDropdownOpen, setIsGuestDropdownOpen] = useState(false);

  const pricePerNight = LISTING_DATA.pricePerNight;
  const nights = selectedNights || LISTING_DATA.defaultNights;
  const basePrice = pricePerNight * nights;
  const cleaningFee = 1500;
  const serviceFee = Math.round(basePrice * 0.12);
  const totalPrice = basePrice + cleaningFee + serviceFee;

  const totalGuests = adultsCount + childrenCount;
  const guestLabel = `${totalGuests} guest${totalGuests > 1 ? 's' : ''}${
    infantsCount > 0 ? `, ${infantsCount} infant${infantsCount > 1 ? 's' : ''}` : ''
  }${petsCount > 0 ? `, ${petsCount} pet${petsCount > 1 ? 's' : ''}` : ''}`;

  return (
    <aside className="booking-card-wrapper" id="booking-sidebar">
      <div className="booking-card">
        {/* Top Header: Price & Rating */}
        <div className="booking-card-header">
          <div className="booking-price-line">
            <span className="booking-price-amount">₹{pricePerNight.toLocaleString('en-IN')}</span>
            <span className="booking-price-unit">night</span>
          </div>

          <div className="booking-rating-badge">
            <Star size={14} fill="#222222" color="#222222" />
            <span className="rating-score">{LISTING_DATA.rating}</span>
            <span className="dot-sep">·</span>
            <span className="review-link">{LISTING_DATA.reviewCount} reviews</span>
          </div>
        </div>

        {/* Inputs Box: Dates & Guests */}
        <div className="booking-inputs-box">
          <div className="booking-dates-row" onClick={onOpenDatePicker} role="button" tabIndex={0}>
            <div className="date-input-cell border-right">
              <span className="input-cell-label">CHECK-IN</span>
              <span className="input-cell-val">{checkInDate}</span>
            </div>
            <div className="date-input-cell">
              <span className="input-cell-label">CHECKOUT</span>
              <span className="input-cell-val">{checkOutDate}</span>
            </div>
          </div>

          <div className="booking-guests-row">
            <button
              type="button"
              className="guest-picker-btn"
              onClick={() => setIsGuestDropdownOpen(!isGuestDropdownOpen)}
              aria-expanded={isGuestDropdownOpen}
            >
              <div className="guest-info-col">
                <span className="input-cell-label">GUESTS</span>
                <span className="input-cell-val truncate">{guestLabel}</span>
              </div>
              {isGuestDropdownOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
            </button>

            {/* Guests Popover Dropdown */}
            {isGuestDropdownOpen && (
              <div className="guest-dropdown-menu">
                {/* Adults */}
                <div className="guest-type-row">
                  <div className="guest-type-info">
                    <span className="guest-type-title">Adults</span>
                    <span className="guest-type-sub">Age 13+</span>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={adultsCount <= 1}
                      onClick={() => onUpdateGuests(adultsCount - 1, childrenCount, infantsCount, petsCount)}
                      aria-label="Decrease adults"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{adultsCount}</span>
                    <button
                      className="counter-btn"
                      disabled={adultsCount + childrenCount >= 3}
                      onClick={() => onUpdateGuests(adultsCount + 1, childrenCount, infantsCount, petsCount)}
                      aria-label="Increase adults"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="guest-type-row">
                  <div className="guest-type-info">
                    <span className="guest-type-title">Children</span>
                    <span className="guest-type-sub">Ages 2–12</span>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={childrenCount <= 0}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount - 1, infantsCount, petsCount)}
                      aria-label="Decrease children"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{childrenCount}</span>
                    <button
                      className="counter-btn"
                      disabled={adultsCount + childrenCount >= 3}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount + 1, infantsCount, petsCount)}
                      aria-label="Increase children"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Infants */}
                <div className="guest-type-row">
                  <div className="guest-type-info">
                    <span className="guest-type-title">Infants</span>
                    <span className="guest-type-sub">Under 2</span>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={infantsCount <= 0}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount, infantsCount - 1, petsCount)}
                      aria-label="Decrease infants"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{infantsCount}</span>
                    <button
                      className="counter-btn"
                      disabled={infantsCount >= 2}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount, infantsCount + 1, petsCount)}
                      aria-label="Increase infants"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* Pets */}
                <div className="guest-type-row">
                  <div className="guest-type-info">
                    <span className="guest-type-title">Pets</span>
                    <span className="guest-type-sub">Bringing a service animal?</span>
                  </div>
                  <div className="counter-controls">
                    <button
                      className="counter-btn"
                      disabled={petsCount <= 0}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount, infantsCount, petsCount - 1)}
                      aria-label="Decrease pets"
                    >
                      <Minus size={14} />
                    </button>
                    <span className="counter-val">{petsCount}</span>
                    <button
                      className="counter-btn"
                      disabled={petsCount >= 2}
                      onClick={() => onUpdateGuests(adultsCount, childrenCount, infantsCount, petsCount + 1)}
                      aria-label="Increase pets"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                <div className="guest-dropdown-footer">
                  <span className="max-guests-note">This place has a maximum of 3 guests, not including infants. Pets allowed.</span>
                  <button
                    className="guest-close-btn"
                    onClick={() => setIsGuestDropdownOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Reserve Button */}
        <button className="btn-reserve booking-reserve-btn" onClick={onReserve}>
          Reserve
        </button>

        <p className="no-charge-text">You won't be charged yet</p>

        {/* Price Breakdown Calculation */}
        <div className="price-breakdown">
          <div className="breakdown-row">
            <span className="breakdown-label">
              ₹{pricePerNight.toLocaleString('en-IN')} x {nights} nights
            </span>
            <span className="breakdown-val">₹{basePrice.toLocaleString('en-IN')}</span>
          </div>

          <div className="breakdown-row">
            <span className="breakdown-label">Cleaning fee</span>
            <span className="breakdown-val">₹{cleaningFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="breakdown-row">
            <span className="breakdown-label">Airbnb service fee</span>
            <span className="breakdown-val">₹{serviceFee.toLocaleString('en-IN')}</span>
          </div>

          <div className="breakdown-divider"></div>

          <div className="breakdown-row total-row">
            <span className="total-label">Total before taxes</span>
            <span className="total-amount">₹{totalPrice.toLocaleString('en-IN')}</span>
          </div>
        </div>
      </div>

      {/* Report this listing banner */}
      <div className="report-listing-wrap">
        <button className="report-listing-btn">
          <Flag size={14} />
          <span>Report this listing</span>
        </button>
      </div>

      <style>{`
        .booking-card-wrapper {
          position: sticky;
          top: 104px;
          margin-bottom: 40px;
        }
        .booking-card {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          padding: 24px;
          background: #ffffff;
          box-shadow: var(--shadow-md);
        }
        .booking-card-header {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .booking-price-line {
          display: flex;
          align-items: baseline;
          gap: 4px;
        }
        .booking-price-amount {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-main);
        }
        .booking-price-unit {
          font-size: 15px;
          color: var(--text-muted);
        }
        .booking-rating-badge {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 13px;
        }
        .rating-score {
          font-weight: 700;
          color: var(--text-main);
        }
        .review-link {
          color: var(--text-muted);
          text-decoration: underline;
        }
        .booking-inputs-box {
          border: 1px solid #B0B0B0;
          border-radius: var(--radius-sm);
          margin-bottom: 16px;
          background: #ffffff;
          position: relative;
        }
        .booking-dates-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-bottom: 1px solid #B0B0B0;
          cursor: pointer;
        }
        .date-input-cell {
          padding: 10px 12px;
          display: flex;
          flex-direction: column;
        }
        .date-input-cell.border-right {
          border-right: 1px solid #B0B0B0;
        }
        .input-cell-label {
          font-size: 9px;
          font-weight: 800;
          letter-spacing: 0.5px;
          color: var(--text-main);
          margin-bottom: 2px;
        }
        .input-cell-val {
          font-size: 13px;
          color: var(--text-main);
          font-weight: 500;
        }
        .guest-picker-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 12px;
          text-align: left;
          background: transparent;
        }
        .guest-info-col {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        .guest-dropdown-menu {
          position: absolute;
          top: 100%;
          left: -1px;
          right: -1px;
          background: #ffffff;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-sm);
          box-shadow: var(--shadow-lg);
          padding: 16px;
          z-index: 50;
          margin-top: 4px;
        }
        .guest-type-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 0;
          border-bottom: 1px solid var(--border-subtle);
        }
        .guest-type-row:last-of-type {
          border-bottom: none;
        }
        .guest-type-info {
          display: flex;
          flex-direction: column;
        }
        .guest-type-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }
        .guest-type-sub {
          font-size: 12px;
          color: var(--text-muted);
        }
        .counter-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .counter-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid #B0B0B0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
        }
        .counter-btn:disabled {
          border-color: #EBEBEB;
          color: #CCCCCC;
          cursor: not-allowed;
        }
        .counter-btn:not(:disabled):hover {
          border-color: var(--text-main);
        }
        .counter-val {
          font-size: 15px;
          min-width: 16px;
          text-align: center;
          font-weight: 600;
        }
        .guest-dropdown-footer {
          margin-top: 12px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .max-guests-note {
          font-size: 11px;
          color: var(--text-muted);
          line-height: 1.3;
        }
        .guest-close-btn {
          align-self: flex-end;
          font-size: 14px;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-main);
          padding: 6px 0;
        }
        .booking-reserve-btn {
          width: 100%;
          padding: 14px;
          font-size: 16px;
          margin-bottom: 12px;
        }
        .no-charge-text {
          text-align: center;
          font-size: 13px;
          color: var(--text-muted);
          margin-bottom: 20px;
        }
        .price-breakdown {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .breakdown-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 15px;
          color: var(--text-main);
        }
        .breakdown-label {
          text-decoration: underline;
        }
        .breakdown-divider {
          height: 1px;
          background: var(--border-light);
          margin: 4px 0;
        }
        .breakdown-row.total-row {
          font-size: 16px;
          font-weight: 700;
          padding-top: 4px;
        }
        .total-label {
          text-decoration: none;
        }
        .total-amount {
          font-weight: 700;
        }
        .report-listing-wrap {
          text-align: center;
          margin-top: 20px;
        }
        .report-listing-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: var(--text-muted);
          text-decoration: underline;
        }
        .report-listing-btn:hover {
          color: var(--text-main);
        }
      `}</style>
    </aside>
  );
};
