import React from "react";

function Attendance() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Attendance</h1>
          <p>Track academic attendance.</p>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon green">✓</div>
          <div>
            <span>Overall Attendance</span>
            <strong>87%</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">📚</div>
          <div>
            <span>Classes Attended</span>
            <strong>104</strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">⚠️</div>
          <div>
            <span>Classes Missed</span>
            <strong>16</strong>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h2>Subject Attendance</h2>

        <div className="attendance-row">
          <span>Artificial Intelligence</span>
          <strong>92%</strong>
        </div>

        <div className="attendance-row">
          <span>Machine Learning</span>
          <strong>88%</strong>
        </div>

        <div className="attendance-row">
          <span>Data Science</span>
          <strong>84%</strong>
        </div>

        <div className="attendance-row">
          <span>Computer Networks</span>
          <strong>81%</strong>
        </div>
      </div>
    </div>
  );
}

export default Attendance;