import React from "react";

function Courses() {
  const courses = [
    ["CS501", "Artificial Intelligence", "CSE - AIML", "4"],
    ["CS502", "Machine Learning", "CSE - AIML", "4"],
    ["CS503", "Data Science", "CSE - AIML", "3"],
    ["CS504", "Cloud Computing", "CSE", "4"],
    ["CS505", "Computer Networks", "CSE", "4"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Courses</h1>
          <p>Available university courses.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Code</th>
                <th>Course</th>
                <th>Department</th>
                <th>Credits</th>
              </tr>
            </thead>

            <tbody>
              {courses.map((course) => (
                <tr key={course[0]}>
                  <td>{course[0]}</td>
                  <td><strong>{course[1]}</strong></td>
                  <td>{course[2]}</td>
                  <td>{course[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Courses;