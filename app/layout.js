import './globals.css';

export const metadata = {
  title: 'Neon Nights — Music & Food Festival',
  description:
    'Neon Nights — a one-night music & food festival. Live DJs, street food, and an epic light show. Saturday 14 March 2026, doors 7 PM.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;700;900&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
