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
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import OrderExpandContent from "./OrderExpandContent";
import InfoIcon from "@mui/icons-material/Info";

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
            width: "100%",
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
            width: "100%",
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
            width: "100%",
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
      <div
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
      </div>
    </React.Fragment>
  );
}

export default function OrderTableCell() {
  const [open, setOpen] = React.useState(false);

  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell>
            <TableCell sx={{ color: "#707070", fontWeight: 500 }}>
              Order ID
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Date
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Customer
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Cost
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Shipping
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Fulfilment
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Order Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
