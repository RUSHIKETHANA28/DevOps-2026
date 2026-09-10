import { useState } from "react";

function MarksForm({ subjects, marks, onMarksChange }) {
  const [error, setError] = useState("");

  const handleChange = (subject, value) => {
    if (value === "") {
      onMarksChange(subject, "");
      setError("");
      return;
    }

    const mark = Number(value);

    if (mark < 0 || mark > 100) {
      setError("Marks must be between 0 and 100");
      return;
    }

    setError("");
    onMarksChange(subject, mark);
  };

  return (
    <div className="card">
      <h2>Enter Marks</h2>

      {subjects.map((subject) => (
        <div className="mark-input" key={subject}>
          <label>{subject}</label>

          <input
            type="number"
            min="0"
            max="100"
            value={marks[subject] ?? ""}
            onChange={(e) => handleChange(subject, e.target.value)}
            placeholder="Enter marks"
          />
        </div>
      ))}

      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default MarksForm;