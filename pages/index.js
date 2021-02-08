import Head from "next/head";
import Assignment from "./Assignment/index.js";
import Grid from "@material-ui/core/Grid";

export default function Assignments(props) {
  console.log(props);
  const assignmentsCount = props.data.length;
  const assignmentsCompleted = props.data.filter(
    (assignment) => assignment.score >= 80
  ).length;
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
        {assignmentsCompleted} Assignment(s) Completed
      </div>
      <Grid container spacing={2} justify="center">
        {props.data.length > 0 ? (
          props.data
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
