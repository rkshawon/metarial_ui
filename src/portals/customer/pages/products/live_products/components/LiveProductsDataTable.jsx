import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import LaunchIcon from "@mui/icons-material/Launch";
import { Edit } from "@mui/icons-material";
import productImg from "../../../../assets/1.png";
import productImg2 from "../../../../assets/2.png";
import productImg3 from "../../../../assets/3.png";
import { Link } from "react-router-dom";

function getStatus(params) {
  if (params.value === "In Stock") {
    return (
      <div
        style={{
          padding: "5px",
          textAlign: "center",
          width: "100%",
          maxWidth: "100px",
          borderRadius: "5px",
          color: "#05AE01",
          background: "#D4FFD3",
        }}
      >
        {params.value}
      </div>
    );
  }
  if (params.value === "Pending") {
    return (
      <div
        style={{
          padding: "5px",
          textAlign: "center",
          width: "100%",
          maxWidth: "100px",
          borderRadius: "5px",
          color: "#E0A816",
          background: "#FEFFCF",
        }}
      >
        {params.value}
      </div>
    );
  } else {
    return (
      <div
        style={{
          padding: "5px",
          textAlign: "center",
          width: "100%",
          maxWidth: "100px",
          borderRadius: "5px",
          color: "#FF7E7E",
          background: "#FFF0F0",
        }}
      >
        {params.value}
      </div>
    );
  }
}
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "product",
    headerName: "Product",
    width: 300,
    renderCell: (params) => {
      console.log(params);
      return (
        <>
          <Link
            to={`/customer/products/${params.id}`}
            style={{ color: "#000" }}
          >
            <div className="flexbox">
              <img
                src={params.value.img}
                alt=""
                style={{ width: "45px", height: "45px", marginRight: "50px" }}
              />
              <h6>{params.value.title}</h6>
            </div>
          </Link>
        </>
      );
    },
  },
  { field: "product_id", headerName: "Product ID", width: 120 },
  // { field: "stock", headerName: "Stock", width: 100 },
  { field: "store", headerName: "Store", width: 150 },
  {
    field: "status",
    headerName: "Status",
    width: 150,
    renderCell: (params) => {
      return <>{getStatus(params)}</>;
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 120,
    renderCell: (params) => {
      return (
        <>
          <div className="flexbox">
            <LaunchIcon style={{ color: "#D9D9D9", cursor: "pointer" }} />
            <Edit style={{ color: "#D9D9D9", cursor: "pointer" }} />
          </div>
        </>
      );
    },
  },
];

const rows = [
  {
    id: 1,
    product: {
      img: productImg,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "In Stock",
  },
  {
    id: 2,
    product: {
      img: productImg2,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Pending",
  },
  {
    id: 3,
    product: {
      img: productImg3,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Stock out",
  },
  {
    id: 4,
    product: {
      img: productImg3,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "In Stock",
  },
  {
    id: 5,
    product: {
      img: productImg3,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Pending",
  },
  {
    id: 6,
    product: {
      img: productImg2,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Stock out",
  },
  {
    id: 7,
    product: {
      img: productImg,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "In Stock",
  },
  {
    id: 8,
    product: {
      img: productImg2,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Pending",
  },
  {
    id: 9,
    product: {
      img: productImg,
      title: "Foundation Flip Flop",
    },
    product_id: "YTGHURT",
    stock: "200 unit",
    store: "Corex Shop",
    status: "Stock out",
  },
];

export default function LiveProductsDataTable() {
  return (
    <div style={{ height: 400, width: "100%" }} className="hide_scrollbar">
      <DataGrid
        rows={rows}
        columns={columns}
        pcostSize={5}
        rowsPerPcostOptions={[5]}
        checkboxSelection
        pagination={false}
      />
    </div>
  );
}
