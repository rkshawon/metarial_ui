import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../../styles/customerStyles.module.css";
import OrderTrackingDataTable from "./OrderTrackingDataTable";
import ModifiedMenu from "../../components/ModifiedMenu";
import { InputAdornment, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import { chipColorDecisionMaker } from "../../../../utils/chipColorDecisionMaker";

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

export default function DisputeTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          sx={{ position: "relative", zIndex: 1 }}
          onChange={handleChange}
          aria-label="basic tabs example"
          inkBarStyle={{ backgroundColor: "#000" }}
        >
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: value === 0 && "white",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              >
                {chipColorDecisionMaker("All")}
                All
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: value === 1 && "white",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              >
                {chipColorDecisionMaker("Waiting")}
                In Transit
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: value === 2 && "white",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              >
                {chipColorDecisionMaker("Processing")}
                Pickable Orders
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: value === 3 && "white",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              >
                {chipColorDecisionMaker("Processing")}
                Delivered
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: value === 4 && "white",
                  borderRadius: "5px",
                  padding: "3px",
                }}
              >
                {chipColorDecisionMaker("Processing")}
                Failed
              </div>
            }
            {...a11yProps(2)}
          />
          <>
            <div
              style={{ position: "absolute", zIndex: 3, right: 20, top: 12 }}
            >
              <div className="flexbox">
                <ModifiedMenu />
              </div>
            </div>
            <div
              className={styles.order_filter_right_tab}
              style={{ position: "absolute", zIndex: 3, right: 20, top: 50 }}
            ></div>
          </>
        </Tabs>
        {/* <div className={styles.order_filter_right_tab}>
          <ul>
            <li>Fulfill Orders</li>
            <li>Open Dispute</li>
            <li>Download Invoice</li>
            <li>Export Orders</li>
          </ul>
        </div> */}
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <TextField
            sx={{ width: "100%" }}
            size="small"
            // sx={{ marginBottom: "10px" }}
            placeholder="Search products"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
          />
        </div>
        {/* <OrderDataTable /> */}
        <OrderTrackingDataTable />
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
