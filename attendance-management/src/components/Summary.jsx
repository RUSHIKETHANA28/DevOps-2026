function Summary({ students }) {
  const totalStudents = students.length;

  const presentStudents = students.filter(
    (student) => student.status === "Present"
  ).length;

  const absentStudents = students.filter(
    (student) => student.status === "Absent"
  ).length;

  const eligibleStudents = students.filter(
    (student) => student.attendance >= 75
  ).length;

  return (
    <div className="summary-section">
      <div className="summary-header">
        <div>
          <p className="section-label">OVERVIEW</p>
          <h2>Attendance Summary</h2>
        </div>
      </div>

      <div className="summary-grid">
        <div className="stat-card total-card">
          <div className="stat-icon">👨‍🎓</div>
          <div>
            <p>Total Students</p>
            <h3>{totalStudents}</h3>
          </div>
        </div>

        <div className="stat-card present-card">
          <div className="stat-icon">✓</div>
          <div>
            <p>Present</p>
            <h3>{presentStudents}</h3>
          </div>
        </div>

        <div className="stat-card absent-card">
          <div className="stat-icon">✕</div>
          <div>
            <p>Absent</p>
            <h3>{absentStudents}</h3>
          </div>
        </div>

        <div className="stat-card eligible-card">
          <div className="stat-icon">★</div>
          <div>
            <p>Eligible</p>
            <h3>{eligibleStudents}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;