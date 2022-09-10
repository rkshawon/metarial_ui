import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { getChipProps } from "../../../utils/getChipProps";
import { getStatusDesignMaker } from "../../../utils/getStatusDesignMaker";

const columns = [
  { field: "id", headerName: "Order ID", width: 70 },
  { field: "date", headerName: "Date", width: 130 },
  { field: "customer", headerName: "Customer", width: 130 },
  { field: "cost", headerName: "Cost", width: 70 },
  { field: "shipping", headerName: "Shipping", width: 130 },
  {
    field: "fulfillment",
    headerName: "Fulfillment",
    width: 150,
    renderCell: (params) => {
      return { ...getStatusDesignMaker(params) };
    },
  },
  {
    field: "order_status",
    headerName: "Order Status",
    width: 150,
    renderCell: (params) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
];

const rows = [
  {
    id: 1,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 2,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Fulfilled",
    order_status: "Unshipped",
  },
  {
    id: 3,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "In Process",
    order_status: "In Transit",
  },
  {
    id: 4,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 5,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Fulfilled",
    order_status: "Unshipped",
  },
  {
    id: 6,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "In Process",
    order_status: "In Transit",
  },
  {
    id: 7,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 8,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 9,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "$8.49",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
];

export default function OrderDataTable() {
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
