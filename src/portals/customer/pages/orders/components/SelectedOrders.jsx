import { Checkbox, Divider } from "@mui/material";
import React from "react";
import productImg from "../../../assets/5.png";
import styles from "../../../styles/customerStyles.module.css";

export default function SelectedOrders() {
  return (
    <>
      <div className={styles.order_fulfilment_box}>
        <Checkbox defaultChecked />
        <img
          src={productImg}
          alt="product"
          style={{ width: "111px", height: "109px", marginRight: 10 }}
        />
        <div style={{width:"100%"}}>
          <div className={styles.selected_right_contents}>
            <h5 style={{color:"#3366FF"}}>Foundation Flip Flop</h5>
            <h5 style={{color:"#3366FF"}}>$6.49</h5>
          </div>
          <Divider />
          <div className={styles.selected_right_contents}>
            <h5>30-07-22</h5>
            <h5>Rasmus Christensen</h5>
          </div>
          <div className={styles.selected_right_contents}>
            <h5>#001703</h5>
            <h5>INVSD750073X</h5>
          </div>
          <Divider />
          <div className={styles.pricing_tag}>
          Yun Express    $8.49
          </div>
        </div>
      </div>
    </>
  );
}
