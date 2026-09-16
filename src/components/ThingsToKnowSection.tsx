import React from "react";
import {
  Clock,
  Users,
  PawPrint,
  Cctv,
  ShieldAlert,
  BellRing,
  CalendarX,
  ChevronRight,
} from "lucide-react";

export const ThingsToKnowSection: React.FC = () => {
  return (
    <section className="things-to-know-section">
      <h3 className="section-title">Things to know</h3>

      <div className="things-grid">
        {/* Col 1: Cancellation policy */}
        <div className="thing-col">
          <h4 className="thing-col-title">Cancellation policy</h4>
          <ul className="thing-list">
            <li className="thing-item-text">
              <span>
                Free cancellation before 17 October. Cancel before check-in on 18 October for a partial refund.
              </span>
            </li>
            <li className="thing-item-text">
              <span>Review this host's full policy for details.</span>
            </li>
          </ul>
          <button className="thing-more-btn">
            <span>Learn more</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Col 2: House rules */}
        <div className="thing-col">
          <h4 className="thing-col-title">House rules</h4>
          <ul className="thing-list">
            <li className="thing-item-text">
              <span>Check-in after 2:00 pm</span>
            </li>
            <li className="thing-item-text">
              <span>Checkout before 11:00 am</span>
            </li>
            <li className="thing-item-text">
              <span>3 guests maximum</span>
            </li>
          </ul>
          <button className="thing-more-btn">
            <span>Learn more</span>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Col 3: Safety & property */}
        <div className="thing-col">
          <h4 className="thing-col-title">Safety & property</h4>
          <ul className="thing-list">
            <li className="thing-item-text">
              <span>Carbon monoxide alarm not reported</span>
            </li>
            <li className="thing-item-text">
              <span>Smoke alarm not reported</span>
            </li>
            <li className="thing-item-text">
              <span>Exterior security cameras on property</span>
            </li>
          </ul>
          <button className="thing-more-btn">
            <span>Learn more</span>
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <style>{`
        .things-to-know-section {
          padding: 48px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .things-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px 48px;
          margin-top: 24px;
        }
        .thing-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .thing-col-title {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .thing-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 14px;
          padding: 0;
        }
        .thing-item {
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 15px;
          color: var(--text-main);
        }
        .thing-item-text {
          font-size: 14px;
          line-height: 1.45;
          color: var(--text-sub);
        }
        .thing-icon {
          color: var(--text-main);
          flex-shrink: 0;
        }
        .thing-more-btn {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-size: 15px;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-main);
          margin-top: 8px;
        }
        @media (max-width: 744px) {
          .things-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
};
