/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import styles from "../../../styles/customerStyles.module.css";
import ShipmentMethodContent from "./ShipmentMethodContent";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ModifiedSelectItem from "./ModifiedSelectItem";

export default function OrderExpandContent({ row }) {
  const [value, setValue] = React.useState("Select");
  const [age, setAge] = React.useState(1);
  const [open, setOpen] = React.useState(false);
  const itemChange = (event) => {
    setOpen(!open);
  };
  const getValue = (v) => {
    setValue(v);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item sm={12} className={styles.order_headers}>
          <div className="flexbox">
            <h6>
              From: <b>@BestSeller (1648)</b>
            </h6>
            <div className="flexbox">
              <h6> Shipping method: </h6>
              <div style={{ position: "relative", marginLeft: "5px" }}>
                <div
                  onClick={itemChange}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    position: "relative",
                    border: "1px solid #C1C1C1",
                    padding: "2px 8px",
                    borderRadius: "5px",
                    color: "#6b6b6b",
                    cursor: "pointer",
                  }}
                >
                  <p style={{ fontSize: "12px", marginRight: "5px" }}>
                    {value}
                  </p>
                  {open ? (
                    <KeyboardArrowUpIcon fontSize="small" />
                  ) : (
                    <KeyboardArrowDownIcon fontSize="small" />
                  )}
                </div>
                <ModifiedSelectItem
                  open={open}
                  setOpen={setOpen}
                  getValue={getValue}
                />
              </div>
            </div>
            <h6>
              Delivery Time: <b>5-12 days</b>
            </h6>
            <h6>
              Shipping cost: <b>$10.50</b>
            </h6>
            <h6>
              Product Cost: <b>$4.63</b>
            </h6>
            <h6>
              Total: <b>$15.13</b>
            </h6>
          </div>
        </Grid>
      </Grid>
      <div className="flexbox">
        <Box sx={{ margin: 1, width: "70%" }}>
          <Grid container spacing={8}>
            <Grid item sm={4.5}>
              <div className="flexbox">
                <img
                  src={row.img}
                  alt="image"
                  style={{ width: "55px", height: "51px" }}
                />
                <div>
                  <h5
                    style={{
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "26px",
                      color: "#212B36",
                    }}
                  >
                    Foundation Flip Flop
                  </h5>
                  <h6>
                    Category: <b>{row.category}</b>
                  </h6>
                </div>
              </div>
            </Grid>
            <Grid item sm={3}>
              <div>
                <div className="flexbox">
                  <h6 style={{ margin: 0 }}>Variant</h6>
                  <h5>{row.variant}</h5>
                </div>
                <div className="flexbox">
                  <h6>Color</h6>
                  <h5>{row.color}</h5>
                </div>
              </div>
            </Grid>
            <Grid item sm={4.5}>
              <div>
                <div className="flexbox">
                  <h6 style={{ margin: 0 }}>Invoice ID</h6>
                  <h5>{row.invoiceId}</h5>
                </div>
                <div className="flexbox">
                  <h6>Product ID</h6>
                  <h5>{row.productId}</h5>
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ minWidth: 60 }}>
          <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span style={{ fontSize: "12px" }}>Action</span>
              </MenuItem>
              <MenuItem value={10}>
                <span style={{ fontSize: "12px" }}>Fulfilled</span>
              </MenuItem>
              <MenuItem value={20}>
                <span style={{ fontSize: "12px" }}>In Transit</span>
              </MenuItem>
            </Select>
          </FormControl>
          <FormControl sx={{ m: 1, minWidth: 60 }} size="small">
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <span style={{ fontSize: "12px" }}>Mapping</span>
              </MenuItem>
              <MenuItem value={10}>
                <span style={{ fontSize: "12px" }}>Delivered</span>
              </MenuItem>
              <MenuItem value={20}>
                <span style={{ fontSize: "12px" }}>Unshipped</span>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
      </div>
    </div>
  );
}
