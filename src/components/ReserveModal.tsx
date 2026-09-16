import React, { useState, useEffect } from 'react';
import { X, CheckCircle, ShieldCheck, CreditCard, ChevronRight } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface ReserveModalProps {
  isOpen: boolean;
  onClose: () => void;
  nights: number;
  checkIn: string;
  checkOut: string;
  totalGuests: number;
}

export const ReserveModal: React.FC<ReserveModalProps> = ({
  isOpen,
  onClose,
  nights,
  checkIn,
  checkOut,
  totalGuests
}) => {
  const [isBooked, setIsBooked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsBooked(false);
      setIsLoading(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const pricePerNight = LISTING_DATA.pricePerNight;
  const stayNights = nights || LISTING_DATA.defaultNights;
  const basePrice = pricePerNight * stayNights;
  const cleaningFee = 1500;
  const serviceFee = Math.round(basePrice * 0.12);
  const total = basePrice + cleaningFee + serviceFee;

  const handleConfirmReservation = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setIsBooked(true);
    }, 1200);
  };

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content reserve-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close checkout">
            <X size={18} />
          </button>
          <h3 className="modal-title">{isBooked ? 'Reservation Confirmed!' : 'Request to book'}</h3>
          <div style={{ width: 28 }} />
        </div>

        <div className="reserve-modal-body">
          {isBooked ? (
            <div className="booking-success-state">
              <CheckCircle size={64} color="#008A05" className="success-icon" />
              <h2 className="success-title">You're going to Goa!</h2>
              <p className="success-desc">
                Your reservation at <strong>{LISTING_DATA.title}</strong> is confirmed for {stayNights} nights.
              </p>

              <div className="success-receipt-card">
                <div className="receipt-row">
                  <span className="receipt-label">Dates</span>
                  <span className="receipt-val">{checkIn} – {checkOut}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Guests</span>
                  <span className="receipt-val">{totalGuests} guests</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Total paid</span>
                  <span className="receipt-val bold">₹{total.toLocaleString('en-IN')}</span>
                </div>
                <div className="receipt-row">
                  <span className="receipt-label">Confirmation code</span>
                  <span className="receipt-val code">HMGOA{Math.floor(100000 + Math.random() * 900000)}</span>
                </div>
              </div>

              <button className="btn-reserve" onClick={onClose}>
                Done
              </button>
            </div>
          ) : (
            <div className="checkout-content-grid">
              {/* Left col: Trip info & payment */}
              <div className="checkout-left">
                <div className="trip-section">
                  <h4 className="checkout-subheading">Your trip</h4>
                  <div className="trip-info-row">
                    <div>
                      <span className="trip-item-title">Dates</span>
                      <p className="trip-item-sub">{checkIn} – {checkOut}</p>
                    </div>
                  </div>
                  <div className="trip-info-row">
                    <div>
                      <span className="trip-item-title">Guests</span>
                      <p className="trip-item-sub">{totalGuests} guests</p>
                    </div>
                  </div>
                </div>

                <div className="payment-method-box">
                  <h4 className="checkout-subheading">Pay with</h4>
                  <div className="payment-option selected">
                    <CreditCard size={20} />
                    <span className="payment-card-name">Credit or debit card</span>
                    <span className="card-badge">Instant</span>
                  </div>
                </div>

                <div className="cancellation-policy-box">
                  <h4 className="checkout-subheading">Cancellation policy</h4>
                  <p className="cancel-note">
                    <strong>Free cancellation before {LISTING_DATA.cancellationDate}.</strong> Cancel before check-in for a partial refund.
                  </p>
                </div>

                <div className="ground-rules-box">
                  <h4 className="checkout-subheading">Ground rules</h4>
                  <p className="rules-note">
                    We ask every guest to remember a few simple things: follow the house rules, treat the Host's home like your own.
                  </p>
                </div>

                <button
                  className="btn-reserve btn-confirm-pay"
                  onClick={handleConfirmReservation}
                  disabled={isLoading}
                >
                  {isLoading ? 'Processing booking...' : `Confirm and Pay · ₹${total.toLocaleString('en-IN')}`}
                </button>
              </div>

              {/* Right col: Listing card & Price breakdown */}
              <div className="checkout-right">
                <div className="checkout-listing-card">
                  <img
                    src={LISTING_DATA.heroPhotos[0].url}
                    alt={LISTING_DATA.title}
                    className="checkout-listing-img"
                  />
                  <div className="checkout-listing-meta">
                    <span className="listing-type-tag">Entire apartment</span>
                    <h5 className="checkout-listing-name">{LISTING_DATA.title}</h5>
                    <span className="checkout-rating-sub">
                      ★ {LISTING_DATA.rating} ({LISTING_DATA.reviewCount} reviews) · Superhost
                    </span>
                  </div>
                </div>

                <div className="price-details-summary">
                  <h4 className="price-summary-title">Price details</h4>
                  <div className="price-line">
                    <span>₹{pricePerNight.toLocaleString('en-IN')} x {stayNights} nights</span>
                    <span>₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="price-line">
                    <span>Cleaning fee</span>
                    <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="price-line">
                    <span>Airbnb service fee</span>
                    <span>₹{serviceFee.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="price-line-divider"></div>
                  <div className="price-line total">
                    <span>Total (INR)</span>
                    <span>₹{total.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .reserve-modal-box {
          max-width: 820px;
          border-radius: var(--radius-xl);
        }
        .reserve-modal-body {
          padding: 24px 32px 32px;
          max-height: 80vh;
          overflow-y: auto;
        }
        .checkout-content-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 40px;
        }
        .checkout-subheading {
          font-size: 18px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 12px;
        }
        .trip-section {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }
        .trip-info-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 8px 0;
        }
        .trip-item-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }
        .trip-item-sub {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 2px;
        }
        .payment-method-box {
          padding-bottom: 20px;
          border-bottom: 1px solid var(--border-subtle);
          margin-bottom: 20px;
        }
        .payment-option {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 2px solid var(--text-main);
          border-radius: var(--radius-md);
          background: #ffffff;
        }
        .payment-card-name {
          font-size: 14px;
          font-weight: 600;
          flex: 1;
        }
        .card-badge {
          font-size: 11px;
          font-weight: 700;
          padding: 2px 6px;
          border-radius: 4px;
          background: #E8F5E9;
          color: #2E7D32;
        }
        .cancellation-policy-box, .ground-rules-box {
          margin-bottom: 20px;
        }
        .cancel-note, .rules-note {
          font-size: 14px;
          color: var(--text-sub);
          line-height: 1.45;
        }
        .btn-confirm-pay {
          margin-top: 12px;
          font-size: 16px;
          padding: 16px;
        }
        .checkout-right {
          background: #F7F7F7;
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          height: fit-content;
        }
        .checkout-listing-card {
          display: flex;
          gap: 16px;
          align-items: center;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
        }
        .checkout-listing-img {
          width: 90px;
          height: 90px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .listing-type-tag {
          font-size: 12px;
          color: var(--text-muted);
        }
        .checkout-listing-name {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.3;
          margin: 2px 0 4px;
        }
        .checkout-rating-sub {
          font-size: 12px;
          color: var(--text-main);
          font-weight: 500;
        }
        .price-summary-title {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .price-details-summary {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .price-line {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: var(--text-main);
        }
        .price-line-divider {
          height: 1px;
          background: var(--border-light);
          margin: 6px 0;
        }
        .price-line.total {
          font-size: 16px;
          font-weight: 700;
        }
        .booking-success-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 24px 0;
        }
        .success-icon {
          margin-bottom: 16px;
        }
        .success-title {
          font-size: 28px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 8px;
        }
        .success-desc {
          font-size: 16px;
          color: var(--text-muted);
          max-width: 480px;
          line-height: 1.4;
          margin-bottom: 24px;
        }
        .success-receipt-card {
          width: 100%;
          max-width: 440px;
          background: #F7F7F7;
          border-radius: var(--radius-md);
          padding: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-bottom: 24px;
          text-align: left;
        }
        .receipt-row {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
        }
        .receipt-label {
          color: var(--text-muted);
        }
        .receipt-val {
          color: var(--text-main);
          font-weight: 500;
        }
        .receipt-val.bold {
          font-weight: 700;
        }
        .receipt-val.code {
          font-family: monospace;
          font-weight: 700;
          letter-spacing: 1px;
          color: #FF385C;
        }
        @media (max-width: 744px) {
          .checkout-content-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};
