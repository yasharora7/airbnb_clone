import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarSectionProps {
  checkIn: string;
  checkOut: string;
  nights: number;
  onClearDates: () => void;
}

export const CalendarSection: React.FC<CalendarSectionProps> = ({
  checkIn,
  checkOut,
  nights,
  onClearDates
}) => {
  // Calendar days for October 2026 & November 2026 simulation
  const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  // October 2026 starts on Thursday (index 4)
  // 31 days
  const octOffset = 4;
  const octDays = Array.from({ length: 31 }, (_, i) => i + 1);

  // November 2026 starts on Sunday (index 0)
  // 30 days
  const novOffset = 0;
  const novDays = Array.from({ length: 30 }, (_, i) => i + 1);

  const isCheckInDay = (day: number) => day === 18;
  const isCheckOutDay = (day: number) => day === 23;
  const isInRange = (day: number) => day > 18 && day < 23;

  return (
    <section className="calendar-section">
      <div className="calendar-header-meta">
        <h3 className="section-title">
          {nights > 0 ? `${nights} nights in Candolim` : 'Select check-in date'}
        </h3>
        <p className="calendar-dates-sub">18 Oct 2026 – 23 Oct 2026</p>
      </div>

      <div className="calendar-months-container">
        {/* October Month */}
        <div className="month-card">
          <div className="month-title-row">
            <span className="month-name">October 2026</span>
          </div>

          <div className="weekdays-row">
            {daysOfWeek.map((d) => (
              <span key={d} className="weekday-col">{d}</span>
            ))}
          </div>

          <div className="days-grid">
            {Array.from({ length: octOffset }).map((_, i) => (
              <div key={`empty-oct-${i}`} className="calendar-day empty" />
            ))}
            {octDays.map((day) => {
              const checkin = isCheckInDay(day);
              const checkout = isCheckOutDay(day);
              const inRange = isInRange(day);
              return (
                <div
                  key={`oct-${day}`}
                  className={`calendar-day ${checkin ? 'day-start' : ''} ${checkout ? 'day-end' : ''} ${
                    inRange ? 'day-in-range' : ''
                  }`}
                >
                  <span className="day-number">{day}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* November Month */}
        <div className="month-card">
          <div className="month-title-row">
            <span className="month-name">November 2026</span>
          </div>

          <div className="weekdays-row">
            {daysOfWeek.map((d) => (
              <span key={d} className="weekday-col">{d}</span>
            ))}
          </div>

          <div className="days-grid">
            {Array.from({ length: novOffset }).map((_, i) => (
              <div key={`empty-nov-${i}`} className="calendar-day empty" />
            ))}
            {novDays.map((day) => (
              <div key={`nov-${day}`} className="calendar-day">
                <span className="day-number">{day}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="calendar-footer">
        <button className="keyboard-icon-btn" aria-label="Use keyboard shortcuts">
          ⌨️
        </button>
        <button className="clear-dates-btn" onClick={onClearDates}>
          Clear dates
        </button>
      </div>

      <style>{`
        .calendar-section {
          padding: 32px 0 40px 0;
          border-top: 1px solid var(--border-subtle);
        }
        .calendar-dates-sub {
          font-size: 14px;
          color: var(--text-muted);
          margin-top: 4px;
          margin-bottom: 24px;
        }
        .calendar-months-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 32px;
          margin-bottom: 20px;
        }
        .month-title-row {
          text-align: center;
          margin-bottom: 16px;
        }
        .month-name {
          font-size: 16px;
          font-weight: 600;
          color: var(--text-main);
        }
        .weekdays-row {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          text-align: center;
          margin-bottom: 8px;
        }
        .weekday-col {
          font-size: 12px;
          font-weight: 600;
          color: var(--text-muted);
        }
        .days-grid {
          display: grid;
          grid-template-columns: repeat(7, 1fr);
          row-gap: 2px;
        }
        .calendar-day {
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          position: relative;
          user-select: none;
        }
        .calendar-day.empty {
          cursor: default;
        }
        .day-number {
          font-size: 14px;
          font-weight: 500;
          color: var(--text-main);
          width: 38px;
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          z-index: 2;
          transition: background 0.15s ease;
        }
        .calendar-day:not(.empty):not(.day-start):not(.day-end):not(.day-in-range):hover .day-number {
          border: 1px solid var(--text-main);
        }
        .calendar-day.day-start .day-number,
        .calendar-day.day-end .day-number {
          background: #222222;
          color: #ffffff;
          font-weight: 700;
        }
        .calendar-day.day-start::after {
          content: '';
          position: absolute;
          right: 0;
          width: 50%;
          height: 38px;
          background: #F7F7F7;
          z-index: 1;
        }
        .calendar-day.day-end::after {
          content: '';
          position: absolute;
          left: 0;
          width: 50%;
          height: 38px;
          background: #F7F7F7;
          z-index: 1;
        }
        .calendar-day.day-in-range {
          background: #F7F7F7;
        }
        .calendar-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 12px;
        }
        .keyboard-icon-btn {
          font-size: 18px;
          opacity: 0.7;
        }
        .clear-dates-btn {
          font-size: 14px;
          font-weight: 600;
          text-decoration: underline;
          color: var(--text-main);
        }
        @media (max-width: 744px) {
          .calendar-months-container {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};
