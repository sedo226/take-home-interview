import { getByTestId, render, screen } from "@testing-library/react";
import App from "../pages/index";
import Assignment from "../components/Assignment/index";
import Score from "../components/Assignment/Score";
import moment from "moment";

describe("App", () => {
  it("renders without crashing", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", { name: "Student Assignments" })
    ).toBeInTheDocument();
  });
});

describe("Assignment", () => {
  it("should show submit button when: status is 'Submitted', score is less than 80, and due date is less than or equal to 30 days ago", () => {
    const { getByTestId } = render(
      <Assignment
        assignment={{
          assignmentStatus: "Submitted",
          score: Math.floor(Math.random() * 80),
          dueDate: moment()
            .subtract(Math.floor(Math.random() * 31), "days")
            .format("YYYY-MM-DD"),
        }}
      />
    );
    getByTestId("assignment-submit-button");
  });

  it("should show submit button when: status is 'Not Submitted' and due date is less than or equal to 30 days ago", () => {
    const { getByTestId } = render(
      <Assignment
        assignment={{
          assignmentStatus: "Not Submitted",
          dueDate: moment()
            .subtract(Math.floor(Math.random() * 31), "days")
            .format("YYYY-MM-DD"),
        }}
      />
    );
    getByTestId("assignment-submit-button");
  });

  it("should show assignment score when status is 'Submitted'", () => {
    const { getByTestId } = render(
      <Assignment
        assignment={{
          assignmentStatus: "Submitted",
        }}
      />
    );
    getByTestId("assignment-score");
  });
});

describe("Score", () => {
  it("should read as 'Failed' if assignment score is less than 80%", () => {
    const { getByText } = render(
      <Score score={Math.floor(Math.random() * 80)} />
    );
    expect(getByText("Failed")).toBeTruthy();
  });

  it("should read as 'Passed' if assignment score is greater than or equal to 80%", () => {
    const { getByText } = render(
      <Score score={Math.floor(Math.random() * 21) + 80} />
    );
    expect(getByText("Passed")).toBeTruthy();
  });
});
