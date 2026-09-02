import Reveal from './Reveal';

const SCHEDULE = [
  { time: '6:30 PM', title: 'Doors Open', text: 'Grab a drink, explore the food stalls, and soak in the atmosphere.' },
  { time: '8:00 PM', title: 'First Act', text: 'Opening DJ set with live visuals and immersive sound.' },
  { time: '10:00 PM', title: 'Headliner', text: 'The main event takes the stage — this is what you came for.' },
  { time: '12:00 AM', title: 'Grand Finale', text: 'Final light show, fireworks, and goodnight. See you next year.' },
];

export default function Schedule() {
  return (
    <section className="schedule" id="schedule">
      <div className="container">
        <Reveal>
          <h2 className="section-title">
            <span className="grad">Schedule</span>
          </h2>
          <div className="section-divider" />
          <p className="section-sub">The night unfolds like this — from first entry to the final flash.</p>
        </Reveal>

        <div className="timeline">
          {SCHEDULE.map((item) => (
            <Reveal key={item.time} className="tlItem">
              <div className="tlTime">{item.time}</div>
              <div className="tlBody">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
