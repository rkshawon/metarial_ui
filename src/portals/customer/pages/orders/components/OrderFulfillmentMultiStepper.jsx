import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WelcomeVideo from "../../dashboard/components/WelcomeVideo";
import { Checkbox, FormControlLabel, Grid } from "@mui/material";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch";
import SelectedOrders from "./SelectedOrders";
import styles from "../../../styles/customerStyles.module.css";
import InputField from "../../../../../Authentication/components/InputField";
import method1 from "../../../assets/pmethod2.png";
import method2 from "../../../assets/paypal.png";
import method3 from "../../../assets/pmethod.png";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LockIcon from "@mui/icons-material/Lock";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function OrderFulfillmentMultiStepper({ closeModal }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skippedSteps, setSkippedSteps] = React.useState([]);
  const steps = getSteps();

  function getSteps() {
    return ["Order Fulfillment", "Payment"];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className={styles.welcome_popup}>Order Fulfillment</h2>
            <h3 style={{ marginRight: 10, color: "#000" }}>
              Fulfill your selected orders
            </h3>
            {/* topbar  */}
            <div className="flexbox" style={{ marginBottom: "20px" }}>
              <FormControlLabel
                style={{ marginLeft: 20 }}
                control={<Checkbox defaultChecked />}
                label="30 items selected"
              />
              <div className="flexbox">
                {/* <Switch defaultChecked /> */}
                <ModifiedSwitch />
                <h6>
                  Wallet Balance <strong>$3566.52</strong>
                </h6>
              </div>
            </div>
            <Grid
              container
              spacing={2}
              sx={{
                height: "400px",
                overflowY: "scroll",
                marginBottom: "20px",
              }}
            >
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
              <Grid item sm={6}>
                <SelectedOrders />
              </Grid>
            </Grid>
            <div className={styles.total}>
              <h6 style={{ marginTop: 10 }}>
                Subtotal <b style={{ color: "black" }}>$192.54</b>
              </h6>
              <h6 style={{ marginTop: 10 }}>
                Shipping <b style={{ color: "black" }}>$53.21</b>
              </h6>
              <h6 style={{ marginTop: 10 }}>
                Total <b style={{ color: "black" }}>$245.75</b>
              </h6>
            </div>
            {/* <Button
              variant="lightblue"
              sx={{
                width: "auto",
                borderRadius: "5px",
              }}
            >
              Fulfill Orders
            </Button> */}
          </>
        );

      case 1:
        return (
          <div
            style={{
              padding: "0 150px",
              // maxHeight: "100%",s
              display: "flex",
              alignItems: "center",
            }}
          >
            <div style={{ width: "100%" }}>
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
                  size="small"
                  label="Card Holder Name"
                  placeholder="enter card holder name"
                  type="text"
                />
                <InputField
                  size="small"
                  label="Card Number *"
                  placeholder="0000 0000 0000 0000"
                  type="text"
                  startAdornment={<CreditCardIcon />}
                />
                <Grid container spacing={2}>
                  <Grid item sm={6}>
                    <InputField
                      size="small"
                      placeholder="MM / YY"
                      type="date"
                      startAdornment={<CalendarTodayIcon />}
                    />
                  </Grid>
                  <Grid item sm={6}>
                    <InputField
                      size="small"
                      label="CVC / CVV *"
                      placeholder="..."
                      type="text"
                      startAdornment={<LockIcon />}
                    />
                  </Grid>
                </Grid>
                <div className={styles.payment_bottom_content}>
                  <h6 style={{ marginTop: 15, textAlign: "center" }}>
                    Transaction Amount:{" "}
                    <b style={{ color: "black" }}> $245.75</b>
                  </h6>
                  <small>
                    <LockIcon style={{ fontSize: "11px" }} /> Your transaction
                    is secured with SSL encryption
                  </small>
                  <Button
                    variant="lightblue"
                    sx={{
                      width: "auto",
                    }}
                    onClick={() => closeModal()}
                  >
                    Add Balance
                  </Button>
                  {/* <a href="/">Go Back</a> */}
                </div>
              </div>
            </div>
          </div>
        );
      default:
        return "unknown step";
    }
  }
  //   const isStepOptional = (step) => {
  //     return step === 1 || step === 2;
  //   };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <>{getStepContent(activeStep)}</>
          <Button
            // className={classes.button}
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{
              margin: "2em 0",
              height: "40px",
              background: "#fff",
              color: "gray",
            }}
          >
            back
          </Button>

          {activeStep !== 1 && (
            <Button
              // className={classes.button}
              variant="lightblue"
              color="primary"
              sx={{
                width: "auto",
              }}
              onClick={handleNext}
            >
              Fulfill Orders
            </Button>
          )}
        </>
      )}
    </>
  );
}
