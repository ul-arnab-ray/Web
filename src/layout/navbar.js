import React from "react";
import {
  Avatar,
  Badge,
  Box,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import SmsOutlinedIcon from "@mui/icons-material/SmsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";

import ProfileImage from "../assets/images/User_logo.svg";

const Navbar = () => {
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      sx={{
        display: "flex",
        justifyContent: "space-between",
        paddingY: "15px",
        background: "#FFFFFF",
        width: "100%",
        gap: "20px",
        height: { xs: "100px", sm: "50px" },
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: "30px",
          ml: "20px",
        }}
      >
        <Box>
          <MenuIcon
            sx={{
              cursor: "pointer",
              fontSize: { xs: "30px", sm: "30px" },
            }}
          />
        </Box>
        <TextField
          name="search"
          placeholder="Search anything..."
          fullWidth
          autoComplete="off"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "rgb(92,95,100)" }} />
              </InputAdornment>
            ),
            sx: {
              background: "#FEFEFE",
              color: "white",
              borderRadius: "5px",
            },
          }}
          slotProps={{
            inputLabel: {
              sx: {
                color: "red", // Placeholder color
              },
            },
          }}
          sx={{
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused": {
                fieldset: {
                  borderColor: "rgb(37,37,37)",
                },
              },
            },
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          mr: { sm: "20px" },
        }}
      >
        <Box
          sx={{
            backgroundColor: "#EAEBFF",
            borderRadius: "25%",
            px: "10px",
            py: "8px",
            pt: "9px",
            cursor: "pointer",
          }}
        >
          <Badge
            badgeContent={21}
            sx={{
              "& .MuiBadge-badge": {
                color: "#EAEBFF",
                border: "2.62px solid #EAEBFF",
                backgroundColor: "#252762",
                width: 20,
                height: 20,
                derRadius: "50%",
                top: -8,
                left: 15,
                fontSize: "10px",
                ransform: "translateX(-50%)",
              },
            }}
          >
            <NotificationsNoneOutlinedIcon sx={{ color: "#252762" }} />
          </Badge>
        </Box>
        <Box
          sx={{
            backgroundColor: "#EAEBFF",
            borderRadius: "25%",
            px: "10px",
            py: "8px",
            pt: "10px",
            cursor: "pointer",
          }}
        >
          <Badge
            badgeContent={53}
            sx={{
              "& .MuiBadge-badge": {
                color: "#EAEBFF",
                border: "2.62px solid #EAEBFF",
                backgroundColor: "#252762",
                width: 20,
                height: 20,
                derRadius: "50%",
                top: -8,
                left: 15,
                fontSize: "10px",
                ransform: "translateX(-50%)",
              },
            }}
          >
            <SmsOutlinedIcon sx={{ color: "#252762" }} />
          </Badge>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FF5B5B26",
            borderRadius: "25%",
            px: "10px",
            py: "8px",
            pt: "9px",
            cursor: "pointer",
          }}
        >
          <Badge
            badgeContent={19}
            sx={{
              "& .MuiBadge-badge": {
                color: "#EAEBFF",
                border: "2.62px solid #EAEBFF",
                backgroundColor: "#FF5B5B",
                width: 20,
                height: 20,
                derRadius: "50%",
                top: -8,
                left: 15,
                fontSize: "10px",
                ransform: "translateX(-50%)",
              },
            }}
          >
            <SettingsOutlinedIcon sx={{ color: "#FF5B5B" }} />
          </Badge>
        </Box>

        <Box>
          <Avatar alt="Arnab" src={ProfileImage} />
        </Box>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Typography>Hi, Saikumar</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;
