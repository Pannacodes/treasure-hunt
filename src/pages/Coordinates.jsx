import AnswerInput from "../components/AnswerInput";
export default function Coordinates({
  data,
  latitude,
  longitude,
  setLatitude,
  setLongitude,
  onPinSubmit,
}) {
  return (
    <>
      <div className="coordinates-screen">
        <p className="prompt">{data.prompt}</p>
        <div className="input-row coordinate-inputs">
          <AnswerInput
            value={latitude}
            onChange={setLatitude}
            onSubmit={onPinSubmit}
            type="number"
            placeholder="Latitude"
          />

          <span className="coordinate-comma">,</span>
          <AnswerInput
            value={longitude}
            onChange={setLongitude}
            onSubmit={onPinSubmit}
            type="number"
            placeholder="Longitude"
            autoFocus={false}
          />
        </div>
        <button className="primary-button" onClick={onPinSubmit}>
          Drop pin
        </button>
      </div>
    </>
  );
}
