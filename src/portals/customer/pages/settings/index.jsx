import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import SettingTabs from "./components/SettingTabs";

export default function Settings() {
  return (
    <AppLayout>
      <div className={styles.settings}>
        <div className={styles.settings_topbar}>
          <div>
            <h4>Settings</h4>
            <h6>Manage & edit your all settings</h6>
          </div>
        </div>

        {/* Setting tab  */}
        <SettingTabs />
      </div>
    </AppLayout>
  );
}
