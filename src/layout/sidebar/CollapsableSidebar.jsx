import * as React from "react";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { useSelector, useDispatch } from "react-redux";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { Collapse } from "@mui/material";
import { AdminSidebarItems, SidebarItems } from "./SidebarItems";
import { Link, NavLink, useLocation } from "react-router-dom";
// import logo from "../../assets/img/headericon.png";
import usendLogo from "../../assets/img/usendlogo.png";

import { Settings } from "@mui/icons-material";
import ModifiedMenu from "./ModifiedMenu";
import { setOpen } from "../../redux/slices/navSlice";
import { useState } from "react";

const drawerWidth = "16.67%";

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
  width: `calc(${theme.spacing(10)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(10)} + 1px)`,
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
  const open = useSelector((navSelector) => navSelector.open);
  const dispatch = useDispatch();

  const handleExpand = (menu) => {
    open ? dispatch(setOpen("")) : dispatch(setOpen(menu.key));
  };

  const handleNestedMenu = (menu) => {
    dispatch(setOpen(menu.key));
  };

  const { sidebarExpand, setSidebarExpand } = sidebarUtil;

  const [sidebarLock, setSidebarLock] = React.useState(true);

  const location = useLocation().pathname.split("/")[2];
  const nestedLocation = useLocation().pathname.split("/")[3];

  const [isOpen, setIsOpen] = useState(false);

  console.log(open);
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
            width: "81px",
            background: "#fff",
            height: "39px",
            left: 0,
            marginTop: "40px",
            boxShadow: "none",
            border: "1px dashed lightgray",
          }}
        >
          <Toolbar
            sx={{
              height: "39px",
              background: "white",
              // transition: "all 0.5s ease-in-out",
            }}
          >
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
        PaperProps={{
          style: {
            marginTop: "40px",
            borderRightStyle: "dashed",
          },
        }}
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
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <ListItemButton
                    selected={location === sidebarItem.text.toLowerCase()}
                    onClick={() => handleExpand(sidebarItem)}
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
                      // "&:hover": {
                      //   "&.Mui-selected": {
                      //     color: "#8D40FF",
                      //     background: "rgba(142, 65, 254, 0.11)",
                      //     fontWeight: 600,
                      //   },
                      // },
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        color: "inherit",
                        minWidth: "2.2em",
                        marginLeft: `${!sidebarExpand ? "5px" : "0px"}`,
                      }}
                    >
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
                        <>
                          {sidebarExpand && (
                            <Collapse
                              in={open === sidebarItem.key}
                              timeout="auto"
                              // unmountOnExit
                              key={index}
                            >
                              <NavLink
                                activeClassName="active"
                                to={nestedItem.link}
                                key={index}
                                style={{
                                  textDecoration: "none",
                                  color: "inherit",
                                }}
                              >
                                <List component="div" disablePadding>
                                  <ListItemButton
                                    onClick={() =>
                                      handleNestedMenu(sidebarItem)
                                    }
                                    sx={{
                                      pl: 4,
                                      margin: "5px 0",
                                      borderRadius: "5px",
                                      "&:hover": {
                                        color: "#8D40FF",
                                        backgroundColor: "#fff",
                                      },
                                      padding: "10px 50px",
                                      "&.Mui-selected": {
                                        color: "#8D40FF",
                                        background: "#fff",
                                        fontWeight: 600,
                                      },
                                    }}
                                    selected={
                                      nestedLocation !== undefined
                                        ? nestedLocation === nestedItem.route
                                        : location ===
                                          nestedItem.text.toLowerCase()
                                    }
                                  >
                                    {open && (
                                      <div
                                        style={{
                                          display: "flex",
                                          alignItems: "center",
                                        }}
                                      >
                                        <div
                                          style={{
                                            width: "10PX",
                                            height: "10px",
                                            marginRight: "15px",
                                          }}
                                        >
                                          {nestedLocation ===
                                          nestedItem.route ? (
                                            <div
                                              style={{
                                                width: "8px",
                                                height: "8px",
                                                borderRadius: "50%",
                                                background: "#8D40FF",
                                                transition:
                                                  "all 0.3s ease-in-out",
                                              }}
                                            ></div>
                                          ) : (
                                            <div
                                              style={{
                                                width: "5px",
                                                height: "5px",
                                                borderRadius: "50%",
                                                background: "gray",
                                              }}
                                            ></div>
                                          )}
                                        </div>

                                        <h5
                                          style={{
                                            fontSize: "14px",
                                            margin: 0,
                                            fontWeight:
                                              nestedLocation ===
                                                nestedItem.route ||
                                              location ===
                                                nestedItem.text.toLowerCase()
                                                ? 600
                                                : 400,
                                          }}
                                        >
                                          {nestedItem.text}
                                        </h5>
                                      </div>
                                    )}
                                  </ListItemButton>
                                </List>
                              </NavLink>
                            </Collapse>
                          )}
                        </>
                      );
                    })}
                </Link>
              </>
            );
          })}
        </List>
        <div
          className="flexbox"
          style={{
            display: "flex",
            marginBottom:"50px",
            justifyContent: `${sidebarExpand ? "flex-start" : "center"}`,
            // marginLeft: `${sidebarExpand ? "5%" : "0"}`,
            position: `${open ? 'relative' : 'absolute'}`,
            bottom: 20,
            width: "100%",
            // marginRight:"20px"
          }}
        >
          <ListItemButton
              selected={location === "setting"}
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
               width:"100%",
               margin:"0 5%"
              }}
            >
          <Link
            to="/customer/setting"
            style={{
              textDecoration: "none",
              color: "inherit",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
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
          </Link>
            </ListItemButton>
        </div>
      </Drawer>
    </Box>
  );
}
