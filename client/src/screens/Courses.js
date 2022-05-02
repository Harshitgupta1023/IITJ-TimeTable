import React from "react";
import { Divider, makeStyles, Typography } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  titleContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop:"10px",
    marginBottom:"20px"
  },
  titleData: {
    fontWeight: "200",
    fontSize: "2rem",
    fontFamily: "cursive",
  },
  dataContainer: {
    marginTop: "20px",
  },
  dataItems: {
    display: "flex",
    flexDirection: "row",
    padding: "5px",
  },
  dataT: {
    width: "50%",
    textAlign: "left",
    paddingLeft: "40px",
  },
  data: {
    width: "50%",
    textAlign: "left",
    paddingLeft: "15px",
  },
}));

const Courses = ({ userData ,idName}) => {
  const classes = useStyles();
  return (
    <div className={classes.dataContainer}>
      {userData.map((obj) => {
        return (
          <div>

              <div className={classes.titleContainer} id={`${obj["Course Code"]}_${idName}`}>
                  <Typography className={classes.titleData}>{obj["Course Code"]}</Typography>
                  <Typography className={classes.titleData}>{obj["Course Title"]}</Typography>
                  <Typography className={classes.titleData}>{obj["Date"]}</Typography>
              </div>
              <hr/>
            {Object.keys(obj).map((key, idx) => {
              return (
                <div>
                  <div className={classes.dataItems}>
                    <Typography className={classes.dataT}>{key}</Typography>
                    <Typography className={classes.data}>{obj[key]}</Typography>
                  </div>
                  <Divider />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Courses;
