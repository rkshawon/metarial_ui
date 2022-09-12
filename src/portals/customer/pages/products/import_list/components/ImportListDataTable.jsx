import * as React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { Link } from "react-router-dom";
import { ArrowBack, ArrowForward, Edit } from "@mui/icons-material";
import {
  Chip,
  Pagination,
  PaginationItem,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { importDataRows } from "../importDataRows";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { getChipProps } from "../../../../utils/getChipProps";

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>{row.id}</TableCell>
        <TableCell>
          <>
            <Link
              to={`/customer/products/import-list/product/${row.id}`}
              style={{ color: "#000" }}
            >
              <div
                style={{
                  display: "flex",
                }}
              >
                <img
                  src={row.product.img}
                  alt=""
                  style={{ width: "45px", height: "45px", marginRight: "10px" }}
                />
                <div>
                  <h6 style={{ marginBottom: "2px" }}>{row.product.title}</h6>
                  <small>From: Bestdealer（1688）</small>
                </div>
              </div>
            </Link>
          </>
        </TableCell>
        <TableCell>{row.description}</TableCell>
        <TableCell>{row.store}</TableCell>
        {/* <TableCell>
          <Chip
            variant="outlined"
            size="small"
            {...getChipProps({ value: row.status })}
          />
        </TableCell> */}
        <TableCell>
          <div>
            <LaunchIcon
              style={{
                color: "#D9D9D9",
                cursor: "pointer",
                marginRight: "10px",
              }}
            />
            <Edit style={{ color: "#D9D9D9", cursor: "pointer" }} />
          </div>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function StorageDataTable() {
  const tableHeadStyles = {
    color: "#707070",
    fontWeight: 500,
  };

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ color: "#707070", fontWeight: 500 }}>ID</TableCell>
            <TableCell
              sx={{
                color: "#707070",
                fontWeight: 500,
                width: "250px",
              }}
            >
              Product
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Description
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Store
            </TableCell>

            {/* <TableCell align="left" sx={tableHeadStyles}>
              Status
            </TableCell> */}
            <TableCell align="left" sx={tableHeadStyles}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {importDataRows.map((row) => (
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
