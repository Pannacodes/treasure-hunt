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
      <p className="prompt">{data.prompt}</p>
      <div className="input-row">
        <AnswerInput
          value={latitude}
          onChange={setLatitude}
          onSubmit={onPinSubmit}
          type="number"
          placeholder="Latitude"
        />
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
    </>
  );
}
