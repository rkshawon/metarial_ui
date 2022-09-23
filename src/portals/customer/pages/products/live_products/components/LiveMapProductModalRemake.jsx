import { Backdrop, Box, Button, Fade, Modal } from "@mui/material";
import { useState } from "react";
import styles from "../../../../styles/customerStyles.module.css";
import img from "../../../../assets/3.png";

import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import MapLiveProduct from "./MapLiveProduct";
import MapLiveSingleProduct from "./MapLiveSingleProduct";

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
  height: "90%",
  overflowY: "scroll",
  textAlign: "center",
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 24,
  padding: "20px 30px",
};

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function LiveMapProductModalRemake() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Button onClick={handleOpen} variant="deepbluemini">
        Map
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
            <Box
              sx={{
                borderBottom: 1,
                borderColor: "divider",
                marginTop: "15px",
              }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                <Tab
                  label={
                    <div
                      style={{
                        display: "flex",
                        fontWeight: value === 0 && "700",
                      }}
                    >
                      Basic
                    </div>
                  }
                  {...a11yProps(0)}
                />
                <Tab
                  label={
                    <div
                      style={{
                        display: "flex",
                        fontWeight: value === 1 && "700",
                      }}
                    >
                      Bundle
                    </div>
                  }
                  {...a11yProps(1)}
                />
              </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
              <MapLiveSingleProduct />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <MapLiveProduct />
            </TabPanel>
            <div
              style={{
                textAlign: "right",
                marginRight: "20px",
              }}
            >
              <Button
                variant="lightblue"
                sx={{ width: "auto", margin: "30px 0" }}
              >
                Save
              </Button>
            </div>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}
