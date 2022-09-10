import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { getChipProps } from "../../../../utils/getChipProps";

function getDisputeChipProps(params) {
  if (params.value === "POD") {
    return {
      label: <strong style={{ color: "#05AE01" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
      },
    };
  }
  if (params.value === "Local Tracking") {
    return {
      label: <strong style={{ color: "#E0A816" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
      },
    };
  }
  if (params.value === "Resend") {
    return {
      label: <strong style={{ color: "#3366FF" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#DDF1FF",
        border: "1px solid #DDF1FF",
      },
    };
  }
  if (params.value === "POS") {
    return {
      label: <strong style={{ color: "#8D40FF" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#E9DAFF",
        border: "1px solid #E9DAFF",
      },
    };
  } else {
    return {
      label: <strong style={{ color: "#939393" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#F4F4F4",
        border: "1px solid #F4F4F4",
      },
    };
  }
}

const columns = [
  { field: "id", headerName: "Order ID", width: 70 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "customer", headerName: "Customer", width: 130 },
  { field: "cost", headerName: "Cost", width: 130 },
  { field: "shipping", headerName: "Shipping", width: 130 },
  {
    field: "dispute",
    headerName: "Dispute",
    width: 130,
    renderCell: (params) => {
      return (
        <Chip
          variant="outlined"
          size="small"
          {...getDisputeChipProps(params)}
          sx={{ width: "100%" }}
        />
      );
    },
  },
  {
    field: "dispute_status",
    headerName: "Dispute Status",
    width: 130,
    renderCell: (params) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
];

const rows = [
  {
    id: 1,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "POD",
    dispute_status: "Completed",
  },
  {
    id: 2,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "POD",
    dispute_status: "Pending",
  },
  {
    id: 3,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Local Tracking",
    dispute_status: "Completed",
  },
  {
    id: 4,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Resend",
    dispute_status: "Completed",
  },
  {
    id: 5,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Resend",
    dispute_status: "Pending",
  },
  {
    id: 6,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Refund",
    dispute_status: "Pending",
  },
  {
    id: 7,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "POS",
    dispute_status: "Completed",
  },
  {
    id: 8,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Resend",
    dispute_status: "Pending",
  },
  {
    id: 9,
    customer: "Snow",
    date: "Jon",
    cost: 35,
    shipping: "$8.49",
    dispute: "Resend",
    dispute_status: "Pending",
  },
];

export default function DisputeDataTable() {
  return (
    <div style={{ height: 400, width: "100%" }} className="hide_scrollbar">
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
