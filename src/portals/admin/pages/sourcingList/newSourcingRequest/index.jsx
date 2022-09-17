import { Box, Button, Typography } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import NewSourcingInput from "./components/NewSourcingInput";

export default function NewSourcingRequest() {
  return (
    <AppLayout>
      <Box
        sx={{ width: "98%", display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "700", fontSize: "24px", color: "#212B36" }}
          >
            New Sourcing Request (Admin)
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "##212B36" }}
          >
            View & manage your sourcing requests
          </Typography>
        </Box>
        <Button
          variant="deepblue"
          sx={{
            width: "auto",
            height: "35px",
          }}
        >
          New Sourcing Request
        </Button>
      </Box>
      <NewSourcingInput />
    </AppLayout>
  );
}
