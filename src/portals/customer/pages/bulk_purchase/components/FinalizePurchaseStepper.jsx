import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Check from "@mui/icons-material/Check";
import StepConnector, {
  stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Button, Grid, TextField, Typography } from "@mui/material";
import ChinaWarehouseDetails from "./ChinaWarehouseDetails";
import styles from "../../../styles/customerStyles.module.css";
import FinalPurchasePayment from "./FinalPurchasePayment";

function getSteps() {
  return [
    <span style={{ color: "#8D40FF" }}>Product</span>,
    <span style={{ color: "#8D40FF" }}>Shipping</span>,
    <span style={{ color: "#8D40FF" }}>Payment</span>,
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <>
          <ChinaWarehouseDetails />
        </>
      );

    case 1:
      return (
        <div style={{ marginTop: 20 }}>
          {/* Shipping address  */}
          <div style={{ width: "70%", margin: "auto" }}>
            <div style={{ display: "flex", marginBottom: "20px" }}>
              <Grid container sx={{ textAlign: "left", alignItems: "center" }}>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>Name</h6>
                </Grid>
                <Grid item sm={8}>
                  <strong>Ken miles</strong>
                </Grid>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>Country</h6>
                </Grid>
                <Grid item sm={8}>
                  <strong>Netherlands</strong>
                </Grid>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>Street</h6>
                </Grid>
                <Grid item sm={8}>
                  <strong> De Boelelaan</strong>
                </Grid>
              </Grid>
              <Grid container sx={{ textAlign: "left", alignItems: "center" }}>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>Company </h6>
                </Grid>
                <Grid item sm={8}>
                  <strong>Perkins Apperals</strong>
                </Grid>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>City</h6>
                </Grid>
                <Grid item sm={8}>
                  <strong>Amsterdam</strong>
                </Grid>
                <Grid item sm={4}>
                  <h6 className={styles.address_title}>Postal Code</h6>
                </Grid>
                <Grid item sm={8}>
                  <strong> De Boelelaan</strong>
                </Grid>
              </Grid>
            </div>

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
              Edit Address
            </div>
          </div>
        </div>
      );
    case 2:
      return (
        <>
          <FinalPurchasePayment />
        </>
      );
    default:
      return "unknown step";
  }
}
const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: "#784af4",
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    borderColor:
      theme.palette.mode === "dark" ? theme.palette.grey[800] : "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
}));

const QontoStepIconRoot = styled("div")(({ theme, ownerState }) => ({
  color: theme.palette.mode === "dark" ? theme.palette.grey[700] : "#eaeaf0",
  display: "flex",
  height: 22,
  alignItems: "center",
  ...(ownerState.active && {
    color: "#784af4",
  }),
  "& .QontoStepIcon-completedIcon": {
    color: "#784af4",
    zIndex: 1,
    fontSize: 18,
  },
  "& .QontoStepIcon-circle": {
    width: 8,
    height: 8,
    borderRadius: "50%",
    backgroundColor: "currentColor",
  },
}));

function QontoStepIcon(props) {
  const { active, completed, className } = props;

  return (
    <QontoStepIconRoot ownerState={{ active }} className={className}>
      {completed ? (
        <Check className="QontoStepIcon-completedIcon" />
      ) : (
        <div className="QontoStepIcon-circle" />
      )}
    </QontoStepIconRoot>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   * @default false
   */
  active: PropTypes.bool,
  className: PropTypes.string,
  /**
   * Mark the step as completed. Is passed to child components.
   * @default false
   */
  completed: PropTypes.bool,
};

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function FinalizePurchaseStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skippedSteps, setSkippedSteps] = React.useState([]);
  const steps = getSteps();

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSkip = () => {
    if (!isStepSkipped(activeStep)) {
      setSkippedSteps([...skippedSteps, activeStep]);
    }
    setActiveStep(activeStep + 1);
  };
  return (
    <Stack sx={{}} spacing={4}>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        connector={<QontoConnector />}
      >
        {steps.map((label, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={label}>
              <StepLabel StepIconComponent={QontoStepIcon} {...labelProps}>
                {label}
              </StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
        <Typography variant="h3" align="center">
          Thank You
        </Typography>
      ) : (
        <>
          <>{getStepContent(activeStep)}</>

          {activeStep !== 2 && (
            <div style={{ width: "20%", margin: "auto" }}>
              <Button
                // className={classes.button}
                variant="lightblue"
                color="primary"
                sx={{
                  width: "170px",
                  height: "38px",
                }}
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Confirm"}
              </Button>
            </div>
          )}
        </>
      )}
    </Stack>
  );
}
