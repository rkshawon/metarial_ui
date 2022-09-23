import {
  Box,
  Divider,
  FormControl,
  Grid,
  MenuItem,
  Select,
} from "@mui/material";
import React from "react";
import MapProductAutoComplete from "../../product_details/components/MapProductAutoComplete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import img from "../../../../assets/3.png";
import styles from "../../../../styles/customerStyles.module.css";

const dummyProducts = [
  { title: "Foundations Matte Flip Flop 1" },
  { title: "Foundations Matte Flip Flop 2" },
  { title: "Foundations Matte Flip Flop 3" },
  { title: "Foundations Matte Flip Flop 4" },
  { title: "Foundations Matte Flip Flop 5" },
  { title: "Foundations Matte Flip Flop 6" },
  { title: "Foundations Matte Flip Flop 7" },
  {
    title: "Foundations Matte Flip Flop 8",
  },
  { title: "Foundations Matte Flip Flop 9" },
  { title: "Foundations Matte Flip Flop 10" },
];

const dummyProduct = [
  {
    img: img,
    color: "red",
    id: "64200_RB5I5",
  },
  {
    img: img,
    color: "Green",
    id: "64200_IOGJI5",
  },
  {
    img: img,
    color: "Blue",
    id: "64200_IXtJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
  {
    img: img,
    color: "red",
    id: "64200_OGJI5",
  },
];

export default function MapLiveSingleProduct() {
  const [action, setAction] = React.useState("");

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  return (
    <Box sx={{ marginTop: "15px" }}>
      <div style={{ margin: "0px 0px 5px 0px" }}>
        <Grid container spacing={2} sx={{ textAlign: "left" }}>
          <Grid item xs={7}>
            <h4 style={{ fontSize: "20px" }}>Shopify Product</h4>
            <div>
              {/* <MapProductAutoComplete /> */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <img
                  src={img}
                  alt=""
                  style={{
                    height: "35px",
                    width: "35px",
                    marginRight: "15px",
                    borderRadius: "8px",
                  }}
                />
                <div style={{ width: "100%" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: " center",
                      width: "100%",
                    }}
                  >
                    <p
                      style={{
                        whiteSpace: "nowrap",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      Foundations Matte Flip Flop 3
                    </p>
                  </Box>
                  <h5>$23.90</h5>
                </div>
              </Box>
            </div>
          </Grid>
          <Grid item xs={5}>
            <h4 style={{ fontSize: "20px", marginBottom:"10px" }}>Supplier Product</h4>
            <MapProductAutoComplete />
            <div style={{ display: "flex", alignItems: "center" }}>
              <img
                src={img}
                alt=""
                style={{
                  height: "35px",
                  width: "35px",
                  marginRight: "20px",
                  borderRadius: "8px",
                }}
              />
              <div>
                <h6 style={{ marginBottom: 10 }}>
                  Foundations Matte Flip Flop
                </h6>
                <h5>$23.89</h5>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />
      <div
        style={{ height: "400px", overflowY: "scroll" }}
        className={styles.hide_scrollbar}
      >
        <div
          style={{
            marginTop: "5px",
          }}
        >
          {dummyProduct.map((p, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                  marginTop: "10px",
                }}
              >
                <div
                  key={index}
                  style={{
                    padding: "5px",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                    height: "58px",
                  }}
                >
                  {/* <span>{p.img}</span> */}
                  <img
                    src={p.img}
                    alt=""
                    style={{
                      height: "35px",
                      width: "35px",
                      borderRadius: "8px",
                    }}
                  />
                  <span style={{ color: "#0faba8", fontWeight: "600" }}>
                    {p.color}
                  </span>
                  <h6>{p.id}</h6>
                </div>
                <ArrowForwardIcon sx={{ color: "#9d9d9d" }} />
                <div
                  style={{
                    padding: "1px 10px",
                    width: "40%",
                    display: "flex",
                    justifyContent: "space-evenly",
                    alignItems: "center",
                    backgroundColor: "#f0f0f0",
                    borderRadius: "10px",
                  }}
                >
                  <FormControl sx={{ m: 1, width: "100%" }} size="small">
                    <Select
                      labelId="demo-select-small"
                      id="demo-select-small"
                      value={action}
                      displayEmpty
                      onChange={handleChange}
                      renderValue={
                        action !== ""
                          ? undefined
                          : () => <Placeholder>Select Variants</Placeholder>
                      }
                    >
                      {dummyProducts.map((product, index) => {
                        return (
                          <MenuItem value={index}>{product.title}</MenuItem>
                        );
                      })}
                      {/* <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem> */}
                    </Select>
                  </FormControl>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Box>
  );
}
