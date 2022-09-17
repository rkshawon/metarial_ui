import * as React from "react";

import { ArrowBack, ArrowForward, Edit } from "@mui/icons-material";
import LaunchIcon from "@mui/icons-material/Launch";
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
import { getChipProps } from "../../../utils/getChipProps";
import { extra_storageDataRows } from "../dummyData";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Row(props) {
  const { row } = props;

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        {/* <TableCell>
          <KeyboardArrowDownIcon />
        </TableCell> */}
        <TableCell>{row.id}</TableCell>
        <TableCell>
          <div
            style={{
              display: "flex",
              alignItem: "center",
            }}
          >
            <img
              style={{ height: "40px", width: "40px", marginRight: "10px" }}
              src={row.product.img}
              alt=""
            />
            <p
              style={{
                marginTop: "5px",
              }}
            >
              {row.product.title}
            </p>
          </div>
        </TableCell>
        <TableCell>{row.product_id}</TableCell>
        <TableCell>{row.stock}</TableCell>
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
    <TableContainer component={Paper} sx={{ marginTop: "30px" }}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            {/* <TableCell>
              <KeyboardArrowDownIcon />
            </TableCell> */}
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
              Product ID
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Stock
            </TableCell>

            <TableCell align="left" sx={tableHeadStyles}>
              Status
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {extra_storageDataRows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
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
    </TableContainer>
  );
}
