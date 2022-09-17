import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

import InputField from "../../../../../../Authentication/components/InputField";
import { FormControl, MenuItem, Select } from "@mui/material";
import { customSvg } from "../../../../../../utils/customSvg";
import { rows } from "../variantsRow";
import VariantActions from "./VariantActions";
import { useMemo } from "react";

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
      { field: "id", headerName: "ID", width: 70 },
      {
        field: "Product",
        headerName: "Product",
        width: 100,
        renderCell: (params) => {
          return (
            <img
              src={params.row.product.img}
              alt="product"
              style={{ width: "50px", height: "50px" }}
            />
          );
        },
      },
      { field: "sku", headerName: "Sku", width: 130 },
      {
        field: "color",
        headerName: "Color",
        width: 100,
        type: "singleSelect",
        valueOptions: ["Red", "Green", "Blue"],
        editable: true,
      },
      {
        field: "size",
        headerName: "Size",
        width: 100,
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
        width: 70,
      },
      {
        field: "shipping_cost",
        headerName: "Shipping Cost",
        width: 130,
      },
      {
        field: "price_value",
        headerName: "Price Value",
        width: 100,
        // renderCell: (params) => {
        //   return (
        //     <InputField
        //       //   label="Login E-mail or Phone"
        //       placeholder="Price Value"
        //       type="number"
        //       size="small"
        //       value={params.row.price_value}
        //     />
        //   );
        // },
        // type: "number",
        editable: true,
      },
      {
        field: "compare_price_value",
        headerName: "Compare Price Value",
        width: 160,
        headerAlign: "left",
        // type: "number",
        editable: true,
      },
      {
        field: "actions",
        headerName: "Actions",
        width: 130,
        type: "actions",
        renderCell: (params) => {
          return <VariantActions {...{ params, rowId, setRowId }} />;
        },
      },
    ],
    [rowId]
  );

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={page}
        rowsPerPageOptions={[5, 10, 20]}
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
