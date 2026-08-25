import React from "react";

function Results() {
  const results = [
    ["Artificial Intelligence", "A+", "9.5"],
    ["Machine Learning", "A", "9.0"],
    ["Data Science", "A+", "9.5"],
    ["Computer Networks", "A", "9.0"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Results</h1>
          <p>Academic performance.</p>
        </div>
      </div>

      <div className="content-card">
        <h2>Semester Result</h2>

        <div className="cgpa-display">
          <span>Current CGPA</span>
          <strong>8.74</strong>
        </div>

        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>Subject</th>
                <th>Grade</th>
                <th>Grade Point</th>
              </tr>
            </thead>

            <tbody>
              {results.map((result, index) => (
                <tr key={index}>
                  <td>{result[0]}</td>
                  <td><span className="success-badge">{result[1]}</span></td>
                  <td>{result[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Results;