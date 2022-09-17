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
import {
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Menu,
  MenuItem,
  Pagination,
  PaginationItem,
  Stack,
} from "@mui/material";
import { disputeRows } from "../../dummyData";
import { getChipProps } from "../../../../utils/getChipProps";
import { getDisputeFulfilmentDesign } from "../../../../utils/getDIsputeFulfilmentDesign";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import ModifiedCheckbox from "./ModifiedCheckbox";
import { ArrowBack, ArrowDownward, ArrowForward, ArrowUpward } from "@mui/icons-material";


function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const shouldBold = open && { fontWeight: "bold" };

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
        <TableCell sx={shouldBold}>{row.orderId}</TableCell>
        <TableCell sx={shouldBold}>{row.date}</TableCell>
        <TableCell sx={shouldBold}>{row.customer}</TableCell>
        <TableCell sx={shouldBold}>{row.cost}</TableCell>
        <TableCell sx={shouldBold}>{row.shipping}</TableCell>
        <TableCell sx={shouldBold}>
          {getDisputeFulfilmentDesign(row.dispute)}
        </TableCell>
        <TableCell>
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps({ value: row.dispute_status })}
          />
        </TableCell>
      </TableRow>
      <>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box sx={{ margin: 1, width: "70%" }}>
                <Grid container spacing={8}>
                  <Grid item sm={4.5}>
                    <div className="flexbox">
                      <img
                        src={row.img}
                        alt="image"
                        style={{ width: "55px", height: "51px" }}
                      />
                      <div>
                        <h5
                          style={{
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "26px",
                            color: "#212B36",
                          }}
                        >
                          Foundation Flip Flop
                        </h5>
                        <h6>
                          Category: <b>{row.category}</b>
                        </h6>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={3}>
                    <div>
                      <div className="flexbox">
                        <h6 style={{ margin: 0 }}>Variant</h6>
                        <h5>{row.variant}</h5>
                      </div>
                      <div className="flexbox">
                        <h6>Color</h6>
                        <h5>{row.color}</h5>
                      </div>
                    </div>
                  </Grid>
                  <Grid item sm={4.5}>
                    <div>
                      <div className="flexbox">
                        <h6 style={{ margin: 0 }}>Invoice ID</h6>
                        <h5>{row.invoiceId}</h5>
                      </div>
                      <div className="flexbox">
                        <h6>Product ID</h6>
                        <h5>{row.productId}</h5>
                      </div>
                    </div>
                  </Grid>
                </Grid>
              </Box>
            </Collapse>
          </TableCell>
        </TableRow>
      </>
    </React.Fragment>
  );
}

export default function DisputeTableCell() {
  const [open, setOpen] = React.useState(false);

  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
  const [orderBy, setOrderBy] = React.useState("ASC");
  const [sortedData, setSortedData] = React.useState(disputeRows);
  const [colName, setColName] = React.useState("");
  
  const sorting = (col) => {
    console.log(col)
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
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
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
              onClick={() => sorting("dispute")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "dispute" ? (
                  <strong>Dispute</strong>
                ) : (
                  "Dispute"
                )}
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
              onClick={() => sorting("dispute_status")}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                {colName === "dispute_status" ? (
                  <strong>Dispute Status</strong>
                ) : (
                  "Dispute Status"
                )}
                {colName === "dispute_status" && orderBy === "ASC" ? (
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
