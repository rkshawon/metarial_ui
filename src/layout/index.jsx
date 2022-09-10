import { Stack } from "@mui/material";
import React from "react";
// import Navbar from "./navbar/Topbar";
import Sidebar from './sidebar'

export default function AppLayout({ children }) {
  return (
    <main>
      {/* <Navbar /> */}
      <Stack direction="row" spacing={2} justifyContent="space-between">
        <Sidebar/>
        {children}
      </Stack>
      {//<Footer />
      }
    </main>
  );
}
