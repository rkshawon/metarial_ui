import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModifiedMenuItem from "./ModifiedMenuItem";
import img from "../../portals/customer/assets/img.png";
import { Box } from "@mui/system";

export default function ModifiedMenu({ sidebarExpand }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div style={{ width: "90%", marginBottom: "20px" }}>
      {
        //       <div
        //         onClick={handleClick}
        //         style={{
        //           height: "24px",
        //           color: "#C1C1C1",
        //           backgroundColor: "white",
        //           border: "1px solid #B3B3B3",
        //           borderRadius: "3px",
        //           marginLeft: "10px",
        //         }}
        //       >
        //         {openMenu ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        //       </div>
      }
      <div
        onClick={handleClick}
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
          backgroundColor: sidebarExpand && "#F3EAFE",
          cursor: "pointer",
          height: "50px",
        }}
      >
        <img
          src={img}
          alt="logo"
          style={{
            width: "30px",
            height: "30px",
            marginLeft: sidebarExpand && "-25px",
            marginRight: sidebarExpand && "10px",
          }}
        />
        {sidebarExpand && (
          <div style={{ color: " #5F5F5F" }}>
            <div
              style={{
                fontSize: "15px",
                fontWeight: "700",
              }}
            >
              Pattrick Leach
            </div>
            <div style={{ fontSize: "10px", fontWeight: "500" }}>
              store.pat.shopify.com
            </div>
          </div>
        )}
      </div>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        sx={{ maxWidth: "250px" }}
      >
        <Box
          onClick={handleClose}
          sx={{
            display: "flex",
            padding: "10px 20px",
            alignItems: "center",
            "&:hover": {
              color: "#8D40FF",
              backgroundColor: "#F2E9FF",
            },
          }}
        >
          <img style={{ height: "25px", width: "25px" }} src={img} alt="" />
          <ModifiedMenuItem itemName="Shopify" />
        </Box>
        <Box
          onClick={handleClose}
          sx={{
            display: "flex",
            padding: "10px 20px",
            alignItems: "center",
            "&:hover": {
              color: "#8D40FF",
              backgroundColor: "#F2E9FF",
            },
          }}
        >
          <img style={{ height: "25px", width: "25px" }} src={img} alt="" />
          <ModifiedMenuItem itemName="Ali Express Ali Express Ali Express Ali Express Ali Express Ali Express" />
        </Box>{" "}
        <Box
          onClick={handleClose}
          sx={{
            display: "flex",
            padding: "10px 20px",
            alignItems: "center",
            "&:hover": {
              color: "#8D40FF",
              backgroundColor: "#F2E9FF",
            },
          }}
        >
          <img style={{ height: "25px", width: "25px" }} src={img} alt="" />
          <ModifiedMenuItem itemName="Shopify" />
        </Box>
      </Menu>
    </div>
  );
}
