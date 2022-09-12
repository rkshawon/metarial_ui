import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import LiveProductsTab from "./components/LiveProductsTab";
import LiveProductsDataTable from "./components/LiveProductsDataTable";

export default function LiveProducts() {
  return (
    <AppLayout>
      <div className={styles.bulk_purchase}>
        <div className={styles.extra_storage_topbar}>
          <div>
            <h4>Your live products</h4>
            <h6>View & Manage your live products</h6>
          </div>
        </div>
        <LiveProductsDataTable />
      </div>
    </AppLayout>
  );
}
