import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Chip, Typography } from "@mui/material";
import { Check } from "@mui/icons-material";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ProductImg1 from "../../../../assets/dummyImg/productimg.png";
import ProductImg2 from "../../../../assets/dummyImg/productimg1.png";
import ProductImg3 from "../../../../assets/dummyImg/productimg2.png";

function getChipProps(params) {
  if (params.value === "Quotation") {
    return {
      //icon: <Check style={{ fill: "#05AE01" }} />,
      label: <strong style={{ color: "#05AE01" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        padding: "12px 0",
        borderRadius: "5px",
      },
    };
  } else {
    return {
      //icon: <AccessTimeIcon style={{ fill: "#E0A816" }} />,
      label: <strong style={{ color: "#8D40FF" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#E9DAFF",
        border: "1px solid #FEFFCF",
        padding: "12px 0",
        borderRadius: "5px",
      },
    };
  }
}

const columns = [
  {
    field: "product",
    headerName: "Product",
    width: 230,
    renderCell: (params) => {
      return (
        <Box
          sx={{
            heigh: "100%",
            width: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginRight: "1em" }}>{params.row.product[0]}</Box>
          <Typography sx={{ fontSize: "13px" }}>
            {params.row.product[1]}
          </Typography>
        </Box>
      );
    },
  },
  { field: "requsition_date", headerName: "Requisition Date", width: 180 },
  {
    field: "customer",
    headerName: "Customer",
    width: 180,
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
  { field: "price", headerName: "Price", width: 110 },
  {
    field: "fulfillment",
    headerName: "Fulfillment",
    width: 200,
    renderCell: (params) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
];

const rows = [
  {
    id: 1,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Quotation",
  },
  {
    id: 2,
    product: [
      <img src={ProductImg2} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Requotation",
  },
  {
    id: 3,
    product: [
      <img src={ProductImg3} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Quotation",
  },
  {
    id: 4,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Requotation",
  },
  {
    id: 5,
    product: [
      <img src={ProductImg2} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Quotation",
  },
  {
    id: 6,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Requotation",
  },
  {
    id: 7,
    product: [
      <img src={ProductImg3} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Quotation",
  },
  {
    id: 8,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "Requotation",
  },
  {
    id: 9,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Pattrick Leach", "pat_leach@gmail.com"],
    requsition_date: "30-07-22",
    price: "$8.49",
    fulfillment: "ReQuotation",
  },
];

export default function RequotationDataTable() {
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
