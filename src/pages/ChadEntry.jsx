import { useState } from "react";
import AnswerInput from "../components/AnswerInput";

export default function ChadEntry({ data, onComplete, onWrong }) {
  const [letters, setLetters] = useState(["", "", "", ""]);

  function update(index, value) {
    setLetters((current) => {
      const updated = [...current];
      updated[index] = value.slice(-1).toUpperCase();
      return updated;
    });
  }

  function submit() {
    if (letters.join("").toLowerCase() === data.word.toLowerCase()) onComplete();
    else onWrong();
  }

  return (
    <>
      <p className="prompt">{data.prompt}</p>
      <div className="input-row chad-inputs">
        {letters.map((letter, index) => (
          <AnswerInput
            key={index}
            value={letter}
            onChange={(value) => update(index, value)}
            onSubmit={submit}
            placeholder="_"
            autoFocus={index === 0}
          />
        ))}
      </div>
      <button className="primary-button" onClick={submit}>
        Check the word
      </button>
    </>
  );
}
