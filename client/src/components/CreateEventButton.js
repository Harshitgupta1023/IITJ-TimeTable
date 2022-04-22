import React from "react";
import { makeStyles } from "@material-ui/core";
import plusImg from "../assets/plus.svg";

const useStyles = makeStyles(() => ({
  eventButton: {
    border: "1px solid gray",
    display: "flex",
    padding: "10px",
    borderRadius: "25px",
    backgroundColor: "white",
    alignItems: "center",
    boxShadow: "2px 2px lightblue",
    "&:hover": {
      boxShadow: "5px 5px lightblue",
    },
  },
  plusImage: {
    width: "20px",
    height: "20px",
  },
  text: {
    paddingLeft: "7px",
    paddingRight: "13px",
  },
}));

const CreateEventButton = () => {
  const classes = useStyles();

  return (
    <button className={classes.eventButton}>
      <img src={plusImg} alt="create_event" className={classes.plusImage} />
      <span className={classes.text}>Create</span>
    </button>
  );
};

export default CreateEventButton;
