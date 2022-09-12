import { Grid } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import BundleTabs from "./components/BundleTabs";

export default function ProductBundle() {
  return (
    <AppLayout>
      <div className={styles.products}>
        <div className={styles.products_topbar}>
          <div>
            <h4>Product Bundle</h4>
            <h6>Add listing of Product Bundle</h6>
          </div>
        </div>

        {/* Bundle tabs  */}
        <BundleTabs />
      </div>
    </AppLayout>
  );
}
