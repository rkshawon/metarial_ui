import { FormControl, Grid, MenuItem, Select, TextField } from "@mui/material";
import React, { useState } from "react";
import { customSvg } from "../../../../../../utils/customSvg";

export default function ProductTabMenu({ data }) {
  const [value, setValue] = useState("Foundation Matte Flip Flop");
  const [color, setColor] = React.useState(0);

  const handleChange = (event) => {
    setColor(event.target.value);
  };
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item sm={3}>
          <img
            src={data.product.img}
            alt="import product"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item sm={9}>
          <div className="flexbox">
            <div>
              <h4 style={{ fontSize: "18px" }}>{data.product.title}</h4>
              <h6 style={{ marginTop: "10px" }}>
                by:{" "}
                <b style={{ color: "#3366FF" }}>Bashundara Official Store</b>
              </h6>
            </div>
          </div>
          <Grid
            container
            spacing={2}
            sx={{ width: "70%", flexDirection: "column" }}
          >
            <Grid item sm={6}>
              <div>
                <h5>Title</h5>
                <TextField
                  sx={{
                    margin: 0,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      color: "gray",
                      fontSize: "14px",
                    },
                  }}
                  size="small"
                  variant="outlined"
                  defaultValue={value}
                />
              </div>
            </Grid>
            {/* <Grid item sm={6}>
              <div>
                <h5>Price</h5>
                <TextField
                  sx={{
                    margin: 0,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      color: "gray",
                      fontSize: "14px",
                    },
                  }}
                  size="small"
                  variant="outlined"
                  defaultValue={data.price}
                />
              </div>
            </Grid> */}
            <Grid item sm={6}>
              <div>
                {/* <h5>Type</h5>
                <TextField
                  sx={{
                    margin: 0,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      color: "gray",
                      fontSize: "14px",
                    },
                  }}
                  size="small"
                  variant="outlined"
                  defaultValue="Shoe"
                /> */}
                <h5>Type</h5>
                <FormControl fullWidth>
                  <Select
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    sx={{
                      width: "100%",
                      color: "gray",
                      fontSize: "14px",
                    }}
                    size="small"
                    value={color}
                    onChange={handleChange}
                    // sx={{ "& .MuiSelect-icon": { top: 10 } }}
                    IconComponent={customSvg}
                  >
                    <MenuItem value={0}>Shoe</MenuItem>
                    <MenuItem value={1}>Jewellery</MenuItem>
                    <MenuItem value={2}>Electronics</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </Grid>
            {/* <Grid item sm={6}>
              <div>
                <h5>Variants</h5>
                <TextField
                  sx={{
                    margin: 0,
                    width: "100%",
                    "& .MuiInputBase-root": {
                      color: "gray",
                      fontSize: "14px",
                    },
                  }}
                  size="small"
                  variant="outlined"
                  defaultValue="Red"
                />
              </div>
            </Grid> */}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}
