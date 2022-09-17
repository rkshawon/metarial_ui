import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";
import ActionImg from "../../../assets/action.png";
import ProductImg1 from "../../../assets/dummyImg/productimg.png";
import ProductImg2 from "../../../assets/dummyImg/productimg1.png";
import ProductImg3 from "../../../assets/dummyImg/productimg2.png";

function getChipProps(params) {
  if (params.value === "Completed") {
    return {
      label: <strong style={{ color: "#05AE01" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
      },
    };
  } else {
    return {
      label: <strong style={{ color: "#E0A816" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
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
        <Link to={`product/${params.row.id}`}>
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
        </Link>
      );
    },
  },
  {
    field: "requisitiondate",
    headerName: "Requisitoin Date",
    width: 150,
    renderCell: (params) => {
      return (
        <Typography sx={{ fontSize: "13px" }}>
          {params.row.requisitiondate}
        </Typography>
      );
    },
  },
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
  {
    field: "price",
    headerName: "Price",
    width: 80,
    renderCell: (params) => {
      return (
        <Typography sx={{ fontSize: "13px" }}>{params.row.price}</Typography>
      );
    },
  },
  {
    field: "fulfillment",
    headerName: "Fulfillment",
    width: 150,
    renderCell: (params) => {
      return <Chip variant="outlined" size="small" {...getChipProps(params)} />;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 100,
    renderCell: () => {
      return <img src={ActionImg} alt="" />;
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
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Completed",
  },
  {
    id: 2,
    product: [
      <img src={ProductImg2} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Pending",
  },
  {
    id: 3,
    product: [
      <img src={ProductImg3} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Completed",
  },
  {
    id: 4,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Completed",
  },
  {
    id: 5,
    product: [
      <img src={ProductImg2} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Pending",
  },
  {
    id: 6,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Pending",
  },
  {
    id: 7,
    product: [
      <img src={ProductImg3} alt="" style={{ borderRadius: "10px" }} />,
      "Foundation Flip",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Completed",
  },
  {
    id: 8,
    product: [
      <img src={ProductImg1} alt="" style={{ borderRadius: "10px" }} />,
      "High Snicker",
    ],
    customer: ["Rasmus Christensen", "pat_leach@gmail.com"],
    requisitiondate: "30-07-22",
    price: "$8.49",
    action: "",
    fulfillment: "Pending",
  },
];

export default function SourcingTable() {
  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </Box>
  );
}
