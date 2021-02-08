export default function Score(props) {
  const isPassing = props.score >= 80;
  return (
    <div>
      SCORE: {props.score}% -{" "}
      <span style={{ color: isPassing ? "#98ec65" : "#FF5555" }}>
        {isPassing ? "Passed" : "Failed"}
      </span>
    </div>
  );
}
