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
import { Checkbox, Chip } from "@mui/material";
// import { rows } from "../dummyData";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";
import { useState } from "react";
import { disputeRows } from "../../dummyData";
import DisputeExpandContent from "./DisputeExpandContent";
import { getDisputeFulfilmentDesign } from "../../../../utils/getDIsputeFulfilmentDesign";
import { getChipProps } from "../../../../utils/getChipProps";
import styles from "../../../../styles/customerStyles.module.css";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const [openPopMessage, setOpenPopMessage] = React.useState(false);
  const shouldBold = open && { fontWeight: "bold" };

  const popUpMessage = () => {
    setOpenPopMessage(true);
  };
  const popDownMessage = () => {
    setOpenPopMessage(false);
  };
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
        <TableCell sx={shouldBold} style={{ border: "none" }} align="center">
          {row.date}
        </TableCell>
        <TableCell sx={shouldBold} align="center">
          {row.customer}
        </TableCell>
        <TableCell sx={shouldBold} align="center">
          € {row.cost}
        </TableCell>
        <TableCell sx={shouldBold} align="center">
          € {row.shipping}
        </TableCell>
        <TableCell sx={shouldBold} align="center">
          {getDisputeFulfilmentDesign(row.dispute)}
        </TableCell>
        <TableCell sx={shouldBold} align="center">
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps({ value: row.dispute_status })}
          />
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
            <Collapse in={open} timeout="auto" unmountOnExit>
              <DisputeExpandContent row={row} />
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </React.Fragment>
  );
}

export default function DisputeTableCellRemake() {
  const [orderBy, setOrderBy] = useState("ASC");
  const [sortedData, setSortedData] = useState(disputeRows);
  const [colName, setColName] = useState("");

  // sorting function for each table column
  const sorting = (col) => {
    setColName(col);
    if (orderBy === "ASC") {
      const sorted = [...disputeRows].sort((a, b) =>
        a[col].toLowerCase() > b[col].toLowerCase() ? 1 : -1
      );
      setSortedData(sorted);
      setOrderBy("DSC");
    }
    if (orderBy === "DSC") {
      const sorted = [...disputeRows].sort((a, b) =>
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
              borderRadius: "0px",
            }}
          >
            <TableCell></TableCell>
            <TableCell sx={tableHeadStyles} onClick={() => sorting("orderId")}>
              <div className={styles.flex_center}>
                <strong>Order ID</strong>
                {colName === "orderId" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell sx={tableHeadStyles} onClick={() => sorting("date")}>
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
              align="left"
              sx={tableHeadStyles}
              onClick={() => sorting("customer")}
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
            <TableCell sx={tableHeadStyles} onClick={() => sorting("cost")}>
              <div className={styles.flex_center}>
                <strong>Cost</strong>
                {colName === "cost" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell sx={tableHeadStyles} onClick={() => sorting("shipping")}>
              <div className={styles.flex_center}>
                <strong>Shipping</strong>
                {colName === "shipping" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell sx={tableHeadStyles} onClick={() => sorting("dispute")}>
              <div className={styles.flex_center}>
                <strong>Dispute</strong>
                {colName === "dispute" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
            </TableCell>
            <TableCell
              sx={tableHeadStyles}
              onClick={() => sorting("dispute_status")}
            >
              <div className={styles.flex_center}>
                <strong>Dispute Status</strong>
                {colName === "dispute_status" && orderBy === "ASC" ? (
                  <ArrowDownward className={styles.arrow_font} />
                ) : (
                  <ArrowUpward className={styles.arrow_font} />
                )}
              </div>
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
