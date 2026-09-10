function Grade({ average }) {
  let grade;
  let status;

  if (average >= 90) {
    grade = "A+";
  } else if (average >= 80) {
    grade = "A";
  } else if (average >= 70) {
    grade = "B";
  } else if (average >= 60) {
    grade = "C";
  } else if (average >= 50) {
    grade = "D";
  } else {
    grade = "F";
  }

  status = average >= 50 ? "Pass" : "Fail";

  return (
    <div className="card">
      <h2>Grade</h2>

      <p>
        <strong>Grade:</strong> {grade}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={status === "Pass" ? "pass" : "fail"}>
          {status}
        </span>
      </p>
    </div>
  );
}

export default Grade;