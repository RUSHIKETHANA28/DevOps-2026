function StudentCard({ student, onAttendanceUpdate }) {
  const isLowAttendance = student.attendance < 75;

  return (
    <div className={`student-card ${isLowAttendance ? "low-attendance" : ""}`}>
      <div className="student-top">
        <div className="student-avatar">
          {student.name.charAt(0)}
        </div>

        <div className="student-title">
          <h3>{student.name}</h3>
          <span>{student.rollNumber}</span>
        </div>

        <span
          className={`status-badge ${
            isLowAttendance ? "not-eligible" : "eligible"
          }`}
        >
          {isLowAttendance ? "Not Eligible" : "Eligible"}
        </span>
      </div>

      <div className="student-info">
        <div>
          <span>Branch</span>
          <strong>{student.branch}</strong>
        </div>

        <div>
          <span>Attendance</span>
          <strong>{student.attendance.toFixed(2)}%</strong>
        </div>
      </div>

      <div className="progress-container">
        <div className="progress-label">
          <span>Attendance Progress</span>
          <span>{student.attendance.toFixed(0)}%</span>
        </div>

        <div className="progress-bar">
          <div
            className={`progress-fill ${
              isLowAttendance ? "progress-low" : ""
            }`}
            style={{ width: `${student.attendance}%` }}
          ></div>
        </div>
      </div>

      <div className="attendance-buttons">
        <button
          className="present-btn"
          onClick={() => onAttendanceUpdate(student.id, "present")}
        >
          ✓ Present
        </button>

        <button
          className="absent-btn"
          onClick={() => onAttendanceUpdate(student.id, "absent")}
        >
          ✕ Absent
        </button>
      </div>
    </div>
  );
}

export default StudentCard;