import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import HomeImage from "../../../assets/homeimage.png";

export default function OrdersHome() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        backgroundColor: "rgb(243, 234, 254)",
        borderRadius: "16px",
        padding: "10px 40px",
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
          You can view and manage all of your orders and track them. Lets bring
          up your business to next level
        </p>
        <Link to="/customer/orders">
          <Button
            variant="deepblue"
            style={{
              width: "auto",
              height: "35px",
            }}
          >
            View Orders
          </Button>
        </Link>
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
  );
}
