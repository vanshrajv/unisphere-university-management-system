import React from "react";

function Navbar({ user, onLogout }) {
  return (
    <header className="navbar">

      <div>
        <h2>University Management System</h2>

        <p>
          Welcome back, {user?.name}
        </p>
      </div>

      <div className="navbar-right">

        <button className="notification-button">
          🔔
          <span></span>
        </button>

        <div className="user-profile">

          <div className="user-avatar">
            {user?.name?.charAt(0) || "U"}
          </div>

          <div className="user-info">
            <strong>
              {user?.name}
            </strong>

            <small>
              {user?.role === "admin"
                ? "Administrator"
                : "B.Tech CSE AIML"}
            </small>
          </div>

        </div>

        <button
          className="nav-logout"
          onClick={onLogout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Navbar;