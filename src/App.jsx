import React, { useState } from "react";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Faculty from "./pages/Faculty";
import Courses from "./pages/Courses";
import Attendance from "./pages/Attendance";
import Fees from "./pages/Fees";
import Timetable from "./pages/Timetable";
import Exams from "./pages/Exams";
import Results from "./pages/Results";
import Notices from "./pages/Notices";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  const [user, setUser] = useState(null);
  const [activePage, setActivePage] = useState("Dashboard");

  const handleLogin = (loginData) => {
    setUser(loginData);
    setActivePage("Dashboard");
  };

  const handleLogout = () => {
    setUser(null);
    setActivePage("Dashboard");
  };

  // LOGIN SCREEN
  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  const renderPage = () => {
    switch (activePage) {
      case "Dashboard":
        return <Dashboard user={user} />;

      case "Students":
        return <Students />;

      case "Faculty":
        return <Faculty />;

      case "Courses":
        return <Courses />;

      case "Attendance":
        return <Attendance />;

      case "Fees":
        return <Fees />;

      case "Timetable":
        return <Timetable />;

      case "Exams":
        return <Exams />;

      case "Results":
        return <Results />;

      case "Notices":
        return <Notices />;

      default:
        return <Dashboard user={user} />;
    }
  };

  return (
    <div className="app-container">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
        user={user}
        onLogout={handleLogout}
      />

      <div className="main-container">

        <Navbar
          user={user}
          onLogout={handleLogout}
        />

        <main className="page-content">
          {renderPage()}
        </main>

      </div>

    </div>
  );
}

export default App;