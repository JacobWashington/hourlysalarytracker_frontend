import React from "react";
import "./Day.css"; // Import your CSS styles

const Day = ({ dayName, shifts }) => {
  const calculatePercentage = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / (24 * 60)) * 100; // Normalize to percentage
  };

  return (
    <div className="upc-day-container">
      <div className="day-name">{dayName}</div>
      <div className="shift-hours">
        <div className="progress-bar">
          {shifts.map((shift, index) => {
            const startPercentage = calculatePercentage(shift.start);
            const endPercentage = calculatePercentage(shift.end);
            return (
              <div
                key={index}
                className={`shift-highlight ${shift.shiftType.toLowerCase()}`} // Add class based on shift type
                style={{
                  left: `${startPercentage}%`,
                  width: `${endPercentage - startPercentage}%`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="edit-day-container">
        <div className="add-shift-selector">+</div>
        <div className="remove-shift-selector">-</div>
      </div>
    </div>
  );
};

export default Day;
