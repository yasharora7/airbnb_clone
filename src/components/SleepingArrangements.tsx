import React from 'react';
import { LISTING_DATA } from '../data/listingData';

export const SleepingArrangements: React.FC = () => {
  const { sleepingArrangements } = LISTING_DATA;

  return (
    <div className="sleeping-arrangements-section">
      <h3 className="section-title">Where you'll sleep</h3>

      <div className="sleeping-cards-grid">
        {sleepingArrangements.map((item, idx) => (
          <div key={idx} className="sleeping-card">
            <div className="sleeping-img-wrap">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="sleeping-card-info">
              <h4 className="sleeping-room-name">{item.title}</h4>
              <p className="sleeping-bed-type">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .sleeping-arrangements-section {
          padding: 24px 0 32px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .section-title {
          font-size: 22px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 24px;
        }
        .sleeping-cards-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 16px;
        }
        .sleeping-card {
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          overflow: hidden;
          background: #fff;
          transition: box-shadow 0.2s ease;
        }
        .sleeping-card:hover {
          box-shadow: var(--shadow-sm);
        }
        .sleeping-img-wrap {
          height: 140px;
          width: 100%;
          background: #eee;
          overflow: hidden;
        }
        .sleeping-img-wrap img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .sleeping-card-info {
          padding: 16px;
        }
        .sleeping-room-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
          margin-bottom: 4px;
        }
        .sleeping-bed-type {
          font-size: 14px;
          color: var(--text-muted);
        }
      `}</style>
    </div>
  );
};
