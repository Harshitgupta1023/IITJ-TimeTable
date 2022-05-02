import React from "react";
import CustomizedTable from "./CustomizedTable";
import Courses from "../screens/Courses";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    padding: "10px",
  },
}));

const RenderData = ({ userData }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {userData["courses"].length !== 0 ? (
        <CustomizedTable
          userData={userData["courses"]}
          title={"Courses Enrolled"}
          idName={"course"}
        />
      ) : null}
      {userData["duties"].length !== 0 ? (
        <CustomizedTable
          userData={userData["duties"]}
          title={"Proctoring Duties"}
          idName={"duty"}
        />
      ) : null}
      {userData["teacher"].length !== 0 ? (
        <CustomizedTable
          userData={userData["teacher"]}
          title={"Instructor Courses"}
          idName={"teacher"}
        />
      ) : null}
      {userData["courses"].length !== 0 ? (
        <Courses userData={userData["courses"]} idName={"course"} />
      ) : null}
      {userData["duties"].length !== 0 ? (
        <Courses userData={userData["duties"]} idName={"duty"} />
      ) : null}
      {userData["teacher"].length !== 0 ? (
        <Courses userData={userData["teacher"]} idName={"teacher"} />
      ) : null}
    </div>
  );
};

export default RenderData;
