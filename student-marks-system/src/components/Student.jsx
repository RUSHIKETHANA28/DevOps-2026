function Student({ student }) {
  return (
    <div className="card">
      <h2>Student Information</h2>

      <p>
        <strong>Student ID:</strong> {student.id}
      </p>

      <p>
        <strong>Name:</strong> {student.name}
      </p>

      <p>
        <strong>Department:</strong> {student.department}
      </p>
    </div>
  );
}

export default Student;