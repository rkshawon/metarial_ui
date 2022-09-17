import React from "react";
import styles from "../../../styles/adminStyles.module.css";
import productImg from "../../../assets/4.PNG";
import { Button } from "@mui/material";

export default function ChinaWarehouseDetails({ isShipping, title }) {
  return (
    <div>
      {isShipping && (
        <h5 className={styles.shipping_notice}>
          “Shipping to{" "}
          <span className={styles.shipping_color}>China Warehouse</span> is
          free”
        </h5>
      )}
      <div
        style={{
          display: "flex",
          width: "100%",
          alignItems: "center",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        <img
          src={productImg}
          alt="product"
          style={{ width: "80px", height: "80px", marginRight: "20px" }}
        />
        <div className="flexbox" style={{ textAlign: "left" }}>
          <div className={styles.china_headers} style={{ marginRight: "40px" }}>
            <h6 style={{ color: "#3366ff" }}>
              <b>Foundation Flip Flop</b>
            </h6>
            <h6 style={{ margin: "15px 0px" }}>
              Quantity: <b style={{ color: "black" }}>200x</b>
            </h6>

            <h6>
              Colour <b style={{ color: "black" }}>Red</b>
            </h6>
          </div>
          <div className={styles.china_headers}>
            <h6>
              Product cost <b style={{ color: "black" }}>$8.86</b>
            </h6>
            <h6>
              Shipping cost <b style={{ color: "black" }}>$0.00</b>
            </h6>
            <h6>
              Total <b style={{ color: "black" }}>$1750.86 </b>
            </h6>
          </div>
          <div>
            {title === "tracking" && (
              <div
                style={{
                  padding: "5px",
                  textAlign: "center",
                  marginLeft: "10px",
                  fontSize: "10px",
                  fontWeight: 700,
                  cursor: "pointer",
                  width: "100%",
                  borderRadius: "5px",
                  color: "#8D40FF",
                  border: "1px solid #8D40FF",
                }}
              >
                Tracking
              </div>
            )}
          </div>
        </div>
      </div>
      {!isShipping && title !== "tracking" && (
        <div
          style={{
            padding: "5px",
            textAlign: "center",
            margin: "auto",
            fontSize: "10px",
            fontWeight: 700,
            cursor: "pointer",
            width: "20%",
            borderRadius: "5px",
            color: "#8D40FF",
            border: "1px solid #8D40FF",
          }}
        >
          Edit Product
        </div>
      )}
      {/* <Button
       variant="outlined"
      //  color="primary"
       sx={{
         margin: "2em 0",
         height: "40px",
         color: "#8D40FF",
         border:"1px solid #8D40FF",
         background:"#fff" ,
         padding: "1em 1.5em",
         fontWeight: "600",
         fontSize: "15px",
        //  boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
         "&:hover": {
          border:"1px solid #8D40FF",
         },
       }}
      >

      </Button> */}
    </div>
  );
}
