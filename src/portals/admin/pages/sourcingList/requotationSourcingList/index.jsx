import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/adminStyles.module.css";
import RequotationDataTable from "./components/RequotationDataTable";

export default function RequotationSourcingList() {
  return (
    <AppLayout>
      <div className={styles.dispute_list}>
        <div className={styles.dispute_topbar}>
          <div>
            <h4 style={{ color: "#212B36" }}>Requoted Sourcing List</h4>
            <h6 style={{ fontWeight: "400" }}>
              View & manage your requoted sourcing requests
            </h6>
          </div>
        </div>

        {/* tab section */}
        <RequotationDataTable />
      </div>
    </AppLayout>
  );
}
