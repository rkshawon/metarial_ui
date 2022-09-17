import { Button, Grid, Pagination, PaginationItem, Stack } from "@mui/material";
import React from "react";
import AppLayout from "../../../../layout/DashboardLayout";
import chart from "../../assets/chart.png";
import styles from "../../styles/customerStyles.module.css";
import PaymentDataTable from "./components/PaymentDataTable";
import PaymentMethodModal from "./components/PaymentMethodModal";
import EuroIcon from "@mui/icons-material/Euro";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Payments() {
  return (
    <AppLayout>
      <div className={styles.payments}>
        <div className={styles.payments_topbar}>
          <h4>Payments</h4>
          <h6>Manage your payment methods & transactions</h6>
        </div>
        {/* Payment transaction part  */}
        <Grid container spacing={1}>
          <Grid item xs={5}>
            {
              //            <div className={styles.transaction}>
              //               <div className={styles.transaction_left}>
              //                 <h5 className={styles.transaction_title}>Total Transaction</h5>
              //                 <h2 className={styles.transaction_amount}>
              //                   $8,926.<span className={styles.fraction}>56</span>
              //                 </h2>
              //                 <strong className={styles.comparison}>
              //                   +11% than last week
              //                 </strong>
              //               </div>
              //               <div className={styles.transaction_right}>
              //                 <div>
              //                   <div className="flex">
              //                     <div className={styles.blue_background}></div>
              //                     <div>
              //                       <h6 className={styles.blue}>Pending</h6>
              //                       <h5 className={styles.total_amount}>$1254.36</h5>
              //                     </div>
              //                   </div>
              //                   <div className="flex">
              //                     <div className={styles.violett_background}></div>
              //                     <div>
              //                       <h6 className={styles.violett}>In Drafts</h6>
              //                       <h5 className={styles.total_amount}>$0.00</h5>
              //                     </div>
              //                   </div>
              //                 </div>
              //               </div>
              //             </div>
            }
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div
                style={{
                  width: "47%",
                  boxShadow:
                    "0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
                  borderRadius: "10px",
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifuContent: "center",
                  padding: "20px 0 0 20px",
                }}
              >
                <div style={{ color: "#5F5F5F" }}>
                  <EuroIcon />
                </div>
                <h6
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#9D9D9D",
                  }}
                >
                  Available Balance
                </h6>
                <h5
                  style={{
                    color: "#212B36",
                    fontSize: "32px",
                    fontWeight: "600",
                  }}
                >
                  $8,926.56
                </h5>
              </div>
              <div
                style={{
                  width: "47%",
                  boxShadow:
                    "0px 2px 2px rgba(145, 158, 171, 0.2), 0px 12px 24px -4px rgba(145, 158, 171, 0.12)",
                  borderRadius: "10px",
                  height: "140px",
                  display: "flex",
                  flexDirection: "column",
                  justifuContent: "center",
                  padding: "20px 0 0 20px",
                }}
              >
                <div style={{ color: "#5F5F5F" }}>
                  <AccessTimeIcon />
                </div>
                <h6
                  style={{
                    fontSize: "15px",
                    fontWeight: "700",
                    color: "#9D9D9D",
                  }}
                >
                  Available Balance
                </h6>
                <h5
                  style={{
                    color: "#212B36",
                    fontSize: "32px",
                    fontWeight: "600",
                  }}
                >
                  $8,926.56
                </h5>
              </div>
            </div>
            <div className="flexbox">
              <PaymentMethodModal />
              <Button
                variant="lightblue"
                sx={{
                  height: "38px",
                  width: "200px",
                  borderRadius: "5px",
                }}
              >
                Upgrade Balance
              </Button>
            </div>
          </Grid>

          {/*<Grid item xs={7}>
            <img src={chart} alt="chart" />
              </Grid>*/}
        </Grid>

        {/* Payment history line  */}
        <div className="flexbox">
          <h4 className={styles.payment_title}>Payment History</h4>
          <Button
            variant="outlined"
            sx={{
              background: "#FFFFFF",
              border: "1px solid #C2C2C2",
              borderRadius: "5px",
              color: "#828282",
            }}
          >
            Export
          </Button>
        </div>

        {/* Payment data table  */}
        <PaymentDataTable />

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
