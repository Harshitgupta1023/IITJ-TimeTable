import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  modal: {
    height: "100vh",
    width: "220vh",
    top: "0",
    left: "0",
    position: "fixed",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  form: {
    backgroundColor: "gray",
    width: "50vh",
    borderRadius: "20px",
    paddingLeft: "10px",
    boxShadow: "2px 2px ",
  },
  header: {
    display: "flex",
    paddingLeft: "2px",
    paddingTop: "2px",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  close: {
    marginTop: "8px",
    marginLeft: "150px",
    backgroundColor: "white",
    borderRadius: "15px",
    marginRight: "5px",
  },
  details: {
    marginTop: "8px",
    fontWeight: "600",
    fontSize: "1.5rem",
  },
  data: {
    color: "lightgreen",
    marginBottom: "2px",
  },
}));

const EventModal = ({ userData, day }) =>
  // obj
  {
    const classes = useStyles();
    let obj = {};
    userData.map((dat) => {
      if (dat["Date"] == day.format("DD-MM-YYYY")) {
        obj = dat;
      }
    });

    return (
      <div className={classes.modal}>
        <form className={classes.form}>
          <header className={classes.header}>
            <Typography className={classes.details}>Details</Typography>
            <button className={classes.close}>
              <span className="material-icons">close</span>
            </button>
          </header>
          {Object.keys(obj).map((key, idx) => {
            return (
              <Typography className={classes.data}>
                {key} : {obj[key]}
              </Typography>
            );
          })}
        </form>
      </div>
    );
  };

export default EventModal;
