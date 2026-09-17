import ProgressBar from "./ProgressBar";

export default function GameLayout({
  title,
  subtitle,
  step,
  totalSteps,
  children,
  status,
  footer,
}) {
  return (
    <main className="game-shell">
      <section className="game-panel">
        <p className="eyebrow">
          Step {step + 1} of {totalSteps}
        </p>
        <h1>{title}</h1>
        <p className="subtitle">{subtitle}</p>
        <ProgressBar current={step} total={totalSteps} />
        <div
          className={status === "wrong" ? "game-content shake" : "game-content"}
        >
          {children}
        </div>
        {footer}
      </section>
    </main>
  );
}
