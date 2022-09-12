import { Divider, Menu } from "@mui/material";
import React, { useState } from "react";
import ModifiedMenuItem from "../../../../../layout/sidebar/ModifiedMenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function OrderOverView() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 16px 0 rgb(0 0 0 / 6%)",
      }}
    >
      <div className="flexbox">
        <h2 style={{ fontSize: "22px", color: "#2E2F39", fontWeight: "600" }}>
          Overview
        </h2>
        <div style={{ fontSize: "14px", color: "#2E2F39" }}>
          <div>
            <div
              className="flexbox"
              style={{ cursor: "pointer" }}
              onClick={handleClick}
            >
              <span
                style={{
                  color: "#2E2F39",
                  fontSize: "13px",
                  fontWeight: "600",
                }}
              >
                Last 7 days
              </span>
              <ExpandMoreIcon />
            </div>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={openMenu}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <ModifiedMenuItem close={handleClose} itemName="Today" />
              <ModifiedMenuItem close={handleClose} itemName="Last 7 days" />
              <ModifiedMenuItem close={handleClose} itemName="Last 14 days" />
              <ModifiedMenuItem close={handleClose} itemName="Last 30 days" />
              <ModifiedMenuItem close={handleClose} itemName="Last year" />
            </Menu>
          </div>
        </div>
      </div>
      <div className="flexbox" style={{ marginTop: "10px" }}>
        <h5 style={{ fontSize: "14px", color: "#2E2F39" }}>Costs</h5>
        <span style={{ fontSize: "14px", color: "#2E2F39" }}>$0.00</span>
      </div>
      <div className="flexbox" style={{ margin: "10px 0" }}>
        <h5 style={{ fontSize: "14px", color: "#2E2F39" }}>Sales</h5>
        <span style={{ fontSize: "14px", color: "#2E2F39", fontWeight: "400" }}>
          $0.00
        </span>
      </div>
      <Divider sx={{ border: "1px solid #f0f2f2", margin: "20px 0" }} />
      <div className="flexbox">
        <h5 style={{ fontSize: "16px", color: "#2E2F39", fontWeight: "700" }}>
          Profit
        </h5>
        <span style={{ fontSize: "16px", color: "#8D40FF", fontWeight: "600" }}>
          $0.00
        </span>
      </div>
    </div>
  );
}
