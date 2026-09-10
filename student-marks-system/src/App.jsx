import { useState } from "react";

import StudentList from "./components/StudentList";
import Student from "./components/Student";
import MarksForm from "./components/MarksForm";
import Result from "./components/Result";
import Grade from "./components/Grade";

import "./App.css";

function App() {
  const students = [
    {
      id: "23CS101",
      name: "Rahul",
      department: "CSE"
    },
    {
      id: "23CS102",
      name: "Ananya",
      department: "CSE"
    },
    {
      id: "23CS103",
      name: "Rushikethana",
      department: "CSE"
    }
  ];

  const subjects = [
    "DevOps",
    "Full Stack Development",
    "Database Management",
    "Machine Learning",
    "Computer Networks"
  ];

  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  const [marks, setMarks] = useState({
    DevOps: "",
    "Full Stack Development": "",
    "Database Management": "",
    "Machine Learning": "",
    "Computer Networks": ""
  });

  const [search, setSearch] = useState("");

  const handleStudentSelect = (student) => {
    setSelectedStudent(student);

    setMarks({
      DevOps: "",
      "Full Stack Development": "",
      "Database Management": "",
      "Machine Learning": "",
      "Computer Networks": ""
    });
  };

  const handleMarksChange = (subject, value) => {
    setMarks((previousMarks) => ({
      ...previousMarks,
      [subject]: value
    }));
  };

  const markValues = Object.values(marks).filter(
    (mark) => mark !== "" && mark !== undefined
  );

  const total = markValues.reduce(
    (sum, mark) => sum + Number(mark),
    0
  );

  const average =
    markValues.length > 0 ? total / markValues.length : 0;

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(search.toLowerCase())
  );

  const classAverage =
    students.reduce((sum, student) => sum + 75, 0) / students.length;

  return (
    <div className="app">

      <header className="header">
        <h1>SR University</h1>
        <p>Student Marks and Grade Management System</p>
      </header>

      <main className="container">

        <h2>Student Management</h2>

        <div className="search-box">
          <input
            type="text"
            placeholder="Search student by name"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="dashboard">

          <StudentList
            students={filteredStudents}
            selectedStudent={selectedStudent}
            onSelectStudent={handleStudentSelect}
          />

          <Student student={selectedStudent} />

          <MarksForm
            subjects={subjects}
            marks={marks}
            onMarksChange={handleMarksChange}
          />

          <Result marks={marks} />

          <Grade average={average} />

        </div>

        <div className="class-average">
          <h2>Class Average</h2>
          <p>{classAverage.toFixed(2)}%</p>
        </div>

      </main>

      <footer className="footer">
        <p>© 2026 SR University | DevOps and Full Stack Lab</p>
      </footer>

    </div>
  );
}

export default App;