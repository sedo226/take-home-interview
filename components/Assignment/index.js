import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
//internal components
import Score from "./Score";
//helpers
import { canSubmit } from "./helpers/canSubmit";
import SubmitButton from "./SubmitButton";

export default function Assignment({ assignment }) {
  const showSubmitButton = canSubmit(assignment);
  return (
    <Grid item xs={12}>
      <Paper className="card-container">
        <div className="basic-flex-container flex-justify-content-space-between">
          <h2>{assignment.assignmentName}</h2>
          <div className="assignment-due-date">
            DUE DATE: {assignment.dueDate}
          </div>
        </div>
        <div>STATUS: {assignment.assignmentStatus}</div>
        {assignment.assignmentStatus === "Submitted" && (
          <Score score={assignment.score} />
        )}
        {showSubmitButton && (
          <div data-testid="assignment-submit-button">
            <SubmitButton assignmentStatus={assignment.assignmentStatus} />
          </div>
        )}
      </Paper>
    </Grid>
  );
}
