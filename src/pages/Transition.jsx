export default function Transition({ prompt, onContinue }) {
  return (
    <>
    <div className="transition-screen">
      <p className="prompt">{prompt}</p>
      <button className="primary-button" onClick={onContinue}>
        Continue
      </button>
      </div>
    </>
  );
}
