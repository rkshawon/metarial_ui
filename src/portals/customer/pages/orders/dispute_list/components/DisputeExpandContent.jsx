/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Box, Button, Grid } from "@mui/material";
import styles from "../../../../styles/customerStyles.module.css";
import ModifiedSelectItem from "../../components/ModifiedSelectItem";

export default function DisputeExpandContent({ row }) {
  return (
    <div
      style={{
        width: "95%",
        padding: "10px 2%",
        margin: " 0 1%",
        backgroundColor: "#fcfcfc",
        borderRadius: "5px",
      }}
    >
      <Grid container spacing={2}>
        <Grid item sm={12} className={styles.order_headers}>
          <div className="flexbox" style={{ marginBottom: "10px" }}>
            <h6>
              From: <b>@BestSeller (1648)</b>
            </h6>
            <div className="flexbox">
              <h6> Shipping method: </h6>
              <ModifiedSelectItem />
            </div>
            <h6>
              Delivery Time: <b>5-12 days</b>
            </h6>
            <h6>
              Shipping cost: <b>$10.50</b>
            </h6>
            <h6>
              Product Cost: <b>$4.63</b>
            </h6>
            <h6>
              Total: <b>$15.13</b>
            </h6>
          </div>
        </Grid>
      </Grid>
      <Box sx={{ margin: 1, width: "100%" }}>
        <Grid container spacing={4}>
          <Grid item sm={3.5}>
            <div style={{ display: "flex" }}>
              <img
                src={row.img}
                alt="image"
                style={{ width: "55px", height: "51px", marginRight: "21px" }}
              />
              <div>
                <h5
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "26px",
                    color: "#212B36",
                  }}
                >
                  Foundation Flip Flop
                </h5>
                <h6>
                  Product SKU: <b>{row.category}</b>
                </h6>
              </div>
            </div>
          </Grid>
          <Grid item sm={2.7}>
            <div>
              <div className="flexbox" style={{ marginBottom: " 9px" }}>
                <h6 style={{ margin: 0 }}>Shopify Variant</h6>
                <h5>{row.variant}</h5>
              </div>
              <div className="flexbox">
                <h6 style={{ margin: 0 }}>Supplier Variant</h6>
                <h5>{row.variant}</h5>
              </div>
              <div className="flexbox">
                <h6>Color</h6>
                <h5>{row.color}</h5>
              </div>
            </div>
          </Grid>
          <Grid item sm={3.5}>
            <div>
              <div className="flexbox">
                <h6 style={{ margin: 0 }}>Purchase Number</h6>
                <h5>{row.invoiceId}</h5>
              </div>
              <div className="flexbox">
                <h6>Tracking Number</h6>
                <h5>{row.productId}</h5>
              </div>
            </div>
          </Grid>
          <Grid item sm={2.2} sx={{ display: "flex" }} justifyContent="right">
            <Button variant="deepbluemini" sx={{ marginRight: "5px" }}>
              Tracking
            </Button>
            <Button variant="deepbluemini">Mapping</Button>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
