import { useState } from "react";
import AnswerInput from "../components/AnswerInput";

const normalize = (value) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

export default function Quiz({
  questions,
  index,
  onNext,
  onComplete,
  onWrong,
}) {
  const [answer, setAnswer] = useState("");
  const [frenchAnswer, setFrenchAnswer] = useState("");
  const [phase, setPhase] = useState("word");
  const question = questions[index];

  function submitWord() {
    if (
      question.accepted.some((value) => normalize(value) === normalize(answer))
    ) {
      setAnswer("");
      setPhase("french");
    } else onWrong();
  }

  function submitFrench() {
    if (normalize(frenchAnswer) !== normalize(question.french))
      return onWrong();
    setFrenchAnswer("");
    if (index === questions.length - 1) onComplete();
    else {
      onNext();
      setPhase("word");
    }
  }

  return (
    <div className={`quiz-screen quiz-${phase}`}>
      <p className="eyebrow">
        Exhibit {String(index + 5).padStart(2, "0")} / Field Knowledge
      </p>
      {phase === "word" ? (
        <>
          <p className="prompt">{question.prompt}</p>
          <AnswerInput
            value={answer}
            onChange={setAnswer}
            onSubmit={submitWord}
          />
          <button className="primary-button" onClick={submitWord}>
            Check answer
          </button>
        </>
      ) : (
        <>
          <p className="prompt">
            Right: <strong>{question.word}</strong>. Now in French?
          </p>
          <AnswerInput
            value={frenchAnswer}
            onChange={setFrenchAnswer}
            onSubmit={submitFrench}
            placeholder="En français..."
          />
          <button className="primary-button" onClick={submitFrench}>
            Check
          </button>
        </>
      )}
    </div>
  );
}
