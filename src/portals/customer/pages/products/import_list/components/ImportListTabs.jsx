import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import styles from "../../../../styles/customerStyles.module.css";
import {
  Button,
  CardActionArea,
  FormControl,
  MenuItem,
  Select,
  TextareaAutosize,
} from "@mui/material";
import { Add, DeleteOutline } from "@mui/icons-material";
import { chipColorDecisionMaker } from "../../../../utils/chipColorDecisionMaker";
import ProductTabMenu from "./ProductTabMenu";
import VariantsTabMenu from "./VariantsTabMenu";
import ProductImageGallery from "../../../../../admin/pages/sourcingList/productPage/components/ProductImageGallery";
import ImagesTabMenu from "./ImagesTabMenu";
import DescriptionTabMenu from "./DescriptionTabMenu";

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

export default function ImportListTabs({ data }) {
  const [value, setValue] = React.useState(0);

  const [action, setAction] = React.useState("");
  const handleChangeAction = (event) => {
    setAction(event.target.value);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const Placeholder = ({ children }) => {
    return <span style={{ color: "gray", fontSize: "14px" }}>{children}</span>;
  };

  return (
    <Box sx={{ width: "100%", marginTop: "30px" }}>
      <Box sx={{}}>
        <Tabs
          value={value}
          sx={{
            position: "relative",
            zIndex: 1,
            "& .MuiTabs-flexContainer": {
              padding: "10px 0px",
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
                }}
              >
                Product
              </div>
            }
            {...a11yProps(0)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                }}
              >
                Description
              </div>
            }
            {...a11yProps(1)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                }}
              >
                {chipColorDecisionMaker("Variants")}
                Variants
              </div>
            }
            {...a11yProps(2)}
          />
          <Tab
            label={
              <div
                style={{
                  display: "flex",
                }}
              >
                {chipColorDecisionMaker("Images")}
                Images
              </div>
            }
            {...a11yProps(2)}
          />
          <>
            <div
              style={{ position: "absolute", zIndex: 3, right: 20, top: -10 }}
            >
              <div className="flexbox">
                {/* <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
                  <Select
                    defaultValue={action}
                    onChange={handleChangeAction}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    renderValue={
                      action !== ""
                        ? undefined
                        : () => <Placeholder>Actions</Placeholder>
                    }
                  >
                    <MenuItem value="">
                      <span style={{ fontSize: "12px" }}>Mapping</span>
                    </MenuItem>
                    <MenuItem value={10}>
                      <span style={{ fontSize: "12px" }}>Delivered</span>
                    </MenuItem>
                    <MenuItem value={20}>
                      <span style={{ fontSize: "12px" }}>Unshipped</span>
                    </MenuItem>
                  </Select>
                </FormControl> */}
                <DeleteOutline sx={{marginRight:"20px", cursor:"pointer", color:"gray"}}/>
                <Button
                  variant="deepblue"
                  sx={{ fontSize: "12px" }}
                  startIcon={<Add sx={{ color: "#fff" }} />}
                >
                  Import to store
                </Button>
              </div>
            </div>
            {/* <div
              className={styles.order_filter_right_tab}
              style={{ position: "absolute", zIndex: 3, right: 20, top: 50 }}
            ></div> */}
          </>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <ProductTabMenu data={data} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <DescriptionTabMenu />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <VariantsTabMenu data={data} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <ImagesTabMenu data={data} />
      </TabPanel>
    </Box>
  );
}
