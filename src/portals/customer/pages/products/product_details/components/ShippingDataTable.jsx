import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";



export default function ShippingDataTable({ title }) {

  const columns = [
    { field: "type", headerName: title, width: 130 },
    { field: "shipping_time", headerName: "Estimated Shipping Time", width: 200 },
    { field: "cost", headerName: "Cost", width: 200 },
  ];
  
  const rows = [
    {
      type: "Economy",
      shipping_time: "20-30 Days",
      cost: "$6.50",
    },
    {
      type: "Regular",
      shipping_time: "10-15 Days",
      cost: "$8.50",
    },
  ];
  return (
    <div style={{ height: "160px", width: "100%" }} className="hide_scrollbar">
      <DataGrid
        rows={rows}
        sx={{
          "& .MuiDataGrid-columnHeaderCheckbox .MuiDataGrid-columnHeaderTitleContainer":
            {
              display: "none",
            },
            border:"none"
        }}
        columns={columns}
        getRowId={(row) => row.type}
        onColumnHeaderLeave={true}
        pcostSize={5}
        rowsPerPcostOptions={[5]}
        checkboxSelection
        pagination={false}
        hideFooter={true}
      />
    </div>
  );
}
