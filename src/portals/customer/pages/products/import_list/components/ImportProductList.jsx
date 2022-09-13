import { Add } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { importDataRows } from "../importDataRows";
import ImportListTabs from "./ImportListTabs";

export default function ImportProductList() {
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
          <ImportListTabs data={data}/>
        </div>
      ))}
    </div>
  );
}
