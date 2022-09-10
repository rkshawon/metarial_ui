import * as React from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import WelcomeVideo from "../../dashboard/components/WelcomeVideo";
import CompleteProfile from "../../dashboard/components/CompleteProfile";
import SelectEcommercePlatform from "../../dashboard/components/SelectEcommercePlatform";
import ConnectStore from "../../dashboard/components/ConnectStore";

// const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function DashboardMultiStepper({ closeModal }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skippedSteps, setSkippedSteps] = React.useState([]);
  const steps = getSteps();

  function getSteps() {
    return [
      "Complete Profile",
      "Welcome Video",
      "Select Ecommerce Platform",
      "Connect Store",
    ];
  }

  function getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <>
            <CompleteProfile />
          </>
        );

      case 1:
        return (
          <>
            <WelcomeVideo />
          </>
        );
      case 2:
        return (
          <>
            <SelectEcommercePlatform />
          </>
        );
      case 3:
        return (
          <>
            <ConnectStore closeModal={closeModal} />
          </>
        );
      default:
        return "unknown step";
    }
  }
  //   const isStepOptional = (step) => {
  //     return step === 1 || step === 2;
  //   };

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
          {activeStep !== steps.length - 1 && (
            <Button
              // className={classes.button}
              variant="lightblue"
              color="primary"
              sx={{
                width: "auto",
              }}
              onClick={handleNext}
            >
              {activeStep === steps.length - 1 ? "Finish" : "Next Step"}
            </Button>
          )}
        </>
      )}
    </>
  );
}
