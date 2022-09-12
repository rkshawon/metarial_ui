import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button } from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import ChinaWarehouseDetails from "./ChinaWarehouseDetails";
import AddressInfo from "./AddressInfo";
import ProductMultiStepper from "./ProductMultiStepper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  textAlign: "center",
  //   height: "600px",
  //   overflowY: "scroll",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: 4,
};

export default function ProductPurchaseModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      {/* <img src={product.img} alt="product"  /> */}
      <h5 onClick={handleOpen}>{product.title}</h5>
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
            <ProductMultiStepper />
            <div style={{position:'absolute', bottom:10, left:20}}>
                <h6 style={{textDecoration:"underline", cursor:"pointer"}} onClick={handleClose}>Cancel</h6>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
