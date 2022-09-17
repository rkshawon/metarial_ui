import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import ImportListDataTable from "./components/ImportListDataTable";
import ImportProductList from "./components/ImportProductList";
import ImportProductModal from "./components/ImportProductModal";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button, Pagination, PaginationItem, Stack } from "@mui/material";
import { Add } from "@mui/icons-material";

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
            {/* <ImportProductModal /> */}
            <Button
              sx={{ borderRadius: "5px" }}
              variant="lightblue"
              startIcon={<Add sx={{ color: "#fff" }} />}
              // onClick={handleOpen}
            >
              Push to shopify
            </Button>
          </div>
        </div>
        <ImportProductList />
        {/* Import list data table  */}
        {/* <ImportListDataTable /> */}
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
