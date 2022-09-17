import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/adminStyles.module.css";
import DisputeDataTable from "./components/DisputeDataTable";
import DisputeRequestModal from "./components/DisputeRequestModal";

export default function DisputeList() {
  return (
    <AppLayout>
      <div className={styles.dispute_list}>
        <div className={styles.dispute_topbar}>
          <div>
            <DisputeRequestModal />
            <h6 style={{ fontWeight: "400" }}>
              View & manage your Dispute Orders here
            </h6>
          </div>
        </div>

        {/* tab section */}
        <DisputeDataTable />
      </div>
    </AppLayout>
  );
}
