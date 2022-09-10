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
import { ArrowBack, ArrowForward } from "@mui/icons-material";

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
              <div
                style={{
                  display: "flex",
                  alignItem: "center",
                }}
              >
                Dispute
              </div>
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Dispute Status
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {disputeRows.map((row) => (
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
