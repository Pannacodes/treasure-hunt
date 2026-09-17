import { useState } from "react";
import AnswerInput from "../components/AnswerInput";
import EvidenceBoard from "../components/EvidenceBoard";

const normalize = (value) =>
  value.trim().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

export default function FinalActivity({ data, evidence, onComplete, onWrong }) {
  const [phase, setPhase] = useState("activity");
  const [activity, setActivity] = useState("");
  const [duration, setDuration] = useState("");
  const [finalAnswer, setFinalAnswer] = useState("");

  function submitActivity() {
    if (data.acceptedActivity.some((value) => normalize(value) === normalize(activity))) setPhase("duration");
    else onWrong();
  }

  function submitDuration() {
    if (Number(duration) === data.acceptedDuration) setPhase("final");
    else onWrong();
  }

  function submitFinal() {
    if (data.acceptedPhrase.some((value) => normalize(value) === normalize(finalAnswer))) onComplete();
    else onWrong();
  }

  return (
    <>
      <EvidenceBoard entries={evidence} />
      {phase === "activity" && (
        <>
          <p className="prompt">{data.activityPrompt}</p>
          <AnswerInput value={activity} onChange={setActivity} onSubmit={submitActivity} placeholder="The activity" />
          <button className="primary-button" onClick={submitActivity}>Check answer</button>
        </>
      )}
      {phase === "duration" && (
        <>
          <p className="prompt">{data.durationPrompt}</p>
          <p className="helper">{data.durationHint}</p>
          <AnswerInput value={duration} onChange={setDuration} onSubmit={submitDuration} type="number" placeholder="Hours" />
          <button className="primary-button" onClick={submitDuration}>Check duration</button>
        </>
      )}
      {phase === "final" && (
        <>
          <p className="prompt">{data.finalPrompt}</p>
          <AnswerInput value={finalAnswer} onChange={setFinalAnswer} onSubmit={submitFinal} placeholder="Your answer" />
          <button className="primary-button" onClick={submitFinal}>Unlock the gift</button>
        </>
      )}
    </>
  );
}
