function formatOffset(offset) {
  return !offset
    ? "N"
    : offset > 0
      ? `N + ${offset}`
      : `N - ${Math.abs(offset)}`;
}
export default function CityLetters({ city, progress, onPick }) {
  return (
    <>
      <div className="city-letters-screen">
        <p className="eyebrow">
          Remember the word you found: how many letters does it have? Use that
          number as N.
        </p>
        <p className="prompt">
          In {city.city}, tap the letters at positions{" "}
          {city.offsets.map(formatOffset).join(", ")}, in that order.
        </p>
        <p className="helper">
          Found {progress} of {city.offsets.length}
        </p>
        <div className="city-letters">
          {[...city.city].map((letter, index) => (
            <button key={index} onClick={() => onPick(index + 1)}>
              <b>{letter}</b>
              <small>{index + 1}</small>
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
