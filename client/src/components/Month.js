import React from "react";
import Day from "./Day";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    marginRight: "0px",
  },
  tableContainer: {
    flexGrow: "1",
    borderCollapse: "separate",
    marginTop: "20px",
    marginRight: "0",
    marginLeft: "auto",
  },
  tableData: {
    height: "125px",
    width: "150px",
    border: "1px solid",
    borderColor: "#d3d3d3",
    verticalAlign: "top",
    textAlign: "center",
    fontSize: "small",
    padding: "0rem 1rem",
    fontWeight: "600",
    alignItems: "center",
  },
}));

const Month = ({ month, userData }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <table className={classes.tableContainer}>
        {month.map((row, i) => (
          <tr key={i}>
            {row.map((day, idx) => (
              <td className={classes.tableData} key={idx}>
                <Day day={day} rowIdx={i} userData={userData} />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Month;
