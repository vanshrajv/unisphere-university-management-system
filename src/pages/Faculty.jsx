import React, { useState } from "react";

const facultyData = [
  {
    id: "FAC001",
    name: "Dr. Rajesh Kumar",
    department: "CSE - AIML",
    subject: "Artificial Intelligence",
    email: "rajesh@unisphere.com",
  },
  {
    id: "FAC002",
    name: "Dr. Priya Sharma",
    department: "CSE - AIML",
    subject: "Machine Learning",
    email: "priya.faculty@unisphere.com",
  },
  {
    id: "FAC003",
    name: "Dr. Amit Verma",
    department: "CSE",
    subject: "Data Structures",
    email: "amit@unisphere.com",
  },
  {
    id: "FAC004",
    name: "Dr. Neha Gupta",
    department: "ECE",
    subject: "Digital Electronics",
    email: "neha.faculty@unisphere.com",
  },
];

function Faculty() {
  const [search, setSearch] = useState("");
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const filteredFaculty = facultyData.filter(
    (faculty) =>
      faculty.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      faculty.department
        .toLowerCase()
        .includes(search.toLowerCase())
  );

  return (
    <div>

      <div className="page-heading">

        <div>
          <h1>Faculty</h1>
          <p>
            Manage university faculty members.
          </p>
        </div>

        <button className="primary-button">
          + Add Faculty
        </button>

      </div>

      <div className="content-card">

        <div className="table-toolbar">

          <input
            className="search-input"
            placeholder="Search faculty..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

        </div>

        <div className="table-wrapper">

          <table>

            <thead>
              <tr>
                <th>Faculty</th>
                <th>Faculty ID</th>
                <th>Department</th>
                <th>Subject</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {filteredFaculty.map((faculty) => (
                <tr key={faculty.id}>

                  <td>
                    <div className="student-cell">

                      <div className="table-avatar faculty-avatar">
                        {faculty.name.charAt(0)}
                      </div>

                      <div>
                        <strong>
                          {faculty.name}
                        </strong>

                        <small>
                          {faculty.email}
                        </small>
                      </div>

                    </div>
                  </td>

                  <td>{faculty.id}</td>

                  <td>
                    <span className="badge">
                      {faculty.department}
                    </span>
                  </td>

                  <td>{faculty.subject}</td>

                  <td>
                    <button
                      className="action-button"
                      onClick={() =>
                        setSelectedFaculty(faculty)
                      }
                    >
                      View Profile
                    </button>
                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

      {selectedFaculty && (
        <div
          className="modal-overlay"
          onClick={() =>
            setSelectedFaculty(null)
          }
        >

          <div
            className="modal-box"
            onClick={(e) =>
              e.stopPropagation()
            }
          >

            <div className="modal-header">

              <h2>Faculty Profile</h2>

              <button
                className="modal-close"
                onClick={() =>
                  setSelectedFaculty(null)
                }
              >
                ×
              </button>

            </div>

            <div className="faculty-profile">

              <div className="profile-avatar">
                {selectedFaculty.name.charAt(0)}
              </div>

              <h2>
                {selectedFaculty.name}
              </h2>

              <p>
                {selectedFaculty.department}
              </p>

              <div className="profile-info-grid">

                <div>
                  <span>Faculty ID</span>
                  <strong>
                    {selectedFaculty.id}
                  </strong>
                </div>

                <div>
                  <span>Department</span>
                  <strong>
                    {selectedFaculty.department}
                  </strong>
                </div>

                <div>
                  <span>Subject</span>
                  <strong>
                    {selectedFaculty.subject}
                  </strong>
                </div>

                <div>
                  <span>Email</span>
                  <strong>
                    {selectedFaculty.email}
                  </strong>
                </div>

              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}

export default Faculty;