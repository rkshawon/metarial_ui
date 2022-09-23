/* eslint-disable react/destructuring-assignment */
import { Grid } from "@mui/material";
import { useState } from "react";
import Topbar from "../components/Topbar";
import CollapsableSidebar from "./sidebar/CollapsableSidebar";
// import AdminSidebar from "./sidebar/AdminSidebar";

function AppLayout({ children }) {
  const [sidebarExpand, setSidebarExpand] = useState(true);

  return (
    <Grid container style={{ height: "100vh", overflowY: "hidden" }}>
      <Grid item xs={12}>
        <Topbar />
      </Grid>
      <Grid
        item
        xs={sidebarExpand ? 2 : 0.5}
        style={{ transition: "all 0.5s ease-in-out" }}
      >
        <CollapsableSidebar sidebarUtil={{ sidebarExpand, setSidebarExpand }} />
      </Grid>
      <Grid
        item
        xs={sidebarExpand ? 10 : 11.5}
        style={{
          height: "100vh",
          overflowY: "scroll",
          transition: "all 0.5s ease-in-out",
          paddingBottom: "150px",
        }}
        className="hide_scrollbar"
      >
        <main
          style={{
            transition: "all 0.5s ease-in-out",
            // display: "flex",
            // flexDirection: "column",
            // alignItems: "center",
            width: "100%",
            padding: "0px 30px",
            // maxWidth: "1250px",
          }}
        >
          <div>{children}</div>
        </main>
      </Grid>
    </Grid>
  );
}

export default AppLayout;
