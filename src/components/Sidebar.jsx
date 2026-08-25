import React from "react";

function Sidebar({
  activePage,
  setActivePage,
  user,
  onLogout,
}) {
  const adminMenu = [
    ["📊", "Dashboard"],
    ["👨‍🎓", "Students"],
    ["👨‍🏫", "Faculty"],
    ["📚", "Courses"],
    ["📅", "Attendance"],
    ["💳", "Fees"],
    ["🗓️", "Timetable"],
    ["📝", "Exams"],
    ["🏆", "Results"],
    ["📢", "Notices"],
  ];

  const studentMenu = [
    ["📊", "Dashboard"],
    ["👤", "My Profile"],
    ["📚", "Courses"],
    ["📅", "Attendance"],
    ["💳", "Fees"],
    ["🗓️", "Timetable"],
    ["📝", "Exams"],
    ["🏆", "Results"],
    ["📢", "Notices"],
  ];

  const menu =
    user?.role === "admin"
      ? adminMenu
      : studentMenu;

  const handleMenuClick = (page) => {
    if (page === "My Profile") {
      setActivePage("Dashboard");
    } else {
      setActivePage(page);
    }
  };

  return (
    <aside className="sidebar">

      <div className="sidebar-logo">

        <div className="logo-circle">
          U
        </div>

        <div>
          <h2>UniSphere</h2>
          <span>
            {user?.role === "admin"
              ? "Admin Portal"
              : "Student Portal"}
          </span>
        </div>

      </div>

      <div className="menu-title">
        MAIN MENU
      </div>

      <nav>

        {menu.map(([icon, name]) => (
          <button
            key={name}
            className={
              activePage === name
                ? "sidebar-item active"
                : "sidebar-item"
            }
            onClick={() => handleMenuClick(name)}
          >
            <span className="menu-icon">
              {icon}
            </span>

            <span>{name}</span>
          </button>
        ))}

      </nav>

      <div className="sidebar-bottom">

        <button
          className="logout-button"
          onClick={onLogout}
        >
          🚪 Logout
        </button>

        <div className="version">
          UniSphere v1.0
        </div>

      </div>

    </aside>
  );
}

export default Sidebar;