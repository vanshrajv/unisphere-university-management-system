import React from "react";

function Dashboard({ user }) {
  const isAdmin = user?.role === "admin";

  return (
    <div>

      <div className="page-heading">
        <div>
          <h1>Dashboard</h1>
          <p>
            {isAdmin
              ? "Manage your university from one place."
              : "Here's your academic overview."}
          </p>
        </div>
      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-icon purple">
            👨‍🎓
          </div>
          <div>
            <span>
              {isAdmin ? "Total Students" : "Student ID"}
            </span>
            <strong>
              {isAdmin ? "2,548" : "GU26CSE001"}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon blue">
            📚
          </div>
          <div>
            <span>
              {isAdmin ? "Total Courses" : "Courses"}
            </span>
            <strong>
              {isAdmin ? "86" : "6"}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon green">
            📅
          </div>
          <div>
            <span>
              Attendance
            </span>
            <strong>
              {isAdmin ? "91.4%" : "87%"}
            </strong>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon orange">
            📝
          </div>
          <div>
            <span>
              {isAdmin ? "Faculty" : "CGPA"}
            </span>
            <strong>
              {isAdmin ? "142" : "8.74"}
            </strong>
          </div>
        </div>

      </div>

      <div className="dashboard-grid">

        <section className="content-card">

          <div className="card-header">
            <div>
              <h2>Recent Activity</h2>
              <p>Latest university updates</p>
            </div>
          </div>

          <div className="activity-list">

            <div className="activity">
              <span>📢</span>
              <div>
                <strong>Semester Examination Notice</strong>
                <p>End semester examination schedule released.</p>
              </div>
            </div>

            <div className="activity">
              <span>📚</span>
              <div>
                <strong>Course Registration</strong>
                <p>Course registration is now open.</p>
              </div>
            </div>

            <div className="activity">
              <span>💳</span>
              <div>
                <strong>Fee Payment</strong>
                <p>Last date for semester fee payment announced.</p>
              </div>
            </div>

          </div>

        </section>

        <section className="content-card">

          <div className="card-header">
            <div>
              <h2>Profile</h2>
              <p>Your information</p>
            </div>
          </div>

          <div className="profile-summary">

            <div className="big-avatar">
              {user?.name?.charAt(0)}
            </div>

            <h3>{user?.name}</h3>

            <p>
              {isAdmin
                ? "University Administrator"
                : "B.Tech CSE AIML • 5th Semester"}
            </p>

            <div className="profile-details">
              <div>
                <span>Email</span>
                <strong>{user?.email}</strong>
              </div>

              {!isAdmin && (
                <div>
                  <span>Department</span>
                  <strong>CSE - AIML</strong>
                </div>
              )}
            </div>

          </div>

        </section>

      </div>

    </div>
  );
}

export default Dashboard;