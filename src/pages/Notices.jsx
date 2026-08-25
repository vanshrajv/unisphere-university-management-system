import React from "react";

function Notices() {
  const notices = [
    {
      title: "End Semester Examination",
      date: "25 Aug 2026",
      text: "End semester examination schedule has been published.",
    },
    {
      title: "Fee Payment Reminder",
      date: "23 Aug 2026",
      text: "Students are requested to complete their semester fee payment.",
    },
    {
      title: "Course Registration",
      date: "20 Aug 2026",
      text: "Course registration portal is now open for students.",
    },
    {
      title: "University Holiday",
      date: "18 Aug 2026",
      text: "University will remain closed on the announced holiday.",
    },
  ];

  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Notices</h1>
          <p>Latest university announcements.</p>
        </div>
      </div>

      <div className="notice-grid">
        {notices.map((notice, index) => (
          <div className="notice-card" key={index}>

            <div className="notice-icon">
              📢
            </div>

            <div>
              <span>{notice.date}</span>
              <h3>{notice.title}</h3>
              <p>{notice.text}</p>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default Notices;