import React, { useState } from "react";
import { Search, Globe, Menu, User } from "lucide-react";

export const Header: React.FC = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <header className="airbnb-header">
      <div className="header-container">
        {/* Left: Brand Logo */}
        <a href="#" className="brand-logo" aria-label="Airbnb homepage">
          <svg
            width="102"
            height="32"
            viewBox="0 0 102 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="logo-svg"
          >
            <path
              d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 4.116 8.423 5.432 11.536 1.488 3.52 2.284 6.326 2.284 8.72 0 4.671-3.666 7.45-8.156 7.45-2.735 0-5.112-1.32-6.844-3.522C12.268 31.68 9.891 33 7.156 33 2.666 33-1 30.221-1 25.55c0-2.394.796-5.2 2.284-8.72 1.316-3.113 3.478-7.706 5.432-11.536l.533-1.025C8.537 1.963 9.992 1 12 1h4zm0 2.2c-.896 0-1.745.545-2.607 2.083L12.86 6.31c-1.928 3.782-4.068 8.326-5.362 11.39C6.079 21.053 5.3 23.53 5.3 25.55c0 3.25 2.457 5.25 5.856 5.25 2.398 0 4.542-1.424 5.706-3.795l.844-1.722.844 1.722c1.164 2.371 3.308 3.795 5.706 3.795 3.399 0 5.856-2 5.856-5.25 0-2.02-.779-4.497-2.198-7.85-1.294-3.064-3.434-7.608-5.362-11.39l-.533-1.027C20.745 3.745 19.896 3.2 19 3.2h-3zm0 13.8a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6z"
              fill="#FF385C"
            />
            <text
              x="36"
              y="24"
              fontFamily="Plus Jakarta Sans, sans-serif"
              fontSize="24"
              fontWeight="800"
              fill="#FF385C"
              letterSpacing="-0.8px"
            >
              airbnb
            </text>
          </svg>
        </a>

        {/* Center: Search Capsule */}
        <div className="search-capsule" role="search">
          <button className="search-btn font-semibold">Anywhere</button>
          <span className="search-divider"></span>
          <button className="search-btn font-semibold">Anytime</button>
          <span className="search-divider"></span>
          <button className="search-btn text-muted">Add guests</button>
          <button className="search-icon-btn" aria-label="Search">
            <Search size={14} strokeWidth={3} color="#FFFFFF" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="header-actions">
          <button className="host-btn">Become a host</button>
          <button
            className="globe-btn"
            aria-label="Select language and currency"
          >
            <Globe size={18} />
          </button>

          <div className="user-menu-wrapper">
            <button
              className="user-menu-btn"
              onClick={() => setShowUserMenu(!showUserMenu)}
              aria-expanded={showUserMenu}
              aria-label="User navigation menu"
            >
              <Menu size={18} strokeWidth={2.5} />
              <div className="avatar-placeholder">
                <User size={16} fill="#717171" color="#717171" />
              </div>
            </button>

            {showUserMenu && (
              <div className="user-dropdown-menu">
                <a href="#signup" className="menu-item font-semibold">
                  Sign up
                </a>
                <a href="#login" className="menu-item">
                  Log in
                </a>
                <div className="menu-divider"></div>
                <a href="#host" className="menu-item">
                  Airbnb your home
                </a>
                <a href="#experience" className="menu-item">
                  Host an experience
                </a>
                <a href="#help" className="menu-item">
                  Help Centre
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .airbnb-header {
          border-bottom: 1px solid var(--border-subtle);
          background: #ffffff;
          position: relative;
          z-index: 50;
        }
        .header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 12px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 80px;
        }
        .brand-logo {
          display: flex;
          align-items: center;
          cursor: pointer;
          min-width: 120px;
        }
        .search-capsule {
          display: inline-flex;
          align-items: center;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-pill);
          padding: 6px 8px 6px 16px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
          transition: box-shadow 0.2s ease, border-color 0.2s ease;
          background: #fff;
          min-width: 280px;
        }
        .search-capsule:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,0.18);
        }
        .search-btn {
          font-size: 14px;
          color: var(--text-main);
          padding: 0 8px;
          background: transparent;
          line-height: 1;
        }
        .search-btn.font-semibold {
          font-weight: 600;
        }
        .search-btn.text-muted {
          color: var(--text-muted);
        }
        .search-divider {
          width: 1px;
          height: 24px;
          background: var(--border-subtle);
          margin: 0 4px;
        }
        .search-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--primary);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-left: 8px;
        }
        .header-actions {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .host-btn {
          font-size: 14px;
          font-weight: 600;
          color: var(--text-main);
          padding: 10px 14px;
          border-radius: var(--radius-pill);
        }
        .host-btn:hover, .globe-btn:hover {
          background: var(--bg-light);
        }
        .globe-btn {
          padding: 10px;
          border-radius: 50%;
          color: var(--text-main);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-menu-wrapper {
          position: relative;
        }
        .user-menu-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 6px 6px 6px 14px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-pill);
          background: #fff;
          transition: box-shadow 0.2s ease;
        }
        .user-menu-btn:hover {
          box-shadow: 0 2px 4px rgba(0,0,0,0.15);
        }
        .avatar-placeholder {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #717171;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .avatar-placeholder svg {
          fill: #fff;
          color: #fff;
        }
        .user-dropdown-menu {
          position: absolute;
          right: 0;
          top: calc(100% + 8px);
          width: 240px;
          background: #ffffff;
          border-radius: var(--radius-md);
          box-shadow: var(--shadow-lg);
          border: 1px solid var(--border-subtle);
          padding: 8px 0;
          z-index: 100;
          animation: slideUp 0.15s ease-out;
        }
        .menu-item {
          display: block;
          padding: 12px 16px;
          font-size: 14px;
          color: var(--text-main);
          transition: background 0.15s ease;
        }
        .menu-item:hover {
          background: var(--bg-light);
        }
        .menu-divider {
          height: 1px;
          background: var(--border-subtle);
          margin: 6px 0;
        }
        @media (max-width: 900px) {
          .search-capsule {
            display: none;
          }
          .header-container {
            padding: 12px 16px;
          }
        }
      `}</style>
    </header>
  );
};
