import Reveal from './Reveal';

const FEATURES = [
  {
    icon: '🎧',
    title: 'Live DJs',
    text: 'Non-stop beats from the city\u2019s top turntablists spinning until the lights come up.',
  },
  {
    icon: '🍜',
    title: 'Street Food',
    text: 'Handpicked vendors serving world flavours — tacos, ramen, loaded fries and more.',
  },
  {
    icon: '🎆',
    title: 'Light Show',
    text: 'A jaw-dropping laser and pyro display to close out the night in style.',
  },
];

export default function Features() {
  return (
    <section className="features" id="features">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="grad">What Awaits</span>
          </h2>
          <div className="section-divider" />
          <p className="section-sub">
            Three reasons the city talks about this night all year round.
          </p>
        </Reveal>

        <div className="featuresGrid">
          {FEATURES.map((f) => (
            <Reveal key={f.title} as="article" className="card">
              <span className="cardIcon" aria-hidden="true">{f.icon}</span>
              <h3 className="cardTitle">{f.title}</h3>
              <p className="cardText">{f.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
