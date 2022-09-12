import { Grid } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import ProductImageGallery from "./components/ProductImageGallery";
import ProductInfo from "./components/ProductInfo";
import { useNavigate } from "react-router-dom";

export default function ProductDetails() {
  const navigate = useNavigate();
  return (
    <AppLayout>
      <div className={styles.products}>
        <div onClick={() => navigate(-1)}>Back</div>
        <div>
          <h4>Product Details</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h6 className={styles.profile_title} style={{ margin: "0px" }}>
              Product -
            </h6>
            <h6 style={{ color: "#919EAB", marginLeft: "10px" }}>
              Foundations Matte Flip Flop
            </h6>
          </div>
        </div>
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={4}>
            <ProductImageGallery />
          </Grid>
          <Grid item xs={8}>
            <ProductInfo />
          </Grid>
        </Grid>
      </div>
    </AppLayout>
  );
}
