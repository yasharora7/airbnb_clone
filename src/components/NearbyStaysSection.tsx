import React from "react";
import { Star, Heart } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export const NearbyStaysSection: React.FC = () => {
  const { nearbyStays } = LISTING_DATA;
  const [page, setPage] = React.useState<number>(1);

  const totalPages = Math.ceil(nearbyStays.length / 4);
  const displayedStays = nearbyStays.slice((page - 1) * 4, page * 4);

  // Real mapped images that exist in public/images
  const getImageForStay = (id: string, originalImage: string) => {
    switch (id) {
      case "ns-1":
        return "/images/co1.jpg";
      case "ns-2":
        return "/images/co2.jpg";
      case "ns-3":
        return "/images/co3.jpg";
      case "ns-4":
        return "/images/nearby_4.jpg";
      case "ns-5":
        return "/images/nearby_5.jpg";
      case "ns-6":
        return "/images/nearby_6.jpg";
      case "ns-7":
        return "/images/nearby_7.jpg";
      case "ns-8":
        return "/images/nearby_8.jpg";
      default:
        return originalImage;
    }
  };

  return (
    <section className="nearby-stays-section">
      <div className="nearby-header-row">
        <h3 className="section-title">More stays nearby</h3>
        <div className="carousel-nav-controls">
          <span className="page-indicator">{page} / {totalPages}</span>
          <button
            className="carousel-arrow-btn"
            disabled={page === 1}
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            aria-label="Previous page"
          >
            ‹
          </button>
          <button
            className="carousel-arrow-btn"
            disabled={page === totalPages}
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            aria-label="Next page"
          >
            ›
          </button>
        </div>
      </div>

      <div className="nearby-stays-grid">
        {displayedStays.map((stay) => {
          const imgSrc = getImageForStay(stay.id, stay.image);
          return (
            <div key={stay.id} className="stay-card">
              <div className="stay-img-wrap">
                <img src={imgSrc} alt={stay.title} />
                <button className="stay-heart-btn" aria-label="Save stay">
                  <Heart size={18} color="#ffffff" strokeWidth={2.2} />
                </button>
              </div>

              <div className="stay-info">
                <div className="stay-title-rating">
                  <h4 className="stay-title truncate">{stay.title}</h4>
                  <div className="stay-rating">
                    <Star size={12} fill="#222222" color="#222222" />
                    <span>{stay.rating.toFixed(2)}</span>
                  </div>
                </div>
                <div className="stay-price-row">
                  <span className="stay-price-num">{stay.price}</span>
                  <span className="stay-price-sub">per night</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        .nearby-stays-section {
          padding: 48px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .nearby-header-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 24px;
        }
        .carousel-nav-controls {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .page-indicator {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
        }
        .carousel-arrow-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1px solid var(--border-light);
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 600;
          color: var(--text-main);
          cursor: pointer;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .carousel-arrow-btn:disabled {
          opacity: 0.35;
          cursor: not-allowed;
        }
        .carousel-arrow-btn:not(:disabled):hover {
          border-color: var(--text-main);
          box-shadow: 0 2px 4px rgba(0,0,0,0.12);
        }
        .stay-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .stay-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 1 / 0.95;
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #eee;
          margin-bottom: 12px;
        }
        .stay-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .stay-card:hover .stay-img-wrap img {
          transform: scale(1.04);
        }
        .stay-heart-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
          filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));
          transition: transform 0.15s ease;
        }
        .stay-heart-btn:hover {
          transform: scale(1.15);
        }
        .stay-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .stay-title-rating {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 8px;
        }
        .stay-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
          max-width: 80%;
        }
        .stay-rating {
          display: flex;
          align-items: center;
          gap: 3px;
          font-size: 14px;
          font-weight: 500;
        }
        .stay-location {
          font-size: 14px;
          color: var(--text-muted);
        }
        .stay-price-row {
          display: flex;
          align-items: baseline;
          gap: 4px;
          margin-top: 4px;
        }
        .stay-price-num {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }
        .stay-price-sub {
          font-size: 13px;
          color: var(--text-muted);
        }
        .truncate {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        @media (max-width: 1024px) {
          .nearby-stays-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 600px) {
          .nearby-stays-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
