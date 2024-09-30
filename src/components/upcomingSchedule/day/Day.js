import React from "react";
import "./Day.css"; // Import your CSS styles

import { FaPlus, FaMinus } from "react-icons/fa";

const Day = ({ dayName, shifts }) => {
  const calculatePercentage = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / (24 * 60)) * 100; // Normalize to percentage
  };

  return (
    <div className="upc-day-container">
      <div className="upc-day-name">{dayName}</div>
      <div className="upc-shift-hours">
        <div className="upc-progress-bar">
          {shifts.map((shift, index) => {
            const startPercentage = calculatePercentage(shift.start);
            const endPercentage = calculatePercentage(shift.end);
            return (
              <div
                key={index}
                className={`upc-shift-highlight ${shift.shiftType.toLowerCase()}`} // Add class based on shift type
                style={{
                  left: `${startPercentage}%`,
                  width: `${endPercentage - startPercentage}%`,
                }}
              />
            );
          })}
        </div>
      </div>
      <div className="upc-edit-day-container">
        <div className="upc-add-shift-selector">
          <FaPlus />
        </div>
        <div className="upc-remove-shift-selector">
          <FaMinus />
        </div>
      </div>
    </div>
  );
};

export default Day;
