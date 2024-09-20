import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const TopSection = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            p: "5px",
            gap: 0.5,
            borderRadius: "8px",
            border: "0.5px solid #89B0EB",
          }}
        >
          <CalendarMonthOutlinedIcon />
          <Typography>This Year</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            p: "5px",
            gap: 0.5,
            borderRadius: "8px",
            border: "0.5px solid #89B0EB",
          }}
        >
          <Typography>Location</Typography>
          <KeyboardArrowDownIcon />
        </Box>
        <Box
          sx={{
            display: "flex",
            cursor: "pointer",
            backgroundColor: "#FFFFFF",
            p: "5px",
            gap: 0.5,
            borderRadius: "8px",
            border: "0.5px solid #89B0EB",
          }}
        >
          <Typography>Status</Typography>
          <KeyboardArrowDownIcon />
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {value?.map((data, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              cursor: "pointer",
              backgroundColor: "#4318FF",
              p: "5px",
              gap: 0.5,
              borderRadius: "8px",
              border: "0.5px solid #89B0EB",
              mt: { xs: "2px", md: "0px" },
            }}
          >
            <Typography sx={{ color: "#FFFFFF" }}>{data}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default TopSection;
