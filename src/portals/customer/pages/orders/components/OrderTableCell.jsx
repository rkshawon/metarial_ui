/* eslint-disable jsx-a11y/img-redundant-alt */
import * as React from "react";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import styles from "../../../styles/customerStyles.module.css";
import { Checkbox } from "@mui/material";
import { rows } from "../dummyData";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import OrderExpandContent from "./OrderExpandContent";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import OrderFulfilmentModal from "./OrderFulfilmentModal";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [openPopMessage, setOpenPopMessage] = React.useState(false);
  const shouldBold = open && { fontWeight: "500" };

  function getOrderChipProps(value) {
    if (value === "Shipped") {
      return (
        <div
          onClick={() => setOpen(!open)}
          style={{
            background: "#D4FFD3",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    }
    if (value === "Failed") {
      return (
        <div
          onClick={() => setOpen(!open)}
          style={{
            background: "#FFCFCF",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    }
    if (value === "Cancelled") {
      return (
        <div
          onClick={() => setOpen(!open)}
          style={{
            background: "#d1cdcd",
          }}
          className={styles.fulfillment}
        >
          {value}
        </div>
      );
    }
    if (value === "Fulfilled") {
      return <OrderFulfilmentModal />;
    } else {
      return (
        <div
          onClick={() => setOpen(!open)}
          style={{
            background: "#FEFFCF",
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

  const [isChecked, setIsChecked] = useState(false);
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
      >
        <TableCell
          onClick={() => setIsChecked(!isChecked)}
          style={{ paddingLeft: 0, paddingRight:0}}
        >
          <IconButton aria-label="expand row" size="small">
            <Checkbox checked={isChecked || open} />
          </IconButton>
        </TableCell>
        <TableCell
          sx={shouldBold}
          onClick={() => setOpen(!open)}
          align="center"
          style={{ paddingLeft: 0, paddingRight:0 }}
        >
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
        <TableCell
          sx={shouldBold}
          style={{ paddingLeft: 0, paddingRight:0}}
          onClick={() => setOpen(!open)}
          align="center"
        >
          {row.date}
        </TableCell>
        <TableCell
          sx={shouldBold}
          onClick={() => setOpen(!open)}
          align="center"
          style={{ paddingLeft: 0, paddingRight:0}}
        >
          {row.customer}
        </TableCell>
        <TableCell
          sx={shouldBold}
          onClick={() => setOpen(!open)}
          align="center"
          style={{ paddingLeft: 0, paddingRight:0}}
        >
          ??? {row.cost}
        </TableCell>
        <TableCell
          sx={shouldBold}
          onClick={() => setOpen(!open)}
          align="center"
          style={{ paddingLeft: 0, paddingRight:0 }}
        >
          ??? {row.shipping}
        </TableCell>
        <TableCell sx={shouldBold} align="right" style={{ width: "15%" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            {getOrderChipProps(row.fulfillment)}
          </div>
        </TableCell>
      </TableRow>
      <>
        <TableRow>
          <TableCell
            style={{
              paddingTop: 0,
              paddingBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
            }}
            colSpan={8}
          >
            <Collapse
              in={open}
              timeout="auto"
              unmountOnExit
              style={{ padding: 0, margin: 0 }}
            >
              <OrderExpandContent row={row} />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </React.Fragment>
  );
}

export default function OrderTableCell() {
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
    <TableContainer
      component={Paper}
      sx={{
        marginBottom: "20px",
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
            <TableCell></TableCell>
            <TableCell
              sx={tableHeadStyles}
              onClick={() => sorting("orderId")}
              align="center"
              style={{ paddingLeft: 0, paddingRight:0}}
            >
              <div className={styles.flex_center}>
                <strong>Order ID</strong>
                {colName === "orderId" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="center"
              sx={tableHeadStyles}
              onClick={() => sorting("date")}
              style={{ paddingLeft: 0, paddingRight:0}}
            >
              <div className={styles.flex_center}>
                <strong>Date</strong>
                {colName === "date" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="center"
              sx={tableHeadStyles}
              onClick={() => sorting("customer")}
              style={{ paddingLeft: 0, paddingRight:0}}
            >
              <div className={styles.flex_center}>
                <strong>Customer</strong>

                {colName === "customer" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="center"
              sx={tableHeadStyles}
              onClick={() => sorting("cost")}
              style={{ paddingLeft: 0, paddingRight:0}}
            >
              <div className={styles.flex_center}>
                <strong>Cost</strong>
                {colName === "cost" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="center"
              sx={tableHeadStyles}
              onClick={() => sorting("shipping")}
              style={{ paddingLeft: 0, paddingRight:0}}
            >
              <div className={styles.flex_center}>
                <strong>Shipping</strong>

                {colName === "shipping" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              align="right"
              sx={tableHeadStyles}
              onClick={() => sorting("fulfillment")}
              style={{ paddingLeft: 0}}
            >
              <strong>Fulfillment</strong>
              {colName === "fulfillment" && orderBy === "ASC" ? (
                <ArrowDownward className={styles.arrow_font} />
              ) : (
                <ArrowUpward className={styles.arrow_font} />
              )}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody sx={{}}>
          {sortedData.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
