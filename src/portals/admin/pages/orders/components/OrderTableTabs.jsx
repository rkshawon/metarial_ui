import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../styles/adminStyles.module.css";
import OrderTable from "./OrderTable";
import { useState } from "react";

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

export default function OrderTableTabs() {
  const [value, setValue] = useState(0);

  const chipColorDecisionMaker = (type) => {
    if (type === "All") {
      return (
        <div
          style={{
            background: "rgba(174, 205, 255, 0.5)",
            color: "#1890FF",
          }}
          className={styles.order_tabs}
        >
          25
        </div>
      );
    }
    if (type === "Waiting") {
      return (
        <div
          style={{
            background: "rgba(184, 255, 132, 0.5)",
            color: "#6FD226",
          }}
          className={styles.order_tabs}
        >
          17
        </div>
      );
    }
    if (type === "Processing") {
      return (
        <div
          style={{
            background: "rgba(255, 219, 125, 0.5)",
            color: "#EEB31B",
          }}
          className={styles.order_tabs}
        >
          21
        </div>
      );
    }
    if (type === "Shipped") {
      return (
        <div
          style={{
            background: "rgba(145, 85, 253, 0.25)",
            color: "#9025FA",
          }}
          className={styles.order_tabs}
        >
          9
        </div>
      );
    } else {
      return (
        <div
          style={{
            background: "#D9D9D9",
            color: "#5C5C5C",
          }}
          className={styles.order_tabs}
        >
          3
        </div>
      );
    }
  };
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "99%", marginTop: "5em" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          inkBarStyle={{ backgroundColor: "#000" }}
        >
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {chipColorDecisionMaker("All")}
                All
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {chipColorDecisionMaker("Waiting")}
                Waiting
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {chipColorDecisionMaker("Processing")}
                Processing
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {chipColorDecisionMaker("Shipped")}
                Shipped
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div style={{ display: "flex", alignItems: "center" }}>
                {chipColorDecisionMaker("Failed")}
                Failed
              </div>
            }
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <OrderTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
