import { DataGrid } from "@mui/x-data-grid";
import { Chip } from "@mui/material";
import { Check } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "../../../styles/adminStyles.module.css";
import ActionImg from "../../../assets/action.png";

function getChipProps(params) {
  if (params.value === "Delivered") {
    return {
      icon: <Check style={{ fill: "#05AE01" }} />,
      label: <strong style={{ color: "#05AE01" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#D4FFD3",
        border: "1px solid #D4FFD3",
        borderRadius: "5px",
      },
    };
  }
  if (params.value === "Unshipped") {
    return {
      icon: <CloseIcon style={{ fill: "#FF7E7E" }} />,
      label: <strong style={{ color: "#FF7E7E" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FFF0F0",
        border: "1px solid #FFF0F0",
        borderRadius: "5px",
      },
    };
  } else {
    return {
      icon: <AccessTimeIcon style={{ fill: "#E0A816" }} />,
      label: <strong style={{ color: "#E0A816" }}>{params.value}</strong>,
      style: {
        backgroundColor: "#FEFFCF",
        border: "1px solid #FEFFCF",
        borderRadius: "5px",
      },
    };
  }
}

function getOrderChipProps(params) {
  if (params.value === "Shipped") {
    return (
      <div
        style={{
          background: "#D4FFD3",
          color: "#05AE01",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  }
  if (params.value === "Fulfilled") {
    return (
      <div
        style={{
          background: "#E9DAFF",
          color: "#8D40FF",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  } else {
    return (
      <div
        style={{
          background: "#FEFFCF",
          color: "#E0A816",
        }}
        className={styles.fulfillment}
      >
        {params.value}
      </div>
    );
  }
}
const columns = [
  { field: "id", headerName: "Order ID", width: 100 },
  { field: "customer", headerName: "Customer", width: 200 },
  { field: "shipping", headerName: "Shipping Address", width: 200 },
  { field: "cost", headerName: "Total Cost", width: 120 },
  {
    field: "fulfillment",
    headerName: "Fulfillment",
    width: 150,
    renderCell: (params) => {
      return { ...getOrderChipProps(params) };
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
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 2,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Fulfilled",
    order_status: "Unshipped",
  },
  {
    id: 3,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "In Process",
    order_status: "In Transit",
  },
  {
    id: 4,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 5,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Fulfilled",
    order_status: "Unshipped",
  },
  {
    id: 6,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "In Process",
    order_status: "In Transit",
  },
  {
    id: 7,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 8,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
  {
    id: 9,
    date: "30-07-22",
    customer: "Pattrick Leach",
    cost: "$6.49",
    shipping: "new yyork",
    fulfillment: "Shipped",
    order_status: "Delivered",
  },
];
export default function OrderTable() {
  return (
    <div style={{ height: 500, width: "100%" }} className="hide_scrollbar">
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
