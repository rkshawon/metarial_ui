import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import styles from "../../styles/customerStyles.module.css";
import NotificationDataTable from "./components/NotificationDataTable";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Pagination, PaginationItem, Stack } from "@mui/material";

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
