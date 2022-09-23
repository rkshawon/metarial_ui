import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import Fade from "@mui/material/Fade";
import {
  Button,
  Chip,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
} from "@mui/material";
import ProductImageGallery from "../product_details/components/ProductImageGallery";
import styles from "../../../styles/customerStyles.module.css";
import productImg from "../../../assets/5.png";
import { customSvg } from "../../../../../utils/customSvg";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "50%",
  textAlign: "center",
  overflowY: "scroll",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  //   backgroundColor:"none",
  p: "20px 50px",
};

export default function MapProductModal({ product }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [color, setColor] = React.useState(0);
  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <>
      <Chip
        label={product.status}
        color="primary"
        variant="outlined"
        onClick={handleOpen}
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
            <h3 className={styles.source_title}>Map Product</h3>
            <h6 style={{ marginBottom: 30 }}>Complete your product mapping</h6>
            <div className={styles.paragraph}>
              <p>
                By mapping the product here, you simply pair the products
                <span style={{ color: "#8D40FF" }}> sourced by U-Send</span>, to
                the products you have in your Shopify. In this way when you
                receive orders our system automatically is aware of which
                product we have to sent out to your client.
              </p>
            </div>

            {/* Source request form  */}
            <Grid container spacing={4}>
              <Grid item sm={6}>
                <div className={styles.map_product_info}>
                  <h5 className={styles.map_product_title}>Shopify Product</h5>
                  <div className={styles.map_product_category}>
                    <img
                      src={productImg}
                      alt="product"
                      className={styles.map_product_img}
                    />
                    <div>
                      <h5 className={styles.map_product_subtitle}>
                        Foundation Flip Flop
                      </h5>
                      <h6 style={{ marginTop: 10 }}>
                        Category: <b style={{ color: "black" }}>Footwear</b>
                      </h6>
                    </div>
                  </div>
                  <div className={styles.map_product_colors}>
                    <h6 style={{ margin: "20px", textAlign: "right" }}>
                      Colour
                    </h6>
                    <div className={styles.colors}>
                      <h5>Black</h5>
                      <h5>Blue</h5>
                      <h5>Gray</h5>
                    </div>
                  </div>
                </div>
              </Grid>
              <Grid item sm={6}>
                <div className={styles.map_product_info}>
                  <h5 className={styles.map_product_title}>
                    U - SEND Sourcing
                  </h5>
                  <div className={styles.map_product_category}>
                    <img
                      src={productImg}
                      alt="product"
                      className={styles.map_product_img}
                    />
                    <div>
                      <h5 className={styles.map_product_subtitle}>
                        Foundation Flip Flop
                      </h5>
                      <h6 style={{ marginTop: 10 }}>
                        Category: <b style={{ color: "black" }}>Footwear</b>
                      </h6>
                    </div>
                  </div>
                  <div className={styles.map_product_colors}>
                    {/* <h6 style={{ margin: "20px", textAlign: "right" }}>
                      Colour
                    </h6> */}
                    <FormControl
                      fullWidth
                      sx={{ height: "38px", margin: "24px 0" }}
                    >
                      <InputLabel id="sort-by" sx={{ color: "gray" }}>
                        Sort By
                      </InputLabel>
                      <Select
                        labelId="sort-by"
                        id="demo-select-small"
                        sx={{
                          width: "100%",
                          color: "gray",
                          fontSize: "14px",
                        }}
                        size="small"
                        value={color}
                        label="Sort By"
                        onChange={handleChange}
                        // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                        IconComponent={customSvg}
                      >
                        <MenuItem value={0}>Black</MenuItem>
                        <MenuItem value={10}>White</MenuItem>
                        <MenuItem value={20}>Blue</MenuItem>
                        <MenuItem value={30}>Gray</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
              </Grid>
            </Grid>
            <Button
              variant="lightblue"
              onClick={() => setOpen(false)}
              sx={{
                width: "auto",
              }}
            >
              Map Product
            </Button>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
