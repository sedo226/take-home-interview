// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json([
    {
      id: 456,
      assignmentName: "Assignment 3",
      assignmentStatus: "Submitted",
      dueDate: "2021-02-09",
      studentID: 1,
      score: 79,
    },
    {
      id: 789,
      assignmentName: "Assignment 5",
      assignmentStatus: "Not Submitted",
      dueDate: "2021-02-11",
      studentID: 1,
      score: null,
    },
    {
      id: 101112,
      assignmentName: "Assignment 2",
      assignmentStatus: "Submitted",
      dueDate: "2021-01-07",
      studentID: 1,
      score: 65,
    },
    {
      id: 131415,
      assignmentName: "Assignment 4",
      assignmentStatus: "Submitted",
      dueDate: "2021-02-10",
      studentID: 1,
      score: 90,
    },
    {
      id: 123,
      assignmentName: "Assignment 1",
      assignmentStatus: "Not Submitted",
      dueDate: "2021-01-05",
      studentID: 1,
      score: null,
    },
  ]);
};
