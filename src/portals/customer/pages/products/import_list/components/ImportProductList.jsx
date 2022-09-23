import { Checkbox } from "@mui/material";
import React from "react";
import { importDataRows } from "../importDataRows";
import ImportListTabs from "./ImportListTabs";

export default function ImportProductList() {
  const [selectedProduct, setSelectedProduct] = React.useState([]);

  const selectProduct = (item) => {
    if (!selectedProduct.includes(item)) {
      setSelectedProduct([...selectedProduct, item]);
    } else {
      const index = selectedProduct.indexOf(item);
      if (index > -1) {
        selectedProduct.splice(index, 1);
        setSelectedProduct([...selectedProduct]);
      }
    }
  };

  return (
    <div
      style={{
        marginTop: "40px",
      }}
    >
      {importDataRows.map((data) => (
        <div
          style={{
            marginBottom: "20px",
            padding: "30px",
            borderRadius: "8px",
            boxShadow:
              "0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline" }}>
            <Checkbox
              checked={selectedProduct.includes(data) ? true : false}
              onClick={() => selectProduct(data)}
            />
            <ImportListTabs data={data} />
          </div>
        </div>
      ))}
    </div>
  );
}
