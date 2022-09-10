import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Typography } from "@mui/material";
import DashboardMultiStepper from "./DashboardMultiStepper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: "20px 50px",
};

export default function WelcomeModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <Typography
        variant="h5"
        component="h5"
        sx={{ fontWeight: "700", color: "#212B36", fontSize: "24px" }}
        onClick={handleOpen}
      >
        Homepage
      </Typography>
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
          <Box sx={style} className="">
            <DashboardMultiStepper closeModal={handleClose} />
            <div style={{ position: "absolute", bottom: 10, left: 20 }}>
              <h6
                style={{ textDecoration: "underline", cursor: "pointer" }}
                onClick={handleClose}
              >
                Cancel
              </h6>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
