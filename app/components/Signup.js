'use client';

import { useState } from 'react';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState(null); // null | 'error' | 'success'

  const onSubmit = (e) => {
    e.preventDefault();
    const value = email.trim();
    if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      setStatus('error');
      return;
    }
    setEmail('');
    setStatus('success');
  };

  return (
    <section className="signup" id="signup">
      <div className="container">
        <div className="signupPanel">
          <h2 className="section-title">
            <span className="grad">Get Notified</span>
          </h2>
          <div className="section-divider" />
          <p className="signupText">
            Drop your email and we&apos;ll send you lineup updates &amp; early-bird offers.
          </p>

          <form className="form" onSubmit={onSubmit} noValidate>
            {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
            <label htmlFor="email" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (status) setStatus(null);
              }}
            />
            <button type="submit" className="btnNotify">
              Notify Me →
            </button>
          </form>

          <p
            className={`feedback ${
              status === 'success' ? 'fbSuccess' : status === 'error' ? 'fbError' : ''
            }`}
            aria-live="polite"
          >
            {status === 'success'
              ? "✓ You're on the list! We'll be in touch."
              : status === 'error'
              ? 'Please enter a valid email address.'
              : ''}
          </p>
        </div>
      </div>
    </section>
  );
}
