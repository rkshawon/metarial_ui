import { Button } from "@mui/material";
import * as React from "react";
import store from "../../../../assets/shopify.png";
import styles from "../../../../styles/adminStyles.module.css";
import ChinaWarehouseDetails from "../../../bulkPurchase/components/ChinaWarehouseDetails";

export default function DisputeProofContent() {
  function getOrderStatusProps(params) {
    if (params === "Delivered") {
      return (
        <div
          style={{
            background: "#D4FFD3",
            color: "#05AE01",
          }}
          className={styles.fulfillment}
        >
          {params}
        </div>
      );
    }
    if (params.status === "POD") {
      return (
        <div
          style={{
            background: "#E9DAFF",
            color: "#8D40FF",
          }}
          className={styles.fulfillment}
        >
          {params.status}
        </div>
      );
    } else {
      return (
        <div
          style={{
            background: "#FEFFCF",
            color: "#E0A816",
          }}
          className={styles.fulfillment}
        >
          {params.status}
        </div>
      );
    }
  }

  return (
    <>
      <div style={{ padding: "50px 0px" }}>
        <img src={store} alt="" />
        <div className="flexbox" style={{ color: "black" }}>
          <h5>#001703</h5>
          <h5>30-07-22</h5>
          <h5>Rasmus Christensen</h5>

          <>{getOrderStatusProps("Delivered")}</>
        </div>
        <ChinaWarehouseDetails title="tracking" />
        <h4 className={styles.proof_title}>
          Dispute: Proof of Delivery & Local Tracking
        </h4>
        <div>
          <Button
            variant="contained"
            sx={{
              margin: "2em 0",
              height: "40px",
              background: "#1890FF",
              padding: "1em 1.5em",
              fontWeight: "600",
              fontSize: "15px",
              boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
              "&:hover": {
                boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
              },
            }}
          >
            Proof of Delivery
          </Button>
          <Button
            variant="contained"
            sx={{
              margin: "2em 1em",
              background: "#8D40FF",
              height: "40px",
              padding: "1em 1.5em",
              fontWeight: "600",
              fontSize: "15px",
              boxShadow: "0px 8px 16px rgba(141, 64, 255, 0.24)",
              "&:hover": {
                background: "0px 8px 16px rgba(141, 64, 255, 0.24)",
              },
            }}
          >
            Local Tracking
          </Button>
        </div>
      </div>
    </>
  );
}
