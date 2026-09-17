export default function Reveal({ reveal, onRestart }) {
  return (
    <main className="game-shell">
      <section className="reveal-panel">
        <p className="eyebrow">Destination found</p>
        <h1>{reveal.heading}</h1>
        <p className="lead">{reveal.body}</p>
        <ul>
          {reveal.details.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ul>
        <button className="text-button" onClick={onRestart}>
          Play again
        </button>
      </section>
    </main>
  );
}
