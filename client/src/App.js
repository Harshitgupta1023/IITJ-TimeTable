import { getMonth } from "./util";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CalendarHeader from "./components/CalendarHeader";
import Sidebar from "./components/Sidebar";
import Month from "./components/Month";
import { auth, db } from "./config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
const useStyles = makeStyles(() => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },
}));

const App = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();
  const classes = useStyles();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        try {
          var id = user.email.split("@")[0];
          const dat = doc(db, "Emails", id);
          const docSnap = await getDoc(dat);
          setUserData(docSnap.data()["details"]);
        } catch (err) {
          console.log(err);
        }
      }
    });
  }, []);
  // if (user === null) {
    return (
      <React.Fragment>
        <div className={classes.root}>
          <CalendarHeader />
          <div style={{ display: "flex", flexGrow: "1" }}>
            <Sidebar />
            <Month month={currentMonth} userData={userData} />
          </div>
        </div>
      </React.Fragment>
    );
  // }

  return <h1>Login First</h1>;
};

export default App;
