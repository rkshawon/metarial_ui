import styles from "../styles/globalStyles.module.css";
import ProfilePic from "../assets/img/dummyImg/profile.png";
import { Icon } from "@iconify/react";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  Menu,
  MenuItem,
  Select,
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useState } from "react";
import LanguageIcon from "@mui/icons-material/Language";

export default function Topbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [language, setLanguage] = useState(1);

  const handleChange = (event) => {
    setLanguage(event.target.value);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <div className={styles.header}>Connect Stores to U-SEND</div>
      <div className={styles.navbar}>
        {/* <div className={styles.logo}>
          <img src={HeaderLogo} alt=''/>
        </div> */}
        <div className={styles.icons}>
          <div style={{ display: "flex", alignItem: "center" }}>
            {/* <Icon icon="clarity:world-line" color="#9d9d9d" width="20" /> */}

            <Select
              IconComponent={(props) => (
                <LanguageIcon
                  sx={{
                    fontSize: "18px",
                    color: "#9d9d9d",
                    marginLeft: "-25px",
                    marginRight: "5px",
                  }}
                />
              )}
              id="demo-simple-select"
              value={language}
              onChange={handleChange}
              sx={{
                height: "26px",
                margin: "0 5px",
                fontSize: "14px",
                color: "#9d9d9d",
              }}
            >
              <MenuItem sx={{ fontSize: "14px", color: "#9d9d9d" }} value={1}>
                English
              </MenuItem>
              <MenuItem sx={{ fontSize: "14px", color: "#9d9d9d" }} value={2}>
                Dutch
              </MenuItem>
            </Select>
          </div>
          <div style={{ display: "flex", alignItem: "center" }}>
            <Icon icon="akar-icons:bell" color="#9d9d9d" width="20" />
          </div>

          {/* <img src={ProfilePic} alt="" />
          <Icon icon="carbon:logout" color="#9d9d9d" width="20" /> */}

          <div
            onClick={handleClick}
            style={{
              display: "flex",
              alignItems: "center",
              borderLeft: "1px solid #9d9d9d",
              paddingLeft: "10px",
            }}
          >
            <Icon icon="iconoir:profile-circled" color="#9d9d9d" width="20" />
            <small style={{ margin: "0 5px", fontSize: "14px" }}>Lou</small>
            {open ? (
              <KeyboardArrowUpIcon sx={{ color: "#9d9d9d" }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ color: "#9d9d9d" }} />
            )}
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem
              sx={{ fontSize: "14px", color: "#9d9d9d" }}
              onClick={handleClose}
            >
              Profile
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", color: "#9d9d9d" }}
              onClick={handleClose}
            >
              Setting
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", color: "#9d9d9d" }}
              onClick={handleClose}
            >
              Add stores
            </MenuItem>
            <MenuItem
              sx={{ fontSize: "14px", color: "#9d9d9d" }}
              onClick={handleClose}
            >
              Logout
            </MenuItem>
          </Menu>
        </div>
      </div>
    </Box>
  );
}
