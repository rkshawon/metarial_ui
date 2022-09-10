import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import DisputeRequestModalContent from "./DisputeRequestModalContent";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  textAlign: "center",
  //   height: "600px",
  //   overflowY: "scroll",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  padding: "10px 50px",
};

export default function DisputeRequestModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [isClose, setClose] = React.useState(false)

  return (
    <>
      {/* <img src={product.img} alt="product"  /> */}
      <h4 onClick={handleOpen}>Dispute List</h4>
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
            <DisputeRequestModalContent closeModal={handleClose} isClose={isClose} setClose={setClose}/>
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
