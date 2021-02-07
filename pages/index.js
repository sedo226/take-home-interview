import Head from "next/head";
import Assignment from "./Assignment";

export default function Assignments(props) {
  console.log(props);
  return (
    <div>
      <Head>
        <title>Student Assignments</title>
      </Head>
      {props.data.length > 0 ? (
        props.data.map((assignment) => (
          <Assignment key={assignment.id} assignment={assignment} />
        ))
      ) : (
        <div>No Assignments Found</div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("http://localhost:3000/api/assignments");
  const data = await res.json();
  return { props: { data } };
}
