import React from "react";
import Topbar from "../../../../components/Topbar";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import StorageDataTable from "./components/StorageDataTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination, PaginationItem, Stack } from "@mui/material";

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
        <div
          style={{
            bottom: 10,
            left: "45%",
            padding: "5px 0",
            borderRadius: "8px",
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
          }}
        >
          <Stack
            spacing={2}
            sx={{
              backgroundColor: "#fff",
              boxShadow:
                "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
              padding: "8px 15px",
              borderRadius: "5px",
            }}
          >
            <Pagination
              count={10}
              sx={{
                "&.MuiPaginationItem-root": {
                  color: "blue",
                },
              }}
              renderItem={(item) => (
                <PaginationItem
                  components={{
                    previous: ArrowBackIcon,
                    next: ArrowForwardIcon,
                  }}
                  {...item}
                />
              )}
            />
          </Stack>
        </div>
      </div>
    </AppLayout>
  );
}
