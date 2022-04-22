import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  container: {
    height: "100vh",
    width: "100vw",
    position: "absolute",
    top: "0",
    left: "0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.2)",
  
  },
  subContainer: {
    height:"75vh",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
    overflow:"auto",
  },
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  subtitle: {
    fontWeight: "200",
    fontSize: "2rem",
    fontFamily: "cursive",
  },
  closeButton: {
    backgroundColor: "white",
    borderWidth: 0,
  },
  dataContainer: {
    marginTop:"20px"
  },
  dataItems: {
    display:"flex",
    flexDirection: "row",
    padding:"5px"
  },
  dataT:{
    width:"50%",
    textAlign:"left",
    paddingLeft:"15px"
  },
  data: {
    width:"50%",
    textAlign:"left",
    paddingLeft:"15px"
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
      <div className={classes.container} >
        <div className={classes.subContainer}>
          <div className={classes.titleContainer}>
            <Typography className={classes.subtitle}>Details</Typography>
            <button className={classes.closeButton}>
              <span className="material-icons">close</span>
            </button>
          </div>
          <hr />
          <div className={classes.dataContainer}>
            {Object.keys(obj).map((key, idx) => {
              return (
                <div>
                <div className={classes.dataItems}>
                  <Typography className={classes.dataT}>{key}</Typography>
                  <Typography className={classes.data}>{obj[key]}</Typography>
                </div>
                <Divider/>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

export default EventModal;
