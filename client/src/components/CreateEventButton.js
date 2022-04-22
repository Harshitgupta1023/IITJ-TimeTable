import React from "react";
import { makeStyles } from "@material-ui/core";
import plusImg from "../assets/plus.svg";

const useStyles = makeStyles(() => ({
  eventButton: {
    width: "100px",
    height: "40px",
    border: "1px solid gray",
    marginRight: "20px",
    marginTop: "10px",
    display: "flex",
    borderRadius: "20px",
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    boxShadow: "1px 1px lightblue",
    "&:hover": {
      boxShadow: "3px 3px lightblue",
    },
  },
  plusImage: {
    width: "20px",
    height: "20px",
  },
  text: {
    fontFamily: "cursive",
    fontWeight: "200",
    fontSize: "1rem",
  },
}));

const CreateEventButton = ({ name, action, flag }) => {
  const classes = useStyles();

  return (
    <button className={classes.eventButton} onClick={action}>
      {flag ? (
        <img src={plusImg} alt="create_event" className={classes.plusImage} />
      ) : null}
      <span className={classes.text}>{name}</span>
    </button>
  );
};

export default CreateEventButton;
