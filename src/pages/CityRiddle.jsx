import AnswerInput from "../components/AnswerInput";
export default function CityRiddle({ city, answer, setAnswer, onSubmit }) {
  return (
    <>
    <div className={`city-riddle clue-${city.id}`}>
      <p className="prompt">{city.prompt}</p>
      <AnswerInput value={answer} onChange={setAnswer} onSubmit={onSubmit} />
      <button className="primary-button" onClick={onSubmit}>
        Check answer
      </button>
      </div>
    </>
  );
}
