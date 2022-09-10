import { Grid } from "@mui/material";
import React from "react";
import FulfillOrderChart from "./FulfillOrderChart";
import sales from "../../../assets/another.PNG";
import styles from "../../../styles/customerStyles.module.css";
import OrderOverView from "./OrderOverView";
import OrdersFulfillProgressbar from "./OrdersFulfillProgressbar";

export default function Statistics() {
  return (
    <div>
      <div className={styles.statistics_heading_box}>
        <h4 className={styles.statistics_title}>Statistics</h4>
        <small>Today</small>
      </div>
      <Grid container spacing={4}>
        <Grid item xs={8}>
          <FulfillOrderChart />
        </Grid>
        <Grid item xs={4}>
          <OrderOverView />
          <OrdersFulfillProgressbar />
        </Grid>
      </Grid>
    </div>
  );
}
