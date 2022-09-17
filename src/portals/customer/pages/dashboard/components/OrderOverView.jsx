import { Divider } from "@mui/material";
import React from "react";
import TimingDropdown from "./TimingDropdown";

export default function OrderOverView() {
  return (
    <div
      style={{
        borderRadius: "10px",
        padding: "20px",
        boxShadow: "0 4px 16px 0 rgb(0 0 0 / 6%)",
      }}
    >
      <div className="flexbox">
        <h2
          style={{
            fontSize: "22px",
            color: "#2E2F39",
            fontWeight: "600",
            marginTop: 0,
          }}
        >
          Overview
        </h2>
        <TimingDropdown />
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
