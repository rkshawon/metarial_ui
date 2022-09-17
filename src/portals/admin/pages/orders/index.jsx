import { Box, Button, Grid, Typography } from "@mui/material";
import React from "react";
import { circularContent } from "../../../../dummyData";
import AppLayout from "../../../../layout/DashboardLayout";
import OrderCircleChart from "./components/OrderCircleChart";
import OrderTableTabs from "./components/OrderTableTabs";

export default function Orders() {
  return (
    <AppLayout>
      <Box
        sx={{ width: "98%", display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "700", fontSize: "24px", color: "#212B36" }}
          >
            Orders
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "##212B36" }}
          >
            Manage your orders here
          </Typography>
        </Box>
        <Button
          variant="deepblue"
          sx={{
            height: "35px",
            width: "auto",
          }}
        >
          New Sourcing Request
        </Button>
      </Box>
      <Grid container spacing={2}>
        {circularContent.map((content) => (
          <Grid item xs={3} key={content.id}>
            <OrderCircleChart content={content} />
          </Grid>
        ))}
      </Grid>
      <OrderTableTabs />
    </AppLayout>
  );
}
