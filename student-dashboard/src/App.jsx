import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import SubjectList from "./components/SubjectList";
import Attendance from "./components/Attendance";
import ExamDetails from "./components/ExamDetails";
import Footer from "./components/Footer";
import StudentCard from "./components/StudentCard";
import "./App.css";

function App() {
  const subjects = [
    "DevOps and Full Stack Development",
    "Database Management Systems",
    "Machine Learning",
    "Computer Networks",
    "Operating Systems"
  ];

  const exam = {
    name: "Mid-Term Examination",
    date: "25 September 2026",
    semester: "Odd Semester",
    venue: "Block A - Room 204"
  };

  const students = [
    {
      name: "Rushikethana",
      rollNumber: "23CS100",
      branch: "CSE",
      attendance: 85
    },
    {
      name: "Rahul",
      rollNumber: "23CS101",
      branch: "CSE",
      attendance: 72
    },
    {
      name: "Ananya",
      rollNumber: "23CS102",
      branch: "CSE",
      attendance: 91
    }
  ];

  return (
    <div className="app">

      <Header />

      <main className="dashboard">

        <h1>Student Management Dashboard</h1>

        {/* Main Dashboard Cards */}
        <div className="dashboard-grid">

          <StudentProfile
            name="Rushikethana"
            rollNumber="23CSXXX"
            branch="Computer Science and Engineering"
            year="3rd Year"
          />

          <SubjectList subjects={subjects} />

          <Attendance percentage={85} />

          <ExamDetails exam={exam} />

        </div>

        {/* Bonus Student Cards */}
        <section className="students-section">

          <h2>Students</h2>

          <div className="student-grid">

            {students.map((student, index) => (
              <StudentCard
                key={index}
                student={student}
              />
            ))}

          </div>

        </section>

      </main>

      <Footer />

    </div>
  );
}

export default App;