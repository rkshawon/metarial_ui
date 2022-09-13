import { Button, Grid, Typography } from "@mui/material";
import HomeImage from "../../../assets/homeimage.png";
import { Icon } from "@iconify/react";
import IncomeChart from "./IncomeChart";
import Chart from "../../../assets/chart.png";
import { Link } from "react-router-dom";
import BalanceChart from "./BalanceChart";
import BalanceModal from "./BalanceModal";
import OrdersHome from "./OrdersHome";

export default function Welcome() {
  return (
    <div
    // style={{
    //   display: "flex",
    //   width: "100%",
    //   marginTop: "2em",
    //   justifyContent: "space-between",
    // }}
    >
      <Grid container spacing={4}>
        <Grid item sm={8}>
          <OrdersHome />
        </Grid>
        <Grid item sm={4}>
          <div
            style={{
              backgroundColor: "rgb(243, 234, 254)",
              borderRadius: "16px",
            }}
          >
            <div style={{ padding: "24px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  height: "50%",
                }}
              >
                <div>
                  <div
                    style={{
                      color: "#8D40FF",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Balance
                  </div>
                  <p
                    style={{
                      color: "#8D40FF",
                      fontSize: "32px",
                      fontWeight: "600",
                      margin: "15px 0",
                    }}
                  >
                    $18,765
                  </p>
                  <div
                    style={{
                      color: "#8D40FF",
                      fontSize: "14px",
                      fontWeight: "200",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <Icon
                      icon="fa6-solid:arrow-trend-up"
                      color="#8d40ff"
                      width="20"
                      height="20"
                    />
                    <small
                      style={{
                        color: "#8D40FF",
                        fontSize: "14px",
                        fontWeight: "600",
                        margin: "0 5px",
                      }}
                    >
                      +2.6%
                    </small>
                    than last month
                  </div>
                </div>
                <div>
                  <Icon
                    icon="ant-design:euro-circle-filled"
                    color="#8D40FF"
                    width="48"
                    height="48"
                  />
                </div>
              </div>
            </div>

            <IncomeChart />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
