function StudentList({ students, selectedStudent, onSelectStudent }) {
  return (
    <div className="card">
      <h2>Student List</h2>

      {students.map((student) => (
        <button
          key={student.id}
          onClick={() => onSelectStudent(student)}
          className={selectedStudent?.id === student.id ? "selected" : ""}
        >
          {student.name}
        </button>
      ))}
    </div>
  );
}

export default StudentList;