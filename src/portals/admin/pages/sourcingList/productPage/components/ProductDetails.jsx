import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Fade from "@mui/material/Fade";
import { Button, Chip, Divider, Grid, MenuItem, Select } from "@mui/material";
import ProductImageGallery from "./ProductImageGallery";
import styles from "../../../../styles/adminStyles.module.css";

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

export default function ProductDetails({ product }) {
  const [open, setOpen] = React.useState(true);
  //const handleOpen = () => setOpen(true);
  //const handleClose = () => setOpen(false);
  return (
    <>
      {/*<img src={product.img} alt="product" onClick={handleOpen} />*/}

      <Grid container spacing={4} sx={{ width: "98%" }}>
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
            <Button
              variant="outlined"
              sx={{ color: "#8D40FF", border: "1px solid #8D40FF" }}
            >
              Variant 1
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "#fff",
                background: "#8D40FF",
                border: "1px solid #8D40FF",
                boxShadow: "0px 8px 16px rgba(141, 64, 255, 0.24)",
                "&:hover": {
                  border: "1px solid #8D40FF",
                },
              }}
            >
              Variant 2
            </Button>
            <Button
              variant="outlined"
              sx={{ color: "#8D40FF", border: "1px solid #8D40FF" }}
            >
              Variant 3
            </Button>
            <ControlPointIcon style={{ color: "#8D40FF" }} />
          </div>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
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
            <Button
              variant="contained"
              sx={{
                margin: "2em 1rem 2em 0",
                background: "#8D40FF",
                height: "40px",
                padding: "1em 1.5em",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow: "0px 8px 16px rgba(141, 64, 255, 0.24)",
                "&:hover": {
                  background: "0px 8px 16px rgba(141, 64, 255, 0.24)",
                },
              }}
            >
              Map Product
            </Button>
            <Button
              variant="contained"
              sx={{
                margin: "2em 0",
                height: "40px",
                padding: "1em 1.5em",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                "&:hover": {
                  boxShadow: "0px 8px 16px rgba(24, 144, 255, 0.24)",
                },
              }}
            >
              Import to Store
            </Button>
          </div>
        </Grid>
      </Grid>
      <div>
        <h3 style={{ marginTop: "26px", marginBottom: 10, fontWeight: 600 }}>
          Product Details
        </h3>
        <Divider />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit
        </p>
      </div>
    </>
  );
}
