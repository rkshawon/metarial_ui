import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ShippingTo from "./ShippingTo";
import FinalizePurchase from "./FinalizePurchase";

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function ProductMultiStepper({ closeModal }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skippedSteps, setSkippedSteps] = React.useState([]);
  const steps = getSteps();

  function getSteps() {
    return [
      "Welcome Video",
      "Complete Profile",
      "Select Ecommerce Platform",
      "Connect Store",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <ShippingTo />
          </>
        );

      case 1:
        return (
          <>
            <FinalizePurchase />
          </>
        );
      // case 2:
      //   return (
      //     <>
      //       3
      //     </>
      //   );
      // case 3:
      //   return (
      //     <>
      //       4
      //     </>
      //   );
      default:
        return "unknown step";
    }
  }
  // const isStepOptional = (step) => {
  //   return step === 1 || step === 2;
  // };

  // const isStepSkipped = (step) => {
  //   return skippedSteps.includes(step);
  // };

  const handleNext = () => {
    setActiveStep(activeStep + 1);
    setSkippedSteps(skippedSteps.filter((skipItem) => skipItem !== activeStep));
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  // const handleSkip = () => {
  //   if (!isStepSkipped(activeStep)) {
  //     setSkippedSteps([...skippedSteps, activeStep]);
  //   }
  //   setActiveStep(activeStep + 1);
  // };

  return (
    <>
      {/* <Stepper alternativeLabel activeStep={activeStep}>
        {steps.map((step, index) => {
          const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
                optional
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}>
              <StepLabel {...labelProps}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper> */}

      <>
        <>{getStepContent(activeStep)}</>
        {/* {activeStep !== 1 && <Button
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
          </Button>} */}
        {/* {isStepOptional(activeStep) && (
            <Button
            //   className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleSkip}
            >
              skip
            </Button>
          )} */}
        {activeStep !== 1 && (
          <Button
            // className={classes.button}
            variant="lightblue"
            color="primary"
            sx={{
              width: "170px",
            }}
            onClick={handleNext}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
          </Button>
        )}
      </>
    </>
  );
}
