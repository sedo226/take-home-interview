import Head from "next/head";
import Assignment from "../components/Assignment/index.js";
import Grid from "@material-ui/core/Grid";

export default function App({ data }) {
  const assignmentsCount = data ? data.length : "N/A";
  const assignmentsPassed = data
    ? data.filter((assignment) => assignment.score >= 80).length
    : "N/A";
  return (
    <div>
      <Head>
        <title>Student Assignments</title>
      </Head>
      <h1>Student Assignments</h1>
      <div className="assignment-rollup">
        {assignmentsCount} Assignment(s) Assigned
      </div>
      <div className="assignment-rollup">
        {assignmentsPassed} Assignment(s) Passed
      </div>
      <Grid container spacing={2} justify="center">
        {data && data.length > 0 ? (
          data
            .sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate))
            .map((assignment) => (
              <Assignment key={assignment.id} assignment={assignment} />
            ))
        ) : (
          <div>No Assignments Found</div>
        )}
      </Grid>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/assignments");
  const data = await res.json();
  return { props: { data } };
}
