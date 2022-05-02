import { getMonth } from "./util";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalendarHeader from "./components/CalendarHeader";
import { auth, db } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import Calendar from "./screens/Calendar";
import UploadData from "./UploadData";
import RenderData from "./components/RenderData";
import { Typography } from "@mui/material";

const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const classes = useStyles();

  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState({
    courses: [],
    teacher: [],
    duties: [],
  });
  const [screen, setScreen] = useState(false);
  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          var id = user.email.split("@")[0];
          // var id = "gharit";
          const dat = doc(db, "Emails", id);
          const docSnap = await getDoc(dat);
          if (docSnap.data() !== undefined) {
            setUserData(docSnap.data());
          }
        } catch (err) {
          console.log("Login---->", err);
        }
      }
    });
  }, []);
  if (user !== null) {
    if (
      userData["courses"].length !== 0 ||
      userData["duties"].length !== 0 ||
      userData["teacher"].length !== 0
    ) {
      return (
        <React.Fragment>
          <div className={classes.root}>
            <CalendarHeader setScreen={setScreen} />

            {screen ? (
              <Calendar userData={userData} currentMonth={currentMonth} />
            ) : (
              <RenderData userData={userData} />
            )}
          </div>
        </React.Fragment>
      );
    }
    return (
      <div>
        <CalendarHeader setScreen={setScreen} />;
        <Typography
          sx={{
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          variant="h4"
          id="tableTitle"
          component="div"
        >
          No Data found kindly talk to Office Of Academics.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <CalendarHeader setScreen={setScreen} />;
      <Typography
        sx={{
          height: "50vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        Please Sign In first by clicking, SignIn Button.
      </Typography>
    </div>
  );
  // return <UploadData/>
};

export default App;
