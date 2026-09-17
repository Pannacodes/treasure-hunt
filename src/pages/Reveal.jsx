import { useState } from "react";

export default function Reveal({ reveal, onRestart }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <main className="game-shell">
      <section className="reveal-panel">
        <p className="eyebrow">Treasure / Final Exhibit</p>

        <h1>{reveal.heading}</h1>

        <p className="lead">{reveal.body}</p>

        <div className="reveal-image">
          <img
            src="/catamaran.jpg"
            alt="The catamaran for our whale-watching trip"
          />
        </div>

        <button
          className="details-toggle"
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "− Hide the details" : "+ About the adventure"}
        </button>

        {showDetails && (
          <div className="reveal-details">
            <ul>
              {reveal.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>

            <a
              className="reveal-link"
              href={reveal.website}
              target="_blank"
              rel="noreferrer"
            >
              Explore the adventure →
            </a>
            
            <div className="reveal-gallery">
              <img src="/dolphins.avif" alt="dolphin in the ocean" />

              <img src="/rissos.avif" alt="rissos dolphin tail" />
            </div>
          </div>
        )}

        <button className="text-button" onClick={onRestart}>
          Play again
        </button>
      </section>
    </main>
  );
}
