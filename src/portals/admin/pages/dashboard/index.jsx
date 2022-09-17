import { Box, Breadcrumbs, Link, Typography } from "@mui/material";
import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import Welcome from "./components/Welcome";
import OverView from "./components/Overview";
import OrderAttention from "./components/OrderAttention";

export default function Dashboard() {
  return (
    <AppLayout>
      <Box sx={{ padding: "20px" }}>
        <Box>
          <Typography
            variant="h5"
            component="h5"
            sx={{ fontWeight: "700", color: "#212B36", fontSize: "24px" }}
          >
            Homepage
          </Typography>
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "#212B36", fontSize: "14px" }}
          >
            <Link underline="none" color="text.primary" aria-current="page">
              Admin Dashboard
            </Link>
          </Breadcrumbs>
        </Box>
        <Welcome />
        <OverView />
        <OrderAttention />
      </Box>
    </AppLayout>
  );
}
