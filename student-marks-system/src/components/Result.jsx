function Result({ marks }) {
  const markValues = Object.values(marks).filter(
    (mark) => mark !== "" && mark !== undefined
  );

  const total = markValues.reduce(
    (sum, mark) => sum + Number(mark),
    0
  );

  const average =
    markValues.length > 0 ? total / markValues.length : 0;

  return (
    <div className="card">
      <h2>Result</h2>

      <p>
        <strong>Total Marks:</strong> {total}
      </p>

      <p>
        <strong>Average Marks:</strong> {average.toFixed(2)}
      </p>
    </div>
  );
}

export default Result;