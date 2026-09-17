export default function Transition({ prompt, onContinue }) {
  return (
    <>
      <p className="prompt">{prompt}</p>
      <button className="primary-button" onClick={onContinue}>
        Continue
      </button>
    </>
  );
}
