import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import ImportListDataTable from "./components/ImportListDataTable";
import ImportProductList from "./components/ImportProductList";
import ImportProductModal from "./components/ImportProductModal";

export default function ImportList() {
  return (
    <AppLayout>
      <div className={styles.bulk_purchase}>
        <div className={styles.bulk_topbar}>
          <div>
            <h4>Product Import List</h4>
            <h6>See all of the imported products</h6>
          </div>
          <div>
            <ImportProductModal />
          </div>
        </div>
        <ImportProductList />
        {/* Import list data table  */}
        {/* <ImportListDataTable /> */}
      </div>
    </AppLayout>
  );
}
