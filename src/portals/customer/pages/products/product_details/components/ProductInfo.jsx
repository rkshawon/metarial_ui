import React, { useState } from "react";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import styles from "../../../../styles/customerStyles.module.css";
import ProductDetailsTabs from "./ProductDetailsTabs";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { customSvg } from "../../../../../../utils/customSvg";
import logo from "../../../../../../assets/img/usendlogo.png";
import Countryicon from "./country.PNG";

export default function ProductInfo() {
  const [count, setCount] = useState(1);
  const [color, setColor] = React.useState(0);

  const handleChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div style={{ padding: "10px" }}>
      <div>
        <h3
          className={styles.product_info_title}
          style={{ marginBottom: "20px" }}
        >
          Foundations Matte Flip Flop
        </h3>

        <Grid container spacing={2}>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Supplier:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5
              className={styles.supplier_title}
              style={{ display: "flex", alignItems: "center" }}
            >
              <span style={{ color: "#000" }}>U-SEND Fulfillment </span>

              <img
                src={logo}
                alt=""
                style={{ height: "20px", width: "20px" }}
              />
            </h5>
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Sourcing date:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5 className={styles.supplier_title}>
              <span style={{ color: "#000" }}>02-04-2022</span>
            </h5>
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Product Price:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5 className={styles.supplier_title}>
              <span style={{ color: "#000" }}>$45.00</span>
            </h5>
          </Grid>
          {/* <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Processing Time:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5 className={styles.supplier_title}>
              <span style={{ color: "#000" }}>2-4 Days</span>
            </h5>
          </Grid> */}
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Shipping:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5
              className={styles.supplier_title}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src={Countryicon}
                alt=""
                style={{ height: "15px", width: "20px", marginRight: "5px" }}
              />

              <span style={{ color: "#000" }}>$4.52 via U-Send Priority</span>
            </h5>
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Shipping time:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5 className={styles.supplier_title}>
              <span style={{ color: "#000" }}>6-10 days</span>
            </h5>
          </Grid>
          <div className="flexbox" style={{ width: "100%" }}>
            <FormControl
              style={{
                margin: "25px 20px",

                minWidth: "100px",
              }}
            >
              <InputLabel id="Select" sx={{ color: "gray" }}>
                Select
              </InputLabel>
              <Select
                labelId="Select"
                id="demo-select-small"
                sx={{
                  width: "100%",
                  color: "gray",
                  fontSize: "14px",
                }}
                size="small"
                value={color}
                label="Select"
                onChange={handleChange}
                // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                IconComponent={customSvg}
              >
                <MenuItem value={0}>1</MenuItem>
                <MenuItem value={10}>2</MenuItem>
                <MenuItem value={20}>3</MenuItem>
                <MenuItem value={30}>4</MenuItem>
                <MenuItem value={40}>5</MenuItem>
              </Select>
            </FormControl>
            <Grid item sm={12}>
              <h5
                className={styles.supplier_title}
                style={{ fontWeight: "700", color: "black" }}
              >
                Total Dropshipping cost:
              </h5>
            </Grid>
            <Grid item sm={10}>
              <h5 className={styles.supplier_title}>
                <span style={{ fontWeight: "700", color: "black" }}>
                  $15.68
                </span>
              </h5>
            </Grid>
          </div>
        </Grid>
      </div>
      {/* <h3 className={styles.product_info_title}>Product Cost</h3>
      <div style={{ display: "flex", alignItems: "center" }}>
        <h3 className={styles.product_current_price}>$19.97</h3>
      </div> */}

      {/* Product info tabs  */}
      {/* <ProductDetailsTabs /> */}

      {/* <div className={styles.calculation_box}>
        <div className={styles.quantity}>
          <h5 className={styles.quantity_title}>Quantity</h5>
          <div className={styles.count}>
            <RemoveCircleOutlineIcon
              style={{ color: "gray", cursor: "pointer" }}
              onClick={(c) => {
                if (c >= 1) {
                  setCount(Number(c - 1));
                }
              }}
            />
            {count}
            <ControlPointIcon
              style={{ color: "gray", cursor: "pointer" }}
              onClick={(c) => setCount(Number(c) + 1)}
            />
          </div>
          <h6>Available: 6</h6>
        </div>
      </div>
      <div className={styles.calculation_box}>
        <div>
          <Button
            variant="purple"
            sx={{
             width:"auto"
            }}
          >
            Add to Import List
          </Button>
          <Button
            variant="lightblue"
            sx={{
              width:"auto"
             }}
          >
            Place an order
          </Button>
        </div>
      </div> */}
    </div>
  );
}
