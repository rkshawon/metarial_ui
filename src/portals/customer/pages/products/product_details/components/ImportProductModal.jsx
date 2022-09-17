import {
  Autocomplete,
  Backdrop,
  Box,
  Button,
  Divider,
  Fade,
  Grid,
  InputAdornment,
  Modal,
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
  // height: "550px",
  // overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  padding: "20px 30px",
};

export default function ImportProductModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="purple_outlined"
        sx={{ width: "auto", borderRadius: "5px", marginLeft: "15px" }}
      >
        Map Product
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
          <Box sx={style} className="">
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
            <div style={{ height: "350px", overflowY: "scroll" }}>
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
                        <Autocomplete
                          size="small"
                          sx={{
                            backgroundColor: "white",
                            borderRadius: "5px",
                            width: "100%",
                          }}
                          id="free-solo-demo"
                          freeSolo
                          options={products.map((option) => option.title)}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              placeholder="Search for your existing store product variants"
                              InputProps={{
                                ...params.InputProps,

                                startAdornment: (
                                  <InputAdornment position="start">
                                    <SearchIcon sx={{ fontSize: "20px" }} />
                                  </InputAdornment>
                                ),
                              }}
                            />
                          )}
                        />
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
