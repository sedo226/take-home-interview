import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//internal components
import Score from "./Score";
//helpers
import { canSubmit } from "./helpers/canSubmit";
import SubmitButton from "./SubmitButton";

export default function Assignments(props) {
  const showSubmitButton = canSubmit(props.assignment);
  return (
    <Grid item xs={12}>
      <Paper className="card-container">
        <div className="basic-flex-container flex-justify-content-space-between">
          <h2>{props.assignment.assignmentName}</h2>
          <div className="assignment-due-date">
            DUE DATE: {props.assignment.dueDate}
          </div>
        </div>
        <div>STATUS: {props.assignment.assignmentStatus}</div>
        {props.assignment.assignmentStatus === "Submitted" && (
          <Score score={props.assignment.score} />
        )}
        {showSubmitButton && (
          <SubmitButton assignmentStatus={props.assignment.assignmentStatus} />
        )}
      </Paper>
    </Grid>
  );
}
