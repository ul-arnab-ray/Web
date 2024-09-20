import React from "react";
import { Box } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

import HomeIcon from "../assets/icons/Home_icon.svg";
import ServiceProviderIcon from "../assets/icons/ServiceProvider_icon.svg";
import InboxIcon from "../assets/icons/Inbox_icon.svg";
import HelpIcon from "../assets/icons/Help_icon.svg";
import SettingsIcon from "../assets/icons/Settings_filled_icon.svg";

const SideNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isHomeActive = location.pathname === "/";
  const isServiceActive = location.pathname === "/service";

  const handleServiceProviderClick = () => {
    navigate("/service");
  };

  const handleHomeClick = () => {
    navigate("/");
  };

  return (
    <Box
      sx={{
        position: "fixed",
        top: { xs: "130px", sm: "80px" },
        pt: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 2.5,
        height: "95vh",
        width: { xs: "60px", sm: "70px" },
        background: "#FFFFFF",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          width: "100%",
          gap: 5,
        }}
      >
        <Box
          sx={{
            position: "relative",
            height: "50px",
            width: "100%",
            background: isHomeActive ? "#0000001A" : "#FFFFFF",
            pt: "12px",
          }}
          onClick={handleHomeClick}
        >
          <Box
            component="img"
            src={HomeIcon}
            sx={{
              height: "35px",
              width: "100%",
              cursor: "pointer",
            }}
          />
          {isHomeActive && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "2.5px",
                backgroundColor: "black",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            />
          )}
        </Box>

        <Box
          sx={{
            position: "relative",
            height: "50px",
            width: "100%",
            background: isServiceActive ? "#0000001A" : "#FFFFFF",
            pt: "12px",
            cursor: "pointer",
          }}
          onClick={handleServiceProviderClick}
        >
          <Box
            component="img"
            src={ServiceProviderIcon}
            sx={{
              height: "35px",
              width: "100%",
            }}
          />
          {isServiceActive && (
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: "2.5px",
                backgroundColor: "black",
                borderTopRightRadius: "30px",
                borderBottomRightRadius: "30px",
              }}
            />
          )}
        </Box>
        <Box
          component="img"
          src={InboxIcon}
          sx={{
            // borderRadius: "50%",
            height: "35px",
            width: "100%",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          borderLeft: "1px solid rgb(115,148,254)",
          width: "100%",
          gap: 4,
          pb: "100px",
        }}
      >
        <Box
          component="img"
          src={HelpIcon}
          sx={{
            height: "40px",
            width: "100%",
          }}
        />
        <Box
          component="img"
          src={SettingsIcon}
          sx={{
            height: "30px",
            width: "100%",
          }}
        />
      </Box>
    </Box>
  );
};

export default SideNavbar;
