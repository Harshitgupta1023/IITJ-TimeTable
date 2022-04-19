import React from "react";
import Day from "./Day";

const Month = ({ month }) => {
  return (
    <div
      style={{
        marginRight: "0px",
      }}
    >
      <table
        style={{
          flexGrow: "1",
          borderCollapse: "separate",
          marginTop: "20px",
          marginRight: "0",
          marginLeft: "auto",
        }}
      >
        {month.map((row, i) => (
          <tr key={i}>
            {row.map((day, idx) => (
              <td
                style={{
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
                }}
              >
                <Day day={day} key={idx} rowIdx={i} />
              </td>
            ))}
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Month;
