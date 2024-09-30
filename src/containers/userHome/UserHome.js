import React from "react";
import "./UserHome.css";

import PeriodProgressBar from "../../components/periodProgressBar/PeriodProgressBar";
import ShiftCard from "../../components/shiftCard/ShiftCard";
import UpcomingSchedule from "../../components/upcomingSchedule/UpcomingSchedule";

const UserHome = () => {
  const nextShift = {
    dayName: "Tuesday",
    date: "9-1-2024",
    timezone: "America/Los_Angeles",
    shift: { start: "05:00", end: "13:30", shiftType: "Standard" },
  };

  return (
    <div className="_userHome">
      <div className="usr-hm-pp-title">Current Pay Period</div>
      <div className="usr-hm-section">
        <PeriodProgressBar date={new Date()} grossPay="1,978.98"/>
      </div>
      <div className="usr-hm-section">
        <div className="usr-hm-hours-container">
          <div className="usr-hm-hours">
            <div className="usr-hm-hours-title">Standard</div>
            <div className="usr-hm-gross-hours">80</div>
          </div>
          <div className="usr-hm-hours">
            <div className="usr-hm-hours-title">Overtime</div>
            <div className="usr-hm-gross-hours">14</div>
          </div>
          <div className="usr-hm-hours">
            <div className="usr-hm-hours-title">Double-time</div>
            <div className="usr-hm-gross-hours">8</div>
          </div>
        </div>
      </div>
      <div className="usr-hm-section">
        <ShiftCard nextShift={nextShift} />
      </div>
      <div className="usr-hm-section">
        <UpcomingSchedule upcomingStartDate="Tuesday, Sep 1" upcomingEndDate="Monday, Sep 7" />
      </div>
    </div>
  );
};

export default UserHome;
