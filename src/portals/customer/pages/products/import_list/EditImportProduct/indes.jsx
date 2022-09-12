import {
  Button,
  Grid,
  Rating,
  Tab,
  Tabs,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "../../../../styles/customerStyles.module.css";
import ProductImageGallery from "../../../products/product_details/components/ProductImageGallery";
import AppLayout from "../../../../../../layout/DashboardLayout";
import EditProductInfo from "./components/EditProductInfo";
import { Box } from "@mui/system";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import ProductDescription from "../../product_details/components/ProductDescription";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

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

export default function EditImportProduct() {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <AppLayout>
      <div className={styles.products}>
        <div onClick={() => navigate(-1)} style={{ marginBottom: "20px" }}>
          <ArrowBackIcon
            sx={{ fontSize: "22px", color: "#9d9d9d", cursor: "pointer" }}
          />
        </div>
        <div>
          <h4>Imported Product Details</h4>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h6 className={styles.profile_title} style={{ margin: "0px" }}>
              Product -
            </h6>
            <h6 style={{ color: "#919EAB", marginLeft: "10px" }}>
              Foundations Matte Flip Flop
            </h6>
          </div>
        </div>
        <Grid container spacing={4} sx={{ marginTop: "20px" }}>
          <Grid item xs={4}>
            <ProductImageGallery />
          </Grid>
          <Grid item xs={8}>
            <EditProductInfo />
          </Grid>
        </Grid>
        {/* Product statistics */}
        <div style={{ margin: "30px 0px" }}>
          <h3
            className={styles.product_info_title}
            style={{ margin: "20px 0px" }}
          >
            Product Statistics
          </h3>
          <Grid container spacing={4}>
            <Grid item sm={4}>
              <div>
                <Rating name="read-only" value={4} readOnly />
                <h5>4 / 5</h5>
                <h6>3 reviews</h6>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div>
                <h5 style={{ fontSize: "16px" }}>Import to store</h5>
                <h5>Corex shop</h5>
                <p>This product has been added to Corex shop stores</p>
              </div>
            </Grid>
            <Grid item sm={4}>
              <div>
                <h5 style={{ fontSize: "16px" }}>Orders</h5>
                <h5>14</h5>
                <p>
                  This product has been ordered through Bestdealer and/or
                  AliExpress 14 times in the past 30 days.
                </p>
              </div>
            </Grid>
          </Grid>
        </div>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Product" {...a11yProps(0)} />
              <Tab label="Description" {...a11yProps(1)} />
              <Tab label="Variants" {...a11yProps(2)} />
              <Tab label="Images" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            Item One
          </TabPanel>
          <TabPanel value={value} index={1}>
            <ProductDescription />
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Four
          </TabPanel>
        </Box>
        <div style={{ textAlign: "right" }}>
          <Button variant="lightblue" sx={{ width: "auto" }}>
            Save changes
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
