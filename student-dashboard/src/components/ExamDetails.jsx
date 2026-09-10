function ExamDetails({ exam }) {
  return (
    <div className="card">
      <h2>Examination Details</h2>

      <p>
        <strong>Exam:</strong> {exam.name}
      </p>

      <p>
        <strong>Date:</strong> {exam.date}
      </p>

      <p>
        <strong>Semester:</strong> {exam.semester}
      </p>

      <p>
        <strong>Venue:</strong> {exam.venue}
      </p>
    </div>
  );
}

export default ExamDetails;