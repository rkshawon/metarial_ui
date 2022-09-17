/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import styles from "../../../styles/customerStyles.module.css";
import {
  Chip,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Pagination,
  PaginationItem,
  Select,
  Stack,
} from "@mui/material";
import { rows } from "../dummyData";
import { getChipProps } from "../../../utils/getChipProps";
import {
  ArrowBack,
  ArrowDownward,
  ArrowForward,
  ArrowUpward,
} from "@mui/icons-material";
import OrderExpandContent from "./OrderExpandContent";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [openPopMessage, setOpenPopMessage] = React.useState(false);
  const shouldBold = open && { fontWeight: "bold" };

  function getOrderChipProps(value) {
    if (value === "Shipped") {
      return (
        <div
          style={{
            background: "#D4FFD3",
            color: "#05AE01",
            width: "50%",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    }
    if (value === "Fulfilled") {
      return (
        <div
          style={{
            background: "#E9DAFF",
            color: "#8D40FF",
            width: "50%",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    } else {
      return (
        <div
          style={{
            background: "#FEFFCF",
            color: "#E0A816",
            width: "50%",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    }
  }
  const popUpMessage = () => {
    setOpenPopMessage(true);
  };
  const popDownMessage = () => {
    setOpenPopMessage(false);
  };
  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell sx={shouldBold}>
          <span>{row.orderId}</span>
          <span
            style={{
              marginLeft: "5px",
              cursor: "pointer",
              color: "#FF7E7E",
              position: "relative",
            }}
            onMouseEnter={popUpMessage}
            onMouseLeave={popDownMessage}
          >
            <span>
              <InfoIcon fontSize="extra_samll" />
            </span>
            {openPopMessage && (
              <span
                style={{
                  position: "absolute",
                  zIndex: "99",
                  backgroundColor: "#fff",
                  width: "400px",
                  marginTop: "5px",
                  color: "#212B36",
                  padding: "15px",
                  borderRadius: "10px",
                  boxShadow: "0px 0px 5px 0px rgba(36,36,36,0.75)",
                }}
              >
                This Order is missing a shipping address. Please provide it by
                cliking on the Add Address button
              </span>
            )}
          </span>
        </TableCell>
        <TableCell sx={shouldBold}>{row.date}</TableCell>
        <TableCell sx={shouldBold}>{row.customer}</TableCell>
        <TableCell sx={shouldBold}>{row.cost}</TableCell>
        <TableCell sx={shouldBold}>{row.shipping}</TableCell>
        <TableCell sx={shouldBold}>
          {getOrderChipProps(row.fulfillment)}
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
              <OrderExpandContent row={row} />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
      {/* <div
        style={{
          position: "absolute",
          background: "#fff",
          bottom: 10,
          left: "45%",
          padding: "5px 0",
          borderRadius: "8px",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={10}
            sx={{
              "&.MuiPaginationItem-root": {
                color: "blue",
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBack,
                  next: ArrowForward,
                }}
                {...item}
              />
            )}
          />
        </Stack>
      </div> */}
    </React.Fragment>
  );
}

export default function OrderTableCell() {
  const [open, setOpen] = React.useState(false);
  const [orderBy, setOrderBy] = useState("ASC");
  const [sortedData, setSortedData] = useState(rows);
  const [colName, setColName] = useState("");

  // sorting function for each table column
  const sorting = (col) => {
    setColName(col);
    if (orderBy === "ASC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSortedData(sorted);
      setOrderBy("DSC");
    }
    if (orderBy === "DSC") {
      const sorted = [...rows].sort((a, b) =>
        a[col].toLowerCase() < b[col].toLowerCase() ? 1 : -1
      );
      setSortedData(sorted);
      setOrderBy("ASC");
    }
  };
  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
    cursor: "pointer",
  };

  return (
    <TableContainer component={Paper} sx={{ marginTop: "20px" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>
              {/* <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton> */}
            </TableCell>
            <TableCell sx={tableHeadStyles} onClick={() => sorting("orderId")}>
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "orderId" ? <strong>Order ID</strong> : "Order ID"}
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
              onClick={() => sorting("date")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "date" ? <strong>Date</strong> : "Date"}
                {colName === "date" && orderBy === "ASC" ? (
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
              onClick={() => sorting("customer")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "customer" ? (
                  <strong>Customer</strong>
                ) : (
                  "Customer"
                )}
                {colName === "customer" && orderBy === "ASC" ? (
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
              onClick={() => sorting("cost")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "cost" ? <strong>Cost</strong> : "Cost"}
                {colName === "cost" && orderBy === "ASC" ? (
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
              onClick={() => sorting("shipping")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "shipping" ? (
                  <strong>Shipping</strong>
                ) : (
                  "Shipping"
                )}
                {colName === "shipping" && orderBy === "ASC" ? (
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
              onClick={() => sorting("fulfillment")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "fulfillment" ? (
                  <strong>Fulfillment</strong>
                ) : (
                  "Fulfillment"
                )}
                {colName === "fulfillment" && orderBy === "ASC" ? (
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
                {colName === "order_status" ? (
                  <strong>Order Status</strong>
                ) : (
                  "Order Status"
                )}
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
