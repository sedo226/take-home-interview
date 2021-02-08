import Button from "@material-ui/core/Button";
//helpers

export default function SubmitButton(props) {
  const handleSubmit = () => {
    console.log("implement submit functionality");
  };
  return (
    <Button
      color="primary"
      className="assignment-submit-button"
      onClick={handleSubmit}
    >
      {props.assignmentStatus === "Submitted" ? "Resubmit" : "Submit"}{" "}
      Assignment
    </Button>
  );
}
