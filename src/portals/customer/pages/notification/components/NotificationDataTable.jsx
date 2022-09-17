// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";
// import car from "../../../assets/car.png";
// import wallet from "../../../assets/wallet.png";
// import warning from "../../../assets/warning.png";
// import LaunchIcon from "@mui/icons-material/Launch";

// function getType(params) {
//   if (params.value === "Car") {
//     return (
//       <div>
//         <img src={car} alt="" />
//       </div>
//     );
//   }
//   if (params.value === "Wallet") {
//     return (
//       <div>
//         <img src={wallet} alt="" />
//       </div>
//     );
//   } else {
//     return (
//       <div>
//         <img src={warning} alt="" />
//       </div>
//     );
//   }
// }

// function getActions(params) {
//   if (params.value === "Adjust") {
//     return (
//       <div className="flexbox" style={{ width: "100%" }}>
//         <div
//           style={{
//             padding: "5px",
//             textAlign: "center",
//             width: "55%",
//             borderRadius: "5px",
//             color: "#8D40FF",
//             border: "1px solid #8D40FF",
//           }}
//         >
//           {params.value}
//         </div>
//         <LaunchIcon style={{ color: "#D9D9D9", cursor: "pointer" }} />
//       </div>
//     );
//   } else {
//     return (
//       <div className="flexbox" style={{ width: "100%" }}>
//         <div
//           style={{
//             padding: "5px",
//             textAlign: "center",
//             width: "55%",
//             borderRadius: "5px",
//             color: "#8D40FF",
//             border: "1px solid #8D40FF",
//           }}
//         >
//           {params.value}
//         </div>
//         <LaunchIcon style={{ color: "#D9D9D9", cursor: "pointer" }} />
//       </div>
//     );
//   }
// }
// const columns = [
//   { field: "date", headerName: "Date", width: 130 },
//   { field: "time", headerName: "Time", width: 130 },
//   {
//     field: "type",
//     headerName: "Type",
//     width: 130,
//     renderCell: (params) => {
//       return <>{getType(params)}</>;
//     },
//   },
//   { field: "description", headerName: "Description", width: 300 },
//   {
//     field: "action",
//     headerName: "Action",
//     width: 200,
//     renderCell: (params) => {
//       return <>{getActions(params)}</>;
//     },
//   },
// ];

// const rows = [
//   {
//     id: 1,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Car",
//     description: "Missing housenumber in order #3421",
//     action: "Adjust",
//   },
//   {
//     id: 2,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Wallet",
//     description: "Missing housenumber in order #3421",
//     action: "Add Balance",
//   },
//   {
//     id: 3,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Warning",
//     description: "Missing housenumber in order #3421",
//     action: "Adjust",
//   },
//   {
//     id: 4,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Car",
//     description: "Missing housenumber in order #3421",
//     action: "Add Balance",
//   },
//   {
//     id: 5,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Wallet",
//     description: "Missing housenumber in order #3421",
//     action: "Adjust",
//   },
//   {
//     id: 6,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Warning",
//     description: "Missing housenumber in order #3421",
//     action: "Add Balance",
//   },
//   {
//     id: 7,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Car",
//     description: "Missing housenumber in order #3421",
//     action: "Adjust",
//   },
//   {
//     id: 8,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Warning",
//     description: "Missing housenumber in order #3421",
//     action: "Add Balance",
//   },
//   {
//     id: 9,
//     date: "2020-01-01",
//     time: "15.39PM",
//     type: "Wallet",
//     description: "Missing housenumber in order #3421",
//     action: "Adjust",
//   },
// ];

// export default function NotificationDataTable() {
//   return (
//     <div style={{ height: 400, width: "100%" }} className="hide_scrollbar">
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pcostSize={5}
//         rowsPerPcostOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../styles/customerStyles.module.css";

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
import { notificatonDataRows } from "../dummyData";
import car from "../../../assets/car.png";
import wallet from "../../../assets/wallet.png";
import warning from "../../../assets/warning.png";
import LaunchIcon from "@mui/icons-material/Launch";

function getType(params) {
  console.log(params.value);
  if (params.value === "Adjust" || params.value === "Add Balance") {
    return (
      <div className="flexbox" style={{ width: "100%" }}>
        <div
          style={{
            padding: "5px",
            textAlign: "center",
            width: "100px",
            borderRadius: "5px",
            color: "#8D40FF",
            border: "1px solid #8D40FF",
            backgroundColor: "#F9EDFF",
          }}
        >
          {params.value}
        </div>
        <LaunchIcon style={{ color: "#D9D9D9", cursor: "pointer" }} />
      </div>
    );
  }
  if (params.value === "Car") {
    return (
      <div>
        <img src={car} alt="" />
      </div>
    );
  }
  if (params.value === "Wallet") {
    return (
      <div>
        <img src={wallet} alt="" />
      </div>
    );
  } else {
    return (
      <div>
        <img src={warning} alt="" />
      </div>
    );
  }
}

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
        <TableCell sx={shouldBold}>{row.time}</TableCell>
        <TableCell>{getType({ value: row.type })}</TableCell>
        <TableCell sx={shouldBold}>{row.description}</TableCell>
        <TableCell>{getType({ value: row.action })}</TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function NotificationDataTable() {
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
              Time
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Type
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}>
              Description
            </TableCell>

            <TableCell align="left" sx={tableHeadStyles}>
              Action
            </TableCell>
            <TableCell align="left" sx={tableHeadStyles}></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {notificatonDataRows.map((row) => (
            <Row key={row.id} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
