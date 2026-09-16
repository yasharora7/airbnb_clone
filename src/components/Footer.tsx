import React from "react";
import { Globe } from "lucide-react";

export const Footer: React.FC = () => {
  return (
    <footer className="airbnb-footer">
      <div className="footer-top-columns main-container">
        {/* Col 1 */}
        <div className="footer-col">
          <h5 className="footer-col-title">Support</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Help Centre</a>
            </li>
            <li>
              <a href="#">AirCover</a>
            </li>
            <li>
              <a href="#">Anti-discrimination</a>
            </li>
            <li>
              <a href="#">Disability support</a>
            </li>
            <li>
              <a href="#">Cancellation options</a>
            </li>
            <li>
              <a href="#">Report neighbourhood concern</a>
            </li>
          </ul>
        </div>

        {/* Col 2 */}
        <div className="footer-col">
          <h5 className="footer-col-title">Hosting</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Airbnb your home</a>
            </li>
            <li>
              <a href="#">AirCover for Hosts</a>
            </li>
            <li>
              <a href="#">Hosting resources</a>
            </li>
            <li>
              <a href="#">Community forum</a>
            </li>
            <li>
              <a href="#">Hosting responsibly</a>
            </li>
            <li>
              <a href="#">Join a free Hosting class</a>
            </li>
          </ul>
        </div>

        {/* Col 3 */}
        <div className="footer-col">
          <h5 className="footer-col-title">Airbnb</h5>
          <ul className="footer-links">
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">New features</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Investors</a>
            </li>
            <li>
              <a href="#">Airbnb.org emergency stays</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom-bar main-container">
        <div className="footer-legal-left">
          <span>© 2026 Airbnb, Inc.</span>
          <span className="dot">·</span>
          <a href="#">Privacy</a>
          <span className="dot">·</span>
          <a href="#">Terms</a>
          <span className="dot">·</span>
          <a href="#">Sitemap</a>
          <span className="dot">·</span>
          <a href="#">Company details</a>
        </div>

        <div className="footer-locale-right">
          <button className="locale-selector-btn">
            <Globe size={16} />
            <span>English (IN)</span>
          </button>
          <button className="locale-selector-btn">
            <span>₹ INR</span>
          </button>
        </div>
      </div>

      <style>{`
        .airbnb-footer {
          background: #F7F7F7;
          border-top: 1px solid var(--border-light);
          padding-top: 28px;
          padding-bottom: 56px;
          margin-top: 64px;
        }
        .footer-top-columns {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 24px 40px;
          padding-bottom: 28px;
          border-bottom: 1px solid var(--border-light);
        }
        .footer-col-title {
          font-size: 14px;
          font-weight: 700;
          color: var(--text-main);
          margin-bottom: 18px;
        }
        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 0;
          margin: 0;
        }
        .footer-links a {
          font-size: 13px;
          color: var(--text-main);
          line-height: 1.4;
          transition: text-decoration 0.15s ease;
        }
        .footer-links a:hover {
          text-decoration: underline;
        }
        .footer-bottom-bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 20px;
          font-size: 14px;
          color: var(--text-main);
          flex-wrap: wrap;
          gap: 16px;
        }
        .footer-legal-left {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          font-size: 14px;
        }
        .footer-legal-left a:hover {
          text-decoration: underline;
        }
        .dot {
          opacity: 0.6;
        }
        .footer-locale-right {
          display: flex;
          align-items: center;
          gap: 18px;
        }
        .locale-selector-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          background: transparent;
        }
        .locale-selector-btn:hover {
          text-decoration: underline;
        }
        @media (max-width: 744px) {
          .footer-top-columns {
            grid-template-columns: 1fr;
            gap: 24px;
          }
          .footer-bottom-bar {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </footer>
  );
};
