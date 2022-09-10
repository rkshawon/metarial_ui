import { MenuItem } from "@mui/material";
import React, { useState } from "react";

export default function ModifiedMenuItem({ itemName, close }) {
  return (
    <MenuItem
      sx={{
        fontSize: "12px",
        fontWeight: "400",
        color: "#9D9D9D",
        borderBottom: "1px solid rgba(33, 33, 33, 0.08)",
        "&:hover": {
          fontWeight: "400",
          color: "#8D40FF",
          backgroundColor: "#F2E9FF",
        },
      }}
      onClick={close}
    >
      {itemName}
    </MenuItem>
  );
}
