export default function Start({ onStart }) {
  return (
    <div className="start-screen">
      <p className="lead">
        Follow the clues, keep hold of everything you find, and trust the route.
      </p>
      <button className="primary-button" onClick={onStart}>
        Begin the hunt
      </button>
    </div>
  );
}
