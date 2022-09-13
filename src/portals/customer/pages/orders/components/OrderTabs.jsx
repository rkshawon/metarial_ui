import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../styles/customerStyles.module.css";
import OrderDataTable from "./OrderDataTable";
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  InputAdornment,
  InputLabel,
  ListItemText,
  Select,
  Switch,
  TextField,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { dummyOrders } from "../dispute_list/dummyData";
import {
  ArrowDownward,
  KeyboardArrowUp,
  Padding,
  Search,
  SearchOutlined,
} from "@mui/icons-material";
import OrderTableCell from "./OrderTableCell";
import { chipColorDecisionMaker } from "../../../utils/chipColorDecisionMaker";
import { customSvg } from "../../../../../utils/customSvg";
import DatePicker from "./DatePicker";
import ModifiedMenu from "./ModifiedMenu";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch.jsx";

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

export default function OrderTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [personName, setPersonName] = React.useState([]);

  const handleChange2 = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
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
                  fontWeight: value === 0 && "700",
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
                  fontWeight: value === 1 && "700",
                }}
              >
                {chipColorDecisionMaker("Waiting")}
                Waiting
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  fontWeight: value === 2 && "700",
                }}
              >
                {chipColorDecisionMaker("Processing")}
                Processing
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  fontWeight: value === 3 && "700",
                }}
              >
                {chipColorDecisionMaker("Shipped")}
                Shipped
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                  fontWeight: value === 4 && "700",
                }}
              >
                {chipColorDecisionMaker("Failed")}
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
                <span
                  className={styles.cost_title}
                  style={{
                    color: "rgba(140, 140, 140, 0.85)",
                    marginRight: "10px",
                  }}
                >
                  Auto Fulfilment
                </span>
                <ModifiedSwitch />
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
        <div className="flexbox">
          <TextField
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
          <div className="flexbox">
            <h6>Search By</h6>
            <div style={{ margin: "0px 20px" }}>
              <DatePicker title="Start Date" />
            </div>
            <DatePicker title="End Date" />
          </div>
        </div>
        {/* <OrderDataTable /> */}
        <OrderTableCell />
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
