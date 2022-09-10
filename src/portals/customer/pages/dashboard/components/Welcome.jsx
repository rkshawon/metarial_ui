import { Button, Typography } from "@mui/material";
import HomeImage from "../../../assets/homeimage.png";
import { Icon } from "@iconify/react";
import IncomeChart from "./IncomeChart";
import Chart from "../../../assets/chart.png";
import { Link } from "react-router-dom";
import BalanceChart from "./BalanceChart";
import BalanceModal from "./BalanceModal";

export default function Welcome() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "2em",
        justifyContent: "space-between",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "60%",
          backgroundColor: "rgb(243, 234, 254)",
          borderRadius: "16px",
          padding: "10px 40px",
          marginBottom: "2em",
          maxHeight: "280px",
        }}
      >
        <div>
          <h2
            style={{
              color: "#212B36",
              fontWeight: "700",
              fontSize: "24px",
            }}
          >
            Welcome back!
          </h2>
          <h2
            style={{
              color: "#212B36",
              fontWeight: "700",
              fontSize: "24px",
              lineHeight: "5px",
            }}
          >
            Petrrick Leach
          </h2>
          <h2
            style={{
              fontWeight: "400",
              color: "#212B36",
              fontSize: "16px",
              lineHeight: "15px",
            }}
          >
            Lets get back to work.
          </h2>
          <p
            style={{
              fontWeight: "400",
              color: "#212B36",
              fontSize: "12px",
              maxWidth: "422px",
              lineHeight: 1,
            }}
          >
            You can view and manage all of your orders and track them. Lets
            bring up your business to next level
          </p>

          <Button
            variant="deepblue"
            style={{
              width: "auto",
              height: "35px",
            }}
          >
            View Orders
          </Button>
        </div>
        <div
          style={{
            width: "245px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <img src={HomeImage} alt="" style={{ height: "200px" }} />
        </div>
      </div>
      <div
        style={{
          width: "35%",
          backgroundColor: "rgb(243, 234, 254)",
          borderRadius: "16px",
          marginBottom: "2em",
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
                Income
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
                icon="bi:arrow-down-left-circle-fill"
                color="#8D40FF"
                width="48"
                height="48"
              />
            </div>
          </div>
        </div>

        <IncomeChart />
      </div>
    </div>
  );
}
