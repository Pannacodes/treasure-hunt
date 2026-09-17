import { useState } from "react";
import LetterTiles from "../components/LetterTiles";

export default function FinalRiddle({
  destination,
  collectedLetters,
  onComplete,
}) {
  const [bank, setBank] = useState(collectedLetters);
  const [answer, setAnswer] = useState([]);
  const solved = answer.join("") === destination;

  function add(index) {
    setAnswer((current) => [...current, bank[index]]);
    setBank((current) =>
      current.filter((_, letterIndex) => letterIndex !== index),
    );
  }

  function remove(index) {
    setBank((current) => [...current, answer[index]]);
    setAnswer((current) =>
      current.filter((_, letterIndex) => letterIndex !== index),
    );
  }

  return (
    <>
      <div className="final-riddle">
        <p className="eyebrow">Exhibit / Destination</p>
        <p className="prompt">
          You have collected every letter you need. Put them in order to name
          it.
        </p>
        <LetterTiles letters={answer} onRemove={remove} />
        <div className="letter-bank">
          {bank.map((letter, index) => (
            <button key={`${letter}-${index}`} onClick={() => add(index)}>
              {letter}
            </button>
          ))}
        </div>
        {solved && (
          <button className="primary-button" onClick={onComplete}>
            Continue
          </button>
        )}
      </div>
    </>
  );
}
