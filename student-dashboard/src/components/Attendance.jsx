function Attendance({ percentage }) {
  const eligible = percentage >= 75;

  return (
    <div className="card">
      <h2>Attendance</h2>

      <p>
        Attendance Percentage: <strong>{percentage}%</strong>
      </p>

      <p>
        Status:{" "}
        <strong>
          {eligible ? "Eligible" : "Not Eligible"}
        </strong>
      </p>
    </div>
  );
}

export default Attendance;