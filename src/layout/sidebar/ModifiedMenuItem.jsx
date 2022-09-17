import { MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function ModifiedMenuItem({ itemName, close, changeDataValue }) {
  return (
    <MenuItem
      onClick={() => {
        close();
        changeDataValue(itemName);
      }}
      sx={{
        fontSize: "14px",
        fontWeight: "500",
        "&:hover": {
          color: "#8D40FF",
          backgroundColor: "#F2E9FF",
        },
      }}
    >
      <div
        style={{
          width: "120px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        }}
      >
        {itemName}
      </div>
    </MenuItem>
  );
}
