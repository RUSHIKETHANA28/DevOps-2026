function StudentCard({ student }) {
  const eligible = student.attendance >= 75;

  return (
    <div className="student-card">
      <h2>{student.name}</h2>

      <p>
        <strong>Roll Number:</strong> {student.rollNumber}
      </p>

      <p>
        <strong>Branch:</strong> {student.branch}
      </p>

      <p>
        <strong>Attendance:</strong> {student.attendance}%
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className={eligible ? "eligible" : "not-eligible"}>
          {eligible ? "Eligible" : "Not Eligible"}
        </span>
      </p>

      <button>View Profile</button>
    </div>
  );
}

export default StudentCard;