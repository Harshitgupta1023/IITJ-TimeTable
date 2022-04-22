import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

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

const Day = ({ day, rowIdx,userData }) => {
  
  let dateArr = [];
  if (userData !==undefined){
  userData.map((dat)=>{
    dateArr.push(dat["Date"]);
  })}
  console.log(dateArr);
  const classes = useStyles();
  const getCurrentDayClass = () => {
    console.log(dateArr.includes(day.format("DD-MM-YYYY")),day.format("DD-MM-YYYY"))
    return dateArr.includes(day.format("DD-MM-YYYY"))
      ? classes.selectedDay
      : classes.daysNumber;
  };

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
