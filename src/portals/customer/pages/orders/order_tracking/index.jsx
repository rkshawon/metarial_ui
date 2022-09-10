import { Grid } from "@mui/material";
import React from "react";
import { orderTrackingCircular } from "../../../../../dummyData";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import OrderCircularBar from "../components/OrderCircularBar";
import OrderTrackingTabs from "./components/OrderTrackingTabs";

export default function OrderTracking() {
  return (
    <AppLayout>
      <div className={styles.orders}>
        <div className={styles.orders_topbar}>
          <div>
            <h4>Order Tracking</h4>
            <h6>Track & manage your orders here</h6>
          </div>
        </div>

        {/* Orders circular bar  */}
        <Grid container spacing={2}>
          {orderTrackingCircular.map((content) => (
            <Grid item xs={3} key={content.id}>
              <OrderCircularBar content={content} tracking={true}/>
            </Grid>
          ))}
        </Grid>

        {/* Order Tracking data table  */}
        <OrderTrackingTabs />
      </div>
    </AppLayout>
  );
}
