import React from "react";
import method1 from "../../../assets/pmethod2.png";
import method2 from "../../../assets/paypal.png";
import method3 from "../../../assets/pmethod.png";
import styles from "../../../styles/customerStyles.module.css";
import { Button, Divider, Grid } from "@mui/material";
import InputField from "../../../../../Authentication/components/InputField";
import LockIcon from "@mui/icons-material/Lock";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Lock } from "@mui/icons-material";

export default function FinalPurchasePayment() {
  return (
    <div style={{ marginBottom: 20 }}>
      <Grid container spacing={4}>
        <Grid item sm={1.5}>
          <div className={styles.checkboxes}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div className={styles.payment_method}>
                <input type="checkbox" id="myCheckbox1" />
                <label for="myCheckbox1">
                  <img src={method1} alt="method" />
                </label>
                <h6 style={{ margin: 0 }}>Card</h6>
              </div>
              <div className={styles.payment_method}>
                <input type="checkbox" id="myCheckbox2" />
                <label for="myCheckbox2">
                  <img src={method2} alt="method" />
                </label>
                <h6 style={{ margin: 0 }}>Paypal</h6>
              </div>
              <div className={styles.payment_method}>
                <input type="checkbox" id="myCheckbox3" />
                <label for="myCheckbox3">
                  <img src={method3} alt="method" />
                </label>
                <h6 style={{ margin: 0 }}>Wallet</h6>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item sm={6.5}>
          <InputField
            label="Card Holder Name"
            placeholder="enter card holder name"
            type="text"
          />
          <div style={{ margin: "20px 0" }}>
            <InputField
              label="Card Number *"
              placeholder="0000 0000 0000 0000"
              type="text"
              startAdornment={<CreditCardIcon />}
            />
          </div>

          <Grid container spacing={2}>
            <Grid item sm={6}>
              <InputField
                label="Expiry Date *"
                placeholder="MM / YY"
                type="date"
                startAdornment={<CalendarTodayIcon />}
              />
            </Grid>
            <Grid item sm={6}>
              <InputField
                label="CVC / CVV *"
                placeholder="..."
                type="text"
                startAdornment={<LockIcon />}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item sm={4}>
          {/* Payment Details  */}
          <div style={{ textAlign: "left" }}>
            <h5 className={styles.bundle_title}>Payment Details</h5>
            <Divider />
            <div className="flexbox">
              <h6>Product Price</h6>
              <h6>$1850.86</h6>
            </div>
            <div className="flexbox">
              <h6>Discount</h6>
              <h6>$0.00</h6>
            </div>
            <Divider />
            <div className="flexbox">
              <h5 className={styles.bundle_title}>Total Amount</h5>
              <h6>$1850.86</h6>
            </div>
          </div>
          <div className={styles.notice}>
            <Lock
              sx={{
                fontSize: "12px",
                marginRight: "5px",
                color: "#D9D9D9",
              }}
            />
            <small className={styles.notice_title}>
              Your transaction is secured with SSL encryption
            </small>
          </div>
          <Button variant="lightblue" sx={{ height: "38px" }}>
            Pay now
          </Button>
        </Grid>
      </Grid>
    </div>
  );
}
