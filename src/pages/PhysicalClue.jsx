import AnswerInput from "../components/AnswerInput";
export default function PhysicalClue({
  data,
  date,
  setDate,
  showTranslation,
  setShowTranslation,
  onSubmit,
}) {
  return (
    <>
      <div className="translation-card">
        <p lang="fr">{data.frenchPhrase}</p>
        {showTranslation ? (
          <small>{data.translation}</small>
        ) : (
          <button
            className="text-button"
            onClick={() => setShowTranslation(true)}
          >
            Reveal translation
          </button>
        )}
      </div>
      <p className="eyebrow">{data.heading}</p>
      <p className="prompt">{data.prompt}</p>
      <div className="input-row date-inputs">
        <AnswerInput value={date.day} onChange={(value) => setDate((current) => ({ ...current, day: value }))} onSubmit={onSubmit} type="number" placeholder="DD" />
        <AnswerInput value={date.month} onChange={(value) => setDate((current) => ({ ...current, month: value }))} onSubmit={onSubmit} type="number" placeholder="MM" autoFocus={false} />
        <AnswerInput value={date.year} onChange={(value) => setDate((current) => ({ ...current, year: value }))} onSubmit={onSubmit} type="number" placeholder="YYYY" autoFocus={false} />
      </div>
      <button className="primary-button" onClick={onSubmit}>
        Check answer
      </button>
    </>
  );
}
