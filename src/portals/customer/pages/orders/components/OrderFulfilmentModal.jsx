import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import OrderFulfillmentMultiStepper from "./OrderFulfillmentMultiStepper";
import { Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "65%",
  height: "90%",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: "20px 50px",
};

export default function OrderFulfilmentModal({ button }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {!button ? (
        <Button
          variant="deepbluemini"
          onClick={handleOpen}
          sx={{
            background: "#8D40FF",
            color: "#fff",
            ":hover": {
              background: "8D40FF",
            },
            boxShadow: "none",
          }}
        >
          Fulfill Order
        </Button>
      ) : (
        <Button
          onClick={handleOpen}
          variant="purple"
          sx={{
            "&:hover": {
              background: "#7a22ff",
            },
            background: "#8D40FF",
            width: "auto",
            margin: 0,
            fontSize: "12px",
          }}
        >
          Fulfill all orders (1)
        </Button>
      )}

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
            <OrderFulfillmentMultiStepper closeModal={handleClose} />
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
