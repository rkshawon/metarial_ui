import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../../styles/customerStyles.module.css";
import ShippingDataTable from "./ShippingDataTable";

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

export default function ProductDetailsTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          sx={{
            position: "relative",
            "& .Mui-selected": {
              backgroundColor: "#fff",
              color: "#9155FD",
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "#1890FF",
              color: "#1890FF",
            },
          }}
          onChange={handleChange}
          aria-label="basic tabs example"
          inkBarStyle={{ backgroundColor: "#000" }}
        >
          <Tab label="Shipping" {...a11yProps(0)} />
          <Tab label="Variants" {...a11yProps(1)} />
          <>
            <div style={{ position: "absolute", right: 20, top: 10 }}>
              <span
                className={styles.cost_title}
                style={{ color: "rgba(140, 140, 140, 0.85)" }}
              >
                Processing Time: 1-3 Days
              </span>
            </div>
          </>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ShippingDataTable title="USA"/>
        <div style={{margin:"20px 0px"}}>
          <ShippingDataTable title="International"/>
        </div>
        <ShippingDataTable title="Express Shipping "/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        2
      </TabPanel>
    </Box>
  );
}
