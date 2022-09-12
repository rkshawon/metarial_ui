import React, { useState } from "react";
import styles from "../../../../../styles/customerStyles.module.css";
import { Grid, TextField } from "@mui/material";

import MenuItem from "@mui/material/MenuItem";
import ModifiedSelect from "./ModifiedSelect";

export default function EditProductInfo() {
  const [value, setValue] = useState("Foundation Matte Flip Flop");
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <div className={styles.right_top}>
        <h3 className={styles.product_info_title}>
          <span style={{ color: "#707070" }}>Orginal Title:</span> Foundations
          Matte Flip Flop
        </h3>
        <h4 className={styles.product_type}>New Arrival</h4>
        <Grid container spacing={2}>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Change title:</h5>
          </Grid>
          <Grid item sm={8}>
            {/* <TextField
              sx={{ margin: 0 }}
              size="small"
              value="U-SEND Fulfillment"
              variant="outlined"
            /> */}
            <TextField
              sx={{ margin: 0 }}
              size="small"
              variant="outlined"
              defaultValue={value}
            />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Price:</h5>
          </Grid>
          <Grid item sm={8}>
            <h5 className={styles.supplier_title}>
              <TextField
                sx={{ margin: 0 }}
                size="small"
                value="$45.00"
                variant="outlined"
              />
            </h5>
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Processing Time:</h5>
          </Grid>
          <Grid item sm={8}>
            <TextField
              sx={{ margin: 0 }}
              size="small"
              value="2-4 days"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Shipping:</h5>
          </Grid>
          <Grid item sm={8}>
            <TextField
              sx={{ margin: 0 }}
              size="small"
              value="USD4.52 to United States"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Total Dropshipping cost:</h5>
          </Grid>
          <Grid item sm={8}>
            <TextField
              sx={{ margin: 0 }}
              size="small"
              value="$5.68"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Collections:</h5>
          </Grid>
          <Grid item sm={8}>
            <ModifiedSelect />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Types:</h5>
          </Grid>
          <Grid item sm={8}>
            <ModifiedSelect />
          </Grid>
          <Grid item sm={4}>
            <h5 className={styles.supplier_title}>Tags: </h5>
          </Grid>
          <Grid item sm={8}>
            <ModifiedSelect />
          </Grid>
        </Grid>
      </div>
      <div style={{ display: "flex" }}>
        <h3 className={styles.product_info_title}>Shopify Price: $19.57</h3>
        {/* <TextField sx={{ margin: 0 }} size="small" value="$19.97" /> */}
      </div>
      <div style={{ display: "flex" }}>
        <h3 className={styles.product_info_title}>Product Cost: $9.37</h3>
        {/* <TextField sx={{ margin: 0 }} size="small" value="$19.97" /> */}
      </div>

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
