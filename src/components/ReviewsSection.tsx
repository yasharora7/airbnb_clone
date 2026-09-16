import React, { useState } from 'react';
import { Star, Search, Sparkles } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const ReviewsSection: React.FC = () => {
  const { rating, reviewCount, ratingBreakdown, reviewTags, reviews } = LISTING_DATA;
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { label: 'Cleanliness', score: ratingBreakdown.cleanliness, icon: '✨' },
    { label: 'Accuracy', score: ratingBreakdown.accuracy, icon: '🎯' },
    { label: 'Check-in', score: ratingBreakdown.checkIn, icon: '🔑' },
    { label: 'Communication', score: ratingBreakdown.communication, icon: '💬' },
    { label: 'Location', score: ratingBreakdown.location, icon: '🗺️' },
    { label: 'Value', score: ratingBreakdown.value, icon: '🏷️' }
  ];

  const filteredReviews = reviews.filter((r) => {
    const matchesQuery =
      searchQuery === '' ||
      r.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.name.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesTag =
      !activeTag || r.comment.toLowerCase().includes(activeTag.toLowerCase());

    return matchesQuery && matchesTag;
  });

  return (
    <section id="reviews" className="reviews-section">
      {/* Guest Favourite Big Laurel Header */}
      <div className="reviews-hero-header">
        <img src="/images/laurel-left.png" alt="Laurel left" className="reviews-laurel-img" />
        <div className="reviews-hero-content">
          <span className="reviews-score-hero">{rating}</span>
          <div className="reviews-hero-subtitle">
            <span className="guest-fav-hero">Guest favourite</span>
            <span className="guest-fav-sub">
              This home is a guest favourite based on ratings, reviews and reliability
            </span>
            <button className="how-reviews-work-btn">How reviews work</button>
          </div>
        </div>
        <img src="/images/laurel-right.png" alt="Laurel right" className="reviews-laurel-img" />
      </div>

      {/* Overall Rating & 6 Column Subcategory Breakdown */}
      <div className="reviews-breakdown-row">
        {/* Left: Overall rating bar chart */}
        <div className="overall-rating-col">
          <h4 className="breakdown-col-title">Overall rating</h4>
          <div className="stars-dist-list">
            {[5, 4, 3, 2, 1].map((stars) => {
              const pct = stars === 5 ? 95 : stars === 4 ? 5 : 0;
              return (
                <div key={stars} className="star-dist-row">
                  <span className="star-num">{stars}</span>
                  <div className="star-bar-bg">
                    <div className="star-bar-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right: 6 Vertical Column Categories */}
        <div className="subcategory-cols-grid">
          <div className="subcat-col">
            <span className="subcat-title">Cleanliness</span>
            <span className="subcat-score">5.0</span>
            <div className="subcat-icon">
              <img src="/images/cleanliness.png" alt="Cleanliness" className="subcat-img-icon" />
            </div>
          </div>

          <div className="subcat-col">
            <span className="subcat-title">Accuracy</span>
            <span className="subcat-score">5.0</span>
            <div className="subcat-icon">
              <img src="/images/accuracy.png" alt="Accuracy" className="subcat-img-icon" />
            </div>
          </div>

          <div className="subcat-col">
            <span className="subcat-title">Check-in</span>
            <span className="subcat-score">5.0</span>
            <div className="subcat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"/>
              </svg>
            </div>
          </div>

          <div className="subcat-col">
            <span className="subcat-title">Communication</span>
            <span className="subcat-score">5.0</span>
            <div className="subcat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </div>
          </div>

          <div className="subcat-col">
            <span className="subcat-title">Location</span>
            <span className="subcat-score">4.8</span>
            <div className="subcat-icon">
              <img src="/images/location.png" alt="Location" className="subcat-img-icon" />
            </div>
          </div>

          <div className="subcat-col">
            <span className="subcat-title">Value</span>
            <span className="subcat-score">4.8</span>
            <div className="subcat-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="1.8">
                <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/>
                <line x1="7" y1="7" x2="7.01" y2="7"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Tag Filters */}
      <div className="reviews-filter-bar">
        <div className="reviews-search-box">
          <Search size={16} className="search-icon" />
          <input
            type="text"
            placeholder="Search reviews"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="reviews-search-input"
          />
        </div>

        <div className="review-tags-scroll">
          <button
            className={`tag-pill ${activeTag === null ? 'active' : ''}`}
            onClick={() => setActiveTag(null)}
          >
            All
          </button>
          {reviewTags.map((tag, idx) => (
            <button
              key={idx}
              className={`tag-pill ${activeTag === tag.label ? 'active' : ''}`}
              onClick={() => setActiveTag(activeTag === tag.label ? null : tag.label)}
            >
              <span>{tag.label}</span>
              <span className="tag-count">({tag.count})</span>
            </button>
          ))}
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="reviews-cards-grid">
        {filteredReviews.length > 0 ? (
          filteredReviews.map((r) => (
            <div key={r.id} className="review-card">
              <div className="review-user-row">
                {r.avatarImage ? (
                  <img src={r.avatarImage} alt={r.name} className="user-avatar-img" />
                ) : (
                  <div
                    className="user-avatar-circle"
                    style={{ backgroundColor: r.avatarColor || '#222' }}
                  >
                    {r.name.charAt(0)}
                  </div>
                )}
                <div className="user-meta-info">
                  <h4 className="user-name">{r.name}</h4>
                  <span className="user-duration">{r.duration}</span>
                </div>
              </div>

              <div className="review-rating-date-row">
                <div className="review-stars">★★★★★</div>
                <span className="dot-sep">·</span>
                <span className="review-date-text">{r.date}</span>
                <span className="dot-sep">·</span>
                <span className="stay-duration">Stayed a few nights</span>
              </div>

              <p className="review-body-text">{r.comment}</p>
            </div>
          ))
        ) : (
          <div className="no-reviews-found">
            <p>No reviews match your search filter.</p>
            <button className="btn-outline" onClick={() => { setActiveTag(null); setSearchQuery(''); }}>
              Reset filters
            </button>
          </div>
        )}
      </div>

      <div className="show-more-reviews-wrapper">
        <button className="btn-outline">
          Show all {reviewCount} reviews
        </button>
      </div>

      <style>{`
        .reviews-section {
          padding: 48px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .reviews-hero-header {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          margin-bottom: 40px;
          text-align: center;
        }
        .reviews-laurel-img {
          height: 64px;
          width: auto;
          object-fit: contain;
        }
        .user-avatar-img {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          object-fit: cover;
        }
        .reviews-hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .reviews-score-hero {
          font-size: 72px;
          font-weight: 800;
          line-height: 1;
          color: var(--text-main);
          letter-spacing: -2px;
        }
        .reviews-hero-subtitle {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 8px;
        }
        .guest-fav-hero {
          font-size: 22px;
          font-weight: 700;
          color: var(--text-main);
        }
        .guest-fav-sub {
          font-size: 14px;
          color: var(--text-muted);
          max-width: 440px;
          line-height: 1.4;
          margin-top: 4px;
        }
        .how-reviews-work-btn {
          font-size: 14px;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-main);
          margin-top: 8px;
        }
        .reviews-breakdown-row {
          display: grid;
          grid-template-columns: 240px 1fr;
          gap: 48px;
          padding-bottom: 40px;
          margin-bottom: 32px;
          border-bottom: 1px solid var(--border-subtle);
        }
        .overall-rating-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .breakdown-col-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }
        .stars-dist-list {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .star-dist-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 13px;
          color: var(--text-main);
        }
        .star-num {
          font-weight: 600;
          width: 8px;
        }
        .star-bar-bg {
          flex: 1;
          height: 4px;
          background: #EBEBEB;
          border-radius: 2px;
          overflow: hidden;
        }
        .star-bar-fill {
          height: 100%;
          background: var(--text-main);
          border-radius: 2px;
        }
        .subcategory-cols-grid {
          display: grid;
          grid-template-columns: repeat(6, 1fr);
          gap: 16px;
          border-left: 1px solid var(--border-subtle);
          padding-left: 32px;
        }
        .subcat-col {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
        }
        .subcat-title {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
        }
        .subcat-score {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-main);
        }
        .subcat-icon {
          margin-top: 12px;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .subcat-img-icon {
          width: 28px;
          height: 28px;
          object-fit: contain;
        }
        .reviews-filter-bar {
          display: flex;
          flex-direction: column;
          gap: 16px;
          margin-bottom: 32px;
        }
        .reviews-search-box {
          position: relative;
          max-width: 320px;
        }
        .search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .reviews-search-input {
          width: 100%;
          padding: 12px 16px 12px 40px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-pill);
          font-size: 14px;
          outline: none;
          background: #F7F7F7;
          transition: border-color 0.2s ease, background 0.2s ease;
        }
        .reviews-search-input:focus {
          border-color: var(--text-main);
          background: #ffffff;
        }
        .review-tags-scroll {
          display: flex;
          align-items: center;
          gap: 8px;
          overflow-x: auto;
          padding-bottom: 4px;
        }
        .tag-pill {
          padding: 8px 16px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-pill);
          font-size: 13px;
          font-weight: 500;
          white-space: nowrap;
          color: var(--text-main);
          background: #ffffff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
          gap: 4px;
        }
        .tag-pill:hover {
          border-color: var(--text-main);
        }
        .tag-pill.active {
          background: #222222;
          color: #ffffff;
          border-color: #222222;
        }
        .tag-count {
          opacity: 0.7;
          font-size: 11px;
        }
        .reviews-cards-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px 48px;
          margin-bottom: 32px;
        }
        .review-card {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .review-user-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .user-avatar-circle {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 18px;
        }
        .user-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .user-duration {
          font-size: 13px;
          color: var(--text-muted);
        }
        .review-rating-date-row {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--text-muted);
        }
        .review-stars {
          color: var(--text-main);
          font-size: 9px;
          letter-spacing: 1px;
        }
        .review-body-text {
          font-size: 15px;
          line-height: 1.5;
          color: var(--text-main);
        }
        .no-reviews-found {
          grid-column: 1 / -1;
          padding: 40px;
          text-align: center;
          background: #F7F7F7;
          border-radius: var(--radius-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        .show-more-reviews-wrapper {
          padding-top: 16px;
        }
        @media (max-width: 744px) {
          .rating-categories-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .reviews-cards-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};
