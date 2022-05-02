import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CreateEventButton from "./CreateEventButton";
import { SignIn, SignOutN } from "./GoogleAuth";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"row",
    width:"100%",
    backgroundColor:"rgba(0,0,0,0.1)",
    boxShadow:"1px 1px black"
  },
  subcontainer:{
    marginLeft: "20px",
    width: "70%",
    display:"flex",
    justifyContent:"center",
  },
  title: {
    color: "rgba(0,0,0,0.7)",
    fontSize: "3rem",
    margin:0
  },
  buttonContainer: {
    width:"30%",
    display: "flex",
    justifyContent:"space-evenly",
  },
}));

const CalendarHeader = ({ setScreen }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.subcontainer}>
      <p className={classes.title}>Exam Time Table</p>
      </div>
      <div className={classes.buttonContainer}>
        <CreateEventButton
          name={"Course"}
          action={() => {
            setScreen(false);
          }}
          flag={false}
        />
        <CreateEventButton
          name={"Calendar"}
          action={() => {
            setScreen(true);
          }}
          flag={false}
        />
      <CreateEventButton name={"SignIn"} action={SignIn} flag={false} />
      <CreateEventButton name={"SignOut"} action={SignOutN} flag={false} />
      </div>
    </div>
  );
};

export default CalendarHeader;
