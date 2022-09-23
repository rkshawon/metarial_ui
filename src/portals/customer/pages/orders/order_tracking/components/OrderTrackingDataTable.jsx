import * as React from "react";
import {
  Box,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from "@mui/material";
import { getChipProps } from "../../../../utils/getChipProps";
import Paper from "@mui/material/Paper";
import { getDisputeFulfilmentDesign } from "../../../../utils/getDIsputeFulfilmentDesign";
import { orderTrackingRows } from "../../dummyData";
import OrderTrackingExpandContent from "./OrderTrackingExpandContent";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const shouldBold = open && { fontWeight: "bold" };

  return (
    <React.Fragment>
      <TableRow
        sx={{
          "& > *": { borderBottom: "unset" },
          borderBottom: "1px solid #ebebeb",
          "&:hover": {
            backgroundColor: "rgba(244,244,244,.5)",
          },
        }}
        onClick={() => setOpen(!open)}
      >
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <Checkbox checked={true} /> : <Checkbox checked={false} />}
          </IconButton>
        </TableCell>
        <TableCell sx={shouldBold}>{row.orderId}</TableCell>
        <TableCell sx={shouldBold}>{row.trackingId}</TableCell>
        <TableCell sx={shouldBold}>{row.destination}</TableCell>
        <TableCell sx={shouldBold}>{row.time_in_transit}</TableCell>
        <TableCell sx={shouldBold}>
          {getDisputeFulfilmentDesign(row.dispute)}
        </TableCell>
        <TableCell>
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps({ value: row.order_status })}
          />
        </TableCell>
      </TableRow>
      <>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <OrderTrackingExpandContent row={row} />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </React.Fragment>
  );
}

export default function OrderTrackingDataTable() {
  const [orderBy, setOrderBy] = React.useState("ASC");
  const [sortedData, setSortedData] = React.useState(orderTrackingRows);
  const [colName, setColName] = React.useState("");

  // sorting function for each table column
  const sorting = (col) => {
    setColName(col);
    if (orderBy === "ASC") {
      const sorted = [...orderTrackingRows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSortedData(sorted);
      setOrderBy("DSC");
    }
    if (orderBy === "DSC") {
      const sorted = [...orderTrackingRows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setSortedData(sorted);
      setOrderBy("ASC");
    }
  };
  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
  };

  return (
    <TableContainer
      component={Paper}
      sx={{
        padding: "1% ",
        width: "100%",
        boxShadow: "none",
      }}
    >
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow
            sx={{
              background: "#eeeeee",
            }}
          >
            <TableCell>
              {/* <Checkbox /> */}
            </TableCell>
            <TableCell
              sx={{ color: "#707070", fontWeight: 500 }}
              onClick={() => sorting("orderId")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Order ID</strong>
                {colName === "orderId" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("trackingId")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Tracking ID</strong>
                {colName === "trackingId" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("destination")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Destination</strong>
                {colName === "destination" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("time_in_transit")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Time in transit</strong>
                {colName === "time_in_transit" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("dispute")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Dispute</strong>
                {colName === "dispute" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("order_status")}
            >
             <div style={{ display: "flex", alignItems: "center" }}>
                <strong>Order Status</strong>
                {colName === "order_status" && orderBy === "ASC" ? (
                  <ArrowDownward
                    sx={{ fontSize: "16px", marginLeft: "10px" }}
                  />
                ) : (
                  <ArrowUpward sx={{ fontSize: "16px", marginLeft: "10px" }} />
                )}
              </div>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedData.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
