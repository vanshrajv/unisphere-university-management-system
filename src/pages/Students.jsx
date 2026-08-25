import React, { useState } from "react";

const studentsData = [
  {
    id: "GU26CSE001",
    name: "Vansh Raj",
    department: "CSE - AIML",
    semester: "5th",
    email: "vansh@unisphere.com",
    cgpa: "8.74",
  },
  {
    id: "GU26CSE002",
    name: "Anuvansh Bhardwaj",
    department: "CSE - AIML",
    semester: "5th",
    email: "anuvansh@unisphere.com",
    cgpa: "8.61",
  },
  {
    id: "GU26CSE003",
    name: "Vanshika Sharma",
    department: "CSE - AIML",
    semester: "5th",
    email: "vanshika@unisphere.com",
    cgpa: "9.02",
  },
  {
    id: "GU26CSE004",
    name: "Aarav Kumar",
    department: "CSE",
    semester: "5th",
    email: "aarav@unisphere.com",
    cgpa: "8.45",
  },
  {
    id: "GU26ECE005",
    name: "Priya Singh",
    department: "ECE",
    semester: "5th",
    email: "priya@unisphere.com",
    cgpa: "8.78",
  },
  {
    id: "GU26ME006",
    name: "Rahul Verma",
    department: "Mechanical",
    semester: "5th",
    email: "rahul@unisphere.com",
    cgpa: "7.96",
  },
  {
    id: "GU26BBA007",
    name: "Neha Gupta",
    department: "BBA",
    semester: "5th",
    email: "neha@unisphere.com",
    cgpa: "8.31",
  },
];

function Students() {
  const [search, setSearch] = useState("");

  const filteredStudents = studentsData.filter(
    (student) =>
      student.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.id
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      student.department
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Students</h1>
          <p>
            Manage university student records.
          </p>
        </div>

        <button className="primary-button">
          + Add Student
        </button>

      </div>

      <div className="content-card">

        <div className="table-toolbar">

          <input
            className="search-input"
            placeholder="Search student..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <select className="filter-select">
            <option>All Departments</option>
            <option>CSE - AIML</option>
            <option>CSE</option>
            <option>ECE</option>
            <option>Mechanical</option>
            <option>BBA</option>
          </select>

        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Student</th>
                <th>ID</th>
                <th>Department</th>
                <th>Semester</th>
                <th>CGPA</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredStudents.map((student) => (
                <tr key={student.id}>

                  <td>
                    <div className="student-cell">

                      <div className="table-avatar">
                        {student.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {student.name}
                        </strong>

                        <small>
                          {student.email}
                        </small>
                      </div>

                    </div>
                  </td>

                  <td>{student.id}</td>

                  <td>
                    <span className="badge">
                      {student.department}
                    </span>
                  </td>

                  <td>{student.semester}</td>

                  <td>
                    <strong>{student.cgpa}</strong>
                  </td>

                  <td>
                    <button className="action-button">
                      View
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Students;