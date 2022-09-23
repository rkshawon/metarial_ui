import {
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { customSvg } from "../../../../../../utils/customSvg";
import ProductTags from "./ProductTags";
import ModifiedSelectItem from "../../../orders/components/ModifiedSelectItem";

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
        sx={{
          display: "flex",
          marginTop: "20px",
          height: "auto",
        }}
        spacing={2}
      >
        <Grid item sm={3}>
          <img
            src={data.product.img}
            alt="import product"
            style={{ width: "100%", height: "220px" }}
          />
        </Grid>
        <Grid item sm={9}>
          <div className="flexbox">
            <div style={{ marginBottom: "10px" }}>
              <h4 style={{ fontSize: "18px" }}>{data.product.title}</h4>
              <h6 style={{ marginTop: "10px" }}>
                by:{" "}
                <b style={{ color: "#3366FF" }}>Bashundara Official Store</b>
              </h6>
            </div>
            <Link to="/customer/products">
              <Button variant="deepbluemini" sx={{ marginRight: "20px" }}>
                View original product
              </Button>
            </Link>
          </div>
          <Grid
            container
            spacing={2}
            sx={{ width: "100%", flexDirection: "row" }}
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
            <Grid item sm={6}>
              <div>
                <h5>Shipping Method</h5>

                <ModifiedSelectItem />

                {/* <FormControl fullWidth>
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
                    <MenuItem value={0}>Select method</MenuItem>
                    <MenuItem value={1}>Delivered</MenuItem>
                    <MenuItem value={2}>Unshipped</MenuItem>
                    <MenuItem value={3}>Processing</MenuItem>
                  </Select>
                </FormControl> */}
              </div>
            </Grid>
            <Grid item sm={6}>
              <div>
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
            <Grid item sm={6}>
              <div>
                <h5>Tags</h5>
                <ProductTags names={["New Arrival", "Latest", "Brand", "New Collection", "Super"]}/>
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
