export default function ProgressBar({ current, total }) {
  return (
    <div className="progress" aria-label={`Step ${current + 1} of ${total}`}>
      {Array.from({ length: total }, (_, index) => (
        <span className={index <= current ? "done" : ""} key={index} />
      ))}
    </div>
  );
}
