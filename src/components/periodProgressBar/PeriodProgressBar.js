import React from "react";
import moment from "moment";
import "./PeriodProgressBar.css"; // Import your CSS styles

const PeriodProgressBar = (props) => {
  const date = moment(props.date); // Get the date from props
  const totalDaysInMonth = date.daysInMonth(); // Total days in the month
  const currentDay = date.date(); // Current day of the month

  // Calculate the percentage of the month that has passed
  const percentage = (currentDay / totalDaysInMonth) * 100;

  // Get first and last day of the month with formatted date
  const firstDay = date.startOf("month").format("MMM D"); // First day of the month
  const lastDay = date.endOf("month").format("MMM D"); // Last day of the month

  return (
    <div className="ppb">
      <div className="ppb_dates">
        <div className="ppb_date">{firstDay}</div>
        <div className="ppb_date">{lastDay}</div>
      </div>
      <div className="ppb_progress-bar">
        <div
          className="ppb_progress-highlight"
          style={{ width: `${percentage}%` }}
        >
          <div className="ppd_progress_gross_pay">
            {`$${props.grossPay}`}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PeriodProgressBar;
