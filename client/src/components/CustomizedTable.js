import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const CustomizedTable = ({ userData, title,idName }) => {
  return (
    <TableContainer component={Paper}>
      <Typography
        sx={{
          display: "flex",
          flex: "1 1 100%",
          justifyContent: "center",
          alignItems: "center",
          marginBottom:2,
          marginTop:2,
        }}
        variant="h4"
        id="tableTitle"
        component="div"
      >
        {title}
      </Typography>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Course Code</StyledTableCell>
            <StyledTableCell align="center">Course Name</StyledTableCell>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Shift</StyledTableCell>
            <StyledTableCell align="center">Time</StyledTableCell>
            <StyledTableCell align="center">Meet link</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {userData.map((dat, idx) => (
            <StyledTableRow key={idx}>
              <StyledTableCell component="th" scope="row">
                <a href={`#${dat["Course Code"]}_${idName}`}>{dat["Course Code"]}</a>
              </StyledTableCell>
              <StyledTableCell align="center">
                {dat["Course Title"]}
              </StyledTableCell>
              <StyledTableCell align="center">{dat["Date"]}</StyledTableCell>
              <StyledTableCell align="center">{dat["Shift"]}</StyledTableCell>
              <StyledTableCell align="center">{dat["Time"]}</StyledTableCell>
              <StyledTableCell align="center">
                {dat["Google Meet Link for Examionation"]}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomizedTable;
