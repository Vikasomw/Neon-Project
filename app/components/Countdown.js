'use client';

import { useState, useEffect } from 'react';

const EVENT_DATE = new Date('2026-03-14T19:00:00');

function getParts() {
  const diff = EVENT_DATE.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    mins: Math.floor((diff / (1000 * 60)) % 60),
    secs: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [parts, setParts] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const tick = () => setParts(getParts());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  if (!mounted) return null;
  if (!parts) {
    return (
      <p className="cdEnded" aria-live="polite">
        🎉 The event has ended — thanks for coming!
      </p>
    );
  }

  const pad = (n) => String(n).padStart(2, '0');
  const units = [
    { v: pad(parts.days), label: 'Days' },
    { v: pad(parts.hours), label: 'Hours' },
    { v: pad(parts.mins), label: 'Mins' },
    { v: pad(parts.secs), label: 'Secs' },
  ];

  return (
    <div className="countdown" aria-live="polite">
      {units.map((u, i) => (
        <span key={u.label} style={{ display: 'contents' }}>
          {i > 0 && <span className="cdSep">:</span>}
          <span className="cdUnit">
            <span className="cdValue">{u.v}</span>
            <span className="cdLabel">{u.label}</span>
          </span>
        </span>
      ))}
    </div>
  );
}
