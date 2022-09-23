import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModifiedMenuItem from "./ModifiedMenuItem";

export default function ModifiedMenu() {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <div
        onClick={handleClick}
        style={{
          height: "24px",
          color: "#C1C1C1",
          backgroundColor: "white",
          border: "1px solid #B3B3B3",
          borderRadius: "3px",
          marginLeft: "20px",
        }}
      >
        {openMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
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
        <ModifiedMenuItem close={handleClose} itemName="Open Dispute" />
        <ModifiedMenuItem close={handleClose} itemName="Download Invoice" />
        <ModifiedMenuItem close={handleClose} itemName="Export Orders" />
      </Menu>
    </div>
  );
}
