import React from "react";
import CreateEventButton from "./CreateEventButton";
import SmallCalendar from "./SmallCalendar";

const Sidebar = () => {
  return (
    <aside
      style={{
        padding: "5px",
        width: "64px",
        marginRight: "8%",
        marginTop: "2%",
        marginLeft: "2%",
      }}
    >
      <CreateEventButton />
      <SmallCalendar />
    </aside>
  );
};

export default Sidebar;
