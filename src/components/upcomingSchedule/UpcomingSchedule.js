import { React } from "react";
import "./UpcomingSchedule.css";
import Day from "./day/Day";
import PeriodProgressBar from "./periodProgressBar/PeriodProgressBar";

const upcomingShifts = [
  {
    dayName: "Tuesday",
    shifts: [{ start: "05:00", end: "13:30", shiftType: "Standard" }],
  },
  {
    dayName: "Wednesday",
    shifts: [
      { start: "05:00", end: "13:30", shiftType: "Standard" },
      { start: "14:30", end: "23:00", shiftType: "Overtime" },
    ],
  },
  {
    dayName: "Thursday",
    shifts: [
      { start: "05:00", end: "13:30", shiftType: "Standard" },
      { start: "14:00", end: "22:30", shiftType: "Standard" },
      { start: "13:30", end: "14:00", shiftType: "Double-time" },
    ],
  },
  {
    dayName: "Friday",
    shifts: [{ start: "05:00", end: "13:30", shiftType: "Standard" }],
  },
  {
    dayName: "Saturday",
    shifts: [{ start: "00:00", end: "00:00", shiftType: "Standard" }],
  },
  {
    dayName: "Sunday",
    shifts: [{ start: "00:00", end: "00:00", shiftType: "Standard" }],
  },
  {
    dayName: "Monday",
    shifts: [{ start: "05:00", end: "13:30", shiftType: "Standard" }],
  },
];

const UpcomingSchedule = (props) => {
  return (
    <div className="ucs">
      <div className="ucs_title_container">
        <div className="ucs_title">
          Upcoming Schedule: {props.upcomingStartDate} - {props.upcomingEndDate}
        </div>
      </div>
      <div className="ucs_period_progress_container">
        <PeriodProgressBar date={new Date()} />
      </div>
      <div className="ucs_days_container">
        <div className="ucs_days_list">
          {upcomingShifts.map((day, index) => (
            <Day key={index} dayName={day.dayName} shifts={day.shifts} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
