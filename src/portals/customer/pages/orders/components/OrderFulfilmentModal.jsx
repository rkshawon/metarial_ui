import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import {
  Button,
  Checkbox,
  Chip,
  FormControlLabel,
  Grid,
  Switch,
  Typography,
} from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import eye from "../../../assets/eye.png";
import SelectedOrders from "./SelectedOrders";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch";

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

export default function OrderFulfilmentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <h4 onClick={handleOpen}>Orders</h4>
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
                height: "300px",
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
            <Button
              variant="lightblue"
              sx={{
                width: "auto",
                borderRadius: "5px",
              }}
            >
              Fulfill Orders
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
