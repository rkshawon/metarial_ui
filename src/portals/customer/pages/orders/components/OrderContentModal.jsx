import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  Button,
  Checkbox,
  Chip,
  FormControl,
  FormControlLabel,
  Grid,
  MenuItem,
  Switch,
  Typography,
} from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "70%",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: "20px 50px",
};

export default function OrderContentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <span onClick={handleOpen}>
        <MenuItem value={10}>
          <span style={{ fontSize: "12px" }}>Delivered</span>
        </MenuItem>
        <MenuItem value={20}>
          <span style={{ fontSize: "12px" }}>Unshipped</span>
        </MenuItem>
      </span>
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
          <Box sx={style} className=""></Box>
        </Fade>
      </Modal>
    </>
  );
}
