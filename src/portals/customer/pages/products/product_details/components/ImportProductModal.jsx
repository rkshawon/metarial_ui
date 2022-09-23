import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  FormControl,
  Grid,
  InputAdornment,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import styles from "../../../../styles/customerStyles.module.css";
import img from "../../../../assets/3.png";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import SearchIcon from "@mui/icons-material/Search";
import MapProductAutoComplete from "./MapProductAutoComplete";

const products = [
  { title: "Product 1" },
  { title: "Product 2" },
  { title: "Product 3" },
  { title: "Product 4" },
  { title: "Product 5" },
  { title: "Product 6" },
  { title: "Product 7" },
  {
    title: "Product 8",
  },
  { title: "Product 9" },
  { title: "Product 10" },
];
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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "55%",
  // maxWidth: "1200px",
  // minWidth: "800px",
  height: "90%",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  padding: "20px 30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function ImportProductModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [action, setAction] = useState("");

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };

  const handleChange = (event) => {
    setAction(event.target.value);
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="purple"
        sx={{
          width: "auto",
          borderRadius: "5px",
          marginLeft: "15px",
          marginTop: "0",
        }}
      >
        Product Mapping
      </Button>
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
          <Box sx={style} className={styles.hide_scrollbar}>
            <div style={{ width: "100%" }}>
              <h2 className={styles.welcome_popup}>Map Product</h2>
              <div style={{ margin: "40px 40px 20px 40px" }}>
                <Grid container spacing={2} sx={{ textAlign: "left" }}>
                  <Grid item xs={6.8}>
                    <h4 style={{ fontSize: "20px" }}>Supplier Product</h4>
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
                  <Grid item xs={5.2}>
                    <h4 style={{ fontSize: "20px", marginBottom: "10px" }}>
                      Shopify Product
                    </h4>
                    <div>
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
                    </div>
                  </Grid>
                </Grid>
              </div>
              <Divider />
              <div
                style={{ height: "350px", overflowY: "scroll" }}
                className={styles.hide_scrollbar}
              >
                <div
                  style={{
                    marginTop: "40px",
                  }}
                >
                  {dummyProduct.map((p, index) => {
                    return (
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-evenly",
                          marginTop: "5px",
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
                            padding: "10px 20px",
                            width: "40%",
                            display: "flex",
                            justifyContent: "space-evenly",
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
                                      <Placeholder>Select Variants</Placeholder>
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
                          {/* <Autocomplete
                          size="small"
                          freeSolo
                          id="free-solo-2-demo"
                          options={top100Films.map((option) => option.title)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Search for your existing store product variants"
                              InputProps={{
                                ...params.InputProps,
                                type: "search",
                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        /> */}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div style={{ textAlign: "right", marginRight: "40px" }}>
                <Button variant="lightblue" sx={{ width: "auto" }}>
                  Save
                </Button>
              </div>
            </div>
            {/* topbar  */}
            {/* 
            <Button
              variant="lightblue"
              sx={{
                width: "auto",
                borderRadius: "5px",
              }}
            >
              Map
            </Button> */}
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
