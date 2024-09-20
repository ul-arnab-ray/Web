import React from "react";
import Navbar from "./navbar";
import SideNavbar from "./sideNavbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Box>
        <SideNavbar />
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
