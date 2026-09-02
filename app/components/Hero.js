import Countdown from './Countdown';

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="heroBg" />
      <div className="heroGlow" />
      <div className="heroOverlay" />

      <div className="heroContent">
        <p className="heroTag">✦ One Night Only ✦</p>
        <h1 className="heroTitle">
          NEON<br />NIGHTS
        </h1>
        <p className="heroSubtitle">One night. Lights, sound, street food.</p>
        <p className="heroIntro">Doors open this Saturday at 7 PM — don&apos;t be late!</p>

        <Countdown />

        <a href="#signup" className="btnTickets">
          Get Tickets
        </a>
      </div>

      <div className="scrollInd" aria-hidden="true">
        <div className="scrollArrow" />
      </div>
    </section>
  );
}
