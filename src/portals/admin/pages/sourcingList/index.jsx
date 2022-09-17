import AppLayout from "../../../../layout/DashboardLayout";
import SourcingTable from "./components/SourcingTable";
import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";

export default function SourcingList() {
  return (
    <AppLayout>
      <Box
        sx={{ width: "98%", display: "flex", justifyContent: "space-between" }}
      >
        <Box>
          <Typography
            sx={{ fontWeight: "700", fontSize: "24px", color: "#212B36" }}
          >
            Sourcing List
          </Typography>
          <Typography
            sx={{ fontWeight: "400", fontSize: "14px", color: "##212B36" }}
          >
            View & manage your sourcing request
          </Typography>
        </Box>
        <Button
          variant="deepblue"
          sx={{
            width: "auto",
            height: "35px",
            borderRadius: "5px",
          }}
        >
          New Sourcing Request
        </Button>
      </Box>
      <SourcingTable />
    </AppLayout>
  );
}
