export default function Score({ score }) {
  const isPassing = score >= 80;
  return (
    <div>
      SCORE: {score}% -{" "}
      <span style={{ color: isPassing ? "#98ec65" : "#FF5555" }}>
        {isPassing ? "Passed" : "Failed"}
      </span>
    </div>
  );
}
