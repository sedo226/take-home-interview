import { getByTestId, render, screen } from "@testing-library/react";
import App from "../pages/index";
import Assignment from "../components/Assignment/index";
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
          score: Math.floor(Math.random() * 79) + 0,
          dueDate: moment()
            .subtract(Math.floor(Math.random() * 30) + 0, "days")
            .format("YYYY-MM-DD"),
        }}
      />
    );
    getByTestId("assignment-submit-button");
  });

  it("should show submit button when: status is 'To Do' and due date is less than or equal to 30 days ago)", () => {
    const { getByTestId } = render(
      <Assignment
        assignment={{
          assignmentStatus: "To Do",
          dueDate: moment()
            .subtract(Math.floor(Math.random() * 30) + 0, "days")
            .format("YYYY-MM-DD"),
        }}
      />
    );
    getByTestId("assignment-submit-button");
  });
});
