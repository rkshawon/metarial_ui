import { Button, Grid, Rating } from "@mui/material";
import React from "react";
import AppLayout from "../../../../../layout/DashboardLayout";
import styles from "../../../styles/customerStyles.module.css";
import ProductImageGallery from "./components/ProductImageGallery";
import ProductInfo from "./components/ProductInfo";
import { useLocation, useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductDescription from "./components/ProductDescription";
import ImportProductModal from "./components/ImportProductModal";
import LiveMapProductModal from "../live_products/components/LiveMapProductModal";
import SingleProduct from "./components/SingleProduct";

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

export default function ProductDetails() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const location = useLocation().pathname.split("/")[3];
  console.log(location);
  return (
    <AppLayout>
      <div className={styles.products} style={{ padding: "0 5%" }}>
        <div
          style={{
            borderRadius: "5px",
            padding: "0 20px",
            boxShadow:
              "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
          }}
        >
          <div style={{ display: "flex" }}>
            <div onClick={() => navigate(-1)}>
              <ArrowBackIcon
                sx={{
                  fontSize: "22px",
                  color: "#9d9d9d",
                  cursor: "pointer",
                  marginTop: "6px",
                }}
              />
            </div>
            <div style={{ margin: "0 0 0 20px" }}>
              <h4>Product Details</h4>
              <div style={{ display: "flex", alignItems: "center" }}>
                <h6 className={styles.profile_title} style={{ margin: "0px" }}>
                  Product -
                </h6>
                <h6 style={{ color: "#919EAB", marginLeft: "10px" }}>
                  Foundations Matte Flip Flop
                </h6>
              </div>
            </div>
          </div>
          <Grid container spacing={4} sx={{ marginTop: "20px" }}>
            <Grid item xs={4}>
              <ProductImageGallery />
            </Grid>
            <Grid item xs={8}>
              <Box sx={{ width: "100%" }}>
                <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    aria-label="basic tabs example"
                  >
                    <Tab label="Product" {...a11yProps(0)} />
                    <Tab label="Description" {...a11yProps(1)} />
                  </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                  <ProductInfo />
                  {location !== "live-products" && (
                    <Button
                      variant="lightblue"
                      sx={{
                        width: "auto",
                        borderRadius: "5px",
                        marginTop: "0",
                      }}
                    >
                      Add to Import List
                    </Button>
                  )}
                  {location !== "live-products" ? (
                    <ImportProductModal />
                  ) : (
                    <LiveMapProductModal />
                  )}
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <ProductDescription />
                </TabPanel>
              </Box>
            </Grid>
          </Grid>
        </div>
      </div>
    </AppLayout>
  );
}
