import React from "react";

function Fees() {
  return (
    <div>
      <div className="page-heading">
        <div>
          <h1>Fees</h1>
          <p>View semester fee information.</p>
        </div>
      </div>

      <div className="content-card">
        <h2>Semester Fee</h2>

        <div className="fee-box">
          <span>Total Fee</span>
          <strong>₹85,000</strong>
        </div>

        <div className="fee-box">
          <span>Paid</span>
          <strong>₹60,000</strong>
        </div>

        <div className="fee-box">
          <span>Remaining</span>
          <strong>₹25,000</strong>
        </div>

        <button className="primary-button">
          Pay Remaining Fee
        </button>
      </div>
    </div>
  );
}

export default Fees;