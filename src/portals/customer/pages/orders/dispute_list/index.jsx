import { Button } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import DisputeRequestModal from "./components/DisputeRequestModal";
import DisputeTabs from "./components/DisputeTabs";

export default function DisputeList() {
  return (
    <AppLayout>
      <div className={styles.dispute_list}>
        <div className={styles.dispute_topbar}>
          <div>
            <DisputeRequestModal />
            <h6>View & manage your Dispute Orders here</h6>
          </div>
          <div>
            <Button variant="deepblue">New Sourcing Request</Button>
          </div>
        </div>

        {/* tab section */}
        <DisputeTabs />
      </div>
    </AppLayout>
  );
}
