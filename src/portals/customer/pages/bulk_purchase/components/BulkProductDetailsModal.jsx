import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Fade from "@mui/material/Fade";
import {
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import ProductImageGallery from "../../products/product_details/components/ProductImageGallery";
import { customSvg } from "../../../../../utils/customSvg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "600px",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: 6,
};

export default function BulkProductDetailsModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <>
      <img
        src={product.img}
        alt="product"
        onClick={handleOpen}
        style={{ height: "100%", width: "100%" }}
      />
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
            <Grid container spacing={4} sx={{}}>
              <Grid item xs={5}>
                <ProductImageGallery />
              </Grid>
              <Grid item xs={7}>
                <div>
                  <div className={styles.right_top}>
                    <h3 className={styles.product_info_title}>
                      Foundations Matte Flip Flop
                    </h3>
                    <h4 className={styles.product_type}>New Arrival</h4>
                    <h5 className={styles.supplier_title}>
                      Supplier:{" "}
                      <span style={{ color: "#000" }}>U-SEND Fulfillment </span>{" "}
                    </h5>
                  </div>
                </div>
                <div className="flexbox" style={{ marginBottom: 20 }}>
                  <Button variant="purple_outlined" sx={{ width: "auto" }}>
                    Variant 1
                  </Button>
                  <Button
                    variant="purple"
                    sx={{
                      width: "auto",
                    }}
                  >
                    Variant 2
                  </Button>
                  <Button variant="purple_outlined" sx={{ width: "auto" }}>
                    Variant 3
                  </Button>
                  <ControlPointIcon style={{ color: "#8D40FF" }} />
                </div>
                <FormControl fullWidth>
                  <InputLabel id="sort-by" sx={{ color: "gray" }}>
                    Select
                  </InputLabel>
                  <Select
                    labelId="sort-by"
                    id="demo-select-small"
                    IconComponent={customSvg}
                    sx={{
                      margin: "10px 0",
                      width: "100%",
                      height: "38px",
                    }}
                    //   value={age}
                    label="Age"
                    //   onChange={handleChange}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
                <div className="flexbox">
                  <div>
                    <h6 style={{ marginBottom: 10 }}>Product cost</h6>
                    <h5
                      className={styles.product_current_price}
                      style={{ margin: 0 }}
                    >
                      {" "}
                      $19.97
                    </h5>
                  </div>
                  <div>
                    <h6 style={{ marginBottom: 10 }}>Shipping cost</h6>
                    <h5
                      className={styles.product_current_price}
                      style={{ margin: 0 }}
                    >
                      {" "}
                      $5.00
                    </h5>
                  </div>
                  <div>
                    <h6 style={{ marginBottom: 10 }}>Shipping to</h6>
                    <h5>Netherlands</h5>
                    <h6 style={{ margin: 0 }}>Via Yun Express</h6>
                  </div>
                </div>
                <div>
                  <Button variant="purple" sx={{ width: "auto" }}>
                    Customization
                  </Button>
                  <Button
                    variant="deepblue"
                    sx={{
                      borderRadius: "8px",
                      width: "auto",
                    }}
                  >
                    Direct Purchase
                  </Button>
                </div>
              </Grid>
            </Grid>
            <div>
              <h3 style={{ marginTop: 0, marginBottom: 10, fontWeight: 600 }}>
                Product Details
              </h3>
              <Divider />
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit
              </p>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
