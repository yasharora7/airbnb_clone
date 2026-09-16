import React from "react";
import { Star, Heart } from "lucide-react";
import { LISTING_DATA } from "../data/listingData";

export const NearbyStaysSection: React.FC = () => {
  const { nearbyStays } = LISTING_DATA;
  const [page, setPage] = React.useState<number>(1);

  const totalPages = Math.ceil(nearbyStays.length / 5);
  const displayedStays = nearbyStays.slice((page - 1) * 5, page * 5);

  const getS1ToS6Image = (idx: number) => {
    const num = (idx % 6) + 1;
    return `/images/s${num}.jpeg`;
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
        {displayedStays.map((stay, indexInPage) => {
          const globalIndex = (page - 1) * 5 + indexInPage;
          const imgSrc = getS1ToS6Image(globalIndex);
          return (
            <div key={stay.id} className="stay-card">
              <div className="stay-img-wrap">
                <img src={imgSrc} alt={stay.title} />
              </div>

              <div className="stay-info">
                <h4 className="stay-title">{stay.title}</h4>
                <div className="stay-price-rating-row">
                  <span className="stay-price-num">{stay.price}</span>
                  <span className="stay-rating-inline">
                    <span className="star-symbol">★</span> {stay.rating.toFixed(2)}
                  </span>
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
        .section-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-main);
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
        .nearby-stays-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }
        .stay-card {
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }
        .stay-img-wrap {
          width: 100%;
          aspect-ratio: 1 / 0.88;
          border-radius: 16px;
          overflow: hidden;
          background: #eee;
          margin-bottom: 10px;
        }
        .stay-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }
        .stay-card:hover .stay-img-wrap img {
          transform: scale(1.03);
        }
        .stay-info {
          display: flex;
          flex-direction: column;
        }
        .stay-title {
          font-size: 14px;
          font-weight: 500;
          line-height: 1.35;
          color: var(--text-main);
          margin-bottom: 4px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .stay-price-rating-row {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
        }
        .stay-price-num {
          font-weight: 600;
          color: var(--text-main);
        }
        .stay-rating-inline {
          font-weight: 500;
          color: var(--text-main);
          display: flex;
          align-items: center;
          gap: 3px;
        }
        .star-symbol {
          font-size: 12px;
        }
        @media (max-width: 1100px) {
          .nearby-stays-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 650px) {
          .nearby-stays-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};
