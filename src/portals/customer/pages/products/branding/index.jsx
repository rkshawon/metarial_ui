import { Grid } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import BrandingTabs from "./components/BrandingTabs";

export default function Branding() {
  return (
    <AppLayout>
      <div className={styles.products}>
        <div className={styles.products_topbar}>
          <div>
            <h4>Branding</h4>
            <h6>Create & manage offers/ branding to grow your business</h6>
          </div>
        </div>

        {/* branding tabs */}
        <BrandingTabs />
      </div>
    </AppLayout>
  );
}
