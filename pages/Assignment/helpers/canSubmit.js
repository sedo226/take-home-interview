import moment from "moment";

/* Can Submit IF:
- assignment.assignmentStatus === "Submitted" && assignment.score < 80 && assignment.dueDate <= 30 days ago
OR
- assignment.assignmentStatus === "To Do" && assignment.dueDate <= 30 days ago
*/

export const canSubmit = (assignment) => {
  let canSubmit = false;
  const dueDateIsMoreThanThirtyDaysAgo = moment(assignment.dueDate).isBefore(
    moment().subtract(30, "days").format("YYYY-MM-DD")
  );
  if (
    assignment.assignmentStatus === "Submitted" &&
    assignment.score < 80 &&
    !dueDateIsMoreThanThirtyDaysAgo
  ) {
    canSubmit = true;
  }
  if (
    assignment.assignmentStatus === "To Do" &&
    !dueDateIsMoreThanThirtyDaysAgo
  ) {
    canSubmit = true;
  }
  return canSubmit;
};
