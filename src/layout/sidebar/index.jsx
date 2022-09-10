import {
  Box,
  Collapse,
  createTheme,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { AdminSidebarItems } from "./SidebarItems";
import AddIcon from "@mui/icons-material/Add";
import { Link } from "react-router-dom";

const theme = createTheme({
  overrides: {
    MuiListItemButton: {
      // For ListItem, change this to MuiListItem
      root: {
        "&$selected": {
          // this is to refer to the prop provided by M-UI
          backgroundColor: "black", // updated backgroundColor
        },
      },
    },
  },
});

export default function Sidebar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(0);

  const handleExpand = (key) => {
    open ? setOpen(0) : setOpen(key);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        flex="1.5"
        sx={{ display: { xs: "none", sm: "block", marginTop: "1em" } }}
      >
        <List
          sx={{ width: "90%", maxWidth: 260, marginLeft: "1em" }}
          component="nav"
          aria-labelledby="nested-list-subheader"
        >
          <ListItemButton
            sx={{
              border: "0.8px dashed #000000",
              borderRadius: "5px",
              marginBottom: "2em",
              height: "44px",
            }}
          >
            <ListItemIcon sx={{ color: "inherit", minWidth: "2.2em" }}>
              <AddIcon />
            </ListItemIcon>
            <ListItemText
              primary="Connect my store"
              color="rgba(0, 0, 0, 0.85)"
            />
          </ListItemButton>

          {AdminSidebarItems.map((sidebarItem, index) => {
            return (
              <Link
                to={sidebarItem.link}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItemButton
                  selected={active === sidebarItem.key}
                  onClick={() => {
                    setActive(sidebarItem.key);
                    if (sidebarItem.nestedItem) {
                      handleExpand(sidebarItem.key);
                    }
                  }}
                  sx={{
                    borderRadius: "5px",
                    "&:hover": {
                      color: "#8D40FF",
                      backgroundColor: "rgba(142, 65, 254, 0.11)",
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: "inherit", minWidth: "2.2em" }}>
                    {sidebarItem.icon}
                  </ListItemIcon>
                  <ListItemText primary={sidebarItem.text} />
                </ListItemButton>

                {sidebarItem.nestedItem !== null &&
                  sidebarItem.nestedItem.map((nestedItem, index) => {
                    return (
                      <Collapse
                        in={open === sidebarItem.key}
                        timeout="auto"
                        unmountOnExit
                        key={index}
                      >
                        <List component="div" disablePadding>
                          <ListItemButton
                            sx={{
                              pl: 4,
                              "&:hover": {
                                color: "#8D40FF",
                                backgroundColor: "rgba(142, 65, 254, 0.11)",
                              },
                            }}
                          >
                            <ListItemIcon sx={{ color: "inherit" }}>
                              {nestedItem.icon}
                            </ListItemIcon>
                            <ListItemText primary={nestedItem.text} />
                          </ListItemButton>
                        </List>
                      </Collapse>
                    );
                  })}
              </Link>
            );
          })}
        </List>
      </Box>
    </ThemeProvider>
  );
}
