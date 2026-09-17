export default function AnswerInput({
  value,
  onChange,
  onSubmit,
  placeholder = "Your answer",
  type = "text",
  autoFocus = true,
}) {
  return (
    <input
      autoFocus={autoFocus}
      className="answer-input"
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(event) => onChange(event.target.value)}
      onKeyDown={(event) => event.key === "Enter" && onSubmit()}
    />
  );
}
