import React, { useState } from "react";
import ModifiedMenuItem from "../../../../../layout/sidebar/ModifiedMenuItem";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Menu } from "@mui/material";

export default function TimingDropdown() {
  const [dataValue, setDataValue] = useState("Last 7 days");
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeDataValue = (value) => {
    setDataValue(value);
  };

  return (
    <div>
      <div style={{ fontSize: "14px", color: "#2E2F39" }}>
        <div>
          <div
            className="flexbox"
            style={{ cursor: "pointer" }}
            onClick={handleClick}
          >
            <span
              style={{
                color: "#2E2F39",
                fontSize: "13px",
                fontWeight: "600",
              }}
            >
              {dataValue}
            </span>

            <ExpandMoreIcon />
          </div>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <ModifiedMenuItem
              close={handleClose}
              changeDataValue={changeDataValue}
              itemName="Today"
            />
            <ModifiedMenuItem
              close={handleClose}
              changeDataValue={changeDataValue}
              itemName="Last 7 days"
            />
            <ModifiedMenuItem
              close={handleClose}
              changeDataValue={changeDataValue}
              itemName="Last 14 days"
            />
            <ModifiedMenuItem
              close={handleClose}
              changeDataValue={changeDataValue}
              itemName="Last 30 days"
            />
            <ModifiedMenuItem
              close={handleClose}
              changeDataValue={changeDataValue}
              itemName="Last year"
            />
          </Menu>
        </div>
      </div>
    </div>
  );
}
