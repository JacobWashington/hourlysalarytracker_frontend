import { React } from "react";
import "./ShiftCard.css"; // Updated to point to the CSS file
import moment from "moment-timezone";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { HiDotsHorizontal } from "react-icons/hi";

const ShiftCard = (props) => {
  const calculatePercentage = (time) => {
    const [hours, minutes] = time.split(":").map(Number);
    const totalMinutes = hours * 60 + minutes;
    return (totalMinutes / (24 * 60)) * 100; // Normalize to percentage
  };

  const startPercentage = calculatePercentage(props.nextShift.shift.start);
  const endPercentage = calculatePercentage(props.nextShift.shift.end);

  // Format the date string
  const dateString = moment
    .tz(props.nextShift.date, props.nextShift.timezone)
    .format("dddd, M-D-YYYY");

  return (
    <div className="shift-card">
      <div className="shift-card-top">
        <div className="shift-title-container">
          <div className="shift-title">Shift</div>
        </div>
        <div className="shift-edit-icon">
          <HiDotsHorizontal />
        </div>
      </div>
      <div className="shift-selector-container">
        <div className="shift-selector-nav left">
          <IoIosArrowBack />
        </div>
        <div className="shift-date">{dateString}</div>
        <div className="shift-selector-nav right">
          <IoIosArrowForward />
        </div>
      </div>
      <div className="sftcd-shift-hours">
        <div className="sftcd-shift-progress-bar">
          <div
            className={`sftcd-shift-highlight ${props.nextShift.shift.shiftType.toLowerCase()}`} // Add class based on shift type
            style={{
              left: `${startPercentage}%`,
              width: `${endPercentage - startPercentage}%`,
            }}
          />
        </div>
      </div>
      <div className="shift-button-container">
        <button className="shift-button clock-in">Clock In</button>
        <button className="shift-button clock-out">Clock Out</button>
      </div>
    </div>
  );
};

export default ShiftCard;
