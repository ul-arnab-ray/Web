import React from "react";
import { Box, Typography } from "@mui/material";

const TopBox = ({ value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        // flexDirection: "column",
        justifyContent: "center",
        backgroundColor: "#FFFFFF",
        borderRadius: "10px",
        px: "25px",
        py: "15px",
        // height: "185px",
        width: { xs: "80%", sm: "40%", md: "40%" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          pb: "5px",
          borderBottom: "1px solid #CCCCCC80",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            background: "#F4F7FE",
            borderRadius: "10px",
            p: "8px",
            mr: "10px",
          }}
        >
          <Box
            component="img"
            src={value.img}
            sx={{
              width: "30px",
              height: "30px",
            }}
          />
        </Box>
        <Box>
          <Typography sx={{ color: "#808080" }}>{value?.title}</Typography>
          <Typography
            sx={{ fontSize: { xs: "18px", md: "20px" }, fontWeight: 600 }}
          >
            {value?.body}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", mt: "10px", gap: 2 }}>
        <Box
          component="img"
          src={value.graphImg}
          sx={{
            width: "60px",
            height: "45px",
          }}
        />
        <Box>
          <Typography sx={{ color: "#808080" }}>
            <span style={{ color: value?.colr }}>{value?.amount}</span> more
          </Typography>
          <Typography sx={{ color: "#808080" }}>{value?.text}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default TopBox;
