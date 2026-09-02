'use client';

import { useState, useEffect } from 'react';
import useTheme from './useTheme';

export default function Header() {
  const { theme, toggle } = useTheme();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="header">
      <div className="headerInner">
        <a href="#hero" className="logo" onClick={close}>
          <img src="/logo.svg" alt="Neon Nights logo" className="logoImg" />
          <span className="logoText">NEON NIGHTS</span>
        </a>

        <nav className={`nav ${open ? 'open' : ''}`} aria-label="Main navigation">
          <a href="#hero" className="navLink" onClick={close}>Home</a>
          <a href="#schedule" className="navLink" onClick={close}>Schedule</a>
          <button
            className="themeToggle"
            onClick={toggle}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
        </nav>

        <button
          className="navToggle"
          onClick={() => setOpen((o) => !o)}
          aria-label="Open menu"
          aria-expanded={open}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
