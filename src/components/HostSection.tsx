import React from 'react';
import { Star, ShieldCheck, GraduationCap, Clock, MessageSquare } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

export const HostSection: React.FC = () => {
  const { host } = LISTING_DATA;

  return (
    <section className="host-section">
      <h3 className="section-title">Meet your Host</h3>

      <div className="host-profile-layout">
        {/* Left: Host identity card */}
        <div className="host-id-card">
          <div className="host-avatar-badge-col">
            <div className="avatar-wrapper">
              <img src={host.avatar} alt={host.name} className="host-avatar-lg" />
              <div className="superhost-badge-icon" title="Superhost">
                <ShieldCheck size={18} fill="#FF385C" color="#FFFFFF" />
              </div>
            </div>
            <h4 className="host-card-name">{host.name}</h4>
            <span className="host-type-label">Superhost</span>
          </div>

          <div className="host-stats-col">
            <div className="stat-item">
              <span className="stat-number">{host.reviewCount}</span>
              <span className="stat-label">Reviews</span>
            </div>
            <div className="stat-item-divider"></div>
            <div className="stat-item">
              <div className="stat-rating-row">
                <span className="stat-number">{host.rating}</span>
                <Star size={12} fill="#222222" color="#222222" />
              </div>
              <span className="stat-label">Rating</span>
            </div>
            <div className="stat-item-divider"></div>
            <div className="stat-item">
              <span className="stat-number">{host.yearsHosting}</span>
              <span className="stat-label">Years hosting</span>
            </div>
          </div>
        </div>

        {/* Right: Host info & Co-hosts */}
        <div className="host-details-col">
          <div className="host-info-bullets">
            <div className="host-info-bullet">
              <span>Born in the 80s</span>
            </div>
            <div className="host-info-bullet">
              <GraduationCap size={20} className="info-icon" />
              <span>Where I went to school: {host.school}</span>
            </div>
            <div className="host-info-bullet">
              <Clock size={20} className="info-icon" />
              <span>Response rate: {host.responseRate}</span>
            </div>
            <div className="host-info-bullet">
              <MessageSquare size={20} className="info-icon" />
              <span>Responds {host.responseTime}</span>
            </div>
          </div>

          {/* Co-hosts section */}
          <div className="co-hosts-section">
            <h5 className="co-hosts-title">Co-Hosts</h5>
            <div className="co-hosts-3col-grid">
              {host.coHosts.map((co, idx) => (
                <div key={idx} className="co-host-item-row">
                  <span className="co-host-avatar">{co.name.charAt(0)}</span>
                  <span className="co-host-name">{co.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="host-action-row">
            <button className="btn-outline">Message host</button>
          </div>

          <div className="aircover-protection-note">
            <ShieldCheck size={18} color="#717171" />
            <p>
              To help protect your payment, always use Airbnb to send money and communicate with hosts.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        .host-section {
          padding: 48px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .host-profile-layout {
          display: grid;
          grid-template-columns: 340px 1fr;
          gap: 64px;
          margin-top: 24px;
          align-items: flex-start;
        }
        .host-id-card {
          border-radius: var(--radius-xl);
          background: #ffffff;
          box-shadow: var(--shadow-md);
          padding: 32px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border: 1px solid var(--border-subtle);
        }
        .host-avatar-badge-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          flex: 1;
        }
        .avatar-wrapper {
          position: relative;
          margin-bottom: 12px;
        }
        .host-avatar-lg {
          width: 96px;
          height: 96px;
          border-radius: 50%;
          object-fit: cover;
        }
        .superhost-badge-icon {
          position: absolute;
          bottom: 2px;
          right: 2px;
          background: #ffffff;
          border-radius: 50%;
          padding: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .host-card-name {
          font-size: 20px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 2px;
        }
        .host-type-label {
          font-size: 13px;
          color: var(--text-muted);
          font-weight: 500;
        }
        .host-stats-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding-left: 20px;
          border-left: 1px solid var(--border-subtle);
        }
        .stat-item {
          display: flex;
          flex-direction: column;
        }
        .stat-number {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-main);
        }
        .stat-rating-row {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .stat-label {
          font-size: 11px;
          color: var(--text-muted);
        }
        .stat-item-divider {
          height: 1px;
          background: var(--border-subtle);
        }
        .host-details-col {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .host-info-bullets {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .host-info-bullet {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 16px;
          color: var(--text-main);
        }
        .info-icon {
          color: var(--text-main);
          flex-shrink: 0;
        }
        .host-bio-text {
          font-size: 15px;
          line-height: 1.5;
          color: var(--text-sub);
        }
        .co-hosts-section {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .co-hosts-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
        }
        .co-hosts-3col-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px 24px;
        }
        .co-host-item-row {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 14px;
          color: var(--text-main);
          font-weight: 500;
        }
        .co-host-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #222222;
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 13px;
          font-weight: 700;
          flex-shrink: 0;
        }
        .aircover-protection-note {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 12px;
          color: var(--text-muted);
          line-height: 1.4;
          margin-top: 12px;
          padding-top: 16px;
          border-top: 1px solid var(--border-subtle);
        }
        @media (max-width: 860px) {
          .host-profile-layout {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}</style>
    </section>
  );
};
