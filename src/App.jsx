import { useState } from "react";
import "./App.css";
import { gameData } from "./data/gameData";
import GameLayout from "./components/GameLayout";
import Hint from "./components/Hint";
import Start from "./pages/Start";
import PhysicalClue from "./pages/PhysicalClue";
import Coordinates from "./pages/Coordinates";
import ChadEntry from "./pages/ChadEntry";
import Transition from "./pages/Transition";
import CityRiddle from "./pages/CityRiddle";
import CityLetters from "./pages/CityLetters";
import FinalRiddle from "./pages/FinalRiddle";
import Quiz from "./pages/Quiz";
import FinalActivity from "./pages/FinalActivity";
import Reveal from "./pages/Reveal";

const normalize = (value) =>
  value
    .trim()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
const steps = [
  "start",
  "physical",
  "coordinates",
  "chad",
  "transition",
  "city-0",
  "city-1",
  "city-2",
  "destination",
  "quiz",
  "final",
];

export default function App() {
  const [step, setStep] = useState(0);
  const [answer, setAnswer] = useState("");
  const [date, setDate] = useState({ day: "", month: "", year: "" });
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [cityPhase, setCityPhase] = useState("riddle");
  const [letterProgress, setLetterProgress] = useState(0);
  const [positionNumber, setPositionNumber] = useState(null);
  const [collectedLetters, setCollectedLetters] = useState([]);
  const [attempts, setAttempts] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);
  const [status, setStatus] = useState("idle");
  const [showTranslation, setShowTranslation] = useState(false);
  const [complete, setComplete] = useState(false);
  const [quizIndex, setQuizIndex] = useState(0);
  const current = steps[step];
  const cityIndex = current.startsWith("city-") ? Number(current.at(-1)) : null;
  const city = cityIndex === null ? null : gameData.cities[cityIndex];
  function resetChallenge() {
    setAnswer("");
    setAttempts(0);
    setHintVisible(false);
    setStatus("idle");
  }
  function advance() {
    resetChallenge();
    setStep((currentStep) => currentStep + 1);
  }
  function wrong() {
    setStatus("wrong");
    setAttempts((value) => value + 1);
    window.setTimeout(() => setStatus("idle"), 400);
  }
  function matches(input, accepted) {
    return accepted.some((value) => normalize(value) === normalize(input));
  }
  function submitPhysical() {
    const correct =
      Number(date.day) === gameData.physical.day &&
      Number(date.month) === gameData.physical.month &&
      Number(date.year) === gameData.physical.year;
    correct ? advance() : wrong();
  }
  function submitPin() {
    const latitudeCorrect =
      Math.abs(Number(latitude) - gameData.coordinates.latitude) <=
      gameData.coordinates.tolerance;
    const longitudeCorrect =
      Math.abs(Number(longitude) - gameData.coordinates.longitude) <=
      gameData.coordinates.tolerance;
    if (latitudeCorrect && longitudeCorrect) {
      advance();
    } else wrong();
  }
  function submitCity() {
    if (matches(answer, city.accepted)) {
      setCityPhase("letters");
      resetChallenge();
    } else wrong();
  }
  function pickCityLetter(position) {
    const neededPositions = city.offsets.map(
      (offset) => positionNumber + offset,
    );
    if (position !== neededPositions[letterProgress]) return wrong();
    if (letterProgress < neededPositions.length - 1)
      return setLetterProgress((value) => value + 1);
    setCollectedLetters((letters) => [
      ...letters,
      ...neededPositions.map((needed) => city.city[needed - 1]),
    ]);
    setCityPhase("riddle");
    setLetterProgress(0);
    advance();
  }

  function completeChad() {
    setPositionNumber(gameData.chad.word.length);
    advance();
  }
  function restart() {
    setStep(0);
    setAnswer("");
    setDate({ day: "", month: "", year: "" });
    setLatitude("");
    setLongitude("");
    setCityPhase("riddle");
    setLetterProgress(0);
    setPositionNumber(null);
    setCollectedLetters([]);
    setAttempts(0);
    setHintVisible(false);
    setStatus("idle");
    setShowTranslation(false);
    setComplete(false);
    setQuizIndex(0);
  }
  if (complete) return <Reveal reveal={gameData.reveal} onRestart={restart} />;
  let content;
  let hint;
  if (current === "start") content = <Start onStart={advance} />;
  if (current === "physical") {
    content = (
      <PhysicalClue
        data={gameData.physical}
        date={date}
        setDate={setDate}
        showTranslation={showTranslation}
        setShowTranslation={setShowTranslation}
        onSubmit={submitPhysical}
      />
    );
    hint = gameData.physical.hint;
  }
  if (current === "coordinates") {
    content = (
      <Coordinates
        data={gameData.coordinates}
        latitude={latitude}
        longitude={longitude}
        setLatitude={setLatitude}
        setLongitude={setLongitude}
        onPinSubmit={submitPin}
      />
    );
    hint = gameData.coordinates.hint;
  }
  if (current === "chad") content = <ChadEntry data={gameData.chad} onComplete={completeChad} onWrong={wrong} />;
  if (current === "transition") content = <Transition prompt={gameData.transition.prompt} onContinue={advance} />;
  if (city && cityPhase === "riddle") {
    content = (
      <CityRiddle
        city={city}
        answer={answer}
        setAnswer={setAnswer}
        onSubmit={submitCity}
      />
    );
    hint = city.hint;
  }
  if (city && cityPhase === "letters")
    content = (
      <CityLetters
        city={city}
        positionNumber={positionNumber}
        progress={letterProgress}
        onPick={pickCityLetter}
      />
    );
  if (current === "destination")
    content = (
      <FinalRiddle
        destination={gameData.destination}
        collectedLetters={collectedLetters}
        onComplete={advance}
      />
    );
  if (current === "quiz")
    content = (
      <Quiz
        questions={gameData.quiz.questions}
        index={quizIndex}
        onNext={() => setQuizIndex((value) => value + 1)}
        onWrong={wrong}
        onComplete={() => {
          setQuizIndex(0);
          advance();
        }}
      />
    );
  if (current === "final")
    content = (
      <FinalActivity
        data={gameData.finalRiddle}
        onWrong={wrong}
        evidence={[
          { label: "Google Maps location", value: gameData.chad.word },
          { label: "Letters in that location", value: String(positionNumber) },
          { label: "Island", value: gameData.destination },
          {
            label: "Surroundings",
            value: gameData.quiz.questions.map((question) => question.word.toLowerCase()).join(" / "),
          },
        ]}
        onComplete={() => setComplete(true)}
      />
    );
  if (current === "final")
    hint = gameData.finalRiddle.hints[Math.min(Math.max(attempts - 2, 0), gameData.finalRiddle.hints.length - 1)];
  return (
    <GameLayout
      title={gameData.title}
      subtitle={gameData.subtitle}
      step={step}
      totalSteps={steps.length}
      status={status}
      footer={
        <Hint
          hint={hint}
          visible={hintVisible}
          onShow={() => setHintVisible(true)}
          attempts={attempts}
        />
      }
    >
      {content}
    </GameLayout>
  );
}
