import {
  Autocomplete,
  Box,
  Button,
  Collapse,
  Divider,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import MapProductAutoComplete from "../../product_details/components/MapProductAutoComplete";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import img from "../../../../assets/3.png";
import { customSvg } from "../../../../../../utils/customSvg";
import CloseIcon from "@mui/icons-material/Close";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import styles from "../../../../styles/customerStyles.module.css";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

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
];

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "100%",
  // maxWidth: "1200px",
  // minWidth: "800px",
  height: "550px",
  // overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  padding: "20px 30px",
};

export default function MapLiveProduct() {
  const [products, setProducts] = React.useState([]);
  const [action, setAction] = React.useState("");
  const [quantity, setQuantity] = React.useState("");

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };
  const Placeholder2 = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };
  const handleChange2 = (event) => {
    setQuantity(event.target.value);
  };

  const getValue = (value) => {
    if (!products.includes(value)) {
      setProducts([...products, value]);
    } else {
      const index = products.indexOf(value);
      products.splice(index, 1);
      setProducts([...products]);
    }
  };

  const [open, setOpen] = React.useState(true);

  const handleClick = (key) => {
    open ? setOpen("") : setOpen(key);
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
            <h4 style={{ fontSize: "20px" }}>Supplier Product</h4>
            <div>
              <MapProductAutoComplete getValue={getValue} />
            </div>
          </Grid>
        </Grid>
      </div>
      <Divider />

      {products.length === 0 && (
        <div className={styles.no_product_found}>
          <h2>No Products Found</h2>
        </div>
      )}
      <Box sx={{ marginTop: "20px" }}>
        {products.map((product, index) => (
          <Box key={index} sx={{ display: "flex", alignItems: "center" }}>
            <div style={{ width: "100%" }}>
              <ListItemButton
                onClick={() => handleClick(product)}
                sx={{ background: "#eee", marginBottom: "5px" }}
              >
                <ListItemText primary={product} />
                {open === product ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse
                in={open === product}
                timeout="auto"
                unmountOnExit
                sx={{ width: "100%" }}
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <div
                      style={{
                        height: "auto",
                        overflowY: "scroll",
                        width: "100%",
                      }}
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
                                justifyContent: "space-between",
                                marginTop: "10px",
                              }}
                            >
                              <div
                                key={index}
                                style={{
                                  padding: "5px",
                                  width: "45%",
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
                                <span
                                  style={{
                                    color: "#0faba8",
                                    fontWeight: "600",
                                  }}
                                >
                                  {p.color}
                                </span>
                                <h6>{p.id}</h6>
                              </div>
                              <ArrowForwardIcon sx={{ color: "#9d9d9d" }} />
                              <div
                                style={{
                                  padding: "1px 10px",
                                  width: "45%",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                  backgroundColor: "#f0f0f0",
                                  borderRadius: "10px",
                                }}
                              >
                                <FormControl
                                  sx={{ m: 1, width: "100%" }}
                                  size="small"
                                >
                                  <Select
                                    labelId="demo-select-small"
                                    id="demo-select-small"
                                    value={action}
                                    displayEmpty
                                    onChange={handleChange}
                                    renderValue={
                                      action !== ""
                                        ? undefined
                                        : () => (
                                            <Placeholder>
                                              Select Variants
                                            </Placeholder>
                                          )
                                    }
                                  >
                                    {dummyProducts.map((product, index) => {
                                      return (
                                        <MenuItem value={index}>
                                          {product.title}
                                        </MenuItem>
                                      );
                                    })}
                                  </Select>
                                </FormControl>
                                <FormControl
                                  sx={{ m: 1, width: "40%" }}
                                  size="small"
                                >
                                  <Select
                                    labelId="demo-select"
                                    id="demo-select"
                                    value={quantity}
                                    displayEmpty
                                    onChange={handleChange2}
                                    renderValue={
                                      quantity !== ""
                                        ? undefined
                                        : () => (
                                            <Placeholder2>
                                              Quantity
                                            </Placeholder2>
                                          )
                                    }
                                  >
                                    <MenuItem value={10}>1</MenuItem>
                                    <MenuItem value={20}>2</MenuItem>
                                    <MenuItem value={30}>3</MenuItem>
                                    <MenuItem value={40}>4</MenuItem>
                                    <MenuItem value={50}>5</MenuItem>
                                  </Select>
                                </FormControl>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </ListItemButton>
                </List>
              </Collapse>
            </div>
            <DeleteOutlineIcon
              onClick={() => {
                getValue(product);
              }}
              sx={{
                marginLeft: "5px",
                cursor: "pointer",
                color: "gray",
              }}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
}
