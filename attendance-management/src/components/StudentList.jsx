import StudentCard from "./StudentCard";

function StudentList({ students, onAttendanceUpdate }) {
  return (
    <div className="student-list">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onAttendanceUpdate={onAttendanceUpdate}
        />
      ))}
    </div>
  );
}

export default StudentList;