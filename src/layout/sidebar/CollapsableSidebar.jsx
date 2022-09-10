import * as React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Collapse } from "@mui/material";
import { AdminSidebarItems, SidebarItems } from "./SidebarItems";
import { Link, NavLink, useLocation } from "react-router-dom";
// import logo from "../../assets/img/headericon.png";
import usendLogo from "../../assets/img/usendlogo.png";

import { ExpandMore, ExpandLess, Settings } from "@mui/icons-material";
import ModifiedMenu from "./ModifiedMenu";

const drawerWidth = "20.83%";

const isExpandedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "isExpand",
})(({ theme, isExpand }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(isExpand && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "isExpand",
})(({ theme, isExpand }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(isExpand && {
    ...isExpandedMixin(theme),
    "& .MuiDrawer-paper": isExpandedMixin(theme),
  }),
  ...(!isExpand && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function CollapsableSidebar({ sidebarUtil }) {
  // const isExpand = useSelector((navSelector) => navSelector.isExpand);
  const { sidebarExpand, setSidebarExpand } = sidebarUtil;

  const [sidebarLock, setSidebarLock] = React.useState(true);
  const [open, setOpen] = React.useState("");

  const location = useLocation().pathname.split("/")[2];
  const nestedLocation = useLocation().pathname.split("/")[3];

  const [active, setActive] = React.useState("");

  const handleExpand = (key) => {
    open ? setOpen("") : setOpen(key);
  };

  const handleActiveMenu = (menu) => {
    menu.nestedItem ? handleExpand(menu.key) : setActive(menu.text);
  };

  return (
    <Box
      sx={{
        width: "100%",
        margintop: "20px",
      }}
      onMouseEnter={() => setSidebarExpand(true)}
      onMouseLeave={() => !sidebarLock && setSidebarExpand(false)}
    >
      <CssBaseline />
      {!sidebarExpand && (
        <AppBar
          position="fixed"
          isExpand={sidebarExpand}
          sx={{
            width: "65px",
            background: "#fff",
            height: "39px",
            left: 0,
            marginTop: "40px",
          }}
        >
          <Toolbar sx={{ height: "39px", background: "white" }}>
            <IconButton
              color="inherit"
              aria-label="isExpand drawer"
              edge="start"
              sx={{
                marginRight: 5,
                ...(sidebarExpand && { display: "none" }),
              }}
            >
              <img
                src={usendLogo}
                alt="logo"
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              {/* <Topbar /> */}
            </IconButton>
          </Toolbar>
        </AppBar>
      )}
      <Drawer
        variant="permanent"
        isExpand={sidebarExpand}
        className="drawer_scrollbar"
        PaperProps={{ style: { marginTop: "40px" } }}
      >
        <DrawerHeader
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            marginLeft: "30px",
          }}
        >
          <img
            src={usendLogo}
            alt="logo"
            style={{ width: "40px", height: "40px", marginRight: 10 }}
          />
          <IconButton style={{ marginRight: "30px" }}>
            {sidebarLock ? (
              <KeyboardDoubleArrowRightIcon
                onClick={(e) => setSidebarLock(false)}
              />
            ) : (
              <KeyboardDoubleArrowLeftIcon
                onClick={(e) => setSidebarLock(true)}
              />
            )}
          </IconButton>
        </DrawerHeader>
        {/* <Divider /> */}
        <List
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <ModifiedMenu sidebarExpand={sidebarExpand} />

          {SidebarItems.map((sidebarItem, index) => {
            return (
              <>
                <Link
                  to={
                    sidebarItem.nestedItem === null &&
                    sidebarItem.link !== undefined &&
                    sidebarItem.link
                  }
                  key={index}
                  style={{
                    textDecoration: "none",
                    color: "inherit",
                    width: "90%",
                    marginBottom: "5px",
                  }}
                >
                  <ListItemButton
                    selected={location === sidebarItem.text.toLowerCase()}
                    onClick={() => handleActiveMenu(sidebarItem)}
                    sx={{
                      borderRadius: "5px",
                      padding: `${sidebarExpand ? `10px 30px` : "13px 20px"}`,
                      "&:hover, &:focus": {
                        color: "#8D40FF",
                        background: "rgba(142, 65, 254, 0.11)",
                        fontWeight: 600,
                      },
                      "&.Mui-selected": {
                        color: "#8D40FF",
                        background: "rgba(142, 65, 254, 0.11)",
                        fontWeight: 600,
                      },
                      "&:hover": {
                        "&.Mui-selected": {
                          color: "#8D40FF",
                          background: "rgba(142, 65, 254, 0.11)",
                          fontWeight: 600,
                        },
                      },
                    }}
                  >
                    <ListItemIcon sx={{ color: "inherit", minWidth: "2.2em" }}>
                      {sidebarItem.icon}
                    </ListItemIcon>
                    {sidebarExpand &&
                    location === sidebarItem.text.toLowerCase() ? (
                      <h5 style={{ fontSize: "14px", fontWeight: 600 }}>
                        {sidebarItem.text}
                      </h5>
                    ) : (
                      sidebarExpand && (
                        <h5 style={{ fontSize: "14px", fontWeight: 400 }}>
                          {sidebarItem.text}
                        </h5>
                      )
                    )}
                    {sidebarItem.text === "Sourcing List" ||
                    sidebarItem.text === "Products" ||
                    sidebarItem.text === "Extra" ||
                    sidebarItem.text === "Orders"
                      ? sidebarExpand &&
                        (open === sidebarItem.key ? (
                          <div style={{ position: "absolute", right: 10 }}>
                            {sidebarItem.isClose}
                          </div>
                        ) : (
                          <div style={{ position: "absolute", right: 10 }}>
                            {sidebarItem.isOpen}
                          </div>
                        ))
                      : ""}
                  </ListItemButton>
                  {sidebarItem.nestedItem !== null &&
                    sidebarItem.nestedItem.map((nestedItem, index) => {
                      return (
                        <Collapse
                          in={open === sidebarItem.key}
                          timeout="auto"
                          // unmountOnExit
                          key={index}
                        >
                          <Link
                            to={nestedItem.link}
                            key={index}
                            style={{
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            <List component="div" disablePadding>
                              <ListItemButton
                                onClick={() => handleActiveMenu(nestedItem)}
                                sx={{
                                  pl: 4,
                                  margin: "5px 0",
                                  borderRadius: "5px",
                                  "&:hover": {
                                    color: "#8D40FF",
                                    backgroundColor: "rgba(142, 65, 254, 0.11)",
                                  },
                                  padding: "10px 50px",
                                  "&.Mui-selected": {
                                    color: "#8D40FF",
                                    background: "rgba(142, 65, 254, 0.11)",
                                    fontWeight: 600,
                                  },
                                }}
                                selected={nestedLocation === nestedItem.text}
                              >
                                {open && (
                                  <h5
                                    style={{
                                      fontSize: "14px",
                                      fontWeight: 400,
                                    }}
                                  >
                                    {nestedItem.text}
                                  </h5>
                                )}
                              </ListItemButton>
                            </List>
                          </Link>
                        </Collapse>
                      );
                    })}
                </Link>
              </>
            );
          })}
          <div
            className="flexbox"
            style={{
              marginTop: "70px",
              marginBottom: "50px",
              width: "90%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <NavLink
              to="/customer/setting"
              className={(navData) => (navData.isActive ? "active" : "")}
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",

                width: "80%",
              }}
            >
              <div style={{ display: "flex" }}>
                <Settings style={{ marginRight: 5 }} />
                {sidebarExpand && (
                  <h5
                    style={{
                      fontSize: "14px",
                      fontWeight: 400,
                    }}
                  >
                    Settings
                  </h5>
                )}
              </div>
            </NavLink>
          </div>
        </List>
      </Drawer>
    </Box>
  );
}
