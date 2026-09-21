import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import StudentList from "./components/StudentList";
import Attendance from "./components/Attendance";
import Summary from "./components/Summary";

function App() {
  const initialStudents = [
    {
      id: 1,
      name: "Rahul",
      rollNumber: "CSE001",
      branch: "CSE",
      attendance: 82,
      status: "Present",
    },
    {
      id: 2,
      name: "Priya",
      rollNumber: "CSE002",
      branch: "CSE",
      attendance: 68,
      status: "Absent",
    },
    {
      id: 3,
      name: "Arjun",
      rollNumber: "ECE001",
      branch: "ECE",
      attendance: 91,
      status: "Present",
    },
    {
      id: 4,
      name: "Sneha",
      rollNumber: "ECE002",
      branch: "ECE",
      attendance: 74,
      status: "Absent",
    },
    {
      id: 5,
      name: "Kiran",
      rollNumber: "CSE003",
      branch: "CSE",
      attendance: 77,
      status: "Present",
    },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [search, setSearch] = useState("");

  const handleAttendanceUpdate = (id, status) => {
    setStudents((currentStudents) =>
      currentStudents.map((student) => {
        if (student.id === id) {
          let newAttendance = student.attendance;

          if (status === "present") {
            newAttendance = Math.min(student.attendance + 1, 100);
          } else {
            newAttendance = Math.max(student.attendance - 1, 0);
          }

          return {
            ...student,
            attendance: newAttendance,
            status: status === "present" ? "Present" : "Absent",
          };
        }

        return student;
      })
    );
  };

  const resetAttendance = () => {
    setStudents(initialStudents);
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.rollNumber.toLowerCase().includes(search.toLowerCase()) ||
      student.branch.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header />

      <Summary students={students} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search student..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />

        <button onClick={resetAttendance}>
          Reset Attendance
        </button>
      </div>

      <h2>Student List</h2>

      <StudentList
        students={filteredStudents}
        onAttendanceUpdate={handleAttendanceUpdate}
      />

      <h2>Attendance Update</h2>

      {filteredStudents.map((student) => (
        <Attendance
          key={student.id}
          student={student}
          onAttendanceUpdate={handleAttendanceUpdate}
        />
      ))}
    </div>
  );
}

export default App;