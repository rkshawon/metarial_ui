import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("TD YT Economy", 159, 6.0, 24, 4.0),
  createData("USD 10.5", 237, 9.0, 37, 4.3),
  createData("5-12 days", 262, 16.0, 24, 6.0),
  createData("Available", 305, 3.7, 67, 4.3),
];

export default function ShipmentMethodContent() {
  return (
    <TableContainer component={Paper} sx={{ background: "#fff" }}>
      <Table
        sx={{ minWidth: 650, overflowY: "scroll" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell style={{ color: "gray" }}>Shipping Company</TableCell>
            <TableCell style={{ color: "gray" }} align="left">
              Shipping Cost
            </TableCell>
            <TableCell style={{ color: "gray" }} align="left">
              Delivery Time
            </TableCell>
            <TableCell style={{ color: "gray" }} align="left">
              Tracking
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.calories}</TableCell>
              <TableCell align="left">{row.fat}</TableCell>
              <TableCell align="left">{row.carbs}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
