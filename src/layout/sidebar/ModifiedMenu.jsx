import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ModifiedMenuItem from "./ModifiedMenuItem";
import img from "../../portals/customer/assets/img.png";
import { Box } from "@mui/system";
import AddBusinessIcon from "@mui/icons-material/AddBusiness";

const dummyStore = [
  {
    name: "Shopify Shopify",
    img: img,
  },
  {
    name: "Ali Express",
    img: img,
  },
  {
    name: "Daraz",
    img: img,
  },
];

export default function ModifiedMenu({ sidebarExpand }) {
  const [anchorEl, setAnchorEl] = useState(null);
  const openMenu = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const style = {
    display: "flex",
    padding: "10px 20px",
    alignItems: "center",
    "&:hover": {
      color: "#8D40FF",
      backgroundColor: "#F2E9FF",
    },
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
        sx={{ maxWidth: "225px" }}
      >
        {dummyStore.map((store, index) => {
          return (
            <Box onClick={handleClose} sx={style}>
              <img
                style={{ height: "25px", width: "25px" }}
                src={store.img}
                alt=""
              />
              <ModifiedMenuItem itemName={store.name} />
            </Box>
          );
        })}
        <Box
          onClick={handleClose}
          sx={{
            width: "80%",
            height: "40px",
            display: "flex",
            padding: "10px 20px",
            marginLeft: "10%",
            marginTop: "10px",
            alignItems: "center",
            border: "1px dashed lightgray",
            borderRadius: "5px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#eeeeee",
            },
          }}
        >
          <AddBusinessIcon sx={{ color: "gray" }} />
          <MenuItem
            sx={{
              display: "flex",
              fontSize: "14px",
              fontWeight: "600",
              color: "gray",
              "&:hover": {
                backgroundColor: "#eeeeee",
              },
            }}
          >
            Add Store
          </MenuItem>
        </Box>
      </Menu>
    </div>
  );
}
