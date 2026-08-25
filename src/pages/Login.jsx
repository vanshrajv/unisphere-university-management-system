import React, { useState } from "react";

function Login({ onLogin }) {
  const [role, setRole] = useState("student");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    if (role === "admin") {
      if (
        email === "admin@unisphere.com" &&
        password === "admin123"
      ) {
        onLogin({
          role: "admin",
          name: "UniSphere Administrator",
          email,
        });
      } else {
        setError("Invalid admin credentials.");
      }
    } else {
      if (
        email === "vansh@unisphere.com" &&
        password === "123456"
      ) {
        onLogin({
          role: "student",
          name: "Vansh Raj",
          email,
          course: "B.Tech CSE AIML",
          semester: "5th Semester",
        });
      } else {
        setError("Invalid student credentials.");
      }
    }
  };

  return (
    <div className="login-page">

      <div className="login-card">

        <div className="login-logo">
          U
        </div>

        <h1>UniSphere</h1>

        <p className="login-subtitle">
          University Management Portal
        </p>

        <div className="role-buttons">

          <button
            className={role === "student" ? "role-active" : ""}
            onClick={() => {
              setRole("student");
              setError("");
            }}
          >
            🎓 Student
          </button>

          <button
            className={role === "admin" ? "role-active" : ""}
            onClick={() => {
              setRole("admin");
              setError("");
            }}
          >
            🛡️ Admin
          </button>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Email</label>

            <input
              type="email"
              placeholder={
                role === "student"
                  ? "vansh@unisphere.com"
                  : "admin@unisphere.com"
              }
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-group">
            <label>Password</label>

            <input
              type="password"
              placeholder={
                role === "student"
                  ? "123456"
                  : "admin123"
              }
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="login-error">
              {error}
            </div>
          )}

          <button className="login-button" type="submit">
            Login as {role === "student" ? "Student" : "Admin"}
          </button>

        </form>

        <div className="demo-login">

          <strong>Demo Login</strong>

          {role === "student" ? (
            <>
              <span>Email: vansh@unisphere.com</span>
              <span>Password: 123456</span>
            </>
          ) : (
            <>
              <span>Email: admin@unisphere.com</span>
              <span>Password: admin123</span>
            </>
          )}

        </div>

      </div>

    </div>
  );
}

export default Login;