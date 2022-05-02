import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import EventModal from "./EventModal";

const useStyles = makeStyles(() => ({
  header: {
    display: "flex",
    flexDirection: "column",
  },

  daysNumber: {},
  selectedDayCourse: {
    backgroundColor: "#00CED1",
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "40px",
    paddingTop: "0.5rem",
    textAlign: "center",
    margin: "0.5rem 3rem",
  },
  selectedDayDuty: {
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "40px",
    paddingTop: "0.5rem",
    textAlign: "center",
    margin: "0.5rem 3rem",
  },
  selectedDayBoth:{
    backgroundColor: "red",
    color: "white",
    borderRadius: "50%",
    height: "30px",
    width: "40px",
    paddingTop: "0.5rem",
    textAlign: "center",
    margin: "0.5rem 3rem",

  }

}));

const Day = ({ day, rowIdx, userData }) => {
  let coursedateArr = [];
  let dutydateArr = []
  if (userData !== undefined) {
    userData["courses"].map((dat) => {
      coursedateArr.push(dat["Date"]);      
    });
    // userData["duties"].map((dat) => {
    //   dutydateArr.push(dat["Date"]);
    // });

  }
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);
  const displayModal = () => {
    setShowModal(!showModal);
  };

  const getCurrentDayClass = () => {
    if (coursedateArr.includes(day.format("DD-MM-YYYY"))){
      return classes.selectedDayCourse
    }
    else if(dutydateArr.includes(day.format("DD-MM-YYYY"))){
      return classes.selectedDayDuty
    }
    else{
      return  classes.daysNumber;}
  };

  return (
    <div
      className={classes.root}
      onClick={coursedateArr.includes(day.format("DD-MM-YYYY")) || dutydateArr.includes(day.format("DD-MM-YYYY")) ? displayModal : null}
    >
      {showModal ? (
        <EventModal displayModal={displayModal} userData={userData["courses"]} day={day} />
      ) : null}
      <header className={classes.header}>
        {rowIdx === 0 && <p>{day.format("ddd").toUpperCase()}</p>}
        <p className={getCurrentDayClass()}>{day.format("DD")}</p>
      </header>
    </div>
  );
};

export default Day;
