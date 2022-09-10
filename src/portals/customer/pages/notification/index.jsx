import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import NotificationDataTable from "./components/NotificationDataTable";

export default function Notification() {
  return (
    <AppLayout>
      <div className={styles.notification}>
        <div className={styles.notification_topbar}>
          <h4>Notifications</h4>
          <h6>View & Manage your Notification</h6>
        </div>
        {/* Notification data table  */}
        <NotificationDataTable />
      </div>
    </AppLayout>
  );
}
