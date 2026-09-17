export default function Hint({ hint, visible, onShow, attempts }) {
  if (!hint) return null;
  if (visible) return <p className="hint">{hint}</p>;
  return attempts >= 2 ? (
    <button className="text-button" onClick={onShow}>
      Show a hint
    </button>
  ) : null;
}
