import React from "react";
import Month from "../components/Month";
import Sidebar from "../components/Sidebar";

const Calendar = ({ currentMonth, userData }) => {
  return (
    <div style={{ display: "flex", flexGrow: "1" }}>
      <Sidebar />
      <Month month={currentMonth} userData={userData} />
    </div>
  );
};

export default Calendar;
