import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import { Button } from "@mui/material";
import { rows } from "../variantsRow";
import VariantActions from "./VariantActions";
import { useMemo } from "react";
import { Add } from "@mui/icons-material";
import EuroIcon from "@mui/icons-material/Euro";

export default function VariantsTabMenu() {
  // const [color, setColor] = React.useState({ id: 0 });
  // const [size, setSize] = React.useState(0);
  const [rowId, setRowId] = React.useState(null);

  // const handleChange = (event) => {
  //   setColor({ ...color, id: event.target.value });
  // };

  // const handleSize = (event) => {
  //   setSize(event.target.value);
  // };
  const [page, setPage] = React.useState(5);
  const columns = useMemo(
    () => [
      // { field: "id", headerName: "ID", width: 70 },
      {
        field: "Product",
        headerName: "Product",
        width:200,
        renderCell: (params) => {
          return (
            <div style={{ display: "flex" }}>
              <img
                src={params.row.product.img}
                alt="product"
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "8px",
                  marginRight: "10px",
                }}
              />
              <h6>{params.row.product.title}</h6>
            </div>
          );
        },
      },
      { field: "sku", headerName: "Sku", flex: 1 },
      {
        field: "color",
        headerName: "Color",
        // width: 100,
        flex: 1,
        type: "singleSelect",
        valueOptions: ["Red", "Green", "Blue"],
        editable: true,
      },
      {
        field: "size",
        headerName: "Size",
        flex: 1,
        type: "singleSelect",
        valueOptions: ["M", "L", "XL", "XXL"],
        // renderCell: (params) => {
        //   return (
        //     <FormControl fullWidth>
        //       <Select
        //         displayEmpty
        //         inputProps={{ "aria-label": "Without label" }}
        //         sx={{
        //           width: "100%",
        //           color: "gray",
        //           fontSize: "14px",
        //         }}
        //         size="small"
        //         value={size}
        //         onChange={handleSize}
        //         // sx={{ "& .MuiSelect-icon": { top: 10 } }}
        //         IconComponent={customSvg}
        //       >
        //         <MenuItem value={0}>M</MenuItem>
        //         <MenuItem value={1}>L</MenuItem>
        //         <MenuItem value={2}>XL</MenuItem>
        //         <MenuItem value={2}>XXL</MenuItem>
        //       </Select>
        //     </FormControl>
        //   );
        // },
        editable: true,
      },
      {
        field: "cost",
        headerName: "Cost",
        flex: 1,
        renderCell: (params) => {
          return (
            <>
               €
              {params.row.cost}
            </>
          );
        },
      },
      {
        field: "shipping_cost",
        headerName: "Shipping Cost",
        width: 130,
        renderCell: (params) => {
          return (
            <>
               €
              {params.row.shipping_cost}
            </>
          );
        },
      },
      {
        field: "price_value",
        headerName: "Price Value",
        flex: 1,
        renderCell: (params) => {
          return (
            <>
               €
              {params.row.price_value}
            </>
          );
        },
        type: "number",
        editable: true,
      },
      {
        field: "compare_price_value",
        headerName: "Compare Price Value",
        flex: 1,
        headerAlign: "center",
        type: "number",
        editable: true,
        renderCell: (params) => {
          return (
            <>
              €
              {params.row.compare_price_value}
            </>
          );
        },
      },
      // {
      //   field: "actions",
      //   headerName: "Actions",
      //   width: 130,
      //   type: "actions",
      //   renderCell: (params) => {
      //     return <VariantActions {...{ params, rowId, setRowId }} />;
      //   },
      // },
    ],
    [rowId]
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      {/* <div style={{ textAlign: "right" }}>
        <Button
          variant="deepbluemini"
          startIcon={<Add style={{ color: "#fff" }} />}
          sx={{ marginBottom: "10px" }}
        >
          Add Variant
        </Button>
      </div> */}
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={page}
        sx={{
          "& .MuiDataGrid-iconSeparator": {
            color: "transparent",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: 0,
            outline: "none",
          },
          "& .MuiDataGrid-columnHeadersInner": {
            background: "#fafdfd",
            border: "none",
          },
          "&.MuiBox-root-css-19kzrtu": {
            padding: 0,
          },
          "& .MuiDataGrid-virtualScroller": {
            overflow: "auto",
            // position: "relative";
            width: "5px",
          },
        }}
        rowsPerPageOptions={[5, 10, 20]}
        getRowSpacing={(params) => ({
          top: params.isFirstVisible ? 0 : 5,
          bottom: params.isLastVisible ? 0 : 5,
        })}
        checkboxSelection
        // onSelectionModelChange={(newSelection) => {
        //   console.log(newSelection[0]);
        //   setRowId(newSelection[0]);
        // }}
        onPageSizeChange={(newPage) => setPage(newPage)}
        getRowId={(row) => row.id}
      />
    </div>
  );
}
