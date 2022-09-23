import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../../styles/customerStyles.module.css";
import OrderTrackingDataTable from "./OrderTrackingDataTable";
import ModifiedMenu from "../../components/ModifiedMenu";
import {
  Grid,
  InputAdornment,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
} from "@mui/material";
import { Search } from "@mui/icons-material";
import { chipColorDecisionMaker } from "../../../../utils/chipColorDecisionMaker";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DatePicker from "../../components/DatePicker";

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
    <Box
      sx={{
        paddingBottom: "20px",
        width: "100%",
        marginTop: "30px",
        boxShadow:
          " 0px 2px 2px rgb(145 158 171 / 20%), 0px 12px 24px -4px rgb(145 158 171 / 12%)",
      }}
    >
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
                  fontWeight: value === 0 && "700",
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
                  fontWeight: value === 1 && "700",
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
                  fontWeight: value === 2 && "700",
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
                  fontWeight: value === 3 && "700",
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
                  fontWeight: value === 4 && "700",
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
        {/* <div>
          <TextField
            sx={{ width: "98%", margin: "10px 0 0 1%" }}
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
        </div> */}
        <Grid container sx={{ padding: " 0px 20px", marginTop: "15px" }}>
          <Grid item xs={6}>
            <TextField
              size="small"
              sx={{ width: "100%" }}
              placeholder="Search Order"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={6} display="flex" alignItems="center">
            <h6
              style={{
                marginLeft: "40px",
                width: "150px",
                textAlign: "right",
              }}
            >
              Search By
            </h6>
            <div style={{ margin: "0px 20px" }}>
              <DatePicker title="Start Date" />
            </div>
            <DatePicker title="End Date" />
          </Grid>
        </Grid>
        {/* <OrderDataTable /> */}
        <OrderTrackingDataTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <div
        style={{
          bottom: 10,
          left: "45%",
          padding: "5px 0",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <Stack
          spacing={2}
          sx={{
            backgroundColor: "#fff",
            boxShadow:
              "rgb(145 158 171 / 20%) 0px 0px 2px 0px, rgb(145 158 171 / 12%) 0px 12px 24px -4px",
            padding: "8px 15px",
            borderRadius: "5px",
          }}
        >
          <Pagination
            count={10}
            sx={{
              "&.MuiPaginationItem-root": {
                color: "blue",
              },
            }}
            renderItem={(item) => (
              <PaginationItem
                components={{
                  previous: ArrowBackIcon,
                  next: ArrowForwardIcon,
                }}
                {...item}
              />
            )}
          />
        </Stack>
      </div>
    </Box>
  );
}
