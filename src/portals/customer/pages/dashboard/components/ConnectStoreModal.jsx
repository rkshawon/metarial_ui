import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { Button, Grid, MenuItem } from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import InputField from "../../../../../Authentication/components/InputField";
import Chart from "../../../assets/chart.png";
import store from "../../../assets/shopify2.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  height: "600px",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  //   p: 16,
  padding: "0 30px",
};

export default function ConnectStoreModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      {/* <img src={Chart} alt="" onClick={handleOpen} /> */}
      <MenuItem
        sx={{ fontSize: "14px", color: "#9d9d9d" }}
        onClick={handleOpen}
      >
        Add stores
      </MenuItem>
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
            <div style={{ padding: "20px" }}>
              <h2 className={styles.welcome_popup}>
                Connect your Shopify Store to U - SEND
              </h2>
              <div style={{ margin: "50px 0px" }}>
                <img src={store} alt="store" />
              </div>
              <p style={{ marginBottom: "20px" }}>
                Enter your existing Shopify store URL (store.myshopify.com) to
                start synchronizing the needed data from your Shopify store.
                After proceeding you will be redirected to Shopify to connect
                your store to the U-Send Platform.
              </p>

              <div className={styles.connect_store}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "60%",
                    margin: "auto",
                  }}
                >
                  <InputField
                    fullWidth
                    //   label="Login E-mail or Phone"
                    placeholder="store-name.myshopify.com"
                    type="text"
                    size="meduim"
                  />
                  <Button
                    // className={classes.button}
                    variant="lightblue"
                    color="primary"
                    onClick={handleClose}
                    sx={{
                      width: "auto",
                      zIndex: "99",
                      height: "44px",
                      marginLeft: "-8px",
                    }}
                    // onClick={handleNext}
                  >
                    Connect Store
                  </Button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
