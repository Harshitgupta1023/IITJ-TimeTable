import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import dayjs from "dayjs";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
  },

  daysNumber: {},
  selectedDay: {
    backgroundColor: "#00CED1",
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "40px",
    paddingTop: "0.5rem",
    textAlign: "center",
    margin: "0.5rem 3rem",
  },
}));

const Day = ({ day, rowIdx }) => {
  const classes = useStyles();
  function getCurrentDayClass() {
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
      ? classes.selectedDay
      : classes.daysNumber;
  }

  return (
    <div className={classes.root}>
      <header className={classes.header}>
        {rowIdx === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p className={getCurrentDayClass()}>{day.format("DD")}</p>
      </header>
    </div>
  );
};

export default Day;
