import React from "react";

function Timetable() {
  const schedule = [
    ["09:00 AM", "Artificial Intelligence", "Room 301"],
    ["10:00 AM", "Machine Learning", "Room 302"],
    ["11:00 AM", "Data Science", "Lab 2"],
    ["01:00 PM", "Computer Networks", "Room 204"],
    ["02:00 PM", "Cloud Computing", "Room 205"],
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Timetable</h1>
          <p>Weekly class schedule.</p>
        </div>
      </div>

      <div className="content-card">
        {schedule.map((item, index) => (
          <div className="schedule-item" key={index}>
            <strong>{item[0]}</strong>
            <span>{item[1]}</span>
            <small>{item[2]}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timetable;