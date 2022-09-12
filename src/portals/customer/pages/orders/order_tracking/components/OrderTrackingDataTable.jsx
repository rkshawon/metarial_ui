import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  Box,
  Chip,
  Collapse,
  Grid,
  IconButton,
  Pagination,
  PaginationItem,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import styles from "../../../../styles/customerStyles.module.css";
import { getChipProps } from "../../../../utils/getChipProps";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Paper from "@mui/material/Paper";
import { getDisputeFulfilmentDesign } from "../../../../utils/getDIsputeFulfilmentDesign";
import { orderTrackingRows } from "../../dummyData";

// function getOrderChipProps(params) {
//   if (params.value === "Shipped") {
//     return (
//       <div
//         style={{
//           background: "#D4FFD3",
//           color: "#05AE01",
//         }}
//         className={styles.fulfillment}
//       >
//         {params.value}
//       </div>
//     );
//   }
//   if (params.value === "Fulfilled") {
//     return (
//       <div
//         style={{
//           background: "#E9DAFF",
//           color: "#8D40FF",
//         }}
//         className={styles.fulfillment}
//       >
//         {params.value}
//       </div>
//     );
//   } else {
//     return (
//       <div
//         style={{
//           background: "#FEFFCF",
//           color: "#E0A816",
//         }}
//         className={styles.fulfillment}
//       >
//         {params.value}
//       </div>
//     );
//   }
// }
//const columns = [
//   { field: "id", headerName: "Order ID", width: 70 },
//   { field: "tracking", headerName: "Tracking ID", width: 250 },
//   { field: "destination", headerName: "Destination", width: 130 },
//   { field: "time_in", headerName: "Time in Transit", width: 100 },
//   {
//     field: "fulfillment",
//     headerName: "Fulfillment",
//     width: 130,
//     renderCell: (params) => {
//       return { ...getOrderChipProps(params) };
//     },
//   },
//   {
//     field: "order_status",
//     headerName: "Order Status",
//     width: 200,
//     renderCell: (params) => {
//       return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
//     },
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Shipped",
//     order_status: "Delivered",
//   },
//   {
//     id: 2,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Fulfilled",
//     order_status: "Picked up",
//   },
//   {
//     id: 3,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "In Process",
//     order_status: "In Transit",
//   },
//   {
//     id: 4,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Shipped",
//     order_status: "Delivered",
//   },
//   {
//     id: 5,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Fulfilled",
//     order_status: "Unshipped",
//   },
//   {
//     id: 6,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "In Process",
//     order_status: "In Transit",
//   },
//   {
//     id: 7,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Shipped",
//     order_status: "Delivered",
//   },
//   {
//     id: 8,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Shipped",
//     order_status: "Delivered",
//   },
//   {
//     id: 9,
//     tracking: "YT2220921266048154",
//     destination: "Netherlands",
//     time_in: "11 Days",
//     fulfillment: "Shipped",
//     order_status: "Delivered",
//   },
// ];

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

export default function OrderTrackingDataTable() {
  const [open, setOpen] = React.useState(false);

  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
  };

  const [anchorEl, setAnchorEl] = React.useState(null);
  const openMenu = Boolean(anchorEl);
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
              Tracking ID
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Destination
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Time in Transit
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                }}
              >
                Fullfillment
              </div>
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Dispute Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderTrackingRows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
}
