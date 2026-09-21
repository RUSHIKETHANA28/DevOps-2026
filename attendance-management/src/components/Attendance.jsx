function Attendance({ student, onAttendanceUpdate }) {
  return (
    <div className="attendance">
      <p>
        <strong>{student.name}</strong> — Attendance:{" "}
        {student.attendance.toFixed(2)}%
      </p>

      <button
        className="present-btn"
        onClick={() => onAttendanceUpdate(student.id, "present")}
      >
        Present
      </button>

      <button
        className="absent-btn"
        onClick={() => onAttendanceUpdate(student.id, "absent")}
      >
        Absent
      </button>
    </div>
  );
}

export default Attendance;