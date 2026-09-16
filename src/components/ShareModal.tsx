import React, { useState, useEffect } from 'react';
import { X, Copy, Check, MessageSquare, Mail, Share2, Facebook, Twitter, Code } from 'lucide-react';
import { LISTING_DATA } from '../data/listingData';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCopied(false);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!isOpen) return null;

  const shareChannels = [
    { icon: <Copy size={20} />, label: copied ? 'Link copied!' : 'Copy Link', action: handleCopyLink, highlight: copied },
    { icon: <Mail size={20} />, label: 'Email', action: () => window.open(`mailto:?subject=${encodeURIComponent(LISTING_DATA.title)}&body=${encodeURIComponent(window.location.href)}`) },
    { icon: <MessageSquare size={20} />, label: 'WhatsApp', action: () => window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(LISTING_DATA.title + ' ' + window.location.href)}`) },
    { icon: <Facebook size={20} />, label: 'Facebook', action: () => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`) },
    { icon: <Twitter size={20} />, label: 'Twitter / X', action: () => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(LISTING_DATA.title)}&url=${encodeURIComponent(window.location.href)}`) },
    { icon: <Code size={20} />, label: 'Embed', action: handleCopyLink }
  ];

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal-content share-modal-box" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <button className="modal-close-btn" onClick={onClose} aria-label="Close share dialog">
            <X size={18} />
          </button>
          <h3 className="modal-title">Share this place</h3>
          <div style={{ width: 28 }} />
        </div>

        <div className="share-body">
          {/* Listing Preview Snippet */}
          <div className="share-listing-preview">
            <img
              src={LISTING_DATA.heroPhotos[0].url}
              alt={LISTING_DATA.title}
              className="share-preview-img"
            />
            <div className="share-preview-info">
              <h4 className="share-listing-title">{LISTING_DATA.title}</h4>
              <p className="share-listing-sub">
                ★ {LISTING_DATA.rating} · {LISTING_DATA.reviewCount} reviews · {LISTING_DATA.type}
              </p>
            </div>
          </div>

          {/* Share Channels Grid */}
          <div className="share-channels-grid">
            {shareChannels.map((channel, idx) => (
              <button
                key={idx}
                className={`share-channel-btn ${channel.highlight ? 'channel-copied' : ''}`}
                onClick={channel.action}
              >
                <span className="channel-icon-wrap">
                  {channel.highlight ? <Check size={20} color="#008A05" /> : channel.icon}
                </span>
                <span className="channel-label">{channel.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .share-modal-box {
          max-width: 540px;
          border-radius: var(--radius-xl);
        }
        .share-body {
          padding: 24px;
        }
        .share-listing-preview {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
          padding: 12px;
          background: #F7F7F7;
          border-radius: var(--radius-md);
        }
        .share-preview-img {
          width: 72px;
          height: 72px;
          border-radius: var(--radius-sm);
          object-fit: cover;
        }
        .share-preview-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .share-listing-title {
          font-size: 15px;
          font-weight: 600;
          color: var(--text-main);
          line-height: 1.3;
        }
        .share-listing-sub {
          font-size: 12px;
          color: var(--text-muted);
        }
        .share-channels-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }
        .share-channel-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-md);
          background: #ffffff;
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
          transition: all 0.2s ease;
        }
        .share-channel-btn:hover {
          border-color: var(--text-main);
          background: #F7F7F7;
        }
        .channel-copied {
          border-color: #008A05;
          background: #F0FFF4;
        }
        .channel-icon-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--text-main);
        }
      `}</style>
    </div>
  );
};
