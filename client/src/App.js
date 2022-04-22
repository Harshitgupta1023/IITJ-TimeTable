import { getMonth } from "./util";
import "./App.css";
import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import EventModal from "./components/EventModal";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  return (
    <React.Fragment>
      {showModal ? <EventModal /> : null}
      <div className={classes.root}>
        <CalendarHeader />
        <div style={{ display: "flex", flexGrow: "1" }}>
          <Sidebar />
          <Month month={currentMonth} />
        </div>
      </div>
    </React.Fragment>
  );
};

export default App;
