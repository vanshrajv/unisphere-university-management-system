import React from "react";

function Exams() {
  const exams = [
    ["Artificial Intelligence", "15 Nov 2026", "10:00 AM"],
    ["Machine Learning", "18 Nov 2026", "10:00 AM"],
    ["Data Science", "21 Nov 2026", "10:00 AM"],
    ["Computer Networks", "24 Nov 2026", "10:00 AM"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Examinations</h1>
          <p>Upcoming examination schedule.</p>
        </div>
      </div>

      <div className="content-card">
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Date</th>
                <th>Time</th>
              </tr>
            </thead>

            <tbody>
              {exams.map((exam, index) => (
                <tr key={index}>
                  <td><strong>{exam[0]}</strong></td>
                  <td>{exam[1]}</td>
                  <td>{exam[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Exams;