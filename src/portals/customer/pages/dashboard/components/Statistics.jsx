import { Grid } from "@mui/material";
import React from "react";
import statistic_chart from "../../../assets/statistics.PNG"
import sales from "../../../assets/another.PNG"
import styles from "../../../styles/customerStyles.module.css";

export default function Statistics() {
  return (
    <div>
      <div className={styles.statistics_heading_box}>
        <h4 className={styles.statistics_title}>Statistics</h4>
        <small>Today</small>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <img src={statistic_chart} alt=""/>
        </Grid>
        <Grid item xs={4}>
        <img src={sales} alt=""/>
        </Grid>
      </Grid>
    </div>
  );
}
