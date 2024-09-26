import React from "react";

import UpcomingSchedule from "../../components/upcomingSchedule/UpcomingSchedule";

const UserHome = () => {
  return (
    <div className="_userHome">
      <UpcomingSchedule upcomingStartDate="9/1" upcomingEndDate="9/7" />
    </div>
  );
};

export default UserHome;
