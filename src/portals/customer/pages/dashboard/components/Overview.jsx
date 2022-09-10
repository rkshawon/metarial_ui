import { Grid } from "@mui/material";
import React from "react";
import { overview_cards } from "../../../../../dummyData";
import styles from "../../../styles/customerStyles.module.css";

export default function Overview() {
  return (
    <div>
      <div className={styles.overview_heading_box}>
        <h4 className={styles.overview_title}>Overview</h4>
        <small>Today</small>
      </div>
      <Grid container spacing={4}>
        {overview_cards.map((overview) => (
          <Grid item xs={2.4}>
            <div key={overview.id} className={styles.overview_cards}>
              <span style={{ color: "#535353" }}>{overview.icon}</span>
              <h4 className={styles.overview_title}>{overview.title}</h4>
              <h4 className={styles.overview_price}>
                {overview.price || overview.count}
              </h4>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
