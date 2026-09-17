export default function LetterTiles({ letters, onRemove }) {
  return (
    <div className="letter-tiles" aria-label="Destination letters">
      {letters.length ? (
        letters.map((letter, index) => (
          <button
            className="letter-tile"
            key={`${letter}-${index}`}
            onClick={() => onRemove?.(index)}
          >
            {letter}
          </button>
        ))
      ) : (
        <span className="empty-letters">Your letters will appear here.</span>
      )}
    </div>
  );
}
