
import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <h1>Student Management System</h1>
      <p>Welcome to Student Dashboard</p>
    </header>
  );
}

function StudentList() {
  const students = [
    { roll: 101, name: "Sujith", marks: 85 },
    { roll: 102, name: "Balaji", marks: 45 },
    { roll: 103, name: "Krithika", marks: 92 },
    { roll: 104, name: "Sai", marks: 30 },
    { roll: 105, name: "Pramodh", marks: 67 }
  ];

  return (
    <div className="container">
      <h2>Student List</h2>

      <table>
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Marks</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {students.map((student) => (
            <tr key={student.roll}>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.marks}</td>
              <td>
                <span className={
                  student.marks >= 40 ? "pass" : "fail"
                }>
                  {student.marks >= 40 ? "Pass" : "Fail"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Footer() {
  return (
    <footer>
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Header />
      <StudentList />
      <Footer />
    </div>
  );
}

export default App;
