import { Grid } from "@mui/material";
import React from "react";
import { circularContent } from "../../../../dummyData";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import OrderCircularBar from "./components/OrderCircularBar";
import OrderFulfilmentModal from "./components/OrderFulfilmentModal";
import OrderTabs from "./components/OrderTabs";

export default function Orders() {
  return (
    <AppLayout>
      <div className={styles.orders}>
        <div className={styles.orders_topbar}>
          <div>
            <h4>Orders</h4>
            <h6>Manage your orders here</h6>
          </div>
        </div>

        {/* Orders circular bar  */}
        <Grid container spacing={2}>
          {circularContent.map((content) => (
            <Grid item xs={3} key={content.id}>
              <OrderCircularBar content={content} />
            </Grid>
          ))}
        </Grid>

        {/* Order data table  */}
        <OrderTabs />
      </div>
    </AppLayout>
  );
}
