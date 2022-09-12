import React from "react";
import Topbar from "../../../../components/Topbar";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import StorageDataTable from "./components/StorageDataTable";

export default function ExtraStorage() {
  return (
    <AppLayout>
      <div className={styles.extra_storage}>
        <div className={styles.extra_storage_topbar}>
          <div>
            <h4>Private Storage Inventory</h4>
            <h6>View & Manage your Inventory</h6>
          </div>
        </div>

        {/* Extra storage data table  */}
        <StorageDataTable />
      </div>
    </AppLayout>
  );
}
