function StudentProfile({ name, rollNumber, branch, year }) {
  return (
    <div className="card">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Roll Number:</strong> {rollNumber}
      </p>

      <p>
        <strong>Branch:</strong> {branch}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>
    </div>
  );
}

export default StudentProfile;