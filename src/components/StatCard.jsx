import React from "react";

function StatCard({
  title,
  value,
  icon,
  description,
  trend,
}) {
  return (
    <div className="stat-card">
      <div className="stat-top">
        <div>
          <p className="stat-title">{title}</p>

          <h2 className="stat-value">
            {value}
          </h2>
        </div>

        <div className="stat-icon">
          {icon}
        </div>
      </div>

      <div className="stat-bottom">
        {trend && (
          <span className="stat-trend">
            {trend}
          </span>
        )}

        <span className="stat-description">
          {description}
        </span>
      </div>
    </div>
  );
}

export default StatCard;