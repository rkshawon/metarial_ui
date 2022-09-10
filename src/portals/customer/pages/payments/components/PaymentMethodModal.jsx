import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import LockIcon from "@mui/icons-material/Lock";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Grid } from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import method1 from "../../../assets/pmethod2.png";
import method2 from "../../../assets/paypal.png";
import method3 from "../../../assets/pmethod.png";
import InputField from "../../../../../Authentication/components/InputField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  height: "600px",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  //   p: 16,
  padding: "0 150px",
};

export default function PaymentMethodModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Button
        variant="purple"
        sx={{
          borderRadius: "5px",
          width: "200px",
          height: "38px",
        }}
        onClick={handleOpen}
      >
        Add New Card
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style} className="hide_scrollbar">
            <h2 className={styles.welcome_popup}>Payment Methods</h2>
            <h5
              className={styles.paragraph}
              style={{ marginTop: "10px", marginBottom: "20px" }}
            >
              Complete your payment
            </h5>

            <div className={styles.checkboxes}>
              <div className="flexbox">
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
            <div className={styles.payment_method_form}>
              <h6 style={{ marginBottom: 20 }}>
                Please fill up the following details
              </h6>
              <InputField
                label="Card Holder Name"
                placeholder="enter card holder name"
                type="text"
              />
              <InputField
                label="Card Number *"
                placeholder="0000 0000 0000 0000"
                type="text"
                startAdornment={<CreditCardIcon />}
              />
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
              <div className={styles.payment_bottom_content}>
                <h6 style={{ marginTop: 15, textAlign: "center" }}>
                  Transaction Amount: <b style={{ color: "black" }}> $245.75</b>
                </h6>
                <small>
                  <LockIcon style={{ fontSize: "11px" }} /> Your transaction is
                  secured with SSL encryption
                </small>
                <Button
                  variant="lightblue"
                  sx={{
                    width: "auto",
                  }}
                >
                  Add Balance
                </Button>
                {/* <a href="/">Go Back</a> */}
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
