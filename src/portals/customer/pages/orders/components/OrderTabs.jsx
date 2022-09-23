import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../styles/customerStyles.module.css";
import {
  FormControlLabel,
  Grid,
  InputAdornment,
  Pagination,
  PaginationItem,
  Stack,
  TextField,
} from "@mui/material";
import {
  Search,
} from "@mui/icons-material";
import OrderTableCell from "./OrderTableCell";
import { chipColorDecisionMaker } from "../../../utils/chipColorDecisionMaker";
import DatePicker from "./DatePicker";
import ModifiedMenu from "./ModifiedMenu";
import ModifiedSwitch from "../../../../../components/ModifiedSwitch.jsx";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import OrderFulfilmentModal from "./OrderFulfilmentModal";

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
      <Box>
        <Tabs
          value={value}
          sx={{
            position: "relative",
            zIndex: 1,
            "& .Mui-Selected": {
              color: "red",
            },
          }}
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
            {/* <div style={{ position: "absolute", zIndex: 3, right: 20 }}> */}
            <div
              className="flexbox"
              style={{
                position: "absolute",
                right: 20,
                top: "50%",
                transform: "translate(0%, -50%)",
              }}
            >
              <span
                className={styles.cost_title}
                style={{
                  color: "rgba(140, 140, 140, 0.85)",
                  margin: "0 10px 0 20px",
                }}
              >
                Auto Fulfilment
              </span>
              <FormControlLabel
                control={
                  <div style={{ marginRight: "10px" }}>
                    <ModifiedSwitch />
                  </div>
                }
              />
              <ModifiedMenu />
            </div>
          </>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container sx={{ padding: " 0px 15px", marginTop: "15px" }}>
          <Grid item xs={9}>
            <Grid container>
              <Grid item xs={5}>
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
              <Grid item xs={7} align="left">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                    <DatePicker title="Start Date" sx={{"& .MuiInputBase-input-MuiOutlinedInput-input":{
                      fontSize:"12px"
                    }}}/>
                  </div>
                  <DatePicker title="End Date" />
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={3} align="right">
            <OrderFulfilmentModal button="fulfill all" />
          </Grid>
        </Grid>
        {/* <OrderDataTable /> */}
        <OrderTableCell />
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
          padding: "20px 0 0 0",
          borderRadius: "8px",
          display: "flex",
          justifyContent: "center",
          margin: "10px 0",
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
