import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ActionImg from "../../../../assets/action.png";

function getChipProps(params) {
  if (params.value === "Completed") {
    return {
      //icon: <Check style={{ fill: "#05AE01" }} />,
      label: <strong style={{ color: "#05AE01" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
      },
    };
  } else {
    return {
      //icon: <AccessTimeIcon style={{ fill: "#E0A816" }} />,
      label: <strong style={{ color: "#E0A816" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
      },
    };
  }
}

const columns = [
  { field: "orderid", headerName: "Order ID", width: 120 },
  {
    field: "customer",
    headerName: "Customer",
    width: 200,
    renderCell: (params) => {
      return (
        <Box>
          <Typography sx={{ fontSize: "13px" }}>
            {params.row.customer[0]}
          </Typography>
          <Typography sx={{ fontSize: "9px", color: "#9D9D9D" }}>
            {params.row.customer[1]}
          </Typography>
        </Box>
      );
    },
  },
  { field: "dispute", headerName: "Dispute", width: 200 },
  {
    field: "dispute_status",
    headerName: "Status",
    width: 200,
    renderCell: (params) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return <img src={ActionImg} alt="" />;
    },
  },
];

const rows = [
  {
    id: 1,
    orderid: "#010170",
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Proof of Delivery",
    dispute_status: "Completed",
  },
  {
    id: 2,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Proof of Delivery",
    dispute_status: "Pending",
  },
  {
    id: 3,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Lost Product",
    dispute_status: "Completed",
  },
  {
    id: 4,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Lost Product",
    dispute_status: "Completed",
  },
  {
    id: 5,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Lost Product",
    dispute_status: "Pending",
  },
  {
    id: 6,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Damage Product",
    dispute_status: "Pending",
  },
  {
    id: 7,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Damage Product",
    dispute_status: "Completed",
  },
  {
    id: 8,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Lost Product",
    dispute_status: "Pending",
  },
  {
    id: 9,
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    orderid: "#010170",
    cost: 35,
    shipping: "$8.49",
    dispute: "Local Tracking",
    dispute_status: "Pending",
  },
];

export default function DisputeDataTable() {
  return (
    <div
      style={{ height: 500, width: "100%", marginTop: "4em" }}
      className="hide_scrollbar"
    >
      <DataGrid
        rows={rows}
        columns={columns}
        pcostSize={5}
        rowsPerPcostOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
