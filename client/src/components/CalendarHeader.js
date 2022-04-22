import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../assets/logo.png";
import GoogleButton from "./GoogleButton";
import CreateEventButton from "./CreateEventButton";

const useStyles = makeStyles(() => ({
  header: {
    padding: "4px 2px",
    display: "flex",
    justifyItems: "center",
  },
  logo: {
    marginLeft: "10px",
    marginTop: "2px",
    marginRight: "10px",
    height: "50px",
    width: "50px",
  },
  heading: {
    marginLeft: "20px",
    marginTop: "2px",
    marginRight: "30px",
    fontWeight: "500",
    color: "gray",
    fontSize: "xl",
  },
  todayButton: {
    border: "1px solid gray",
    padding: "2px 15px",
    height: "40px",
    marginRight: "15px",
    marginTop: "10px",
    backgroundColor: "white",
    borderRadius: "10%",
  },
  buttons: {
    border: "none",
    backgroundColor: "white",
    marginRight: "10px",
  },
}));

const CalendarHeader = () => {
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <img src={logo} alt="calendar" className={classes.logo} />
      <h1 className={classes.heading}>Calendar</h1>
      <CreateEventButton name={"Today"} flag={false} />
      {/* <button className={classes.todayButton}>Today</button> */}
      <button className={classes.buttons}>
        <span
          className="material-icons success"
          style={{
            cursor: "pointer",
            color: "gray",
            margin: "0px 2px",
            fontWeight: "600",
          }}
        >
          chevron_left
        </span>
      </button>
      <button className={classes.buttons}>
        <span
          className="material-icons"
          style={{
            cursor: "pointer",
            color: "gray",
            margin: "0px 2px",
            fontWeight: "600",
          }}
        >
          chevron_right
        </span>
      </button>
      <GoogleButton />
    </header>
  );
};

export default CalendarHeader;
