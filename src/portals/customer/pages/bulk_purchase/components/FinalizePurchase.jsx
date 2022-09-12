import React from "react";
import styles from "../.././../styles/customerStyles.module.css";
import FinalizePurchaseStepper from "./FinalizePurchaseStepper";

export default function FinalizePurchase() {
  return (
    <div>
      <h2 className={styles.welcome_popup}>Finalize Purchase</h2>
      <h3 style={{ marginRight: 10 }}>Complete your purchasing</h3>
      <FinalizePurchaseStepper />
    </div>
  );
}
