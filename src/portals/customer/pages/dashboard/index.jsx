import { Box, Typography, Breadcrumbs, Link } from "@mui/material";
import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import Overview from "./components/Overview";
import Statistics from "./components/Statistics";
// import AppLayout from "../../../../layout/DashboardLayout";
import Welcome from "./components/Welcome";
import WelcomeModal from "./components/WelcomeModal";

export default function Dashboard() {

  return (
    <AppLayout>
      <Box sx={{ padding: "20px" }}>
        <Box>
         <WelcomeModal />
          <Breadcrumbs
            aria-label="breadcrumb"
            sx={{ color: "#212B36", fontSize: "14px" }}
          >
            <Link underline="none" color="text.primary" aria-current="page">
              Dashboard
            </Link>
          </Breadcrumbs>
        </Box>
        <Welcome />
        <Overview />
        <Statistics />
      </Box>
    </AppLayout>
  );
}
