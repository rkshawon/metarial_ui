import * as React from "react";
import {
  Chip,
  Collapse,
  Grid,
  IconButton,
  InputAdornment,
  Pagination,
  PaginationItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { ArrowBack, ArrowForward, Search } from "@mui/icons-material";
import { chipColorDecisionMaker } from "../../../utils/chipColorDecisionMaker";
import ModifiedMenu from "../../orders/components/ModifiedMenu";
import OrderTrackingDataTable from "../../orders/order_tracking/components/OrderTrackingDataTable";
import { getChipProps } from "../../../utils/getChipProps";
import { getDisputeFulfilmentDesign } from "../../../utils/getDIsputeFulfilmentDesign";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Stack } from "@mui/system";
import { paymentDataRows } from "../dummyData";
import styles from "../../../styles/customerStyles.module.css";
import LaunchIcon from "@mui/icons-material/Launch";

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const shouldBold = open && { fontWeight: "bold" };

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* <TableCell>
          <KeyboardArrowDownIcon />
        </TableCell> */}
        <TableCell sx={shouldBold}>{row.date}</TableCell>
        <TableCell sx={shouldBold}>{row.payment_method}</TableCell>
        <TableCell sx={shouldBold}>{row.amount}</TableCell>
        <TableCell>
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps({ value: row.status })}
          />
        </TableCell>
        <TableCell>
          <div>
            <LaunchIcon
              style={{
                color: "#D9D9D9",
                cursor: "pointer",
              }}
            />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
export default function PaymentDataTable() {
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
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {/* <TableCell>
              <IconButton
                aria-label="expand row"
                size="small"
                onClick={() => setOpen(!open)}
              >
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </TableCell> */}
            <TableCell sx={{ color: "#707070", fontWeight: 500 }}>
              Date
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Payment Method
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Amount
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Status
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Action
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {paymentDataRows.map((row) => (
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
